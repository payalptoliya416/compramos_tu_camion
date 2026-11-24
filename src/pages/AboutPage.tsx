import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import Hero from '@/components/sections/Hero';
import FeatureGrid from '@/components/sections/FeatureGrid';
import CtaBanner from '@/components/sections/CtaBanner';
import Steps from '@/components/sections/Steps';
import ValuationForm from '@/components/sections/ValuationForm';
import Testimonials from '@/components/sections/Testimonials';
import Faq from '@/components/sections/Faq';
import FinalCta from '@/components/sections/FinalCta';
import SectionHeading, { Badge } from '@/components/ui/SectionHeading';
import CtaButton from '@/components/ui/CtaButton';

const SPECIALITIES = [
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

const STATS = [
  { value: '20+', label: 'Years of Experience' },
  { value: 'Spain', label: 'Nationwide Coverage' },
  { value: 'All', label: 'Types of Trucks' },
];

export default function AboutPage() {
  return (
    <>
      <Hero
        badge="About CompramosTuCamión"
        title="Your Trusted Partner in Used Truck Buying"
        text="With over 20 years of experience, we help truck owners sell with confidence through transparent valuations and professional support."
        image="/images/about-banner.png"
        primary={{ label: 'Sell Your Truck' }}
        secondary={{ label: 'Explore Our Story', to: '/how-it-works' }}
        checks={['20+ Years of Experience', 'Transparent Valuation', 'Professional Support']}
      />

      <section className="section-y">
        <div className="container-x grid items-center gap-8 lg:grid-cols-2 lg:gap-[53px]">
          <div className="overflow-hidden rounded-2xl">
            <img
              src="/images/specialist-left.png"
              alt="Specialists in Buying Used Trucks Across Spain"
              className="h-auto w-full rounded-2xl object-cover"
            />
          </div>
          <div className="flex flex-col items-start gap-4">
            <Badge>Who we are</Badge>
            <h2 className="text-2xl font-medium leading-tight text-brand-navy sm:text-[40px] xl:leading-[60px]">
              Specialists in Buying Used Trucks Across Spain
            </h2>
            <p className="text-base leading-relaxed text-[#3B3F45]">
              CompramosTuCamión.es is a Spanish company specializing in the purchase of used trucks and commercial vehicles. With more than 20 years of experience in the industry, we help private sellers, transport professionals and businesses navigate the truck-selling process with greater confidence.
            </p>
            <p className="text-base leading-relaxed text-[#3B3F45]">
              Our team focuses on professional valuations, transparent communication and a straightforward process designed around each vehicle and seller’s needs.
            </p>
            <div className="my-1 flex flex-col items-start gap-3">
              {[
                'Professional truck valuations',
                'Clear and transparent communication',
                'Support with the selling process and documentation',
                'Experience with a wide range of commercial vehicles',
              ].map((pill) => (
                <div
                  key={pill}
                  className="inline-flex items-center gap-2.5 rounded-full bg-[#F3F3F3] px-4 py-2 text-sm text-[#3B3F45] sm:text-base"
                >
                  <img src="/images/fill-checkmark.svg" alt="" className="h-4 w-4 shrink-0 sm:h-5 sm:w-5" />
                  <span>{pill}</span>
                </div>
              ))}
            </div>
            <CtaButton cta={{ label: 'Get a Free Valuation' }} className="mt-2" />
          </div>
        </div>
      </section>

      <section className="section-y !pt-0">
        <div className="container-x grid items-center gap-8 lg:grid-cols-2 lg:gap-[53px]">
          <div className="overflow-hidden rounded-2xl lg:order-2">
            <img
              src="/images/makieing-truck.png"
              alt="Making Truck Selling Simpler and More Transparent"
              className="h-auto w-full rounded-2xl object-cover"
            />
          </div>
          <div className="flex flex-col items-start gap-[15px] lg:order-1">
            <Badge>Our story</Badge>
            <h2 className="text-2xl font-medium leading-tight text-brand-navy sm:text-[40px] xl:leading-[60px]">
              Making Truck Selling Simpler and More Transparent
            </h2>
            <p className="text-base leading-relaxed text-[#3B3F45]">
              Selling a used truck can involve complicated decisions, time-consuming paperwork and uncertainty about its value. CompramosTuCamión.es was built around a clear objective: to make the process more straightforward for truck owners, independent transport professionals and logistics companies.
            </p>
            <p className="text-base leading-relaxed text-[#3B3F45]">
              By combining industry experience with a professional valuation process, we aim to help sellers understand their options, receive a considered offer and move forward with greater clarity.
            </p>
            <div className="mt-[15px] grid w-full grid-cols-3 border-t border-[#E7E7E8] pt-[24px]">
              {STATS.map((s, idx) => (
                <div
                  key={s.label}
                  className={`relative ${
                    idx === 0
                      ? 'pr-3 sm:pr-6 after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:h-10 after:w-[1px] after:bg-[#E7E7E8]'
                      : idx === 1
                        ? 'px-3 sm:px-6 after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:h-10 after:w-[1px] after:bg-[#E7E7E8]'
                        : 'pl-3 sm:pl-6'
                  }`}
                >
                  <div className="text-base font-semibold text-[#F17612] sm:text-xl md:text-2xl">{s.value}</div>
                  <div className="mt-1 text-xs text-[#6C6F73] sm:text-sm">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FeatureGrid
        badge="Our expertise"
        title="Experience That Understands Every Truck"
        cols={4}
        staggered
        items={[
          { icon: '/images/diliver-orange.svg', title: 'Commercial Vehicle Knowledge', text: 'Experience evaluating different types of trucks and commercial vehicles across a wide range of makes, models and configurations.' },
          { icon: '/images/doc-blue-checkmark.svg', title: 'Professional Valuations', text: 'Consideration of vehicle condition, specifications, equipment and relevant market factors when assessing each truck.' },
          { icon: '/images/users-multiple.svg', title: 'Individual and Fleet Sales', text: 'Support for individual truck owners, transport professionals and businesses managing fleets of commercial vehicles.' },
          { icon: '/images/nationwide.svg', title: 'Nationwide Service', text: 'Support for truck sellers across Spain, subject to the company’s service and collection arrangements for each vehicle.' },
        ]}
        className=""
      />

      <CtaBanner
        badge="Our mission"
        title="Making Used Truck Sales Fairer, Simpler and More Transparent"
        text="Our mission is to provide a straightforward, transparent and professional way to sell used commercial vehicles throughout Spain, helping sellers navigate valuation, documentation and the next steps with confidence."
      />

      <FeatureGrid
        badge="What guides us"
        title="The Values Behind Every Truck Purchase"
        variant="surface"
        items={[
          { icon: '/images/eye01.svg', title: 'Absolute Transparency', text: 'We explain our valuation approach and communicate the relevant conditions clearly, helping sellers make informed decisions without surprises.' },
          { icon: '/images/speed.svg', title: 'Speed and Agility', text: 'We aim to make the process efficient, coordinating communication, valuation and the next steps without unnecessary complexity or delay.' },
          { icon: '/images/professional.svg', title: 'Technical Professionalism', text: 'We consider each vehicle’s configuration, condition and equipment when assessing its suitability and value, not just its age or sign.' },
        ]}
      />

      <Steps
        badge="Our process"
        title="A Clear Process from Valuation to Sale"
        className="!pt-0"
        steps={[
          { icon: '/images/doc.svg', title: 'Tell Us About Your Truck', text: 'Share the make, model, year, mileage, condition and relevant photographs of your vehicle.' },
          { icon: '/images/bilori.svg', title: 'Receive a Professional Assessment', text: 'Our team reviews the information provided to evaluate the vehicle and prepare a suitable offer.' },
          { icon: '/images/chat.svg', title: 'Review the Offer', text: 'Discuss the offer and clarify the conditions and next steps before making your decision.' },
          { icon: '/images/checkmark-blue-half.svg', title: 'Complete the Sale', text: 'Once the offer is accepted, coordinate the required documentation, payment and collection arrangements.' },
        ]}
      />

      {/* Specialities */}
      <section className="section-y !pt-0">
        <div className="container-x">
          <SectionHeading badge="Our specialities" title="Experience Across Different Types of Trucks" />
          <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 lg:gap-4">
            {SPECIALITIES.map((s) => (
              <li key={s.title}>
                <Link
                  to={s.to}
                  className="group block rounded-2xl border border-[#E7E7E8] bg-white p-2.5 sm:p-3 transition-shadow hover:shadow-md"
                >
                  <div className="overflow-hidden rounded-xl">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-2.5 flex items-center justify-between gap-2 px-1 pb-0.5">
                    <span className="text-xs sm:text-sm font-semibold text-brand-navy-dark">
                      {s.title}
                    </span>
                    <ChevronRight className="h-4 w-4 shrink-0 text-brand-navy-dark" />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ValuationForm />
      <Testimonials />
      <Faq />
      <FinalCta />
    </>
  );
}
