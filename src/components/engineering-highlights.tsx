import {
  Braces,
  CreditCard,
  Radio,
  Database,
  ShieldCheck,
  Cloud,
  type LucideIcon,
} from "lucide-react";
import { highlights } from "@/data/about";

const iconMap: Record<string, LucideIcon> = {
  api: Braces,
  payment: CreditCard,
  realtime: Radio,
  database: Database,
  rbac: ShieldCheck,
  cloud: Cloud,
};

export function EngineeringHighlights() {
  return (
    <section id="engineering" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Engineering Focus
          </h2>
          <p className="mt-2 text-muted-foreground">
            The kinds of systems and problems I work on day to day.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((highlight) => {
            const Icon = iconMap[highlight.icon] ?? Braces;
            return (
              <div
                key={highlight.title}
                className="flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold">{highlight.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {highlight.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
