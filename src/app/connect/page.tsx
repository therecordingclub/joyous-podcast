"use client";

import { useRef, type ComponentType } from "react";
import { motion, useInView } from "framer-motion";
import {
  Mail,
  ArrowUpRight,
  MessageCircle,
  Briefcase,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

/* Inline brand SVG icons (lucide-react v1.x removed brand icons) */
function TwitterIcon({ size = 20, className }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedinIcon({ size = 20, className }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function InstagramIcon({ size = 20, className }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function YoutubeIcon({ size = 20, className }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

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

const socialLinks: {
  name: string;
  handle: string;
  url: string;
  icon: ComponentType<{ size?: number; className?: string }>;
  description: string;
  color: string;
  bg: string;
  border: string;
}[] = [
  {
    name: "Twitter / X",
    handle: "@jodioyang",
    url: "https://twitter.com/jodioyang",
    icon: TwitterIcon,
    description: "Thoughts on health, wealth, and the spaces between.",
    color: "group-hover:text-sky-400",
    bg: "group-hover:bg-sky-400/10",
    border: "group-hover:border-sky-400/20",
  },
  {
    name: "LinkedIn",
    handle: "/in/jodiyang",
    url: "https://linkedin.com/in/jodiyang",
    icon: LinkedinIcon,
    description: "Professional updates and long-form writing.",
    color: "group-hover:text-blue-400",
    bg: "group-hover:bg-blue-400/10",
    border: "group-hover:border-blue-400/20",
  },
  {
    name: "Instagram",
    handle: "@jodioyang",
    url: "https://instagram.com/jodioyang",
    icon: InstagramIcon,
    description: "Behind the scenes of the podcast and life in motion.",
    color: "group-hover:text-pink-400",
    bg: "group-hover:bg-pink-400/10",
    border: "group-hover:border-pink-400/20",
  },
  {
    name: "YouTube",
    handle: "@joyouspodcast",
    url: "https://youtube.com/@joyouspodcast",
    icon: YoutubeIcon,
    description: "Full video episodes and exclusive clips.",
    color: "group-hover:text-red-400",
    bg: "group-hover:bg-red-400/10",
    border: "group-hover:border-red-400/20",
  },
];

export default function ConnectPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="bg-[#0B1120] pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(201,169,110,0.08)_0%,transparent_60%)]" />
          <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <p className="text-xs tracking-[0.3em] text-[#C9A96E] uppercase font-medium mb-4">
                Get in Touch
              </p>
              <h1 className="text-5xl md:text-6xl font-extralight text-white tracking-tight mb-6">
                Let&apos;s Connect
              </h1>
              <p className="text-zinc-500 max-w-lg mx-auto leading-relaxed">
                Whether you&apos;re a listener, a potential guest, or someone
                who believes health and wealth belong in the same conversation
                &mdash; I&apos;d love to hear from you.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Social Media Grid */}
        <section className="bg-[#F7F3ED] py-24 md:py-32">
          <div className="max-w-4xl mx-auto px-6 lg:px-12">
            <AnimatedSection>
              <p className="text-xs tracking-[0.3em] text-[#C9A96E] uppercase font-medium mb-3">
                Find Me Online
              </p>
              <h2 className="text-3xl md:text-4xl font-light text-[#0B1120] mb-12 tracking-tight">
                Social
              </h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {socialLinks.map((link, index) => (
                <AnimatedSection key={link.name} delay={index * 0.08}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group block bg-white rounded-2xl border border-[#0B1120]/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${link.border}`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className={`w-12 h-12 rounded-xl bg-[#0B1120]/5 flex items-center justify-center transition-colors duration-300 ${link.bg}`}
                      >
                        <link.icon
                          size={20}
                          className={`text-[#0B1120]/40 transition-colors duration-300 ${link.color}`}
                        />
                      </div>
                      <ArrowUpRight
                        size={16}
                        className="text-[#0B1120]/20 group-hover:text-[#0B1120]/60 transition-colors"
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-[#0B1120] mb-1">
                      {link.name}
                    </h3>
                    <p className="text-sm font-medium text-[#C9A96E] mb-2">
                      {link.handle}
                    </p>
                    <p className="text-sm text-[#0B1120]/50 leading-relaxed">
                      {link.description}
                    </p>
                  </a>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="bg-[#0B1120] py-24 md:py-32">
          <div className="max-w-3xl mx-auto px-6 lg:px-12">
            <AnimatedSection>
              <div className="text-center">
                <MessageCircle size={28} className="text-[#C9A96E] mx-auto mb-4" />
                <p className="text-xs tracking-[0.3em] text-[#C9A96E] uppercase font-medium mb-3">
                  Newsletter
                </p>
                <h2 className="text-3xl md:text-4xl font-light text-white mb-4 tracking-tight">
                  Join the Joyous Community
                </h2>
                <p className="text-zinc-500 leading-relaxed mb-10 max-w-lg mx-auto">
                  A curated newsletter with behind-the-scenes stories, health
                  and wealth insights, and early access to new episodes.
                  Delivered with intention, never with spam.
                </p>

                <form
                  className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="flex-1 bg-white/5 border border-white/10 rounded-full px-6 py-4 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#C9A96E]/50 transition-colors"
                  />
                  <button
                    type="submit"
                    className="bg-[#C9A96E] text-[#0B1120] px-8 py-4 rounded-full text-sm font-semibold tracking-wide uppercase hover:bg-[#d4b87e] transition-colors flex-shrink-0"
                  >
                    Subscribe
                  </button>
                </form>
                <p className="text-xs text-zinc-700 mt-4">
                  No spam, ever. Unsubscribe anytime.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Business Inquiries */}
        <section className="bg-[#F7F3ED] py-24 md:py-32">
          <div className="max-w-4xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <AnimatedSection>
                <div className="bg-white rounded-2xl border border-[#0B1120]/5 p-8">
                  <Briefcase size={24} className="text-[#C9A96E] mb-4" />
                  <h3 className="text-xl font-semibold text-[#0B1120] mb-3">
                    Business Inquiries
                  </h3>
                  <p className="text-[#0B1120]/60 leading-relaxed mb-6">
                    For sponsorship, partnership, speaking engagements, or
                    collaboration opportunities with Joyous or Prime Lab.
                  </p>
                  <a
                    href="mailto:hello@joyouspodcast.com"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#C9A96E] hover:gap-3 transition-all duration-300"
                  >
                    <Mail size={14} />
                    hello@joyouspodcast.com
                  </a>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <div className="bg-white rounded-2xl border border-[#0B1120]/5 p-8">
                  <Mic2Icon className="text-[#C9A96E] mb-4" />
                  <h3 className="text-xl font-semibold text-[#0B1120] mb-3">
                    Be a Guest
                  </h3>
                  <p className="text-[#0B1120]/60 leading-relaxed mb-6">
                    Are you a founder, investor, creative, or artist working at
                    the intersection of health and wealth? We&apos;d love to
                    feature your story.
                  </p>
                  <a
                    href="mailto:guests@joyouspodcast.com"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#C9A96E] hover:gap-3 transition-all duration-300"
                  >
                    <Mail size={14} />
                    guests@joyouspodcast.com
                  </a>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

/* Inline Mic2 icon since lucide may not have it in all versions */
function Mic2Icon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="m12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3Z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" x2="12" y1="19" y2="22" />
    </svg>
  );
}
