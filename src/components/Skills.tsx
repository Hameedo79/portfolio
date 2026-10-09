import { skills } from "@/data/content";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 bg-background-light">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <Reveal>
          <SectionHeading index="02" title="Skills" />
          <div className="grid gap-8 sm:grid-cols-2">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <h3 className="mb-3 font-mono text-sm font-semibold text-foreground">
                  {category}
                </h3>
                <ul className="grid grid-cols-1 gap-x-4 gap-y-2 text-sm text-foreground-muted">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="text-accent">▹</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
