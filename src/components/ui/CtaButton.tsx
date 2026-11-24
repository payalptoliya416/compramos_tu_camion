import { Link } from 'react-router-dom';
import type { CtaLink } from '@/types';

interface Props {
  cta: CtaLink;
  variant?: 'primary' | 'outline' | 'dark-outline' | 'whatsapp';
  className?: string;
}

const VARIANT = {
  primary: 'btn-primary',
  outline: 'btn-outline',
  'dark-outline': 'btn border border-[#092B55] text-brand-navy bg-transparent hover:bg-brand-navy hover:text-white transition-colors',
  whatsapp: 'btn-whatsapp',
} as const;

/** Router link or external anchor, depending on the cta. */
export default function CtaButton({ cta, variant = 'primary', className = '' }: Props) {
  const cls = `${VARIANT[variant]} ${className}`;
  if (cta.href) {
    return (
      <a href={cta.href} className={cls} target={cta.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
        {cta.label}
      </a>
    );
  }
  return (
    <Link to={cta.to ?? '/get-a-free-valuation'} className={cls}>
      {cta.label}
    </Link>
  );
}
