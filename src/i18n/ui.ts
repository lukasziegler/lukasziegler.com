export const languages = {
  en: 'English',
  de: 'Deutsch',
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';

export const social = [
  { name: 'Instagram', link: 'https://instagram.com/lukasziegler' },
  { name: 'LinkedIn', link: 'https://linkedin.com/in/lukasziegler' },
] as const;

export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.design': 'Design',
    'nav.sound': 'Sound',
    'nav.events': 'Events',
    'nav.more': 'More',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.imprint': 'Imprint',
    'nav.privacy': 'Privacy Policy',
    'nav.menu': 'Menu',
    'home.projectsTitle': 'Selected',
    'home.projectsTitleAccent': 'Work',
    'label.viewAll': 'View all',
    'label.upcomingEvents': 'Upcoming events',
    'label.pastEvents': 'Past events',
    'label.bookNow': 'Book now',
    'label.learnMore': 'Learn more',
    'label.readArticle': 'Read article',
    'label.noUpcomingEvents': 'No upcoming events at the moment — check back soon.',
    'label.noProjects': 'Case studies are in the works — check back soon.',
    'footer.tagline': 'Product Designer & Handpan Facilitator based in Salzburg.',
  },
  de: {
    'nav.home': 'Start',
    'nav.design': 'Design',
    'nav.sound': 'Sound',
    'nav.events': 'Veranstaltungen',
    'nav.more': 'Mehr',
    'nav.about': 'Über mich',
    'nav.contact': 'Kontakt',
    'nav.imprint': 'Impressum',
    'nav.privacy': 'Datenschutz',
    'nav.menu': 'Menü',
    'home.projectsTitle': 'Ausgewählte',
    'home.projectsTitleAccent': 'Arbeiten',
    'label.viewAll': 'Alle ansehen',
    'label.upcomingEvents': 'Kommende Veranstaltungen',
    'label.pastEvents': 'Vergangene Veranstaltungen',
    'label.bookNow': 'Jetzt buchen',
    'label.learnMore': 'Mehr erfahren',
    'label.readArticle': 'Artikel lesen',
    'label.noUpcomingEvents': 'Derzeit keine kommenden Veranstaltungen — schau bald wieder vorbei.',
    'label.noProjects': 'Case Studies sind in Arbeit — schau bald wieder vorbei.',
    'footer.tagline': 'Product Designer & Handpan Facilitator in Salzburg.',
  },
} as const;
