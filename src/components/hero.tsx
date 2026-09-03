"use client";

import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  Download,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { siteConfig } from "@/data/site-config";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-6 py-20 text-center"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex max-w-4xl flex-col items-center gap-6"
      >
        <motion.p
          variants={item}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-1.5 text-sm text-muted-foreground"
        >
          <MapPin className="h-4 w-4" />
          {siteConfig.location}
          <span className="text-border">|</span>
          {siteConfig.experienceYears} years in production backend systems
        </motion.p>

        <motion.h1
          variants={item}
          className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl"
        >
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {siteConfig.name}
          </span>
        </motion.h1>

        <motion.p
          variants={item}
          className="text-xl font-semibold text-foreground sm:text-2xl"
        >
          {siteConfig.title}
        </motion.p>

        <motion.p
          variants={item}
          className="max-w-2xl text-lg leading-relaxed text-muted-foreground"
        >
          {siteConfig.headline}
        </motion.p>

        <motion.p
          variants={item}
          aria-hidden="true"
          className="max-w-2xl text-sm uppercase tracking-widest text-muted-foreground/80"
        >
          {siteConfig.focus}
        </motion.p>

        <motion.div
          variants={item}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#projects"
            className="inline-flex h-11 items-center gap-2 rounded-lg bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            View my work
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href={siteConfig.resumeUrl}
            download
            className="inline-flex h-11 items-center gap-2 rounded-lg border border-border px-6 text-sm font-medium transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            <Download className="h-4 w-4" />
            Resume
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex h-11 items-center gap-2 rounded-lg bg-muted px-6 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            <Mail className="h-4 w-4" />
            Contact
          </a>
        </motion.div>

        <motion.div variants={item} className="flex items-center gap-6">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:rounded-lg"
          >
            <Github className="h-7 w-7" />
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:rounded-lg"
          >
            <Linkedin className="h-7 w-7" />
          </a>
          <a
            href={`tel:${siteConfig.phone}`}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:rounded-lg"
          >
            <Phone className="h-5 w-5" />
            {siteConfig.phoneDisplay}
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
