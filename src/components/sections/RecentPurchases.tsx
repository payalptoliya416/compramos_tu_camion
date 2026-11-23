import { MapPin } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Img from '@/components/ui/Img';
import CtaButton from '@/components/ui/CtaButton';
import { RECENT_PURCHASES } from '@/data/site';

interface Props {
  badge?: string;
  title?: string;
  subtitle?: string;
  band?: boolean;
}

export default function RecentPurchases({
  badge = 'Recent truck purchases',
  title = 'Truck Valuations and Purchases Across Spain',
  subtitle,
  band,
}: Props) {
  const body = (
    <section className="section-y">
      <div className="container-x">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading badge={badge} title={title} subtitle={subtitle} align="left" />
          <CtaButton
            cta={{ label: 'I Want to Sell My Truck', to: '/get-a-free-valuation' }}
            className="!border !border-brand-navy-dark !bg-white !text-brand-navy-dark hover:!bg-slate-50"
          />
        </div>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {RECENT_PURCHASES.map((p) => (
            <li key={p.title} className="overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm">
              <div className="relative">
                <Img src={p.image} alt={p.title} className="aspect-[4/3] w-full" />
                <span className="absolute left-2 top-2 rounded bg-brand-navy-dark/80 px-2 py-0.5 text-[10px] text-white">{p.year}</span>
                <span className="absolute right-2 top-2 rounded bg-brand-orange px-2 py-0.5 text-[10px] text-white">{p.tag}</span>
              </div>
              <div className="p-3">
                <p className="text-[11px] text-slate-400">{p.brand}</p>
                <h3 className="text-sm font-semibold text-brand-navy-dark">{p.title}</h3>
                <p className="mt-1 flex items-center gap-1 text-[11px] text-slate-400">
                  <MapPin className="h-3 w-3 text-brand-orange" /> {p.place}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
  return band ? <div className="mx-2 rounded-3xl bg-surface sm:mx-3">{body}</div> : body;
}
