import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import SectionHeading from '@/components/ui/SectionHeading';
import 'swiper/css';
import 'swiper/css/pagination';

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
const SLIDES = [...BRAND_LOGOS];

export default function BrandLogos({
  badge = 'Manufacturers',
  title = 'We Buy Trucks From Leading Manufacturers',
  subtitle,
  band,
}: Props) {
  const body = (
    <section className="section-y">
      <div className="container-x">
        <SectionHeading badge={badge} title={title} subtitle={subtitle} />

        <div className="mt-8">
          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={2}
            spaceBetween={16}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              480: { slidesPerView: 3, spaceBetween: 16 },
              640: { slidesPerView: 4, spaceBetween: 18 },
              768: { slidesPerView: 5, spaceBetween: 20 },
              1024: { slidesPerView: 7, spaceBetween: 20 },
            }}
            className="brand-logos-swiper !pb-2"
          >
            {SLIDES.map((b, i) => (
              <SwiperSlide key={`${b.name}-${i}`}>
                <div className="flex h-24 sm:h-[142px] items-center justify-center rounded-[12px] border border-[#E7E7E8] bg-white p-4 transition-all hover:shadow-md">
                  <img
                    src={b.image}
                    alt={b.name}
                    className="max-h-12 sm:max-h-14 w-auto max-w-[85%] object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );

  return band ? <div className="mx-2 rounded-3xl bg-surface sm:mx-3">{body}</div> : body;
}
