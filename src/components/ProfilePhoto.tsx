"use client";

import { useState } from "react";
import Image from "next/image";

type ProfilePhotoProps = {
  /** Base path without extension, e.g. "/profile" — tries common image formats in order. */
  src: string;
  alt: string;
};

const EXTENSIONS = ["jpg", "jpeg", "png", "webp", "avif"];

/** Circular profile photo that tries common image formats and hides itself if none load. */
export function ProfilePhoto({ src, alt }: ProfilePhotoProps) {
  const [attempt, setAttempt] = useState(0);
  const [loaded, setLoaded] = useState(false);

  if (attempt >= EXTENSIONS.length) return null;

  return (
    <div
      className={`relative h-40 w-40 shrink-0 overflow-hidden rounded-full border-2 border-accent sm:h-56 sm:w-56 ${
        loaded ? "" : "invisible"
      }`}
    >
      <Image
        key={attempt}
        src={`${src}.${EXTENSIONS[attempt]}`}
        alt={alt}
        fill
        sizes="(min-width: 640px) 224px, 160px"
        className="object-cover"
        priority
        onLoad={() => setLoaded(true)}
        onError={() => setAttempt((a) => a + 1)}
      />
    </div>
  );
}
