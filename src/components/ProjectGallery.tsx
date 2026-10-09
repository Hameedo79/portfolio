"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

type ProjectGalleryProps = {
  images: string[];
  alt: string;
};

export function ProjectGallery({ images, alt }: ProjectGalleryProps) {
  const [index, setIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!lightboxOpen) return;
    document.body.classList.add("overflow-hidden");
    closeButtonRef.current?.focus();
    const trigger = triggerRef.current;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLightboxOpen(false);
        return;
      }
      if (e.key === "ArrowLeft")
        setIndex((i) => (i - 1 + images.length) % images.length);
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % images.length);
      if (e.key === "Tab") {
        const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
          'button, [href], [tabindex]:not([tabindex="-1"])',
        );
        if (!focusable || focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.classList.remove("overflow-hidden");
      window.removeEventListener("keydown", onKeyDown);
      trigger?.focus();
    };
  }, [lightboxOpen, images.length]);

  if (images.length === 0) return null;

  const goTo = (next: number) =>
    setIndex((next + images.length) % images.length);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    const SWIPE_THRESHOLD = 40;
    if (delta > SWIPE_THRESHOLD) goTo(index - 1);
    else if (delta < -SWIPE_THRESHOLD) goTo(index + 1);
    touchStartX.current = null;
  };

  return (
    <>
      <div
        className="group/gallery relative aspect-video w-full overflow-hidden bg-accent-soft"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="flex h-full transition-transform duration-500 ease-in-out motion-reduce:transition-none"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((image, i) => (
            <div key={image} className="relative h-full w-full shrink-0">
              <Image
                src={image}
                alt={`${alt} screenshot ${i + 1} of ${images.length}`}
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-contain"
              />
            </div>
          ))}
        </div>
        <button
          ref={triggerRef}
          type="button"
          aria-label="View larger screenshot"
          onClick={(e) => {
            e.preventDefault();
            setLightboxOpen(true);
          }}
          className="absolute inset-0 cursor-zoom-in"
        />
        {images.length > 1 && (
          <>
            <button
              type="button"
              aria-label="Previous screenshot"
              onClick={(e) => {
                e.preventDefault();
                goTo(index - 1);
              }}
              className="absolute top-1/2 left-2 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-background/70 text-foreground opacity-100 transition-opacity lg:opacity-0 lg:group-hover/gallery:opacity-100 hover:bg-background"
            >
              ‹
            </button>
            <button
              type="button"
              aria-label="Next screenshot"
              onClick={(e) => {
                e.preventDefault();
                goTo(index + 1);
              }}
              className="absolute top-1/2 right-2 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-background/70 text-foreground opacity-100 transition-opacity lg:opacity-0 lg:group-hover/gallery:opacity-100 hover:bg-background"
            >
              ›
            </button>
            <div className="absolute inset-x-0 bottom-2 flex justify-center gap-1.5">
              {images.map((image, i) => (
                <button
                  key={image}
                  type="button"
                  aria-label={`Go to screenshot ${i + 1}`}
                  aria-current={i === index}
                  onClick={(e) => {
                    e.preventDefault();
                    goTo(i);
                  }}
                  className={`h-1.5 w-1.5 cursor-pointer rounded-full transition-colors ${
                    i === index ? "bg-accent" : "bg-background/70"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
      {lightboxOpen &&
        createPortal(
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label={`${alt} screenshots`}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-background/95 p-6 backdrop-blur-sm"
            onClick={() => setLightboxOpen(false)}
          >
            <button
              ref={closeButtonRef}
              type="button"
              aria-label="Close preview"
              onClick={() => setLightboxOpen(false)}
              className="absolute top-6 right-6 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-background-light text-foreground transition-colors hover:text-accent"
            >
              ✕
            </button>
            <div
              className="relative h-full max-h-[85vh] w-full max-w-5xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
            >
              <div
                className="flex h-full transition-transform duration-500 ease-in-out motion-reduce:transition-none"
                style={{ transform: `translateX(-${index * 100}%)` }}
              >
                {images.map((image, i) => (
                  <div key={image} className="relative h-full w-full shrink-0">
                    <Image
                      src={image}
                      alt={`${alt} screenshot ${i + 1} of ${images.length}`}
                      fill
                      sizes="100vw"
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
            {images.length > 1 && (
              <>
                <button
                  type="button"
                  aria-label="Previous screenshot"
                  onClick={(e) => {
                    e.stopPropagation();
                    goTo(index - 1);
                  }}
                  className="absolute top-1/2 left-4 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-background-light text-foreground transition-colors hover:text-accent"
                >
                  ‹
                </button>
                <button
                  type="button"
                  aria-label="Next screenshot"
                  onClick={(e) => {
                    e.stopPropagation();
                    goTo(index + 1);
                  }}
                  className="absolute top-1/2 right-4 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-background-light text-foreground transition-colors hover:text-accent"
                >
                  ›
                </button>
                <p className="absolute bottom-6 font-mono text-xs text-foreground-muted">
                  {index + 1} / {images.length}
                </p>
              </>
            )}
          </div>,
          document.body,
        )}
    </>
  );
}
