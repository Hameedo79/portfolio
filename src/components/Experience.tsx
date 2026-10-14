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
                <p className="text-sm text-accent">
                  {job.company}{" "}
                  {job.link && (
                    <a
                      href={job.link}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open ${job.company}`}
                      className="inline-block align-middle text-foreground-muted transition-colors hover:text-accent"
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
                <p className="mt-1 font-mono text-xs text-foreground-muted">
                  {job.period}
                  {job.remote && (
                    <span className="ml-2 rounded-full border border-accent/30 px-2 py-0.5 text-[10px] font-sans uppercase tracking-wide text-accent">
                      Remote
                    </span>
                  )}
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
