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
        <div
          className="relative overflow-hidden rounded-2xl transition-shadow duration-300"
          style={{
            backgroundColor: "var(--bg-card-dark)",
            border: "1px solid var(--border-on-dark)",
          }}
        >
          {/* Top accent line */}
          <div
            className="absolute top-0 left-0 right-0 h-[2px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              background: `linear-gradient(to right, transparent, color-mix(in srgb, var(--accent) 60%, transparent), transparent)`,
            }}
          />

          <div className="p-6 sm:p-8">
            {/* Header row: episode number + duration */}
            <div className="flex items-center justify-between mb-4">
              <span
                className="font-mono text-sm font-medium tracking-widest uppercase"
                style={{ color: "var(--accent)" }}
              >
                Episode {String(episode.number).padStart(2, "0")}
              </span>
              <span
                className="flex items-center gap-1.5 text-xs font-medium"
                style={{ color: "var(--text-muted)" }}
              >
                <Clock className="w-3.5 h-3.5" />
                {episode.duration}
              </span>
            </div>

            {/* Title */}
            <h3
              className="text-lg sm:text-xl font-semibold leading-snug mb-3 transition-colors duration-200"
              style={{ color: "var(--text-on-dark)" }}
            >
              {episode.title}
            </h3>

            {/* Guest */}
            <div className="mb-4">
              <p
                className="font-medium text-sm"
                style={{ color: "color-mix(in srgb, var(--text-on-dark) 90%, transparent)" }}
              >
                {episode.guest}
              </p>
              <p
                className="text-sm mt-0.5"
                style={{ color: "var(--text-muted)" }}
              >
                {episode.guestTitle}
              </p>
            </div>

            {/* Description excerpt */}
            <p
              className="text-sm leading-relaxed line-clamp-3 mb-5"
              style={{ color: "var(--nav-text-muted)" }}
            >
              {episode.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-5">
              {episode.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-full text-[11px] font-medium tracking-wide uppercase"
                  style={{
                    backgroundColor: "color-mix(in srgb, var(--text-on-dark) 5%, transparent)",
                    color: "var(--nav-text-muted)",
                    border: "1px solid var(--border-on-dark)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Play button row */}
            <div
              className="flex items-center justify-between pt-4"
              style={{ borderTop: "1px solid var(--border-on-dark)" }}
            >
              <span
                className="text-xs font-medium"
                style={{ color: "var(--text-muted)" }}
              >
                {new Date(episode.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>

              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 text-sm font-medium"
                style={{ color: "var(--accent)" }}
              >
                <span className="hidden sm:inline opacity-0 -translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0">
                  Listen Now
                </span>
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-200"
                  style={{
                    backgroundColor: "color-mix(in srgb, var(--accent) 10%, transparent)",
                    border: "1px solid color-mix(in srgb, var(--accent) 20%, transparent)",
                  }}
                >
                  <Play
                    className="w-4 h-4 ml-0.5"
                    style={{ color: "var(--accent)", fill: "var(--accent)" }}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
