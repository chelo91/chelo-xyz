import i18n from 'sveltekit-i18n';

export const config = {
  fallbackLocale: 'es',
  initialLocale: 'es',
  locales: ['es', 'en'],
  translations: {
    es: {
      job: 'Desarrollador Fullstack', 
      about: 'Sobre mi', 
      desc_1: 'Soy desarrollador web full-stack de Uruguay, actualmente estoy trabajando para diversos proyectos de Latam.Especializado en tecnologías y lenguajescomo PHP, Node JS, HTML5, CSS3, Javascript, JQuery, Bootstrap, ResponsiveDesign y mucho más.', 
      desc_2: 'Me encanta emprender e innovar con soluciones y tecnologías nuevas siendoautodidacta.',
    },
    en: {
      job: 'Fullstack Developer', 
      about: 'About me', 
      desc_1: 'Soy desarrollador web full-stack de Uruguay, actualmente estoy trabajando para diversos proyectos de Latam.Especializado en tecnologías y lenguajescomo PHP, Node JS, HTML5, CSS3, Javascript, JQuery, Bootstrap, ResponsiveDesign y mucho más.', 
      desc_2: 'Me encanta emprender e innovar con soluciones y tecnologías nuevas siendoautodidacta.',    },
  },
}

export const { t, loading, locales, locale, loadTranslations } = new i18n(config);

loading.subscribe(($loading) => $loading && console.log('Loading translations...'));