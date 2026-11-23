import { Link } from 'react-router-dom';
import { ChevronRight, ClipboardList, Eye, MessageCircle, Search, CheckCircle2, Truck, UserCheck, Map, FileText, Zap, Award } from 'lucide-react';
import { IMG } from '@/data/images';
import Hero from '@/components/sections/Hero';
import SplitSection from '@/components/sections/SplitSection';
import FeatureGrid from '@/components/sections/FeatureGrid';
import CtaBanner from '@/components/sections/CtaBanner';
import Steps from '@/components/sections/Steps';
import ValuationForm from '@/components/sections/ValuationForm';
import Testimonials from '@/components/sections/Testimonials';
import Faq from '@/components/sections/Faq';
import FinalCta from '@/components/sections/FinalCta';
import SectionHeading from '@/components/ui/SectionHeading';
import Img from '@/components/ui/Img';

const SPECIALITIES = [
  { title: 'Crane Trucks', image: IMG.catCrane, to: '/truck-types/multilift-hook-lift-trucks' },
  { title: 'Dump Trucks', image: IMG.catTipper, to: '/truck-types/concrete-mixer-trucks' },
  { title: 'Multilift / Hook-Lift', image: IMG.multiliftBlue, to: '/truck-types/multilift-hook-lift-trucks' },
  { title: 'Cement Mixer Trucks', image: IMG.concreteBlue, to: '/truck-types/concrete-mixer-trucks' },
  { title: 'Tankers', image: IMG.catTanker, to: '/truck-types/refrigerated-trucks' },
  { title: 'Tractor Units', image: IMG.catTractor, to: '/truck-types/refrigerated-trucks' },
  { title: 'Refrigerated Trucks', image: IMG.catRefrigerated, to: '/truck-types/refrigerated-trucks' },
  { title: 'Tipper Trucks', image: IMG.catRigid, to: '/truck-types/concrete-mixer-trucks' },
  { title: 'Parcel Delivery Trucks', image: IMG.parcelMan, to: '/truck-types/parcel-delivery-trucks' },
  { title: '3,500 kg Light Trucks', image: IMG.light3500, to: '/truck-types/3500-kg-light-trucks' },
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
        badge="About ComprasTuCamión"
        title="Your Trusted Partner in Used Truck Buying"
        text="With over 20 years of experience, we help truck owners sell with confidence through transparent valuations and professional support."
        image={IMG.heroAbout}
        primary={{ label: 'Sell Your Truck' }}
        secondary={{ label: 'Explore Our Story', to: '/how-it-works' }}
        checks={['20+ Years of Experience', 'Transparent Valuation', 'Professional Support']}
      />

      <SplitSection
        badge="Who we are"
        title="Specialists in Buying Used Trucks Across Spain"
        paragraphs={[
          'ComprasTuCamión.es is a Spanish company specializing in the purchase of used trucks and commercial vehicles. With more than 20 years of experience in the industry, we help private sellers, transport professionals and businesses navigate the truck-selling process with greater confidence.',
          'Our team focuses on professional valuations, transparent communication and a straightforward process designed around each vehicle and seller’s needs.',
        ]}
        image={IMG.aboutTeam}
        pills={['Professional truck valuations', 'Clear and transparent communication', 'Support with the selling process and documentation', 'Experience with a wide range of commercial vehicles']}
        cta={{ label: 'Get a Free Valuation' }}
      />

      <SplitSection
        reverse
        badge="Our story"
        title="Making Truck Selling Simpler and More Transparent"
        paragraphs={[
          'Selling a used truck can involve complicated decisions, time-consuming paperwork and uncertainty about its value. ComprasTuCamión.es was built around a clear objective: to make the process more straightforward for truck owners, independent transport professionals and logistics companies.',
          'By combining industry experience with a professional valuation process, we help sellers understand their options, receive a considered offer and move forward with greater clarity.',
        ]}
        image={IMG.aboutTruck}
      >
        <dl className="mt-2 grid w-full grid-cols-3 gap-4 border-t border-slate-200 pt-5">
          {STATS.map((s) => (
            <div key={s.label}>
              <dt className="text-xl font-semibold text-brand-orange sm:text-2xl">{s.value}</dt>
              <dd className="text-[11px] text-slate-500">{s.label}</dd>
            </div>
          ))}
        </dl>
      </SplitSection>

      <FeatureGrid
        badge="Our expertise"
        title="Experience That Understands Every Truck"
        cols={4}
        items={[
          { icon: Truck, title: 'Commercial Vehicle Knowledge', text: 'Experience evaluating different types of trucks and commercial vehicles across a wide range of makes, models and configurations.' },
          { icon: FileText, title: 'Professional Valuations', text: 'Consideration of vehicle condition, specifications, equipment and relevant market factors when assessing each truck.' },
          { icon: UserCheck, title: 'Individual and Fleet Sales', text: 'Support for individual truck owners, transport professionals and businesses managing fleets of commercial vehicles.' },
          { icon: Map, title: 'Nationwide Service', text: 'Support for truck sellers across Spain, subject to the company’s service and collection arrangements for each vehicle.' },
        ]}
        className="!pt-4"
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
          { icon: Eye, title: 'Absolute Transparency', text: 'We explain our valuation approach and communicate the relevant conditions clearly, helping sellers make informed decisions without surprises.' },
          { icon: Zap, title: 'Speed and Agility', text: 'We aim to make the process efficient, coordinating communication, valuation and the next steps without unnecessary complexity or delay.' },
          { icon: Award, title: 'Technical Professionalism', text: 'We consider each vehicle’s configuration, condition and equipment when assessing its suitability and value, not just its age or sign.' },
        ]}
      />

      <Steps
        badge="Our process"
        title="A Clear Process from Valuation to Sale"
        steps={[
          { icon: ClipboardList, title: 'Tell Us About Your Truck', text: 'Share the make, model, year, mileage, condition and relevant photographs of your truck.' },
          { icon: Search, title: 'Receive a Professional Assessment', text: 'Our team reviews the information provided to evaluate the vehicle and prepare a suitable offer.' },
          { icon: MessageCircle, title: 'Review the Offer', text: 'Discuss the offer and clarify the conditions and next steps before making your decision.' },
          { icon: CheckCircle2, title: 'Complete the Sale', text: 'Once the offer is accepted, coordinate the required documentation, payment and collection arrangements.' },
        ]}
      />

      {/* Specialities */}
      <section className="pb-12 md:pb-16 lg:pb-20">
        <div className="container-x">
          <SectionHeading badge="Our specialities" title="Experience Across Different Types of Trucks" />
          <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {SPECIALITIES.map((s) => (
              <li key={s.title}>
                <Link to={s.to} className="group block overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm">
                  <Img src={s.image} alt={s.title} className="aspect-[4/3]" imgClassName="transition-transform duration-500 group-hover:scale-105" />
                  <div className="flex items-center justify-between gap-2 px-3 py-2.5 text-xs font-medium text-brand-navy-dark">
                    {s.title}
                    <ChevronRight className="h-3.5 w-3.5 shrink-0 text-slate-400" />
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
