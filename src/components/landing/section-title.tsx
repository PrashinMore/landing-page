type SectionTitleProps = {
  title: string;
  subtitle: string;
  centered?: boolean;
};

export function SectionTitle({ title, subtitle, centered = true }: SectionTitleProps) {
  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">{title}</h2>
      <p className="mt-3 text-base text-slate-600 md:text-lg">{subtitle}</p>
    </div>
  );
}
