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

  return (
    <header className="absolute inset-x-0 top-4 z-40 sm:top-6">
      <div className="container-x">
        <div className="relative rounded-full bg-white px-4 py-2.5 shadow-xl sm:px-6 sm:py-3">
          <div className="flex items-center justify-between gap-4">
            <Logo />

            <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 lg:flex xl:gap-8" aria-label="Main">
              {NAV.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end
                  className={({ isActive }) =>
                    `transition-colors hover:text-brand-orange ${isActive ? 'text-brand-orange font-semibold' : ''}`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <Link to="/get-a-free-valuation" className="btn-primary hidden !px-5 !py-2.5 text-xs font-semibold sm:inline-flex">
                Get a free valuation
              </Link>
              <button
                type="button"
                className="rounded-full p-2 text-brand-navy hover:bg-slate-100 lg:hidden"
                aria-label="Toggle menu"
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
              >
                {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {open && (
            <div className="mt-3 flex flex-col gap-1 rounded-2xl border border-slate-100 bg-white p-4 shadow-lg lg:hidden">
              {NAV.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end
                  className={({ isActive }) =>
                    `rounded-lg px-3 py-2 text-sm font-medium transition-colors ${isActive ? 'bg-brand-orange/10 text-brand-orange' : 'text-slate-700 hover:bg-slate-50'}`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <Link to="/get-a-free-valuation" className="btn-primary mt-2 text-center sm:hidden">
                Get a free valuation
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
