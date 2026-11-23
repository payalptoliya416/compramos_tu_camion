import { CheckCircle2 } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

const ROWS = ['Payment security', 'DGT Management', 'Speed', 'Final price'];
const US = ['Cash only and guaranteed', 'We’ll take care of it.', 'Discharge (average of 48 hours)', 'Competitive'];
const DEALER = ['Safe', 'They do it.', 'Media (usually several weeks)', 'Low (commercial margins)'];
const PRIVATE = ['Risk of scams', 'It’s your responsibility', 'Leave (in some cases months)', 'Variable (subject to change)'];

function Cell({ children, light }: { children: string; light?: boolean }) {
  return (
    <div className={`flex h-12 items-center gap-2 px-3 text-xs ${light ? 'text-white' : 'text-slate-600'}`}>
      <CheckCircle2 className="h-4 w-4 shrink-0 text-green-500" /> {children}
    </div>
  );
}

/** Comparison: We buy your truck vs concessionaire vs individuals. Scrolls sideways on small screens. */
export default function ComparisonTable() {
  return (
    <section className="section-y">
      <div className="container-x">
        <SectionHeading badge="Why sell directly to us?" title="Why Is Selling Your Truck with Us the Smartest Choice?" />
        <div className="mt-10 overflow-x-auto pb-2">
          <div className="grid min-w-[760px] grid-cols-[1.1fr_1.3fr_1.3fr_1.3fr] items-start gap-2">
            {/* factors */}
            <div className="rounded-xl border border-slate-200 bg-white">
              <div className="rounded-t-xl bg-brand-navy px-4 py-3 text-xs font-semibold text-white">Factors</div>
              {ROWS.map((r) => (
                <div key={r} className="flex h-12 items-center border-t border-slate-100 px-4 text-xs text-slate-700">{r}</div>
              ))}
            </div>
            {/* us */}
            <div className="-mt-3 rounded-xl bg-brand-navy pb-3 shadow-lg">
              <div className="rounded-t-xl bg-brand-orange px-4 py-3 text-center text-xs font-semibold text-white">We Buy Your Truck</div>
              {US.map((r) => <Cell key={r} light>{r}</Cell>)}
            </div>
            {/* dealer */}
            <div className="rounded-xl border border-slate-100 bg-white">
              <div className="rounded-t-xl bg-slate-100 px-4 py-3 text-center text-xs font-medium text-slate-700">Concessionaire</div>
              {DEALER.map((r) => <Cell key={r}>{r}</Cell>)}
            </div>
            {/* individuals */}
            <div className="rounded-xl border border-slate-100 bg-white">
              <div className="rounded-t-xl bg-slate-100 px-4 py-3 text-center text-xs font-medium text-slate-700">Individuals</div>
              {PRIVATE.map((r) => <Cell key={r}>{r}</Cell>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
