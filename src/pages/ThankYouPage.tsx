import { Link } from 'react-router-dom';
import FinalCta from '@/components/sections/FinalCta';
import { SITE } from '@/data/site';

export default function ThankYouPage() {
  return (
    <main className="w-full overflow-hidden pt-28 sm:pt-36">
      <div className="container-x flex flex-col items-center text-center py-12 sm:py-20">
        {/* Scalloped Green Check Badge */}
        <div className="flex h-20 w-20 items-center justify-center">
          <svg width="68" height="68" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M 32.0,4.0 L 36.5,9.4 L 42.7,6.1 L 44.8,12.9 L 51.8,12.2 L 51.1,19.2 L 57.9,21.3 L 54.6,27.5 L 60.0,32.0 L 54.6,36.5 L 57.9,42.7 L 51.1,44.8 L 51.8,51.8 L 44.8,51.1 L 42.7,57.9 L 36.5,54.6 L 32.0,60.0 L 27.5,54.6 L 21.3,57.9 L 19.2,51.1 L 12.2,51.8 L 12.9,44.8 L 6.1,42.7 L 9.4,36.5 L 4.0,32.0 L 9.4,27.5 L 6.1,21.3 L 12.9,19.2 L 12.2,12.2 L 19.2,12.9 L 21.3,6.1 L 27.5,9.4 Z"
              fill="#00B074"
            />
            <path
              d="M22 32.5 L28.5 39 L42 24.5"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <h1 className="mt-6 text-2xl font-bold text-brand-navy sm:text-4xl">
          One Step Closer To Selling Your Truck!
        </h1>

        <p className="mt-3 max-w-xl text-center text-sm sm:text-base text-[#6C6F73] leading-relaxed">
          Your Truck Details Are Safely With Us. Our Team Will Review Your Information And Get Back To You With The Next Steps.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href={SITE.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-brand-orange px-8 py-3.5 text-sm font-semibold text-white shadow hover:bg-brand-orange-dark transition-colors"
          >
            Message on WhatsApp
          </a>
          <a
            href={SITE.phoneHref}
            className="rounded-full border border-slate-300 px-8 py-3.5 text-sm font-semibold text-brand-navy hover:bg-slate-50 transition-colors"
          >
            Call Our Team
          </a>
        </div>

        <div className="mt-6">
          <Link
            to="/"
            className="text-xs sm:text-sm font-medium text-brand-navy underline hover:text-brand-orange transition-colors"
          >
            Back To Home
          </Link>
        </div>
      </div>

      <FinalCta />
    </main>
  );
}
