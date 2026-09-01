"use client";

import { useState } from "react";

const services = [
  {
    icon: "♥",
    title: "Preventive Cardiology",
    text: "Risk assessment, lifestyle guidance and long-term heart health planning.",
  },
  {
    icon: "⌁",
    title: "Interventional Cardiology",
    text: "Evidence-based evaluation and minimally invasive cardiac procedures.",
  },
  {
    icon: "◎",
    title: "Heart Failure Care",
    text: "Structured diagnosis, medication optimization and ongoing monitoring.",
  },
  {
    icon: "⌇",
    title: "Hypertension Clinic",
    text: "Personalized blood-pressure management and cardiovascular risk reduction.",
  },
  {
    icon: "◈",
    title: "Second Opinion",
    text: "Clear, independent review of reports, scans and proposed treatment plans.",
  },
  {
    icon: "✦",
    title: "Executive Heart Check",
    text: "Comprehensive cardiac screening designed around your age and risk factors.",
  },
];

const testimonials = [
  {
    quote:
      "The consultation was calm, detailed and easy to understand. Every option was explained before we decided the next step.",
    name: "Patient testimonial",
  },
  {
    quote:
      "From appointment booking to follow-up, the entire experience felt organized and reassuring.",
    name: "Patient testimonial",
  },
  {
    quote:
      "A very professional approach with enough time given to questions and concerns.",
    name: "Patient testimonial",
  },
];

function ArrowIcon() {
  return <span aria-hidden="true">→</span>;
}

export default function Home() {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  async function submitAppointment(event) {
    event.preventDefault();
    setLoading(true);
    setStatus("");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const response = await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message || "Unable to submit");
      setStatus(result.message);
      form.reset();
    } catch (error) {
      setStatus(error.message || "Something went wrong. Please call the clinic.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main>
      <header className="site-header">
        <div className="container nav-wrap">
          <a className="brand" href="#home" aria-label="Home">
            <span className="brand-mark">AK</span>
            <span>
              <strong>Dr. Arjun Kumar</strong>
              <small>Consultant Cardiologist</small>
            </span>
          </a>

          <nav className="nav-links" aria-label="Primary navigation">
            <a href="#about">About</a>
            <a href="#services">Specialities</a>
            <a href="#experience">Experience</a>
            <a href="#testimonials">Stories</a>
            <a href="#contact">Contact</a>
          </nav>

          <a className="button button-small" href="#appointment">
            Book Appointment
          </a>
        </div>
      </header>

      <section id="home" className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Advanced cardiac care • Chennai</p>
            <h1>
              Your heart deserves <span>clarity, confidence and care.</span>
            </h1>
            <p className="hero-text">
              Personalized cardiology focused on accurate diagnosis, thoughtful treatment and a clear explanation of every step.
            </p>
            <div className="hero-actions">
              <a className="button" href="#appointment">
                Book a Consultation <ArrowIcon />
              </a>
              <a className="text-link" href="tel:+919876543210">
                Call +91 98765 43210
              </a>
            </div>
            <div className="trust-row">
              <div>
                <strong>20+</strong>
                <span>Years of experience</span>
              </div>
              <div>
                <strong>15K+</strong>
                <span>Patients consulted</span>
              </div>
              <div>
                <strong>4.9/5</strong>
                <span>Patient satisfaction</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="portrait-card">
              <img src="/doctor-placeholder.svg" alt="Doctor portrait placeholder" />
              <div className="availability-card">
                <span className="status-dot" />
                <div>
                  <strong>Appointments available</strong>
                  <small>Mon–Sat • 9:00 AM–6:00 PM</small>
                </div>
              </div>
            </div>
            <div className="floating-note note-one">Evidence-based care</div>
            <div className="floating-note note-two">Clear second opinions</div>
          </div>
        </div>
      </section>

      <section className="logo-strip" aria-label="Affiliations">
        <div className="container logo-row">
          <span>Senior Consultant</span>
          <span>Cardiac Sciences</span>
          <span>Preventive Heart Care</span>
          <span>Clinical Excellence</span>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container split-grid">
          <div className="section-heading sticky-heading">
            <p className="eyebrow">Meet your doctor</p>
            <h2>Medicine with expertise. Consultation with empathy.</h2>
          </div>
          <div className="about-copy">
            <p className="lead">
              Dr. Arjun Kumar is a consultant cardiologist focused on preventive, diagnostic and interventional cardiac care.
            </p>
            <p>
              The goal of every consultation is simple: understand the problem thoroughly, explain it in plain language and choose the most appropriate next step together.
            </p>
            <div className="credentials-grid">
              <div><strong>MBBS, MD, DM</strong><span>Cardiology</span></div>
              <div><strong>FACC</strong><span>Professional fellowship</span></div>
              <div><strong>20+ years</strong><span>Clinical experience</span></div>
              <div><strong>Chennai</strong><span>Consultation location</span></div>
            </div>
            <a className="text-link" href="#experience">View experience <ArrowIcon /></a>
          </div>
        </div>
      </section>

      <section id="services" className="section section-soft">
        <div className="container">
          <div className="section-heading centered">
            <p className="eyebrow">Specialities</p>
            <h2>Complete cardiac care, from prevention to treatment.</h2>
            <p>Replace these sample services with the doctor’s actual areas of expertise.</p>
          </div>
          <div className="card-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <span className="service-icon">{service.icon}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <a href="#appointment">Request consultation <ArrowIcon /></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="section dark-section">
        <div className="container experience-grid">
          <div>
            <p className="eyebrow light">Why patients choose us</p>
            <h2>Clinical decisions built around the person, not just the report.</h2>
            <p>
              Thoughtful evaluation, transparent communication and coordinated follow-up are at the center of the experience.
            </p>
          </div>
          <div className="feature-list">
            <div><span>01</span><div><h3>Time to understand</h3><p>Consultations designed to hear symptoms, history and concerns before deciding on treatment.</p></div></div>
            <div><span>02</span><div><h3>Evidence-led recommendations</h3><p>Treatment options explained with benefits, limitations and alternatives.</p></div></div>
            <div><span>03</span><div><h3>Continuity of care</h3><p>Clear next steps, follow-up planning and coordination when additional specialists are required.</p></div></div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="section">
        <div className="container">
          <div className="section-heading centered narrow">
            <p className="eyebrow">Patient experiences</p>
            <h2>Care that patients can understand and trust.</h2>
          </div>
          <div className="testimonial-grid">
            {testimonials.map((item, index) => (
              <figure className="testimonial-card" key={index}>
                <div className="stars" aria-label="5 out of 5 stars">★★★★★</div>
                <blockquote>“{item.quote}”</blockquote>
                <figcaption>{item.name}</figcaption>
              </figure>
            ))}
          </div>
          <p className="disclaimer">Sample testimonials for layout only. Replace with verified, consented patient feedback before publishing.</p>
        </div>
      </section>

      <section id="appointment" className="section appointment-section">
        <div className="container appointment-grid">
          <div className="appointment-copy">
            <p className="eyebrow">Book an appointment</p>
            <h2>Take the next step toward better heart health.</h2>
            <p>
              Submit your details and the clinic team can contact you to confirm an available slot.
            </p>
            <div className="contact-points">
              <a href="tel:+919876543210"><strong>Call</strong><span>+91 98765 43210</span></a>
              <a href="mailto:appointments@example.com"><strong>Email</strong><span>appointments@example.com</span></a>
              <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer"><strong>WhatsApp</strong><span>Message the clinic</span></a>
            </div>
          </div>

          <form className="appointment-form" onSubmit={submitAppointment}>
            <label>
              Full name
              <input name="name" type="text" autoComplete="name" required maxLength={80} />
            </label>
            <div className="field-row">
              <label>
                Phone number
                <input name="phone" type="tel" autoComplete="tel" required maxLength={20} />
              </label>
              <label>
                Email
                <input name="email" type="email" autoComplete="email" maxLength={120} />
              </label>
            </div>
            <label>
              Preferred date
              <input name="date" type="date" required />
            </label>
            <label>
              Reason for consultation
              <textarea name="message" rows="4" maxLength={600} placeholder="Briefly describe what you would like to discuss." />
            </label>
            <label className="consent">
              <input name="consent" type="checkbox" required />
              <span>I agree to be contacted by the clinic regarding this appointment request.</span>
            </label>
            <button className="button button-full" type="submit" disabled={loading}>
              {loading ? "Submitting…" : "Request Appointment"}
            </button>
            {status && <p className="form-status" role="status">{status}</p>}
            <p className="privacy-note">Do not submit emergency or highly sensitive medical information through this form.</p>
          </form>
        </div>
      </section>

      <section id="contact" className="section section-soft">
        <div className="container location-grid">
          <div>
            <p className="eyebrow">Visit the clinic</p>
            <h2>Convenient consultation in Chennai.</h2>
            <p>Replace this sample address with the clinic’s verified location and map embed.</p>
          </div>
          <div className="location-card">
            <div className="map-placeholder" role="img" aria-label="Map placeholder">
              <span>Map</span>
            </div>
            <div className="location-details">
              <h3>Heart Care Clinic</h3>
              <p>123 Health Avenue, Chennai, Tamil Nadu 600000</p>
              <p><strong>Mon–Sat:</strong> 9:00 AM–6:00 PM<br /><strong>Sunday:</strong> Closed</p>
              <a className="text-link" href="https://maps.google.com" target="_blank" rel="noreferrer">Get directions <ArrowIcon /></a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <a className="brand footer-brand" href="#home">
              <span className="brand-mark">AK</span>
              <span><strong>Dr. Arjun Kumar</strong><small>Consultant Cardiologist</small></span>
            </a>
            <p>Professional medical website starter built for customization.</p>
          </div>
          <div><strong>Navigate</strong><a href="#about">About</a><a href="#services">Specialities</a><a href="#appointment">Appointment</a></div>
          <div><strong>Contact</strong><a href="tel:+919876543210">+91 98765 43210</a><a href="mailto:appointments@example.com">appointments@example.com</a></div>
        </div>
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} Dr. Arjun Kumar. All rights reserved.</span>
          <span>Medical information on this site is educational and is not a substitute for emergency care.</span>
        </div>
      </footer>

      <a className="whatsapp-fab" href="https://wa.me/919876543210" target="_blank" rel="noreferrer" aria-label="Contact clinic on WhatsApp">WA</a>
    </main>
  );
}
