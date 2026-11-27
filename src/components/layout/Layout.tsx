import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (pathname === '/get-a-free-valuation' || hash === '#valuation') {
      const el = document.getElementById('valuation');
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 120);
        return;
      }
    }
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
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
