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
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-accent underline-offset-4 transition-colors hover:text-foreground hover:underline"
                >
                  {item.institution}
                </a>
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
