"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Flag, ArrowRight, Mail } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

function AnimatedSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const formatSteps = [
  {
    number: "01",
    title: "The Driver",
    description:
      "A professional F1 or racing driver behind the wheel, pushing the car to its limits while the pitch unfolds at 200+ km/h.",
    color: "#dc2626",
  },
  {
    number: "02",
    title: "The Exec",
    description:
      "A C-suite executive from a leading company rides shotgun, evaluating the pitch under the most high-pressure conditions imaginable.",
    color: "var(--accent)",
  },
  {
    number: "03",
    title: "The Pitch",
    description:
      "A founder delivers their entire company pitch during one lap. No slides. No safety net. Just conviction, clarity, and raw nerves.",
    color: "#dc2626",
  },
  {
    number: "04",
    title: "The Lap",
    description:
      "One lap. One chance. The clock is ticking, the g-forces are real, and the pitch must land before the checkered flag.",
    color: "var(--accent)",
  },
];

export default function PrimeLapPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* ===== HERO: Full-bleed racing energy ===== */}
        <section
          className="relative min-h-screen flex items-center justify-center overflow-hidden"
          style={{ backgroundColor: "var(--hero-bg)" }}
        >
          {/* Racing lines SVG -- large, dominating */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <img
                src="/art/racing-lines.svg"
                alt=""
                aria-hidden="true"
                className="w-full h-full object-cover opacity-80"
              />
            </motion.div>
          </div>

          {/* Animated speed streaks via CSS */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-[2px]"
                style={{
                  top: `${10 + i * 11}%`,
                  left: "-20%",
                  width: "140%",
                  background:
                    i % 2 === 0
                      ? "linear-gradient(90deg, transparent, rgba(220,38,38,0.2), transparent)"
                      : `linear-gradient(90deg, transparent, color-mix(in srgb, var(--accent) 15%, transparent), transparent)`,
                }}
                animate={{
                  x: ["-100%", "100%"],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 1.5 + i * 0.4,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "linear",
                }}
              />
            ))}
          </div>

          {/* Red radial glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(220,38,38,0.1)_0%,transparent_50%)]" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 80% 30%, var(--hero-glow-2) 0%, transparent 50%)",
            }}
          />

          {/* Diagonal checkered pattern (top-right corner) */}
          <div
            className="absolute top-0 right-0 w-[400px] h-[400px] pointer-events-none opacity-[0.03]"
            style={{
              backgroundImage: `repeating-conic-gradient(currentColor 0% 25%, transparent 0% 50%)`,
              backgroundSize: "40px 40px",
              transform: "rotate(45deg) translate(30%, -30%)",
              color: "var(--text-on-dark)",
            }}
          />

          <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
            {/* Coming Soon badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-10"
            >
              <span className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-full px-5 py-2.5">
                <Flag size={14} className="text-red-400" />
                <span className="text-xs font-semibold tracking-[0.2em] text-red-400 uppercase">
                  Coming Soon
                </span>
              </span>
            </motion.div>

            {/* Title -- dramatic, bold, stretched */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <h1
                className="text-7xl sm:text-8xl md:text-9xl font-black tracking-[0.08em] uppercase mb-2 leading-none"
                style={{ color: "var(--text-on-dark)" }}
              >
                PRIME
              </h1>
              <h1
                className="text-7xl sm:text-8xl md:text-9xl font-extralight tracking-[0.25em] uppercase mb-6 leading-none"
                style={{
                  color: "transparent",
                  WebkitTextStroke: "1px var(--text-on-dark)",
                }}
              >
                LAP
              </h1>
            </motion.div>

            {/* Subtitle with diagonal red stripe accent */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative"
            >
              {/* Diagonal stripe accent */}
              <div className="flex items-center justify-center gap-4 mb-6">
                <div
                  className="h-[2px] w-16"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, #dc2626, transparent)",
                  }}
                />
                <div
                  className="w-3 h-3 rotate-45 border"
                  style={{ borderColor: "rgba(220,38,38,0.4)" }}
                />
                <div
                  className="h-[2px] w-16"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, #dc2626, transparent)",
                  }}
                />
              </div>

              <p
                className="text-xl md:text-2xl font-light tracking-wide mb-4"
                style={{ color: "var(--nav-text-muted)" }}
              >
                Where Innovation Meets the Fast Lane
              </p>
              <p
                className="max-w-2xl mx-auto leading-relaxed"
                style={{ color: "var(--text-muted)" }}
              >
                The world&apos;s most intense pitch format. One founder. One F1
                car. One lap. Can you build conviction at 200 km/h?
              </p>
            </motion.div>

            {/* Speed indicator */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 1.2, delay: 1 }}
              className="mt-16 max-w-md mx-auto"
            >
              <div
                className="h-[1px] w-full"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, #dc2626, var(--accent), transparent)",
                }}
              />
              <div className="flex justify-between mt-2">
                <span
                  className="text-[10px] tracking-[0.2em] uppercase"
                  style={{ color: "var(--text-muted)" }}
                >
                  0 km/h
                </span>
                <span className="text-[10px] tracking-[0.2em] uppercase text-red-400">
                  200+ km/h
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ===== YIN-YANG CONTRAST DIVIDER ===== */}
        <div
          className="relative h-24 overflow-hidden"
          style={{ backgroundColor: "var(--bg-secondary)" }}
        >
          {/* The transition from speed to calm, then back */}
          <div className="absolute inset-0 flex items-center">
            <div
              className="w-full h-[1px]"
              style={{
                background: `linear-gradient(90deg, #dc2626, var(--accent), var(--accent), #dc2626)`,
                opacity: 0.2,
              }}
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex items-center gap-6">
              <span
                className="text-[10px] tracking-[0.3em] uppercase font-medium"
                style={{ color: "var(--text-muted)" }}
              >
                YANG
              </span>
              <div
                className="w-6 h-6 rounded-full border flex items-center justify-center"
                style={{ borderColor: "var(--accent)" }}
              >
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: "var(--accent)" }}
                />
              </div>
              <span
                className="text-[10px] tracking-[0.3em] uppercase font-medium"
                style={{ color: "var(--text-muted)" }}
              >
                YIN
              </span>
            </div>
          </div>
        </div>

        {/* ===== CONCEPT ===== */}
        <section
          className="py-24 md:py-32"
          style={{ backgroundColor: "var(--bg-secondary)" }}
        >
          <div className="max-w-4xl mx-auto px-6 lg:px-12">
            <AnimatedSection>
              <p
                className="text-xs tracking-[0.3em] uppercase font-medium mb-3"
                style={{ color: "var(--accent)" }}
              >
                The Concept
              </p>
              <h2
                className="text-3xl md:text-4xl font-light mb-8 tracking-tight"
                style={{ color: "var(--text-primary)" }}
              >
                Innovation Under Pressure
              </h2>
              <div
                className="space-y-5 leading-relaxed text-lg"
                style={{
                  color:
                    "color-mix(in srgb, var(--text-primary) 70%, transparent)",
                }}
              >
                <p>
                  Prime Lap strips away the comfort of a conference room and puts
                  founders exactly where they claim to thrive: under extreme
                  pressure. Paired with a professional racing driver and a top
                  company executive, each founder must deliver their entire pitch
                  during a single high-speed lap.
                </p>
                <p>
                  No PowerPoint. No rehearsed pauses. No second chances. Just a
                  founder, a steering wheel, and the raw conviction that their
                  company deserves to exist. The format reveals something no
                  boardroom ever could: who you are when the stakes are real and
                  the clock is non-negotiable.
                </p>
                <p>
                  Developed in partnership with{" "}
                  <span
                    style={{
                      color: "var(--text-primary)",
                      fontWeight: 600,
                    }}
                  >
                    Prime Movers Lab
                  </span>
                  , the venture fund that backs breakthrough scientific startups,
                  Prime Lap connects with Jodi&apos;s placement agency to match
                  exceptional talent with the companies that survive the lap.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ===== THE FORMAT: Racing-styled cards ===== */}
        <section
          className="py-24 md:py-32 relative overflow-hidden"
          style={{ backgroundColor: "var(--hero-bg)" }}
        >
          {/* Background racing lines, subtle */}
          <div className="absolute inset-0 pointer-events-none opacity-30">
            <img
              src="/art/racing-lines.svg"
              alt=""
              aria-hidden="true"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12">
            <AnimatedSection>
              <p
                className="text-xs tracking-[0.3em] uppercase font-medium mb-3"
                style={{ color: "var(--accent)" }}
              >
                The Format
              </p>
              <h2
                className="text-3xl md:text-4xl font-light mb-16 tracking-tight"
                style={{ color: "var(--text-on-dark)" }}
              >
                Four Elements, One Lap
              </h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {formatSteps.map((step, index) => (
                <AnimatedSection key={step.title} delay={index * 0.1}>
                  <div
                    className="relative rounded-lg p-8 h-full overflow-hidden group"
                    style={{
                      backgroundColor: "var(--bg-card-dark)",
                      border: "1px solid var(--border-on-dark-strong)",
                    }}
                  >
                    {/* Diagonal racing stripe */}
                    <div
                      className="absolute top-0 right-0 w-24 h-full pointer-events-none opacity-[0.06]"
                      style={{
                        background: `repeating-linear-gradient(-45deg, ${step.color}, ${step.color} 2px, transparent 2px, transparent 12px)`,
                      }}
                    />

                    {/* Top accent bar */}
                    <div
                      className="absolute top-0 left-0 right-0 h-[2px]"
                      style={{
                        background: `linear-gradient(90deg, ${step.color}, transparent)`,
                        opacity: 0.4,
                      }}
                    />

                    <div className="relative z-10">
                      {/* Step number -- large, racing-style */}
                      <div className="flex items-start justify-between mb-5">
                        <span
                          className="text-5xl font-black tracking-tighter leading-none"
                          style={{
                            color: step.color,
                            opacity: 0.15,
                          }}
                        >
                          {step.number}
                        </span>

                        {/* Checkered flag mini icon for last card */}
                        {index === 3 && (
                          <div
                            className="w-8 h-8 opacity-[0.15]"
                            style={{
                              backgroundImage: `repeating-conic-gradient(var(--text-on-dark) 0% 25%, transparent 0% 50%)`,
                              backgroundSize: "8px 8px",
                            }}
                          />
                        )}
                      </div>

                      <h3
                        className="text-xl font-bold mb-3 tracking-wide uppercase"
                        style={{ color: "var(--text-on-dark)" }}
                      >
                        {step.title}
                      </h3>
                      <p
                        className="leading-relaxed"
                        style={{ color: "var(--nav-text-muted)" }}
                      >
                        {step.description}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ===== THE DUALITY: Speed + Calm ===== */}
        <section
          className="py-24 md:py-32 relative overflow-hidden"
          style={{ backgroundColor: "var(--bg-secondary)" }}
        >
          <div className="max-w-5xl mx-auto px-6 lg:px-12">
            <AnimatedSection>
              <div className="text-center mb-16">
                <p
                  className="text-xs tracking-[0.3em] uppercase font-medium mb-3"
                  style={{ color: "var(--accent)" }}
                >
                  The Duality
                </p>
                <h2
                  className="text-3xl md:text-4xl font-light tracking-tight"
                  style={{ color: "var(--text-primary)" }}
                >
                  Speed Meets Stillness
                </h2>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-0">
              {/* YANG side: Racing */}
              <AnimatedSection delay={0.1}>
                <div
                  className="relative p-10 md:p-12 overflow-hidden"
                  style={{
                    borderRight: "none",
                    borderBottom: "1px solid var(--input-border)",
                  }}
                >
                  {/* Racing lines background */}
                  <div className="absolute inset-0 pointer-events-none opacity-20">
                    <img
                      src="/art/racing-lines.svg"
                      alt=""
                      aria-hidden="true"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="relative z-10">
                    <span className="text-red-400 text-[10px] tracking-[0.3em] uppercase font-bold">
                      Yang
                    </span>
                    <h3
                      className="text-2xl font-bold mt-2 mb-4"
                      style={{ color: "var(--text-primary)" }}
                    >
                      Prime Lap
                    </h3>
                    <ul
                      className="space-y-2 text-sm"
                      style={{
                        color:
                          "color-mix(in srgb, var(--text-primary) 65%, transparent)",
                      }}
                    >
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-red-400 rotate-45 shrink-0" />
                        Speed and adrenaline
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-red-400 rotate-45 shrink-0" />
                        High-pressure conviction
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-red-400 rotate-45 shrink-0" />
                        Wealth, ambition, velocity
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-red-400 rotate-45 shrink-0" />
                        The race to build
                      </li>
                    </ul>
                  </div>
                </div>
              </AnimatedSection>

              {/* YIN side: Botanical / Joyous */}
              <AnimatedSection delay={0.2}>
                <div
                  className="relative p-10 md:p-12 overflow-hidden"
                  style={{
                    borderBottom: "1px solid var(--input-border)",
                  }}
                >
                  {/* Botanical background */}
                  <div className="absolute inset-0 pointer-events-none opacity-30">
                    <img
                      src="/art/chinese-clouds.svg"
                      alt=""
                      aria-hidden="true"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="relative z-10">
                    <span
                      className="text-[10px] tracking-[0.3em] uppercase font-bold"
                      style={{ color: "var(--accent)" }}
                    >
                      Yin
                    </span>
                    <h3
                      className="text-2xl font-light mt-2 mb-4"
                      style={{ color: "var(--text-primary)" }}
                    >
                      Joyous
                    </h3>
                    <ul
                      className="space-y-2 text-sm"
                      style={{
                        color:
                          "color-mix(in srgb, var(--text-primary) 65%, transparent)",
                      }}
                    >
                      <li className="flex items-center gap-2">
                        <div
                          className="w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ backgroundColor: "var(--accent)" }}
                        />
                        Calm and reflection
                      </li>
                      <li className="flex items-center gap-2">
                        <div
                          className="w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ backgroundColor: "var(--accent)" }}
                        />
                        Deep listening and wisdom
                      </li>
                      <li className="flex items-center gap-2">
                        <div
                          className="w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ backgroundColor: "var(--accent)" }}
                        />
                        Health, balance, harmony
                      </li>
                      <li className="flex items-center gap-2">
                        <div
                          className="w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ backgroundColor: "var(--accent)" }}
                        />
                        The art of living well
                      </li>
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Connecting statement */}
            <AnimatedSection delay={0.3}>
              <div className="text-center mt-12">
                <p
                  className="text-lg font-light italic leading-relaxed max-w-xl mx-auto"
                  style={{
                    color:
                      "color-mix(in srgb, var(--text-primary) 70%, transparent)",
                  }}
                >
                  This duality is the podcast&apos;s message. Wealth without
                  health is hollow. Health without ambition is incomplete. Prime
                  Lap is the proof that both can coexist &mdash; at 200 km/h.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ===== PARTNERSHIP ===== */}
        <section
          className="py-24 md:py-32"
          style={{ backgroundColor: "var(--hero-bg)" }}
        >
          <div className="max-w-5xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <AnimatedSection>
                <div>
                  <p
                    className="text-xs tracking-[0.3em] uppercase font-medium mb-3"
                    style={{ color: "var(--accent)" }}
                  >
                    Partnership
                  </p>
                  <h3
                    className="text-2xl font-semibold mb-4"
                    style={{ color: "var(--text-on-dark)" }}
                  >
                    Prime Movers Lab
                  </h3>
                  <p
                    className="leading-relaxed mb-6"
                    style={{ color: "var(--nav-text-muted)" }}
                  >
                    Prime Movers Lab invests in breakthrough scientific startups
                    building the future of energy, transportation, computing, and
                    human health. Their portfolio of audacious founders is the
                    perfect proving ground for the Prime Lap format.
                  </p>
                  <p
                    className="leading-relaxed"
                    style={{ color: "var(--nav-text-muted)" }}
                  >
                    Together, we&apos;re creating a new way to evaluate
                    founders: not by their slides, but by their composure,
                    clarity, and conviction under genuine duress.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.15}>
                <div>
                  <p
                    className="text-xs tracking-[0.3em] uppercase font-medium mb-3"
                    style={{ color: "var(--accent)" }}
                  >
                    The Connection
                  </p>
                  <h3
                    className="text-2xl font-semibold mb-4"
                    style={{ color: "var(--text-on-dark)" }}
                  >
                    Placement Network
                  </h3>
                  <p
                    className="leading-relaxed mb-6"
                    style={{ color: "var(--nav-text-muted)" }}
                  >
                    Prime Lap isn&apos;t just entertainment. Companies that
                    survive the lap gain access to Jodi&apos;s curated placement
                    network &mdash; connecting them with exceptional executives,
                    operators, and advisors who are drawn to the kind of founders
                    bold enough to pitch at 200 km/h.
                  </p>
                  <p
                    className="leading-relaxed"
                    style={{ color: "var(--nav-text-muted)" }}
                  >
                    It&apos;s a filter. A signal. And for the right companies,
                    it&apos;s the beginning of something extraordinary.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ===== CTA: Take the Lap ===== */}
        <section
          className="relative py-24 md:py-32 overflow-hidden"
          style={{ backgroundColor: "var(--bg-secondary)" }}
        >
          {/* Animated speed lines */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-[1px]"
                style={{
                  top: `${20 + i * 15}%`,
                  left: "-10%",
                  width: "120%",
                  background:
                    "linear-gradient(90deg, transparent, rgba(220,38,38,0.12), transparent)",
                }}
                animate={{
                  x: ["-100%", "100%"],
                  opacity: [0, 0.6, 0],
                }}
                transition={{
                  duration: 4 + i * 0.6,
                  repeat: Infinity,
                  delay: i * 0.7,
                  ease: "linear",
                }}
              />
            ))}
          </div>

          {/* Checkered flag stripe at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-2 pointer-events-none opacity-[0.06]">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `repeating-conic-gradient(var(--text-primary) 0% 25%, transparent 0% 50%)`,
                backgroundSize: "16px 16px",
              }}
            />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-12 text-center">
            <AnimatedSection>
              <h2
                className="text-3xl md:text-4xl font-light mb-4 tracking-tight"
                style={{ color: "var(--text-primary)" }}
              >
                Ready to Take the Lap?
              </h2>
              <p
                className="leading-relaxed mb-10 max-w-lg mx-auto"
                style={{
                  color:
                    "color-mix(in srgb, var(--text-primary) 60%, transparent)",
                }}
              >
                Prime Lap is launching soon. If your company has what it takes to
                pitch at 200 km/h, we want to hear from you.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/connect"
                  className="group flex items-center gap-3 px-8 py-4 rounded-full text-sm font-semibold tracking-wide uppercase transition-all duration-300"
                  style={{
                    backgroundColor: "var(--btn-primary-bg)",
                    color: "var(--btn-primary-text)",
                  }}
                >
                  <Mail size={16} />
                  Get in Touch
                </Link>
                <Link
                  href="/episodes"
                  className="group flex items-center gap-2 border px-8 py-4 rounded-full text-sm font-medium tracking-wide uppercase transition-all duration-300"
                  style={{
                    borderColor: "var(--input-border)",
                    color: "var(--text-primary)",
                  }}
                >
                  Listen to Joyous
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
