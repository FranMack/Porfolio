import { StaticImageData } from "next/image";
import Polirubro from "../../../public/imagenes/Polirubro.webp";
import TMDB from "../../../public/imagenes/TMDB.webp";
import to_do_list from "../../../public/imagenes/To_do_list.webp";
import brokenOffice from "../../../public/imagenes/brokenOffice.webp";
import fastDelivery from "../../../public/imagenes/fastDelivery.webp";
import horizontalFastDelivery from "../../../public/imagenes/fastDeliveryHorizontall.webp";
import horizontalGlobant from "../../../public/imagenes/globantHorizontal.webp";
import lovelia from "../../../public/imagenes/lovelia.webp";
import myProfile from "../../../public/imagenes/myProfile.webp";
import horizontalMyProfilefrom from "../../../public/imagenes/myProfileHorizontal.webp";
import nutriendoLaVida from "../../../public/imagenes/nutriendoLaVida.webp";
import horizontalTodo from "../../../public/imagenes/toDoListHorizontal.webp";
import zmDevs from "../../../public/imagenes/zmdevs.webp";

interface ProjectInfo {
  name: string;
  path: StaticImageData;
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
  bannerPath?: StaticImageData;
  backLink?: string;
  frontLink?: string;
  frontLink2?: string;
  appDomain?: string;
}

export const infoAboutMe = {
  p1Spanish:
    "Soy un desarrollador full stack con fuertes habilidades en la resolución de problemas, trabajo en equipo, planificación y cumplimiento de objetivos, desarrolladas a lo largo de mis años como ingeniero civil en la industria de la construcción",
  p1English:
    "I am a full stack developer with solid skills in solving problem , teamwork, planning and meeting objectives, a product of my years of experience as a civil engineer in the construction industry.",
  p2Spanish:
    "Mi camino en la programación comenzó de forma autodidacta, lo que me llevó a realizar un coding bootcamp centrado en el stack de tecnologías PEARN, con el fin de acelerar mi aprendizaje. Tras finalizar el bootcamp, trabajé como asistente en el mismo, apoyando a futuros estudiantes y reforzando mis conocimientos.",
  p2English:
    "My path in programming began as a self-taught person, which led me to take a coding bootcamp focused on the PEARN technology stack, in order to accelerate my learning. After finishing the bootcamp, I worked as an assistant there, supporting future students and reinforcing my knowledge.",
  p3Spanish:
    "Desde entonces, he trabajado de manera independiente, desarrollando proyectos y ampliando mi experiencia en la industria tecnológica. Actualmente, busco unirme a un equipo donde pueda seguir creciendo profesionalmente y aportar mis habilidades en el desarrollo de soluciones innovadoras.",
  p3English:
    "Since then, I have worked independently, developing projects and expanding my experience in the technology industry. Currently, I am looking to join a team where I can continue to grow professionally and contribute my skills in the development of innovative solutions.",
};

export const projectsInfo: ProjectInfo[] = [
  {
    name: "Lovelia",
    path: lovelia,
    infoSpanish:
      "Ecommerce, blog y herramientas para la meditación y astrología.",
    infoEnglish: "Ecommerce, blog and tools for meditation and astrology.",
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
      "Mercado pago",
      "Paypal pago",
    ],
    descriptionSpanish:
      "Lovelia es un eCommerce de astrología y meditación. Ofrece talismanes físicos en distintas combinaciones de piedra, metal, colgante e intención (grabado), así como talismanes digitales personalizados según tu información astral. Además, cuenta con un blog, una sección de meditaciones y un chatbot para guiar tu experiencia.",
    descriptionEnglish:
      "Lovelia is an astrology and meditation eCommerce. It offers physical talismans in different combinations of stone, metal, pendant and intention (engraving), as well as digital talismans personalized according to your astral information. In addition, it has a blog, a meditation section and a chatbot to guide your experience.",
    userFunctionalitySpanish:"En Lovelia, los usuarios pueden explorar el sitio, leer artículos del blog, descubrir lecturas de intención y disfrutar de meditaciones gratuitas. También pueden comprar talismanes físicos y digitales. Al crear una cuenta, podrán acceder a su historial de compras y, si adquieren un talismán digital, completar sus datos para su creación. Este talismán digital propicia un espacio de meditación, ofreciendo un chatbot, meditaciones, un timer, información astrológica personalizada y una representación 3D de su mapa astral, entre otras herramientas.",
    userFunctionalityEnglish:"On Lovelia, users can explore the site, read blog articles, discover intention readings, and enjoy free meditations. They can also purchase physical and digital talismans. By creating an account, you will be able to access your purchase history and, if you purchase a digital talisman, complete your details for its creation. This digital talisman provides a meditation space, offering a chatbot, meditations, a timer, personalized astrological information and a 3D representation of your astral map, among other tools.",
    adminFunctionalitySpanish:
      "Los administradores de Lovelia tienen acceso a un panel de control donde pueden gestionar usuarios, revisar y administrar órdenes de compra, y configurar los productos disponibles en la tienda. Además, pueden actualizar contenido y supervisar el funcionamiento general del eCommerce.",
    adminFunctionalityEnglish:
      "Lovelia administrators have access to a control panel where they can manage users, review and manage purchase orders, and configure the products available in the store. In addition, they can update content and monitor the general operation of the eCommerce",
    appDomain: "https://www.lovelia.me/",
  },
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
    adminFunctionalitySpanish:
      "Cuando un usuario completa una compra, el administrador recibirá automáticamente un correo electrónico con los datos del comprador. Está previsto desarrollar un panel de administración que permitirá gestionar el contenido del sitio de manera eficiente.",
    adminFunctionalityEnglish:
      "When a user completes a purchase, the administrator will automatically receive an email with the buyer's information. A management panel is planned to be developed to efficiently manage the site's content.",
    appDomain: "https://www.nutriendolavida.fit/",
  },

  {
    name: "ZMdevs",
    path: zmDevs,
    infoSpanish: "Landing page",
    infoEnglish: "Landing page",
    tecnologias: ["Javascript", "React", "Sass", "Github"],
    descriptionSpanish:
      "Una landing page para una consultora de desarrollo de software se enfoca en captar la atención de potenciales clientes de manera clara y directa. Presenta los servicios y proyectos más relevantes, guiando al visitante hacia acciones concretas como solicitar una consulta o contactar para soluciones",
    descriptionEnglish:
      "A landing page for a software development consultancy focuses on capturing the attention of potential clients clearly and directly. It showcases the most relevant services and projects, guiding visitors toward concrete actions such as requesting a consultation or reaching out for tailored solutions.",
    userFunctionalitySpanish:
      "El usuario puede explorar los servicios ofrecidos, conocer a los clientes con los que ha trabajado, y acceder a un formulario de contacto para consultas. Además, tiene la opción de comunicarse a través de WhatsApp y seguir las redes sociales de la empresa para mantenerse actualizado sobre sus novedades y ofertas.",

    userFunctionalityEnglish:
      "The user can explore the services offered, learn about the clients the company has worked with, and access a contact form for inquiries. Additionally, they have the option to communicate via WhatsApp and follow the company's social media to stay updated on news and offers.",

    appDomain: "https://www.zmdevs.com/",
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
