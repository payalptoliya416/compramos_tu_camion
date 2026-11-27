import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function ScrollToTop() {
  const { pathname, hash, state } = useLocation();

  useEffect(() => {
    // If navigation comes with #valuation or click state, scroll smoothly to the valuation form
    if (hash === '#valuation' || (state as any)?.scrollToForm) {
      const scroll = () => {
        const el = document.getElementById('valuation');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      };

      scroll();
      const timers = [50, 150, 300, 500, 800].map((ms) => setTimeout(scroll, ms));
      return () => {
        timers.forEach(clearTimeout);
      };
    }

    // Direct URL navigation without hash/click -> always scroll to the top
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash, state]);

  return null;
}

function TranslationWatcher() {
  const { pathname } = useLocation();
  useEffect(() => {
    const lang = localStorage.getItem('site_lang') || 'es';
    if (lang === 'es') {
      const combo = document.querySelector<HTMLSelectElement>('.goog-te-combo');
      if (combo && combo.value !== 'es') {
        combo.value = 'es';
        combo.dispatchEvent(new Event('change'));
      }
    }
  }, [pathname]);
  return null;
}

export default function Layout() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <ScrollToTop />
      <TranslationWatcher />
      <Header />
      <main className="relative z-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
