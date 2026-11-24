import type { CtaLink, StepItem } from '@/types';
import SectionHeading from '@/components/ui/SectionHeading';
import CtaButton from '@/components/ui/CtaButton';

interface Props {
  badge?: string;
  title: string;
  subtitle?: string;
  steps: StepItem[];
  /** optional button aligned to the right of the heading (left-aligned heading then) */
  action?: CtaLink;
  className?: string;
}

/** Horizontal icon steps joined by a thin orange line (stacks on mobile). */
export default function Steps({ badge, title, subtitle, steps, action, className = '' }: Props) {
  const isThree = steps.length === 3;
  const colCls = isThree ? 'md:grid-cols-3' : 'sm:grid-cols-2 lg:grid-cols-4';
  const lineDisplayCls = isThree ? 'hidden md:block' : 'hidden lg:block';
  return (
    <section className={`section-y ${className}`}>
      <div className="container-x">
        {action ? (
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between flex-wrap">
            <SectionHeading badge={badge} title={title} subtitle={subtitle} align="left" />
            <CtaButton cta={action} />
          </div>
        ) : (
          <SectionHeading badge={badge} title={title} subtitle={subtitle} />
        )}
        <ol className={`relative mt-10 grid gap-8 ${colCls}`}>
          {steps.map(({ icon: Icon, title: t, text }, i) => (
            <li key={t} className="relative flex flex-col items-center text-center">
              {i < steps.length - 1 && (
                <div
                  aria-hidden
                  className={`absolute left-[calc(50%+27px)] top-[29px] -translate-y-1/2 ${lineDisplayCls} h-[2px] w-[calc(100%-22px)] overflow-hidden`}
                  style={{
                    background:
                      'linear-gradient(90deg, #F17612 0%, rgba(241, 118, 18, 0.2) 48%, #E7E7E8 52%, #E7E7E8 100%)',
                  }}
                />
              )}
              <span className="relative z-10 flex h-[58px] w-[58px] items-center justify-center rounded-[12px] border border-[#E7E7E8] bg-[#F8F9FA] text-brand-orange">
                {typeof Icon === 'string' ? (
                  <img src={Icon} alt="" className="h-6 w-6 object-contain" />
                ) : (
                  <Icon className="h-6 w-6" />
                )}
              </span>
              <h3 className="mt-5 sm:mt-[25px] text-lg font-medium text-brand-navy-dark sm:text-xl">{t}</h3>
              <p className="mt-[15px] max-w-[380px] text-sm leading-relaxed text-[#3B3F45] sm:text-base">{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
