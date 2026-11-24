import { useState, useRef, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Badge } from '@/components/ui/SectionHeading';

interface Props {
  badge?: string;
  title?: string;
  text?: string;
}

const POINTS = ['Fair and transparent truck valuation', 'Quick collection across Spain', 'We handle the paperwork for you'];
const YEARS = Array.from({ length: 26 }, (_, i) => String(2025 - i));
const CITIES = [
  'Madrid',
  'Barcelona',
  'Valencia',
  'Sevilla',
  'Zaragoza',
  'Málaga',
  'Murcia',
  'Palma de Mallorca',
  'Las Palmas',
  'Bilbao',
  'Alicante',
  'Córdoba',
  'Valladolid',
  'Vigo',
  'Gijón',
  'Other',
];

const inputField =
  'w-full rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-xs sm:text-sm text-slate-700 placeholder:text-slate-400 focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange transition-colors';

const selectField =
  'w-full appearance-none rounded-xl border border-slate-200 bg-white px-3.5 py-3 pr-10 text-xs sm:text-sm text-slate-700 placeholder:text-slate-400 focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange bg-[url("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%2364748B%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22%2F%3E%3C%2Fsvg%3E")] bg-[length:14px_14px] bg-[right_14px_center] bg-no-repeat cursor-pointer transition-colors';

function Field({
  label,
  required,
  info,
  children,
}: {
  label: string;
  required?: boolean;
  info?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-1.5 text-xs font-semibold text-brand-navy">
      <span className="flex items-center gap-1">
        <span>{label}</span>
        {required && <span className="text-brand-orange">*</span>}
        {info && (
          <span
            title={info}
            className="inline-flex h-3.5 w-3.5 items-center justify-center rounded-full bg-slate-300 text-[10px] font-bold text-white cursor-help"
          >
            i
          </span>
        )}
      </span>
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
  const [step, setStep] = useState<1 | 2>(1);
  const [filesCount, setFilesCount] = useState<number>(0);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleNext = (e: FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    navigate('/thank-you');
  };

  return (
    <section id="valuation" className="mx-2 sm:mx-3">
      <div className="relative overflow-hidden rounded-3xl bg-brand-navy">
        <img
          src="/images/valuation-bg.png"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
          aria-hidden
        />
        <div className="container-x relative grid items-center gap-8 py-12 sm:py-16 lg:grid-cols-2 lg:gap-14">
          {/* Left Column: Info & Points */}
          <div className="flex flex-col items-start gap-4 text-white">
            <Badge light>{badge}</Badge>
            <h2 className="text-2xl font-medium leading-tight sm:text-[40px] sm:leading-[60px]">{title}</h2>
            <p className="text-base leading-relaxed text-[#E7E7E8]">{text}</p>
            <ul className="mt-2 flex flex-col items-start gap-3">
              {POINTS.map((p) => (
                <li
                  key={p}
                  className="inline-flex h-[48px] items-center gap-2 rounded-[30px] px-5 py-2 text-sm sm:text-base font-normal text-white bg-[#FFFFFF0D] border border-[#FFFFFF1A]"
                >
                  <img src="/images/fill-checkmark.svg" alt="" className="shrink-0" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Multi-Step Card */}
          <div className="mx-auto w-full max-w-xl rounded-3xl bg-white p-6 shadow-xl sm:p-8 lg:max-w-none">
            {/* Header: Badge & Indicator Pills */}
            <div className="mb-2 flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FFF1EB] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-orange">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
                STEP {step}
              </span>
              <div className="flex gap-2" aria-hidden>
                <span className={`h-2 w-7 rounded-full transition-colors ${step === 1 ? 'bg-brand-orange' : 'bg-slate-200'}`} />
                <span className={`h-2 w-7 rounded-full transition-colors ${step === 2 ? 'bg-brand-orange' : 'bg-slate-200'}`} />
              </div>
            </div>

            {/* Form Title */}
            <h3 className="mt-3 text-2xl font-bold text-brand-navy">
              {step === 1 ? 'Truck Details' : 'Contact Details'}
            </h3>

            {/* Form Steps */}
            {step === 1 ? (
              <form onSubmit={handleNext} className="mt-6 grid gap-4 sm:grid-cols-2">
                <Field label="Make" required>
                  <select required className={selectField} defaultValue="">
                    <option value="" disabled>Enter truck brand (e.g., Volvo, Scania)</option>
                    <option value="Volvo">Volvo</option>
                    <option value="Scania">Scania</option>
                    <option value="Mercedes-Benz">Mercedes-Benz</option>
                    <option value="MAN">MAN</option>
                    <option value="DAF">DAF</option>
                    <option value="Iveco">Iveco</option>
                    <option value="Renault">Renault</option>
                    <option value="Other">Other</option>
                  </select>
                </Field>

                <Field label="Model" required>
                  <input required className={inputField} placeholder="Enter truck model (e.g., FH 500, R450)" />
                </Field>

                <Field label="Registration Year" required>
                  <select required className={selectField} defaultValue="">
                    <option value="" disabled>e.g., 2022</option>
                    {YEARS.map((y) => (
                      <option key={y} value={y}>{y}</option>
                    ))}
                  </select>
                </Field>

                <Field label="Mileage (km)" required>
                  <input required inputMode="numeric" className={inputField} placeholder="e.g., 150,000 km" />
                </Field>

                <Field label="Transmission" required>
                  <select required className={selectField} defaultValue="">
                    <option value="" disabled>Select option</option>
                    <option value="Manual">Manual</option>
                    <option value="Automatic">Automatic</option>
                  </select>
                </Field>

                <Field label="Basculante (Tipper)" required>
                  <select required className={selectField} defaultValue="">
                    <option value="" disabled>Select option</option>
                    <option value="Sí">Sí</option>
                    <option value="No">No</option>
                  </select>
                </Field>

                <div className="flex justify-center pt-4 sm:col-span-2">
                  <button
                    type="submit"
                    className="rounded-full bg-brand-orange px-10 py-3.5 text-sm sm:text-base font-semibold text-white shadow-md hover:bg-brand-orange-dark transition-colors"
                  >
                    Next Step
                  </button>
                </div>
              </form>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <Field label="Full name">
                    <input required className={inputField} placeholder="Enter your full name" />
                  </Field>
                </div>

                <Field label="Email">
                  <input required type="email" className={inputField} placeholder="Enter your email" />
                </Field>

                <Field label="Phone Number">
                  <input required type="tel" className={inputField} placeholder="Enter your phone number" />
                </Field>

                <Field label="City">
                  <select required className={selectField} defaultValue="">
                    <option value="" disabled>Select your city</option>
                    {CITIES.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </Field>

                <Field label="Minimum price" info="Estimated minimum price in EUR">
                  <input type="text" className={inputField} placeholder="Enter minimum price" />
                </Field>

                <div className="flex flex-col gap-1.5 text-xs font-semibold text-brand-navy">
                  <span>Photo upload</span>
                  <div
                    onClick={() => fileInputRef.current?.click()}
                    className="flex min-h-[148px] flex-1 cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-200 bg-[#F9FAFB] p-4 text-center transition-colors hover:border-brand-orange hover:bg-white"
                  >
                    <input
                      ref={fileInputRef}
                      type="file"
                      multiple
                      accept="image/png,image/jpeg"
                      className="hidden"
                      onChange={(e) => {
                        if (e.target.files && e.target.files.length > 0) {
                          setFilesCount(e.target.files.length);
                        }
                      }}
                    />
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-slate-400"
                    >
                      <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
                      <path d="M12 12v9" />
                      <path d="m16 16-4-4-4 4" />
                    </svg>
                    <p className="mt-2 text-xs font-semibold text-brand-navy">
                      {filesCount > 0 ? `${filesCount} file(s) selected` : 'Choose a file or drag & drop it here'}
                    </p>
                    <p className="text-[10px] text-slate-400">JPEG, and PNG formats, up to 50MB</p>
                    <button
                      type="button"
                      className="mt-2 rounded-full border border-brand-orange px-4 py-1 text-xs font-medium text-brand-orange hover:bg-brand-orange/5"
                    >
                      Browse File
                    </button>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5 text-xs font-semibold text-brand-navy">
                  <span>Any damages?</span>
                  <textarea
                    rows={5}
                    className="w-full flex-1 resize-none rounded-xl border border-slate-200 bg-white p-3 text-xs sm:text-sm text-slate-700 placeholder:text-slate-400 focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange min-h-[148px]"
                    placeholder="Provide an explanation for the damage."
                  />
                </div>

                <div className="flex justify-center pt-4 sm:col-span-2">
                  <button
                    type="submit"
                    className="rounded-full bg-brand-orange px-10 py-3.5 text-sm sm:text-base font-semibold text-white shadow-md hover:bg-brand-orange-dark transition-colors"
                  >
                    Request My Valuation
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
