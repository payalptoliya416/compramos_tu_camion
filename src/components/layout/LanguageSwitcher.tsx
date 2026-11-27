import { useEffect, useRef, useState } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import { changeLanguage, getStoredLanguage, LANGUAGE_EVENT, type SupportedLanguage } from '@/utils/language';

function SpainFlag({ className = 'w-4 h-3 rounded-xs shrink-0' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 750 500" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="750" height="125" fill="#C60B1E" />
      <rect y="125" width="750" height="250" fill="#FFC400" />
      <rect y="375" width="750" height="125" fill="#C60B1E" />
    </svg>
  );
}

function UKFlag({ className = 'w-4 h-3 rounded-xs shrink-0' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 60 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <clipPath id="uk-flag-clip-dropdown">
        <rect width="60" height="30" rx="2" />
      </clipPath>
      <g clipPath="url(#uk-flag-clip-dropdown)">
        <rect width="60" height="30" fill="#012169" />
        <path d="M0 0L60 30M60 0L0 30" stroke="#FFF" strokeWidth="6" />
        <path d="M0 0L60 30M60 0L0 30" stroke="#C8102E" strokeWidth="4" />
        <path d="M30 0V30M0 15H60" stroke="#FFF" strokeWidth="10" />
        <path d="M30 0V30M0 15H60" stroke="#C8102E" strokeWidth="6" />
      </g>
    </svg>
  );
}

const LANGUAGES: { code: SupportedLanguage; label: string; short: string; Flag: typeof SpainFlag }[] = [
  { code: 'es', label: 'Español', short: 'ES', Flag: SpainFlag },
  { code: 'en', label: 'English', short: 'EN', Flag: UKFlag },
];

export default function LanguageSwitcher({
  isMobile = false,
  className = '',
}: {
  isMobile?: boolean;
  className?: string;
}) {
  const [currentLang, setCurrentLang] = useState<SupportedLanguage>('es');
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setCurrentLang(getStoredLanguage());

    const handleLanguageChange = (e: Event) => {
      const customEvent = e as CustomEvent<SupportedLanguage>;
      if (customEvent.detail) {
        setCurrentLang(customEvent.detail);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    window.addEventListener(LANGUAGE_EVENT, handleLanguageChange);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener(LANGUAGE_EVENT, handleLanguageChange);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSelect = (lang: SupportedLanguage) => {
    setOpen(false);
    if (lang === currentLang) return;
    setCurrentLang(lang);
    changeLanguage(lang);
  };

  const currentOption = LANGUAGES.find((l) => l.code === currentLang) || LANGUAGES[0];
  const CurrentFlag = currentOption.Flag;

  return (
    <div
      ref={dropdownRef}
      className={`notranslate relative inline-block text-left ${className}`}
      translate="no"
    >
      {/* Dropdown Toggle Button */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className={`notranslate inline-flex items-center gap-1.5 rounded-full border border-[#E5E7EB] bg-white font-medium text-[#082B54] shadow-xs transition-all hover:border-brand-orange hover:bg-slate-50 cursor-pointer ${
          isMobile ? 'px-2.5 py-1.5 text-xs' : 'px-3 py-1.5 text-xs sm:text-sm'
        } ${open ? 'border-brand-orange ring-1 ring-brand-orange/30' : ''}`}
        aria-haspopup="true"
        aria-expanded={open}
        title="Change language / Cambiar idioma"
        translate="no"
      >
        <CurrentFlag />
        <span className="notranslate font-semibold" translate="no">
          {currentOption.short}
        </span>
        <ChevronDown
          className={`h-3.5 w-3.5 text-slate-400 transition-transform duration-200 ${
            open ? 'rotate-180 text-brand-orange' : ''
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div
          className="notranslate absolute right-0 z-50 mt-1.5 w-36 overflow-hidden rounded-xl border border-slate-100 bg-white p-1 shadow-lg ring-1 ring-black/5 animate-in fade-in slide-in-from-top-2 duration-150"
          translate="no"
        >
          {LANGUAGES.map((lang) => {
            const Flag = lang.Flag;
            const isSelected = currentLang === lang.code;
            return (
              <button
                key={lang.code}
                type="button"
                onClick={() => handleSelect(lang.code)}
                className={`notranslate flex w-full items-center justify-between rounded-lg px-2.5 py-2 text-xs font-medium transition-colors cursor-pointer ${
                  isSelected
                    ? 'bg-brand-orange/10 font-semibold text-brand-orange'
                    : 'text-[#4B5563] hover:bg-slate-50 hover:text-[#082B54]'
                }`}
                translate="no"
              >
                <div className="notranslate flex items-center gap-2" translate="no">
                  <Flag />
                  <span className="notranslate" translate="no">
                    {lang.label}
                  </span>
                </div>
                {isSelected && <Check className="h-3.5 w-3.5 text-brand-orange" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
