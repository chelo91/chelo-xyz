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
      proyects: 'Proyectos',
      aboutMe: 'Sobre mi',
      proPersonalName: 'Chelo.xyz',
      proPersonalDesc: 'Portafolio personal',
      proBlogName: 'Carpincho.dev',
      proBlogDesc: 'Blog de programacion, creado con Astro, funcionando en Vercel',
      proNibiruName: 'Nibiru Services',
      proNibiruDesc: 'Sistema de importacion de productos para Woocommerce, consta de varias partes: <br/> - Importa productos de APIs externas <br/> - Brindar una API para que el plugin de Wordpress pueda importar los productos <br/> - Plugin de Wordpress para importar los productos <br/> Además de eso usa MariaDB para la base de datos y está funcionando en un VPS con Docker',
      proMedicName: 'Sistema de Reservas Medica',
      proMedicDesc: 'Se creo como un plugin dentro de Wordpress, para un cliente que necesitaba un sistema de reservas para los pacientes.',
      proTodoName: 'Todo React',
      proTodoDesc: 'Un simple todo list hecho con React, para practicar y aprender sobre el framework',
      proMidCfName: 'Middleware para CloudFlare Images',
      proMidCfDesc: 'Middleware para poder usar las imagenes de CloudFlare en un servidor propio, sin tener que usar el servicio de CloudFlare para servir las imagenes',
    },
    en: {
      job: 'Fullstack Developer',
      about: 'About me',
      desc: '<p><strong>Hello!</strong> I am a full-stack web developer from Uruguay with experience working on various projects throughout Latin America. I specialize in a wide range of technologies and languages, including PHP, Node.js, HTML5, CSS3, JavaScript, jQuery, Bootstrap, and Responsive Design, among others.</p><p>My passion for entrepreneurship and innovation drives me to constantly seek solutions and stay up-to-date with the latest technologies. I am self-taught, which means I am always learning and adapting to advancements in the field.</p>',
      proyects: 'Proyects',
      aboutMe: 'About me',
      proPersonalName: 'Chelo.xyz',
      proPersonalDesc: 'Personal portfolio',
      proBlogName: 'Carpincho.dev',
      proBlogDesc: 'Programming blog, created with Astro, running on Vercel',
      proNibiruName: 'Nibiru Services',
      proNibiruDesc: 'Product import system for Woocommerce, consists of several parts: <br/> - Imports products from external APIs <br/> - Provides an API for the WordPress plugin to import the products <br/> - WordPress plugin for importing the products <br/> In addition, it uses MariaDB for the database and is running on a VPS with Docker',
      proMedicName: 'Medical Reservation System',
      proMedicDesc: 'Created as a plugin within WordPress, for a client in need of a reservation system for patients.',
      proTodoName: 'Todo React',
      proTodoDesc: 'A simple todo list made with React, for practicing and learning about the framework',
      proMidCfName: 'Middleware for CloudFlare Images',
      proMidCfDesc: "Middleware to be able to use CloudFlare images on a self-hosted server, without having to use CloudFlare's service to serve the images",
    },
  },
}

export const { t, loading, locales, locale, loadTranslations } = new i18n(config);

loading.subscribe(($loading) => $loading && console.log('Loading translations...'));