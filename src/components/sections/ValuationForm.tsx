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

const getInputClass = (hasError?: boolean) =>
  `w-full rounded-[8px] border bg-white px-[15px] py-[15px] text-xs text-[#6B8098] placeholder:text-[#6B8098] focus:outline-none focus:ring-1 transition-colors ${
    hasError
      ? 'border-red-500 focus:border-red-500 focus:ring-red-500 bg-red-50/20'
      : 'border-[#E6E9ED] focus:border-brand-orange focus:ring-brand-orange'
  }`;

const getSelectClass = (hasError?: boolean) =>
  `w-full appearance-none rounded-[8px] border bg-white px-[15px] py-[15px] pr-10 text-xs text-[#6B8098] placeholder:text-slate-400 focus:outline-none focus:ring-1 bg-[url("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%2364748B%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22%2F%3E%3C%2Fsvg%3E")] bg-[length:14px_14px] bg-[right_14px_center] bg-no-repeat cursor-pointer transition-colors ${
    hasError
      ? 'border-red-500 focus:border-red-500 focus:ring-red-500 bg-red-50/20'
      : 'border-[#E6E9ED] focus:border-brand-orange focus:ring-brand-orange'
  }`;

function Field({
  label,
  required,
  info,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  info?: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5 text-xs font-medium text-[#082B54]">
      <span className="flex items-center gap-1">
        <span>{label}</span>
      {required && <span className="text-[#F17612]">*</span>}
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
      {error && <span className="text-[11px] font-normal text-red-500">{error}</span>}
    </div>
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

  const [formData, setFormData] = useState({
    // Step 1
    make: '',
    model: '',
    year: '',
    mileage: '',
    transmission: '',
    basculante: '',
    // Step 2
    fullName: '',
    email: '',
    phone: '',
    city: '',
    minPrice: '',
    damages: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const validateStep1 = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.make) newErrors.make = 'Please select a truck brand';
    if (!formData.model.trim()) newErrors.model = 'Please enter truck model';
    if (!formData.year) newErrors.year = 'Please select registration year';
    if (!formData.mileage.trim()) newErrors.mileage = 'Please enter mileage';
    if (!formData.transmission) newErrors.transmission = 'Please select transmission';
    if (!formData.basculante) newErrors.basculante = 'Please select an option';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Please enter your full name';
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Please enter your phone number';
    if (!formData.city) newErrors.city = 'Please select your city';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = (e: FormEvent) => {
    e.preventDefault();
    if (validateStep1()) {
      setStep(2);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validateStep2()) {
      navigate('/thank-you');
    }
  };

  return (
    <section id="valuation" className="px-3 sm:px-5">
      <div className="relative overflow-hidden rounded-3xl bg-brand-navy">
        <img
          src="/images/valuation-bg.png"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
          aria-hidden
        />
        <div className="container-x relative grid items-center gap-8 py-10 sm:py-16 lg:grid-cols-2 lg:gap-8 xl:gap-14">
          {/* Left Column: Info & Points */}
          <div className="flex flex-col items-start gap-4 text-white">
            <Badge light>{badge}</Badge>
            <h2 className="text-2xl font-medium leading-tight sm:text-[32px] sm:leading-[44px] xl:text-[40px] xl:leading-[56px]">{title}</h2>
            <p className="text-sm lg:text-base leading-relaxed text-[#E7E7E8]">{text}</p>
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
          <div className="mx-auto w-full max-w-xl rounded-[18px] bg-white py-8 px-3 sm:px-5 sm:py-[45px] lg:px-[26px] xl:py-[55px] xl:px-[30px] lg:max-w-none border-[6px] sm:border-[8px] xl:border-[10px] border-[#F3F3F3]">
            {/* Header: Badge & Indicator Pills */}
            <div className="mb-[15px] flex items-center justify-between flex-wrap">
              <button
                type="button"
                onClick={() => {
                  if (step === 2) setStep(1);
                }}
                className={`inline-flex items-center gap-1.5 rounded-full bg-[#F176120D] px-[15px] py-[10px] text-sm font-medium uppercase tracking-wider text-brand-orange transition-all ${
                  step === 2 ? 'cursor-pointer hover:bg-brand-orange/20' : ''
                }`}
                title={step === 2 ? 'Click to go back to Step 1' : undefined}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
                STEP {step}
              </button>

              {/* Clickable Step Indicator Pills */}
              <div className="flex items-center gap-2" aria-label="Form steps">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className={`h-[12px] w-[25px] rounded-full transition-all cursor-pointer ${
                    step === 1 ? 'bg-brand-orange' : 'bg-slate-200 hover:bg-slate-300'
                  }`}
                  title="Go to Step 1: Truck Details"
                  aria-label="Step 1"
                />
                <button
                  type="button"
                  onClick={() => {
                    if (validateStep1()) {
                      setStep(2);
                    }
                  }}
                  className={`h-[12px] w-[25px] rounded-full transition-all cursor-pointer ${
                    step === 2 ? 'bg-brand-orange' : 'bg-slate-200 hover:bg-slate-300'
                  }`}
                  title="Go to Step 2: Contact Details"
                  aria-label="Step 2"
                />
              </div>
            </div>

            {/* Form Title */}
            <div className="flex items-center justify-between flex-wrap">
              <h3 className="text-[26px] font-semibold text-[#092B55]">
                {step === 1 ? 'Truck Details' : 'Contact Details'}
              </h3>
              {step === 2 && (
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-xs font-semibold text-brand-orange hover:underline cursor-pointer"
                >
                  ← Back to Step 1
                </button>
              )}
            </div>

            {/* Form Steps */}
            {step === 1 ? (
              <form onSubmit={handleNext} noValidate className="mt-10 grid gap-5 sm:grid-cols-2">
                <Field label="Make" required error={errors.make}>
                  <select
                    value={formData.make}
                    onChange={(e) => handleChange('make', e.target.value)}
                    className={getSelectClass(Boolean(errors.make))}
                  >
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

                <Field label="Model" required error={errors.model}>
                  <input
                    type="text"
                    value={formData.model}
                    onChange={(e) => handleChange('model', e.target.value)}
                    className={getInputClass(Boolean(errors.model))}
                    placeholder="Enter truck model (e.g., FH 500, R450)"
                  />
                </Field>

                <Field label="Registration Year" required error={errors.year}>
                  <select
                    value={formData.year}
                    onChange={(e) => handleChange('year', e.target.value)}
                    className={getSelectClass(Boolean(errors.year))}
                  >
                    <option value="" disabled>e.g., 2022</option>
                    {YEARS.map((y) => (
                      <option key={y} value={y}>{y}</option>
                    ))}
                  </select>
                </Field>

                <Field label="Mileage (km)" required error={errors.mileage}>
                  <input
                    type="text"
                    inputMode="numeric"
                    value={formData.mileage}
                    onChange={(e) => handleChange('mileage', e.target.value)}
                    className={getInputClass(Boolean(errors.mileage))}
                    placeholder="e.g., 150,000 km"
                  />
                </Field>

                <Field label="Transmission" required error={errors.transmission}>
                  <select
                    value={formData.transmission}
                    onChange={(e) => handleChange('transmission', e.target.value)}
                    className={getSelectClass(Boolean(errors.transmission))}
                  >
                    <option value="" disabled>Select option</option>
                    <option value="Manual">Manual</option>
                    <option value="Automatic">Automatic</option>
                  </select>
                </Field>

                <Field label="Basculante (Tipper)" required error={errors.basculante}>
                  <select
                    value={formData.basculante}
                    onChange={(e) => handleChange('basculante', e.target.value)}
                    className={getSelectClass(Boolean(errors.basculante))}
                  >
                    <option value="" disabled>Select option</option>
                    <option value="Sí">Sí</option>
                    <option value="No">No</option>
                  </select>
                </Field>

                <div className="flex justify-center pt-2 sm:pt-[15px] sm:col-span-2">
                  <button
                    type="submit"
                    className="rounded-full bg-brand-orange px-6 lg:px-10 xl:px-[54px] py-4 text-sm sm:text-lg font-medium leading-[18px] text-white hover:bg-brand-orange-dark transition-colors cursor-pointer"
                  >
                    Next Step
                  </button>
                </div>
              </form>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="mt-6 grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <Field label="Full name" required error={errors.fullName}>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => handleChange('fullName', e.target.value)}
                      className={getInputClass(Boolean(errors.fullName))}
                      placeholder="Enter your full name"
                    />
                  </Field>
                </div>

                <Field label="Email" required error={errors.email}>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    className={getInputClass(Boolean(errors.email))}
                    placeholder="Enter your email"
                  />
                </Field>

                <Field label="Phone Number" required error={errors.phone}>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    className={getInputClass(Boolean(errors.phone))}
                    placeholder="Enter your phone number"
                  />
                </Field>

                <Field label="City" required error={errors.city}>
                  <select
                    value={formData.city}
                    onChange={(e) => handleChange('city', e.target.value)}
                    className={getSelectClass(Boolean(errors.city))}
                  >
                    <option value="" disabled>Select your city</option>
                    {CITIES.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </Field>

                <Field label="Minimum price" info="Estimated minimum price in EUR">
                  <input
                    type="text"
                    value={formData.minPrice}
                    onChange={(e) => handleChange('minPrice', e.target.value)}
                    className={getInputClass(false)}
                    placeholder="Enter minimum price"
                  />
                </Field>

                <div className="flex flex-col gap-1.5 text-xs font-semibold text-brand-navy">
                  <span>Photo upload</span>
                  <div className="flex flex-1 rounded-xl border border-[#E6E9ED] bg-white p-2.5 sm:p-3">
                    <div
                      onClick={() => fileInputRef.current?.click()}
                      className="flex min-h-[168px] w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-[#D1D5DB] bg-[#F9FAFB] p-5 text-center transition-colors hover:border-brand-orange hover:bg-white"
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
                        className="text-[#6C6F73]"
                      >
                        <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
                        <path d="M12 12v9" />
                        <path d="m16 16-4-4-4 4" />
                      </svg>
                      <p className="mt-[11px] text-xs font-semibold text-[#0A0F16]">
                        {filesCount > 0 ? `${filesCount} file(s) selected` : 'Choose a file or drag & drop it here'}
                      </p>
                      <p className="mt-1 text-[10px] text-[#9D9FA2]">JPEG, and PNG formats, up to 50MB</p>
                      <button
                        type="button"
                        className="mt-[15px] rounded-full border border-brand-orange px-5 py-2 text-xs font-medium text-brand-orange hover:bg-brand-orange/5"
                      >
                        Browse File
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5 text-xs font-semibold text-brand-navy">
                  <span>Any damages?</span>
                  <textarea
                    rows={5}
                    value={formData.damages}
                    onChange={(e) => handleChange('damages', e.target.value)}
                    className="w-full flex-1 resize-none rounded-xl border border-[#E6E9ED] bg-white p-[15px] text-xs text-[#6B8098] placeholder:text-[#6B8098] focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange min-h-[148px]"
                    placeholder="Provide an explanation for the damage."
                  />
                </div>

                <div className="flex justify-center pt-4 sm:col-span-2">
                  <button
                    type="submit"
                    className="rounded-full bg-brand-orange px-6 lg:px-10 xl:px-[54px] py-4 text-sm sm:text-lg leading-[18px] font-medium text-white hover:bg-brand-orange-dark transition-colors cursor-pointer"
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
