type LogoProps = {
  className?: string;
};

/** Circular "AHB" monogram, shared between the nav header and the full-screen loader. */
export function Logo({ className = "" }: LogoProps) {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-full border-2 border-accent font-mono font-semibold tracking-wide text-accent transition-transform duration-300 hover:rotate-12 ${className}`}
    >
      AHB
    </span>
  );
}
