import { projects } from "@/data/content";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { ProjectGallery } from "./ProjectGallery";

function getInitials(name: string) {
  const words = name.split(/\s+/).filter(Boolean);
  if (words.length === 1) return words[0].toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
}

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 bg-background-light">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <Reveal>
          <SectionHeading index="05" title="Projects" />
        </Reveal>
        <div className="grid items-start gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <Reveal key={project.name}>
              <article className="group overflow-hidden rounded-lg border border-foreground-muted/10 bg-background shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-accent/10">
                {project.images && project.images.length > 0 ? (
                  <ProjectGallery images={project.images} alt={project.name} />
                ) : (
                  <div className="flex aspect-video w-full items-center justify-center bg-accent-soft">
                    <span className="font-mono text-3xl font-semibold text-accent/40">
                      {getInitials(project.name)}
                    </span>
                  </div>
                )}
                <div className="p-6">
                  <h3 className="flex items-center gap-2 font-semibold text-foreground transition-colors group-hover:text-accent">
                    {project.name}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Open ${project.name}`}
                        className="text-foreground-muted transition-colors hover:text-accent"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4"
                        >
                          <path d="M7 17 17 7M8 7h9v9" />
                        </svg>
                      </a>
                    )}
                  </h3>
                  <p className="mt-2 text-sm text-foreground-muted">
                    {project.description}
                  </p>
                  <div className="mt-3 space-y-1 text-xs text-foreground-muted">
                    {project.frontend && (
                      <p>
                        <span className="text-foreground">Frontend:</span>{" "}
                        {project.frontend.join(", ")}
                      </p>
                    )}
                    {project.backend && (
                      <p>
                        <span className="text-foreground">Backend:</span>{" "}
                        {project.backend.join(", ")}
                      </p>
                    )}
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-accent-soft px-3 py-1 font-mono text-xs text-accent"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
