import { experience } from "@/data/content";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-5xl scroll-mt-20 px-6 py-16"
    >
      <Reveal>
        <SectionHeading index="03" title="Experience" />
      </Reveal>
      <div className="space-y-10">
        {experience.map((job) => (
          <Reveal key={`${job.company}-${job.period}`}>
            <div className="grid gap-2 sm:grid-cols-[1fr_2fr] sm:gap-8">
              <div>
                <p className="font-semibold text-foreground">{job.role}</p>
                {job.link ? (
                  <a
                    href={job.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-accent underline-offset-4 transition-colors hover:text-foreground hover:underline"
                  >
                    {job.company}
                  </a>
                ) : (
                  <p className="text-sm text-accent">{job.company}</p>
                )}
                <p className="mt-1 font-mono text-xs text-foreground-muted">
                  {job.period}
                </p>
              </div>
              <ul className="space-y-2 text-sm text-foreground-muted">
                {job.highlights.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="mt-1 shrink-0 text-accent">▹</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
