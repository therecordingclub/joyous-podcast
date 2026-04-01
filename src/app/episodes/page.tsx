"use client";

import { useState, useMemo, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Search, X, SlidersHorizontal } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import EpisodeCard from "@/components/EpisodeCard";
import { episodes } from "@/lib/episodes";

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

export default function EpisodesPage() {
  const [search, setSearch] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    episodes.forEach((ep) => ep.tags.forEach((t) => tags.add(t)));
    return Array.from(tags).sort();
  }, []);

  const filtered = useMemo(() => {
    return episodes.filter((ep) => {
      const matchesSearch =
        !search ||
        ep.title.toLowerCase().includes(search.toLowerCase()) ||
        ep.guest.toLowerCase().includes(search.toLowerCase()) ||
        ep.description.toLowerCase().includes(search.toLowerCase());
      const matchesTag = !activeTag || ep.tags.includes(activeTag);
      return matchesSearch && matchesTag;
    });
  }, [search, activeTag]);

  return (
    <>
      <Navigation />
      <main>
        {/* Hero banner */}
        <section className="bg-[#0B1120] pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(201,169,110,0.08)_0%,transparent_60%)]" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <p className="text-xs tracking-[0.3em] text-[#C9A96E] uppercase font-medium mb-3">
                Library
              </p>
              <h1 className="text-5xl md:text-6xl font-extralight text-white tracking-tight mb-4">
                Episodes
              </h1>
              <p className="text-zinc-500 max-w-xl leading-relaxed">
                Every conversation is a journey through the intersection of
                health and wealth. Browse the full archive below.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter / Search */}
        <section className="bg-[#0B1120] border-b border-white/5 sticky top-20 z-40 backdrop-blur-xl bg-[#0B1120]/90">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              {/* Search input */}
              <div className="relative flex-1 w-full sm:max-w-sm">
                <Search
                  size={16}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
                />
                <input
                  type="text"
                  placeholder="Search episodes, guests..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-full pl-11 pr-10 py-3 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#C9A96E]/50 transition-colors"
                />
                {search && (
                  <button
                    onClick={() => setSearch("")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white transition-colors"
                  >
                    <X size={14} />
                  </button>
                )}
              </div>

              {/* Tag filters */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1 w-full sm:w-auto scrollbar-hide">
                <SlidersHorizontal
                  size={14}
                  className="text-zinc-600 flex-shrink-0"
                />
                <button
                  onClick={() => setActiveTag(null)}
                  className={`flex-shrink-0 text-xs px-3 py-1.5 rounded-full font-medium tracking-wide transition-all duration-200 ${
                    !activeTag
                      ? "bg-[#C9A96E] text-[#0B1120]"
                      : "bg-white/5 text-zinc-500 hover:text-white"
                  }`}
                >
                  All
                </button>
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() =>
                      setActiveTag(activeTag === tag ? null : tag)
                    }
                    className={`flex-shrink-0 text-xs px-3 py-1.5 rounded-full font-medium tracking-wide transition-all duration-200 ${
                      activeTag === tag
                        ? "bg-[#C9A96E] text-[#0B1120]"
                        : "bg-white/5 text-zinc-500 hover:text-white"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Episodes grid */}
        <section className="bg-[#0B1120] py-16 md:py-24 min-h-[60vh]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            {filtered.length > 0 ? (
              <>
                <p className="text-sm text-zinc-600 mb-8">
                  {filtered.length} episode{filtered.length !== 1 ? "s" : ""}
                  {search || activeTag ? " found" : ""}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filtered.map((episode, index) => (
                    <EpisodeCard
                      key={episode.id}
                      episode={episode}
                      index={index}
                    />
                  ))}
                </div>
              </>
            ) : (
              <AnimatedSection>
                <div className="text-center py-24">
                  <p className="text-zinc-500 text-lg mb-2">
                    No episodes found
                  </p>
                  <p className="text-zinc-600 text-sm">
                    Try adjusting your search or filters.
                  </p>
                  <button
                    onClick={() => {
                      setSearch("");
                      setActiveTag(null);
                    }}
                    className="mt-6 text-sm text-[#C9A96E] font-medium hover:underline"
                  >
                    Clear all filters
                  </button>
                </div>
              </AnimatedSection>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
