import { useState } from "react";
import "./_group.css";

// ─── Data ────────────────────────────────────────────────────────────────────

const NAV_LINKS = ["Collection", "Performance", "Experience", "About", "Contact"];

const CARS = [
  {
    id: 1,
    name: "Obsidian GT-R",
    tagline: "Born from darkness.",
    price: "$289,000",
    specs: ["620 HP", "0–60 in 2.9s", "AWD"],
    img: "/__mockup/images/hero-car.png",
    badge: "NEW",
  },
  {
    id: 2,
    name: "Arctic Spectre",
    tagline: "Silence and speed.",
    price: "$342,000",
    specs: ["720 HP", "0–60 in 2.6s", "RWD"],
    img: "/__mockup/images/car-2.png",
    badge: "LIMITED",
  },
  {
    id: 3,
    name: "Midnight Sovereign",
    tagline: "Command every road.",
    price: "$415,000",
    specs: ["850 HP", "0–60 in 2.3s", "AWD"],
    img: "/__mockup/images/car-3.png",
    badge: "BESPOKE",
  },
];

const STATS = [
  { value: "28+", label: "Years of Excellence" },
  { value: "4.2K", label: "Vehicles Delivered" },
  { value: "94%", label: "Client Retention" },
  { value: "18", label: "Global Showrooms" },
];

const TESTIMONIALS = [
  {
    name: "Alexander Voss",
    title: "CEO, Voss Capital Group",
    avatar: "AV",
    quote: "The Obsidian GT-R is unlike anything I've experienced. Veyron redefines what a performance vehicle can be — it's art in motion.",
    rating: 5,
  },
  {
    name: "Isabelle Marchetti",
    title: "Creative Director, Luxe Studio",
    avatar: "IM",
    quote: "From the moment I entered the showroom, every detail was impeccable. The team understands luxury at a molecular level.",
    rating: 5,
  },
  {
    name: "James Hartwell",
    title: "Private Investor",
    avatar: "JH",
    quote: "My third acquisition from Veyron Motors. They've never disappointed. The Arctic Spectre is a masterpiece of engineering.",
    rating: 5,
  },
];

const FAQS = [
  {
    q: "What financing options are available for Veyron vehicles?",
    a: "We offer bespoke financing solutions tailored to your portfolio, including balloon financing, lease programs, and direct purchase arrangements through our partner banks.",
  },
  {
    q: "How does the bespoke customization process work?",
    a: "Our atelier team works directly with you across 4–6 design sessions to configure your vehicle's exterior, interior, and mechanical specifications. Lead time is typically 14–20 weeks.",
  },
  {
    q: "Do you offer white-glove delivery worldwide?",
    a: "Yes. Every Veyron vehicle is delivered by our concierge logistics team with full insurance, enclosed transport, and a personal handover experience at your chosen location.",
  },
  {
    q: "What warranty and maintenance programs are included?",
    a: "All vehicles include a 5-year unlimited-kilometre factory warranty, complimentary annual servicing for 3 years, and 24/7 roadside concierge across 40+ countries.",
  },
  {
    q: "Can I schedule a private test drive experience?",
    a: "Absolutely. Our private experience days are held at curated track venues and scenic routes. Register your interest through the form and a specialist will arrange the perfect event.",
  },
];

// ─── Sub-components ──────────────────────────────────────────────────────────

function StarRating({ count }: { count: number }) {
  return (
    <div style={{ display: "flex", gap: 4 }}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#C9A84C">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item${open ? " open" : ""}`}>
      <div className="faq-question" onClick={() => setOpen(!open)}>
        <span>{question}</span>
        <div className="faq-icon">+</div>
      </div>
      <div className={`faq-answer${open ? " open" : ""}`}>{answer}</div>
    </div>
  );
}

// ─── Main Component ──────────────────────────────────────────────────────────

export function LandingPage() {
  const [formData, setFormData] = useState({ name: "", email: "", interest: "" });
  const [submitted, setSubmitted] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      className="luxury-page"
      style={{
        fontFamily: "var(--font-body)",
        backgroundColor: "var(--black-1)",
        color: "var(--white)",
        minHeight: "100vh",
        overflowX: "hidden",
        scrollBehavior: "smooth",
      }}
    >
      {/* ── NAVIGATION ────────────────────────────────────────────── */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: "0 48px",
          height: 72,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "rgba(0,0,0,0.85)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              border: "1.5px solid var(--gold)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 0 16px rgba(201,168,76,0.3)",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: 18,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            VEYRON
          </span>
        </div>

        {/* Desktop Nav Links */}
        <div
          style={{ display: "flex", gap: 36, alignItems: "center" }}
          className="desktop-nav"
        >
          {NAV_LINKS.map((link) => (
            <a key={link} href="#" className="nav-link">
              {link}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <button className="btn-gold" style={{ padding: "10px 28px", fontSize: 11 }}>
            Book a Viewing
          </button>
        </div>
      </nav>

      {/* ── HERO SECTION ──────────────────────────────────────────── */}
      <section
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        {/* Background Car Image */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url(/__mockup/images/hero-car.png)",
            backgroundSize: "cover",
            backgroundPosition: "center right",
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* Gradient Overlay */}
        <div className="hero-overlay" style={{ position: "absolute", inset: 0 }} />

        {/* Radial glow */}
        <div
          style={{
            position: "absolute",
            bottom: -100,
            left: "10%",
            width: 600,
            height: 300,
            borderRadius: "50%",
            background: "radial-gradient(ellipse, rgba(201,168,76,0.06) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />

        {/* Content */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: 680,
            padding: "120px 80px 80px",
          }}
        >
          {/* Eyebrow */}
          <div
            className="animate-fadeInUp"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 28,
              padding: "8px 20px",
              borderRadius: 999,
              border: "1px solid rgba(201,168,76,0.3)",
              background: "rgba(201,168,76,0.05)",
            }}
          >
            <div
              style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--gold)", boxShadow: "0 0 8px var(--gold)" }}
            />
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 11,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--gold-light)",
              }}
            >
              2025 Collection — Now Available
            </span>
          </div>

          {/* Headline */}
          <h1
            className="animate-fadeInUp delay-100"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(48px, 6vw, 80px)",
              fontWeight: 800,
              lineHeight: 1.0,
              letterSpacing: "-0.03em",
              marginBottom: 24,
              opacity: 0,
            }}
          >
            Drive Beyond
            <br />
            <span className="text-gold-shimmer">Imagination.</span>
          </h1>

          {/* Subheadline */}
          <p
            className="animate-fadeInUp delay-200"
            style={{
              fontSize: 17,
              lineHeight: 1.75,
              color: "rgba(255,255,255,0.6)",
              marginBottom: 48,
              maxWidth: 460,
              opacity: 0,
            }}
          >
            Veyron Motors curates the world's most exceptional performance vehicles — engineered to perfection, delivered with ceremony.
          </p>

          {/* CTA Buttons */}
          <div
            className="animate-fadeInUp delay-300"
            style={{ display: "flex", gap: 16, flexWrap: "wrap", opacity: 0 }}
          >
            <button className="btn-gold">Explore Collection</button>
            <button className="btn-outline">Watch Film</button>
          </div>

          {/* Scroll Indicator */}
          <div
            className="animate-fadeInUp delay-500"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginTop: 64,
              opacity: 0,
            }}
          >
            <div
              style={{
                width: 1,
                height: 48,
                background: "linear-gradient(to bottom, var(--gold), transparent)",
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 10,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.35)",
              }}
            >
              Scroll to explore
            </span>
          </div>
        </div>

        {/* Stats strip at bottom */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 2,
            display: "flex",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            background: "rgba(0,0,0,0.6)",
            backdropFilter: "blur(10px)",
          }}
        >
          {STATS.map((stat, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                padding: "20px 0",
                textAlign: "center",
                borderRight: i < STATS.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
              }}
            >
              <div className="stat-number" style={{ fontSize: 28 }}>
                {stat.value}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 11,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--gray-3)",
                  marginTop: 4,
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURED COLLECTION ───────────────────────────────────── */}
      <section
        style={{
          padding: "120px 80px",
          background: "var(--black-2)",
        }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 11,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "var(--gold)",
              marginBottom: 16,
            }}
          >
            Featured Collection
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(36px, 4vw, 56px)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              marginBottom: 20,
              lineHeight: 1.1,
            }}
          >
            Masterpieces in Motion
          </h2>
          <div className="gold-divider" />
        </div>

        {/* Car Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
            maxWidth: 1280,
            margin: "0 auto",
          }}
        >
          {CARS.map((car) => (
            <div key={car.id} className="car-card">
              {/* Image */}
              <div style={{ position: "relative", overflow: "hidden" }}>
                <img src={car.img} alt={car.name} className="car-card-img" />
                {/* Badge */}
                <div
                  style={{
                    position: "absolute",
                    top: 16,
                    left: 16,
                    padding: "4px 14px",
                    borderRadius: 999,
                    border: "1px solid rgba(201,168,76,0.5)",
                    background: "rgba(201,168,76,0.1)",
                    fontFamily: "var(--font-display)",
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: "0.2em",
                    color: "var(--gold-light)",
                  }}
                >
                  {car.badge}
                </div>
                {/* Gradient on image bottom */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: 80,
                    background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
                  }}
                />
              </div>

              {/* Content */}
              <div style={{ padding: "24px 28px 28px" }}>
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 10,
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    color: "var(--gray-3)",
                    marginBottom: 8,
                  }}
                >
                  {car.tagline}
                </p>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 22,
                    fontWeight: 700,
                    letterSpacing: "-0.01em",
                    marginBottom: 16,
                  }}
                >
                  {car.name}
                </h3>

                {/* Specs */}
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
                  {car.specs.map((spec) => (
                    <span
                      key={spec}
                      style={{
                        padding: "5px 14px",
                        borderRadius: 999,
                        border: "1px solid rgba(255,255,255,0.08)",
                        background: "rgba(255,255,255,0.03)",
                        fontSize: 12,
                        color: "var(--gray-2)",
                        fontFamily: "var(--font-body)",
                      }}
                    >
                      {spec}
                    </span>
                  ))}
                </div>

                {/* Price + CTA */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingTop: 20,
                    borderTop: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <div>
                    <p style={{ fontSize: 11, color: "var(--gray-3)", marginBottom: 4, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                      Starting from
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: 22,
                        fontWeight: 700,
                        color: "var(--gold-light)",
                      }}
                    >
                      {car.price}
                    </p>
                  </div>
                  <button
                    className="btn-outline"
                    style={{ padding: "10px 22px", fontSize: 11 }}
                  >
                    Enquire
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 56 }}>
          <button className="btn-outline">View Full Collection →</button>
        </div>
      </section>

      {/* ── EXPERIENCE SECTION ────────────────────────────────────── */}
      <section
        style={{
          padding: "120px 80px",
          background: "var(--black-1)",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 80,
          alignItems: "center",
          maxWidth: 1440,
          margin: "0 auto",
          boxSizing: "border-box",
        }}
      >
        {/* Image side */}
        <div style={{ position: "relative" }}>
          <div
            style={{
              borderRadius: 20,
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <img
              src="/__mockup/images/interior.png"
              alt="Interior experience"
              style={{ width: "100%", height: 520, objectFit: "cover", display: "block" }}
            />
          </div>

          {/* Floating stat card */}
          <div
            className="glass-panel floating-badge"
            style={{
              position: "absolute",
              bottom: -20,
              right: -20,
              borderRadius: 16,
              padding: "20px 28px",
              minWidth: 160,
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 32,
                fontWeight: 800,
                color: "var(--gold-light)",
              }}
            >
              100%
            </div>
            <div style={{ fontSize: 12, color: "var(--gray-2)", marginTop: 2 }}>
              Bespoke crafted
            </div>
          </div>

          {/* Gold accent line */}
          <div
            style={{
              position: "absolute",
              top: 40,
              left: -24,
              width: 3,
              height: 120,
              background: "linear-gradient(to bottom, transparent, var(--gold), transparent)",
              borderRadius: 2,
            }}
          />
        </div>

        {/* Text side */}
        <div>
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 11,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "var(--gold)",
              marginBottom: 20,
            }}
          >
            The Veyron Experience
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(32px, 3.5vw, 48px)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              marginBottom: 28,
            }}
          >
            Where Engineering
            <br />
            Meets <span className="text-gold-shimmer">Artistry.</span>
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.55)",
              lineHeight: 1.85,
              marginBottom: 40,
              fontSize: 16,
            }}
          >
            Every Veyron vehicle is the result of thousands of hours of hand-craftsmanship, precision engineering, and obsessive attention to detail. From the stitching on the seats to the resonance of the exhaust note — nothing is left to chance.
          </p>

          {/* Feature list */}
          {[
            "Hand-stitched full-grain leather interiors",
            "Carbon fibre monocoque construction",
            "Bespoke exhaust tuning by acoustic engineers",
            "28-day quality inspection process",
          ].map((feat, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                marginBottom: 16,
              }}
            >
              <div
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: "50%",
                  border: "1px solid var(--gold)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                  <path d="M1 4l3 3 5-6" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", lineHeight: 1.5 }}>
                {feat}
              </span>
            </div>
          ))}

          <div style={{ marginTop: 48 }}>
            <button className="btn-gold">Schedule a Private Tour</button>
          </div>
        </div>
      </section>

      {/* ── BRANDS STRIP ──────────────────────────────────────────── */}
      <div className="sep-line" />
      <div
        style={{
          padding: "40px 80px",
          background: "var(--black-1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 10,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "var(--gray-4)",
            marginRight: 32,
            whiteSpace: "nowrap",
          }}
        >
          Authorized Dealer
        </span>
        {["LAMBORGHINI", "FERRARI", "ASTON MARTIN", "ROLLS-ROYCE", "BENTLEY", "McLAREN"].map(
          (brand) => (
            <div
              key={brand}
              style={{
                padding: "8px 20px",
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: 12,
                letterSpacing: "0.12em",
                color: "rgba(255,255,255,0.2)",
                transition: "color 0.3s ease",
                cursor: "default",
                borderRight: brand !== "McLAREN" ? "1px solid rgba(255,255,255,0.05)" : "none",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.color = "rgba(201,168,76,0.7)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.color = "rgba(255,255,255,0.2)")}
            >
              {brand}
            </div>
          )
        )}
      </div>
      <div className="sep-line" />

      {/* ── TESTIMONIALS ──────────────────────────────────────────── */}
      <section
        style={{
          padding: "120px 80px",
          background: "var(--black-2)",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 11,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "var(--gold)",
              marginBottom: 16,
            }}
          >
            Client Stories
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(32px, 4vw, 48px)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              marginBottom: 20,
            }}
          >
            Voices of Excellence
          </h2>
          <div className="gold-divider" />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
            maxWidth: 1200,
            margin: "0 auto",
          }}
        >
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="testimonial-card">
              <StarRating count={t.rating} />
              <p
                style={{
                  marginTop: 20,
                  marginBottom: 28,
                  fontSize: 15,
                  lineHeight: 1.75,
                  color: "rgba(255,255,255,0.65)",
                  fontStyle: "italic",
                }}
              >
                "{t.quote}"
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, var(--gold-dark), var(--gold))",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: 14,
                    color: "var(--black)",
                    flexShrink: 0,
                  }}
                >
                  {t.avatar}
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 600,
                      fontSize: 14,
                      marginBottom: 2,
                    }}
                  >
                    {t.name}
                  </p>
                  <p style={{ fontSize: 12, color: "var(--gray-3)" }}>{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SIGNUP SECTION ────────────────────────────────────────── */}
      <section
        id="signup"
        style={{
          padding: "120px 80px",
          background: "var(--black-1)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background glow */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            width: 800,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(ellipse, rgba(201,168,76,0.04) 0%, transparent 70%)",
            filter: "blur(60px)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: 660,
            margin: "0 auto",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 11,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "var(--gold)",
                marginBottom: 16,
              }}
            >
              Private Access
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(32px, 4vw, 52px)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
                marginBottom: 16,
              }}
            >
              Join the Inner Circle
            </h2>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 15, lineHeight: 1.75 }}>
              Register for exclusive first access to new arrivals, private events, and bespoke acquisition opportunities reserved for Veyron members.
            </p>
          </div>

          {/* Form */}
          <div
            className="glass-panel"
            style={{
              borderRadius: 24,
              padding: "48px 48px 52px",
              boxShadow: "0 40px 80px rgba(0,0,0,0.5), 0 0 1px rgba(201,168,76,0.15)",
            }}
          >
            {submitted ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div
                  style={{
                    width: 72,
                    height: 72,
                    borderRadius: "50%",
                    border: "2px solid var(--gold)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 24px",
                    boxShadow: "0 0 24px rgba(201,168,76,0.3)",
                  }}
                >
                  <svg width="30" height="24" viewBox="0 0 30 24" fill="none">
                    <path d="M2 12l9 9L28 2" stroke="#C9A84C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 24,
                    fontWeight: 700,
                    marginBottom: 12,
                  }}
                >
                  Welcome to Veyron.
                </h3>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 15, lineHeight: 1.7 }}>
                  Your membership request has been received. A private advisor will be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 16,
                    marginBottom: 16,
                  }}
                >
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontFamily: "var(--font-display)",
                        fontSize: 11,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "var(--gray-3)",
                        marginBottom: 8,
                      }}
                    >
                      Full Name
                    </label>
                    <input
                      className="luxury-input"
                      type="text"
                      placeholder="Alexander Voss"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontFamily: "var(--font-display)",
                        fontSize: 11,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "var(--gray-3)",
                        marginBottom: 8,
                      }}
                    >
                      Email Address
                    </label>
                    <input
                      className="luxury-input"
                      type="email"
                      placeholder="alex@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div style={{ marginBottom: 28 }}>
                  <label
                    style={{
                      display: "block",
                      fontFamily: "var(--font-display)",
                      fontSize: 11,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--gray-3)",
                      marginBottom: 8,
                    }}
                  >
                    Vehicle Interest
                  </label>
                  <select
                    className="luxury-input"
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: 8,
                      color: formData.interest ? "var(--white)" : "rgba(255,255,255,0.3)",
                      fontFamily: "var(--font-body)",
                      fontSize: 14,
                      padding: "13px 18px",
                      outline: "none",
                      width: "100%",
                      cursor: "pointer",
                      appearance: "none",
                      WebkitAppearance: "none",
                    }}
                    required
                  >
                    <option value="" style={{ background: "#111", color: "#fff" }}>Select your preference…</option>
                    <option value="supercar" style={{ background: "#111" }}>Supercar / Hypercar</option>
                    <option value="gt" style={{ background: "#111" }}>Grand Tourer</option>
                    <option value="suv" style={{ background: "#111" }}>Ultra-Luxury SUV</option>
                    <option value="bespoke" style={{ background: "#111" }}>Bespoke Commission</option>
                    <option value="investment" style={{ background: "#111" }}>Collector / Investment</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="btn-gold"
                  style={{ width: "100%", padding: "16px", fontSize: 13 }}
                >
                  Request Membership
                </button>

                <p
                  style={{
                    textAlign: "center",
                    marginTop: 18,
                    fontSize: 12,
                    color: "rgba(255,255,255,0.25)",
                    lineHeight: 1.6,
                  }}
                >
                  Your information is kept strictly confidential and never shared.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── FAQ SECTION ───────────────────────────────────────────── */}
      <section
        style={{
          padding: "100px 80px",
          background: "var(--black-2)",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.5fr",
            gap: 80,
            maxWidth: 1200,
            margin: "0 auto",
            alignItems: "start",
          }}
        >
          {/* Left label */}
          <div style={{ position: "sticky", top: 100 }}>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 11,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "var(--gold)",
                marginBottom: 16,
              }}
            >
              FAQ
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(32px, 3.5vw, 44px)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                lineHeight: 1.15,
                marginBottom: 24,
              }}
            >
              Everything
              <br />
              You Need
              <br />
              to Know.
            </h2>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 14, lineHeight: 1.8 }}>
              Have a question not answered here? Our private advisors are available 24/7.
            </p>
            <div style={{ marginTop: 32 }}>
              <button className="btn-outline" style={{ padding: "12px 28px", fontSize: 11 }}>
                Contact an Advisor
              </button>
            </div>
          </div>

          {/* Right accordion */}
          <div>
            {FAQS.map((faq, i) => (
              <FAQItem key={i} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────────────────── */}
      <footer
        style={{
          background: "var(--black)",
          padding: "64px 80px 40px",
          borderTop: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: 48,
            maxWidth: 1280,
            margin: "0 auto",
            paddingBottom: 48,
            borderBottom: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          {/* Brand column */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  border: "1.5px solid var(--gold)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: 16,
                  letterSpacing: "0.15em",
                }}
              >
                VEYRON
              </span>
            </div>
            <p style={{ color: "rgba(255,255,255,0.35)", fontSize: 13, lineHeight: 1.85, maxWidth: 260 }}>
              The world's most exceptional automotive collection. Curated for those who refuse compromise.
            </p>
            {/* Social Icons */}
            <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
              {["IG", "TW", "LI", "YT"].map((s) => (
                <div
                  key={s}
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    border: "1px solid rgba(255,255,255,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 10,
                    color: "rgba(255,255,255,0.4)",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    fontFamily: "var(--font-display)",
                    fontWeight: 600,
                    letterSpacing: "0.05em",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.borderColor = "var(--gold)";
                    el.style.color = "var(--gold)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.borderColor = "rgba(255,255,255,0.1)";
                    el.style.color = "rgba(255,255,255,0.4)";
                  }}
                >
                  {s}
                </div>
              ))}
            </div>
          </div>

          {/* Links columns */}
          {[
            { title: "Collection", links: ["Supercars", "Grand Tourers", "SUVs", "Classic Cars", "Pre-Owned"] },
            { title: "Company", links: ["About Veyron", "Showrooms", "Careers", "Press", "Sustainability"] },
            { title: "Services", links: ["Financing", "Insurance", "Delivery", "Maintenance", "Trade-In"] },
          ].map((col) => (
            <div key={col.title}>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 11,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.5)",
                  marginBottom: 20,
                }}
              >
                {col.title}
              </p>
              {col.links.map((link) => (
                <a
                  key={link}
                  href="#"
                  style={{
                    display: "block",
                    color: "rgba(255,255,255,0.3)",
                    textDecoration: "none",
                    fontSize: 13,
                    marginBottom: 12,
                    transition: "color 0.2s ease",
                    fontFamily: "var(--font-body)",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--gold-light)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.3)")}
                >
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 28,
            maxWidth: 1280,
            margin: "0 auto",
          }}
        >
          <p style={{ fontSize: 12, color: "rgba(255,255,255,0.2)", fontFamily: "var(--font-body)" }}>
            © 2025 Veyron Motors. All rights reserved. The pinnacle of automotive excellence.
          </p>
          <div style={{ display: "flex", gap: 28 }}>
            {["Privacy Policy", "Terms of Use", "Cookie Preferences"].map((link) => (
              <a
                key={link}
                href="#"
                style={{
                  fontSize: 12,
                  color: "rgba(255,255,255,0.2)",
                  textDecoration: "none",
                  fontFamily: "var(--font-body)",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.5)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.2)")}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
