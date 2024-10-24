import TMDB from "./imagenes/TMDB.webp";
import Polirubro from "./imagenes/Polirubro.webp";
import to_do_list from "./imagenes/To_do_list.webp";
import fastDelivery from "./imagenes/fastDelivery.webp";
import brokenOffice from "./imagenes/brokenOffice.webp";
import myProfile from "./imagenes/myProfile.webp";
import horizontalTodo from "./imagenes/toDoListHorizontal.webp";
import horizontalGlobant from "./imagenes/globantHorizontal.webp";
import horizontalFastDelivery from "./imagenes/fastDeliveryHorizontall.webp";
import horizontalMyProfilefrom from "./imagenes/myProfileHorizontal.webp";
import nutriendoLaVida from "./imagenes/nutriendoLaVida.webp";
import zmDevs from "./imagenes/zmLanding.webp"

interface ProjectInfo {
  name: string;
  path: string;
  infoSpanish: string;
  infoEnglish: string;
  tecnologias?: string[];
  descriptionSpanish?: string;
  descriptionEnglish?: string;
  userFunctionalitySpanish?: string;
  userFunctionalityEnglish?: string;
  adminFunctionalitySpanish?: string;
  adminFunctionalityEnglish?: string;
  videoIdUser?: string;
  videoIdAdmin?: string;
  bannerPath?: string;
  backLink?: string;
  frontLink?: string;
  frontLink2?: string;
  appDomain?:string
}

export const infoAboutMe = {
  p1Spanish:
    "Soy un desarrollador full stack con sólidas aptitudes para la resolución de problemas, trabajo en equipo, planificación y cumplimiento de objetivos, producto de mis años de experiencia como ingeniero civil en la industria de la construcción",
  p1English:
    "I am a full stack developer with solid skills in solving problem , teamwork,planning and meeting objectives, a product of my years of experience as a civil engineer in the construction industry.",
  p2Spanish:
    " Mi camino de programador comienza de manera autodidacta, para luego, con el fin de acelerar mi curva de aprendizaje iniciar un coding bootcamp enfocado en el stack de tecnologías PEARN.",
  p2English:
    "My journey as a programmer begins as a self-taught person, and then, in order to accelerate my learning curve I start a coding bootcamp focused on the PEARN technology stack. ",
  p3Spanish:
    "Hoy en día me encuentro en el desafío de iniciar mi carrera en la industria tecnológica, donde aspiro a formar parte de un equipo de trabajo en donde pueda contribuir y desarrollarme profesionalmente.",
  p3English:
    "Today I find myself facing the challenge of starting my career in the technology industry, where I aspire to be part of a work team where I can contribute and professionally grow.",
};

export const projectsInfo: ProjectInfo[] = [
  {
    name: "Nutriendo la Vida",
    path: nutriendoLaVida,
    infoSpanish: "Plataforma para venta de planes nutricionales.",
    infoEnglish: "Platform for selling nutritional plans.",
    tecnologias: [
      "Javascript",
      "React",
      "Sass",
      "Node js",
      "Express",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Github",
    ],
    descriptionSpanish:
      "Aplicación desarrollada para venta de planes nutricionales. Utiliza como pasarela de pago Mercado pago.",
    descriptionEnglish:
      "Application developed for the sale of nutritional plans. Use Mercado Pago as a payment gateway.",
    userFunctionalitySpanish:
      "El usuario puede navegar por el sitio, realizar un test que le ayudará a identificar el plan nutricional más adecuado a sus necesidades, y finalizar su experiencia con la opción de compra. Tras completar la compra, recibirá un correo de confirmación. Si adquiere un plan nutricional, se le enviará un formulario que deberá completar con la información solicitada por el profesional. Una vez enviado el formulario, el profesional elaborará un plan nutricional personalizado basado en sus respuestas. Si el usuario compra un ebook, este será adjuntado automáticamente en el correo de confirmación para su descarga inmediata.",
    userFunctionalityEnglish:
      "The user can navigate the site, take a test that will help identify the most suitable nutritional plan for their needs, and complete the experience with a purchase option. After completing the purchase, they will receive a confirmation email. If they purchase a nutritional plan, a form will be sent to them, which they must fill out with the information requested by the professional. Once the form is submitted, the professional will create a personalized nutritional plan based on their answers. If the user buys an ebook, it will be automatically attached to the confirmation email for immediate download.",
      adminFunctionalitySpanish:"Cuando un usuario completa una compra, el administrador recibirá automáticamente un correo electrónico con los datos del comprador. Está previsto desarrollar un panel de administración que permitirá gestionar el contenido del sitio de manera eficiente.",
      adminFunctionalityEnglish:
      "When a user completes a purchase, the administrator will automatically receive an email with the buyer's information. A management panel is planned to be developed to efficiently manage the site's content.",
    appDomain:"https://www.nutriendolavida.fit/"

  },

  {
    name: "ZMdevs",
    path: zmDevs,
    infoSpanish: "Landing page",
    infoEnglish: "Landing page",
    tecnologias: [
      "Javascript",
      "React",
      "Sass",
      "Github",
    ],
    descriptionSpanish:
      "Una landing page para una consultora de desarrollo de software se enfoca en captar la atención de potenciales clientes de manera clara y directa. Presenta los servicios y proyectos más relevantes, guiando al visitante hacia acciones concretas como solicitar una consulta o contactar para soluciones",
    descriptionEnglish:
      "A landing page for a software development consultancy focuses on capturing the attention of potential clients clearly and directly. It showcases the most relevant services and projects, guiding visitors toward concrete actions such as requesting a consultation or reaching out for tailored solutions.",
      userFunctionalitySpanish:
      "El usuario puede explorar los servicios ofrecidos, conocer a los clientes con los que ha trabajado, y acceder a un formulario de contacto para consultas. Además, tiene la opción de comunicarse a través de WhatsApp y seguir las redes sociales de la empresa para mantenerse actualizado sobre sus novedades y ofertas.",

      userFunctionalityEnglish:"The user can explore the services offered, learn about the clients the company has worked with, and access a contact form for inquiries. Additionally, they have the option to communicate via WhatsApp and follow the company's social media to stay updated on news and offers.",
    
    appDomain:"https://www.zmdevs.com/"

  },
  {
    name: "Polirubro",
    path: Polirubro,
    infoSpanish: "Catalogo virtual",
    infoEnglish: "Virtual catalog",
    tecnologias: [
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
    descriptionSpanish:
      "Es un rental de utilería y mobiliario para todo tipo de producción audiovisual, cine, televisión, publicidad y teatro; cualquier acción artística o evento. (EN DESARROLLO) ",
    descriptionEnglish:
      "Is a rental of props and furniture for all types of audiovisual production, cinema, television, advertising and theater; any artistic action or event.(DEVELOPING)",
    userFunctionalitySpanish:
      "El usuario puede navegar a travez del sitio, accediendo a una amplia variedad de productos, puede realizar busquedas a travez de filtros por categorias, sub-categorias y color",
    userFunctionalityEnglish:
      "The user can navigate through the site, accessing a wide variety of products, and can perform searches through filters by categories, sub-categories and color.",
    adminFunctionalitySpanish:
      "El administrador tiene la potestad de agregar productos nuevos, editarlos y elimimarlos.",
    adminFunctionalityEnglish:
      "The administrator has the power to add new products, edit them and delete them.",
    backLink: "https://github.com/FranMack/polirubroProps-api",
    frontLink: "https://github.com/FranMack/polirubroProps-front",
  },

  {
    name: "My Profile",
    path: myProfile,
    bannerPath: horizontalMyProfilefrom,
    infoSpanish: "Porfolio profesional",
    infoEnglish: "Profesional profile",
    tecnologias: ["Javascript", "CSS", "React", "Tailwind", "Github"],
    descriptionSpanish:
      "Mi portafolio personal web donde conocerás una poco más de mí, aquí encontrarás mis proyectos y trabajos realizados, mostrando mis habilidades y experiencia en el diseño y desarrollo de sitios web y aplicación móvil.",
    descriptionEnglish:
      "My personal web portfolio where you will learn a little more about me, here you will find my projects and work carried out, showing my skills and experience in the design and development of websites and mobile applications.",
    userFunctionalitySpanish:
      "El usuario puede explorar entre las diferentes secciones, acerca de, habilidades, proyectos. Por otro lado, si desea saber más sobre mí o mantenerse, en contacto conmigo, puede enviarme un correo directo o visitar las diferentes redes sociales que poseo.",
    userFunctionalityEnglish:
      "The user can explore between the different sections, about, skills, projects. On the other hand, if you want to know more about me or stay in touch with me, you can send me a direct email or visit the different social networks that I have.",
    frontLink: "https://github.com/FranMack/Porfolio",
  },
  {
    name: "TMDB",
    path: TMDB,
    infoSpanish: "Sitio web de series y peliculas",
    infoEnglish: "Web site of movies and tv shows",
    tecnologias: [
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
    descriptionSpanish:
      "Sitio web que ofrece descripciones detalladas de películas y series, obteniendo datos de la API de The Movie Database (TMDB).",
    descriptionEnglish:
      "Website to view descriptions of movies and series consuming information from The Movie Database (TMDB) API.",
    userFunctionalitySpanish:
      "Los usuarios tienen acceso a un extenso catálogo de películas y series, con la capacidad de filtrar por género o realizar búsquedas específicas. Además, tienen la opción de registrarse y gestionar su lista de favoritos, añadiendo o eliminando películas según sus preferencias.",
    userFunctionalityEnglish:
      "Users have access to an extensive catalog of movies and series, with the ability to filter by genre or perform specific searches. In addition, they have the option to register and manage their favorites list, adding or removing movies according to their preferences.",
    backLink: "https://github.com/FranMack/TMDB---api",
    frontLink: "https://github.com/FranMack/TMDB---front",
    videoIdUser: "Sxiw57SPKXU",
  },

  {
    name: "Fast Delivery",
    path: fastDelivery,
    bannerPath: horizontalFastDelivery,
    infoSpanish: "App de repartos",
    infoEnglish: "App of deliveries",
    tecnologias: [
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
    descriptionSpanish:
      "Se trata de una app pensada para una empresa de repartos de ultima milla.",
    descriptionEnglish:
      "This is an app designed for a last mile delivery company.",
    userFunctionalitySpanish:
      "Los usuarios van a ser los repartidores, los cuales podrán registrarse y loguearse libremente y seleccionar los paquetes que entregarán durante la jornada de trabajo.",
    userFunctionalityEnglish:
      "The users will be the delivery people, who will be able to register and log in freely and select the packages they will deliver during the work day.",
    adminFunctionalitySpanish:
      "El administrador tendrá acceso a la lista de repartidores registrados, podrá verificar el estado de actividad de aquellos que estén realizando entregas en ese momento, así como también visualizar la cantidad de paquetes asignados a cada repartidor. Además, podrá crear, visualizar y editar los detalles de los paquetes que deben ser enviados.",
    adminFunctionalityEnglish:
      "The administrator will have access to the list of registered deliverers, will be able to verify the activity status of those who are making deliveries at that moment, as well as view the number of packages assigned to each deliverer. Additionally, you will be able to create, view and edit the details of the packages that must be sent.",
    backLink: "https://github.com/FranMack/fastDelivery-api",
    frontLink: "https://github.com/FranMack/fastDelivery-backoffice",
    frontLink2: "https://github.com/FranMack/fastDelivery-delivery",
    videoIdUser: "pxm56tJkOnw",
    videoIdAdmin: "ukdIW-132MQ",
  },
  {
    name: "to_do_list",
    path: to_do_list,
    bannerPath: horizontalTodo,
    infoSpanish: "App para generar listas de tareas",
    infoEnglish: "App to make lists of tasks",
    tecnologias: ["React", "Node js", "Sequelize", "Postgress"],
    descriptionSpanish:
      "En esta app podrás generar diferentes listas de tareas",
    descriptionEnglish: "In this app you can create to-do lists..",
    userFunctionalitySpanish:
      "El usuario puede registrarse, loguearse,crear y editar diferentes listas de tareas.Tambien podrá modificar su perfil.",
    userFunctionalityEnglish:
      " The user can register, log in, create and edit different task lists. You can also modify your profile",
    backLink: "https://github.com/FranMack/To-do-list-project/tree/main/back",
    frontLink: "https://github.com/FranMack/To-do-list-project/tree/main/front",
    videoIdUser: "zBm9m0Rzl84",
  },

  {
    name: "Broken Office",
    path: brokenOffice,
    bannerPath: horizontalGlobant,
    infoSpanish: "App de reporte de fallas",
    infoEnglish: "Failure reporting app",
    tecnologias: [
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
    descriptionSpanish:
      "Se trata de una app, mobile-first que permita a los usuarios reportar problemas y elementos dañados en las oficinas o casas utilizando geolocalización para determinar la ubicación del trabajador, e implementando un modelo de machine learning que permita reconocer a travez de una camara el tipo de objeto del que se trate.",
    descriptionEnglish:
      "It is a mobile-first app that allows users to report problems and damaged items in offices or homes using geolocation to determine the location of the worker, and implementing a machine learning model that allows the type to be recognized through a camera. of object in question.",
    userFunctionalitySpanish:
      "Los usuarios van a ser los empleados de la compañia, los cuales por medio de esta aplicación podrán informar de manera agil y efectiva si una herramienta de trabajo sufrio una averia y necesita ser reemplazada o reparada.",
    userFunctionalityEnglish:
      "The users will be the company's employees, who through this application will be able to quickly and effectively report if a work tool has broken down and needs to be replaced or repaired.",
    adminFunctionalitySpanish:
      "El administrador recibira los reportes de falla, y podra administrar el estado de los mismos a medida que se vayan dando respuesta a cada uno. (NO DESARROLADO)",
    adminFunctionalityEnglish:
      "The administrator will receive the failure reports, and will be able to manage their status as each one is responded to. (NOT DEVELOPED)",
    backLink: "https://github.com/FranMack/Back---Final-Proyect-Globant-",
    frontLink: "https://github.com/FranMack/Front---Final-Proyect-Globant-",
    videoIdUser: "BwVZwwgftHc",
  },
];
