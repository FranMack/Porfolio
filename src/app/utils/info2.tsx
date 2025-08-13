import Polirubro from "../../../public/imagenes/Polirubro.webp";
import TMDB from "../../../public/imagenes/TMDB.webp";
import to_do_list from "../../../public/imagenes/To_do_list.webp";
import brokenOffice from "../../../public/imagenes/brokenOffice.webp";
import fastDelivery from "../../../public/imagenes/fastDelivery.webp";
import lovelia from "../../../public/imagenes/lovelia.webp";
import myProfile from "../../../public/imagenes/myProfile.webp";
import nutriendoLaVida from "../../../public/imagenes/nutriendoLaVida.webp";
import zmDevs from "../../../public/imagenes/zmdevs.webp";

import { ProjectInfo } from "@/interfaces/projectInfo";

export const proyectInfo2: ProjectInfo[] = [
  {
    title: "Lovelia",
    infoSpanish:
      "Ecommerce, blog y herramientas para la meditación y astrología.",
    infoEnglish: "Ecommerce, blog and tools for meditation and astrology.",
    descriptionESP:
      "Lovelia es un eCommerce de astrología y meditación. Ofrece talismanes físicos en distintas combinaciones de piedra, metal, colgante e intención (grabado), así como talismanes digitales personalizados según tu información astral. Además, cuenta con un blog, una sección de meditaciones y un chatbot para guiar tu experiencia.",
    descriptionENG:
      "Lovelia is an astrology and meditation eCommerce. It offers physical talismans in different combinations of stone, metal, pendant and intention (engraving), as well as digital talismans personalized according to your astral information. In addition, it has a blog, a meditation section and a chatbot to guide your experience.",
    images: [lovelia, TMDB, brokenOffice],
    technologies: [
      "Javascript",
      "React",
      "Sass",
      "Node js",
      "Express",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Github",
      "Mercado Pago",
      "Paypal",
    ],
    liveUrl: "https://www.lovelia.me/",
    githubUrl: "",
    date: "2024",
    statusESP: "Completado",
    statusENG: "Completed",
    category: "Ecommerce",
    tabsESP: [
      "Diseño responsive y moderno",
      "Optimizado para rendimiento",
      "Accesibilidad mejorada",
    ],
    tabsENG: [
      "Responsive and modern design",
      "Optimized for performance",
      "Improved accessibility",
    ],
  },
  {
    title: "Nutriendo la Vida",
    infoSpanish: "Plataforma para venta de planes nutricionales.",
    infoEnglish: "Platform for selling nutritional plans.",
    descriptionESP:
      "Aplicación desarrollada para venta de planes nutricionales. Utiliza como pasarela de pago Mercado pago.",
    descriptionENG:
      "Application developed for the sale of nutritional plans. Use Mercado Pago as a payment gateway.",
    images: [nutriendoLaVida],
    technologies: [
      "Javascript",
      "React",
      "Sass",
      "Node js",
      "Express",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Github",
      "Mercado Pago"
    ],
    liveUrl: "https://www.nutriendolavida.fit/",
    githubUrl: "",
    date: "2024",
    statusESP: "Completado",
    statusENG: "Completed",
    category: "Web App",
    tabsESP: [
      "Diseño responsive y moderno",
      "Optimizado para rendimiento",
      "Accesibilidad mejorada",
    ],
    tabsENG: [
      "Responsive and modern design",
      "Optimized for performance",
      "Improved accessibility",
    ],
  },
  {
    title: "ZMdevs",
    infoSpanish: "Landing page",
    infoEnglish: "Landing page",
    descriptionESP:
      "Una landing page para una consultora de desarrollo de software se enfoca en captar la atención de potenciales clientes de manera clara y directa. Presenta los servicios y proyectos más relevantes, guiando al visitante hacia acciones concretas como solicitar una consulta o contactar para soluciones.",
    descriptionENG:
      "A landing page for a software development consultancy focuses on capturing the attention of potential clients clearly and directly. It showcases the most relevant services and projects, guiding visitors toward concrete actions such as requesting a consultation or reaching out for tailored solutions.",
    images: [zmDevs],
    technologies: ["Javascript", "React", "Sass", "Github"],
    liveUrl: "https://www.zmdevs.com/",
    githubUrl: "",
    date: "2024",
    statusESP: "Completado",
    statusENG: "Completed",
    category: "Landing Page",
    tabsESP: [
      "Diseño responsive y moderno",
      "Optimizado para rendimiento",
      "Accesibilidad mejorada",
    ],
    tabsENG: [
      "Responsive and modern design",
      "Optimized for performance",
      "Improved accessibility",
    ],
  },
  {
    title: "Polirubro",
    infoSpanish: "Catalogo virtual",
    infoEnglish: "Virtual catalog",
    descriptionESP:
      "Es un rental de utilería y mobiliario para todo tipo de producción audiovisual, cine, televisión, publicidad y teatro; cualquier acción artística o evento. (EN DESARROLLO)",
    descriptionENG:
      "Is a rental of props and furniture for all types of audiovisual production, cinema, television, advertising and theater; any artistic action or event. (DEVELOPING)",
    images: [Polirubro],
    technologies: [
      "Javascript",
      "React",
      "Tailwind",
      "Node js",
      "Express",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Github",
      "Redux",
    ],
    liveUrl: "",
    githubUrl: "https://github.com/FranMack/polirubroProps-front",
    date: "2024",
    statusESP: "En desarrollo",
    statusENG: "In development",
    category: "Catalogo Virtual",
    tabsESP: [
      "Diseño responsive y moderno",
      "Optimizado para rendimiento",
      "Accesibilidad mejorada",
    ],
    tabsENG: [
      "Responsive and modern design",
      "Optimized for performance",
      "Improved accessibility",
    ],
  },
  {
    title: "My Profile",
    infoSpanish: "Porfolio profesional",
    infoEnglish: "Profesional profile",
    descriptionESP:
      "Mi portafolio personal web donde conocerás una poco más de mí, aquí encontrarás mis proyectos y trabajos realizados, mostrando mis habilidades y experiencia en el diseño y desarrollo de sitios web y aplicación móvil.",
    descriptionENG:
      "My personal web portfolio where you will learn a little more about me, here you will find my projects and work carried out, showing my skills and experience in the design and development of websites and mobile applications.",
    images: [myProfile],
    technologies: ["Javascript", "CSS", "React", "Tailwind", "Github"],
    liveUrl: "",
    githubUrl: "https://github.com/FranMack/Porfolio",
    date: "2024",
    statusESP: "Completado",
    statusENG: "Completed",
    category: "Portfolio",
    tabsESP: [
      "Diseño responsive y moderno",
      "Optimizado para rendimiento",
      "Accesibilidad mejorada",
    ],
    tabsENG: [
      "Responsive and modern design",
      "Optimized for performance",
      "Improved accessibility",
    ],
  },
  {
    title: "TMDB",
    infoSpanish: "Sitio web de series y peliculas",
    infoEnglish: "Web site of movies and tv shows",
    descriptionESP:
      "Sitio web que ofrece descripciones detalladas de películas y series, obteniendo datos de la API de The Movie Database (TMDB).",
    descriptionENG:
      "Website to view descriptions of movies and series consuming information from The Movie Database (TMDB) API.",
    images: [TMDB],
    technologies: [
      "Javascript",
      "React",
      "Material UI",
      "Node js",
      "Express",
      "Sequelize",
      "Postgress",
      "JWT",
      "Redux",
    ],
    liveUrl: "",
    githubUrl: "https://github.com/FranMack/TMDB---front",
    date: "2023",
    statusESP: "Completado",
    statusENG: "Completed",
    category: "Entertainment",
    tabsESP: [
      "Diseño responsive y moderno",
      "Optimizado para rendimiento",
      "Accesibilidad mejorada",
    ],
    tabsENG: [
      "Responsive and modern design",
      "Optimized for performance",
      "Improved accessibility",
    ],
  },
  {
    title: "Fast Delivery",
    infoSpanish: "App de repartos",
    infoEnglish: "App of deliveries",
    descriptionESP:
      "Se trata de una app pensada para una empresa de repartos de ultima milla.",
    descriptionENG: "This is an app designed for a last mile delivery company.",
    images: [fastDelivery],
    technologies: [
      "Javascript",
      "React",
      "Tailwind",
      "Node js",
      "Express",
      "Mongoose",
      "MongoDB",
      "JWT",
      "Redux",
      "Docker",
    ],
    liveUrl: "",
    githubUrl: "https://github.com/FranMack/fastDelivery-backoffice",
    date: "2024",
    statusESP: "Completado",
    statusENG: "Completed",
    category: "Delivery",
    tabsESP: [
      "Diseño responsive y moderno",
      "Optimizado para rendimiento",
      "Accesibilidad mejorada",
    ],
    tabsENG: [
      "Responsive and modern design",
      "Optimized for performance",
      "Improved accessibility",
    ],
  },
  {
    title: "To Do List",
    infoSpanish: "App para generar listas de tareas",
    infoEnglish: "App to make lists of tasks",
    descriptionESP: "En esta app podrás generar diferentes listas de tareas.",
    descriptionENG: "In this app you can create to-do lists.",
    images: [to_do_list],
    technologies: ["React", "Node js", "Sequelize", "Postgress"],
    liveUrl: "",
    githubUrl: "https://github.com/FranMack/To-do-list-project/tree/main/front",
    date: "2023",
    statusESP: "Completado",
    statusENG: "Completed",
    category: "Productivity",
    tabsESP: [
      "Diseño responsive y moderno",
      "Optimizado para rendimiento",
      "Accesibilidad mejorada",
    ],
    tabsENG: [
      "Responsive and modern design",
      "Optimized for performance",
      "Improved accessibility",
    ],
  },
  {
    title: "Broken Office",
    infoSpanish: "App de reporte de fallas",
    infoEnglish: "Failure reporting app",
    descriptionESP:
      "Se trata de una app, mobile-first que permita a los usuarios reportar problemas y elementos dañados en las oficinas o casas utilizando geolocalización y machine learning.",
    descriptionENG:
      "It is a mobile-first app that allows users to report problems and damaged items in offices or homes using geolocation and machine learning.",
    images: [brokenOffice],
    technologies: [
      "Javascript",
      "React",
      "Material UI",
      "Node js",
      "Express",
      "Postgres",
      "Sequelize",
      "JWT",
      "Redux",
    ],
    liveUrl: "",
    githubUrl: "https://github.com/FranMack/Front---Final-Proyect-Globant-",
    date: "2024",
    statusESP: "En desarrollo",
    statusENG: "In development",
    category: "Reporting",
    tabsESP: [
      "Diseño responsive y moderno",
      "Optimizado para rendimiento",
      "Accesibilidad mejorada",
    ],
    tabsENG: [
      "Responsive and modern design",
      "Optimized for performance",
      "Improved accessibility",
    ],
  },
];
