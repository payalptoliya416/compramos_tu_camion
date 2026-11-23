import { Link } from 'react-router-dom';
import SectionHeading from '@/components/ui/SectionHeading';
import Img from '@/components/ui/Img';
import CtaButton from '@/components/ui/CtaButton';
import { CATEGORIES } from '@/data/site';

interface Props {
  badge?: string;
  title?: string;
  subtitle?: string;
  /** Optional header button on the right (home page). */
  action?: { label: string; to: string };
  band?: boolean;
}

/** 4 x 2 grid of image tiles. */
export default function TruckCategories({
  badge = 'Explore our categories',
  title = 'We Buy Different Types of Trucks',
  subtitle,
  action,
  band,
}: Props) {
  const body = (
    <section className="section-y">
      <div className="container-x">
        {action ? (
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading badge={badge} title={title} subtitle={subtitle} align="left" />
            <CtaButton cta={action} />
          </div>
        ) : (
          <SectionHeading badge={badge} title={title} subtitle={subtitle} />
        )}
        <ul className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {CATEGORIES.map((c) => (
            <li key={c.title}>
              <Link to={c.to} className="group relative block aspect-[4/3] overflow-hidden rounded-xl">
                <Img src={c.image} alt={c.title} className="h-full w-full" imgClassName="transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
                  <h3 className="text-sm font-semibold text-white sm:text-base">{c.title}</h3>
                  <p className="mt-0.5 hidden text-[11px] leading-snug text-white/70 sm:line-clamp-2 sm:block">{c.text}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
  return band ? <div className="mx-2 rounded-3xl bg-surface sm:mx-3">{body}</div> : body;
}
