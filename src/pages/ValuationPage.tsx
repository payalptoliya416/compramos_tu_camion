import type { FaqItem } from '@/types';
import Hero from '@/components/sections/Hero';
import RecentPurchases from '@/components/sections/RecentPurchases';
import FeatureGrid from '@/components/sections/FeatureGrid';
import Steps from '@/components/sections/Steps';
import CtaBanner from '@/components/sections/CtaBanner';
import ValuationForm from '@/components/sections/ValuationForm';
import Testimonials from '@/components/sections/Testimonials';
import Faq from '@/components/sections/Faq';
import FinalCta from '@/components/sections/FinalCta';
import { Badge } from '@/components/ui/SectionHeading';
import CtaButton from '@/components/ui/CtaButton';

const VALUATION_FAQS: FaqItem[] = [
  {
    q: 'How is the appraisal value of a used truck calculated in Spain?',
    a: "The value of a used truck is determined mainly by its make and model, year of first registration, total mileage, axle configuration, Euro emissions standard (essential for driving in Low Emission Zones) and the condition of the chassis or special equipment (such as cranes or tipping systems).\n\nTo obtain an accurate valuation in Spain, we analyze the following key factors:\n\n• Euro Standard: Trucks with Euro 6 engines have a higher residual value in the domestic market due to Low Emission Zone (LEZ) restrictions.\n\n• Equipment and Bodywork: Extras such as a tipping unit, refrigeration systems or cranes with current safety certification significantly increase the vehicle's appraised value.\n\n• Chassis Configuration: 4x2 tractor units and rigid multilift trucks are currently the most sought-after and in-demand vehicles.",
  },
  {
    q: 'Can I get a valuation for my truck by registration number on this website?',
    a: "Yes. Our truck valuation service, based on registration number, analyzes your vehicle's key technical parameters—such as the year of first registration, chassis configuration, mileage, and Euro emissions standards—to provide you with an accurate estimate that reflects the true market value in Spain. No complicated paperwork or travel is required: simply complete the form with your vehicle's basic information in under two minutes to receive a firm, free, and no-obligation offer.",
  },
  {
    q: 'Can you appraise a truck without taking it to a workshop?',
    a: 'Yes. At compramostucamion.es, we calculate the value of your truck 100% digitally through our online form or by phone, saving you the trip to a garage or disrupting your work. If you accept the offer, our technical team will come directly to your truck’s location in Spain for a final physical inspection.',
  },
  {
    q: 'How long does it take to receive the vehicle valuation and payment?',
    a: 'The initial online valuation is processed in less than one hour once the technical form with photos is completed. After accepting the offer and completing the optional physical inspection, payment is made via immediate bank transfer (via OMF if necessary) before vehicle collection, guaranteeing complete financial security.\n\n• Express technical appraisal: Less than 60 minutes.\n\n• Issuance of binding offer: On the same day as the verification.\n\n• Payment and collection: We will arrange to collect the truck anywhere on the Iberian Peninsula (Spain) at no additional cost to you once the payment has been confirmed in your bank account.',
  },
  {
    q: 'Can I appraise trucks of different brands on a single platform?',
    a: 'Yes, our platform allows you to value used trucks from any manufacturer sold in Spain ( Mercedes-Benz , Volvo , Scania , MAN , DAF , Iveco , Renault Trucks , Nissan, Isuzu, etc.). We value all types of configurations: tractor units, rigid trucks, concrete mixers, tippers, and refrigerated vehicles.',
  },
  {
    q: 'Which companies offer free online truck valuations?',
    a: 'Compramostucamion.es offers a completely free, no-obligation online truck valuation service . It allows self-employed individuals, companies, and private citizens to find out the market value of their commercial vehicles in less than an hour, with complete confidentiality.',
  },
  {
    q: 'What factors determine exactly how much my truck is worth when it’s appraised?',
    a: 'To determine the value of my truck, five key factors are analyzed: the make and model, the year and registered mileage, the mechanical condition of the engine and transmission, the type of bodywork or additional equipment installed, and the validity of the mandatory documentation (ITV, tachograph and service history).',
  },
];

export default function ValuationPage() {
  return (
    <>
      <Hero
        badge="Professional truck valuation"
        title="How Much Is Your Truck Worth?"
        text="Get a professional valuation for your used truck and take the next step towards selling it with confidence."
        image="/images/get-free-valuation-banner.png"
        primary={{ label: 'Get a Free Valuation' }}
        secondary={{ label: 'How It Works', to: '/how-it-works' }}
        checks={['Professional Valuation', 'No Obligation', 'Secure Selling Process']}
      />

      <section className="section-y">
        <div className="container-x grid items-center gap-8 lg:grid-cols-2 lg:gap-[53px]">
          <div className="overflow-hidden rounded-2xl">
            <img
              src="/images/valuationpage-about.png"
              alt="Find Out How Much Your Truck Is Worth"
              className="h-auto w-full rounded-2xl object-cover"
            />
          </div>
          <div className="flex flex-col items-start gap-4">
            <Badge>Used truck valuation</Badge>
            <h2 className="text-2xl font-medium leading-tight text-brand-navy sm:text-[40px] xl:leading-[60px]">
              Find Out How Much Your Truck Is Worth
            </h2>
            <p className="text-base leading-relaxed text-[#3B3F45]">
              Understanding your truck’s value is an important first step when preparing to sell. Our team reviews the information you provide to assess your vehicle’s specifications, condition and relevant market factors.
            </p>
            <p className="text-base leading-relaxed text-[#3B3F45]">
              Whether you own an individual commercial vehicle or manage a fleet, our valuation process helps you understand the next steps towards selling your truck.
            </p>
            <div className="my-1 flex flex-col items-start gap-[15px]">
              {[
                'Professional vehicle assessment',
                'No-obligation valuation request',
                'Clear guidance on the next steps',
              ].map((pill) => (
                <div
                  key={pill}
                  className="inline-flex items-center gap-2 rounded-full bg-[#F3F3F3] px-5 py-4 text-xs font-normal text-[#3B3F45] sm:text-base"
                >
                  <img src="/images/fill-checkmark.svg" alt="" className="shrink-0" />
                  <span>{pill}</span>
                </div>
              ))}
            </div>
            <CtaButton cta={{ label: 'Start Your Valuation' }} className="mt-2" />
          </div>
        </div>
      </section>

      <RecentPurchases band buttonVariant="dark-outline" />

      <FeatureGrid
        badge="Why a professional valuation?"
        title="Understand Your Truck’s Value Before You Sell"
        cols={4}
        staggered
        items={[
          { icon: '/images/setting.svg', title: 'Vehicle Condition and Equipment', text: 'Consider the vehicle’s condition, specifications and installed equipment when assessing its value.' },
          { icon: '/images/market-graph.svg', title: 'Market-Based Assessment', text: 'Review relevant market factors and the type of commercial vehicle being evaluated for a fair result.' },
          { icon: '/images/users-multiple.svg', title: 'Professional Guidance', text: 'Understand the information needed to assess your truck and discuss the next steps with our team.' },
          { icon: '/images/doc-blue.svg', title: 'Clear Process', text: 'Submit your vehicle details and receive guidance on how the valuation process proceeds from here.' },
        ]}
        className='!pb-[50px]'
      />

      <Steps
        badge="Our valuation process"
        title="How Does Our Truck Valuation Work?"
        steps={[
          { icon: '/images/doc.svg', title: 'Provide the Basic Details', text: 'Enter the make, model, registration year, mileage and other essential vehicle information.' },
          { icon: '/images/info-blue.svg', title: 'Add Vehicle Information', text: 'Describe the truck’s condition, fuel type, equipment and any relevant details. Upload photographs where possible.' },
          { icon: '/images/bilori-blue.svg', title: 'Professional Assessment', text: 'Our team reviews the information submitted and evaluates the vehicle based on its specifications, condition and market factors.' },
          { icon: '/images/chat-blue.svg', title: 'Discuss the Next Steps', text: 'We communicate the assessment and explain the available next steps for selling your truck.' },
        ]}
      />

      <CtaBanner
        badge="Ready to get started?"
        title="Need Help with Your Truck Valuation?"
        text="Our team can help you understand the information required and guide you through the next steps."
      />

      <FeatureGrid
        badge="Prepare your truck details"
        title="Help Us Understand Your Truck’s Value"
        variant="surface"
        items={[
          { icon: '/images/accurate.svg', title: 'Accurate Vehicle Details', text: 'Provide the make, model, registration year and mileage for the most accurate assessment of your vehicle.' },
          { icon: '/images/setting01.svg', title: 'Condition and Equipment', text: 'Describe the vehicle’s current condition and any specialist equipment, modifications or installed accessories.' },
          { icon: '/images/camero.svg', title: 'Clear Photographs', text: 'Upload useful photographs showing the truck’s exterior, interior and relevant equipment.' },
        ]}
      />

      <ValuationForm />
      <Testimonials />
      <Faq items={VALUATION_FAQS} title="Frequently asked questions about truck valuation" />
      <FinalCta />
    </>
  );
}
