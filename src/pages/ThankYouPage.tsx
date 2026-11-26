import { Link } from 'react-router-dom';
import FinalCta from '@/components/sections/FinalCta';
import { SITE } from '@/data/site';

export default function ThankYouPage() {
  return (
    <main className="w-full overflow-hidden pt-28 sm:pt-32">
      <div className="container-x flex flex-col items-center text-center py-12 sm:py-[130px]">
        {/* Scalloped Green Check Badge */}
        <div className="flex h-20 w-20 items-center justify-center">
         <img
        src="/images/thankyou.png"
        alt="Thank You"
        className=""
      />
        </div>

        <h1 className="mt-[47px] text-2xl font-medium text-[#092B55] sm:text-[34px] xl:text-[40px]">
          One Step Closer To Selling Your Truck!
        </h1>

        <p className="mt-5 max-w-[804px] text-center text-sm sm:text-base text-[#6C6F73] leading-relaxed">
          Your Truck Details Are Safely With Us. Our Team Will Review Your Information And Get Back To You With The Next Steps.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href={SITE.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-brand-orange px-[30px] py-[16px] text-base sm:text-lg leading-[18px] font-medium text-white shadow hover:bg-brand-orange-dark transition-colors"
          >
            Message on WhatsApp
          </a>
          <a
            href={SITE.phoneHref}
            className="rounded-full border border-slate-300 px-[30px] py-[16px] text-base sm:text-lg leading-[18px] font-medium text-brand-navy hover:bg-slate-50 transition-colors"
          >
            Call Our Team
          </a>
        </div>

        <div className="mt-5">
          <Link
            to="/"
            className="text-base sm:text-lg font-medium text-brand-navy underline hover:text-brand-orange transition-colors"
          >
            Back To Home
          </Link>
        </div>
      </div>

      <FinalCta />
    </main>
  );
}
