import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { IMG } from '@/data/images';
import Hero from '@/components/sections/Hero';
import SplitSection from '@/components/sections/SplitSection';
import CtaBanner from '@/components/sections/CtaBanner';
import ValuationForm from '@/components/sections/ValuationForm';
import Testimonials from '@/components/sections/Testimonials';
import Faq from '@/components/sections/Faq';
import FinalCta from '@/components/sections/FinalCta';
import SectionHeading from '@/components/ui/SectionHeading';
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

const MODELS: { name: string; text: ReactNode; image: string }[] = [
  {
    name: 'Volvo FH 500',
    image: '/images/popuplar01.png',
    text: (
      <>
        It’s the undisputed leader on long-distance routes thanks to its reliability. Its fuel-saving system and 500 hp engine make it{' '}
        <strong className="font-semibold">the model we’re looking for most.</strong>
      </>
    ),
  },
  {
    name: 'Mercedes Actros',
    image: '/images/popuplar02.png',
    text: (
      <>
        This range stands out for its cutting-edge technology, optimized aerodynamics, and driver assistance systems. These are large vehicles with guaranteed resale value, and{' '}
        <strong className="font-semibold">we assure you of a highly profitable price .</strong>
      </>
    ),
  },
  {
    name: 'Scania V8',
    image: '/images/popuplar03.png',
    text: (
      <>
        The legendary V8 engine is unique for its extreme power. Its exclusivity and performance under demanding conditions ensure that our{' '}
        <strong className="font-semibold">valuation is always high.</strong>
      </>
    ),
  },
  {
    name: 'DAF XF',
    image: '/images/popuplar04.png',
    text: (
      <>
        <strong className="font-semibold">A highly valued range.</strong> The spaciousness of its cab is its biggest competitive advantage. The most sought-after models for valuation are the DAF XF 480 and the DAF XF 530.
      </>
    ),
  },
];

const EXPERIENCE_CARDS = [
  {
    icon: '/images/forget.svg',
    title: 'Immediate payment',
    text: 'Avoid unnecessary delays in your transaction. Once the offer is accepted, we make the payment immediately , providing instant liquidity.',
  },
  {
    icon: '/images/handshake-regula.svg',
    title: 'No Guarantees',
    text: "We buy your vehicle as is , outright . You won't have to provide any guarantees or worry about claims after the sale.",
  },
  {
    icon: '/images/clock.svg',
    title: 'Transfer within 24 hours',
    text: 'Our specialized agency handles the change of ownership quickly and efficiently. In less than a day , your truck will be legally transferred.',
  },
];

const FAQ: FaqItem[] = [
  {
    q: 'Which truck brands do you buy?',
    a: 'We consider trucks from a wide range of manufacturers, including Mercedes-Benz, Volvo, Scania, MAN, DAF, Renault Trucks and Iveco.',
  },
  {
    q: 'Do you buy older truck models?',
    a: 'Yes. We assess trucks of different ages, depending on their specifications, condition and market value.',
  },
  {
    q: 'Can I sell my truck regardless of its mileage?',
    a: 'Yes. Mileage is one of the factors considered during valuation, but it does not automatically exclude your truck from being assessed.',
  },
  {
    q: 'Do you buy trucks with different body types and configurations?',
    a: 'Yes. We consider different truck types and configurations, including tractor units, rigid trucks, tipper trucks, crane trucks, tankers and other commercial vehicles.',
  },
  {
    q: 'How do you value different truck makes and models?',
    a: 'We consider the manufacturer, model, year, mileage, specifications, condition and current market demand to assess each truck.',
  },
  {
    q: 'What information should I provide about my truck?',
    a: 'Please share the make, model, registration year, mileage, condition and recent photographs. Additional specifications can help us understand your vehicle better.',
  },
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
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-12 sm:w-24 lg:w-[400px] bg-gradient-to-r from-surface to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-12 sm:w-24 lg:w-[400px] bg-gradient-to-l from-surface to-transparent" />

            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              loop={true}
              spaceBetween={30}
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
                  <article className="flex h-full flex-col items-center justify-between rounded-[12px] bg-white py-5 sm:py-[35px] px-5 sm:px-[25px] text-center min-h-[402px]">
                    <div className="flex flex-col items-center">
                      <span className="flex h-[72px] w-[72px] sm:h-[110px] sm:w-[110px] items-center justify-center rounded-[14px] bg-[#F3F4F6]">
                        <img src={m.logo} alt={m.name} className="max-h-full max-w-full object-contain" />
                      </span>
                      <h3 className="mt-5 md:mt-[25px] text-lg sm:text-xl font-semibold text-brand-navy-dark leading-snug">{m.name}</h3>
                      <p className="mt-3 text-sm md:text-base leading-relaxed text-[#6B7280]">{m.text}</p>
                    </div>
                    <div className="mt-6 w-full">
                      <Link
                        to="/get-a-free-valuation"
                        className="inline-flex items-center justify-center rounded-full border border-brand-navy px-[30px] py-[16px] text-base leading-[16px] font-medium text-brand-navy transition-colors hover:bg-brand-navy hover:text-white"
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
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-[24px]">
            {MODELS.map((m) => (
              <div key={m.name} className="flex flex-col px-[22px] py-5 border border-[#E7E7E8] rounded-[12px]">
                <div className="overflow-hidden rounded-[12px] h-[220px] w-full">
                  <img src={m.image} alt={m.name} className="h-full w-full object-cover" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-[#082B54] sm:text-xl leading-snug">{m.name}</h3>
                <p className="mt-[15px] text-sm md:text-base leading-relaxed text-[#6B7280]">{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        badge="Ready to get started?"
        title="Need Help Valuing Your Truck?"
        text="Not sure where your truck fits? Share its details and our team can help you understand the next steps."
        showCall
      />

      {/* Extensive experience */}
      <section className="section-y">
        <div className="container-x">
          <SectionHeading
            badge="Extensive experience"
            title="Extensive experience in appraising used trucks"
          />
          <div className="mt-10 grid gap-[24px] sm:grid-cols-2 lg:grid-cols-3">
            {EXPERIENCE_CARDS.map(({ icon, title, text }) => (
              <article
                key={title}
                className="flex h-full flex-col rounded-[12px] bg-surface py-5 sm:py-[35px] px-5 sm:px-[25px]"
              >
                <span className="flex h-[50px] w-[50px] items-center justify-center rounded-[12px] bg-white">
                  <img src={icon} alt="" className="" />
                </span>
                <h3 className="mt-5 text-base sm:text-lg font-semibold text-brand-navy-dark leading-snug">{title}</h3>
                <p className="mt-[15px] text-sm md:text-base leading-relaxed text-[#3B3F45]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ValuationForm />
      <Testimonials />
      <Faq className="!pt-0" items={FAQ} />
      <FinalCta />
    </>
  );
}
