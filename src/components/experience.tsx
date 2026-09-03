"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";
import { experiences } from "@/data/experience";
import { Badge } from "@/components/ui/badge";

export function Experience() {
  return (
    <section id="experience" className="px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Experience
          </h2>
          <p className="mt-2 text-muted-foreground">
            Where I&apos;ve built and shipped production systems.
          </p>
        </motion.div>

        <div className="relative border-l border-border pl-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative mb-10"
            >
              <span className="absolute -left-[41px] flex h-5 w-5 items-center justify-center rounded-full border-2 border-primary bg-background">
                <span className="h-2 w-2 rounded-full bg-primary" />
              </span>

              <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                  <h3 className="flex items-center gap-2 text-lg font-semibold">
                    <Briefcase className="h-4 w-4 text-primary" />
                    {exp.role}
                  </h3>
                  {exp.current && (
                    <Badge variant="highlight">Current</Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">
                  {exp.company} · {exp.period}
                </p>
                <p className="mb-4 mt-1 flex items-center gap-1 text-sm text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5" />
                  {exp.location}
                </p>
                <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
                  {exp.highlights.map((h, idx) => (
                    <li key={idx}>{h}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
