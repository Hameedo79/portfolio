import { profile } from "@/data/content";

/** Fixed, rotated email link pinned to the right edge on larger screens, mirroring v4.brittanychiang.com. */
export function SideEmail() {
  return (
    <div className="pointer-events-none fixed inset-y-0 right-0 z-40 hidden w-16 flex-col items-center justify-end pb-10 lg:flex">
      <a
        href={`mailto:${profile.email}`}
        className="pointer-events-auto mb-6 font-mono text-sm tracking-wide text-foreground-muted transition-all [writing-mode:vertical-rl] hover:-translate-y-1 hover:text-accent"
      >
        {profile.email}
      </a>
      <span className="h-24 w-px bg-foreground-muted/30" aria-hidden />
    </div>
  );
}
