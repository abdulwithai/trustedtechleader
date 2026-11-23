/** Clearly marked placeholder. Swap for a real <Image> once real photos exist. */
export default function PhotoPlaceholder({ label, note, ratio = '4 / 5' }: { label: string; note?: string; ratio?: string }) {
  return (
    <div className="photo-ph" style={{ aspectRatio: ratio }} role="img" aria-label={`Placeholder: ${label}`}>
      <span className="photo-ph__tag">Photo placeholder</span>
      <span className="photo-ph__label">{label}</span>
      {note ? <span className="photo-ph__note">{note}</span> : null}
    </div>
  );
}
