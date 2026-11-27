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
import type { FaqItem } from '@/types';

const PRIVATE_SELLERS_FAQS: FaqItem[] = [
  {
    q: 'How does the sale of a truck from a private individual to a company work?',
    a: (
      <>
        The sale of a truck from a private individual to a company is formalized through a commercial vehicle purchase agreement and the signing of the transfer notification at the DGT (Spanish Directorate General of Traffic). Unlike companies, private sellers do not issue invoices with VAT; instead, the transaction is subject to <span className="text-[#F17612]">Transfer Tax (ITP)</span>, the rate of which varies depending on the Autonomous Community in Spain.
        {'\n\n'}
        At compramostucamion.es we buy directly from individuals, simplifying the process: we draw up the legal contract, manage the change of ownership, and pay you the full amount by secure transfer before you pick up the vehicle.
      </>
    ),
  },
  {
    q: 'What documentation does an individual need to provide for the sale of their truck?',
    a: (
      <>
        To proceed with the <strong className="font-semibold text-brand-navy-dark">sale of a truck</strong> as a private individual in Spain, the owner must provide a valid ID, the original Vehicle Registration Certificate, the Technical Inspection Card (Technical Data Sheet) with the ITV stamped and passed, and the last paid receipt for the Circulation Tax (IVTM).
      </>
    ),
  },
  {
    q: 'If I am a self-employed transporter, how should I declare the sale of the truck?',
    a: (
      <>
        If you are a self-employed hauler and the truck was used for your business, the sale is not a private transaction. You must issue a <strong className="font-semibold text-brand-navy-dark">truck sales</strong> invoice applying the corresponding VAT rate (usually 21%). At <strong className="font-semibold text-brand-navy-dark">compramostucamion.es</strong>, we take care of this step for you.
        {'\n\n'}
        In addition, you must declare the capital gain or loss in your Income Tax return (IRPF), calculated by the difference between the transfer value (the sale price) and the net book value of the vehicle (acquisition value less the depreciation already applied).
      </>
    ),
  },
  {
    q: 'Who is responsible for paying the traffic fees and the name change?',
    a: (
      <>
        By law in Spain, the payment of DGT fees for the change of ownership and management fees is usually the responsibility of the buyer, unless otherwise agreed.
        {'\n\n'}
        When you sell your vehicle on our platform, <strong className="font-semibold text-brand-navy-dark">compramostucamion.es covers 100% of the administrative fees, traffic taxes, and transfer of ownership costs</strong> . We provide you with a professional transfer certificate on the spot, so you are completely exempt from any liability or fines from the very beginning.
      </>
    ),
  },
  {
    q: 'Do I have to bring the truck to your facilities to finalize the sale?',
    a: (
      <>
        No, you don't need to move the vehicle. Once you accept our online valuation for your <strong className="font-semibold text-brand-navy-dark">truck</strong> , we'll send our team of professional appraisers to carry out a physical inspection at your location in Spain (your base, workshop, or home). After verifying the vehicle's condition, we'll make the payment immediately, and our own lowboy trailer or authorized driver will handle the collection at no extra cost to you.
      </>
    ),
  },
  {
    q: 'Can I manage the entire process if I decide to sell my truck online?',
    a: "Yes. The appraisal process, document submission, and offer acceptance are all done 100% digitally or by phone. You'll only need to be present for the physical inspection and vehicle collection for the final signing.",
  },
];

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
        image="/images/private-herobanner.png"
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
        <div className="container-x grid gap-8 lg:grid-cols-[1.1fr_2.4fr] lg:gap-5 xl:gap-8 items-start">
          <div className="flex flex-col items-start">
            <Badge>Why choose us</Badge>
            <h2 className="mt-3 text-2xl font-medium text-brand-navy sm:text-[32px] xl:text-[38px] xl:leading-[58px]">
              A More Straightforward Way to Sell Your Truck
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#6C6F73]">
              Selling a commercial vehicle can involve several steps. Our team helps you understand the process and guides you through the valuation and sale.
            </p>
            <CtaButton cta={{ label: 'Get a Free Valuation', to: '/get-a-free-valuation#valuation' }} className="mt-6 self-start" />
          </div>
          <ul className="grid gap-3 sm:grid-cols-3 sm:gap-4 xl:gap-2">
            {WHY.map(({ icon, title, text }) => (
              <li key={title} className="flex flex-col items-start text-left sm:px-2 xl:px-[30px] py-4 sm:py-5 xl:py-[30px]">
                <span className="flex h-[54px] w-[54px] items-center justify-center rounded-[14px] border border-[#E7E7E8] bg-[#F8F9FA]">
                  <img src={icon} alt="" className="w-5 h-5" />
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
        staggered
        variant="plain"
        items={[
          { icon: '/images/fair.svg', title: 'Fair Truck Valuation', text: 'Receive an offer based on your truck’s details and market considerations.' },
          { icon: '/images/straitforward-rightsign.svg', title: 'Straightforward Process', text: 'Understand the next steps without unnecessary complications or delays.' },
          { icon: '/images/suport-doc.svg', title: 'Paperwork Support', text: 'Get guidance with the documentation needed for the sale of your vehicle.' },
          { icon: '/images/locaton.svg', title: 'Convenient Collection', text: 'Discuss collection arrangements with our team at a time that suits you.' },
        ]}
        className='!pb-0'
      />

      <Faq
        items={PRIVATE_SELLERS_FAQS}
        title="Frequently asked questions about private truck sales"
      />
      <FinalCta />
    </>
  );
}
