"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "@/data/education";

export function Education() {
  return (
    <section id="education" className="px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Education
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-xl border border-border bg-card p-8 shadow-sm"
        >
          {education.map((edu) => (
            <div key={edu.degree}>
              <div className="flex items-center gap-3">
                <GraduationCap className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">{edu.degree}</h3>
              </div>
              <p className="mt-2 text-muted-foreground">
                {edu.university} · {edu.year}
              </p>
              {edu.project && (
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {edu.project}
                </p>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
