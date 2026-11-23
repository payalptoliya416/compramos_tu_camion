import { Badge } from '@/components/ui/SectionHeading';
import CtaButton from '@/components/ui/CtaButton';
import { CheckInline } from '@/components/ui/CheckItem';
import { SITE } from '@/data/site';

/** "Ready to Sell Your Truck?" card that overlaps the top of the footer. */
export default function FinalCta() {
  return (
    <section className="relative z-10 -mb-20 mt-8 sm:-mb-24">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl bg-brand-navy px-6 py-10 text-center shadow-xl sm:py-12">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.1),transparent_65%)]" aria-hidden />
          <div className="relative flex flex-col items-center gap-3">
            <Badge light>Get started today</Badge>
            <h2 className="text-2xl font-medium text-white sm:text-3xl">Ready to Sell Your Truck?</h2>
            <p className="max-w-xl text-sm text-white/80">
              Tell us about your vehicle and request a free valuation. Our team is ready to assist you.
            </p>
            <div className="mt-2 flex flex-wrap justify-center gap-3">
              <CtaButton cta={{ label: 'Chat on WhatsApp', href: SITE.whatsappHref }} variant="whatsapp" />
              <CtaButton cta={{ label: 'Call Us Today', href: SITE.phoneHref }} />
            </div>
            <div className="mt-1 flex flex-wrap justify-center gap-x-5 gap-y-2">
              {['Professional Valuation', 'Clear Process', 'Collection Across Spain'].map((c) => (
                <CheckInline key={c}>{c}</CheckInline>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
