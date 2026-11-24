import { BarChart3, ClipboardCheck, FileText, Handshake, Truck } from 'lucide-react';
import { IMG } from '@/data/images';
import Hero from '@/components/sections/Hero';
import SplitSection from '@/components/sections/SplitSection';
import FeatureGrid from '@/components/sections/FeatureGrid';
import CtaBanner from '@/components/sections/CtaBanner';
import ValuationForm from '@/components/sections/ValuationForm';
import Testimonials from '@/components/sections/Testimonials';
import Faq from '@/components/sections/Faq';
import FinalCta from '@/components/sections/FinalCta';
import Img from '@/components/ui/Img';
import SectionHeading from '@/components/ui/SectionHeading';
import type { FaqItem } from '@/types';

const FAQ: FaqItem[] = [
  { q: 'Can I sell multiple trucks at once?', a: 'Yes. We can assess multiple trucks as part of a single enquiry. Share your fleet details with us, and our team will review your request.' },
  { q: 'Do you buy trucks from transport companies and businesses?', a: 'Yes. We assist transport companies, operators and businesses selling commercial vehicles.' },
  { q: 'Can I sell only part of my fleet?', a: 'Yes. You can sell the vehicles you no longer need and keep the rest of your fleet.' },
  { q: 'How is the value of a fleet calculated?', a: 'Each truck is reviewed individually based on its specifications, condition and market considerations.' },
  { q: 'Can you arrange collection for multiple trucks?', a: 'Yes. We coordinate collection arrangements across Spain, including for several vehicles.' },
  { q: 'Do I need to prepare each truck before selling?', a: 'No special preparation is required. Our team will explain what information and documents are helpful.' },
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

      <section className="section-y !pt-4">
        <div className="container-x">
          <SectionHeading badge="Why work with us" title="Support for Your Business Truck Sales" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
        image={IMG.warehouseAerial}
        pills={['A clear and straightforward selling process', 'Guidance with the required documentation', 'Support throughout the appraisal and sale']}
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
          <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:items-start">
            <Img src={IMG.fleetWhiteRed} alt="Used company trucks" className="aspect-[4/3] rounded-2xl lg:aspect-auto lg:h-full lg:min-h-[320px]" />
            <div className="flex flex-col gap-4">
              <p className="text-xs leading-relaxed text-slate-500 sm:text-sm">
                In the business sector, truck sales are a strategic decision. Companies seek a fast and efficient process.
              </p>
              <p className="text-xs leading-relaxed text-slate-500 sm:text-sm">
                We understand that time is money. That’s why we’ve optimized every step so that selling used trucks doesn’t interfere with your business operations. Simplify your fleet management.
              </p>
              <p className="text-xs font-semibold text-brand-navy-dark sm:text-sm">We buy your trucks, regardless of make, model, or condition.</p>
              <Img src={IMG.fleetYellow} alt="Fleet of trucks" className="aspect-[16/9] rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      <FeatureGrid
        badge="A clearer selling process"
        title="Make Your Next Fleet Sale Simpler"
        items={[
          { icon: BarChart3, title: 'Fair Valuation', text: 'The offer is reviewed in relation to the vehicle details and relevant market considerations to provide an appropriate assessment.' },
          { icon: ClipboardCheck, title: 'Straightforward Process', text: 'Understand the information required and the steps involved in progressing a sale, with clear guidance at each stage.' },
          { icon: Handshake, title: 'Payment and Documentation', text: 'Receive clear information about the agreed sale terms and required paperwork before proceeding with the transaction.' },
        ]}
        className="!pt-0"
      />

      <ValuationForm />
      <Testimonials />
      <Faq items={FAQ} />
      <FinalCta />
    </>
  );
}
