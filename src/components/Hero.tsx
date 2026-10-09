import { profile } from "@/data/content";
import { ProfilePhoto } from "./ProfilePhoto";

export function Hero() {
  return (
    <section
      id="top"
      className="mx-auto flex min-h-[90vh] max-w-5xl flex-col justify-center px-6 py-16"
    >
      <div className="flex flex-col-reverse items-center gap-10 sm:flex-row sm:items-start sm:justify-between">
        <div className={profile.photo ? "sm:max-w-xl" : undefined}>
          <p className="font-mono text-accent">Hi, my name is</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            {profile.name}.
          </h1>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground-muted sm:text-5xl">
            {profile.title}.
          </p>
          <p className="mt-6 max-w-xl text-balance text-foreground-muted">
            {profile.about}
          </p>
          <div className="mt-10 flex flex-wrap gap-4 font-mono text-sm">
            <a
              href={`mailto:${profile.email}`}
              className="rounded border border-accent px-6 py-3.5 text-accent transition-colors hover:bg-accent-soft"
            >
              Get in touch
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="rounded border border-foreground-muted/30 px-6 py-3.5 text-foreground-muted transition-colors hover:border-accent hover:text-accent"
            >
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded border border-foreground-muted/30 px-6 py-3.5 text-foreground-muted transition-colors hover:border-accent hover:text-accent"
            >
              LinkedIn
            </a>
          </div>
        </div>
        {profile.photo && (
          <div className="sm:mt-8">
            <ProfilePhoto src={profile.photo} alt={profile.name} />
          </div>
        )}
      </div>
    </section>
  );
}
