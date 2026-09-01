import { NextResponse } from "next/server";

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 5;
const requests = new Map();

function clean(value, max = 200) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function getClientKey(request) {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "anonymous";
}

function allowedByRateLimit(key) {
  const now = Date.now();
  const entry = requests.get(key);
  if (!entry || now - entry.start > RATE_LIMIT_WINDOW_MS) {
    requests.set(key, { start: now, count: 1 });
    return true;
  }
  if (entry.count >= RATE_LIMIT_MAX) return false;
  entry.count += 1;
  return true;
}

export async function POST(request) {
  const key = getClientKey(request);
  if (!allowedByRateLimit(key)) {
    return NextResponse.json({ message: "Too many requests. Please try again shortly." }, { status: 429 });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Invalid request." }, { status: 400 });
  }

  const name = clean(body.name, 80);
  const phone = clean(body.phone, 20);
  const email = clean(body.email, 120);
  const date = clean(body.date, 20);
  const message = clean(body.message, 600);
  const consent = body.consent === true || body.consent === "on";

  if (!name || !phone || !date || !consent) {
    return NextResponse.json({ message: "Please complete all required fields." }, { status: 400 });
  }

  if (!/^[+0-9()\-\s]{7,20}$/.test(phone)) {
    return NextResponse.json({ message: "Please enter a valid phone number." }, { status: 400 });
  }

  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ message: "Please enter a valid email address." }, { status: 400 });
  }

  // IMPORTANT: This demo deliberately does not store health data.
  // Connect this validated payload to a HIPAA/DPDP-appropriate CRM,
  // secure email provider or appointment platform before production use.
  console.info("Appointment request received", {
    name,
    phoneLast4: phone.slice(-4),
    hasEmail: Boolean(email),
    date,
    hasMessage: Boolean(message),
  });

  return NextResponse.json({
    message: "Thank you. Your request was received. The clinic will contact you to confirm the appointment.",
  });
}
