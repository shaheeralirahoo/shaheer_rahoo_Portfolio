import { Github, Linkedin, Mail, Phone, Download } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { ContactForm } from "@/components/contact-form";

export function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-border bg-card px-6 py-14"
    >
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Get in Touch
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          Interested in working together or have a question? Reach out — I&apos;m
          always open to discussing new opportunities.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex h-11 items-center gap-2 rounded-lg bg-primary px-6 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            <Mail className="h-4 w-4" />
            {siteConfig.email}
          </a>
          <a
            href={`tel:${siteConfig.phone}`}
            className="inline-flex h-11 items-center gap-2 rounded-lg border border-border px-6 text-sm font-medium transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            <Phone className="h-4 w-4" />
            {siteConfig.phoneDisplay}
          </a>
          <a
            href={siteConfig.resumeUrl}
            download
            className="inline-flex h-11 items-center gap-2 rounded-lg border border-border px-6 text-sm font-medium transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            <Download className="h-4 w-4" />
            Resume
          </a>
        </div>

        <div className="mx-auto mt-10 max-w-lg">
          <ContactForm />
        </div>

        <div className="mt-10 flex items-center justify-center gap-6">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:rounded-lg"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:rounded-lg"
          >
            <Linkedin className="h-6 w-6" />
          </a>
        </div>

        <p className="mt-8 text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
