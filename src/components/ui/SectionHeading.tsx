interface Props {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
  light?: boolean;
  className?: string;
  as?: 'h1' | 'h2';
}

export function Badge({ children, light, bgImage }: { children: string; light?: boolean; bgImage?: string }) {
  if (light) {
    return (
      <span
        style={{ backgroundImage: `url('${bgImage || '/images/label-white-bg.png'}')`, backgroundSize: '100% 100%' }}
        className="inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-xs sm:text-sm leading-[14px] font-medium uppercase tracking-wider text-brand-orange bg-no-repeat bg-center"
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
    <div className={`flex flex-col gap-3 sm:gap-[15px] ${alignCls} ${className}`}>
      {badge && <Badge light={light}>{badge}</Badge>}
      <Tag
        className={`text-2xl font-medium leading-tight sm:text-[34px] xl:text-[38px] sm:leading-[38px] ${
          light ? 'text-white' : 'text-brand-navy'
        }`}
      >
        {title}
      </Tag>
      {subtitle && (
        <p className={` max-w-4xl text-base leading-relaxed ${light ? 'text-white/80' : 'text-[#3B3F45]'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
