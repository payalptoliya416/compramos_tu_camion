import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';
import { FOOTER_COLS, SITE } from '@/data/site';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="on-dark relative z-0 mx-2 mb-2 rounded-3xl bg-[#0A0F16] text-white sm:mx-3 sm:mb-3">
      <div className="container-x pb-6 pt-24 sm:pt-[230px]">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div className="flex max-w-xl flex-col gap-4">
            <Logo variant="footer" />
            <p className="text-sm md:text-base leading-relaxed text-[#E7E7E8]">{SITE.about}</p>
          </div>

          {FOOTER_COLS.map((col) => (
            <div key={col.title}>
              <h3 className="mb-[25px] text-base md:text-lg leading-[18px] font-medium">{col.title}</h3>
              <ul className="space-y-3 sm:space-y-5 text-sm md:text-base text-[#E7E7E8]">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link to={l.to} className="hover:text-brand-orange">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="mb-[25px]  text-base md:text-lg leading-[18px] font-medium">Contact</h3>
            <ul className="space-y-3 sm:space-y-5 text-sm sm:text-base text-[#E7E7E8]">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                <a href={SITE.phoneHref} className="hover:text-brand-orange">{SITE.phone}</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0" />
                <a href={`mailto:${SITE.email}`} className="break-all hover:text-brand-orange">{SITE.email}</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{SITE.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-[30px] flex flex-col gap-3 border-t border-[#3B3F45] pt-6 text-sm text-[#E7E7E8] sm:flex-row sm:items-center sm:justify-between">
          <p className='text-center sm:text-left'>© {new Date().getFullYear()} Compramos Tu Camion. All rights reserved.</p>
          <div className="flex gap-3 lg:gap-6 justify-center sm:justify-normal flex-wrap">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Legal Notice</a>
            <a href="#" className="hover:text-white">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
