/** Renders `text`, wrapping the first occurrence of `hl` in the brand highlight. */
export default function Hl({ text, hl }: { text: string; hl?: string }) {
  const i = hl ? text.indexOf(hl) : -1;
  if (!hl || i < 0) return <>{text}</>;
  return (
    <>
      {text.slice(0, i)}
      <span className="acs-hl">{hl}</span>
      {text.slice(i + hl.length)}
    </>
  );
}
