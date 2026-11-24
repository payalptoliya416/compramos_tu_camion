import { useState } from 'react';
import { Minus, Plus } from 'lucide-react';
import type { FaqItem } from '@/types';
import { Badge } from '@/components/ui/SectionHeading';
import { FAQ_DEFAULT } from '@/data/site';

interface Props {
  items?: FaqItem[];
  title?: string;
  className?: string;
}

/** Left title + right accordion. First item open by default. */
export default function Faq({ items = FAQ_DEFAULT, title = 'Frequently Asked Questions About Selling Trucks', className = '' }: Props) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className={`section-y ${className}`.trim()}>
      <div className="container-x grid gap-8 lg:grid-cols-[1fr_1.9fr] lg:gap-[64px]">
        <div className="flex flex-col items-start gap-3">
          <Badge>FAQs</Badge>
          <h2 className="text-2xl font-medium leading-tight text-brand-navy sm:text-[42px] sm:leading-[52px]">{title}</h2>
          <p className="max-w-md text-base leading-relaxed text-[#3B3F45]">
            Can’t find the answer you’re looking for? Our team is available to answer any questions about selling your truck.
          </p>
        </div>

        <div className="divide-y divide-[#E7E7E8] border-y border-[#E7E7E8]">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <div key={it.q}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left text-base xl:leading-[16px] font-medium text-[#3B3F45] cursor-pointer"
                >
                  {it.q}
                  {isOpen ? <Minus className="h-4 w-4 shrink-0 text-[#F17612]" /> : <Plus className="h-4 w-4 shrink-0 text-[#9D9FA2]" />}
                </button>
                {isOpen && <p className="pb-5 text-sm leading-relaxed text-[#6C6F73]">{it.a}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
