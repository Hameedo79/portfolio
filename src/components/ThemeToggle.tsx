"use client";

import { useSyncExternalStore } from "react";

type Theme = "light" | "dark";

function getSnapshot(): Theme {
  return document.documentElement.getAttribute("data-theme") === "light"
    ? "light"
    : "dark";
}

function getServerSnapshot(): Theme {
  return "dark";
}

function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributeFilter: ["data-theme"],
  });
  return () => observer.disconnect();
}

function applyTheme(theme: Theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  function toggle() {
    applyTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle light and dark theme"
      className="flex h-8 w-8 cursor-pointer items-center justify-center rounded text-foreground-muted transition-colors hover:text-accent"
    >
      {theme === "light" ? (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-4.5 w-4.5">
          <path d="M12 3a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1Zm0 5a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm9 4a1 1 0 0 1-1 1h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1ZM5 12a1 1 0 0 1-1 1H3a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1Zm13.4 6.4a1 1 0 0 1-1.4 0l-.7-.7a1 1 0 1 1 1.4-1.4l.7.7a1 1 0 0 1 0 1.4ZM7.7 7.7a1 1 0 0 1-1.4 0l-.7-.7a1 1 0 0 1 1.4-1.4l.7.7a1 1 0 0 1 0 1.4Zm10.6-1.4a1 1 0 0 1 0 1.4l-.7.7a1 1 0 1 1-1.4-1.4l.7-.7a1 1 0 0 1 1.4 0ZM7 17.3a1 1 0 0 1 0 1.4l-.7.7a1 1 0 0 1-1.4-1.4l.7-.7a1 1 0 0 1 1.4 0ZM12 19a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1Z" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-4.5 w-4.5">
          <path d="M20.7 14.9A8.5 8.5 0 0 1 9.1 3.3a1 1 0 0 0-1.2-1.3A10.5 10.5 0 1 0 22 16.1a1 1 0 0 0-1.3-1.2Z" />
        </svg>
      )}
    </button>
  );
}
