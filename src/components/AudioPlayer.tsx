"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  SkipBack,
  SkipForward,
  X,
  ChevronUp,
} from "lucide-react";

interface AudioPlayerProps {
  src: string;
  title: string;
  guest: string;
  episodeNumber: number;
  onClose?: () => void;
}

function formatTime(seconds: number): string {
  if (!isFinite(seconds) || seconds < 0) return "0:00";
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  if (h > 0) {
    return `${h}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  }
  return `${m}:${String(s).padStart(2, "0")}`;
}

export default function AudioPlayer({
  src,
  title,
  guest,
  episodeNumber,
  onClose,
}: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const volumeRef = useRef<HTMLDivElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [isMuted, setIsMuted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  // Sync audio state
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => {
      if (!isDragging) setCurrentTime(audio.currentTime);
    };
    const handleLoadedMetadata = () => setDuration(audio.duration);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [isDragging]);

  // Volume sync
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = isMuted ? 0 : volume;
  }, [volume, isMuted]);

  const togglePlay = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  const handleProgressClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const audio = audioRef.current;
      const bar = progressRef.current;
      if (!audio || !bar) return;
      const rect = bar.getBoundingClientRect();
      const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
      const newTime = ratio * duration;
      audio.currentTime = newTime;
      setCurrentTime(newTime);
    },
    [duration]
  );

  const handleProgressDrag = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!isDragging) return;
      handleProgressClick(e);
    },
    [isDragging, handleProgressClick]
  );

  const handleVolumeClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const bar = volumeRef.current;
      if (!bar) return;
      const rect = bar.getBoundingClientRect();
      const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
      setVolume(ratio);
      if (isMuted) setIsMuted(false);
    },
    [isMuted]
  );

  const skip = useCallback(
    (seconds: number) => {
      const audio = audioRef.current;
      if (!audio) return;
      audio.currentTime = Math.max(0, Math.min(duration, audio.currentTime + seconds));
    },
    [duration]
  );

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ type: "spring", damping: 28, stiffness: 300 }}
        className="fixed bottom-0 left-0 right-0 z-50"
      >
        <audio ref={audioRef} src={src} preload="metadata" />

        {/* Glassmorphism backdrop */}
        <div
          className="relative backdrop-blur-2xl border-t shadow-[0_-8px_32px_rgba(0,0,0,0.4)]"
          style={{
            backgroundColor: "color-mix(in srgb, var(--hero-bg) 85%, transparent)",
            borderColor: "var(--border-on-dark)",
          }}
        >
          {/* Ambient glow when playing */}
          {isPlaying && (
            <div className="absolute inset-0 pointer-events-none">
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-24 rounded-full blur-3xl"
                style={{
                  backgroundColor: "color-mix(in srgb, var(--accent) 6%, transparent)",
                }}
              />
            </div>
          )}

          {/* Full-width progress bar (thin, top of player) */}
          <div
            ref={progressRef}
            className="relative w-full h-1.5 cursor-pointer group/progress hover:h-2.5 transition-all duration-150"
            onClick={handleProgressClick}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleProgressDrag}
          >
            <div
              className="absolute inset-0"
              style={{ backgroundColor: "var(--border-on-dark)" }}
            />
            <div
              className="absolute left-0 top-0 bottom-0 transition-[width] duration-75"
              style={{
                width: `${progress}%`,
                background: `linear-gradient(to right, var(--progress-gradient-start), var(--progress-gradient-end))`,
              }}
            />
            {/* Scrubber dot */}
            <div
              className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full opacity-0 group-hover/progress:opacity-100 transition-opacity duration-150"
              style={{
                left: `calc(${progress}% - 6px)`,
                backgroundColor: "var(--accent)",
                boxShadow: `0 0 8px color-mix(in srgb, var(--accent) 40%, transparent)`,
              }}
            />
          </div>

          {/* Player content */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
            <div className="flex items-center gap-4">
              {/* Episode info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <span
                    className="text-[10px] font-mono font-semibold tracking-widest uppercase shrink-0"
                    style={{ color: "var(--accent)" }}
                  >
                    EP {String(episodeNumber).padStart(2, "0")}
                  </span>
                  <span
                    className="text-[10px]"
                    style={{ color: "var(--text-muted)" }}
                  >|</span>
                  <span
                    className="text-[10px] font-medium truncate"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {guest}
                  </span>
                </div>
                <h4
                  className="text-sm font-medium truncate leading-tight"
                  style={{ color: "var(--text-on-dark)" }}
                >
                  {title}
                </h4>
              </div>

              {/* Playback controls */}
              <div className="flex items-center gap-1 sm:gap-2 shrink-0">
                <button
                  onClick={() => skip(-15)}
                  className="w-8 h-8 flex items-center justify-center transition-colors"
                  style={{ color: "var(--nav-text-muted)" }}
                  aria-label="Rewind 15 seconds"
                >
                  <SkipBack className="w-4 h-4" />
                </button>

                <motion.button
                  whileTap={{ scale: 0.92 }}
                  onClick={togglePlay}
                  className="w-11 h-11 rounded-full flex items-center justify-center transition-colors"
                  style={{
                    backgroundColor: "var(--btn-primary-bg)",
                    color: "var(--btn-primary-text)",
                    boxShadow: `0 0 20px color-mix(in srgb, var(--accent) 25%, transparent)`,
                  }}
                  aria-label={isPlaying ? "Pause" : "Play"}
                >
                  <AnimatePresence mode="wait">
                    {isPlaying ? (
                      <motion.div
                        key="pause"
                        initial={{ scale: 0, rotate: -90 }}
                        animate={{ scale: 1, rotate: 0 }}
                        exit={{ scale: 0, rotate: 90 }}
                        transition={{ duration: 0.15 }}
                      >
                        <Pause className="w-5 h-5" style={{ fill: "var(--btn-primary-text)" }} />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="play"
                        initial={{ scale: 0, rotate: 90 }}
                        animate={{ scale: 1, rotate: 0 }}
                        exit={{ scale: 0, rotate: -90 }}
                        transition={{ duration: 0.15 }}
                      >
                        <Play className="w-5 h-5 ml-0.5" style={{ fill: "var(--btn-primary-text)" }} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>

                <button
                  onClick={() => skip(30)}
                  className="w-8 h-8 flex items-center justify-center transition-colors"
                  style={{ color: "var(--nav-text-muted)" }}
                  aria-label="Forward 30 seconds"
                >
                  <SkipForward className="w-4 h-4" />
                </button>
              </div>

              {/* Time display */}
              <div
                className="hidden sm:flex items-center gap-1 text-[11px] font-mono shrink-0 tabular-nums"
                style={{ color: "var(--text-muted)" }}
              >
                <span style={{ color: "var(--text-on-dark)" }}>{formatTime(currentTime)}</span>
                <span>/</span>
                <span>{formatTime(duration)}</span>
              </div>

              {/* Volume (desktop only) */}
              <div className="hidden md:flex items-center gap-2 shrink-0">
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="w-8 h-8 flex items-center justify-center transition-colors"
                  style={{ color: "var(--nav-text-muted)" }}
                  aria-label={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted || volume === 0 ? (
                    <VolumeX className="w-4 h-4" />
                  ) : (
                    <Volume2 className="w-4 h-4" />
                  )}
                </button>
                <div
                  ref={volumeRef}
                  className="w-20 h-1.5 rounded-full cursor-pointer relative group/vol"
                  style={{ backgroundColor: "var(--border-on-dark)" }}
                  onClick={handleVolumeClick}
                >
                  <div
                    className="absolute left-0 top-0 bottom-0 rounded-full transition-[width] duration-75"
                    style={{
                      width: `${(isMuted ? 0 : volume) * 100}%`,
                      backgroundColor: "color-mix(in srgb, var(--accent) 60%, transparent)",
                    }}
                  />
                  <div
                    className="absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full opacity-0 group-hover/vol:opacity-100 transition-opacity"
                    style={{
                      left: `calc(${(isMuted ? 0 : volume) * 100}% - 5px)`,
                      backgroundColor: "var(--accent)",
                    }}
                  />
                </div>
              </div>

              {/* Expand / Close */}
              <div className="flex items-center gap-1 shrink-0">
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="w-8 h-8 flex items-center justify-center transition-colors sm:hidden"
                  style={{ color: "var(--text-muted)" }}
                  aria-label="Expand"
                >
                  <ChevronUp
                    className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
                  />
                </button>
                {onClose && (
                  <button
                    onClick={onClose}
                    className="w-8 h-8 flex items-center justify-center transition-colors"
                    style={{ color: "var(--text-muted)" }}
                    aria-label="Close player"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Mobile expanded view */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="sm:hidden overflow-hidden"
                >
                  <div className="pt-3 flex items-center justify-between">
                    <div
                      className="flex items-center gap-1 text-[11px] font-mono tabular-nums"
                      style={{ color: "var(--text-muted)" }}
                    >
                      <span style={{ color: "var(--text-on-dark)" }}>
                        {formatTime(currentTime)}
                      </span>
                      <span>/</span>
                      <span>{formatTime(duration)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setIsMuted(!isMuted)}
                        className="transition-colors"
                        style={{ color: "var(--nav-text-muted)" }}
                      >
                        {isMuted || volume === 0 ? (
                          <VolumeX className="w-4 h-4" />
                        ) : (
                          <Volume2 className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
