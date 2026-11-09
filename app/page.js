"use client";

import { useState } from "react";

const treatments = [
  { n: "01", title: "Knee Replacement Surgery", detail: "Evaluation and surgical treatment options for advanced knee conditions and mobility concerns." },
  { n: "02", title: "Spine & Back Pain Treatment", detail: "Assessment and individualized management of back pain and spine-related conditions." },
  { n: "03", title: "Sports Injury & Ligament Treatment", detail: "Care for sports injuries, ligament problems and recovery after injury." },
  { n: "04", title: "Fracture & Trauma Care", detail: "Timely evaluation and treatment planning for fractures and orthopaedic trauma." },
  { n: "05", title: "Arthritis & Joint Pain Treatment", detail: "Support for arthritis, joint stiffness and persistent pain using appropriate treatment options." },
  { n: "06", title: "Shoulder & Hip Pain Management", detail: "Diagnosis and treatment of common shoulder and hip conditions." },
];

const reasons = [
  "Experienced orthopaedic specialist",
  "Advanced surgical facilities",
  "Modern diagnostic support",
  "Structured rehabilitation programs",
  "Personalized patient care",
  "Convenient accessibility from multiple areas",
];

function ImagePlaceholder({ label, shape = "landscape", number = "01" }) {
  return (
    <div className={`image-placeholder image-placeholder--${shape}`} role="img" aria-label={`${label} image placeholder`}>
      <span className="placeholder-cross placeholder-cross--a" aria-hidden="true" />
      <span className="placeholder-cross placeholder-cross--b" aria-hidden="true" />
      <div className="placeholder-top"><span>IMAGE / {number}</span><span>DR. MALA HOSPITAL</span></div>
      <div className="placeholder-middle"><span className="placeholder-icon" aria-hidden="true">✳</span><strong>{label}</strong><small>Photo placeholder — replace later</small></div>
      <span className="placeholder-bottom">MANAPPARAI • TAMIL NADU</span>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return (
    <main>
      <div className="top-strip"><span>DR. MALA HOSPITAL · MANAPPARAI</span><span>ORTHOPAEDICS & JOINT CARE</span></div>
      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu}><span className="brand-symbol">✳</span><span><strong>DR. MALA</strong><small>HOSPITAL · MANAPPARAI</small></span></a>
        <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="main-nav" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? "Close" : "Menu"} <span aria-hidden="true">{menuOpen ? "×" : "☰"}</span></button>
        <nav id="main-nav" className={`nav ${menuOpen ? "nav--open" : ""}`} aria-label="Main navigation">
          <a href="#about" onClick={closeMenu}>About</a><a href="#services" onClick={closeMenu}>Treatments</a><a href="#why-us" onClick={closeMenu}>Why choose us</a><a href="#location" onClick={closeMenu}>Location</a><a href="#contact" className="nav-cta" onClick={closeMenu}>Enquire <span aria-hidden="true">↗</span></a>
        </nav>
      </header>

      <section className="hero section-pad" id="home">
        <div className="hero-heading"><div className="eyebrow"><span className="dot" /> ORTHOPAEDIC CARE IN MANAPPARAI</div><h1>MOVE<br /><em>BETTER.</em><br />LIVE <span className="outlined">FULLY.</span></h1></div>
        <div className="hero-bottom"><p>Expert orthopaedic care, close to home. Personalized treatment for bones, joints and mobility at Dr. Mala Hospital.</p><a className="round-arrow" href="#services" aria-label="Explore our treatments">↘</a></div>
        <div className="hero-visual"><ImagePlaceholder label="Hospital / Orthopaedic Care" shape="wide" number="01" /><div className="visual-caption"><span>DR. MUTHUKARTHIKEYAN</span><span>ORTHOPAEDIC & JOINT REPLACEMENT CARE</span></div></div>
      </section>

      <section className="intro section-pad" id="about"><div className="section-kicker">01 / INTRODUCTION</div><div className="intro-grid"><h2>EXPERT CARE.<br /><em>RIGHT HERE</em><br />IN MANAPPARAI.</h2><div className="intro-copy"><p className="lead">Dr. Mala Hospital provides advanced orthopaedic treatment for patients across Manapparai.</p><p>Our hospital is conveniently accessible from multiple residential and commercial neighbourhoods, making expert bone and joint care available close to home.</p><p>We focus on knee replacement surgery, spine treatment, sports injury management, fracture care and arthritis treatment, with an emphasis on accurate diagnosis, evidence-based treatment and structured rehabilitation support.</p><a className="text-link" href="#contact">Plan your visit <span aria-hidden="true">↗</span></a></div></div></section>

      <section className="doctor-section section-pad"><div className="doctor-visual"><ImagePlaceholder label="Dr. Muthukarthikeyan Portrait" shape="portrait" number="02" /></div><div className="doctor-copy"><div className="section-kicker">MEET YOUR SPECIALIST</div><h2>DR.<br />MUTHU<span className="soft-break">KARTHIKEYAN</span></h2><div className="doctor-role">ORTHOPAEDIC & JOINT REPLACEMENT CARE</div><p>Dedicated to helping patients manage joint pain, recover from injuries and improve mobility through individualized orthopaedic care.</p><div className="experience"><strong>10<span>+</span></strong><div>YEARS OF<br />ORTHOPAEDIC PRACTICE</div></div><a className="pill-button" href="#contact">Contact the hospital <span aria-hidden="true">↗</span></a></div></section>

      <section className="statement section-pad"><span className="section-kicker">OUR APPROACH</span><p>BETTER MOVEMENT<br />STARTS WITH <em>BETTER CARE.</em></p></section>

      <section className="services section-pad" id="services"><div className="section-kicker">02 / WHAT WE TREAT</div><div className="services-head"><h2>COMPREHENSIVE<br /><em>ORTHOPAEDIC</em><br />SERVICES.</h2><p>From joint pain to injury recovery, our team offers a range of orthopaedic services with treatment plans tailored to individual needs.</p></div><div className="service-list">{treatments.map((t) => <article className="service-item" key={t.n}><span className="service-number">{t.n}</span><div><h3>{t.title}</h3><p>{t.detail}</p></div><span className="service-arrow" aria-hidden="true">↗</span></article>)}</div></section>

      <section className="feature section-pad"><div className="feature-copy"><div className="section-kicker">A CLOSER LOOK</div><h2>FOCUSED ON<br /><em>KNEE & JOINT</em><br />HEALTH.</h2><p>Whether you are managing persistent knee pain, arthritis or a mobility concern, our goal is to help you understand your treatment options and make informed decisions about your care.</p><a className="text-link" href="#contact">Ask about a consultation <span aria-hidden="true">↗</span></a></div><div><ImagePlaceholder label="Knee / Joint Care" shape="portrait" number="03" /></div></section>

      <section className="why section-pad" id="why-us"><div className="section-kicker">03 / WHY CHOOSE US</div><div className="why-grid"><div><h2>CARE THAT<br />PUTS <em>YOU</em><br />FIRST.</h2><ImagePlaceholder label="Patient Care / Rehabilitation" number="04" /></div><div className="why-content"><p className="lead">Why patients across Manapparai choose Dr. Mala Hospital</p><div className="reason-list">{reasons.map((r, i) => <div className="reason" key={r}><span>{String(i + 1).padStart(2, "0")}</span><strong>{r}</strong><span aria-hidden="true">+</span></div>)}</div><p>Our goal is to help patients receive timely, appropriate orthopaedic treatment without unnecessary long-distance travel.</p></div></div></section>

      <section className="marquee" aria-label="Our focus"><div>MOVE WITH CONFIDENCE <span>✳</span> CARE CLOSE TO HOME <span>✳</span></div></section>

      <section className="location section-pad" id="location"><div className="section-kicker">04 / FIND US</div><div className="location-grid"><div><h2>RIGHT HERE<br />IN <em>MANAPPARAI.</em></h2><p>Dr. Mala Hospital is located to serve patients from Manapparai and nearby neighbourhoods. Well-connected roads and convenient transport access make consultations and follow-up visits easier.</p><div className="location-info"><strong>DR. MALA HOSPITAL</strong><span>Manapparai, Tamil Nadu</span><small>Exact street address, telephone and opening hours to be added after confirmation.</small></div><a className="pill-button" href="https://www.google.com/maps/search/?api=1&query=Dr+Mala+Hospital+Manapparai" target="_blank" rel="noopener noreferrer">Find on Google Maps <span aria-hidden="true">↗</span></a></div><ImagePlaceholder label="Hospital Exterior / Location" shape="portrait" number="05" /></div></section>

      <section className="contact section-pad" id="contact"><div className="section-kicker">05 / GET IN TOUCH</div><h2>LET'S GET YOU<br /><em>MOVING.</em></h2><div className="contact-bottom"><p>For orthopaedic consultations, knee replacement enquiries and follow-up care, contact Dr. Mala Hospital in Manapparai.</p><div className="contact-card"><span>APPOINTMENTS & ENQUIRIES</span><strong>Dr. Mala Hospital</strong><p>Manapparai, Tamil Nadu</p><small>Phone number and consultation hours will be added once verified.</small></div></div></section>
      <footer className="footer"><div className="footer-brand">✳ DR. MALA HOSPITAL</div><div>MANAPPARAI · TAMIL NADU</div><a href="#home">BACK TO TOP ↑</a><small>© {new Date().getFullYear()} Dr. Mala Hospital. All rights reserved.</small></footer>
    </main>
  );
}
