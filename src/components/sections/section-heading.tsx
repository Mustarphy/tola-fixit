import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn('max-w-2xl', className)}>
      <p className="text-sm font-semibold tracking-wider text-primary uppercase">
        {eyebrow}
      </p>
      <h2 id={id} className="mt-3">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-muted-foreground">{description}</p>
      )}
    </div>
  );
}
