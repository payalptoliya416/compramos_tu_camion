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
    <section className="mx-2 sm:mx-3">
      <div className="relative overflow-hidden rounded-3xl bg-brand-navy">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.08),transparent_60%)]" aria-hidden />
        <div className="container-x relative flex flex-col items-center gap-4 py-12 text-center sm:py-14">
          <Badge light>{badge}</Badge>
          <h2 className="max-w-2xl text-2xl font-medium leading-tight text-white sm:text-[40px] sm:leading-[40px]">{title}</h2>
          <p className="max-w-xl text-base leading-relaxed text-white/80">{text}</p>
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
