import { education } from "@/data/content";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function Education() {
  return (
    <section
      id="education"
      className="mx-auto max-w-5xl scroll-mt-20 px-6 py-16"
    >
      <Reveal>
        <SectionHeading index="04" title="Education" />
        <div className="space-y-6">
          {education.map((item) => (
            <div
              key={`${item.institution}-${item.period}`}
              className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1"
            >
              <div>
                <p className="font-semibold text-foreground">{item.degree}</p>
                <p className="flex items-center gap-1.5 text-sm text-accent">
                  {item.institution}
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open ${item.institution}`}
                      className="text-foreground-muted transition-colors hover:text-accent"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-3.5 w-3.5"
                      >
                        <path d="M7 17 17 7M8 7h9v9" />
                      </svg>
                    </a>
                  )}
                </p>
              </div>
              <p className="font-mono text-xs text-foreground-muted">
                {item.period}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
