import SectionHeading from '@/components/ui/SectionHeading';
import { BRANDS } from '@/data/site';

interface Props {
  badge?: string;
  title?: string;
  subtitle?: string;
  band?: boolean;
}

/** Manufacturer row. Replace the text with real logo images when exported. */
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
        <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
          {BRANDS.map((b) => (
            <li
              key={b}
              className="flex h-20 items-center justify-center rounded-xl border border-slate-100 bg-white px-3 text-center font-heading text-sm font-semibold tracking-wide text-slate-500 shadow-sm"
            >
              {b}
            </li>
          ))}
        </ul>
        <div className="mt-5 flex justify-center gap-1.5" aria-hidden>
          <span className="h-1.5 w-5 rounded-full bg-brand-orange" />
          {[0, 1, 2].map((i) => <span key={i} className="h-1.5 w-1.5 rounded-full bg-slate-300" />)}
        </div>
      </div>
    </section>
  );
  return band ? <div className="mx-2 rounded-3xl bg-surface sm:mx-3">{body}</div> : body;
}
