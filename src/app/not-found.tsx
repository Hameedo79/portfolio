import Link from "next/link";
import { GoBackButton } from "@/components/GoBackButton";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[90vh] max-w-5xl flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-accent">404</p>
      <h1 className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
        Page not found
      </h1>
      <p className="mt-6 max-w-md text-foreground-muted">
        The page you&apos;re looking for doesn&apos;t exist or may have been
        moved.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-4 font-mono text-sm">
        <Link
          href="/"
          className="rounded border border-accent px-6 py-3.5 text-accent transition-colors hover:bg-accent-soft"
        >
          Go to homepage
        </Link>
        <GoBackButton />
      </div>
    </main>
  );
}
