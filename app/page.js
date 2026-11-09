"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    eyebrow: "ORTHOPAEDIC CARE · MANAPPARAI",
    line1: "move better.",
    line2: "live fully.",
    support: "Because every step matters.",
    description: "Thoughtful care for bones, joints and movement — close to home at Dr.Malas Hospital.",
  },
  {
    eyebrow: "CARE FOR EVERY STAGE OF LIFE",
    line1: "stay active.",
    line2: "stay strong.",
    support: "Make movement part of every day.",
    description: "From persistent joint pain to injury recovery, understand your orthopaedic care options with confidence.",
  },
  {
    eyebrow: "SCIENCE-LED · PATIENT-FIRST",
    line1: "care with",
    line2: "purpose.",
    support: "Clear guidance. Individual attention.",
    description: "Accurate assessment, informed decisions and rehabilitation support for your mobility journey.",
  },
  {
    eyebrow: "BONE · JOINT · MOBILITY",
    line1: "every step",
    line2: "counts.",
    support: "Your movement deserves attention.",
    description: "Explore orthopaedic services for knee, spine, sports injuries, fractures and joint conditions.",
  },
];

const treatments = [
  {
    number: "01",
    tag: "KNEE & JOINT CARE",
    title: "Knee Replacement Surgery",
    text: "Evaluation and surgical treatment options for advanced knee conditions and mobility concerns.",
  },
  {
    number: "02",
    tag: "SPINE CARE",
    title: "Spine & Back Pain Treatment",
    text: "Assessment and individualized management of back pain and spine-related conditions.",
  },
  {
    number: "03",
    tag: "SPORTS INJURIES",
    title: "Sports Injury & Ligament Treatment",
    text: "Care for sports injuries, ligament problems and recovery after injury.",
  },
  {
    number: "04",
    tag: "TRAUMA CARE",
    title: "Fracture & Trauma Care",
    text: "Timely evaluation and treatment planning for fractures and orthopaedic trauma.",
  },
  {
    number: "05",
    tag: "ARTHRITIS CARE",
    title: "Arthritis & Joint Pain Treatment",
    text: "Support for arthritis, joint stiffness and persistent pain using appropriate treatment options.",
  },
  {
    number: "06",
    tag: "JOINT MOBILITY",
    title: "Shoulder & Hip Pain Management",
    text: "Diagnosis and treatment of common shoulder and hip conditions.",
  },
];

const trustPoints = [
  "Experienced orthopaedic specialist",
  "Advanced surgical facilities",
  "Modern diagnostic support",
  "Structured rehabilitation programs",
  "Personalized patient care",
  "Convenient accessibility from multiple areas",
];

function Arrow({ diagonal = false }) {
  return <span aria-hidden="true" className="arrow-glyph">{diagonal ? "↗" : "→"}</span>;
}

function SectionLabel({ number, children, light = false }) {
  return (
    <div className={`section-label${light ? " section-label--light" : ""}`}>
      {number ? <span className="section-number">{number}</span> : null}
      <span>{children}</span>
    </div>
  );
}

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const slide = slides[activeSlide];
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 6500);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <main id="top">
      <div className="topline">
        <div className="topline-inner">
          <span>DR.MALAS HOSPITAL <i /> MANAPPARAI, TAMIL NADU</span>
          <span>ORTHOPAEDICS <i /> BONE · JOINT · MOBILITY CARE</span>
        </div>
      </div>

      <header className="site-header">
        <a className="brand" href="#top" onClick={closeMenu} aria-label="Dr.Malas Hospital home">
          <span className="brand-icon" aria-hidden="true"><b>✚</b></span>
          <span className="brand-text">
            <strong>Dr.Malas Hospital</strong>
            <small>MANAPPARAI · TAMIL NADU</small>
          </span>
        </a>

        <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="site-nav" onClick={() => setMenuOpen((open) => !open)}>
          <span>{menuOpen ? "Close" : "Menu"}</span>
          <b aria-hidden="true">{menuOpen ? "×" : "☰"}</b>
        </button>

        <nav className={`site-nav${menuOpen ? " site-nav--open" : ""}`} id="site-nav" aria-label="Main navigation">
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#doctor" onClick={closeMenu}>Our Doctor</a>
          <a href="#treatments" onClick={closeMenu}>Treatments</a>
          <a href="#why-us" onClick={closeMenu}>Why Choose Us</a>
          <a className="nav-button" href="#contact" onClick={closeMenu}>Appointments <Arrow diagonal /></a>
        </nav>
      </header>

      <section className="hero" aria-label="Dr.Malas Hospital introduction">
        <div className="hero-inner">
          <div className="hero-copy">
            <div className="hero-eyebrow"><span />{slide.eyebrow}</div>
            <div className="hero-heading" key={activeSlide} aria-live="polite">
              <h1>{slide.line1}<br /><em>{slide.line2}</em></h1>
              <p className="hero-support">{slide.support}</p>
            </div>
            <p className="hero-description">{slide.description}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#treatments">Explore Treatments <Arrow diagonal /></a>
              <a className="simple-link" href="#contact">Find our hospital <Arrow /></a>
            </div>
            <div className="hero-pagination" aria-label="Hero slides">
              {slides.map((item, index) => (
                <button
                  type="button"
                  key={item.eyebrow}
                  className={index === activeSlide ? "is-active" : ""}
                  aria-label={`Show slide ${index + 1}`}
                  aria-pressed={index === activeSlide}
                  onClick={() => setActiveSlide(index)}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span><i />
                </button>
              ))}
            </div>
          </div>

          <div className="hero-art-wrap">
            <div className="hero-orbit hero-orbit--one" />
            <div className="hero-orbit hero-orbit--two" />
            <div className="hero-art-frame">
              <img src="/drmalashospital/orthopaedic-care-hero.webp" alt="Patient gently supporting the knee during orthopaedic care" fetchPriority="high" />
            </div>
            <div className="hero-image-caption">
              <span className="caption-symbol">✚</span>
              <span>CARE FOR EVERY STEP</span>
              <b>DR.MALAS HOSPITAL</b>
            </div>
          </div>

          <div className="hero-footnote">
            <span>01 — PERSONALIZED ORTHOPAEDIC CARE</span>
            <span>SCROLL TO EXPLORE <b>↓</b></span>
          </div>
        </div>
      </section>

      <section className="welcome section-wrap" id="about">
        <SectionLabel number="01">WELCOME TO DR.MALAS HOSPITAL</SectionLabel>
        <div className="welcome-grid">
          <h2>Welcome to<br /><em>expert orthopaedic</em><br />care in Manapparai.</h2>
          <div className="welcome-copy">
            <p className="lead">Care for bones, joints and movement — with a patient-first approach.</p>
            <p>Dr.Malas Hospital provides orthopaedic treatment for patients across Manapparai. Our hospital is conveniently accessible from multiple residential and commercial neighbourhoods, making bone and joint care available close to home.</p>
            <p>We focus on knee replacement surgery, spine treatment, sports injury management, fracture care and arthritis treatment, with an emphasis on accurate diagnosis, evidence-based treatment and structured rehabilitation support.</p>
            <a className="underlined-link" href="#doctor">Get to know your orthopaedic specialist <Arrow diagonal /></a>
          </div>
        </div>
        <div className="stats-row">
          <div className="stat"><strong>10<span>+</span></strong><small>YEARS OF ORTHOPAEDIC PRACTICE</small></div>
          <div className="stat"><strong>06</strong><small>AREAS OF ORTHOPAEDIC CARE</small></div>
          <div className="stat"><strong>01</strong><small>PATIENT-FIRST APPROACH</small></div>
          <div className="stat-location"><span className="pin-icon">⌖</span><div><b>MANAPPARAI</b><small>CARE CLOSE TO HOME</small></div></div>
        </div>
      </section>

      <section className="doctor-band" id="doctor">
        <div className="doctor-art">
          <div className="doctor-orbit doctor-orbit--one" />
          <div className="doctor-orbit doctor-orbit--two" />
          <div className="doctor-monogram">
            <span>ORTHOPAEDICS</span>
            <strong>Dr.</strong>
            <b>M</b>
            <small>CARE · PRECISION · MOVEMENT</small>
          </div>
          <div className="doctor-art-caption">MEET YOUR ORTHOPAEDIC SPECIALIST</div>
        </div>
        <div className="doctor-details">
          <SectionLabel number="02" light>GET TO KNOW YOUR DOCTOR</SectionLabel>
          <div className="doctor-role">ORTHOPAEDIC & JOINT REPLACEMENT CARE</div>
          <h2>Dr. Muthu<br /><em>Karthikeyan</em></h2>
          <p>Dedicated to helping patients manage joint pain, recover from injuries and improve mobility through individualized orthopaedic care.</p>
          <div className="doctor-proof"><strong>10<span>+</span></strong><span>YEARS OF<br />ORTHOPAEDIC PRACTICE</span></div>
          <a className="button button-white" href="#contact">Visit Dr.Malas Hospital <Arrow diagonal /></a>
        </div>
      </section>

      <section className="patient-first section-wrap">
        <SectionLabel>OUR APPROACH</SectionLabel>
        <div className="patient-first-grid">
          <h2>A patient-first<br />approach to<br /><em>better movement.</em></h2>
          <div className="patient-first-copy">
            <p className="lead">A patient-first approach to bone and joint health.</p>
            <p>Every patient and every condition is different. The focus is on understanding the concern, explaining appropriate options and supporting each step of the treatment and recovery journey.</p>
            <div className="approach-points"><span>ACCURATE ASSESSMENT</span><b>✳</b><span>INFORMED DECISIONS</span><b>✳</b><span>REHABILITATION SUPPORT</span></div>
          </div>
        </div>
      </section>

      <section className="trust-section section-wrap" id="why-us">
        <SectionLabel number="03">WHY PATIENTS CHOOSE DR.MALAS HOSPITAL</SectionLabel>
        <div className="trust-grid">
          <div className="trust-heading">
            <h2>Why patients<br /><em>trust our care.</em></h2>
            <div className="trust-visual">
              <img src="/drmalashospital/orthopaedic-care-hero.webp" alt="Orthopaedic knee care" loading="lazy" />
              <span>ORTHOPAEDIC CARE · MANAPPARAI</span>
            </div>
          </div>
          <div className="trust-content">
            <p className="lead">Thoughtful orthopaedic care, centered on the individual.</p>
            <div className="trust-list">
              {trustPoints.map((point, index) => (
                <div className="trust-item" key={point}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{point}</strong>
                  <b aria-hidden="true">＋</b>
                </div>
              ))}
            </div>
            <p className="trust-note">Our goal is to help patients receive timely, appropriate orthopaedic treatment without unnecessary long-distance travel.</p>
          </div>
        </div>
      </section>

      <section className="scope-section">
        <div className="scope-inner section-wrap">
          <SectionLabel number="04" light>SCOPE OF TREATMENT</SectionLabel>
          <div className="scope-heading">
            <h2>Conditions &<br /><em>treatments.</em></h2>
            <p>Explore the orthopaedic concerns and treatment areas supported at Dr.Malas Hospital.</p>
          </div>
          <div className="scope-list">
            {treatments.map((item) => (
              <article className="scope-row" key={item.number}>
                <span className="scope-number">{item.number}</span>
                <div><small>{item.tag}</small><h3>{item.title}</h3><p>{item.text}</p></div>
                <a href="#contact" aria-label={`Enquire about ${item.title}`}><Arrow diagonal /></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="knee-feature">
        <div className="knee-copy">
          <SectionLabel number="05" light>A CLOSER LOOK</SectionLabel>
          <h2>Knee & Joint<br /><em>Care.</em></h2>
          <p>Whether you are managing persistent knee pain, arthritis or a mobility concern, our goal is to help you understand your treatment options and make informed decisions about your care.</p>
          <a className="button button-white" href="#contact">Ask about a consultation <Arrow diagonal /></a>
        </div>
        <div className="knee-image-wrap">
          <img src="/drmalashospital/knee-joint-care.webp" alt="Knee and joint care — comprehensive care for knees and joints" loading="lazy" />
        </div>
      </section>

      <section className="treatment-detail section-wrap">
        <SectionLabel number="06">WHAT WE TREAT</SectionLabel>
        <div className="detail-heading">
          <h2>Comprehensive<br /><em>orthopaedic care.</em></h2>
          <p>From joint pain to injury recovery, explore the services offered and speak with the hospital about the next step for your care.</p>
        </div>
        <div className="detail-grid">
          {treatments.map((item) => (
            <article className="detail-card" key={item.number}>
              <span>{item.number} / {item.tag}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="moving-strip" aria-label="Our commitment">
        <div>MOVE WITH CONFIDENCE <i>✳</i> CARE CLOSE TO HOME <i>✳</i> EVERY STEP MATTERS <i>✳</i> MOVE WITH CONFIDENCE <i>✳</i></div>
      </section>

      <section className="closing-section">
        <div className="closing-inner section-wrap">
          <SectionLabel number="07" light>DR.MALAS HOSPITAL · MANAPPARAI</SectionLabel>
          <div className="closing-grid">
            <div>
              <h2>Expert care.<br /><em>Right here.</em></h2>
              <p>For orthopaedic consultations, knee replacement enquiries and follow-up care, visit Dr.Malas Hospital in Manapparai.</p>
            </div>
            <div className="visit-card">
              <span className="visit-card-kicker">YOUR LOCAL ORTHOPAEDIC CARE</span>
              <h3>Dr.Malas Hospital</h3>
              <p>Manapparai, Tamil Nadu</p>
              <div className="visit-divider" />
              <a className="button button-primary" href="https://www.google.com/maps/search/?api=1&query=Dr.Malas+Hospital+Manapparai" target="_blank" rel="noopener noreferrer">Find on Google Maps <Arrow diagonal /></a>
              <small>Use the map link to find the hospital and plan your visit.</small>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer" id="contact">
        <div className="footer-main">
          <a className="footer-brand" href="#top"><span className="footer-brand-mark">✚</span><span><strong>Dr.Malas Hospital</strong><small>MANAPPARAI · TAMIL NADU</small></span></a>
          <p>Orthopaedic care for bones, joints and movement.</p>
          <a className="back-top" href="#top">BACK TO TOP ↑</a>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Dr.Malas Hospital. All rights reserved.</span><span>ORTHOPAEDICS · KNEE & JOINT CARE</span></div>
      </footer>
    </main>
  );
}
