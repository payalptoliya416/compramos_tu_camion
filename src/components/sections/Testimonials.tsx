import { useRef, useState } from 'react';
import { Quote, Star } from 'lucide-react';
import { TESTIMONIALS } from '@/data/site';
import SectionHeading from '@/components/ui/SectionHeading';
import Img from '@/components/ui/Img';

interface Props {
  title?: string;
  badge?: string;
  subtitle?: string;
}

/** Grid on desktop, swipeable snap carousel with dots on mobile. */
export default function Testimonials({
  badge = 'Trusted by truck owners',
  title = 'What Our Customers Say About Us',
  subtitle,
}: Props) {
  const ref = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(0);

  const onScroll = () => {
    const el = ref.current;
    if (!el) return;
    setActive(Math.round(el.scrollLeft / (el.scrollWidth / TESTIMONIALS.length)));
  };

  return (
    <section className="section-y">
      <div className="container-x">
        <SectionHeading badge={badge} title={title} subtitle={subtitle} />
        <ul
          ref={ref}
          onScroll={onScroll}
          className="-mx-4 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 [scrollbar-width:none] md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0 [&::-webkit-scrollbar]:hidden"
        >
          {TESTIMONIALS.map((t) => (
            <li
              key={t.name}
              className="flex w-[85%] shrink-0 snap-center flex-col gap-4 rounded-xl border border-slate-100 bg-white p-5 shadow-sm sm:w-[60%] md:w-auto"
            >
              <div className="flex items-center justify-between">
                <Quote className="h-7 w-7 text-slate-200" />
                <div className="flex gap-0.5 text-yellow-400" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-current" />)}
                </div>
              </div>
              <p className="flex-1 text-xs italic leading-relaxed text-slate-500 sm:text-[13px]">“{t.text}”</p>
              <div className="flex items-center gap-3">
                <Img src={t.avatar} alt={t.name} className="h-9 w-9 rounded-full" />
                <div className="leading-tight">
                  <p className="text-sm font-medium text-brand-navy-dark">{t.name}</p>
                  <p className="text-xs text-slate-400">{t.city}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-4 flex justify-center gap-1.5 md:hidden" aria-hidden>
          {TESTIMONIALS.map((t, i) => (
            <span key={t.name} className={`h-1.5 rounded-full transition-all ${i === active ? 'w-5 bg-brand-orange' : 'w-1.5 bg-slate-300'}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
