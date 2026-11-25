import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
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
  to: string;
}

const TAB_DATA: Record<'rigid' | 'articulated' | 'special', TruckCard[]> = {
  rigid: [
    {
      title: 'Rigid Trucks with Crane',
      text: 'Heavy-duty rigid chassis equipped with hydraulic loader cranes for construction, utilities, and regional lifting tasks.',
      image: '/images/specialiti01.png',
      to: '/truck-types/multilift-hook-lift-trucks',
    },
    {
      title: 'Curtainsiders and Box Trucks',
      text: 'Enclosed body vehicles designed for pallet transport, retail logistics, and dry goods freight across Spain.',
      image: '/images/specialiti10.png',
      to: '/truck-types/parcel-delivery-trucks',
    },
    {
      title: 'Rigid Tipper Trucks',
      text: 'Built for construction aggregates, earthmoving, and mining with rear or 3-way tipping hydraulic bodies.',
      image: '/images/specialiti09.png',
      to: '/truck-types/concrete-mixer-trucks',
    },
    {
      title: '3,500 kg Light Trucks',
      text: 'High-agility urban distribution trucks and chassis cabs driven on standard licenses for last-mile delivery.',
      image: '/images/specialiti11.png',
      to: '/truck-types/3500-kg-light-trucks',
    },
  ],
  articulated: [
    {
      title: 'Tractor Units (4x2 / 6x2 / 6x4)',
      text: 'Long-haul and regional prime movers from all leading manufacturers, assessed on engine health and specs.',
      image: '/images/specialiti07.png',
      to: '/truck-types/refrigerated-trucks',
    },
    {
      title: 'Refrigerated Semi-Trailers',
      text: 'Temperature-controlled refrigerated trailers with single or multi-temp cooling units for food and pharma.',
      image: '/images/specialiti08.png',
      to: '/truck-types/refrigerated-trucks',
    },
    {
      title: 'Tipper Semi-Trailers',
      text: 'High-capacity aluminium and steel tipping trailers for bulk aggregate, agricultural, and industrial transport.',
      image: '/images/specialiti02.png',
      to: '/truck-types/concrete-mixer-trucks',
    },
    {
      title: 'Flatbed & Platform Trailers',
      text: 'Heavy-duty platform trailers and extendable flatbeds designed for oversized equipment and structural loads.',
      image: '/images/truck06.png',
      to: '/truck-types/3500-kg-light-trucks',
    },
  ],
  special: [
    {
      title: 'Concrete Mixer Trucks',
      text: 'Specialist revolving drum mixers from 6m³ to 12m³ capacities, evaluated on drum wear, hydraulic system, and chassis.',
      image: '/images/specialiti05.png',
      to: '/truck-types/concrete-mixer-trucks',
    },
    {
      title: 'Multilift & Hook Loaders',
      text: 'Container lifting and hook loader mechanisms for recycling, demolition, and municipal skip collection.',
      image: '/images/specialiti03.png',
      to: '/truck-types/multilift-hook-lift-trucks',
    },
    {
      title: 'Liquid & Fuel Tankers',
      text: 'Certified fuel, chemical, water, and food-grade stainless steel liquid transport tankers with pump equipment.',
      image: '/images/specialiti06.png',
      to: '/truck-types/refrigerated-trucks',
    },
    {
      title: 'Municipal & Refuse Trucks',
      text: 'Refuse collection vehicles, street sweepers, and vacuum road service vehicles with complex hydraulic bodies.',
      image: '/images/truck08.png',
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
    title: 'Condition & Mileage',
    text: 'Mechanical state, engine health, service history, cab interior, tyres and structural state all play a direct role in determining maximum market value.',
  },
  {
    title: 'Market Demand',
    text: 'Current supply and demand trends across Spain and European secondary markets for your specific vehicle configuration and bodywork.',
  },
  {
    title: 'Complete Documentation',
    text: 'Having technical inspection records (ITV), registration certificates and maintenance logs ready guarantees the fastest transfer and best valuation.',
  },
];

// Straightforward steps
const STRAIGHTFORWARD_STEPS = [
  {
    title: 'Enter Your Truck Details',
    text: 'Fill in our quick online form with your truck’s make, model, year, mileage and photos in just two minutes.',
  },
  {
    title: 'Receive a Fair Offer',
    text: 'Our appraisal specialists review the data and present a transparent, competitive offer promptly.',
  },
  {
    title: 'Payment & Free Collection',
    text: 'Accept our offer and we arrange convenient nationwide collection and transfer payment promptly.',
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
  const [activeTab, setActiveTab] = useState<'rigid' | 'articulated' | 'special'>('rigid');

  return (
    <>
      {/* 1. Hero */}
      <Hero
        badge="Commercial truck buyers"
        title="We Buy All Types of Trucks"
        text="From rigid vehicles to articulated tractor units, refrigerated bodies to construction tippers - we purchase commercial vehicles of every type, size and age across Spain."
        image="/images/home-hero-banner.png"
        primary={{ label: 'Sell Your Truck', to: '#valuation' }}
        checks={['All Makes & Models', 'Fair Market Valuation', 'Free Nationwide Collection']}
      />

      {/* 2. Split Section: Every Truck Has Its Own Category */}
      <section className="section-y">
        <div className="container-x grid items-center gap-8 lg:grid-cols-2 lg:gap-[53px]">
          <div className="overflow-hidden rounded-2xl">
            <Img
              src="/images/valuationpage-about.png"
              alt="Every truck has its own category"
              className="w-full h-auto rounded-2xl"
              imgClassName="w-full object-cover rounded-2xl"
            />
          </div>
          <div className="flex flex-col items-start gap-4">
            <Badge>Vehicle categories</Badge>
            <h2 className="text-2xl font-medium leading-tight text-brand-navy sm:text-[40px] xl:leading-[52px]">
              Every Truck Has Its Own Category
            </h2>
            <p className="text-base leading-relaxed text-[#3B3F45]">
              From regional haulage and urban delivery to heavy-duty construction and specialised transport, each truck category serves a distinct operational purpose.
            </p>
            <p className="text-base leading-relaxed text-[#3B3F45]">
              Whether you operate a single commercial vehicle or an entire mixed fleet, our appraisal team understands the unique technical specifications, chassis types, and equipment value of every category.
            </p>
            <CtaButton cta={{ label: 'Sell Your Truck', to: '#valuation' }} className="mt-2" />
          </div>
        </div>
      </section>

      {/* 3. Explore the Types of Trucks We Buy (Tabs) */}
      <section className="section-y bg-slate-50/70">
        <div className="container-x">
          <SectionHeading
            badge="Types we buy"
            title="Explore the Types of Trucks We Buy"
            subtitle="Discover the wide range of commercial configurations we appraise and purchase every day."
          />

          {/* Interactive Tabs */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={() => setActiveTab('rigid')}
              className={`rounded-full px-6 py-3 text-sm sm:text-base font-semibold transition-all cursor-pointer ${
                activeTab === 'rigid'
                  ? 'bg-brand-orange text-white shadow-md'
                  : 'border border-[#E7E7E8] bg-white text-[#3B3F45] hover:border-brand-orange hover:text-brand-orange'
              }`}
            >
              Rigid Trucks
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('articulated')}
              className={`rounded-full px-6 py-3 text-sm sm:text-base font-semibold transition-all cursor-pointer ${
                activeTab === 'articulated'
                  ? 'bg-brand-orange text-white shadow-md'
                  : 'border border-[#E7E7E8] bg-white text-[#3B3F45] hover:border-brand-orange hover:text-brand-orange'
              }`}
            >
              Articulated Trucks
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('special')}
              className={`rounded-full px-6 py-3 text-sm sm:text-base font-semibold transition-all cursor-pointer ${
                activeTab === 'special'
                  ? 'bg-brand-orange text-white shadow-md'
                  : 'border border-[#E7E7E8] bg-white text-[#3B3F45] hover:border-brand-orange hover:text-brand-orange'
              }`}
            >
              Special Purpose Trucks
            </button>
          </div>

          {/* Cards for active tab */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TAB_DATA[activeTab].map((card) => (
              <div
                key={card.title}
                className="flex flex-col justify-between rounded-[16px] border border-[#E7E7E8] bg-white p-4 sm:p-5 transition-all hover:shadow-lg hover:border-brand-orange/40"
              >
                <div>
                  <div className="overflow-hidden rounded-[12px] h-[180px] w-full bg-slate-100">
                    <Img
                      src={card.image}
                      alt={card.title}
                      className="h-full w-full"
                      imgClassName="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <h3 className="mt-4 text-base sm:text-lg font-bold text-brand-navy-dark leading-snug">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#6C6F73]">
                    {card.text}
                  </p>
                </div>
                <div className="mt-5 border-t border-slate-100 pt-4">
                  <Link
                    to={card.to || '#valuation'}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-navy hover:text-brand-orange transition-colors"
                  >
                    <span>Sell this truck</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Explore Specific Truck Types (10 Grid) */}
      <section className="section-y">
        <div className="container-x">
          <SectionHeading
            badge="Browse all types"
            title="Explore Specific Truck Types"
            subtitle="Browse individual vehicle categories to see our comprehensive buying criteria."
          />
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {SPECIFIC_TRUCK_TYPES.map((t) => (
              <Link
                key={t.title}
                to={t.to}
                className="group flex flex-col justify-between rounded-[14px] border border-[#E7E7E8] bg-white p-3 sm:p-3.5 transition-all hover:border-brand-orange hover:shadow-md"
              >
                <div className="overflow-hidden rounded-[10px] aspect-[4/3] w-full bg-slate-100">
                  <Img
                    src={t.image}
                    alt={t.title}
                    className="h-full w-full"
                    imgClassName="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="mt-3 flex items-center justify-between gap-2">
                  <h3 className="text-xs sm:text-sm font-semibold text-brand-navy-dark group-hover:text-brand-orange transition-colors truncate">
                    {t.title}
                  </h3>
                  <ArrowRight className="h-4 w-4 shrink-0 text-slate-400 group-hover:text-brand-orange group-hover:translate-x-0.5 transition-all" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Banner: Need Help Identifying Your Truck? */}
      <CtaBanner
        badge="Expert assistance"
        title="Need Help Identifying Your Truck?"
        text="Not sure which category or body type your commercial vehicle falls into? Share your registration number and a few photos - our specialists will identify it and provide a valuation."
        primary={{ label: 'Get a Free Valuation', to: '#valuation' }}
        showCall
        checks={['Free Expert Valuation', 'Personalised Guidance', 'Nationwide Coverage']}
      />

      {/* 6. How Do We Value Your Truck? */}
      <section className="section-y">
        <div className="container-x grid items-center gap-8 lg:grid-cols-2 lg:gap-[53px]">
          <div className="overflow-hidden rounded-2xl">
            <Img
              src="/images/how-value-truck.png"
              alt="How we value your truck"
              className="w-full h-auto rounded-2xl"
              imgClassName="w-full object-cover rounded-2xl"
            />
          </div>
          <div className="flex flex-col items-start gap-4">
            <Badge>Valuation factors</Badge>
            <h2 className="text-2xl font-medium leading-tight text-brand-navy sm:text-[40px] xl:leading-[52px]">
              How Do We Value Your Truck?
            </h2>
            <p className="text-base leading-relaxed text-[#3B3F45]">
              When assessing your truck, our team considers key factors to arrive at an accurate and competitive market valuation.
            </p>
            <div className="mt-4 flex flex-col gap-4 w-full">
              {VALUATION_FACTORS.map((f, i) => (
                <div
                  key={f.title}
                  className="flex items-start gap-4 rounded-[14px] border border-[#E7E7E8] bg-white p-4 sm:p-5 transition-all hover:border-brand-orange/40 hover:shadow-sm"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-orange text-white font-bold text-sm sm:text-base">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-brand-navy-dark leading-snug">
                      {f.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-[#6C6F73]">
                      {f.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Selling Your Truck Can Be Straightforward (3 Steps) */}
      <section className="section-y bg-surface">
        <div className="container-x">
          <SectionHeading
            badge="Selling process"
            title="Selling Your Truck Can Be Straightforward"
            subtitle="From initial enquiry to handover, we make every step simple and transparent."
          />
          <div className="relative mt-10 grid gap-[24px] md:grid-cols-3">
            {STRAIGHTFORWARD_STEPS.map((s, i) => (
              <div key={s.title} className="relative flex flex-col items-center text-center">
                {i < 2 && (
                  <div
                    aria-hidden
                    className="absolute left-[calc(50%+29px)] top-[29px] -translate-y-1/2 hidden md:block h-[1.5px] w-[calc(100%-34px)] overflow-hidden"
                    style={{
                      background: 'linear-gradient(90deg, #F17612 0%, #F17612 48%, #E7E7E8 52%, #E7E7E8 100%)',
                    }}
                  />
                )}
                <span className="relative z-10 flex h-[58px] w-[58px] items-center justify-center rounded-[12px] border border-[#E7E7E8] bg-white text-brand-orange font-bold text-base">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-5 sm:mt-[25px] text-lg font-medium text-brand-navy-dark sm:text-xl">
                  {s.title}
                </h3>
                <p className="mt-[15px] max-w-[420px] text-sm leading-relaxed text-[#3B3F45] sm:text-base">
                  {s.text}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <CtaButton cta={{ label: 'Start Your Valuation', to: '#valuation' }} />
          </div>
        </div>
      </section>

      {/* 8. Valuation Form */}
      <ValuationForm />

      {/* 9. Testimonials */}
      <Testimonials />

      {/* 10. FAQs */}
      <Faq items={FAQ_ITEMS} />

      {/* 11. Final CTA */}
      <FinalCta />
    </>
  );
}
