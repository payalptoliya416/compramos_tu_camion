import { CheckCircle2 } from 'lucide-react';

/** Small inline check + label, used under hero / CTA banners. */
export function CheckInline({ children, icon }: { children: string; icon?: string }) {
  const iconSrc = icon || (
    children.toLowerCase().includes('personalis') || children.toLowerCase().includes('personaliz')
      ? '/images/personalise.svg'
      : children.toLowerCase().includes('nationwide') || children.toLowerCase().includes('enquir')
        ? '/images/location-orange.svg'
        : '/images/rounded-checkmark.svg'
  );

  return (
    <span className="inline-flex items-center gap-2 text-sm text-white sm:text-base">
      <img src={iconSrc} alt="" className="h-[18px] w-[18px] shrink-0" />
      {children}
    </span>
  );
}

/** Pill with orange dot, used in split sections. */
export function CheckPill({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-xs text-slate-600">
      <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-orange" />
      {children}
    </span>
  );
}
