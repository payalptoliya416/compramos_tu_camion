

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

/** Pill with orange checkmark, used in split sections. */
export function CheckPill({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center gap-2.5 rounded-full bg-[#F3F3F3] px-5 py-3 text-sm sm:text-base text-[#3B3F45]">
      <img src="/images/fill-checkmark.svg" alt="" className="h-5 w-5 shrink-0" />
      <span>{children}</span>
    </span>
  );
}
