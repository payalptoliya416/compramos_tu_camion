import { useState, type FormEvent } from 'react';
import { Badge } from '@/components/ui/SectionHeading';

interface Props {
  badge?: string;
  title?: string;
  text?: string;
}

const POINTS = ['Fair and transparent truck valuation', 'Quick collection across Spain', 'We handle the paperwork for you'];
const YEARS = Array.from({ length: 25 }, (_, i) => String(2025 - i));

const field =
  'w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-xs text-slate-700 placeholder:text-slate-400 focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange';

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-1.5 text-[11px] font-medium text-brand-navy">
      <span>{label}<span className="text-red-500">*</span></span>
      {children}
    </label>
  );
}

/** Blue "Fill out our form" section with the 2-step valuation form. */
export default function ValuationForm({
  badge = 'Request your offer',
  title = 'Fill Out Our Form And Receive An Appraisal In Minutes!',
  text = 'Get A Fair Offer For Your Truck With Our Quick And Simple Valuation Process. Share A Few Details About Your Vehicle, And Our Team Will Assess Its Value And Guide You Through The Next Steps. Selling Your Truck Is Easy, Transparent, And Hassle-Free.',
}: Props) {
  const [step, setStep] = useState<1 | 2 | 3>(1);

  const next = (e: FormEvent) => {
    e.preventDefault();
    setStep((s) => (s === 1 ? 2 : 3));
  };

  return (
    <section id="valuation" className="mx-2 sm:mx-3">
      <div className="relative overflow-hidden rounded-3xl bg-brand-navy">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,rgba(255,255,255,0.08),transparent_60%)]" aria-hidden />
        <div className="container-x relative grid items-center gap-8 py-12 sm:py-16 lg:grid-cols-2 lg:gap-14">
          <div className="flex flex-col items-start gap-4 text-white">
            <Badge light>{badge}</Badge>
            <h2 className="text-2xl font-medium leading-tight sm:text-[40px] sm:leading-[60px]">{title}</h2>
            <p className="text-base leading-relaxed text-[#E7E7E8]">{text}</p>
            <ul className="mt-2 flex flex-col gap-3">
              {POINTS.map((p) => (
                <li key={p} className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs">
                  <img src="/images/fill-checkmark.svg" alt="" className="h-4 w-4 shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-5 shadow-xl sm:p-7 lg:max-w-none">
            <div className="mb-4 flex items-start justify-between">
              <div>
                <span className="text-[10px] font-medium uppercase tracking-wider text-brand-orange">
                  • {step === 3 ? 'Done' : `Step ${step}`}
                </span>
                <h3 className="mt-1 text-base font-semibold text-brand-navy">
                  {step === 1 ? 'Truck Details' : step === 2 ? 'Your Contact Details' : 'Thank you!'}
                </h3>
              </div>
              <div className="flex gap-1.5" aria-hidden>
                <span className="h-1.5 w-5 rounded-full bg-brand-orange" />
                <span className={`h-1.5 w-5 rounded-full ${step > 1 ? 'bg-brand-orange' : 'bg-slate-200'}`} />
              </div>
            </div>

            {step === 3 ? (
              <p className="py-8 text-center text-sm text-slate-500">
                We received your details. Our team will contact you shortly with your valuation.
              </p>
            ) : (
              <form onSubmit={next} className="grid gap-4 sm:grid-cols-2">
                {step === 1 ? (
                  <>
                    <Field label="Make"><input required className={field} placeholder="Enter truck brand (e.g., Volvo, Scania)" /></Field>
                    <Field label="Model"><input required className={field} placeholder="Enter truck model (e.g., FH 500, R450)" /></Field>
                    <Field label="Registration Year">
                      <select required className={field} defaultValue="">
                        <option value="" disabled>e.g., 2022</option>
                        {YEARS.map((y) => <option key={y}>{y}</option>)}
                      </select>
                    </Field>
                    <Field label="Mileage (km)"><input required inputMode="numeric" className={field} placeholder="e.g., 150,000 km" /></Field>
                    <Field label="Transmission">
                      <select required className={field} defaultValue="">
                        <option value="" disabled>Select option</option>
                        <option>Manual</option>
                        <option>Automatic</option>
                      </select>
                    </Field>
                    <Field label="Basculante (Tipper)">
                      <select required className={field} defaultValue="">
                        <option value="" disabled>Select option</option>
                        <option>Yes</option>
                        <option>No</option>
                      </select>
                    </Field>
                  </>
                ) : (
                  <>
                    <Field label="Full name"><input required className={field} placeholder="Your name" /></Field>
                    <Field label="Phone"><input required type="tel" className={field} placeholder="+34 600 000 000" /></Field>
                    <div className="sm:col-span-2">
                      <Field label="Email"><input required type="email" className={field} placeholder="you@example.com" /></Field>
                    </div>
                  </>
                )}
                <div className="flex justify-center pt-2 sm:col-span-2">
                  <button type="submit" className="btn-primary min-w-36">
                    {step === 1 ? 'Next Step' : 'Get my valuation'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
