"use client";

import { useState } from "react";
import { profile } from "@/data/content";

const links = [
  { href: profile.github, label: "GitHub" },
  { href: profile.linkedin, label: "LinkedIn" },
  { href: profile.whatsapp, label: "WhatsApp" },
  { href: profile.instagram, label: "Instagram" },
  { href: profile.tiktok, label: "TikTok" },
];

const icons: Record<string, React.ReactNode> = {
  GitHub: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M12 .5C5.7.5.7 5.6.7 12c0 5.1 3.3 9.4 7.9 11 .6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.2.4-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.6 7.9-5.9 7.9-11C23.3 5.6 18.3.5 12 .5Z" />
    </svg>
  ),
  LinkedIn: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M20.4 20.4h-3.5v-5.6c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9v5.7H9.3V9h3.4v1.6h.1c.5-.9 1.6-1.9 3.4-1.9 3.6 0 4.2 2.4 4.2 5.5v6.2ZM5.3 7.4a2 2 0 1 1 0-4 2 2 0 0 1 0 4ZM7.1 20.4H3.6V9h3.5v11.4Z" />
    </svg>
  ),
  WhatsApp: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M17.5 14.4c-.3-.1-1.7-.8-2-1-.3-.1-.5-.1-.6.1-.2.3-.7 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.6-2.1-.2-.3 0-.5.1-.6l.4-.5c.1-.1.2-.3.2-.4.1-.2 0-.3 0-.4C10 9 9.5 7.7 9.3 7.2c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.1s1 2.5 1.1 2.6c.1.2 1.9 2.9 4.6 4 .6.3 1.1.4 1.5.6.6.2 1.2.2 1.6.1.5-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.1-.3-.2-.5-.3ZM12 2.2A9.8 9.8 0 0 0 3.6 17l-1.4 4.8 5-1.3A9.8 9.8 0 1 0 12 2.2Zm0 17.7c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3 .8.8-2.9-.2-.3a8 8 0 1 1 7.1 3.8Z" />
    </svg>
  ),
  Instagram: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 2 .3 2.4.5.6.2 1 .5 1.5 1 .4.4.7.8 1 1.5.2.5.4 1.2.5 2.4.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 2-.5 2.4-.2.6-.5 1-1 1.5-.4.4-.8.7-1.5 1-.5.2-1.2.4-2.4.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-2-.3-2.4-.5-.6-.2-1-.5-1.5-1-.4-.4-.7-.8-1-1.5-.2-.5-.4-1.2-.5-2.4C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-2 .5-2.4.2-.6.5-1 1-1.5.4-.4.8-.7 1.5-1 .5-.2 1.2-.4 2.4-.5C8.4 2.2 8.8 2.2 12 2.2Zm0 1.8c-3.1 0-3.5 0-4.7.1-1 .1-1.6.2-2 .4-.5.2-.8.4-1.2.8-.4.4-.6.7-.8 1.2-.1.4-.3 1-.4 2C3 9.5 3 9.9 3 13s0 3.5.1 4.7c.1 1 .2 1.6.4 2 .2.5.4.8.8 1.2.4.4.7.6 1.2.8.4.1 1 .3 2 .4 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1-.1 1.6-.2 2-.4.5-.2.8-.4 1.2-.8.4-.4.6-.7.8-1.2.1-.4.3-1 .4-2 .1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c-.1-1-.2-1.6-.4-2-.2-.5-.4-.8-.8-1.2a3.3 3.3 0 0 0-1.2-.8c-.4-.1-1-.3-2-.4-1.2-.1-1.6-.1-4.7-.1Zm0 3.9a5.1 5.1 0 1 1 0 10.2 5.1 5.1 0 0 1 0-10.2Zm0 1.8a3.3 3.3 0 1 0 0 6.6 3.3 3.3 0 0 0 0-6.6Zm5.3-2.1a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4Z" />
    </svg>
  ),
  TikTok: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M16.6 2h-3.3v13.3a3 3 0 1 1-2.1-2.9v-3.3a6.3 6.3 0 1 0 5.4 6.2V8.6a8 8 0 0 0 4.6 1.5V6.8a4.8 4.8 0 0 1-4.6-4.3V2Z" />
    </svg>
  ),
};

/** Fixed, always-visible social links pinned to the left edge on larger screens, mirroring v4.brittanychiang.com. */
export function SideSocials() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="pointer-events-none fixed inset-y-0 left-0 z-40 hidden w-16 flex-col items-center justify-end pb-10 lg:flex">
        <ul className="pointer-events-auto flex flex-col items-center gap-5 text-foreground-muted">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={link.label}
                className="block transition-all hover:-translate-y-1 hover:text-accent"
              >
                {icons[link.label]}
              </a>
            </li>
          ))}
        </ul>
        <span className="mt-6 h-24 w-px bg-foreground-muted/30" aria-hidden />
      </div>

      <div className="fixed bottom-6 left-6 z-40 flex flex-col items-center gap-3 lg:hidden">
        <ul
          className={`flex flex-col items-center gap-3 transition-all duration-300 ${
            open
              ? "translate-y-0 opacity-100"
              : "pointer-events-none translate-y-4 opacity-0"
          }`}
        >
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={link.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-foreground-muted/20 bg-background text-foreground-muted shadow-lg transition-colors hover:text-accent"
              >
                {icons[link.label]}
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Hide social links" : "Show social links"}
          aria-expanded={open}
          className={`flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-accent bg-background text-accent shadow-lg transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="h-5 w-5"
          >
            <path d="M12 5v14M5 12h14" />
          </svg>
        </button>
      </div>
    </>
  );
}
