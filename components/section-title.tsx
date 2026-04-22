export function SectionTitle({
  badge,
  title,
  description,
}: {
  badge: string;
  title: string;
  description: string;
}) {
  return (
    <div className="section-title-block">
      <div className="eyebrow pill">{badge}</div>
      <h2 className="page-title small-title">{title}</h2>
      <p className="page-copy">{description}</p>
    </div>
  );
}
