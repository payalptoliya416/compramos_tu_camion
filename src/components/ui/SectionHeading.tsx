interface Props {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
  light?: boolean;
  className?: string;
  as?: 'h1' | 'h2';
}

export function Badge({ children, light }: { children: string; light?: boolean }) {
  if (light) {
    return (
      <span
        style={{ backgroundImage: `url('/images/label-bg.png')`, backgroundSize: '100% 100%' }}
        className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-brand-orange bg-no-repeat bg-center"
      >
        <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
        <span>{children}</span>
        <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
      </span>
    );
  }
  return (
    <span className="badge">
      <span aria-hidden>•</span>
      {children}
      <span aria-hidden>•</span>
    </span>
  );
}

export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = 'center',
  light,
  className = '',
  as: Tag = 'h2',
}: Props) {
  const alignCls = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left';
  return (
    <div className={`flex max-w-2xl flex-col gap-3 ${alignCls} ${className}`}>
      {badge && <Badge light={light}>{badge}</Badge>}
      <Tag
        className={`text-2xl font-medium leading-tight sm:text-3xl ${
          light ? 'text-white' : 'text-brand-navy'
        }`}
      >
        {title}
      </Tag>
      {subtitle && (
        <p className={`text-sm leading-relaxed ${light ? 'text-white/80' : 'text-slate-500'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
