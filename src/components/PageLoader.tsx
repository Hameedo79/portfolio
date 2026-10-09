"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";

const HOLD_MS = 300;
const FADE_MS = 500;

export function PageLoader() {
  const [covered, setCovered] = useState(true);
  const [visible, setVisible] = useState(true);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const revealDelay = reduceMotion ? 0 : HOLD_MS;
    const fadeDelay = revealDelay + (reduceMotion ? 150 : HOLD_MS);

    document.body.classList.add("overflow-hidden");
    const raf = requestAnimationFrame(() => setCovered(false));
    const fadeTimer = setTimeout(() => setVisible(false), fadeDelay);
    const removeTimer = setTimeout(
      () => {
        setRemoved(true);
        document.body.classList.remove("overflow-hidden");
      },
      fadeDelay + (reduceMotion ? 150 : FADE_MS),
    );

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  if (removed) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[200] flex items-center justify-center bg-background transition-opacity duration-500 ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <div className="relative h-24 w-24 overflow-hidden rounded-full sm:h-28 sm:w-28">
        <Logo className="h-full w-full text-xl sm:text-2xl" />
        <span
          className={`absolute inset-0 origin-right bg-background transition-transform duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] ${
            covered ? "scale-x-100" : "scale-x-0"
          }`}
        />
      </div>
    </div>
  );
}
