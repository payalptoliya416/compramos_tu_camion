import { Clock, FileText, ShieldOff } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { IMG } from '@/data/images';
import Hero from '@/components/sections/Hero';
import SplitSection from '@/components/sections/SplitSection';
import CtaBanner from '@/components/sections/CtaBanner';
import FeatureGrid from '@/components/sections/FeatureGrid';
import ValuationForm from '@/components/sections/ValuationForm';
import Testimonials from '@/components/sections/Testimonials';
import Faq from '@/components/sections/Faq';
import FinalCta from '@/components/sections/FinalCta';
import SectionHeading from '@/components/ui/SectionHeading';
import Img from '@/components/ui/Img';
import type { FaqItem } from '@/types';
import 'swiper/css';

const MAKES = [
  {
    logo: '/images/logo05.png',
    name: 'MAN',
    text: 'We analyse the strength of its chassis and engine efficiency to provide you with an appraisal that reflects its true capabilities.',
    cta: 'Selling MAN truck',
  },
  {
    logo: '/images/logo07.png',
    name: 'Renault Trucks',
    text: 'Their balance between cost and performance makes their acquisition our priority. A trusted pillar across the Spanish transport sector.',
    cta: 'Selling Renault truck',
  },
  {
    logo: '/images/logo04.png',
    name: 'DAF',
    text: "DAF's comfort and fuel efficiency are highly valuable assets. Share your vehicle's details with our team to understand its valuation.",
    cta: 'Explore Models',
  },
  {
    logo: '/images/logo03.png',
    name: 'Volvo',
    text: 'We value its innovative efficiency technology, ensuring you get a competitive offer.',
    cta: 'Explore Models',
  },
  {
    logo: '/images/logo01.png',
    name: 'Mercedes-Benz',
    text: 'Renowned for cutting-edge engineering, fuel efficiency, and high resale value across European transport routes.',
    cta: 'Selling Mercedes truck',
  },
  {
    logo: '/images/logo02.png',
    name: 'Scania',
    text: 'Famous for legendary V8 power, driver comfort, and reliability under the most demanding transport conditions.',
    cta: 'Selling Scania truck',
  },
  {
    logo: '/images/logo06.png',
    name: 'IVECO',
    text: 'A practical, robust, and versatile choice offering high payload capacity and cost-effective performance.',
    cta: 'Explore Models',
  },
];

const MODELS = [
  { name: 'Volvo FH 500', text: 'It’s the undisputed leader on long-distance routes thanks to its reliability, fuel-saving system and 500 hp engine make it the model we’re looking for most.', image: IMG.modelVolvo },
  { name: 'Mercedes Actros', text: 'This range stands out for its cutting-edge technology, optimized aerodynamics, and driver assistance systems. These are large vehicles with guaranteed resale value, and we assure you of a highly profitable price.', image: IMG.modelActros },
  { name: 'Scania V8', text: 'The legendary V8 engine is unique for its extreme power. Its exclusivity and performance under demanding conditions mean that our valuation is always high.', image: IMG.modelScania },
  { name: 'DAF XF', text: 'A highly valued range. The spaciousness of its cab is its biggest competitive advantage. The most sought-after models for valuation are the DAF XF 480 and the DAF XF 530.', image: IMG.modelDaf },
];

const FAQ: FaqItem[] = [
  { q: 'Which truck brands do you buy?', a: 'We consider trucks from a wide range of manufacturers, including Mercedes-Benz, Volvo, Scania, MAN, DAF, Renault Trucks and Iveco.' },
  { q: 'Do you buy older truck models?', a: 'Yes. We assess each truck individually based on its specifications, condition and market demand.' },
  { q: 'Can I sell my truck regardless of its mileage?', a: 'Yes. Mileage is one of several factors considered in the valuation.' },
  { q: 'Do you buy trucks with different body types and configurations?', a: 'Yes. We buy tractor units, rigid trucks, refrigerated trucks, tippers and more.' },
  { q: 'How do you value different truck makes and models?', a: 'We review specifications, condition, mileage and current market demand for the specific make and model.' },
  { q: 'What information should I provide about my truck?', a: 'The make, model, registration year, mileage, transmission and body type, plus photos where possible.' },
];

export default function MakeModelPage() {
  return (
    <>
      <Hero
        badge="Truck brands & models"
        title="Sell Your Truck by Make and Model"
        text="Find your truck's make and model, and get expert guidance for a fair valuation."
        image="/images/make-modal-banner.png"
        primary={{ label: 'Get a Free Valuation' }}
        checks={['All Truck Brands', 'Expert Valuation', 'Easy Selling Process']}
      />

      <SplitSection
        reverse
        badge="Truck valuation by brand"
        title="Find the Right Starting Point for Your Truck"
        paragraphs={['Every truck has its own characteristics. The make, model, registration year, mileage, condition and configuration can all help inform its valuation.']}
        image={IMG.brandsRenault}
        cta={{ label: 'Request a Valuation' }}
      />

      {/* Brands */}
      <div className="mx-2 rounded-3xl bg-surface sm:mx-3">
        <section className="section-y">
          <div className="container-x">
            <SectionHeading badge="Explore truck brands" title="Find Your Truck Manufacturer" />
          </div>
          <div className="relative mt-10 px-4 sm:px-6">
            {/* Blur/fade gradients on both sides */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-12 sm:w-24 lg:w-36 bg-gradient-to-r from-surface to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-12 sm:w-24 lg:w-36 bg-gradient-to-l from-surface to-transparent" />

            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              loop={true}
              spaceBetween={24}
              slidesPerView={1.2}
              breakpoints={{
                480: { slidesPerView: 1.5, spaceBetween: 20 },
                640: { slidesPerView: 2.2, spaceBetween: 24 },
                1024: { slidesPerView: 3.2, spaceBetween: 24 },
                1280: { slidesPerView: 4, spaceBetween: 24 },
              }}
              className="!py-2"
            >
              {MAKES.map((m) => (
                <SwiperSlide key={m.name} className="h-auto">
                  <article className="flex h-full flex-col items-center justify-between rounded-[16px] bg-white p-6 sm:p-[30px] text-center shadow-sm min-h-[380px]">
                    <div className="flex flex-col items-center">
                      <span className="flex h-[72px] w-[72px] sm:h-[80px] sm:w-[80px] items-center justify-center rounded-[14px] bg-[#F8F9FA] border border-[#E7E7E8] p-3">
                        <img src={m.logo} alt={m.name} className="max-h-full max-w-full object-contain" />
                      </span>
                      <h3 className="mt-5 text-lg sm:text-xl font-bold text-brand-navy-dark leading-snug">{m.name}</h3>
                      <p className="mt-3 text-sm md:text-base leading-relaxed text-[#3B3F45]">{m.text}</p>
                    </div>
                    <div className="mt-6 w-full">
                      <Link
                        to="/get-a-free-valuation"
                        className="inline-flex items-center justify-center rounded-full border border-brand-navy px-6 py-2.5 text-sm font-medium text-brand-navy transition-colors hover:bg-brand-navy hover:text-white"
                      >
                        {m.cta}
                      </Link>
                    </div>
                  </article>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      </div>

      {/* Popular models */}
      <section className="section-y">
        <div className="container-x">
          <SectionHeading badge="Popular models" title="The ranges and models we search for most" />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {MODELS.map((m) => (
              <li key={m.name} className="overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm">
                <Img src={m.image} alt={m.name} className="aspect-[4/3]" />
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-brand-navy-dark">{m.name}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-500">{m.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBanner
        badge="Ready to get started?"
        title="Need Help Valuing Your Truck?"
        text="Not sure where your truck fits? Share its details and our team can help you understand the next steps."
        showCall
      />

      <FeatureGrid
        badge="Extensive experience"
        title="Extensive experience in appraising used trucks"
        variant="surface"
        items={[
          { icon: FileText, title: 'Immediate payment', text: 'Avoid unnecessary delays in your transaction. Once the offer is accepted, we make the payment immediately, providing instant liquidity.' },
          { icon: ShieldOff, title: 'No Guarantees', text: 'We buy your vehicle as is, outright. You won’t have to provide any guarantees or worry about claims after the sale.' },
          { icon: Clock, title: 'Transfer within 24 hours', text: 'Our specialized agency handles the change of ownership quickly and efficiently. In less than a day, your truck will be legally transferred.' },
        ]}
      />

      <ValuationForm />
      <Testimonials />
      <Faq items={FAQ} />
      <FinalCta />
    </>
  );
}
