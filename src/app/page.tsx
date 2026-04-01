"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  ChevronDown,
  Play,
  Globe,
  MapPin,
  Mic,
  ArrowRight,
  Zap,
  Flag,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AudioPlayer from "@/components/AudioPlayer";
import EpisodeCard from "@/components/EpisodeCard";
import { episodes, getLatestEpisode } from "@/lib/episodes";

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
   1. HERO
   ─────────────────────────────────────────────────── */
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--hero-bg)]">
      {/* Animated gradient backdrop */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 30% 20%, var(--hero-glow-1) 0%, transparent 60%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 70% 80%, var(--hero-glow-2) 0%, transparent 50%)",
          }}
        />
        <motion.div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, var(--hero-glow-pulse) 0%, transparent 40%)",
          }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <p className="text-xs tracking-[0.4em] text-[var(--accent)] uppercase mb-8 font-medium">
            A Podcast by Jodi Yang
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-7xl sm:text-8xl md:text-9xl font-extralight tracking-[0.15em] text-[var(--text-on-dark)] uppercase mb-6"
        >
          Joyous
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <p className="text-xl md:text-2xl font-light text-[var(--text-muted)] tracking-wide mb-4">
            Where Health Meets Wealth
          </p>
          <p className="max-w-2xl mx-auto text-base text-[var(--text-muted)] leading-relaxed mb-12">
            Intimate conversations with founders, investors, creatives, and
            artists who live at the intersection of wellbeing and prosperity.
            Hosted by Jodi Yang — Wharton grad, Harvard MBA, VC partner,
            classically trained violinist.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/episodes"
            className="group flex items-center gap-3 bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] px-8 py-4 rounded-full text-sm font-semibold tracking-wide uppercase hover:bg-[var(--accent-light)] transition-all duration-300 hover:shadow-[0_0_40px_var(--card-shadow)]"
          >
            <Play size={16} className="ml-0.5" />
            Listen Now
          </Link>
          <Link
            href="/episodes"
            className="group flex items-center gap-2 border border-[var(--border-on-dark-strong)] text-[var(--text-on-dark)] px-8 py-4 rounded-full text-sm font-medium tracking-wide uppercase hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-300"
          >
            Explore Episodes
            <ArrowRight
              size={14}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown size={24} className="text-[var(--text-muted)]" />
      </motion.div>
    </section>
  );
}

/* ───────────────────────────────────────────────────
   2. LATEST EPISODE
   ─────────────────────────────────────────────────── */
function LatestEpisodeSection() {
  const latest = getLatestEpisode();

  return (
    <section className="bg-[var(--bg-secondary)] py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <AnimatedSection>
          <p className="text-xs tracking-[0.3em] text-[var(--accent)] uppercase font-medium mb-3">
            Latest Episode
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-[var(--text-primary)] mb-16 tracking-tight">
            Now Playing
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Guest photo placeholder */}
          <AnimatedSection delay={0.15}>
            <div
              className="aspect-square rounded-3xl relative overflow-hidden"
              style={{
                background: `linear-gradient(to bottom right, var(--hero-bg), var(--surface-elevated))`,
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-28 h-28 rounded-full flex items-center justify-center"
                  style={{
                    backgroundColor: "color-mix(in srgb, var(--accent) 10%, transparent)",
                    border: "1px solid color-mix(in srgb, var(--accent) 20%, transparent)",
                  }}
                >
                  <Mic size={40} className="text-[var(--accent)] opacity-60" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-8">
                <p className="text-[var(--text-on-dark)] font-medium text-lg">
                  {latest.guest}
                </p>
                <p className="text-[var(--text-muted)] text-sm">
                  {latest.guestTitle}
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Episode info + player */}
          <AnimatedSection delay={0.3}>
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                {latest.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1.5 rounded-full font-medium"
                    style={{
                      backgroundColor: "color-mix(in srgb, var(--text-primary) 5%, transparent)",
                      color: "color-mix(in srgb, var(--text-primary) 70%, transparent)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="text-2xl md:text-3xl font-semibold text-[var(--text-primary)] leading-snug">
                {latest.title}
              </h3>

              <p
                className="leading-relaxed"
                style={{ color: "color-mix(in srgb, var(--text-primary) 60%, transparent)" }}
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
    </section>
  );
}

/* ───────────────────────────────────────────────────
   3. EPISODE GRID
   ─────────────────────────────────────────────────── */
function EpisodeGridSection() {
  const recentEpisodes = episodes.slice(0, 6);

  return (
    <section className="bg-[var(--hero-bg)] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <AnimatedSection>
          <div className="flex items-end justify-between mb-16">
            <div>
              <p className="text-xs tracking-[0.3em] text-[var(--accent)] uppercase font-medium mb-3">
                Library
              </p>
              <h2 className="text-3xl md:text-4xl font-light text-[var(--text-on-dark)] tracking-tight">
                Recent Episodes
              </h2>
            </div>
            <Link
              href="/episodes"
              className="hidden sm:flex items-center gap-2 text-sm text-[var(--accent)] font-medium hover:gap-3 transition-all duration-300"
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
   4. ABOUT PREVIEW
   ─────────────────────────────────────────────────── */
function AboutPreviewSection() {
  const stats = [
    { icon: Globe, value: "3", label: "Continents Lived On" },
    { icon: MapPin, value: "12+", label: "Cities Called Home" },
    { icon: Mic, value: "6", label: "Episodes & Counting" },
  ];

  return (
    <section className="bg-[var(--bg-secondary)] py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Story */}
          <AnimatedSection>
            <p className="text-xs tracking-[0.3em] text-[var(--accent)] uppercase font-medium mb-3">
              The Host
            </p>
            <h2 className="text-3xl md:text-4xl font-light text-[var(--text-primary)] mb-6 tracking-tight">
              Meet Jodi Yang
            </h2>
            <div
              className="space-y-4 leading-relaxed"
              style={{ color: "color-mix(in srgb, var(--text-primary) 70%, transparent)" }}
            >
              <p>
                A bilingual Chinese-American who has lived across three
                continents, Jodi brings a rare perspective to conversations about
                health and wealth. Classically trained as a violinist, educated at
                Wharton and Harvard Business School, and battle-tested at top-tier
                venture firms including Balderton Capital, B Capital, and Red Tree
                VC.
              </p>
              <p>
                Joyous is her platform for the conversations that matter most
                &mdash; where the pursuit of wellbeing and the pursuit of
                prosperity are not just compatible but inseparable.
              </p>
            </div>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 mt-8 text-sm font-semibold text-[var(--accent)] hover:gap-3 transition-all duration-300"
            >
              Read Full Story
              <ArrowRight size={14} />
            </Link>
          </AnimatedSection>

          {/* Stats */}
          <AnimatedSection delay={0.2}>
            <div className="grid grid-cols-1 gap-6">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-[var(--bg-card)] rounded-2xl p-8 border border-[var(--input-border)] flex items-center gap-6"
                >
                  <div className="w-14 h-14 rounded-xl bg-[var(--hero-bg)] flex items-center justify-center flex-shrink-0">
                    <stat.icon size={22} className="text-[var(--accent)]" />
                  </div>
                  <div>
                    <p className="text-3xl font-light text-[var(--text-primary)] mb-1">
                      {stat.value}
                    </p>
                    <p
                      className="text-sm font-medium"
                      style={{ color: "color-mix(in srgb, var(--text-primary) 50%, transparent)" }}
                    >
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────────────
   5. PRIME LAP TEASER
   ─────────────────────────────────────────────────── */
function PrimeLabSection() {
  return (
    <section className="relative bg-[var(--hero-bg)] py-24 md:py-32 overflow-hidden">
      {/* Speed lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-[1px]"
            style={{
              top: `${20 + i * 15}%`,
              left: "-10%",
              width: "120%",
              background: `linear-gradient(90deg, transparent, color-mix(in srgb, var(--accent) 20%, transparent), transparent)`,
            }}
            animate={{
              x: ["-100%", "100%"],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Red accent glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_50%,rgba(220,38,38,0.06)_0%,transparent_50%)]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 text-center">
        <AnimatedSection>
          <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-full px-4 py-2 mb-8">
            <Flag size={14} className="text-red-400" />
            <span className="text-xs font-medium tracking-[0.15em] text-red-400 uppercase">
              Coming Soon
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-light text-[var(--text-on-dark)] mb-4 tracking-tight">
            Prime Lap
          </h2>
          <p className="text-lg text-[var(--text-muted)] mb-6">
            Where Innovation Meets the Fast Lane
          </p>
          <p className="max-w-2xl mx-auto text-[var(--text-muted)] leading-relaxed mb-10">
            An F1-inspired format where startup founders pitch their companies
            to top executives &mdash; during a live racing lap. High speed, high
            stakes, high impact. In partnership with Prime Movers Lab.
          </p>

          <div className="flex items-center justify-center gap-4">
            <Zap size={20} className="text-[var(--accent)]" />
            <div
              className="h-[1px] w-16"
              style={{
                background: "linear-gradient(to right, var(--accent), transparent)",
              }}
            />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <Link
            href="/prime-lap"
            className="inline-flex items-center gap-2 mt-10 border border-[var(--border-on-dark-strong)] text-[var(--text-on-dark)] px-8 py-4 rounded-full text-sm font-medium tracking-wide uppercase hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-300"
            style={{
              backgroundColor: "color-mix(in srgb, var(--text-on-dark) 5%, transparent)",
            }}
          >
            Learn More
            <ArrowRight size={14} />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────────────
   6. NEWSLETTER CTA
   ─────────────────────────────────────────────────── */
function NewsletterSection() {
  return (
    <section className="bg-[var(--bg-secondary)] py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
        <AnimatedSection>
          <p className="text-xs tracking-[0.3em] text-[var(--accent)] uppercase font-medium mb-3">
            Stay Connected
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-[var(--text-primary)] mb-4 tracking-tight">
            Join the Joyous Community
          </h2>
          <p
            className="leading-relaxed mb-10 max-w-lg mx-auto"
            style={{ color: "color-mix(in srgb, var(--text-primary) 60%, transparent)" }}
          >
            Get exclusive behind-the-scenes content, early access to new
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
              className="flex-1 bg-[var(--input-bg)] border border-[var(--input-border)] rounded-full px-6 py-4 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] transition-colors"
            />
            <button
              type="submit"
              className="bg-[var(--btn-secondary-bg)] text-[var(--btn-secondary-text)] px-8 py-4 rounded-full text-sm font-semibold tracking-wide uppercase hover:bg-[var(--surface-elevated)] transition-colors"
            >
              Subscribe
            </button>
          </form>

          <p
            className="text-xs mt-4"
            style={{ color: "color-mix(in srgb, var(--text-primary) 40%, transparent)" }}
          >
            No spam, ever. Unsubscribe anytime.
          </p>
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
        <PrimeLabSection />
        <NewsletterSection />
      </main>
      <Footer />
    </>
  );
}
