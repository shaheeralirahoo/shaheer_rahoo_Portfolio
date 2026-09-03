"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, Rocket, ArrowRight } from "lucide-react";
import { featuredProjects, moreProjects, type Project } from "@/data/projects";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

function ProjectCard({ project, featured }: { project: Project; featured?: boolean }) {
  return (
    <div
      className={cn(
        "flex flex-col rounded-xl border border-border bg-card shadow-sm overflow-hidden",
        featured && "lg:p-0",
      )}
    >
      {project.gradient && (
        <div className={cn("h-24 bg-gradient-to-r", project.gradient)} />
      )}
      <div className={cn("flex flex-col flex-1 p-6", featured && "lg:p-8")}>
      {featured && (
        <Badge variant="highlight" className="mb-3 w-fit gap-1.5">
          <Rocket className="h-3 w-3" />
          Featured
        </Badge>
      )}
      <h3 className="text-lg font-semibold">
        {project.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
        {featured && project.summary ? project.summary : project.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground"
          >
            {t}
          </span>
        ))}
      </div>

      {featured && project.slug && (
        <div className="mt-5">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            View case study
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      )}

      {!featured && project.links && project.links.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2">
          {project.links.map((link) => (
            <a
              key={link.url + link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              {link.label}
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          ))}
        </div>
      )}
      </div>
    </div>
  );
}

export function Projects() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="projects" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Projects
          </h2>
          <p className="mt-2 text-muted-foreground">
            Production systems I&apos;ve designed and built — dive into the
            featured case studies.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <ProjectCard project={project} featured />
            </motion.div>
          ))}
        </div>

        <div className="mt-12">
          <h3 className="mb-4 text-center text-xl font-semibold tracking-tight">
            Additional projects
          </h3>
          <p className="mb-8 text-center text-sm text-muted-foreground">
            More of the platforms and apps I&apos;ve contributed to.
          </p>

          {showMore && (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {moreProjects.map((project, i) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </div>
          )}

          {!showMore && moreProjects.length > 0 && (
            <div className="text-center">
              <button
                type="button"
                onClick={() => setShowMore(true)}
                className="inline-flex h-11 items-center gap-2 rounded-lg border border-border px-6 text-sm font-medium transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                Show more work
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
