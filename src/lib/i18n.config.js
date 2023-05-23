import i18n from 'sveltekit-i18n';

export const config = {
  fallbackLocale: 'es',
  initialLocale: 'es',
  locales: ['es', 'en'],
  translations: {
    es: {
      job: 'Desarrollador Fullstack',
      about: 'Sobre mi',
      desc: '<p><strong>¡Hola!</strong> Soy un desarrollador web full-stack de Uruguay con experiencia en diversos proyectos en toda Latinoamérica. Estoy especializado en una amplia gama de tecnologías y lenguajes, como PHP, Node.js, HTML5, CSS3, JavaScript, jQuery, Bootstrap y Responsive Design, entre otros.</p><p>Mi pasión por emprender e innovar me impulsa a buscar constantemente soluciones y estar al tanto de las últimas tecnologías. Soy autodidacta, lo que significa que siempre estoy aprendiendo y adaptándome a los avances del campo.</p>',
    },
    en: {
      job: 'Fullstack Developer',
      about: 'About me',
      desc: '<p><strong>Hello!</strong> I am a full-stack web developer from Uruguay with experience working on various projects throughout Latin America. I specialize in a wide range of technologies and languages, including PHP, Node.js, HTML5, CSS3, JavaScript, jQuery, Bootstrap, and Responsive Design, among others.</p><p>My passion for entrepreneurship and innovation drives me to constantly seek solutions and stay up-to-date with the latest technologies. I am self-taught, which means I am always learning and adapting to advancements in the field.</p>',
    },
  },
}

export const { t, loading, locales, locale, loadTranslations } = new i18n(config);

loading.subscribe(($loading) => $loading && console.log('Loading translations...'));