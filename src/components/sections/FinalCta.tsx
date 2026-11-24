import { Badge } from '@/components/ui/SectionHeading';
import CtaButton from '@/components/ui/CtaButton';
import { CheckInline } from '@/components/ui/CheckItem';
import { SITE } from '@/data/site';

/** "Ready to Sell Your Truck?" card that overlaps the top of the footer. */
export default function FinalCta() {
  return (
    <section className="relative z-10 -mb-20 sm:-mb-48">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[24px] bg-brand-navy px-6 py-10 text-center sm:py-[60px]">
          <img
            src="/images/cta-bg.png"
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-center"
            aria-hidden
          />
          <div className="relative z-10 flex flex-col items-center gap-[15px]">
            <Badge light>Get started today</Badge>
            <h2 className="text-2xl font-medium leading-tight text-white sm:text-[40px] sm:leading-[40px]">Ready to Sell Your Truck?</h2>
            <p className="max-w-3xl text-base leading-relaxed text-[#E7E7E8]">
              Tell us about your vehicle and request a free valuation. Our team is ready to assist you.
            </p>
            <div className="mt-[5px] flex flex-wrap justify-center gap-5">
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
