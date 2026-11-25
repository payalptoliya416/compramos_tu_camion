import { IMG } from '@/data/images';
import Hero from '@/components/sections/Hero';
import SplitSection from '@/components/sections/SplitSection';
import CtaBanner from '@/components/sections/CtaBanner';
import ValuationForm from '@/components/sections/ValuationForm';
import Testimonials from '@/components/sections/Testimonials';
import Faq from '@/components/sections/Faq';
import FinalCta from '@/components/sections/FinalCta';
import Img from '@/components/ui/Img';
import SectionHeading from '@/components/ui/SectionHeading';
import type { FaqItem } from '@/types';

const FAQ: FaqItem[] = [
  {
    q: 'Can I sell multiple trucks at once?',
    a: 'Yes. We can assess multiple trucks as part of a single enquiry. Share your fleet details with us, and our team will review your requirements.',
  },
  {
    q: 'Do you buy trucks from transport companies and businesses?',
    a: 'Yes. We work with transport companies, logistics businesses, fleet operators and other commercial businesses looking to sell their trucks.',
  },
  {
    q: 'Can I sell only part of my fleet?',
    a: "Yes. You don't need to sell your entire fleet. We can assess individual vehicles or selected trucks based on your needs.",
  },
  {
    q: 'How is the value of a fleet calculated?',
    a: 'Each truck is assessed based on its make, model, age, mileage, condition and current market value. The number of vehicles and their specifications are also considered.',
  },
  {
    q: 'Can you arrange collection for multiple trucks?',
    a: 'We can coordinate collection arrangements for multiple vehicles. The details and schedule can be discussed with our team.',
  },
  {
    q: 'Do I need to prepare each truck before selling?',
    a: 'Not necessarily. Share the current condition and available details of each vehicle so we can assess your fleet and discuss the next steps.',
  },
];

export default function BusinessFleetPage() {
  return (
    <>
      <Hero
        badge="Business & fleet sales"
        title="Sell Your Business Fleet With Confidence"
        text="Selling company trucks or updating your fleet? Get a professional valuation and support tailored to your business."
        image={IMG.heroBusiness}
        primary={{ label: 'Get a Free Valuation' }}
        checks={['Fleet Expertise', 'Fair Valuation', 'Professional Support']}
      />

      <SplitSection
        reverse
        badge="Business truck sales"
        title="A Straightforward Way to Sell Your Company Trucks"
        paragraphs={['Selling company vehicles can be part of fleet renewal, operational changes, or a decision to dispose of surplus trucks. Our team helps you understand the appraisal process and the steps involved in selling your vehicles.']}
        image={IMG.truckBlueContainer}
        cta={{ label: 'Get a Fleet Valuation' }}
      />

      <section className="section-y !py-0">
        <div className="container-x">
          <SectionHeading badge="Why work with us" title="Support for Your Business Truck Sales" />
          <div className="mt-10 grid gap-[24px] sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: '/images/fleet.svg',
                title: 'Fleet-Focused Support',
                text: 'Guidance for businesses looking to sell one or more commercial vehicles, with dedicated support throughout the process.',
              },
              {
                icon: '/images/clear.svg',
                title: 'Clear Valuation Process',
                text: 'A structured review of your vehicle details to help determine an appropriate offer based on relevant market considerations.',
              },
              {
                icon: '/images/practical.svg',
                title: 'Practical Sale Coordination',
                text: 'Support with understanding the required documentation and discussing collection arrangements for your vehicles.',
              },
            ].map(({ icon, title, text }) => (
              <article
                key={title}
                className="flex h-full flex-col gap-4 rounded-[18px] bg-surface p-6 sm:p-[30px]"
              >
                <span className="flex h-[52px] w-[52px] items-center justify-center rounded-[12px] bg-white">
                  <img src={icon} alt="" className="h-7 w-7 object-contain" />
                </span>
                <h3 className="mt-2 text-base font-medium text-brand-navy-dark sm:text-xl">{title}</h3>
                <p className="text-sm leading-relaxed text-[#6C6F73] sm:text-base">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SplitSection
        badge="Your business, your needs"
        title="Truck Sales That Fit Your Business Needs"
        paragraphs={['Whether you are replacing older vehicles, adjusting your operations, or selling trucks you no longer require, our team can help you understand your options and the next steps.']}
        image="/images/need.png"
        pills={[
          'A clear and straightforward selling process.',
          'Guidance with the required documentation.',
          'Support throughout the appraisal and sale.',
        ]}
      />

      <CtaBanner
        badge="Ready to get started?"
        title="Personalized Support for Your Fleet"
        text="Have questions about selling your company trucks? Contact our team to discuss your vehicles and the next steps."
        showCall
      />

      {/* Sale of used trucks for companies */}
      <section className="section-y">
        <div className="container-x">
          <SectionHeading badge="Sale of used trucks" title="Sale of used trucks for companies" />
          <div className="mt-10 grid gap-[30px] lg:grid-cols-2 lg:items-stretch">
            <div className="overflow-hidden rounded-[20px]">
              <Img
                src="/images/sale01.png"
                alt="Used company trucks"
                className="h-full w-full min-h-[320px] rounded-[20px]"
                imgClassName="h-full w-full object-cover rounded-[20px]"
              />
            </div>
            <div className="flex flex-col justify-between gap-6">
              <div className="flex flex-col gap-[15px] text-sm sm:text-base leading-relaxed text-[#3B3F45]">
                <p>
                  In the business sector, truck sales are a strategic decision. Companies seek a fast and efficient process.
                </p>
                <p>
                  We understand that time is money. That’s why we’ve optimized every step so that selling used trucks doesn’t interfere with your business operations. Simplify your fleet management.
                </p>
                <p className="font-semibold text-[#3B3F45]">
                  We buy your trucks, regardless of make, model, or condition.
                </p>
              </div>
              <div className="overflow-hidden rounded-[20px]">
                <Img
                  src="/images/sale02.png"
                  alt="Fleet of trucks"
                  className="w-full aspect-[16/9] rounded-[20px]"
                  imgClassName="h-full w-full object-cover rounded-[20px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-y !pt-0">
        <div className="container-x">
          <SectionHeading badge="A clearer selling process" title="Make Your Next Fleet Sale Simpler" />
          <div className="mt-10 grid gap-[24px] sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: '/images/fair-color.svg',
                title: 'Fair Valuation',
                text: 'The offer is reviewed in relation to the vehicle details and relevant market considerations to provide an appropriate assessment.',
              },
              {
                icon: '/images/right-process.svg',
                title: 'Straightforward Process',
                text: 'Understand the information required and the steps involved in progressing a sale, with clear guidance at each stage.',
              },
              {
                icon: '/images/payment.svg',
                title: 'Payment and Documentation',
                text: 'Receive clear information about the agreed sale terms and required paperwork before proceeding with the transaction.',
              },
            ].map(({ icon, title, text }) => (
              <article
                key={title}
                className="flex h-full flex-col rounded-[18px] border border-[#E7E7E8] bg-white py-5 sm:py-[35px] px-5 sm:px-[25px]"
              >
                <span className="flex h-[52px] w-[52px] items-center justify-center rounded-[12px] bg-[#F3F3F3] border border-[#E7E7E8]">
                  <img src={icon} alt="" className="h-6 w-6 object-contain" />
                </span>
                <h3 className="mt-5 text-base font-semibold text-brand-navy-dark sm:text-xl">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#6C6F73] sm:text-base">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ValuationForm />
      <Testimonials className="!pb-0" />
      <Faq items={FAQ} />
      <FinalCta />
    </>
  );
}
