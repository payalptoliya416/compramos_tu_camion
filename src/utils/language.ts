export type SupportedLanguage = 'es' | 'en';

export const LANGUAGE_EVENT = 'site_language_changed';

export function getStoredLanguage(): SupportedLanguage {
  if (typeof window === 'undefined') return 'es';
  const stored = localStorage.getItem('site_lang');
  return stored === 'en' ? 'en' : 'es';
}

export function clearGoogleTranslateCookie() {
  if (typeof document === 'undefined') return;
  const hostname = window.location.hostname;
  const domains = ['', hostname, '.' + hostname];
  const paths = ['/', ''];

  domains.forEach((domain) => {
    paths.forEach((path) => {
      const d = domain ? `; domain=${domain}` : '';
      const p = path ? `; path=${path}` : '';
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC${d}${p};`;
    });
  });
}

export function setLanguageCookie(lang: SupportedLanguage) {
  if (lang === 'en') {
    clearGoogleTranslateCookie();
    return;
  }
  const cookieVal = '/en/es';
  document.cookie = `googtrans=${cookieVal}; path=/;`;
  if (
    typeof window !== 'undefined' &&
    window.location.hostname !== 'localhost' &&
    window.location.hostname !== '127.0.0.1'
  ) {
    document.cookie = `googtrans=${cookieVal}; domain=${window.location.hostname}; path=/;`;
    document.cookie = `googtrans=${cookieVal}; domain=.${window.location.hostname}; path=/;`;
  }
}

export function changeLanguage(lang: SupportedLanguage) {
  try {
    localStorage.setItem('site_lang', lang);
  } catch (e) {
    console.error('Failed to set localStorage', e);
  }

  if (lang === 'en') {
    clearGoogleTranslateCookie();
    const combo = document.querySelector<HTMLSelectElement>('.goog-te-combo');
    if (combo) {
      combo.value = '';
      combo.dispatchEvent(new Event('change'));
    }
  } else {
    setLanguageCookie(lang);
    const combo = document.querySelector<HTMLSelectElement>('.goog-te-combo');
    if (combo) {
      combo.value = 'es';
      combo.dispatchEvent(new Event('change'));
    }
  }

  // Dispatch custom event for UI components to update immediately
  window.dispatchEvent(new CustomEvent(LANGUAGE_EVENT, { detail: lang }));

  // Quick reload to guarantee clean, 100% original text rendering
  setTimeout(() => {
    window.location.reload();
  }, 100);
}
