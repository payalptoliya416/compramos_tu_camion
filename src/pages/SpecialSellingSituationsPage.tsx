import { Link } from 'react-router-dom';
import Hero from '@/components/sections/Hero';
import SplitSection from '@/components/sections/SplitSection';
import CtaBanner from '@/components/sections/CtaBanner';
import ValuationForm from '@/components/sections/ValuationForm';
import Testimonials from '@/components/sections/Testimonials';
import Faq from '@/components/sections/Faq';
import FinalCta from '@/components/sections/FinalCta';
import SectionHeading from '@/components/ui/SectionHeading';
import type { FaqItem } from '@/types';

const SITUATION_CARDS = [
  {
    icon: '/images/Retirement.svg',
    title: 'Retirement',
    text: 'Planning to retire from the transport industry? Explore the steps involved in selling your truck as part of your transition.',
    btnText: 'Discuss Your Sale',
  },
  {
    icon: '/images/business.svg',
    title: 'Business Closure',
    text: 'Closing or restructuring your business? Get guidance on the information needed to discuss selling your commercial vehicle.',
    btnText: 'Explore Your Options',
  },
  {
    icon: '/images/illness.svg',
    title: 'Illness or Personal Circumstances',
    text: 'If health or personal circumstances make managing your truck difficult, contact our team to discuss the selling process and available support.',
    btnText: 'Contact Our Team',
  },
  {
    icon: '/images/outstanding.svg',
    title: 'Outstanding Debt or Vehicle Liens',
    text: 'If your truck has an outstanding finance balance or lien, the available options depend on the specific circumstances. Contact our team to discuss the situation before proceeding.',
    btnText: 'Discuss Your Situation',
  },
];

const SECURITY_CARDS = [
  {
    icon: '/images/forget.svg',
    title: 'Forget about the DGT',
    text: 'Selling heavy goods vehicles involves complex procedures. When you entrust the sale of your trucks to us, you can forget about the DGT (Spanish Traffic Authority), cumbersome ownership transfers, canceling liens, and sales notifications.',
  },
  {
    icon: '/images/security.svg',
    title: 'Guaranteed Security',
    text: 'We guarantee a secure truck sale, with immediate payment via bank transfer or your preferred method. Zero risk of non-payment, bounced checks, installment payments, or fraud.',
  },
  {
    icon: '/images/outstanding.svg',
    title: 'Legal support',
    text: 'We work with specialized agencies in Spain to ensure all documentation is legally compliant, giving you complete peace of mind. We stay up-to-date with all regulations.',
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
        text="Facing a difficult situation? Get professional guidance to sell your truck with confidence."
        image="/images/special-selling.png"
        primary={{ label: 'Get a Free Valuation' }}
        checks={['Flexible Solutions', 'Expert Guidance', 'Hassle-Free Process']}
      />

      {/* 2. A Clearer Way Forward */}
      <SplitSection
        badge="A clear path forward"
        title="A Clearer Way Forward for Your Truck Sale"
        paragraphs={[
          'Selling a commercial vehicle can become more complicated when personal circumstances or business changes are involved. We help you understand the process, review your truck details, and discuss the next steps based on your situation.',
        ]}
        image="/images/cleare.png"
        cta={{ label: 'Get a truck appraisal now', to: '/get-a-free-valuation' }}
      />

      {/* 3. Solutions for Different Selling Situations (4 Cards) */}
      <section className="section-y bg-surface !pb-[110px]">
        <div className="container-x">
          <SectionHeading
            badge="How we can help"
            title="Solutions for Different Selling Situations"
          />
          <div className="mt-10 grid gap-[24px] sm:grid-cols-2 lg:grid-cols-4">
            {SITUATION_CARDS.map(({ icon, title, text, btnText }, i) => (
              <article
                key={title}
                className={`flex flex-col justify-between rounded-[12px] bg-white p-6 sm:p-[30px] lg:h-[450px] ${
                  i % 2 === 1 ? 'sm:mt-8 lg:mt-12' : ''
                }`}
              >
                <div>
                  <span className="flex h-[58px] w-[58px] items-center justify-center rounded-[12px] bg-[#F3F3F3] border border-[#E7E7E8]">
                    <img src={icon} alt="" className="" />
                  </span>
                  <h3 className="mt-5 text-base sm:text-lg font-semibold text-brand-navy-dark leading-snug">{title}</h3>
                  <p className="mt-[15px] text-sm md:text-base leading-relaxed text-[#3B3F45]">{text}</p>
                </div>
                <div className="mt-8">
                  <Link
                    to="/get-a-free-valuation"
                    className="inline-flex items-center justify-center rounded-full border border-brand-navy px-[30px] py-[16px] text-sm sm:text-base leading-[16px] font-medium text-brand-navy transition-colors hover:bg-brand-navy hover:text-white"
                  >
                    {btnText}
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
        badge="YOUR BUSINESS, YOUR NEEDS"
        title="Every Situation Deserves a Clear Explanation"
        paragraphs={[
          'You do not need to know every step before contacting us. Share the basic details of your truck and explain your circumstances. Our team can help you understand the information needed to assess your request.',
        ]}
        image="/images/need02.png"
        pills={[
          'Explain your circumstances to our team.',
          'Understand the information needed for your valuation.',
          'Discuss the documentation and next steps for your situation.',
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
      <section className="section-y">
        <div className="container-x">
          <SectionHeading
            badge="Secure and legal sale"
            title="Forget the Paperwork: 100% Secure and Legal Sale"
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SECURITY_CARDS.map(({ icon, title, text }) => (
              <article
                key={title}
                className="flex h-full flex-col rounded-[12px] bg-surface py-5 sm:py-[35px] px-5 sm:px-[25px]"
              >
                <span className="flex h-[50px] w-[50px] items-center justify-center rounded-[12px] bg-white">
                  <img src={icon} alt="" className="h-6 w-6 object-contain" />
                </span>
                <h3 className="mt-5 text-lg sm:text-xl font-semibold text-brand-navy-dark">{title}</h3>
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#6C6F73]">{text}</p>
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
