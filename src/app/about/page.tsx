"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Music,
  Globe,
  GraduationCap,
  TrendingUp,
  Heart,
  Mic,
  Building2,
  Briefcase,
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

const timeline = [
  {
    year: "Early Years",
    title: "Classical Foundations",
    titleCn: "古典基础",
    description:
      "Began training as a classical violinist, developing the discipline and artistic sensibility that would shape everything to come.",
    icon: Music,
  },
  {
    year: "Wharton & Harvard",
    title: "Academic Excellence",
    titleCn: "学术卓越",
    description:
      "Studied at the Wharton School and earned her MBA at Harvard Business School, building the intellectual framework for a career spanning finance and innovation.",
    icon: GraduationCap,
  },
  {
    year: "Banking",
    title: "Citi & HSBC",
    titleCn: "花旗银行与汇丰银行",
    description:
      "Launched her career in global banking, gaining deep expertise in international finance and cross-border markets.",
    icon: Building2,
  },
  {
    year: "Shanghai",
    title: "Entrepreneurship in Asia",
    titleCn: "在亚洲创业",
    description:
      "Moved to Shanghai to build and run businesses, navigating the dynamic intersection of Eastern and Western markets firsthand.",
    icon: Globe,
  },
  {
    year: "Venture Capital",
    title: "B Capital & Balderton",
    titleCn: "B Capital & Balderton 资本",
    description:
      "Joined top-tier venture firms including B Capital (co-founded by Eduardo Saverin) and Balderton Capital, investing in transformative companies across health, technology, and sustainability.",
    icon: TrendingUp,
  },
  {
    year: "Red Tree VC",
    title: "Investing With Purpose",
    titleCn: "有目的的投资",
    description:
      "At Red Tree VC, deepened her focus on health-tech and impact investing, backing founders at the intersection of wellness and prosperity.",
    icon: Briefcase,
  },
  {
    year: "Now",
    title: "Joyous",
    titleCn: "Joyous 播客",
    description:
      "Launched Joyous to share the conversations, insights, and connections she's made across a career spanning three continents. Where health meets wealth.",
    icon: Mic,
  },
];

const stats = [
  { value: "3", label: "Continents", sublabel: "Lived & worked across Asia, Europe, and North America" },
  { value: "12+", label: "Cities", sublabel: "From Shanghai to London to San Francisco" },
  { value: "Wharton", label: "& Harvard MBA", sublabel: "World-class academic foundation" },
  { value: "5+", label: "VC Firms", sublabel: "Including Balderton, B Capital, Red Tree" },
  { value: "2", label: "Languages", sublabel: "English and Mandarin Chinese" },
  { value: "20+", label: "Years of Violin", sublabel: "Classically trained musician" },
];

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="bg-[#0B1120] pt-32 pb-24 md:pb-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(201,169,110,0.1)_0%,transparent_60%)]" />
          <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <p className="text-xs tracking-[0.3em] text-[#C9A96E] uppercase font-medium mb-4">
                The Host
              </p>
              <h1 className="text-5xl md:text-7xl font-extralight text-white tracking-tight mb-6">
                Jodi Yang
              </h1>
              <p className="text-xl md:text-2xl font-light text-zinc-400 max-w-2xl leading-relaxed">
                Investor. Violinist. Builder. A bilingual Chinese-American
                navigating the worlds of health, wealth, and everything that
                matters in between.
              </p>
            </motion.div>

            {/* Bilingual element */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12 flex items-center gap-6"
            >
              <div className="h-[1px] w-16 bg-[#C9A96E]/40" />
              <p className="text-zinc-500 text-sm italic">
                &ldquo;The best investments begin with investing in
                yourself.&rdquo;
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-3 flex items-center gap-6"
            >
              <div className="h-[1px] w-16 bg-[#C9A96E]/20" />
              <p className="text-zinc-600 text-sm">
                &ldquo;最好的投资从投资自己开始。&rdquo;
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission */}
        <section className="bg-[#F7F3ED] py-24 md:py-32">
          <div className="max-w-4xl mx-auto px-6 lg:px-12">
            <AnimatedSection>
              <div className="max-w-3xl">
                <p className="text-xs tracking-[0.3em] text-[#C9A96E] uppercase font-medium mb-3">
                  Philosophy
                </p>
                <h2 className="text-3xl md:text-4xl font-light text-[#0B1120] mb-8 tracking-tight">
                  Where Health Meets Wealth
                </h2>
                <div className="space-y-5 text-[#0B1120]/70 leading-relaxed text-lg">
                  <p>
                    After two decades at the intersection of finance,
                    entrepreneurship, and global markets, Jodi discovered a
                    truth that most people in power overlook: the greatest
                    returns come from the investments we make in our own
                    wellbeing.
                  </p>
                  <p>
                    She watched brilliant founders burn out. She saw portfolios
                    grow while the people behind them withered. She experienced
                    it herself &mdash; the relentless pace of global venture
                    capital, the constant travel, the pressure to always be
                    producing.
                  </p>
                  <p>
                    Joyous was born from a simple conviction: the conversations
                    about building a rich life and building real wealth should
                    not be separate. They are the same conversation.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Timeline */}
        <section className="bg-[#0B1120] py-24 md:py-32">
          <div className="max-w-4xl mx-auto px-6 lg:px-12">
            <AnimatedSection>
              <p className="text-xs tracking-[0.3em] text-[#C9A96E] uppercase font-medium mb-3">
                The Journey
              </p>
              <h2 className="text-3xl md:text-4xl font-light text-white mb-16 tracking-tight">
                A Career Across Continents
              </h2>
            </AnimatedSection>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-6 md:left-8 top-0 bottom-0 w-[1px] bg-white/10" />

              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <AnimatedSection key={item.year} delay={index * 0.08}>
                    <div className="relative flex gap-6 md:gap-10 pl-0">
                      {/* Dot + Icon */}
                      <div className="relative z-10 flex-shrink-0">
                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl bg-[#141B2D] border border-white/10 flex items-center justify-center">
                          <item.icon
                            size={20}
                            className="text-[#C9A96E]"
                          />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="pb-2 pt-1">
                        <span className="text-xs font-medium tracking-[0.2em] text-[#C9A96E] uppercase">
                          {item.year}
                        </span>
                        <h3 className="text-xl font-semibold text-white mt-1 mb-1">
                          {item.title}
                        </h3>
                        <p className="text-sm text-zinc-600 mb-3">
                          {item.titleCn}
                        </p>
                        <p className="text-zinc-400 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-[#F7F3ED] py-24 md:py-32">
          <div className="max-w-6xl mx-auto px-6 lg:px-12">
            <AnimatedSection>
              <div className="text-center mb-16">
                <p className="text-xs tracking-[0.3em] text-[#C9A96E] uppercase font-medium mb-3">
                  By the Numbers
                </p>
                <h2 className="text-3xl md:text-4xl font-light text-[#0B1120] tracking-tight">
                  A Life of Breadth & Depth
                </h2>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <AnimatedSection key={stat.label} delay={index * 0.06}>
                  <div className="bg-white rounded-2xl p-8 border border-[#0B1120]/5 text-center h-full">
                    <p className="text-4xl md:text-5xl font-extralight text-[#0B1120] mb-1">
                      {stat.value}
                    </p>
                    <p className="text-sm font-semibold text-[#0B1120] mb-2">
                      {stat.label}
                    </p>
                    <p className="text-xs text-[#0B1120]/50 leading-relaxed">
                      {stat.sublabel}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* The Joyous Vision */}
        <section className="bg-[#0B1120] py-24 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(201,169,110,0.06)_0%,transparent_50%)]" />
          <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12">
            <AnimatedSection>
              <div className="text-center">
                <p className="text-xs tracking-[0.3em] text-[#C9A96E] uppercase font-medium mb-3">
                  The Vision
                </p>
                <h2 className="text-3xl md:text-4xl font-light text-white mb-8 tracking-tight">
                  Why Joyous Exists
                </h2>
                <div className="max-w-2xl mx-auto space-y-5 text-zinc-400 leading-relaxed text-lg">
                  <p>
                    Joyous exists because the most important conversations
                    happen at intersections. The intersection of health and
                    wealth. Of art and science. Of Eastern and Western wisdom.
                    Of personal wellbeing and professional excellence.
                  </p>
                  <p>
                    Every episode is an invitation to explore these
                    intersections with people who have devoted their lives to
                    bridging them &mdash; founders building the future of
                    health-tech, investors who understand that sustainable
                    returns begin with sustainable lives, and creatives who
                    prove that beauty and business are not at odds.
                  </p>
                </div>

                {/* Bilingual closing */}
                <div className="mt-12 space-y-2">
                  <p className="text-[#C9A96E] font-medium text-lg">
                    Joy is not the destination. It is the practice.
                  </p>
                  <p className="text-[#C9A96E]/60 text-base">
                    喜悦不是终点，而是一种修行。
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Violinist personal touch */}
        <section className="bg-[#F7F3ED] py-24 md:py-32">
          <div className="max-w-5xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <AnimatedSection>
                <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-[#0B1120] to-[#1a2540] relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Music size={64} className="text-[#C9A96E]/20" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
                    <p className="text-white font-light text-lg italic">
                      &ldquo;Music taught me to listen. Venture capital taught me
                      to act. Joyous is where both meet.&rdquo;
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.15}>
                <div>
                  <Heart size={20} className="text-[#C9A96E] mb-4" />
                  <h3 className="text-2xl font-semibold text-[#0B1120] mb-4">
                    The Musician Behind the Microphone
                  </h3>
                  <div className="space-y-4 text-[#0B1120]/70 leading-relaxed">
                    <p>
                      Before boardrooms and pitch decks, there were practice
                      rooms and concert halls. Jodi trained as a classical
                      violinist for over two decades, performing across three
                      continents. The discipline of music &mdash; the patience
                      of mastering a phrase, the vulnerability of live
                      performance, the joy of perfect resonance &mdash; shaped
                      how she approaches every conversation.
                    </p>
                    <p>
                      She believes the best interviews, like the best
                      performances, require deep listening, genuine curiosity,
                      and the courage to go where the moment leads.
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#0B1120] py-24 md:py-32">
          <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-light text-white mb-4 tracking-tight">
                Start Listening
              </h2>
              <p className="text-zinc-500 leading-relaxed mb-10 max-w-lg mx-auto">
                Dive into conversations at the intersection of health, wealth,
                and everything that matters.
              </p>
              <Link
                href="/episodes"
                className="inline-flex items-center gap-3 bg-[#C9A96E] text-[#0B1120] px-8 py-4 rounded-full text-sm font-semibold tracking-wide uppercase hover:bg-[#d4b87e] transition-all duration-300 hover:shadow-[0_0_40px_rgba(201,169,110,0.3)]"
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
