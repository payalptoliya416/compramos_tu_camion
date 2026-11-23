import { Link } from 'react-router-dom';
import type { CtaLink } from '@/types';
import Img from '@/components/ui/Img';
import { Badge } from '@/components/ui/SectionHeading';
import CtaButton from '@/components/ui/CtaButton';
import { CheckInline } from '@/components/ui/CheckItem';

interface Props {
  badge: string;
  title: string;
  text: string;
  image: string;
  primary: CtaLink;
  secondary?: CtaLink;
  checks?: string[];
  /** Breadcrumb trail shown under the hero (truck-type pages). */
  breadcrumb?: { label: string; to?: string }[];
}

/** Full-width edge-to-edge hero used across all pages */
export default function Hero({ badge, title, text, image, primary, secondary, checks = [], breadcrumb }: Props) {
  return (
    <section className="relative w-full overflow-hidden bg-brand-navy-dark">
      <Img
        src={image}
        className="!absolute inset-0 h-full w-full"
        imgClassName="object-cover object-[70%_center]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy-dark/95 via-brand-navy-dark/75 to-brand-navy-dark/30 max-md:from-brand-navy-dark/95 max-md:via-brand-navy-dark/85 max-md:to-brand-navy-dark/70" />

      <div className="container-x relative flex min-h-[480px] flex-col justify-center pb-20 pt-36 sm:min-h-[540px] sm:pt-40 lg:min-h-[600px] lg:pt-44">
        <div className="max-w-xl">
          <Badge light>{badge}</Badge>
          <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-[44px] lg:leading-[1.15]">
            {title}
          </h1>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/80 sm:text-base sm:leading-relaxed">
            {text}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <CtaButton cta={primary} />
            {secondary && <CtaButton cta={secondary} variant="outline" />}
          </div>
          {checks.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
              {checks.map((c) => (
                <CheckInline key={c}>{c}</CheckInline>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Trapezoid bottom notch cut-out */}
      <div
        aria-hidden
        className="absolute bottom-0 left-1/2 h-6 w-56 -translate-x-1/2 bg-white [clip-path:polygon(0_100%,8%_0,92%_0,100%_100%)] sm:h-8 sm:w-64"
      />

      {breadcrumb && (
        <div className="container-x absolute bottom-3 left-0 right-0 z-10">
          <nav aria-label="Breadcrumb" className="inline-flex flex-wrap items-center gap-2 rounded-lg bg-black/40 px-3 py-1.5 text-xs text-white/80 backdrop-blur-sm">
            {breadcrumb.map((b, i) => (
              <span key={b.label} className="flex items-center gap-2">
                {i > 0 && <span aria-hidden className="text-white/40">›</span>}
                {b.to ? (
                  <Link to={b.to} className="hover:text-brand-orange">{b.label}</Link>
                ) : (
                  <span className="text-brand-orange font-medium">{b.label}</span>
                )}
              </span>
            ))}
          </nav>
        </div>
      )}
    </section>
  );
}
