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
  const colCls = steps.length === 3 ? 'md:grid-cols-3' : 'sm:grid-cols-2 lg:grid-cols-4';
  return (
    <section className={`section-y ${className}`}>
      <div className="container-x">
        {action ? (
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
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
                  className="absolute left-[calc(50%+40px)] top-[29px] hidden h-[2px] w-[calc(100%-80px)] lg:flex overflow-hidden rounded-full"
                >
                  <span className="h-full w-1/2 bg-brand-orange" />
                  <span className="h-full w-1/2 bg-[#E7E7E8]" />
                </div>
              )}
              <span className="relative z-10 flex h-[58px] w-[58px] items-center justify-center rounded-[12px] border border-[#E7E7E8] bg-[#F8F9FA] text-brand-orange">
                {typeof Icon === 'string' ? (
                  <img src={Icon} alt="" className="h-6 w-6 object-contain" />
                ) : (
                  <Icon className="h-6 w-6" />
                )}
              </span>
              <h3 className="mt-5 sm:mt-[25px] text-base font-medium text-brand-navy-dark sm:text-xl">{t}</h3>
              <p className="mt-[15px] max-w-[380px] text-xs leading-relaxed text-[#3B3F45] sm:text-base">{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
