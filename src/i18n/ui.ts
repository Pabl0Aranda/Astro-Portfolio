export const languages = {
  es: 'Español',
  en: 'English',
};

export const defaultLang = 'es';

export const ui = {
  es: {
    'nav.home': 'Home',
    'nav.formacion': 'Formación',
    'nav.habilidades': 'Habilidades',
    'nav.proyectos': 'Proyectos',
    'nav.experiencia': 'Experiencia',
    'nav.contacto': 'Contacto',
    'nav.blog': 'Blog',
  },
  en: {
    'nav.home': 'Home',
    'nav.formacion': 'Education',
    'nav.habilidades': 'Skills',
    'nav.proyectos': 'Projects',
    'nav.experiencia': 'Experience',
    'nav.contacto': 'Contact',
    'nav.blog': 'Blog',
  },
} as const;

// Utilidad para extraer el idioma de la URL actual
export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

// Utilidad para traducir
export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}