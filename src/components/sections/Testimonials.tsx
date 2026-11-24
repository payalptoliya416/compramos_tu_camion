import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Star } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import 'swiper/css';
import 'swiper/css/pagination';

interface Props {
  title?: string;
  badge?: string;
  subtitle?: string;
}

const TESTIMONIAL_ITEMS = [
  {
    text: 'The process was very straightforward. They assessed my truck quickly and the whole transaction was handled professionally.',
    name: 'Annette Black',
    city: 'Valencia',
    avatar: '/images/client01.png',
  },
  {
    text: 'I needed to sell my refrigerated truck urgently and they helped me through the whole process efficiently. Highly recommended.',
    name: 'Leslie Alexander',
    city: 'Madrid',
    avatar: '/images/client02.png',
  },
  {
    text: 'The process is very simple. I entered the license plate number, received a valuation, and sold my car the same day. Very professional.',
    name: 'Esther Howard',
    city: 'Sevilla',
    avatar: '/images/client03.png',
  },
  {
    text: 'The process was very straightforward. They assessed my truck quickly and the whole transaction was handled professionally.',
    name: 'Annette Black',
    city: 'Valencia',
    avatar: '/images/client01.png',
  },
  {
    text: 'I needed to sell my refrigerated truck urgently and they helped me through the whole process efficiently. Highly recommended.',
    name: 'Leslie Alexander',
    city: 'Madrid',
    avatar: '/images/client02.png',
  },
  {
    text: 'The process is very simple. I entered the license plate number, received a valuation, and sold my car the same day. Very professional.',
    name: 'Esther Howard',
    city: 'Sevilla',
    avatar: '/images/client03.png',
  },
];

export default function Testimonials({
  badge = 'Customer reviews',
  title = 'What Our Customers Say About Us',
  subtitle = 'Discover what customers have to say about their experience selling a truck with our team.',
}: Props) {
  return (
    <section className="section-y">
      <div className="container-x">
        <SectionHeading badge={badge} title={title} subtitle={subtitle} />

        <div className="mt-10">
          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            spaceBetween={20}
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="testimonials-swiper !pb-2"
          >
            {TESTIMONIAL_ITEMS.map((t, idx) => (
              <SwiperSlide key={idx} className="!h-auto">
                <article className="flex h-full flex-col justify-between rounded-[18px] border border-[#E7E7E8] bg-white p-4 sm:p-5 transition-all hover:shadow-md">
                  <div>
                    {/* Top Row: Invert Quote Image & Stars */}
                    <div className="flex items-center justify-between">
                      <img src="/images/invert.png" alt="" className="h-6 w-auto object-contain" />
                      <div className="flex text-[#F5C30B]" aria-label="5 out of 5 stars">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-[#F5C30B] text-[#F5C30B]" />
                        ))}
                      </div>
                    </div>

                    {/* Review Text */}
                    <p className="mt-6 text-sm lg:text-base xl:text-lg leading-relaxed text-[#6C6F73] italic">
                      “{t.text}”
                    </p>
                  </div>

                  {/* Customer Info */}
                  <div className="mt-6 xl:mt-10 flex items-center gap-[10px]">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="h-11 w-11 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="text-base xl:text-xl text-[#092B55]">{t.name}</h4>
                      <p className="text-base xl:text-lg text-[#6C6F73]">{t.city}</p>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
