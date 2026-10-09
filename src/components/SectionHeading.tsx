export function SectionHeading({
  index,
  title,
}: {
  index: string;
  title: string;
}) {
  return (
    <div className="mb-10 flex items-center gap-4">
      <h2 className="flex items-baseline gap-3 whitespace-nowrap text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
        <span className="font-mono text-lg text-accent sm:text-xl">
          {index}.
        </span>
        {title}
      </h2>
      <span className="h-px flex-1 bg-foreground-muted/20" aria-hidden />
    </div>
  );
}
