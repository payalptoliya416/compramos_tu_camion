import { IMG } from '@/data/images';
import Hero from '@/components/sections/Hero';
import Testimonials from '@/components/sections/Testimonials';
import ValuationForm from '@/components/sections/ValuationForm';
import Steps from '@/components/sections/Steps';
import CtaBanner from '@/components/sections/CtaBanner';
import FeatureGrid from '@/components/sections/FeatureGrid';
import Faq from '@/components/sections/Faq';
import FinalCta from '@/components/sections/FinalCta';
import { Badge } from '@/components/ui/SectionHeading';
import CtaButton from '@/components/ui/CtaButton';

const WHY = [
  {
    icon: '/images/user01.svg',
    title: 'Professional Guidance',
    text: 'Our experienced team is available to answer your questions and explain each step of the selling process clearly.',
  },
  {
    icon: '/images/eye01.svg',
    title: 'Clear and Transparent Process',
    text: 'We explain how valuations are made and what to expect so there are no surprises during the sale.',
  },
  {
    icon: '/images/support01.svg',
    title: 'Support With the Sale',
    text: 'From initial valuation to final collection, we are available to support you throughout the entire selling journey.',
  },
];

export default function PrivateSellersPage() {
  return (
    <>
      <Hero
        badge="Private truck sellers"
        title="Sell Your Truck Privately, Without the Hassle"
        text="Sell your used truck with confidence. Get a fair valuation, a straightforward selling process, and professional support from our team."
        image={IMG.privateHome}
        primary={{ label: 'Get a Free Valuation' }}
        secondary={{ label: 'How It Works', to: '/how-it-works' }}
        checks={['No Obligation', 'Fair Valuation', 'Professional Support']}
      />

      <Testimonials />
      <ValuationForm />

      <Steps
        badge="The process"
        title="Sell Your Truck in Three Simple Steps"
        steps={[
          { icon: '/images/doc-blue.svg', title: 'Share Your Truck Details', text: 'Tell us about your truck, including its make, model, registration year, and mileage. You can do this quickly online or by phone.' },
          { icon: '/images/call.svg', title: 'Receive a Valuation', text: 'Our team reviews the information you provide and contacts you to discuss your truck’s valuation and answer any questions.' },
          { icon: '/images/handshake-regula-blue.svg', title: 'Complete the Sale', text: 'If you agree to the offer, our team will guide you through the next steps, documentation, and collection arrangements.' },
        ]}
      />

      {/* More straightforward way */}
      <section className="section-y !pt-0">
        <div className="container-x grid gap-8 lg:grid-cols-[1.1fr_2.4fr] lg:gap-8 xl:gap-12 items-start">
          <div className="flex flex-col items-start">
            <Badge>Why choose us</Badge>
            <h2 className="mt-3 text-2xl font-medium leading-[1.15] text-brand-navy sm:text-[32px] xl:text-[40px]">
              A More Straightforward Way to Sell Your Truck
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#6C6F73]">
              Selling a commercial vehicle can involve several steps. Our team helps you understand the process and guides you through the valuation and sale.
            </p>
            <CtaButton cta={{ label: 'Get a Free Valuation', to: '/get-a-free-valuation' }} className="mt-6 self-start" />
          </div>
          <ul className="grid gap-4 sm:grid-cols-3 sm:gap-4 xl:gap-5">
            {WHY.map(({ icon, title, text }) => (
              <li key={title} className="flex flex-col items-start text-left sm:px-2 xl:px-[30px] py-4 sm:py-5 xl:py-[30px]">
                <span className="flex h-[58px] w-[58px] items-center justify-center rounded-[14px] border border-[#E7E7E8] bg-[#F8F9FA]">
                  <img src={icon} alt="" className="" />
                </span>
                <h3 className="mt-5 text-base font-medium text-brand-navy-dark sm:text-lg">{title}</h3>
                <p className="mt-2.5 text-sm sm:text-base leading-relaxed text-[#6C6F73]">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBanner
        badge="Ready to get started?"
        title="Find Out What Your Truck Could Be Worth"
        text="Share your truck details to begin the valuation process. Our team will review your information and explain the next steps."
      />

      <FeatureGrid
        badge="A simpler way to sell"
        title="Selling Your Truck Should Be Simple"
        cols={4}
        variant="plain"
        items={[
          { icon: '/images/fair.svg', title: 'Fair Truck Valuation', text: 'Receive an offer based on your truck’s details and market considerations.' },
          { icon: '/images/straitforward-rightsign.svg', title: 'Straightforward Process', text: 'Understand the next steps without unnecessary complications or delays.' },
          { icon: '/images/suport-doc.svg', title: 'Paperwork Support', text: 'Get guidance with the documentation needed for the sale of your vehicle.' },
          { icon: '/images/locaton.svg', title: 'Convenient Collection', text: 'Discuss collection arrangements with our team at a time that suits you.' },
        ]}
        className='!pb-0'
      />

      <Faq />
      <FinalCta />
    </>
  );
}
