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
  buttonVariant?: 'primary' | 'outline' | 'dark-outline';
}

export default function RecentPurchases({
  badge = 'Recent truck purchases',
  title = 'Truck Valuations and Purchases Across Spain',
  subtitle,
  band,
  buttonVariant = 'primary',
}: Props) {
  const body = (
    <section className="section-y">
      <div className="container-x">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between flex-wrap">
          <SectionHeading badge={badge} title={title} subtitle={subtitle} align="left" />
          <CtaButton
            cta={{ label: 'I Want to Sell My Truck', to: '/get-a-free-valuation' }}
            variant={buttonVariant}
          />
        </div>
        <ul className="mt-10 grid gap-4 sm:gap-[25px] sm:grid-cols-2 lg:grid-cols-4">
          {RECENT_PURCHASES.map((p) => (
            <li key={p.title} className="overflow-hidden rounded-[14px] border border-[#E7E7E8] bg-white">
              <div className="relative">
                <Img src={p.image} alt={p.title} className="aspect-[4/3] w-full" />
                <span className="absolute left-[10px] top-[10px] rounded-full bg-[#0A0F16] px-[10px] py-[6px] text-[10px] leading-[10px] text-white">{p.year}</span>
                <span className="absolute right-[10px] top-[10px] rounded-full bg-brand-orange px-[10px] py-[6px] text-[10px] leading-[10px] text-white">{p.tag}</span>
              </div>
              <div className="p-3 md:p-5">
                <p className="mb-[10px] text-xs leading-[12px] text-[#6C6F73]">{p.brand}</p>
                <h3 className="text-sm font-semibold leading-[15px] text-brand-navy-dark">{p.title}</h3>
                <p className="mt-1 flex items-center gap-1 text-xs text-[#6C6F73]">
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
