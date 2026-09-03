import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Check,
  AlertTriangle,
  Layers,
  ListChecks,
  TrendingUp,
} from "lucide-react";
import { getProjectBySlug, projects, type Project } from "@/data/projects";
import { siteConfig } from "@/data/site-config";

interface Params {
  slug: string;
}

export function generateStaticParams(): Params[] {
  return projects
    .filter((p) => p.slug)
    .map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  const title = `${project.title} | ${siteConfig.name}`;
  const description = project.summary || project.description;

  return {
    title: `${project.title} | Projects | ${siteConfig.name}`,
    description,
    openGraph: {
      type: "article",
      title,
      description,
      url: `${siteConfig.url}/projects/${project.slug}`,
      siteName: siteConfig.name,
      images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.name }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [siteConfig.ogImage],
    },
    alternates: {
      canonical: `${siteConfig.url}/projects/${project.slug}`,
    },
  };
}

function Section({
  icon: Icon,
  title,
  children,
}: {
  icon: typeof Check;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
      <h2 className="mb-3 flex items-center gap-2 text-lg font-semibold text-primary">
        <Icon className="h-5 w-5" />
        {title}
      </h2>
      <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
        {children}
      </div>
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex gap-2">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project: Project | undefined = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <Link
        href="/#projects"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to projects
      </Link>

      <div className="mt-8">
        {project.gradient && (
          <div className={`h-32 rounded-xl bg-gradient-to-r ${project.gradient}`} />
        )}
        <h1 className="mt-8 text-4xl font-bold tracking-tight sm:text-5xl">
          {project.title}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {project.links?.map((link) => (
            <a
              key={link.url + link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              {link.label}
              <ExternalLink className="h-4 w-4" />
            </a>
          ))}
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
        </div>
      </div>

      <div className="mt-12 space-y-6">
        {project.overview && (
          <Section icon={Layers} title="Overview">
            <p>{project.overview}</p>
          </Section>
        )}

        {project.problem && (
          <Section icon={AlertTriangle} title="Problem">
            <p>{project.problem}</p>
          </Section>
        )}

        {project.solution && (
          <Section icon={Check} title="Solution">
            <p>{project.solution}</p>
          </Section>
        )}

        {project.architecture && (
          <Section icon={Layers} title="Architecture">
            <p>{project.architecture}</p>
          </Section>
        )}

        {project.responsibilities && project.responsibilities.length > 0 && (
          <Section icon={ListChecks} title="Responsibilities">
            <BulletList items={project.responsibilities} />
          </Section>
        )}

        {project.challenges && project.challenges.length > 0 && (
          <Section icon={AlertTriangle} title="Engineering Challenges">
            <BulletList items={project.challenges} />
          </Section>
        )}

        {project.keyFeatures && project.keyFeatures.length > 0 && (
          <Section icon={Check} title="Key Features">
            <BulletList items={project.keyFeatures} />
          </Section>
        )}

        {project.impact && project.impact.length > 0 && (
          <Section icon={TrendingUp} title="Results & Impact">
            <BulletList items={project.impact} />
          </Section>
        )}
      </div>

      <div className="mt-12 border-t border-border pt-8">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to all projects
        </Link>
      </div>
    </div>
  );
}
