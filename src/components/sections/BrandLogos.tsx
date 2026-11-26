import { useState, useRef } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import SectionHeading from '@/components/ui/SectionHeading';
import 'swiper/css';

interface Props {
  badge?: string;
  title?: string;
  subtitle?: string;
  band?: boolean;
}

const BRAND_LOGOS = [
  { name: 'Mercedes-Benz', image: '/images/logo01.png' },
  { name: 'Scania', image: '/images/logo02.png' },
  { name: 'Volvo', image: '/images/logo03.png' },
  { name: 'DAF', image: '/images/logo04.png' },
  { name: 'MAN', image: '/images/logo05.png' },
  { name: 'IVECO', image: '/images/logo06.png' },
  { name: 'Renault', image: '/images/logo07.png' },
];

// Duplicate items so Swiper loop has enough slides with 7 per view
const SLIDES = [...BRAND_LOGOS, ...BRAND_LOGOS, ...BRAND_LOGOS];

export default function BrandLogos({
  badge = 'Manufacturers',
  title = 'We Buy Trucks From Leading Manufacturers',
  subtitle,
  band,
}: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);
  const DOTS_COUNT = 4;

  const body = (
    <section className="section-y">
      <div className="container-x">
        <SectionHeading badge={badge} title={title} subtitle={subtitle} />

        <div className="mt-8">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={2}
            spaceBetween={16}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={(swiper) => {
              setActiveIndex(Math.floor((swiper.realIndex % 7) / 2) % DOTS_COUNT);
            }}
            breakpoints={{
              480: { slidesPerView: 3, spaceBetween: 16 },
              640: { slidesPerView: 4, spaceBetween: 18 },
              768: { slidesPerView: 5, spaceBetween: 20 },
              1024: { slidesPerView: 7, spaceBetween: 20 },
            }}
            className="brand-logos-swiper"
          >
            {SLIDES.map((b, i) => (
              <SwiperSlide key={`${b.name}-${i}`}>
                <div className="flex h-24 sm:h-[142px] items-center justify-center rounded-[12px] border border-[#E7E7E8] bg-white p-4 transition-all">
                  <img
                    src={b.image}
                    alt={b.name}
                    className=""
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Clean 4 pagination dots matching Figma */}
          <div className="mt-5 flex items-center justify-center gap-1.5">
            {Array.from({ length: DOTS_COUNT }).map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => {
                  setActiveIndex(i);
                  swiperRef.current?.slideToLoop(i * 2);
                }}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  activeIndex === i
                    ? 'w-6 bg-[#F17612]'
                    : 'w-2 bg-[#CBD5E1] hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );

  return band ? <div className="mx-2 rounded-3xl bg-surface sm:mx-3">{body}</div> : body;
}
