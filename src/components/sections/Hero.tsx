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
  isHome?: boolean;
}

/**
 * Hero Banner:
 * - Outside container (spans screen width with matching rounded card margin)
 * - 910px height on desktop
 * - Trapezoid bottom notch
 */
export default function Hero({ badge, title, text, image, primary, secondary, checks = [], breadcrumb, isHome = false }: Props) {
  return (
    <section className="relative w-full px-2.5 sm:px-5 pt-2.5 sm:pt-5">
      <div className="relative min-h-[calc(100dvh-1.5rem)] h-auto sm:h-[calc(100dvh-2rem)] sm:min-h-[640px] sm:max-h-[910px] w-full overflow-hidden rounded-[20px]">
        {/* Background Image */}
        <Img
          src={image}
          className="!absolute inset-0 h-full w-full"
          imgClassName="object-cover object-[75%_bottom] sm:object-bottom"
        />

        {/* Responsive dark overlay for mobile/tablet text readability */}
      <div
  className="absolute inset-0 z-[1] bg-[linear-gradient(to_bottom,rgba(0,0,0,0.5)_0%,rgba(0,0,0,0.3)_85%,rgba(255,255,255,0.08)_100%)] sm:hidden"
  aria-hidden
/>
        {/* Content - Vertically centered inside full 100vh banner on desktop, start-aligned with header clearance on mobile */}
        <div className="relative z-10 flex h-full flex-col justify-start sm:justify-center items-center sm:items-start text-center sm:text-left px-4 xs:px-6 pb-12 pt-[105px] sm:px-12 sm:pb-16 sm:pt-28 lg:px-20 xl:px-[160px]">
          <div className="max-w-2xl flex flex-col items-center sm:items-start text-center sm:text-left justify-center sm:justify-normal">
            {/* Pill Badge */}
            <div
              style={{ backgroundImage: `url('/images/label-bg.png')`, backgroundSize: '100% 100%' }}
              className="inline-flex items-center justify-center gap-2 rounded-full px-4 sm:px-5 py-1.5 sm:py-2 text-xs font-medium uppercase tracking-wider text-brand-orange bg-no-repeat bg-center"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
              <span>{badge}</span>
              <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
            </div>

            {/* Title */}
            <h1
              className={`mt-3 sm:mt-[15px] text-[28px] xs:text-4xl sm:text-5xl font-medium leading-[1.18] sm:leading-[56px] tracking-tight text-center sm:text-left ${
                isHome ? 'text-white' : ''
              }`}
              style={
                isHome
                  ? undefined
                  : {
                      background: 'radial-gradient(136.36% 136.36% at 50% 30%, #FFFFFF 0%, #737373 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }
              }
            >
              {title}
            </h1>

            {/* Subtitle */}
            <p className="mt-3.5 sm:mt-5 text-sm sm:text-base md:text-lg leading-relaxed text-white sm:leading-relaxed text-center sm:text-left font-light">
              {text}
            </p>

            {/* Actions */}
            <div className="mt-5 md:mt-[35px] flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-5">
              <CtaButton cta={primary} className="px-4 lg:!px-[30px] !py-3 md:!py-[14px] text-sm md:text-[15px] md:leading-[16px] font-medium border border-brand-orange" />
              {secondary && (
                <CtaButton
                  cta={secondary}
                  variant="outline"
                  className="!border-white !text-white hover:!bg-white/15 px-4 lg:!px-[30px] !py-3 md:!py-4 text-sm md:text-[15px] md:leading-[16px] font-medium"
                />
              )}
            </div>

            {/* Checkpoints */}
            {checks.length > 0 && (
              <div className="mt-4 sm:mt-5 flex flex-wrap justify-center sm:justify-start gap-x-3 sm:gap-x-[15px] gap-y-2 sm:gap-y-3">
                {checks.map((c) => (
                  <span key={c} className="inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-base text-white">
                    <img src="/images/rounded-checkmark.svg" alt="" className="h-[16px] w-[16px] sm:h-[18px] sm:w-[18px] shrink-0" />
                    {c}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Breadcrumb if provided - placed below the hero section */}
      {breadcrumb && (
        <div className="mt-3 sm:mt-[15px]">
          <nav
            aria-label="Breadcrumb"
            className="inline-flex flex-wrap items-center gap-1 sm:gap-2.5 rounded-[10px] bg-[#F3F3F3] px-2 sm:px-5 py-2 sm:py-[15px] text-xs sm:text-sm lg:text-base lg:leading-[16px] text-[#3B3F45]"
          >
            {breadcrumb.map((b, i) => (
              <span key={b.label} className="inline-flex items-center gap-1 sm:gap-2.5">
                {i > 0 && <span aria-hidden><img src="/images/gray-grater-errow.svg" alt="" className='w-full max-w-[10px] sm:max-w-[100%]' /></span>}
                {b.to ? (
                  <Link to={b.to} className="transition-colors hover:text-brand-orange">
                    {b.label}
                  </Link>
                ) : (
                  <span className="text-brand-orange">
                    {b.label}
                  </span>
                )}
              </span>
            ))}
          </nav>
        </div>
      )}
    </section>
  );
}
