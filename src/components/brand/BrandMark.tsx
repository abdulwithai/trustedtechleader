/** TTL monogram brand mark (decorative; pair it with the visible name). */
export default function BrandMark({ className, size = 24 }: { className?: string; size?: number }) {
  return (
    <svg className={className} viewBox="0 0 64 64" width={size} height={size} aria-hidden="true" focusable="false">
      <rect width="64" height="64" rx="14" fill="#6B3BEA" />
      <path fill="#FFFFFF" d="M8 12h40v9H8z" />
      <path fill="#FFFFFF" d="M13 21h9v31h-9z" />
      <path fill="#FFFFFF" d="M33 21h9v31h-9z" />
      <path fill="#8BD46A" d="M33 43h23v9H33z" />
    </svg>
  );
}
