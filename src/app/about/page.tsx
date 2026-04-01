"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Mic } from "lucide-react";
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

const timeline = [
  {
    year: "Early Years",
    title: "Classical Foundations",
    titleCn: "古典基础",
    description:
      "Began training as a classical violinist, developing the discipline and artistic sensibility that would shape everything to come.",
  },
  {
    year: "Wharton & Harvard",
    title: "Academic Excellence",
    titleCn: "学术卓越",
    description:
      "Studied at the Wharton School and earned her MBA at Harvard Business School, building the intellectual framework for a career spanning finance and innovation.",
  },
  {
    year: "Banking",
    title: "Citi & HSBC",
    titleCn: "花旗银行与汇丰银行",
    description:
      "Launched her career in global banking, gaining deep expertise in international finance and cross-border markets.",
  },
  {
    year: "Shanghai",
    title: "Entrepreneurship in Asia",
    titleCn: "在亚洲创业",
    description:
      "Moved to Shanghai to build and run businesses, navigating the dynamic intersection of Eastern and Western markets firsthand.",
  },
  {
    year: "Venture Capital",
    title: "B Capital & Balderton",
    titleCn: "B Capital & Balderton 资本",
    description:
      "Joined top-tier venture firms including B Capital (co-founded by Eduardo Saverin) and Balderton Capital, investing in transformative companies across health, technology, and sustainability.",
  },
  {
    year: "Red Tree VC",
    title: "Investing With Purpose",
    titleCn: "有目的的投资",
    description:
      "At Red Tree VC, deepened her focus on health-tech and impact investing, backing founders at the intersection of wellness and prosperity.",
  },
  {
    year: "Now",
    title: "Joyous",
    titleCn: "Joyous 播客",
    description:
      "Launched Joyous to share the conversations, insights, and connections she\u2019s made across a career spanning three continents. Where health meets wealth.",
  },
];

const stats = [
  { value: "3", label: "Continents", sublabel: "Asia, Europe, North America" },
  { value: "12+", label: "Cities", sublabel: "Shanghai to London to SF" },
  { value: "Wharton", label: "& Harvard MBA", sublabel: "World-class foundation" },
  { value: "5+", label: "VC Firms", sublabel: "Balderton, B Capital, Red Tree" },
  { value: "2", label: "Languages", sublabel: "English and Mandarin" },
  { value: "20+", label: "Years of Violin", sublabel: "Classically trained" },
];

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* ===== HERO: Ink Wash Portrait ===== */}
        <section
          className="pt-32 pb-28 md:pb-40 relative overflow-hidden"
          style={{ backgroundColor: "var(--hero-bg)" }}
        >
          {/* Background ink wash circle */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <img
                src="/art/ink-wash-circle.svg"
                alt=""
                aria-hidden="true"
                className="w-[500px] h-[500px] md:w-[700px] md:h-[700px]"
                style={{ color: "var(--accent)", filter: "opacity(0.6)" }}
              />
            </motion.div>
          </div>

          {/* Chinese clouds floating behind */}
          <div className="absolute top-0 left-0 right-0 pointer-events-none overflow-hidden">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2, delay: 0.5 }}
            >
              <img
                src="/art/chinese-clouds.svg"
                alt=""
                aria-hidden="true"
                className="w-full opacity-40"
                style={{ color: "var(--accent)" }}
              />
            </motion.div>
          </div>

          {/* Radial glow */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 50% 40%, var(--hero-glow-1) 0%, transparent 60%)",
            }}
          />

          <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 text-center">
            {/* Bilingual name - calligraphic presentation */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <p
                className="text-xs tracking-[0.4em] uppercase font-medium mb-6"
                style={{ color: "var(--accent)" }}
              >
                The Host
              </p>

              {/* Chinese name - large, brush-like */}
              <h1
                className="text-3xl md:text-5xl font-light tracking-[0.15em] mb-3"
                style={{ color: "color-mix(in srgb, var(--text-on-dark) 50%, transparent)" }}
              >
                杨若迪
              </h1>

              {/* Dot separator */}
              <div className="flex items-center justify-center gap-4 mb-4">
                <div
                  className="h-[1px] w-12"
                  style={{
                    backgroundColor:
                      "color-mix(in srgb, var(--accent) 30%, transparent)",
                  }}
                />
                <span
                  className="text-lg"
                  style={{ color: "var(--accent)", opacity: 0.6 }}
                >
                  ·
                </span>
                <div
                  className="h-[1px] w-12"
                  style={{
                    backgroundColor:
                      "color-mix(in srgb, var(--accent) 30%, transparent)",
                  }}
                />
              </div>

              {/* English name */}
              <h2
                className="text-5xl md:text-8xl font-extralight tracking-tight mb-8"
                style={{ color: "var(--text-on-dark)" }}
              >
                Jodi Yang
              </h2>
            </motion.div>

            {/* Violin botanical - decorative flanking element */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex justify-center mb-10"
            >
              <img
                src="/art/violin-botanical.svg"
                alt=""
                aria-hidden="true"
                className="w-32 h-48 md:w-40 md:h-60 opacity-60"
                style={{ color: "var(--accent)" }}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed"
              style={{ color: "var(--nav-text-muted)" }}
            >
              Investor. Violinist. Builder. A bilingual Chinese-American
              navigating the worlds of health, wealth, and everything that
              matters in between.
            </motion.p>
          </div>
        </section>

        {/* ===== WAVE DIVIDER ===== */}
        <div
          className="relative h-16 -mt-8 z-20"
          style={{ color: "var(--accent)" }}
        >
          <img
            src="/art/wave-divider.svg"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover"
          />
        </div>

        {/* ===== THE MUSICIAN: Gallery Exhibit ===== */}
        <section
          className="py-24 md:py-32"
          style={{ backgroundColor: "var(--bg-secondary)" }}
        >
          <div className="max-w-5xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
              {/* Left: Violin artwork - gallery style */}
              <AnimatedSection className="lg:col-span-2">
                <div className="relative">
                  {/* Gallery frame */}
                  <div
                    className="aspect-[3/4] rounded-sm relative overflow-hidden"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--hero-bg), var(--surface-elevated))",
                      border: "1px solid var(--input-border)",
                    }}
                  >
                    {/* Botanical frame overlay */}
                    <img
                      src="/art/botanical-frame.svg"
                      alt=""
                      aria-hidden="true"
                      className="absolute inset-0 w-full h-full"
                      style={{ color: "var(--accent)" }}
                    />
                    {/* Violin botanical centered */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <img
                        src="/art/violin-botanical.svg"
                        alt=""
                        aria-hidden="true"
                        className="w-3/5 h-3/5 opacity-70"
                        style={{ color: "var(--accent)" }}
                      />
                    </div>
                  </div>

                  {/* Gallery label card */}
                  <div
                    className="mt-4 p-4 rounded-sm"
                    style={{
                      backgroundColor: "var(--bg-card)",
                      border: "1px solid var(--input-border)",
                    }}
                  >
                    <p
                      className="text-[10px] tracking-[0.3em] uppercase font-medium mb-1"
                      style={{ color: "var(--text-muted)" }}
                    >
                      Exhibit I
                    </p>
                    <p
                      className="text-sm font-semibold"
                      style={{ color: "var(--text-primary)" }}
                    >
                      The Musician
                    </p>
                    <p
                      className="text-xs mt-1"
                      style={{
                        color:
                          "color-mix(in srgb, var(--text-primary) 50%, transparent)",
                      }}
                    >
                      Classical violin, 20+ years &middot; Three continents
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              {/* Right: Text */}
              <AnimatedSection delay={0.15} className="lg:col-span-3">
                <p
                  className="text-xs tracking-[0.3em] uppercase font-medium mb-3"
                  style={{ color: "var(--accent)" }}
                >
                  The Artist
                </p>
                <h2
                  className="text-3xl md:text-4xl font-light mb-3 tracking-tight"
                  style={{ color: "var(--text-primary)" }}
                >
                  Before Boardrooms
                </h2>
                <p
                  className="text-lg mb-6"
                  style={{
                    color:
                      "color-mix(in srgb, var(--text-primary) 40%, transparent)",
                  }}
                >
                  练习室里的岁月 &middot; Years in the practice room
                </p>

                <div
                  className="space-y-5 leading-relaxed text-[17px]"
                  style={{
                    color:
                      "color-mix(in srgb, var(--text-primary) 70%, transparent)",
                  }}
                >
                  <p>
                    Before pitch decks, there were practice rooms and concert
                    halls. Jodi trained as a classical violinist for over two
                    decades, performing across three continents. The discipline
                    of music &mdash; the patience of mastering a phrase, the
                    vulnerability of live performance, the joy of perfect
                    resonance &mdash; shaped how she approaches every
                    conversation.
                  </p>
                  <p>
                    She believes the best interviews, like the best
                    performances, require deep listening, genuine curiosity, and
                    the courage to go where the moment leads.
                  </p>
                </div>

                {/* Framed quote */}
                <div className="mt-10 relative">
                  <img
                    src="/art/botanical-frame.svg"
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full opacity-50"
                    style={{ color: "var(--accent)" }}
                  />
                  <div className="relative px-8 py-6">
                    <p
                      className="text-lg italic font-light leading-relaxed"
                      style={{ color: "var(--text-primary)" }}
                    >
                      &ldquo;Music taught me to listen. Venture capital taught
                      me to act. Joyous is where both meet.&rdquo;
                    </p>
                    <p
                      className="text-sm mt-2"
                      style={{
                        color:
                          "color-mix(in srgb, var(--accent) 60%, transparent)",
                      }}
                    >
                      音乐教会我倾听。风险投资教会我行动。Joyous是两者的交汇。
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ===== HERBS DIVIDER ===== */}
        <div
          className="relative h-12"
          style={{
            backgroundColor: "var(--bg-secondary)",
            color: "var(--accent)",
          }}
        >
          <img
            src="/art/herbs-divider.svg"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-contain"
          />
        </div>

        {/* ===== PHILOSOPHY: Framed Vision ===== */}
        <section
          className="py-24 md:py-32 relative overflow-hidden"
          style={{ backgroundColor: "var(--bg-secondary)" }}
        >
          <div className="max-w-4xl mx-auto px-6 lg:px-12">
            <AnimatedSection>
              <div className="text-center mb-16">
                <p
                  className="text-xs tracking-[0.3em] uppercase font-medium mb-3"
                  style={{ color: "var(--accent)" }}
                >
                  Philosophy
                </p>
                <h2
                  className="text-3xl md:text-4xl font-light mb-4 tracking-tight"
                  style={{ color: "var(--text-primary)" }}
                >
                  Where Health Meets Wealth
                </h2>
                <p
                  className="text-base"
                  style={{
                    color:
                      "color-mix(in srgb, var(--text-primary) 40%, transparent)",
                  }}
                >
                  健康与财富的交汇
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div
                className="space-y-5 leading-relaxed text-lg max-w-3xl mx-auto"
                style={{
                  color:
                    "color-mix(in srgb, var(--text-primary) 70%, transparent)",
                }}
              >
                <p>
                  After two decades at the intersection of finance,
                  entrepreneurship, and global markets, Jodi discovered a truth
                  that most people in power overlook: the greatest returns come
                  from the investments we make in our own wellbeing.
                </p>
                <p>
                  She watched brilliant founders burn out. She saw portfolios
                  grow while the people behind them withered. She experienced it
                  herself &mdash; the relentless pace of global venture capital,
                  the constant travel, the pressure to always be producing.
                </p>
                <p>
                  Joyous was born from a simple conviction: the conversations
                  about building a rich life and building real wealth should not
                  be separate. They are the same conversation.
                </p>
              </div>
            </AnimatedSection>

            {/* Large bilingual quote in botanical frame */}
            <AnimatedSection delay={0.2}>
              <div className="mt-16 relative max-w-2xl mx-auto">
                <img
                  src="/art/botanical-frame.svg"
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full opacity-60"
                  style={{ color: "var(--accent)" }}
                />
                <div className="relative text-center px-12 py-10">
                  <p
                    className="text-2xl md:text-3xl font-light leading-relaxed mb-4"
                    style={{ color: "var(--accent)" }}
                  >
                    The best investments begin with investing in yourself.
                  </p>
                  <p
                    className="text-xl md:text-2xl font-light"
                    style={{
                      color:
                        "color-mix(in srgb, var(--accent) 50%, transparent)",
                    }}
                  >
                    最好的投资从投资自己开始。
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ===== WAVE DIVIDER ===== */}
        <div className="relative h-16" style={{ color: "var(--accent)" }}>
          <img
            src="/art/wave-divider.svg"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover"
          />
        </div>

        {/* ===== JOURNEY SCROLL: Horizontal Timeline ===== */}
        <section
          className="py-24 md:py-32 relative overflow-hidden"
          style={{ backgroundColor: "var(--hero-bg)" }}
        >
          {/* Drifting clouds background */}
          <div className="absolute top-0 left-0 right-0 pointer-events-none">
            <motion.img
              src="/art/chinese-clouds.svg"
              alt=""
              aria-hidden="true"
              className="w-full opacity-30"
              animate={{ x: [0, 30, 0] }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12">
            <AnimatedSection>
              <p
                className="text-xs tracking-[0.3em] uppercase font-medium mb-3"
                style={{ color: "var(--accent)" }}
              >
                The Journey
              </p>
              <h2
                className="text-3xl md:text-4xl font-light mb-4 tracking-tight"
                style={{ color: "var(--text-on-dark)" }}
              >
                A Career Across Continents
              </h2>
              <p
                className="text-base mb-16"
                style={{
                  color:
                    "color-mix(in srgb, var(--text-on-dark) 40%, transparent)",
                }}
              >
                三大洲的职业生涯
              </p>
            </AnimatedSection>

            {/* Scroll-style timeline */}
            <div className="relative">
              {/* Central scroll line */}
              <div
                className="absolute left-6 md:left-8 top-0 bottom-0 w-[1px]"
                style={{
                  background: `linear-gradient(to bottom, transparent, var(--border-on-dark-strong), var(--border-on-dark-strong), transparent)`,
                }}
              />

              <div className="space-y-0">
                {timeline.map((item, index) => (
                  <div key={item.year}>
                    <AnimatedSection delay={index * 0.08}>
                      <div className="relative flex gap-6 md:gap-10 pl-0 py-6">
                        {/* Leaf accent marker */}
                        <div className="relative z-10 flex-shrink-0 w-12 md:w-16 flex items-start justify-center pt-1">
                          <img
                            src="/art/leaf-accent.svg"
                            alt=""
                            aria-hidden="true"
                            className="w-6 h-8 opacity-60"
                            style={{ color: "var(--accent)" }}
                          />
                        </div>
                        <div className="pb-2 pt-0">
                          <span
                            className="text-xs font-medium tracking-[0.2em] uppercase"
                            style={{ color: "var(--accent)" }}
                          >
                            {item.year}
                          </span>
                          <h3
                            className="text-xl font-semibold mt-1 mb-1"
                            style={{ color: "var(--text-on-dark)" }}
                          >
                            {item.title}
                          </h3>
                          <p
                            className="text-sm mb-3"
                            style={{ color: "var(--text-muted)" }}
                          >
                            {item.titleCn}
                          </p>
                          <p
                            className="leading-relaxed"
                            style={{ color: "var(--nav-text-muted)" }}
                          >
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </AnimatedSection>

                    {/* Botanical element between milestones */}
                    {index < timeline.length - 1 && (
                      <div className="relative pl-6 md:pl-8 py-2">
                        <div className="flex items-center gap-3 pl-6">
                          <div
                            className="h-[1px] flex-1 max-w-[120px]"
                            style={{
                              background: `linear-gradient(to right, color-mix(in srgb, var(--accent) 15%, transparent), transparent)`,
                            }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== HERBS DIVIDER ===== */}
        <div className="relative h-12" style={{ color: "var(--accent)" }}>
          <img
            src="/art/herbs-divider.svg"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-contain"
          />
        </div>

        {/* ===== STATS: Ink Wash Circles ===== */}
        <section
          className="py-24 md:py-32"
          style={{ backgroundColor: "var(--bg-secondary)" }}
        >
          <div className="max-w-6xl mx-auto px-6 lg:px-12">
            <AnimatedSection>
              <div className="text-center mb-16">
                <p
                  className="text-xs tracking-[0.3em] uppercase font-medium mb-3"
                  style={{ color: "var(--accent)" }}
                >
                  By the Numbers
                </p>
                <h2
                  className="text-3xl md:text-4xl font-light tracking-tight"
                  style={{ color: "var(--text-primary)" }}
                >
                  A Life of Breadth & Depth
                </h2>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {stats.map((stat, index) => (
                <AnimatedSection key={stat.label} delay={index * 0.06}>
                  <div className="text-center relative">
                    {/* Ink wash circle background */}
                    <div className="relative w-32 h-32 md:w-36 md:h-36 mx-auto mb-4">
                      <img
                        src="/art/ink-wash-circle.svg"
                        alt=""
                        aria-hidden="true"
                        className="absolute inset-0 w-full h-full"
                        style={{ color: "var(--accent)" }}
                      />
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <p
                          className="text-3xl md:text-4xl font-extralight"
                          style={{ color: "var(--text-primary)" }}
                        >
                          {stat.value}
                        </p>
                        <p
                          className="text-xs font-semibold mt-0.5"
                          style={{ color: "var(--text-primary)" }}
                        >
                          {stat.label}
                        </p>
                      </div>
                    </div>
                    <p
                      className="text-xs leading-relaxed"
                      style={{
                        color:
                          "color-mix(in srgb, var(--text-primary) 50%, transparent)",
                      }}
                    >
                      {stat.sublabel}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ===== VISION: Why Joyous Exists ===== */}
        <section
          className="py-24 md:py-32 relative overflow-hidden"
          style={{ backgroundColor: "var(--hero-bg)" }}
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 50% 50%, var(--hero-glow-pulse) 0%, transparent 50%)",
            }}
          />

          {/* Floating clouds */}
          <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
            <motion.img
              src="/art/chinese-clouds.svg"
              alt=""
              aria-hidden="true"
              className="w-full opacity-20 transform rotate-180"
              animate={{ x: [0, -20, 0] }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12">
            <AnimatedSection>
              <div className="text-center">
                <p
                  className="text-xs tracking-[0.3em] uppercase font-medium mb-3"
                  style={{ color: "var(--accent)" }}
                >
                  The Vision
                </p>
                <h2
                  className="text-3xl md:text-4xl font-light mb-8 tracking-tight"
                  style={{ color: "var(--text-on-dark)" }}
                >
                  Why Joyous Exists
                </h2>
                <div
                  className="max-w-2xl mx-auto space-y-5 leading-relaxed text-lg"
                  style={{ color: "var(--nav-text-muted)" }}
                >
                  <p>
                    Joyous exists because the most important conversations
                    happen at intersections. The intersection of health and
                    wealth. Of art and science. Of Eastern and Western wisdom. Of
                    personal wellbeing and professional excellence.
                  </p>
                  <p>
                    Every episode is an invitation to explore these intersections
                    with people who have devoted their lives to bridging them
                    &mdash; founders building the future of health-tech,
                    investors who understand that sustainable returns begin with
                    sustainable lives, and creatives who prove that beauty and
                    business are not at odds.
                  </p>
                </div>

                {/* Final bilingual statement */}
                <div className="mt-14 relative">
                  <img
                    src="/art/botanical-frame.svg"
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full opacity-40"
                    style={{ color: "var(--accent)" }}
                  />
                  <div className="relative px-8 py-8">
                    <p
                      className="font-medium text-xl md:text-2xl leading-relaxed"
                      style={{ color: "var(--accent)" }}
                    >
                      Joy is not the destination. It is the practice.
                    </p>
                    <p
                      className="text-lg md:text-xl mt-3"
                      style={{
                        color:
                          "color-mix(in srgb, var(--accent) 55%, transparent)",
                      }}
                    >
                      喜悦不是终点，而是一种修行。
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ===== WAVE DIVIDER ===== */}
        <div className="relative h-16" style={{ color: "var(--accent)" }}>
          <img
            src="/art/wave-divider.svg"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover"
          />
        </div>

        {/* ===== CTA ===== */}
        <section
          className="py-24 md:py-32"
          style={{ backgroundColor: "var(--hero-bg)" }}
        >
          <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
            <AnimatedSection>
              <h2
                className="text-3xl md:text-4xl font-light mb-4 tracking-tight"
                style={{ color: "var(--text-on-dark)" }}
              >
                Start Listening
              </h2>
              <p
                className="leading-relaxed mb-10 max-w-lg mx-auto"
                style={{ color: "var(--text-muted)" }}
              >
                Dive into conversations at the intersection of health, wealth,
                and everything that matters.
              </p>
              <Link
                href="/episodes"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-semibold tracking-wide uppercase transition-all duration-300"
                style={{
                  backgroundColor: "var(--btn-primary-bg)",
                  color: "var(--btn-primary-text)",
                }}
              >
                <Mic size={16} />
                Browse Episodes
              </Link>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
