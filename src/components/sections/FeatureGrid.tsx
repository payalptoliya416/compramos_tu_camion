import type { FeatureItem } from '@/types';
import SectionHeading from '@/components/ui/SectionHeading';

interface Props {
  badge?: string;
  title: string;
  subtitle?: string;
  items: FeatureItem[];
  /** columns on desktop */
  cols?: 2 | 3 | 4;
  /** card = white bordered cards, surface = grey cards, plain = icon + text with orange underline */
  variant?: 'card' | 'surface' | 'plain';
  /** grey background band behind the whole section */
  band?: boolean;
  className?: string;
  iconBg?: string;
  staggered?: boolean;
  noIconBorder?: boolean;
}

const COLS = {
  2: 'md:grid-cols-2',
  3: 'sm:grid-cols-2 lg:grid-cols-3',
  4: 'sm:grid-cols-2 lg:grid-cols-4',
} as const;

export default function FeatureGrid({
  badge, title, subtitle, items, cols = 3, variant = 'card', band, className = '', iconBg, staggered = false, noIconBorder = false,
}: Props) {
  const isStaggered = staggered;
  const inner = (
    <section className={`section-y ${className}`}>
      <div className="container-x">
        <SectionHeading badge={badge} title={title} subtitle={subtitle} />
        <div className={`mt-10 grid ${isStaggered ? 'items-start' : 'items-stretch'} gap-4 sm:gap-5 ${COLS[cols]}`}>
          {items.map(({ icon: Icon, title: t, text }, i) => (
            <article
              key={t}
              className={`${
                variant === 'plain'
                  ? 'flex flex-col gap-5 p-2'
                  : variant === 'surface'
                    ? 'flex flex-col h-full gap-3 rounded-[12px] bg-surface py-5 sm:py-[35px] px-5 sm:px-[25px]'
                    : 'flex flex-col h-full gap-3 rounded-[12px] border border-[#E7E7E8] bg-white pt-5 !pb-2 sm:pt-[35px] px-5 sm:px-[25px]'
              } ${isStaggered && i % 2 === 1 ? 'sm:mt-10 lg:mt-12' : ''}`}
            >
              <span className={`flex h-[54px] w-[54px] items-center justify-center rounded-[12px] ${noIconBorder ? '' : 'border-2 border-[#E7E7E8]'} ${iconBg || (variant === 'surface' ? 'bg-white' : 'bg-[#F3F3F3]')} text-brand-orange`}>
                {typeof Icon === 'string' ? (
                  <img src={Icon} alt="" className="w-5 h-5" />
                ) : (
                  <Icon className="h-5 w-5" />
                )}
              </span>
              <h3 className="text-base font-medium text-brand-navy-dark sm:text-xl">{t}</h3>
              <p className="text-sm leading-relaxed text-[#3B3F45] sm:text-base">{text}</p>
              {variant === 'plain' && <span className="mt-1 h-0.5 w-[32px] bg-brand-orange" />}
            </article>
          ))}
        </div>
      </div>
    </section>
  );

  return band ? <div className="mx-2 rounded-3xl bg-surface sm:mx-3">{inner}</div> : inner;
}
