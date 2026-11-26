import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAV } from '@/data/site';
import Logo from './Logo';

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  const isThankYou = pathname === '/thank-you';

  return (
    <>
      <header
        className={`absolute inset-x-0 z-40 ${
          isThankYou
            ? 'top-4 lg:top-5 px-4 lg:px-5'
            : 'top-3.5 px-3.5 sm:top-10 sm:px-6 lg:px-10'
        }`}
      >
        <div className={`relative mx-auto w-full rounded-2xl sm:rounded-[20px] px-3 py-2.5 sm:px-[30px] sm:py-[25px] ${isThankYou ? 'bg-[#F3F3F3]' : 'bg-white'}`}>
          <div className="flex items-center justify-between gap-4">
            <Logo variant="header" />

            {/* Desktop Navigation - hidden on <= 1199px, visible on >= 1200px */}
            <nav
              className="hidden items-center gap-5 text-lg text-[#0A0F16] min-[1200px]:flex xl:gap-[30px]"
              aria-label="Main"
            >
              {NAV.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end
                  className={({ isActive }) =>
                    `transition-colors hover:text-brand-orange ${isActive ? 'text-brand-orange' : ''}`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <Link
                to="/get-a-free-valuation"
                className="btn-primary hidden !px-6 !py-3 text-sm font-medium sm:inline-flex md:text-base"
              >
                Get a free valuation
              </Link>
              {/* Hamburger Button - visible on <= 1199px, hidden on >= 1200px */}
              <button
                type="button"
                className="rounded-full p-2 text-brand-navy hover:bg-slate-100 min-[1200px]:hidden"
                aria-label="Toggle menu"
                aria-expanded={open}
                onClick={() => setOpen(true)}
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Backdrop for Left Sidebar */}
      <div
        className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity duration-300 min-[1200px]:hidden ${open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
          }`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* Left Sidebar Drawer */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-[300px] sm:w-[340px] max-w-[85vw] flex-col justify-between bg-white p-4 shadow-2xl transition-transform duration-300 ease-in-out min-[1200px]:hidden ${open ? 'translate-x-0' : '-translate-x-full'
          }`}
        aria-label="Mobile Navigation"
      >
        <div>
          <div className="flex items-center justify-between border-b border-slate-100 pb-5">
            <Logo variant="header" />
            <button
              type="button"
              className="rounded-full p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-800 transition-colors"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="mt-6 flex flex-col gap-2">
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-colors ${isActive
                    ? 'bg-brand-orange/10 font-semibold text-brand-orange'
                    : 'text-slate-800 hover:bg-slate-50 hover:text-brand-orange'
                  }`
                }
              >
                <span>{item.label}</span>
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="border-t border-slate-100 pt-5">
          <Link
            to="/get-a-free-valuation"
            onClick={() => setOpen(false)}
            className="btn-primary w-full text-center !py-3 text-sm font-semibold"
          >
            Get a free valuation
          </Link>
        </div>
      </aside>
    </>
  );
}
