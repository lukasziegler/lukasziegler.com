import { ui, defaultLang, type Lang } from './ui';

export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split('/');
  if (first === 'de') return 'de';
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/** Prefix a root-relative path with the locale (no prefix for the default language). */
export function localizePath(path: string, lang: Lang): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return lang === defaultLang ? clean : `/${lang}${clean}`;
}

/** Return the same page's path in the other language (mirrored URL structure). */
export function alternatePath(pathname: string, target: Lang): string {
  const stripped = pathname.replace(/^\/de(\/|$)/, '/');
  return target === defaultLang ? stripped : `/de${stripped}`.replace(/\/\/+/g, '/');
}
