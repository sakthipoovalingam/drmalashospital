"use client";

import { useState } from "react";

const services = [
  {
    icon: "K",
    title: "Knee Replacement",
    text: "Evaluation and surgical care for advanced knee arthritis, including total knee replacement when appropriate.",
  },
  {
    icon: "J",
    title: "Knee Pain & Arthritis",
    text: "Diagnosis and treatment of knee pain caused by arthritis, injuries, cartilage problems and age-related joint changes.",
  },
  {
    icon: "H",
    title: "Hip & Joint Care",
    text: "Assessment and treatment of painful hip and other joint conditions, with both non-surgical and surgical options.",
  },
  {
    icon: "F",
    title: "Fracture & Trauma Care",
    text: "Prompt orthopaedic management of fractures and musculoskeletal injuries, including surgery when required.",
  },
  {
    icon: "S",
    title: "Sports & Ligament Injuries",
    text: "Care for common sports-related injuries affecting the knee, shoulder, ankle and other joints.",
  },
  {
    icon: "A",
    title: "General Orthopaedics",
    text: "Comprehensive treatment for common bone, joint, muscle, ligament and age-related orthopaedic conditions.",
  },
];

const testimonials = [
  {
    quote:
      "The doctor explained my knee problem clearly and discussed the available treatment options patiently.",
    name: "Sample patient feedback",
  },
  {
    quote:
      "The consultation was reassuring, and the treatment plan was easy for our family to understand.",
    name: "Sample patient feedback",
  },
  {
    quote:
      "A professional and caring approach from consultation through follow-up.",
    name: "Sample patient feedback",
  },
];

function ArrowIcon() {
  return <span aria-hidden="true">→</span>;
}

export default function Home() {
  const [status, setStatus] = useState("");
  const basePath = process.env.NODE_ENV === "production" ? "/drmalashospital" : "";

  function submitAppointment(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    const message = [
      "Appointment request - Dr. Mala Hospital",
      `Name: ${data.name || ""}`,
      `Phone: ${data.phone || ""}`,
      `Email: ${data.email || "Not provided"}`,
      `Preferred date: ${data.date || ""}`,
      `Reason: ${data.message || "Not provided"}`,
    ].join("\n");

    setStatus(
      "Your details are ready. Please call or WhatsApp the hospital to confirm the appointment."
    );

    // Replace XXXXXXXXXX with the hospital's verified WhatsApp number before publishing.
    window.open(`https://wa.me/91XXXXXXXXXX?text=${encodeURIComponent(message)}`, "_blank");
  }

  return (
    <main>
      <header className="site-header">
        <div className="container nav-wrap">
          <a className="brand" href="#home" aria-label="Dr. Mala Hospital home">
            <span className="brand-mark">DM</span>
            <span>
              <strong>Dr. Mala Hospital</strong>
              <small>Orthopaedic & Joint Care • Manapparai</small>
            </span>
          </a>

          <nav className="nav-links" aria-label="Primary navigation">
            <a href="#about">About</a>
            <a href="#services">Specialities</a>
            <a href="#experience">Why Choose Us</a>
            <a href="#testimonials">Patient Stories</a>
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
            <p className="eyebrow">Orthopaedics • Knee Replacement • Joint Care • Trauma</p>
            <h1>
              Freedom from joint pain starts with <span>the right care.</span>
            </h1>
            <p className="hero-text">
              Dr. Muthukarthikeyan provides comprehensive orthopaedic care at Dr. Mala Hospital, Manapparai, with more than 10 years of clinical and surgical experience and a special focus on knee replacement and joint care.
            </p>
            <div className="hero-actions">
              <a className="button" href="#appointment">
                Book a Consultation <ArrowIcon />
              </a>
              <a className="text-link" href="#contact">
                Visit Dr. Mala Hospital
              </a>
            </div>
            <div className="trust-row">
              <div>
                <strong>10+</strong>
                <span>Years of orthopaedic practice</span>
              </div>
              <div>
                <strong>Knee</strong>
                <span>Replacement focus</span>
              </div>
              <div>
                <strong>Joint</strong>
                <span>Care & mobility</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="portrait-card">
              <img
                src={`${basePath}/doctor-placeholder.svg`}
                alt="Dr. Muthukarthikeyan portrait placeholder"
              />
              <div className="availability-card">
                <span className="status-dot" />
                <div>
                  <strong>Orthopaedic consultations</strong>
                  <small>Dr. Mala Hospital • Manapparai</small>
                </div>
              </div>
            </div>
            <div className="floating-note note-one">Knee & joint care</div>
            <div className="floating-note note-two">Orthopaedic surgery</div>
          </div>
        </div>
      </section>

      <section className="logo-strip" aria-label="Orthopaedic services">
        <div className="container logo-row">
          <span>Orthopaedic Surgery</span>
          <span>Knee Replacement</span>
          <span>Fracture Care</span>
          <span>Joint & Mobility Care</span>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container split-grid">
          <div className="section-heading sticky-heading">
            <p className="eyebrow">Meet your doctor</p>
            <h2>Experienced orthopaedic care with a focus on movement and quality of life.</h2>
          </div>
          <div className="about-copy">
            <p className="lead">
              Dr. Muthukarthikeyan is an orthopaedic surgeon practising at Dr. Mala Hospital, Manapparai, with more than 10 years of experience in orthopaedic consultation and surgical care.
            </p>
            <p>
              His clinical focus includes knee pain, arthritis, knee replacement, fractures, trauma and common bone and joint conditions. Treatment is planned according to each patient’s condition, lifestyle and individual needs, with non-surgical options considered whenever appropriate.
            </p>
            <div className="credentials-grid">
              <div><strong>10+ Years</strong><span>Orthopaedic practice</span></div>
              <div><strong>Knee Replacement</strong><span>Special clinical focus</span></div>
              <div><strong>Orthopaedic Surgery</strong><span>Bone & joint care</span></div>
              <div><strong>Manapparai</strong><span>Dr. Mala Hospital</span></div>
            </div>
            <a className="text-link" href="#services">Explore treatments <ArrowIcon /></a>
          </div>
        </div>
      </section>

      <section id="services" className="section section-soft">
        <div className="container">
          <div className="section-heading centered">
            <p className="eyebrow">Areas of care</p>
            <h2>Comprehensive orthopaedic treatment for bones, joints and mobility.</h2>
            <p>
              From common joint pain to fractures and advanced knee arthritis, patients receive a structured evaluation and a treatment plan tailored to their needs.
            </p>
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

      <section className="section">
        <div className="container split-grid">
          <div className="section-heading sticky-heading">
            <p className="eyebrow">Knee replacement care</p>
            <h2>Move with confidence again.</h2>
          </div>
          <div className="about-copy">
            <p className="lead">
              Persistent knee pain can make walking, climbing stairs and everyday activities difficult.
            </p>
            <p>
              For people with advanced knee arthritis who no longer receive enough relief from medication, physiotherapy, lifestyle changes or other conservative treatment, knee replacement surgery may be considered after a complete orthopaedic evaluation.
            </p>
            <p>
              Dr. Muthukarthikeyan provides assessment, surgical care and post-operative guidance with the goal of reducing pain, improving mobility and helping patients return to their daily activities.
            </p>
            <a className="button" href="#appointment">Schedule a Knee Consultation <ArrowIcon /></a>
          </div>
        </div>
      </section>

      <section id="experience" className="section dark-section">
        <div className="container experience-grid">
          <div>
            <p className="eyebrow light">Why choose us</p>
            <h2>Orthopaedic decisions built around the patient, not only the X-ray.</h2>
            <p>
              The aim is to understand the cause of pain, explain the available options clearly and choose a treatment plan appropriate for the patient’s needs and activity level.
            </p>
          </div>
          <div className="feature-list">
            <div><span>01</span><div><h3>10+ years of experience</h3><p>More than a decade of experience in orthopaedic consultation and surgical care.</p></div></div>
            <div><span>02</span><div><h3>Surgical & non-surgical options</h3><p>Conservative treatment is considered where appropriate before recommending an operation.</p></div></div>
            <div><span>03</span><div><h3>Joint replacement focus</h3><p>Special attention to the evaluation and management of knee arthritis and patients who may benefit from knee replacement.</p></div></div>
            <div><span>04</span><div><h3>Complete follow-up</h3><p>Guidance from diagnosis through treatment, rehabilitation and follow-up care.</p></div></div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="section">
        <div className="container">
          <div className="section-heading centered narrow">
            <p className="eyebrow">Patient experiences</p>
            <h2>Care that patients and families can understand.</h2>
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
          <p className="disclaimer">
            These are sample testimonials for the website layout only. Replace them with genuine, consented patient feedback before publishing.
          </p>
        </div>
      </section>

      <section id="appointment" className="section appointment-section">
        <div className="container appointment-grid">
          <div className="appointment-copy">
            <p className="eyebrow">Book an appointment</p>
            <h2>Take the next step toward better movement and joint health.</h2>
            <p>
              For knee pain, arthritis, fractures, sports injuries or another orthopaedic concern, request a consultation with Dr. Muthukarthikeyan at Dr. Mala Hospital, Manapparai.
            </p>
            <div className="contact-points">
              <a href="#contact"><strong>Hospital</strong><span>Dr. Mala Hospital</span></a>
              <a href="#contact"><strong>Location</strong><span>Manapparai, Tamil Nadu</span></a>
              <a href="#contact"><strong>Phone / WhatsApp</strong><span>Add verified hospital number</span></a>
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
              <textarea name="message" rows="4" maxLength={600} placeholder="For example: knee pain, arthritis, fracture follow-up or joint problem." />
            </label>
            <label className="consent">
              <input name="consent" type="checkbox" required />
              <span>I agree to be contacted by the hospital regarding this appointment request.</span>
            </label>
            <button className="button button-full" type="submit">
              Request Appointment
            </button>
            {status && <p className="form-status" role="status">{status}</p>}
            <p className="privacy-note">For emergencies, contact the hospital or nearest emergency service directly. Do not submit highly sensitive medical information through this form.</p>
          </form>
        </div>
      </section>

      <section id="contact" className="section section-soft">
        <div className="container location-grid">
          <div>
            <p className="eyebrow">Visit the hospital</p>
            <h2>Orthopaedic consultation in Manapparai.</h2>
            <p>
              Dr. Muthukarthikeyan consults at Dr. Mala Hospital, Manapparai. Add the hospital’s verified street address, phone number, consultation timings and Google Maps link before publishing.
            </p>
          </div>
          <div className="location-card">
            <div className="map-placeholder" role="img" aria-label="Map placeholder">
              <span>Map</span>
            </div>
            <div className="location-details">
              <h3>Dr. Mala Hospital</h3>
              <p>Manapparai, Tamil Nadu</p>
              <p><strong>Orthopaedics:</strong> Dr. Muthukarthikeyan<br /><strong>Consultation:</strong> Add verified timings</p>
              <a className="text-link" href="https://maps.google.com" target="_blank" rel="noreferrer">Open Google Maps <ArrowIcon /></a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <a className="brand footer-brand" href="#home">
              <span className="brand-mark">DM</span>
              <span><strong>Dr. Mala Hospital</strong><small>Orthopaedic & Joint Care • Manapparai</small></span>
            </a>
            <p>Orthopaedic consultation, surgery, knee replacement and joint care with Dr. Muthukarthikeyan.</p>
          </div>
          <div><strong>Navigate</strong><a href="#about">About Doctor</a><a href="#services">Specialities</a><a href="#appointment">Appointment</a></div>
          <div><strong>Contact</strong><a href="#contact">Manapparai, Tamil Nadu</a><a href="#contact">Add hospital phone number</a></div>
        </div>
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} Dr. Mala Hospital. All rights reserved.</span>
          <span>Website information is for general education and does not replace an in-person medical evaluation or emergency care.</span>
        </div>
      </footer>

      <a className="whatsapp-fab" href="#appointment" aria-label="Book orthopaedic appointment">APPT</a>
    </main>
  );
}
