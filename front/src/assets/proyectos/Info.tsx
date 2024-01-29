import TMDB from "./imagenes/TMDB.jpg";
import Polirubro from "./imagenes/Polirubro.jpg";
import to_do_list from "./imagenes/To_do_list.jpg";
import fastDelivery from "./imagenes/fastDelivery.jpg"
import brokenOffice from "./imagenes/brokenOffice.jpg"
import myProfile from "./imagenes/myProfile.png"


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
  videoIdUser?:string;
  videoIdAdmin?:string;
  backLink?: string;
  frontLink?: string;
}


export const infoAboutMe={
  p1Spanish:"Soy un desarrollador full stack con sólidas aptitudes para la resolución de problemas, trabajo en equipo, planificación y cumplimiento de objetivos, producto de mis años de experiencia como ingeniero civil en la industria de la construcción",
  p1English:"I am a full stack developer with solid skills in solving problem , teamwork,planning and meeting objectives, a product of my years of experience as a civil engineer in the construction industry.",
  p2Spanish:" Mi camino deprogramador comienza de manera autodidacta, para luego, con el fin de acelerar mi curva de aprendizaje iniciar un coding bootcamp enfocadoen el stack de tecnologías PEARN.",
  p2English:"My journey as a programmer begins as a self-taught person, and then, in order to accelerate my learning curve I start a coding bootcamp focused on the PEARN technology stack. ",
  p3Spanish:"Hoy en día me encuentro en el desafío de iniciar mi carrera en la industria tecnológica, donde aspiro a formarparte de un equipo de trabajo en donde pueda contribuir y desarrollarme profesionalmente.",
  p3English:"Today I find myself facing thechallenge of starting my career in the technology industry, where I aspire to be part of a work team where I can contribute and professionally grow.",
}


export const projectsInfo: ProjectInfo[] = [
  {
    name: "TMDB",
    path: TMDB,
    infoSpanish: "Sitio web de series y peliculas",
    infoEnglish: "Web site of movies and tv shows",
    tecnologias: ["Javascript","React","Tailwind", "Node js","Express","Sequelize", "Postgress","JWT","Docker"],
    descriptionSpanish:
      "Sitio Web para ver descripciones de películas y series consumiendo la información de la API de The Movie Database (TMDB).",
      descriptionEnglish:
      "Website to view descriptions of movies and series consuming information from The Movie Database (TMDB) API.",
      userFunctionalitySpanish:
      "El usuario puede interactuar con un amplio catálogo de películas y series, filtrarlas por género o buscar una en específico, puede registrarse, agregar o eliminar películas a sus favoritos como también su cuenta creada.",
      userFunctionalityEnglish:"The user can interact with a wide catalog of movies and series, filter them by genre or search for a specific one, they can register, add or delete movies to their favorites as well as their created account.",
      backLink: "https://github.com/FranMack/TMDB---api",
    frontLink: "https://github.com/FranMack/TMDB---front",
    videoIdUser:"gieEQFIfgYc",
  },
  {
    name: "My Profile",
    path: myProfile,
    infoSpanish: "Porfolio profesional",
    infoEnglish: "Profesional profile",
    tecnologias: ["Javascript","React","Tailwind", "Node js","Express","Sequelize", "Postgress","JWT","Docker"],
    descriptionSpanish:
      "Mi portafolio personal web donde conocerás una poco más de mí, aquí encontrarás mis proyectos y trabajos realizados, mostrando mis habilidades y experiencia en el diseño y desarrollo de sitios web y aplicación móvil.",
      descriptionEnglish:
      "My personal web portfolio where you will learn a little more about me, here you will find my projects and work carried out, showing my skills and experience in the design and development of websites and mobile applications.",
      userFunctionalitySpanish:
      "El usuario puede explorar entre las diferentes opciones acerca de, habilidades, proyectos. Por otro lado, si desea saber más sobre mí o mantenerse, en contacto conmigo, puede enviarme un correo directo o visitar las diferentes redes sociales que poseo.",
      userFunctionalityEnglish:"The user can explore between the different options about, skills, projects. On the other hand, if you want to know more about me or stay in touch with me, you can send me a direct email or visit the different social networks that I have.",
      backLink: "https://github.com/FranMack/TMDB---api",
    frontLink: "https://github.com/FranMack/TMDB---front",
    videoIdUser:"gieEQFIfgYc",
  },
  {
    name: "Polirubro",
    path: Polirubro,
    infoSpanish: "Catalogo virtual",
    infoEnglish: "Virtual catalog",
    tecnologias: ["Javascript","React","Tailwind", "Node js","Express", "Mongoose", "MongoDB","JWT","Docker"],
    descriptionSpanish:
      "Se trata de un sitio que ofrece un catalogo de productos en alquiler,  tiene como fin que el usuario pueda consultar por disponibilidad y precio para adquirirlos",
     descriptionEnglish:"This is a site that offers a catalog of products for rent, its purpose is for the user to check availability and price to purchase them.",
      userFunctionalitySpanish:
      "El usuario puede navegar a travez del sitio, accediendo a una amplia variedad de productos, puede realizar busquedas a travez de filtros por categorias, sub-categorias y color",
      userFunctionalityEnglish:"The user can navigate through the site, accessing a wide variety of products, and can perform searches through filters by categories, sub-categories and color.",
      adminFunctionalitySpanish:"El administrador tiene la potestad de agregar productos nuevos, editarlos y elimimarlos.",
      adminFunctionalityEnglish:"The administrator has the power to add new products, edit them and delete them.",
      backLink: "https://github.com/FranMack/TMDB---api",
    frontLink: "https://github.com/FranMack/TMDB---front",
    videoIdUser:"gieEQFIfgYc",
    videoIdAdmin:"WNp6kzKTCCU",
    
  },
  {
    name: "to_do_list",
    path: to_do_list,
    infoSpanish: "App para generar listas de tareas",
    infoEnglish: "App to make lists of tasks",
    tecnologias: ["React", "Node js", "Sequelize", "Postgress"],
    descriptionSpanish:
      "En esta app podrás crear listas de tareas, y más.",
      descriptionEnglish:"In this app you can create to-do lists, and more.",
      userFunctionalitySpanish:"El usuario puede registrarse, logguearse, y crear diferentes listas de tareas.Tambien podrá editar su perfil.",
      userFunctionalityEnglish:"The user can register, log in, and create different task lists. They can also edit their profile.",
      backLink: "https://github.com/FranMack/TMDB---api",
    frontLink: "https://github.com/FranMack/TMDB---front",
    videoIdUser:"zBm9m0Rzl84",
  },
  {
    name: "Fast Delivery",
    path: fastDelivery,
    infoSpanish: "App de repartos",
    infoEnglish: "App of delveries",
    tecnologias: ["Javascript","React","Tailwind", "Node js","Express", "Mongoose", "MongoDB","JWT","Docker"],
    descriptionSpanish:
      "Se trata de una app pensada para una empresa de repartos de ultima milla.",
      descriptionEnglish:"This is an app designed for a last mile delivery company.",
      userFunctionalitySpanish:"Los usuarios van a ser los repartidores, los cuales podrán registrarse y loguearse libremente y seleccionar los paquetes que entregará ese día",
      userFunctionalityEnglish:"The users will be the delivery people, who will be able to register and log in freely and select the packages to be delivered that day",
      adminFunctionalitySpanish:"El administrador podrá ver la nómina de repartidores registrados, cuántos repartidores están activos con entregas en curso, cuántos paquetes tiene cada repartidor, crear, ver y editar los paquetes que se deben enviar.",
      adminFunctionalityEnglish:"The administrator will be able to see the list of registered delivery people, how many delivery people are active with deliveries in progress, how many packages each delivery person has, create, view and edit the packages that must be sent.",
      backLink: "https://github.com/FranMack/TMDB---api",
    frontLink: "https://github.com/FranMack/TMDB---front",
    videoIdUser:"gieEQFIfgYc",
    videoIdAdmin:"WNp6kzKTCCU",
  },

  {
    name: "Broken Office",
    path: brokenOffice,
    infoSpanish: "App de reporte de fallas",
    infoEnglish: "App de reporte de fallas",
    tecnologias: ["Javascript","React","Tailwind", "Node js","Express", "Mongoose", "MongoDB","JWT","Docker"],
    descriptionSpanish:
      "Se trata de una app pensada para una empresa de repartos de ultima milla.",
      descriptionEnglish:"This is an app designed for a last mile delivery company.",
      userFunctionalitySpanish:"Los usuarios van a ser los repartidores, los cuales podrán registrarse y loguearse libremente y seleccionar los paquetes que entregará ese día",
      userFunctionalityEnglish:"The users will be the delivery people, who will be able to register and log in freely and select the packages to be delivered that day",
      adminFunctionalitySpanish:"El administrador podrá ver la nómina de repartidores registrados, cuántos repartidores están activos con entregas en curso, cuántos paquetes tiene cada repartidor, crear, ver y editar los paquetes que se deben enviar.",
      adminFunctionalityEnglish:"The administrator will be able to see the list of registered delivery people, how many delivery people are active with deliveries in progress, how many packages each delivery person has, create, view and edit the packages that must be sent.",
      backLink: "https://github.com/FranMack/TMDB---api",
    frontLink: "https://github.com/FranMack/TMDB---front",
    videoIdUser:"gieEQFIfgYc"
  },
  
];




