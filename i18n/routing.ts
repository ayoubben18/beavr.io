import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'fr'],

  // Used when no locale matches
  defaultLocale: 'en',

  // The locale prefix handling
  localePrefix: 'as-needed',

  // Pathnames for different routes
  pathnames: {
    // Static paths
    '/': '/',
    '/about': {
      en: '/about',
      fr: '/a-propos'
    },
    '/contact': {
      en: '/contact',
      fr: '/contact'
    },
    '/login': {
      en: '/login',
      fr: '/connexion'
    },
    '/register': {
      en: '/register',
      fr: '/inscription'
    },
    '/profile': {
      en: '/profile',
      fr: '/profil'
    },
    '/admin/dashboard': {
      en: '/admin/dashboard',
      fr: '/admin/tableau-de-bord'
    },
    '/admin/users': {
      en: '/admin/users',
      fr: '/admin/utilisateurs'
    },

    // Dynamic paths
    '/users/[id]': {
      en: '/users/[id]',
      fr: '/utilisateurs/[id]'
    }
  }
});