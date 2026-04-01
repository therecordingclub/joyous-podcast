"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  ChevronDown,
  Play,
  Globe,
  MapPin,
  Mic,
  ArrowRight,
  Zap,
  Flag,
  Music,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AudioPlayer from "@/components/AudioPlayer";
import EpisodeCard from "@/components/EpisodeCard";
import { episodes, getLatestEpisode } from "@/lib/episodes";

/* ───────────────────────────────────────────────────
   Shared animation wrapper
   ─────────────────────────────────────────────────── */
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
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ───────────────────────────────────────────────────
   1. HERO  — Apothecary salon entrance
   ─────────────────────────────────────────────────── */
function HeroSection() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const cloudY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const ensoScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const ensoOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--hero-bg)]"
    >
      {/* Layer 1: Hero pattern at very low opacity */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("/art/hero-pattern.svg")`,
          backgroundSize: "600px 600px",
          backgroundRepeat: "repeat",
        }}
        aria-hidden="true"
      />

      {/* Layer 2: Gradient atmosphere */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 25% 30%, var(--hero-glow-1) 0%, transparent 55%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 75% 70%, var(--hero-glow-2) 0%, transparent 45%)",
          }}
        />
        <motion.div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, var(--hero-glow-pulse) 0%, transparent 35%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Layer 3: Ink wash circle — large, right-positioned */}
      <motion.div
        className="absolute -right-20 top-1/2 -translate-y-1/2 w-[700px] h-[700px] md:w-[900px] md:h-[900px] pointer-events-none"
        style={{
          scale: ensoScale,
          opacity: ensoOpacity,
          color: "var(--accent)",
        }}
        aria-hidden="true"
      >
        <img
          src="/art/ink-wash-circle.svg"
          alt=""
          className="w-full h-full"
          style={{ filter: "drop-shadow(0 0 60px var(--hero-glow-1))" }}
          aria-hidden="true"
        />
      </motion.div>

      {/* Layer 4: Chinese clouds — floating parallax */}
      <motion.div
        className="absolute top-8 left-0 w-full pointer-events-none opacity-60"
        style={{ y: cloudY, color: "var(--text-on-dark)" }}
        aria-hidden="true"
      >
        <img
          src="/art/chinese-clouds.svg"
          alt=""
          className="w-full max-w-3xl mx-auto"
          aria-hidden="true"
        />
      </motion.div>
      <motion.div
        className="absolute bottom-24 right-0 w-[300px] pointer-events-none opacity-30 rotate-180"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -40]), color: "var(--text-on-dark)" }}
        aria-hidden="true"
      >
        <img src="/art/chinese-clouds.svg" alt="" className="w-full" aria-hidden="true" />
      </motion.div>

      {/* Layer 5: Botanical frame around content */}
      <div
        className="absolute inset-8 md:inset-16 lg:inset-24 pointer-events-none"
        style={{ color: "var(--text-on-dark)" }}
        aria-hidden="true"
      >
        <img
          src="/art/botanical-frame.svg"
          alt=""
          className="w-full h-full object-contain opacity-40"
          aria-hidden="true"
        />
      </div>

      {/* Grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center gap-3 mb-10"
        >
          <div
            className="h-[1px] w-12"
            style={{
              background:
                "linear-gradient(to right, transparent, var(--accent))",
            }}
          />
          <p className="text-xs tracking-[0.5em] text-[var(--accent)] uppercase font-medium">
            A Podcast by Jodi Yang
          </p>
          <div
            className="h-[1px] w-12"
            style={{
              background:
                "linear-gradient(to left, transparent, var(--accent))",
            }}
          />
        </motion.div>

        {/* Title with leaf accent */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="relative inline-block mb-8"
        >
          {/* Leaf accent floating near the title */}
          <motion.div
            className="absolute -left-16 -top-6 w-12 h-12 md:-left-20 md:-top-8 md:w-16 md:h-16 pointer-events-none"
            style={{ color: "var(--accent)" }}
            animate={{ rotate: [0, 5, -3, 0], y: [0, -4, 2, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden="true"
          >
            <img src="/art/leaf-accent.svg" alt="" className="w-full h-full opacity-50" aria-hidden="true" />
          </motion.div>
          <motion.div
            className="absolute -right-14 bottom-0 w-10 h-10 md:-right-18 md:w-14 md:h-14 pointer-events-none rotate-[135deg]"
            style={{ color: "var(--accent)" }}
            animate={{ rotate: [135, 140, 130, 135], y: [0, 3, -2, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            aria-hidden="true"
          >
            <img src="/art/leaf-accent.svg" alt="" className="w-full h-full opacity-35" aria-hidden="true" />
          </motion.div>

          <h1 className="text-8xl sm:text-9xl md:text-[11rem] font-extralight tracking-[0.12em] text-[var(--text-on-dark)] uppercase leading-none">
            Joyous
          </h1>
        </motion.div>

        {/* Bilingual subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mb-6"
        >
          <p className="text-2xl md:text-3xl font-light text-[var(--accent)] tracking-wide mb-2">
            <span className="font-serif" style={{ fontStyle: "italic" }}>
              Where Health Meets Wealth
            </span>
          </p>
          <p
            className="text-lg md:text-xl tracking-[0.15em]"
            style={{
              color: "color-mix(in srgb, var(--text-on-dark) 50%, transparent)",
            }}
          >
            健康与财富的交汇
          </p>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="max-w-xl mx-auto text-sm md:text-base text-[var(--text-muted)] leading-relaxed mb-14 tracking-wide"
        >
          Intimate conversations with founders, investors, creatives, and
          artists who live at the intersection of wellbeing and prosperity.
        </motion.p>

        {/* CTA buttons — styled like vintage apothecary labels */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <Link
            href="/episodes"
            className="group relative flex items-center gap-3 px-10 py-4 text-sm font-semibold tracking-[0.15em] uppercase transition-all duration-500"
            style={{
              backgroundColor: "var(--btn-primary-bg)",
              color: "var(--btn-primary-text)",
              border: "1px solid var(--accent)",
              borderRadius: "2px",
              boxShadow: "inset 0 0 0 1px color-mix(in srgb, var(--accent-light) 30%, transparent)",
            }}
          >
            {/* Corner ornaments */}
            <span className="absolute top-0 left-0 w-3 h-3 border-t border-l transition-all duration-300 group-hover:w-5 group-hover:h-5" style={{ borderColor: "var(--btn-primary-text)" }} />
            <span className="absolute top-0 right-0 w-3 h-3 border-t border-r transition-all duration-300 group-hover:w-5 group-hover:h-5" style={{ borderColor: "var(--btn-primary-text)" }} />
            <span className="absolute bottom-0 left-0 w-3 h-3 border-b border-l transition-all duration-300 group-hover:w-5 group-hover:h-5" style={{ borderColor: "var(--btn-primary-text)" }} />
            <span className="absolute bottom-0 right-0 w-3 h-3 border-b border-r transition-all duration-300 group-hover:w-5 group-hover:h-5" style={{ borderColor: "var(--btn-primary-text)" }} />
            <Play size={14} />
            Listen Now
          </Link>
          <Link
            href="/episodes"
            className="group flex items-center gap-3 px-10 py-4 text-sm font-medium tracking-[0.15em] uppercase transition-all duration-500"
            style={{
              border: "1px solid var(--border-on-dark-strong)",
              color: "var(--text-on-dark)",
              borderRadius: "2px",
              backgroundColor: "color-mix(in srgb, var(--text-on-dark) 3%, transparent)",
            }}
          >
            Explore Episodes
            <ArrowRight
              size={14}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <span
          className="text-[10px] tracking-[0.3em] uppercase"
          style={{
            color: "color-mix(in srgb, var(--text-on-dark) 30%, transparent)",
          }}
        >
          Scroll
        </span>
        <ChevronDown
          size={18}
          style={{
            color: "color-mix(in srgb, var(--text-on-dark) 30%, transparent)",
          }}
        />
      </motion.div>
    </section>
  );
}

/* ───────────────────────────────────────────────────
   2. LATEST EPISODE  — Ink wash transition
   ─────────────────────────────────────────────────── */
function LatestEpisodeSection() {
  const latest = getLatestEpisode();

  return (
    <section className="relative bg-[var(--bg-secondary)]">
      {/* Wave divider transition from hero */}
      <div
        className="absolute -top-6 left-0 right-0 h-20 pointer-events-none z-10"
        style={{ color: "var(--accent)" }}
        aria-hidden="true"
      >
        <img
          src="/art/wave-divider.svg"
          alt=""
          className="w-full h-full object-cover"
          style={{ filter: "opacity(0.3)" }}
          aria-hidden="true"
        />
      </div>

      <div className="pt-28 pb-24 md:pt-36 md:pb-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <div className="flex items-center gap-4 mb-3">
              <div
                className="h-[1px] w-8"
                style={{ background: "var(--accent)" }}
              />
              <p className="text-xs tracking-[0.4em] text-[var(--accent)] uppercase font-medium">
                Latest Episode
              </p>
            </div>
            <h2 className="text-3xl md:text-4xl font-light text-[var(--text-primary)] mb-4 tracking-tight">
              Now Playing
            </h2>
          </AnimatedSection>

          {/* Herbs divider */}
          <AnimatedSection delay={0.1}>
            <div className="my-10" style={{ color: "var(--accent)" }} aria-hidden="true">
              <img
                src="/art/herbs-divider.svg"
                alt=""
                className="w-full max-w-2xl mx-auto h-10 object-contain opacity-60"
                aria-hidden="true"
              />
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Episode image area + apothecary bottle decoration */}
            <AnimatedSection delay={0.15} className="lg:col-span-5">
              <div className="relative">
                {/* Apothecary bottles decoration */}
                <div
                  className="absolute -left-8 -bottom-8 w-32 h-32 pointer-events-none opacity-40 hidden lg:block"
                  style={{ color: "var(--accent)" }}
                  aria-hidden="true"
                >
                  <img src="/art/apothecary-bottles.svg" alt="" className="w-full h-full" aria-hidden="true" />
                </div>

                <div
                  className="aspect-square rounded-sm relative overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, var(--hero-bg), var(--surface-elevated))`,
                    border: "1px solid var(--border-on-dark)",
                  }}
                >
                  {/* Botanical frame overlay on the card */}
                  <div className="absolute inset-3 pointer-events-none" style={{ color: "var(--accent)" }} aria-hidden="true">
                    <img src="/art/botanical-frame.svg" alt="" className="w-full h-full object-contain opacity-20" aria-hidden="true" />
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div
                        className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4"
                        style={{
                          backgroundColor:
                            "color-mix(in srgb, var(--accent) 10%, transparent)",
                          border:
                            "1px solid color-mix(in srgb, var(--accent) 20%, transparent)",
                        }}
                      >
                        <Mic
                          size={32}
                          className="text-[var(--accent)] opacity-60"
                        />
                      </div>
                      <p className="text-xs tracking-[0.3em] text-[var(--accent)] uppercase">
                        Episode {String(latest.number).padStart(2, "0")}
                      </p>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-6">
                    <p className="text-[var(--text-on-dark)] font-medium text-base">
                      {latest.guest}
                    </p>
                    <p
                      className="text-sm mt-0.5"
                      style={{
                        color:
                          "color-mix(in srgb, var(--text-on-dark) 60%, transparent)",
                      }}
                    >
                      {latest.guestTitle}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Episode info + player */}
            <AnimatedSection delay={0.3} className="lg:col-span-7">
              <div className="space-y-5">
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {latest.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] px-3 py-1.5 font-medium tracking-[0.1em] uppercase"
                      style={{
                        backgroundColor:
                          "color-mix(in srgb, var(--accent) 8%, transparent)",
                        color: "var(--accent)",
                        border: "1px solid color-mix(in srgb, var(--accent) 15%, transparent)",
                        borderRadius: "1px",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title + Chinese */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-semibold text-[var(--text-primary)] leading-snug mb-2">
                    {latest.title}
                  </h3>
                  <p
                    className="text-sm tracking-wide"
                    style={{
                      color:
                        "color-mix(in srgb, var(--text-primary) 40%, transparent)",
                    }}
                  >
                    {latest.titleCn}
                  </p>
                </div>

                {/* Herbs divider mini */}
                <div className="py-1" style={{ color: "var(--accent)" }} aria-hidden="true">
                  <div
                    className="h-[1px] w-full"
                    style={{
                      background:
                        "linear-gradient(to right, var(--accent), transparent)",
                      opacity: 0.2,
                    }}
                  />
                </div>

                <p
                  className="leading-relaxed text-sm md:text-base"
                  style={{
                    color:
                      "color-mix(in srgb, var(--text-primary) 65%, transparent)",
                  }}
                >
                  {latest.description}
                </p>

                <AudioPlayer
                  src={latest.audioUrl}
                  title={latest.title}
                  guest={latest.guest}
                  episodeNumber={latest.number}
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────────────
   3. EPISODE GRID  — The Library
   ─────────────────────────────────────────────────── */
function EpisodeGridSection() {
  const recentEpisodes = episodes.slice(0, 6);

  return (
    <section className="relative bg-[var(--hero-bg)] py-24 md:py-32 overflow-hidden">
      {/* Chinese clouds decoration at top */}
      <div
        className="absolute top-0 left-0 right-0 h-48 pointer-events-none"
        style={{ color: "var(--text-on-dark)" }}
        aria-hidden="true"
      >
        <img
          src="/art/chinese-clouds.svg"
          alt=""
          className="w-full max-w-4xl mx-auto h-full object-contain opacity-20"
          aria-hidden="true"
        />
      </div>

      {/* Herbs divider at very top */}
      <div
        className="absolute top-4 left-0 right-0 pointer-events-none"
        style={{ color: "var(--text-on-dark)" }}
        aria-hidden="true"
      >
        <img
          src="/art/herbs-divider.svg"
          alt=""
          className="w-full max-w-3xl mx-auto h-8 object-contain opacity-20"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <AnimatedSection>
          <div className="flex items-end justify-between mb-16">
            <div>
              <div className="flex items-center gap-4 mb-3">
                <div
                  className="h-[1px] w-8"
                  style={{
                    background:
                      "linear-gradient(to right, var(--accent), transparent)",
                  }}
                />
                <p className="text-xs tracking-[0.4em] text-[var(--accent)] uppercase font-medium">
                  The Library
                </p>
              </div>
              <h2 className="text-3xl md:text-4xl font-light text-[var(--text-on-dark)] tracking-tight">
                Recent Episodes
              </h2>
              <p
                className="text-sm mt-2 tracking-wide"
                style={{
                  color:
                    "color-mix(in srgb, var(--text-on-dark) 35%, transparent)",
                }}
              >
                近期节目
              </p>
            </div>
            <Link
              href="/episodes"
              className="hidden sm:flex items-center gap-2 text-sm text-[var(--accent)] font-medium hover:gap-3 transition-all duration-300 tracking-wide"
            >
              View All
              <ArrowRight size={14} />
            </Link>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentEpisodes.map((episode, index) => (
            <EpisodeCard key={episode.id} episode={episode} index={index} />
          ))}
        </div>

        <div className="mt-10 flex justify-center sm:hidden">
          <Link
            href="/episodes"
            className="flex items-center gap-2 text-sm text-[var(--accent)] font-medium"
          >
            View All Episodes
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────────────
   4. ABOUT PREVIEW  — The Musician Behind the Microphone
   ─────────────────────────────────────────────────── */
function AboutPreviewSection() {
  const stats = [
    { icon: Globe, value: "3", label: "Continents Lived On", labelCn: "三大洲" },
    { icon: MapPin, value: "12+", label: "Cities Called Home", labelCn: "十二座城市" },
    { icon: Mic, value: "6", label: "Episodes & Counting", labelCn: "六期节目" },
  ];

  return (
    <section className="relative bg-[var(--bg-secondary)] py-24 md:py-32 overflow-hidden">
      {/* Subtle wave divider transition */}
      <div
        className="absolute -top-4 left-0 right-0 h-16 pointer-events-none"
        style={{ color: "var(--accent)" }}
        aria-hidden="true"
      >
        <img
          src="/art/wave-divider.svg"
          alt=""
          className="w-full h-full object-cover opacity-20"
          aria-hidden="true"
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Violin illustration + Story */}
          <AnimatedSection className="lg:col-span-7">
            <div className="relative">
              {/* Violin botanical illustration — positioned as a margin element */}
              <div
                className="absolute -left-4 top-0 w-28 h-auto pointer-events-none hidden lg:block"
                style={{ color: "var(--accent)" }}
                aria-hidden="true"
              >
                <img
                  src="/art/violin-botanical.svg"
                  alt=""
                  className="w-full opacity-50"
                  aria-hidden="true"
                />
              </div>

              <div className="lg:pl-28">
                <div className="flex items-center gap-4 mb-3">
                  <Music size={14} className="text-[var(--accent)]" />
                  <p className="text-xs tracking-[0.4em] text-[var(--accent)] uppercase font-medium">
                    The Host
                  </p>
                </div>
                <h2 className="text-3xl md:text-4xl font-light text-[var(--text-primary)] mb-2 tracking-tight">
                  The Musician Behind
                  <br />
                  the Microphone
                </h2>
                <p
                  className="text-sm tracking-wide mb-8"
                  style={{
                    color:
                      "color-mix(in srgb, var(--text-primary) 35%, transparent)",
                  }}
                >
                  话筒背后的音乐家
                </p>

                <div
                  className="space-y-5 leading-relaxed text-sm md:text-base"
                  style={{
                    color:
                      "color-mix(in srgb, var(--text-primary) 70%, transparent)",
                  }}
                >
                  <p>
                    A bilingual Chinese-American who has lived across three
                    continents, Jodi brings a rare perspective to conversations
                    about health and wealth. Classically trained as a violinist,
                    educated at Wharton and Harvard Business School, and
                    battle-tested at top-tier venture firms including Balderton
                    Capital, B Capital, and Red Tree VC.
                  </p>
                  <p>
                    Joyous is her platform for the conversations that matter most
                    &mdash; where the pursuit of wellbeing and the pursuit of
                    prosperity are not just compatible but inseparable.
                  </p>
                </div>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 mt-8 text-sm font-semibold text-[var(--accent)] hover:gap-3 transition-all duration-300 tracking-wide"
                >
                  Read Her Full Story
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </AnimatedSection>

          {/* Right: Stats in ink wash circles */}
          <AnimatedSection delay={0.2} className="lg:col-span-5">
            <div className="grid grid-cols-1 gap-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="relative flex items-center gap-6"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.12, duration: 0.6 }}
                >
                  {/* Ink wash circle background for the stat number */}
                  <div className="relative w-24 h-24 flex-shrink-0 flex items-center justify-center">
                    {/* Enso ring behind the number */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{ color: "var(--accent)" }}
                      aria-hidden="true"
                    >
                      <img
                        src="/art/ink-wash-circle.svg"
                        alt=""
                        className="w-full h-full opacity-40"
                        aria-hidden="true"
                      />
                    </div>
                    <span className="relative text-3xl font-extralight text-[var(--text-primary)]">
                      {stat.value}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[var(--text-primary)] mb-0.5">
                      {stat.label}
                    </p>
                    <p
                      className="text-xs tracking-wide"
                      style={{
                        color:
                          "color-mix(in srgb, var(--text-primary) 35%, transparent)",
                      }}
                    >
                      {stat.labelCn}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────────────
   5. PRIME LAP  — Speed and energy
   ─────────────────────────────────────────────────── */
function PrimeLapSection() {
  return (
    <section className="relative bg-[var(--hero-bg)] py-24 md:py-32 overflow-hidden">
      {/* Racing lines background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ color: "var(--accent)" }}
        aria-hidden="true"
      >
        <img
          src="/art/racing-lines.svg"
          alt=""
          className="w-full h-full object-cover opacity-50"
          aria-hidden="true"
        />
      </div>

      {/* Animated speed streaks over the static SVG */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-[1px]"
            style={{
              top: `${25 + i * 18}%`,
              left: "-10%",
              width: "120%",
              background: `linear-gradient(90deg, transparent 0%, color-mix(in srgb, var(--accent) 30%, transparent) 40%, transparent 100%)`,
            }}
            animate={{
              x: ["-100%", "100%"],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 2.5 + i * 0.4,
              repeat: Infinity,
              delay: i * 0.6,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Red/accent glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 80% 50%, rgba(220, 38, 38, 0.04) 0%, transparent 50%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 text-center">
        <AnimatedSection>
          <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 px-5 py-2 mb-10" style={{ borderRadius: "1px" }}>
            <Flag size={13} className="text-red-400" />
            <span className="text-xs font-medium tracking-[0.2em] text-red-400 uppercase">
              Coming Soon
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extralight text-[var(--text-on-dark)] mb-4 tracking-[0.08em] uppercase">
            Prime Lap
          </h2>
          <p className="text-lg md:text-xl text-[var(--accent)] mb-2 tracking-wide font-light italic">
            Where Innovation Meets the Fast Lane
          </p>
          <p
            className="text-sm tracking-wide mb-8"
            style={{
              color:
                "color-mix(in srgb, var(--text-on-dark) 35%, transparent)",
            }}
          >
            创新与速度的交汇
          </p>
          <p className="max-w-2xl mx-auto text-[var(--text-muted)] leading-relaxed mb-12 text-sm md:text-base">
            An F1-inspired format where startup founders pitch their companies
            to top executives &mdash; during a live racing lap. High speed, high
            stakes, high impact. In partnership with Prime Movers Lab.
          </p>

          {/* Decorative speed element */}
          <div className="flex items-center justify-center gap-3 mb-10">
            <div
              className="h-[1px] w-20"
              style={{
                background:
                  "linear-gradient(to right, transparent, var(--accent))",
              }}
            />
            <Zap size={16} className="text-[var(--accent)]" />
            <div
              className="h-[1px] w-20"
              style={{
                background:
                  "linear-gradient(to left, transparent, var(--accent))",
              }}
            />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <Link
            href="/prime-lap"
            className="group inline-flex items-center gap-3 px-10 py-4 text-sm font-medium tracking-[0.15em] uppercase transition-all duration-500"
            style={{
              border: "1px solid var(--border-on-dark-strong)",
              color: "var(--text-on-dark)",
              borderRadius: "1px",
              backgroundColor:
                "color-mix(in srgb, var(--text-on-dark) 3%, transparent)",
            }}
          >
            Learn More
            <ArrowRight
              size={14}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────────────
   6. NEWSLETTER  — Apothecary prescription form
   ─────────────────────────────────────────────────── */
function NewsletterSection() {
  return (
    <section className="relative bg-[var(--bg-secondary)] py-24 md:py-32 overflow-hidden">
      <div className="max-w-3xl mx-auto px-6 lg:px-12">
        <AnimatedSection>
          {/* Botanical frame wrapping the form area */}
          <div className="relative px-6 py-16 md:px-16 md:py-20">
            {/* Botanical frame */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ color: "var(--accent)" }}
              aria-hidden="true"
            >
              <img
                src="/art/botanical-frame.svg"
                alt=""
                className="w-full h-full object-contain opacity-40"
                aria-hidden="true"
              />
            </div>

            {/* Apothecary bottles decoration — left side */}
            <div
              className="absolute -left-12 bottom-4 w-24 h-28 pointer-events-none hidden md:block"
              style={{ color: "var(--accent)" }}
              aria-hidden="true"
            >
              <img
                src="/art/apothecary-bottles.svg"
                alt=""
                className="w-full h-full opacity-25"
                aria-hidden="true"
              />
            </div>

            {/* Apothecary bottles decoration — right side */}
            <div
              className="absolute -right-10 bottom-8 w-20 h-24 pointer-events-none hidden md:block rotate-y-180"
              style={{ color: "var(--accent)", transform: "scaleX(-1)" }}
              aria-hidden="true"
            >
              <img
                src="/art/apothecary-bottles.svg"
                alt=""
                className="w-full h-full opacity-20"
                aria-hidden="true"
              />
            </div>

            <div className="relative z-10 text-center">
              {/* Leaf accent */}
              <div className="flex justify-center mb-6" aria-hidden="true">
                <div className="w-8 h-8" style={{ color: "var(--accent)" }}>
                  <img src="/art/leaf-accent.svg" alt="" className="w-full h-full opacity-50" aria-hidden="true" />
                </div>
              </div>

              <p className="text-xs tracking-[0.4em] text-[var(--accent)] uppercase font-medium mb-3">
                Stay Connected
              </p>
              <h2 className="text-3xl md:text-4xl font-light text-[var(--text-primary)] mb-2 tracking-tight">
                Join the Joyous Community
              </h2>
              <p
                className="text-sm tracking-wide mb-6"
                style={{
                  color:
                    "color-mix(in srgb, var(--text-primary) 35%, transparent)",
                }}
              >
                加入我们的社区
              </p>
              <p
                className="leading-relaxed mb-10 max-w-md mx-auto text-sm md:text-base"
                style={{
                  color:
                    "color-mix(in srgb, var(--text-primary) 60%, transparent)",
                }}
              >
                Exclusive behind-the-scenes content, early access to new
                episodes, and Jodi&apos;s curated insights on health and wealth
                &mdash; delivered to your inbox.
              </p>

              <form
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 bg-[var(--input-bg)] border px-6 py-4 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none transition-colors"
                  style={{
                    borderColor: "var(--input-border)",
                    borderRadius: "1px",
                  }}
                />
                <button
                  type="submit"
                  className="relative px-8 py-4 text-sm font-semibold tracking-[0.15em] uppercase transition-all duration-300"
                  style={{
                    backgroundColor: "var(--btn-secondary-bg)",
                    color: "var(--btn-secondary-text)",
                    borderRadius: "1px",
                    border: "1px solid color-mix(in srgb, var(--accent) 30%, transparent)",
                  }}
                >
                  {/* Corner ornaments */}
                  <span className="absolute top-0 left-0 w-2 h-2 border-t border-l" style={{ borderColor: "var(--accent)" }} />
                  <span className="absolute top-0 right-0 w-2 h-2 border-t border-r" style={{ borderColor: "var(--accent)" }} />
                  <span className="absolute bottom-0 left-0 w-2 h-2 border-b border-l" style={{ borderColor: "var(--accent)" }} />
                  <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r" style={{ borderColor: "var(--accent)" }} />
                  Subscribe
                </button>
              </form>

              <p
                className="text-xs mt-6 tracking-wide"
                style={{
                  color:
                    "color-mix(in srgb, var(--text-primary) 35%, transparent)",
                }}
              >
                No spam, ever. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────────────
   PAGE
   ─────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <LatestEpisodeSection />
        <EpisodeGridSection />
        <AboutPreviewSection />
        <PrimeLapSection />
        <NewsletterSection />
      </main>
      <Footer />
    </>
  );
}
