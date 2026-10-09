import { profile } from "@/data/content";

// Computed once at build time, not per-request, to avoid Next.js's prerender "unstable value" check.
const year = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="py-8 text-center font-mono text-xs text-foreground-muted">
      © {year} {profile.name}.
    </footer>
  );
}
