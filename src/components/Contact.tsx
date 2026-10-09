import { profile } from "@/data/content";
import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto flex max-w-2xl scroll-mt-20 flex-col items-center px-6 py-24 text-center"
    >
      <Reveal>
        <p className="font-mono text-accent">06. What&apos;s Next?</p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
          Get In Touch
        </h2>
        <p className="mt-6 text-foreground-muted">
          I&apos;m open to new opportunities and interesting conversations. Feel
          free to reach out.
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="mt-10 inline-block rounded border border-accent px-8 py-4 font-mono text-sm text-accent transition-colors hover:bg-accent-soft"
        >
          Contact Me
        </a>
        <p className="mt-6 flex flex-wrap items-center justify-center gap-x-2 text-sm text-foreground-muted">
          <a
            href={`mailto:${profile.email}`}
            className="transition-colors hover:text-accent"
          >
            {profile.email}
          </a>
          <span aria-hidden>&middot;</span>
          <a
            href={`tel:${profile.phoneHref}`}
            className="transition-colors hover:text-accent"
          >
            {profile.phone}
          </a>
          <span aria-hidden>&middot;</span>
          {profile.location}
        </p>
      </Reveal>
    </section>
  );
}
