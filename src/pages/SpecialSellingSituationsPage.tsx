import { Link } from 'react-router-dom';
import { IMG } from '@/data/images';
import Hero from '@/components/sections/Hero';
import SplitSection from '@/components/sections/SplitSection';
import CtaBanner from '@/components/sections/CtaBanner';
import ValuationForm from '@/components/sections/ValuationForm';
import Testimonials from '@/components/sections/Testimonials';
import Faq from '@/components/sections/Faq';
import FinalCta from '@/components/sections/FinalCta';
import SectionHeading, { Badge } from '@/components/ui/SectionHeading';
import CtaButton from '@/components/ui/CtaButton';
import type { FaqItem } from '@/types';

const SITUATION_CARDS = [
  {
    icon: '/images/out-story02.png',
    title: 'Truck With an Embargo',
    text: 'We help you understand the legal implications of selling a truck with an embargo, explaining how the process works and what documentation is required.',
  },
  {
    icon: '/images/help02.png',
    title: 'Mechanical Faults & Damage',
    text: 'Before committing to expensive repairs, assess your truck’s current market value. We provide transparent appraisals for trucks in any mechanical state.',
  },
  {
    icon: '/images/help03.png',
    title: 'Inherited Commercial Vehicles',
    text: 'Handling an inherited vehicle can be overwhelming. We guide you through the inheritance paperwork and legal requirements to sell smoothly.',
  },
  {
    icon: '/images/out-story03.png',
    title: 'Retirement & Fleet Downsizing',
    text: 'Leaving the transport business or streamlining operations? We offer straightforward valuations and coordinate vehicle collections tailored to your schedule.',
  },
];

const SECURITY_CARDS = [
  {
    icon: '/images/suport-doc.svg',
    title: 'Legal Documentation',
    text: 'We assist with the preparation and transfer of all official documentation in full compliance with Spanish transport regulations.',
  },
  {
    icon: '/images/straitforward-rightsign.svg',
    title: 'Clear & Fair Valuation',
    text: 'Understand exactly how your valuation was determined, with realistic market considerations and no hidden surprises.',
  },
  {
    icon: '/images/payment.svg',
    title: 'Prompt and Secure Payment',
    text: 'Receive prompt payment upon agreed collection, with transparent terms confirmed before you proceed.',
  },
];

const FAQ_SITUATIONS: FaqItem[] = [
  {
    q: 'Can I sell a truck that has an active embargo?',
    a: 'Yes, it is often possible. Our team evaluates the situation and explains the legal steps required to settle or handle the embargo during the sale.',
  },
  {
    q: 'Can I sell a truck with serious mechanical failure or accident damage?',
    a: 'Yes. We purchase trucks regardless of their mechanical condition, whether running or non-running, with fair valuations based on their current state.',
  },
  {
    q: 'What documents are required to sell an inherited truck?',
    a: 'You will need proof of inheritance, the vehicle registration documents, and identification. Our team will guide you through the exact paperwork required in Spain.',
  },
  {
    q: 'Is there any obligation when requesting a valuation?',
    a: 'No. All our valuations are completely free and without any obligation. You are free to review the offer and decide.',
  },
  {
    q: 'How does collection work if the truck cannot be driven?',
    a: 'We coordinate vehicle collection across Spain using specialized transport, arranged at a time that suits you.',
  },
];

export default function SpecialSellingSituationsPage() {
  return (
    <>
      {/* 1. Hero */}
      <Hero
        badge="Special selling situations"
        title="Selling Your Truck in a Difficult Situation?"
        text="Whatever challenges you face — outstanding finance, mechanical faults, or legal complexities — our team is here to help you navigate the process with confidence."
        image={IMG.privateHome}
        primary={{ label: 'Get a Free Valuation' }}
        checks={['Clear Guidance', 'Expert Support', 'Fair Valuation']}
      />

      {/* 2. A Clearer Way Forward */}
      <SplitSection
        badge="A clear path forward"
        title="A Clearer Way Forward for Your Truck Sale"
        paragraphs={[
          'Selling a commercial vehicle when facing complex conditions shouldn’t add unnecessary stress. Our team provides professional guidance and transparent valuations, helping you understand your options and move forward with peace of mind.',
        ]}
        image="/images/Straightforward.png"
        cta={{ label: 'Get a Free Valuation', to: '/get-a-free-valuation' }}
      />

      {/* 3. Solutions for Different Selling Situations (4 Cards) */}
      <section className="section-y bg-surface">
        <div className="container-x">
          <SectionHeading
            badge="Solutions we offer"
            title="Solutions for Different Selling Situations"
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SITUATION_CARDS.map(({ icon, title, text }) => (
              <article
                key={title}
                className="flex h-full flex-col justify-between rounded-[20px] border border-[#E7E7E8] bg-white p-6 shadow-sm"
              >
                <div>
                  <span className="flex h-[52px] w-[52px] items-center justify-center rounded-[12px] bg-[#F8F9FA] overflow-hidden">
                    <img src={icon} alt="" className="h-full w-full object-cover" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-brand-navy-dark">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#6C6F73]">{text}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#F3F3F3]">
                  <Link
                    to="/get-a-free-valuation"
                    className="inline-flex items-center text-sm font-medium text-brand-orange hover:underline cursor-pointer"
                  >
                    Request a Valuation →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Every Situation Deserves a Clear Explanation (Reverse SplitSection) */}
      <SplitSection
        reverse
        badge="Clear communication"
        title="Every Situation Deserves a Clear Explanation"
        paragraphs={[
          'We believe transparency is key when dealing with complex situations. Our team reviews each case individually, explaining the valuation and legal considerations so there are no surprises.',
        ]}
        image="/images/need.png"
        pills={[
          'No-obligation valuation and consultation.',
          'Guidance on legal and transfer paperwork.',
          'Support throughout the entire selling journey.',
        ]}
      />

      {/* 5. CtaBanner */}
      <CtaBanner
        badge="Need assistance?"
        title="Need to Discuss Your Situation?"
        text="Tell us about your truck and request a free valuation. Our team is ready to assist you with transparent advice and clear next steps."
        showCall
      />

      {/* 6. Forget the Paperwork: 100% Secure and Legal Sale */}
      <section className="section-y !pt-8">
        <div className="container-x">
          <SectionHeading
            badge="100% secure & legal"
            title="Forget the Paperwork: 100% Secure and Legal Sale"
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SECURITY_CARDS.map(({ icon, title, text }) => (
              <article
                key={title}
                className="flex h-full flex-col rounded-[18px] bg-surface p-6 sm:p-8"
              >
                <span className="flex h-[52px] w-[52px] items-center justify-center rounded-[12px] bg-white">
                  <img src={icon} alt="" className="h-6 w-6 object-contain" />
                </span>
                <h3 className="mt-5 text-base font-semibold text-brand-navy-dark sm:text-xl">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#6C6F73] sm:text-base">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 7. ValuationForm */}
      <ValuationForm />

      {/* 8. Testimonials */}
      <Testimonials />

      {/* 9. FAQ */}
      <Faq items={FAQ_SITUATIONS} title="Frequently Asked Questions About Difficult Situations" />

      {/* 10. Final CTA */}
      <FinalCta />
    </>
  );
}
