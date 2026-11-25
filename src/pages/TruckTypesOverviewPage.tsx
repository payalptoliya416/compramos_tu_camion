import { useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from '@/components/sections/Hero';
import ValuationForm from '@/components/sections/ValuationForm';
import Testimonials from '@/components/sections/Testimonials';
import Faq from '@/components/sections/Faq';
import FinalCta from '@/components/sections/FinalCta';
import CtaBanner from '@/components/sections/CtaBanner';
import SectionHeading, { Badge } from '@/components/ui/SectionHeading';
import CtaButton from '@/components/ui/CtaButton';
import Img from '@/components/ui/Img';
import type { FaqItem } from '@/types';

// Tab categories data
interface TruckCard {
  title: string;
  text: string;
  image: string;
  buttonText: string;
  to: string;
}

const TAB_DATA: Record<'lifting' | 'construction' | 'transport', TruckCard[]> = {
  lifting: [
    {
      title: 'Urgent Crane Truck Sale',
      text: 'Sell your crane truck quickly with a professional valuation, secure payment and help with the paperwork.',
      image: '/images/lifting01.png',
      buttonText: 'Sell Urgently',
      to: '/get-a-free-valuation',
    },
    {
      title: 'Truck-Mounted Crane',
      text: 'Get a specialist valuation for trucks with loading cranes, including different crane brands and configurations.',
      image: '/images/lifting02.png',
      buttonText: 'Sell Crane Truck',
      to: '/truck-types/multilift-hook-lift-trucks',
    },
    {
      title: 'Tipper Truck with Crane',
      text: 'Sell a tipper truck fitted with a crane, with specialist assessment, paperwork support and collection across Spain.',
      image: '/images/lifting03.png',
      buttonText: 'Sell Tipper with Crane',
      to: '/truck-types/concrete-mixer-trucks',
    },
    {
      title: '3,500 kg Light Trucks',
      text: 'Get a valuation for a 3,500 kg light commercial truck, with secure payment and help managing the paperwork.',
      image: '/images/lifting04.png',
      buttonText: 'Sell 3,500 kg Truck',
      to: '/truck-types/3500-kg-light-trucks',
    },
  ],
  construction: [
    {
      title: 'Used Dump Trucks',
      text: 'Sell your used dump truck with a professional valuation based on its mechanical condition, chassis and hydraulic tipping system.',
      image: '/images/construction01.png',
      buttonText: 'Sell Your Dump Truck',
      to: '/truck-types/concrete-mixer-trucks',
    },
    {
      title: 'Multilift Hook-Lift Truck',
      text: 'Sell your hook-lift truck with an expert valuation of its hydraulic lifting system, chassis and container-handling equipment.',
      image: '/images/construction02.png',
      buttonText: 'Sell Your Multilift Truck',
      to: '/truck-types/multilift-hook-lift-trucks',
    },
    {
      title: 'Concrete Mixer Trucks',
      text: 'Get a professional valuation for your used concrete mixer truck, including its chassis, mixing drum, capacity and related equipment.',
      image: '/images/construction03.png',
      buttonText: 'Sell Your Concrete Mixer',
      to: '/truck-types/concrete-mixer-trucks',
    },
    {
      title: 'Tanker Trucks',
      text: 'Sell your used tanker truck with a valuation that considers the tank, vehicle condition, capacity and specialised transport equipment.',
      image: '/images/construction04.png',
      buttonText: 'Sell Your Tanker Truck',
      to: '/truck-types/refrigerated-trucks',
    },
  ],
  transport: [
    {
      title: 'Tractor Units',
      text: 'Sell your used tractor unit with a professional valuation, support with the selling process and guidance for individual vehicles or entire fleets.',
      image: '/images/tractor01.png',
      buttonText: 'Sell Your Tractor Unit',
      to: '/truck-types/refrigerated-trucks',
    },
    {
      title: 'Refrigerated Trucks',
      text: 'Sell refrigerated or insulated trucks with a valuation that considers the vehicle, cooling equipment, condition and transport requirements.',
      image: '/images/tractor02.png',
      buttonText: 'Sell Your Refrigerated Truck',
      to: '/truck-types/refrigerated-trucks',
    },
    {
      title: 'Tauliner & Curtainsider',
      text: 'Get a professional valuation for curtainsider trucks, including rigid and semi-trailer configurations, based on their condition and specifications.',
      image: '/images/tractor03.png',
      buttonText: 'Sell Your Tauliner Truck',
      to: '/truck-types/parcel-delivery-trucks',
    },
    {
      title: 'Parcel Delivery Trucks',
      text: 'Sell your parcel delivery truck, from light 3,500 kg vehicles to larger distribution trucks, with professional valuation support.',
      image: '/images/tractor04.png',
      buttonText: 'Sell Your Parcel Truck',
      to: '/truck-types/parcel-delivery-trucks',
    },
  ],
};

// 10 Specific Truck Types
const SPECIFIC_TRUCK_TYPES = [
  { title: 'Crane Trucks', image: '/images/specialiti01.png', to: '/truck-types/multilift-hook-lift-trucks' },
  { title: 'Dump Trucks', image: '/images/specialiti02.png', to: '/truck-types/concrete-mixer-trucks' },
  { title: 'Multilift / Hook-Lift', image: '/images/specialiti03.png', to: '/truck-types/multilift-hook-lift-trucks' },
  { title: 'Cement Mixer Trucks', image: '/images/specialiti05.png', to: '/truck-types/concrete-mixer-trucks' },
  { title: 'Tankers', image: '/images/specialiti06.png', to: '/truck-types/refrigerated-trucks' },
  { title: 'Tractor Units', image: '/images/specialiti07.png', to: '/truck-types/refrigerated-trucks' },
  { title: 'Refrigerated Trucks', image: '/images/specialiti08.png', to: '/truck-types/refrigerated-trucks' },
  { title: 'Tipper Trucks', image: '/images/specialiti09.png', to: '/truck-types/concrete-mixer-trucks' },
  { title: 'Parcel Delivery Trucks', image: '/images/specialiti10.png', to: '/truck-types/parcel-delivery-trucks' },
  { title: '3,500 kg Trucks', image: '/images/specialiti11.png', to: '/truck-types/3500-kg-light-trucks' },
];

// Valuation factors
const VALUATION_FACTORS = [
  {
    icon: '/images/questionmark.svg',
    title: 'No Need to Know Everything',
    text: 'You can start by sharing the basic information you have about your truck. Our team can review the details with you.',
  },
  {
    icon: '/images/graph-chart.svg',
    title: 'A Clearer Valuation',
    text: 'The make, model, year, mileage, equipment, and vehicle condition can help inform the appraisal.',
  },
  {
    icon: '/images/star.svg',
    title: 'A Competitive Offer',
    text: "The valuation considers the truck's characteristics and relevant market factors. Final offers depend on the individual vehicle and its condition.",
  },
];

// Straightforward steps
const STRAIGHTFORWARD_STEPS = [
  {
    icon: '/images/doc-blue.svg',
    title: 'Share Your Truck Details',
    text: 'Provide the make, model, year, mileage, and other relevant vehicle information.',
  },
  {
    icon: '/images/bilori-orange.svg',
    title: 'Request a Valuation',
    text: 'Our team reviews the information provided and follows up about your request.',
  },
  {
    icon: '/images/handshake-regula-blue.svg',
    title: 'Discuss the Sale',
    text: 'If you wish to proceed, discuss the offer, documentation, and arrangements for the transaction.',
  },
];

// FAQs
const FAQ_ITEMS: FaqItem[] = [
  {
    q: 'Which categories of trucks do you buy?',
    a: 'We buy all categories of commercial vehicles across Spain, including rigid trucks, articulated tractor units, refrigerated bodies, tippers, crane trucks, multilift hook loaders, parcel delivery vans and 3,500 kg light commercials.',
  },
  {
    q: 'Do you buy specialized or modified trucks?',
    a: 'Yes, we evaluate all types of custom and specialized equipment including mounted hydraulic cranes, tipping systems, cooling units, tail lifts and concrete mixers.',
  },
  {
    q: 'Can I sell an entire commercial fleet or multiple categories at once?',
    a: 'Yes, we manage both single-truck sales and complete fleet liquidations across multiple vehicle categories with coordinated valuation and nationwide collection.',
  },
  {
    q: 'How do you calculate the valuation for different truck types?',
    a: 'Our appraisal process considers the make, model, year, mileage, engine condition, chassis integrity, specialized equipment condition, and current Spanish and European secondary market demand.',
  },
  {
    q: 'Do you handle the vehicle transfer and administrative paperwork for specialized vehicles?',
    a: 'Yes, we manage the complete DGT ownership transfer, cancellation of liens/embargos if applicable, and all required administrative documentation.',
  },
];

export default function TruckTypesOverviewPage() {
  const [activeTab, setActiveTab] = useState<'lifting' | 'construction' | 'transport'>('lifting');

  return (
    <>
      {/* 1. Hero */}
      <Hero
        badge="Explore truck types"
        title="We Buy All Types of Trucks"
        text="From heavy-duty transport vehicles to specialist commercial trucks, explore the vehicle categories we consider for valuation."
        image="/images/trucktype-mainpage-banner.png"
        primary={{ label: 'Get a Truck Valuation', to: '#valuation' }}
        checks={['All Truck Types', 'Expert Valuation', 'Professional Support']}
      />

      {/* 2. Split Section: Every Truck Has Its Own Category */}
      <section className="section-y">
        <div className="container-x grid items-center gap-8 lg:grid-cols-2 lg:gap-[53px]">
          <div className="overflow-hidden rounded-2xl">
            <Img
              src="/images/everytruck.png"
              alt="Every Truck Has Its Own Category"
              className="w-full h-auto rounded-2xl"
              imgClassName="w-full object-cover rounded-2xl"
            />
          </div>
          <div className="flex flex-col items-start gap-4">
            <Badge>Find your truck category</Badge>
            <h2 className="text-2xl font-medium leading-tight text-brand-navy sm:text-[40px] xl:leading-[40px]">
              Every Truck Has Its Own Category
            </h2>
            <p className="text-base leading-relaxed text-[#3B3F45]">
              Truck configuration, intended use, equipment, and condition can help determine the right starting point for a valuation. Explore the categories below to find the type that best matches your vehicle.
            </p>
            <CtaButton cta={{ label: 'Explore Truck Types', to: '#explore-categories' }} className="mt-2" />
          </div>
        </div>
      </section>

      {/* 3. Explore the Types of Trucks We Buy (Tabs) */}
      <section id="explore-categories" className="section-y bg-[#F3F3F3]">
        <div className="container-x">
          <SectionHeading
            badge="Vehicles we buy"
            title="Explore the Types of Trucks We Buy"
          />

          {/* Interactive Tabs */}
          <div className="mt-8 sm:mt-10 flex justify-center px-4">
            <div className="w-full max-w-[1012px] rounded-[24px] md:rounded-full border border-[#CECFD0] bg-white p-2.5 md:px-5 md:py-[15px] flex flex-col md:flex-row items-center justify-between gap-2.5 md:gap-4">
              <button
                type="button"
                onClick={() => setActiveTab('lifting')}
                className={`w-full md:flex-1 lg:w-[310px] lg:max-w-[310px] px-4 h-12 md:h-14 flex items-center justify-center rounded-full text-sm md:text-base font-medium transition-all cursor-pointer whitespace-nowrap ${activeTab === 'lifting'
                  ? 'bg-brand-orange text-white'
                  : 'bg-[#F4F5F7] text-[#3B3F45] hover:bg-[#E9EBEF] hover:text-brand-navy'
                  }`}
              >
                Lifting & Crane
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('construction')}
                className={`w-full md:flex-1 lg:w-[310px] lg:max-w-[310px] px-4 h-12 md:h-14 flex items-center justify-center rounded-full text-sm md:text-base font-medium transition-all cursor-pointer whitespace-nowrap ${activeTab === 'construction'
                  ? 'bg-brand-orange text-white'
                  : 'bg-[#F4F5F7] text-[#3B3F45] hover:bg-[#E9EBEF] hover:text-brand-navy'
                  }`}
              >
                Construction & Industrial
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('transport')}
                className={`w-full md:flex-1 lg:w-[310px] lg:max-w-[310px] px-4 h-12 md:h-14 flex items-center justify-center rounded-full text-sm md:text-base font-medium transition-all cursor-pointer whitespace-nowrap ${activeTab === 'transport'
                  ? 'bg-brand-orange text-white'
                  : 'bg-[#F4F5F7] text-[#3B3F45] hover:bg-[#E9EBEF] hover:text-brand-navy'
                  }`}
              >
                Transport & Distribution
              </button>
            </div>
          </div>

          {/* Cards for active tab */}
          <div className="mt-[30px] grid gap-[24px] sm:grid-cols-2 lg:grid-cols-4">
            {TAB_DATA[activeTab].map((card) => (
              <div
                key={card.title}
                className="flex flex-col justify-between rounded-[12px] border border-[#E7E7E8] bg-white p-5 transition-all hover:shadow-lg"
              >
                <div>
                  <div className="overflow-hidden rounded-[14px] aspect-[16/10] w-full">
                    <Img
                      src={card.image}
                      alt={card.title}
                      className="h-full w-full"
                      imgClassName="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <h3 className="mt-4 sm:mt-5 text-lg font-semibold text-brand-navy-dark leading-snug">
                    {card.title}
                  </h3>
                  <p className="mt-[15px] text-base leading-relaxed text-[#3B3F45]">
                    {card.text}
                  </p>
                </div>
                <div className="mt-6 xl:mt-10">
                  <Link
                    to={card.to || '#valuation'}
                    className="inline-flex w-fit items-center justify-center rounded-full border border-[#092B55] px-5 xl:px-[30px] py-3 text-sm font-medium text-[#092B55] transition-colors hover:bg-brand-navy hover:text-white text-center whitespace-nowrap"
                  >
                    {card.buttonText}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Explore Specific Truck Types (10 Grid - matching AboutPage UI) */}
      <section className="section-y">
        <div className="container-x">
          <SectionHeading badge="Find your vehicle" title="Explore Specific Truck Types" />
          <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 lg:gap-5 xl:gap-[24px]">
            {SPECIFIC_TRUCK_TYPES.map((s) => (
              <li key={s.title}>
                <Link
                  to={s.to}
                  className="group block rounded-[10px] border border-[#E7E7E8] bg-white p-3 sm:p-[15px] transition-shadow hover:shadow-md"
                >
                  <div className="overflow-hidden rounded-[8px]">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-[15px] flex items-center justify-between gap-2">
                    <span className="text-xs sm:text-base lg:leading-[16px] font-medium text-[#082B54]">
                      {s.title}
                    </span>
                    <img src="/images/right-errow.svg" alt="" />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 5. Banner: Need Help Identifying Your Truck? */}
      <CtaBanner
        badge="Ready to get started?"
        title="Need Help Identifying Your Truck?"
        text="Not sure which category matches your vehicle? Contact our team or request a valuation to discuss your truck’s details."
        primary={{ label: 'Get a Free Valuation', to: '#valuation' }}
      />

      {/* 6. How Do We Value Your Truck? */}
      <section className="section-y">
        <div className="container-x grid items-center gap-5 lg:grid-cols-2 lg:gap-[30px]">
          <div className="flex flex-col items-start gap-4">
            <Badge>Understanding your vehicle</Badge>
            <h2 className="text-2xl font-medium leading-tight text-brand-navy sm:text-[40px] xl:leading-[40px]">
              How Do We Value Your Truck?
            </h2>
            <p className="text-base leading-relaxed text-[#3B3F45]">
              Different trucks have different configurations and uses. Sharing accurate vehicle details helps our team understand your truck and review your valuation request.
            </p>
            <div className="mt-2 w-full overflow-hidden rounded-[12px]">
              <Img
                src="/images/competitive.png"
                alt="How Do We Value Your Truck?"
                className="w-full h-auto rounded-2xl"
                imgClassName="w-full object-cover rounded-[12px]"
              />
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:gap-5 w-full">
            {VALUATION_FACTORS.map((f) => (
              <div
                key={f.title}
                className="flex items-start gap-4 sm:gap-5 rounded-[12px] bg-[#F3F3F3] p-5 transition-all hover:shadow-sm"
              >
                <span className="flex h-12 w-12 sm:h-[58px] sm:w-[58px] shrink-0 items-center justify-center rounded-full bg-brand-orange text-white">
                  <img src={f.icon} alt="" className="" />
                </span>
                <div>
                  <h3 className="text-lg sm:text-xl font-medium text-brand-navy-dark leading-snug">
                    {f.title}
                  </h3>
                  <p className="mt-5 text-sm sm:text-base leading-relaxed text-[#3B3F45]">
                    {f.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Selling Your Truck Can Be Straightforward (3 Steps) */}
      <section className="section-y !pt-0">
        <div className="container-x">
          <SectionHeading
            badge="Simple steps"
            title="Selling Your Truck Can Be Straightforward"
          />
          <ol className="relative mt-10 grid gap-[24px] md:grid-cols-3">
            {STRAIGHTFORWARD_STEPS.map(({ icon, title, text }, i) => (
              <li key={title} className="relative flex flex-col items-center text-center">
                {i < STRAIGHTFORWARD_STEPS.length - 1 && (
                  <div
                    aria-hidden
                    className="absolute left-[calc(50%+29px)] top-[29px] -translate-y-1/2 hidden md:block h-[1.5px] w-[calc(100%-34px)] overflow-hidden"
                    style={{
                      background:
                        'linear-gradient(90deg, #F17612 0%, #F17612 48%, #E7E7E8 52%, #E7E7E8 100%)',
                    }}
                  />
                )}
                <span className="relative z-10 flex h-[58px] w-[58px] items-center justify-center rounded-[12px] border border-[#E7E7E8] bg-[#F3F3F3] text-brand-orange">
                  <img src={icon} alt="" className="" />
                </span>
                <h3 className="mt-5 sm:mt-[25px] text-lg font-medium text-brand-navy-dark sm:text-xl">
                  {title}
                </h3>
                <p className="mt-[15px] max-w-[450px] text-sm leading-relaxed text-[#3B3F45] sm:text-base">
                  {text}
                </p>
              </li>
            ))}
          </ol>
          <div className="mt-10 flex justify-center">
            <CtaButton cta={{ label: 'Get a Truck Valuation', to: '#valuation' }} />
          </div>
        </div>
      </section>

      {/* 8. Valuation Form */}
      <ValuationForm />

      {/* 9. Testimonials */}
      <Testimonials />

      {/* 10. FAQs */}
      <Faq items={FAQ_ITEMS} className='pt-0' />

      {/* 11. Final CTA */}
      <FinalCta />
    </>
  );
}
