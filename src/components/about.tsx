import { about } from "@/data/about";

export function About() {
  return (
    <section id="about" className="px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            About
          </h2>
          <p className="mt-2 text-muted-foreground">
            A backend engineer focused on the systems behind production apps.
          </p>
        </div>

        <div className="space-y-4">
          {about.background.map((paragraph, i) => (
            <p key={i} className="leading-relaxed text-muted-foreground">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <h3 className="mb-3 font-semibold text-primary">
              Technical Focus
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {about.focus.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <h3 className="mb-3 font-semibold text-primary">Strengths</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {about.strengths.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 rounded-xl border border-border bg-card p-6 shadow-sm">
          <h3 className="mb-2 font-semibold text-primary">
            Career Direction
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {about.careerDirection}
          </p>
        </div>
      </div>
    </section>
  );
}
