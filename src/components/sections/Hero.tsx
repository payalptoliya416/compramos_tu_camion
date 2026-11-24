import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import type { CtaLink } from '@/types';
import Img from '@/components/ui/Img';
import CtaButton from '@/components/ui/CtaButton';

interface Props {
  badge: string;
  title: ReactNode;
  text: string;
  image: string;
  primary: CtaLink;
  secondary?: CtaLink;
  checks?: string[];
  /** Breadcrumb trail shown under the hero (truck-type pages). */
  breadcrumb?: { label: string; to?: string }[];
}

/**
 * Hero Banner:
 * - Outside container (spans screen width with matching rounded card margin)
 * - 910px height on desktop
 * - Trapezoid bottom notch
 */
export default function Hero({ badge, title, text, image, primary, secondary, checks = [], breadcrumb }: Props) {
  return (
    <section className="relative w-full px-3 sm:px-5 pt-3 sm:pt-5">
      <div className="relative h-[calc(100dvh-1.5rem)] min-h-[640px] w-full overflow-hidden rounded-[20px] sm:h-[calc(100dvh-2rem)]">
        {/* Background Image */}
        <Img
          src={image}
          className="!absolute inset-0 h-full w-full"
          imgClassName="object-cover object-[75%_center] sm:object-center"
        />

        {/* Responsive dark overlay for mobile/tablet text readability */}
        <div
          className="absolute inset-0 z-[1] bg-black/60 sm:bg-black/40 lg:hidden"
          aria-hidden
        />

        {/* Content - Vertically centered inside full 100vh banner */}
        <div className="relative z-10 flex h-full flex-col justify-center items-center sm:items-start text-center sm:text-left px-6 pb-16 pt-24 sm:px-12 sm:pt-28 lg:px-20 xl:px-[160px]">
          <div className="max-w-2xl flex flex-col items-center sm:items-start text-center sm:text-left">
            {/* Pill Badge */}
            <div
              style={{ backgroundImage: `url('/images/label-bg.png')`, backgroundSize: '100% 100%' }}
              className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-2 text-xs sm:text-sm leading-[14px] font-medium uppercase tracking-wider text-brand-orange bg-no-repeat bg-center"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
              <span>{badge}</span>
              <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
            </div>

            {/* Title */}
            <h1 className="mt-[15px] text-4xl font-medium leading-[1.12] tracking-tight text-white sm:text-5xl text-center sm:text-left">
              {title}
            </h1>

            {/* Subtitle */}
            <p className="mt-5 text-base md:text-lg leading-relaxed text-white sm:leading-relaxed text-center sm:text-left">
              {text}
            </p>

            {/* Actions */}
            <div className="mt-5 md:mt-[35px] flex flex-wrap items-center justify-center sm:justify-start gap-5">
              <CtaButton cta={primary} className="!px-[30px] !py-3 md:!py-4  text-sm md:text-base md:leading-[18px] font-medium border border-brand-orange" />
              {secondary && (
                <CtaButton
                  cta={secondary}
                  variant="outline"
                  className="!border-white !text-white hover:!bg-white/15 !px-[30px] !py-3 md:!py-4 text-sm md:text-base md:leading-[18px] font-medium"
                />
              )}
            </div>

            {/* Checkpoints */}
            {checks.length > 0 && (
              <div className="mt-5 flex flex-wrap justify-center sm:justify-start gap-x-[15px] gap-y-3">
                {checks.map((c) => (
                  <span key={c} className="inline-flex items-center gap-2 text-xs font-medium text-white/90 sm:text-sm">
                    <img src="/images/rounded-checkmark.svg" alt="" className="h-[18px] w-[18px] shrink-0" />
                    {c}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Breadcrumb if provided */}
        {breadcrumb && (
          <div className="absolute bottom-4 left-6 z-10 sm:left-12 lg:left-20">
            <nav
              aria-label="Breadcrumb"
              className="inline-flex flex-wrap items-center gap-2 rounded-lg bg-black/40 px-3 py-1.5 text-xs text-white/80 backdrop-blur-sm"
            >
              {breadcrumb.map((b, i) => (
                <span key={b.label} className="flex items-center gap-2">
                  {i > 0 && <span aria-hidden className="text-white/40">›</span>}
                  {b.to ? (
                    <Link to={b.to} className="hover:text-brand-orange">
                      {b.label}
                    </Link>
                  ) : (
                    <span className="font-medium text-brand-orange">{b.label}</span>
                  )}
                </span>
              ))}
            </nav>
          </div>
        )}
      </div>
    </section>
  );
}
