import { LoaderCircle } from 'lucide-react';

export default function Loading() {
  return (
    <div
      role="status"
      className="flex flex-1 items-center justify-center py-16 text-muted-foreground"
    >
      <LoaderCircle aria-hidden="true" className="size-6 animate-spin" />
      <span className="sr-only">Loading…</span>
    </div>
  );
}
