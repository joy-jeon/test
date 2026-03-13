import { cn } from '@/lib/utils';

export const Divider = ({ className }: { className?: string }) => (
  <div className={cn("h-[1px] w-full bg-da-divider-content-line", className)} />
);