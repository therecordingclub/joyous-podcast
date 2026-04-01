"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  Zap,
  Flag,
  Timer,
  Users,
  Mic2,
  Gauge,
  ArrowRight,
  Mail,
  Rocket,
  Trophy,
} from "lucide-react";
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

const formatCards = [
  {
    icon: Gauge,
    title: "The Driver",
    description:
      "A professional F1 or racing driver behind the wheel, pushing the car to its limits while the pitch unfolds at 200+ km/h.",
    accent: "from-red-500/20 to-red-600/5",
    border: "border-red-500/20",
  },
  {
    icon: Users,
    title: "The Exec",
    description:
      "A C-suite executive from a leading company rides shotgun, evaluating the pitch under the most high-pressure conditions imaginable.",
    accentStyle: { background: `linear-gradient(to bottom right, color-mix(in srgb, var(--accent) 20%, transparent), color-mix(in srgb, var(--accent) 5%, transparent))` },
    borderStyle: { borderColor: "color-mix(in srgb, var(--accent) 20%, transparent)" },
  },
  {
    icon: Mic2,
    title: "The Pitch",
    description:
      "A founder delivers their entire company pitch during one lap. No slides. No safety net. Just conviction, clarity, and raw nerves.",
    accent: "from-blue-500/20 to-blue-600/5",
    border: "border-blue-500/20",
  },
  {
    icon: Timer,
    title: "The Lap",
    description:
      "One lap. One chance. The clock is ticking, the g-forces are real, and the pitch must land before the checkered flag.",
    accent: "from-emerald-500/20 to-emerald-600/5",
    border: "border-emerald-500/20",
  },
];

export default function PrimeLabPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Dramatic Hero */}
        <section
          className="relative min-h-screen flex items-center justify-center overflow-hidden"
          style={{ backgroundColor: "var(--hero-bg)" }}
        >
          {/* Speed lines via CSS */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-[1px]"
                style={{
                  top: `${8 + i * 7.5}%`,
                  left: "-20%",
                  width: "140%",
                  background: `linear-gradient(90deg, transparent, ${
                    i % 3 === 0
                      ? "rgba(220,38,38,0.15)"
                      : "color-mix(in srgb, var(--accent) 10%, transparent)"
                  }, transparent)`,
                }}
                animate={{
                  x: ["-100%", "100%"],
                  opacity: [0, 0.8, 0],
                }}
                transition={{
                  duration: 2 + i * 0.3,
                  repeat: Infinity,
                  delay: i * 0.4,
                  ease: "linear",
                }}
              />
            ))}
          </div>

          {/* Red/gold radial glows */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(220,38,38,0.08)_0%,transparent_50%)]" />
            <div
              className="absolute inset-0"
              style={{
                background: "radial-gradient(ellipse at 80% 30%, var(--hero-glow-2) 0%, transparent 50%)",
              }}
            />
          </div>

          {/* Grain */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
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

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-6xl sm:text-7xl md:text-8xl font-extralight tracking-[0.1em] uppercase mb-6"
              style={{ color: "var(--text-on-dark)" }}
            >
              Prime Lap
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
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

            {/* Decorative element */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="flex items-center justify-center gap-3 mt-12"
            >
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-red-500/40" />
              <Zap size={18} style={{ color: "var(--accent)" }} />
              <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-red-500/40" />
            </motion.div>
          </div>
        </section>

        {/* Concept Explanation */}
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
                style={{ color: "color-mix(in srgb, var(--text-primary) 70%, transparent)" }}
              >
                <p>
                  Prime Lap strips away the comfort of a conference room and
                  puts founders exactly where they claim to thrive: under
                  extreme pressure. Paired with a professional racing driver and
                  a top company executive, each founder must deliver their
                  entire pitch during a single high-speed lap.
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
                  <span style={{ color: "var(--text-primary)", fontWeight: 600 }}>
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

        {/* Format Cards */}
        <section
          className="py-24 md:py-32"
          style={{ backgroundColor: "var(--hero-bg)" }}
        >
          <div className="max-w-6xl mx-auto px-6 lg:px-12">
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
              {formatCards.map((card, index) => (
                <AnimatedSection key={card.title} delay={index * 0.1}>
                  <div
                    className={`relative rounded-2xl p-8 h-full overflow-hidden ${card.border || ""}`}
                    style={{
                      backgroundColor: "var(--bg-card-dark)",
                      border: card.borderStyle ? undefined : `1px solid`,
                      ...(card.borderStyle || {}),
                    }}
                  >
                    {/* Subtle gradient */}
                    {card.accent && (
                      <div className={`absolute inset-0 bg-gradient-to-br ${card.accent} pointer-events-none`} />
                    )}
                    {card.accentStyle && (
                      <div className="absolute inset-0 pointer-events-none" style={card.accentStyle} />
                    )}
                    <div className="relative z-10">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                        style={{ backgroundColor: "color-mix(in srgb, var(--text-on-dark) 5%, transparent)" }}
                      >
                        <card.icon size={22} style={{ color: "var(--accent)" }} />
                      </div>
                      <h3
                        className="text-xl font-semibold mb-3"
                        style={{ color: "var(--text-on-dark)" }}
                      >
                        {card.title}
                      </h3>
                      <p
                        className="leading-relaxed"
                        style={{ color: "var(--nav-text-muted)" }}
                      >
                        {card.description}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership + Placement Agency */}
        <section
          className="py-24 md:py-32"
          style={{ backgroundColor: "var(--bg-secondary)" }}
        >
          <div className="max-w-5xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <AnimatedSection>
                <div>
                  <Rocket size={24} className="mb-4" style={{ color: "var(--accent)" }} />
                  <h3 className="text-2xl font-semibold mb-4" style={{ color: "var(--text-primary)" }}>
                    Partnership with Prime Movers Lab
                  </h3>
                  <p className="leading-relaxed mb-6" style={{ color: "color-mix(in srgb, var(--text-primary) 70%, transparent)" }}>
                    Prime Movers Lab invests in breakthrough scientific startups building the future of energy, transportation, computing, and human health. Their portfolio of audacious founders is the perfect proving ground for the Prime Lap format.
                  </p>
                  <p className="leading-relaxed" style={{ color: "color-mix(in srgb, var(--text-primary) 70%, transparent)" }}>
                    Together, we&apos;re creating a new way to evaluate founders: not by their slides, but by their composure, clarity, and conviction under genuine duress.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.15}>
                <div>
                  <Trophy size={24} className="mb-4" style={{ color: "var(--accent)" }} />
                  <h3 className="text-2xl font-semibold mb-4" style={{ color: "var(--text-primary)" }}>
                    The Placement Connection
                  </h3>
                  <p className="leading-relaxed mb-6" style={{ color: "color-mix(in srgb, var(--text-primary) 70%, transparent)" }}>
                    Prime Lap isn&apos;t just entertainment. Companies that survive the lap gain access to Jodi&apos;s curated placement network &mdash; connecting them with exceptional executives, operators, and advisors who are drawn to the kind of founders bold enough to pitch at 200 km/h.
                  </p>
                  <p className="leading-relaxed" style={{ color: "color-mix(in srgb, var(--text-primary) 70%, transparent)" }}>
                    It&apos;s a filter. A signal. And for the right companies, it&apos;s the beginning of something extraordinary.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          className="relative py-24 md:py-32 overflow-hidden"
          style={{ backgroundColor: "var(--hero-bg)" }}
        >
          {/* Speed lines */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-[1px] bg-gradient-to-r from-transparent via-red-500/10 to-transparent"
                style={{
                  top: `${15 + i * 14}%`,
                  left: "-10%",
                  width: "120%",
                }}
                animate={{
                  x: ["-100%", "100%"],
                  opacity: [0, 0.5, 0],
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

          <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-12 text-center">
            <AnimatedSection>
              <h2
                className="text-3xl md:text-4xl font-light mb-4 tracking-tight"
                style={{ color: "var(--text-on-dark)" }}
              >
                Ready to Take the Lap?
              </h2>
              <p
                className="leading-relaxed mb-10 max-w-lg mx-auto"
                style={{ color: "var(--text-muted)" }}
              >
                Prime Lap is launching soon. If your company has what it takes
                to pitch at 200 km/h, we want to hear from you.
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
                    borderColor: "var(--border-on-dark-strong)",
                    color: "var(--text-on-dark)",
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
