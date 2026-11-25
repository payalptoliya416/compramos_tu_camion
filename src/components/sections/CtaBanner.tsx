import type { CtaLink } from '@/types';
import { Badge } from '@/components/ui/SectionHeading';
import CtaButton from '@/components/ui/CtaButton';
import { CheckInline } from '@/components/ui/CheckItem';
import { SITE } from '@/data/site';

interface Props {
  badge: string;
  title: string;
  text: string;
  primary?: CtaLink;
  /** show the "Call Us Today" outline button */
  showCall?: boolean;
  checks?: string[];
}

const DEFAULT_CHECKS = ['Free Valuation', 'Personalised Service', 'Nationwide Enquiries'];

/** Dark blue "Need help…" banner placed between sections. */
export default function CtaBanner({
  badge, title, text, primary = { label: 'Get a Free Valuation' }, showCall, checks = DEFAULT_CHECKS,
}: Props) {
  return (
    <section className="px-3 sm:px-5">
      <div className="relative overflow-hidden rounded-3xl bg-brand-navy">
        <img
          src="/images/started-bg.png"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
          aria-hidden
        />
        <div className="container-x relative z-10 flex flex-col items-center gap-4 py-12 text-center sm:py-[80px]">
          <Badge light>{badge}</Badge>
          <h2 className="max-w-full text-2xl font-medium leading-tight text-white sm:text-[34px] xl:text-[40px] sm:leading-[40px]">{title}</h2>
          <p className="max-w-3xl text-base leading-relaxed text-[#E7E7E8]">{text}</p>
          <div className="mt-2 flex flex-wrap justify-center gap-3">
            <CtaButton cta={primary} />
            {showCall && (
              <CtaButton cta={{ label: 'Call Us Today', href: SITE.phoneHref }} variant="outline" />
            )}
          </div>
          <div className="mt-1 flex flex-wrap justify-center gap-x-5 gap-y-2">
            {checks.map((c) => <CheckInline key={c}>{c}</CheckInline>)}
          </div>
        </div>
      </div>
    </section>
  );
}
