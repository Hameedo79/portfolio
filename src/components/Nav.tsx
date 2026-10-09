"use client";

import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { Logo } from "./Logo";

const sections = [
  { href: "#top", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-foreground-muted/10 bg-background/80 backdrop-blur">
      <nav className="relative flex items-center px-6 py-4">
        <a href="#top" aria-label="Go to top">
          <Logo className="h-10 w-10 text-sm" />
        </a>
        <div className="pointer-events-none absolute inset-0 hidden lg:block">
          <div className="mx-auto flex h-full max-w-5xl items-center px-6">
            <ul className="pointer-events-auto flex gap-5 font-mono text-sm whitespace-nowrap text-foreground-muted">
              {sections.map((s, i) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    className="group relative py-1 transition-colors hover:text-accent"
                  >
                    <span className="mr-1 text-accent">
                      {String(i + 1).padStart(2, "0")}.
                    </span>
                    {s.label}
                    <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="ml-auto flex items-center gap-3">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="hidden rounded border border-accent px-4 py-2 font-mono text-sm text-accent transition-colors hover:bg-accent-soft lg:inline-block"
          >
            Resume
          </a>
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            className="flex h-9 w-9 cursor-pointer flex-col items-center justify-center gap-1.5 lg:hidden"
          >
            <span
              className={`h-px w-5 bg-accent transition-transform duration-300 ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
            />
            <span
              className={`h-px w-5 bg-accent transition-transform duration-300 ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </nav>
      <div
        className={`overflow-hidden transition-all duration-300 ease-out lg:hidden ${
          open ? "max-h-64 border-t border-foreground-muted/10" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-6 py-4 font-mono text-sm text-foreground-muted">
          {sections.map((s, i) => (
            <li key={s.href}>
              <a
                href={s.href}
                onClick={() => setOpen(false)}
                className="block py-2 transition-colors hover:text-accent"
              >
                <span className="mr-1 text-accent">
                  {String(i + 1).padStart(2, "0")}.
                </span>
                {s.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          onClick={() => setOpen(false)}
          className="mx-6 mb-4 block rounded border border-accent px-4 py-2 text-center text-accent transition-colors hover:bg-accent-soft"
        >
          Resume
        </a>
      </div>
    </header>
  );
}
