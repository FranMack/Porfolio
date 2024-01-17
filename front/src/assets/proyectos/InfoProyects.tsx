import TMDB from "./imagenes/TMDB.jpg";
import Polirubro from "./imagenes/Polirubro.jpg";

interface ProjectInfo {
  name: string;
  path: string;
  info: string;
  tecnologias?: string[];
  description?: string;
  userFunctionality?: string;
  adminFunctionality?: string;
  videoId?:string;
  backLink?: string;
  frontLink?: string;
}

export const projectsInfo: ProjectInfo[] = [
  {
    name: "TMDB",
    path: TMDB,
    info: "Sitio web de series y peliculas",
    tecnologias: ["React", "Node js", "Sequelize", "Postgress"],
    description:
      "Sitio Web para ver descripciones de películas y series consumiendo la información de la API de The Movie Database (TMDB).",
    userFunctionality:
      "El usuario puede interactuar con un amplio catálogo de películas y series, filtrarlas por género o buscar una en específico, puede registrarse, agregar o eliminar películas a sus favoritos como también su cuenta creada.",
    backLink: "https://github.com/FranMack/TMDB---api",
    frontLink: "https://github.com/FranMack/TMDB---front",
    videoId:"gieEQFIfgYc"
  },
  {
    name: "Polirubro",
    path: Polirubro,
    info: "Catalogo virtual de productos",
    tecnologias: ["React", "Node js", "Mongoose", "Mongo"],
    description:
      "Se trata de un sitio que ofrece un catalogo de productos en alquiler,  tiene como fin que el usuario pueda consultar por disponibilidad y precio para adquirirlos",
    userFunctionality:
      "El usuario puede navegar a travez del sitio, accediendo a una amplia variedad de productos, puede realizar busquedas a travez de filtros por categorias, sub-categorias y color",
      adminFunctionality:"El administrador tiene la potestad de agregar productos nuevos, editar y elimiar productos.",
    backLink: "https://github.com/FranMack/TMDB---api",
    frontLink: "https://github.com/FranMack/TMDB---front",
    videoId:"gieEQFIfgYc"
  },
  {
    name: "TMDB",
    path: TMDB,
    info: "Sitio web de series y peliculas",
    tecnologias: ["React", "Node js", "Sequelize", "Postgress"],
    description:
      "Sitio Web para ver descripciones de películas y series consumiendo la información de la API de The Movie Database (TMDB).",
    userFunctionality:
      "El usuario puede interactuar con un amplio catálogo de películas y series, filtrarlas por género o buscar una en específico, puede registrarse, agregar o eliminar películas a sus favoritos como también su cuenta creada.",
    backLink: "https://github.com/FranMack/TMDB---api",
    frontLink: "https://github.com/FranMack/TMDB---front",
    videoId:"gieEQFIfgYc"
  },
  {
    name: "Polirubro",
    path: Polirubro,
    info: "Catalogo virtual de productos",
    tecnologias: ["React", "Node js", "Mongoose", "Mongo"],
    description:
      "Se trata de un sitio que ofrece un catalogo de productos en alquiler,  tiene como fin que el usuario pueda consultar por disponibilidad y precio para adquirirlos",
    userFunctionality:
      "El usuario puede navegar a travez del sitio, accediendo a una amplia variedad de productos, puede realizar busquedas a travez de filtros por categorias, sub-categorias y color",
      adminFunctionality:"El administrador tiene la potestad de agregar productos nuevos, editar y elimiar productos.",
    backLink: "https://github.com/FranMack/TMDB---api",
    frontLink: "https://github.com/FranMack/TMDB---front",
    videoId:"gieEQFIfgYc"
  },
];
