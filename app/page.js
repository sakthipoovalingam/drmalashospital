"use client";

import { useEffect, useState } from "react";

const heroSlides = [
  {
    kicker: "ORTHOPAEDIC CARE · MANAPPARAI",
    lineOne: "move with",
    accent: "confidence.",
    note: "Because every step matters.",
    description: "Thoughtful care for bones, joints and movement — close to home at Dr.Malas Hospital.",
  },
  {
    kicker: "CARE FOR EVERY STAGE OF LIFE",
    lineOne: "stay active.",
    accent: "stay strong.",
    note: "Make movement part of every day.",
    description: "From persistent joint pain to injury recovery, understand your orthopaedic care options with confidence.",
  },
  {
    kicker: "SCIENCE-LED · PATIENT-FIRST",
    lineOne: "care with",
    accent: "purpose.",
    note: "Clear guidance. Individual attention.",
    description: "Accurate assessment, informed decisions and rehabilitation support for your mobility journey.",
  },
  {
    kicker: "BONE · JOINT · MOBILITY",
    lineOne: "every step",
    accent: "counts.",
    note: "Your movement deserves attention.",
    description: "Explore orthopaedic services for knee, spine, sports injuries, fractures and joint conditions.",
  },
];

const treatments = [
  {
    number: "01",
    label: "KNEE & JOINT CARE",
    title: "Knee Replacement Surgery",
    copy: "Evaluation and surgical treatment options for advanced knee conditions and mobility concerns.",
  },
  {
    number: "02",
    label: "SPINE CARE",
    title: "Spine & Back Pain Treatment",
    copy: "Assessment and individualized management of back pain and spine-related conditions.",
  },
  {
    number: "03",
    label: "SPORTS INJURIES",
    title: "Sports Injury & Ligament Treatment",
    copy: "Care for sports injuries, ligament problems and recovery after injury.",
  },
  {
    number: "04",
    label: "TRAUMA CARE",
    title: "Fracture & Trauma Care",
    copy: "Timely evaluation and treatment planning for fractures and orthopaedic trauma.",
  },
  {
    number: "05",
    label: "ARTHRITIS CARE",
    title: "Arthritis & Joint Pain Treatment",
    copy: "Support for arthritis, joint stiffness and persistent pain using appropriate treatment options.",
  },
  {
    number: "06",
    label: "JOINT MOBILITY",
    title: "Shoulder & Hip Pain Management",
    copy: "Diagnosis and treatment of common shoulder and hip conditions.",
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
  return <span aria-hidden="true">{diagonal ? "↗" : "→"}</span>;
}

function SectionLabel({ number, children, light = false }) {
  return (
    <div className={`section-label${light ? " section-label--light" : ""}`}>
      {number ? <span className="section-number">{number}</span> : null}
      <span>{children}</span>
    </div>
  );
}


function KneeIllustration() {
  return (
    <svg className="knee-svg" viewBox="0 0 480 560" role="img" aria-label="Illustration of a knee joint showing femur, patella, ligaments and tibia">
      <defs>
        <linearGradient id="boneGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fbf6ee" />
          <stop offset="1" stopColor="#d9cfc2" />
        </linearGradient>
        <radialGradient id="jointGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#d71e00" stopOpacity=".55" />
          <stop offset="1" stopColor="#d71e00" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="240" cy="300" r="205" fill="none" stroke="#fff" strokeOpacity=".16" />
      <circle cx="240" cy="300" r="165" fill="none" stroke="#fff" strokeOpacity=".22" strokeDasharray="4 7" />
      <circle cx="240" cy="305" r="120" fill="url(#jointGlow)" />
      {/* femur */}
      <path d="M188 0 L292 0 C294 120 302 170 332 214 C358 254 332 292 290 294 C266 296 252 282 240 270 C228 282 214 296 190 294 C148 292 122 254 148 214 C178 170 186 120 188 0 Z" fill="url(#boneGrad)" />
      {/* tibia */}
      <path d="M146 322 C190 312 290 312 334 322 C346 325 346 342 334 352 C322 402 312 472 310 560 L170 560 C168 472 158 402 146 352 C134 342 134 325 146 322 Z" fill="url(#boneGrad)" />
      {/* fibula */}
      <path d="M338 350 C350 352 356 362 354 376 C352 440 350 500 350 560 L326 560 C326 500 328 430 330 372 C330 360 332 352 338 350 Z" fill="#e9dfd2" />
      {/* menisci */}
      <path d="M146 304 C160 292 214 292 232 304 C214 318 160 322 146 304 Z" fill="#c9b8a6" />
      <path d="M248 304 C266 292 320 292 334 304 C320 322 266 318 248 304 Z" fill="#c9b8a6" />
      {/* cruciate ligaments */}
      <path d="M222 284 L258 328" stroke="#d71e00" strokeWidth="7" strokeLinecap="round" />
      <path d="M258 284 L222 328" stroke="#a31700" strokeWidth="7" strokeLinecap="round" />
      {/* patella */}
      <ellipse cx="240" cy="236" rx="40" ry="50" fill="#f3eadd" stroke="#bfae9b" strokeWidth="3" />
      <ellipse cx="240" cy="236" rx="24" ry="32" fill="none" stroke="#d9cdbd" strokeWidth="2" />
    </svg>
  );
}

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const currentSlide = heroSlides[activeSlide];
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 6200);
    return () => window.clearInterval(timer);
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
          <span className="brand-emblem" aria-hidden="true"><b>✚</b><i /></span>
          <span className="brand-text"><strong>Dr.Malas Hospital</strong><small>MANAPPARAI · TAMIL NADU</small></span>
        </a>
        <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="site-nav" onClick={() => setMenuOpen((open) => !open)}>
          <span>{menuOpen ? "Close" : "Menu"}</span><b aria-hidden="true">{menuOpen ? "×" : "☰"}</b>
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
            <div className="hero-kicker"><span />{currentSlide.kicker}</div>
            <div className="hero-title-wrap" aria-live="polite" key={activeSlide}>
              <h1>{currentSlide.lineOne}<br /><em>{currentSlide.accent}</em></h1>
              <p className="hero-note">{currentSlide.note}</p>
            </div>
            <p className="hero-description">{currentSlide.description}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#treatments">Explore Treatments <Arrow diagonal /></a>
              <a className="simple-link" href="#contact">Find our hospital <Arrow /></a>
            </div>
            <div className="hero-pagination" aria-label="Hero slides">
              {heroSlides.map((slide, index) => (
                <button type="button" key={slide.kicker} className={index === activeSlide ? "is-active" : ""} aria-label={`Show slide ${index + 1}`} aria-pressed={index === activeSlide} onClick={() => setActiveSlide(index)}>
                  <span>{String(index + 1).padStart(2, "0")}</span><i />
                </button>
              ))}
            </div>
          </div>
          <div className="hero-art" aria-hidden="false">
            <KneeIllustration />
            <div className="hero-art-chip"><span className="caption-cross">✚</span><span>Knee and joint care</span></div>
          </div>
          <div className="hero-footnote"><span>Personalized orthopaedic care</span><span>Scroll to explore <b>↓</b></span></div>
        </div>
      </section>

      <section className="welcome section-wrap" id="about">
        <SectionLabel number="01">WELCOME TO DR.MALAS HOSPITAL</SectionLabel>
        <div className="welcome-grid">
          <div><h2>Welcome to<br /><em>expert orthopaedic</em><br />care in Manapparai.</h2></div>
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
          <div className="doctor-art-ring doctor-art-ring--one" />
          <div className="doctor-art-ring doctor-art-ring--two" />
          <div className="doctor-monogram"><span>ORTHOPAEDICS</span><strong>Dr.</strong><b>M</b><small>CARE · PRECISION · MOVEMENT</small></div>
          <div className="doctor-photo-caption">MEET YOUR ORTHOPAEDIC SPECIALIST</div>
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
          <h2>Care that starts<br />with listening.<br /><em>Care that moves<br />you forward.</em></h2>
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
          <div className="trust-heading"><h2>Why patients<br /><em>trust our care.</em></h2><div className="trust-stamp"><span>ORTHOPAEDIC CARE</span><b>✚</b><small>MANAPPARAI · TAMIL NADU</small></div></div>
          <div className="trust-content">
            <p className="lead">Thoughtful orthopaedic care, centered on the individual.</p>
            <div className="trust-list">{trustPoints.map((point, index) => <div className="trust-item" key={point}><span>{String(index + 1).padStart(2, "0")}</span><strong>{point}</strong><b aria-hidden="true">＋</b></div>)}</div>
            <p className="trust-note">Our goal is to help patients receive timely, appropriate orthopaedic treatment without unnecessary long-distance travel.</p>
          </div>
        </div>
      </section>

      <section className="scope-section">
        <div className="scope-inner section-wrap">
          <SectionLabel number="04" light>SCOPE OF TREATMENT</SectionLabel>
          <div className="scope-heading"><h2>Conditions &<br /><em>treatments.</em></h2><p>Explore the orthopaedic concerns and treatment areas supported at Dr.Malas Hospital.</p></div>
          <div className="scope-list">
            {treatments.map((item) => <article className="scope-row" key={item.number}><span className="scope-number">{item.number}</span><div><small>{item.label}</small><h3>{item.title}</h3><p>{item.copy}</p></div><a href="#contact" aria-label={`Enquire about ${item.title}`}><Arrow diagonal /></a></article>)}
          </div>
        </div>
      </section>

      <section className="knee-section">
        <div className="knee-copy">
          <SectionLabel number="05" light>A CLOSER LOOK</SectionLabel>
          <h2>For every step.<br /><em>For every move.</em></h2>
          <p>Whether you are managing persistent knee pain, arthritis or a mobility concern, our goal is to help you understand your treatment options and make informed decisions about your care.</p>
          <a className="button button-white" href="#contact">Ask about a consultation <Arrow diagonal /></a>
        </div>
        <div className="knee-image"><img src="/drmalashospital/knee-joint-care.webp" alt="Knee and joint care — comprehensive care for knees and joints" loading="lazy" /></div>
      </section>

      <section className="treatment-detail section-wrap">
        <SectionLabel number="06">ORTHOPAEDIC CARE, PERSONALIZED FOR YOU</SectionLabel>
        <div className="detail-heading"><h2>Focused care<br /><em>for better movement.</em></h2><p>From joint pain to injury recovery, explore the services offered and speak with the hospital about the next step for your care.</p></div>
        <div className="detail-columns">
          <article><span>01 / KNEE & JOINT</span><h3>Knee replacement & arthritis care</h3><p>Assessment and treatment planning for advanced knee conditions, joint stiffness and persistent pain, with the aim of improving day-to-day mobility.</p></article>
          <article><span>02 / SPINE & BACK</span><h3>Spine and back pain treatment</h3><p>Evaluation of back pain and spine-related concerns, with management options tailored to the patient's condition and needs.</p></article>
          <article><span>03 / SPORTS & LIGAMENT</span><h3>Sports injury and ligament care</h3><p>Care for sports-related injuries, ligament problems and recovery after injury, including guidance on rehabilitation support.</p></article>
          <article><span>04 / FRACTURE & TRAUMA</span><h3>Fracture and trauma care</h3><p>Timely evaluation and treatment planning for fractures and orthopaedic trauma, with follow-up care as needed.</p></article>
        </div>
      </section>

      <section className="moving-strip" aria-label="Our commitment"><div>MOVE WITH CONFIDENCE <i>✳</i> CARE CLOSE TO HOME <i>✳</i> EVERY STEP MATTERS <i>✳</i> MOVE WITH CONFIDENCE <i>✳</i></div></section>

      <section className="visit-section" id="contact">
        <div className="visit-inner section-wrap">
          <SectionLabel number="07" light>FIND & VISIT US</SectionLabel>
          <div className="visit-grid">
            <div><h2>Let's get you<br /><em>moving.</em></h2><p>For orthopaedic consultations, knee replacement enquiries and follow-up care, visit Dr.Malas Hospital in Manapparai.</p></div>
            <div className="visit-card"><div className="visit-card-kicker">YOUR LOCAL ORTHOPAEDIC CARE</div><h3>Dr.Malas Hospital</h3><p>Manapparai, Tamil Nadu</p><div className="visit-divider" /><a className="button button-white" href="https://www.google.com/maps/search/?api=1&query=Dr.Malas+Hospital+Manapparai" target="_blank" rel="noopener noreferrer">Get directions <Arrow diagonal /></a><small>Use the map link to find the hospital and plan your visit.</small></div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-main"><a className="footer-brand" href="#top"><span className="brand-emblem" aria-hidden="true"><b>✚</b><i /></span><span><strong>Dr.Malas Hospital</strong><small>MANAPPARAI · TAMIL NADU</small></span></a><p>Orthopaedic care for bones, joints and movement.</p><a className="back-top" href="#top">BACK TO TOP ↑</a></div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Dr.Malas Hospital. All rights reserved.</span><span>ORTHOPAEDICS · KNEE & JOINT CARE</span></div>
      </footer>
    </main>
  );
}
