import { CheckCircle2 } from 'lucide-react';

/** Small inline check + label, used under hero / CTA banners. */
export function CheckInline({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs text-white/80 sm:text-sm">
      <img src="/images/rounded-checkmark.svg" alt="" className="h-[18px] w-[18px] shrink-0" />
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
