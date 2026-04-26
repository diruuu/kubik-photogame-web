import { cn } from '../lib/cn'

export function BrandMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn('h-7 w-7', className)}
      aria-hidden="true"
    >
      <rect width="32" height="32" rx="6" className="fill-foreground" />
      <g className="fill-background">
        <circle cx="10" cy="10" r="2" />
        <circle cx="22" cy="10" r="2" />
        <circle cx="16" cy="16" r="2" />
        <circle cx="10" cy="22" r="2" />
        <circle cx="22" cy="22" r="2" />
      </g>
    </svg>
  )
}
