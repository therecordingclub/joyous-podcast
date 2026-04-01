"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Play, Clock } from "lucide-react";
import type { Episode } from "@/lib/episodes";

interface EpisodeCardProps {
  episode: Episode;
  index?: number;
}

export default function EpisodeCard({ episode, index = 0 }: EpisodeCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className="group relative"
    >
      <Link href={`/episodes/${episode.id}`} className="block">
        <div className="relative overflow-hidden rounded-2xl bg-[#141B2D] border border-white/[0.06] transition-shadow duration-300 group-hover:shadow-[0_8px_40px_rgba(201,169,110,0.12)]">
          {/* Top accent line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A96E]/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          <div className="p-6 sm:p-8">
            {/* Header row: episode number + duration */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-[#C9A96E] font-mono text-sm font-medium tracking-widest uppercase">
                Episode {String(episode.number).padStart(2, "0")}
              </span>
              <span className="flex items-center gap-1.5 text-zinc-500 text-xs font-medium">
                <Clock className="w-3.5 h-3.5" />
                {episode.duration}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-lg sm:text-xl font-semibold text-white leading-snug mb-3 transition-colors duration-200 group-hover:text-[#C9A96E]">
              {episode.title}
            </h3>

            {/* Guest */}
            <div className="mb-4">
              <p className="text-white/90 font-medium text-sm">
                {episode.guest}
              </p>
              <p className="text-zinc-500 text-sm mt-0.5">
                {episode.guestTitle}
              </p>
            </div>

            {/* Description excerpt */}
            <p className="text-zinc-400 text-sm leading-relaxed line-clamp-3 mb-5">
              {episode.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-5">
              {episode.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-full text-[11px] font-medium tracking-wide uppercase bg-white/[0.05] text-zinc-400 border border-white/[0.06]"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Play button row */}
            <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
              <span className="text-zinc-500 text-xs font-medium">
                {new Date(episode.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>

              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 text-[#C9A96E] text-sm font-medium"
              >
                <span className="hidden sm:inline opacity-0 -translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0">
                  Listen Now
                </span>
                <div className="w-9 h-9 rounded-full bg-[#C9A96E]/10 border border-[#C9A96E]/20 flex items-center justify-center transition-colors duration-200 group-hover:bg-[#C9A96E]/20">
                  <Play className="w-4 h-4 fill-[#C9A96E] text-[#C9A96E] ml-0.5" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
