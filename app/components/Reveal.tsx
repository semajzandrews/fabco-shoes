// Dumb reveal wrapper — visible by default, motion is additive only.
// Resting state is visible; the .reveal-armed class (added by an inline script
// only when the tab is visible) opts into the entrance animation.
export default function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  as?: React.ElementType;
  className?: string;
}) {
  return (
    <Tag className={`reveal ${className}`} style={{ ["--d" as string]: `${delay}ms` }}>
      {children}
    </Tag>
  );
}
