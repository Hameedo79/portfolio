"use client";

export function GoBackButton() {
  return (
    <button
      type="button"
      onClick={() => window.history.back()}
      className="rounded border border-foreground-muted/30 px-6 py-3.5 font-mono text-sm text-foreground-muted transition-colors hover:border-accent hover:text-accent"
    >
      Go back
    </button>
  );
}
