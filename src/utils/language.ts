export type SupportedLanguage = 'es' | 'en';

export const LANGUAGE_EVENT = 'site_language_changed';

export function getStoredLanguage(): SupportedLanguage {
  if (typeof window === 'undefined') return 'es';
  const stored = localStorage.getItem('site_lang');
  return stored === 'en' ? 'en' : 'es';
}

export function setLanguageCookie(lang: SupportedLanguage) {
  const cookieVal = lang === 'en' ? '/en/en' : '/en/es';
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

  setLanguageCookie(lang);

  // Dispatch custom event for UI components to update immediately
  window.dispatchEvent(new CustomEvent(LANGUAGE_EVENT, { detail: lang }));

  // Trigger Google Translate combo if already present in DOM
  const combo = document.querySelector<HTMLSelectElement>('.goog-te-combo');
  if (combo) {
    combo.value = lang;
    combo.dispatchEvent(new Event('change'));
  }

  // Quick reload to guarantee clean, flicker-free rendering of the target language
  setTimeout(() => {
    window.location.reload();
  }, 100);
}
