import "./App.css";
import ProjectInfo from "./views/ProyectInfo";
import { useRef } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export interface Section {
  seccion: HTMLDivElement | Element | null;
}
export interface Item {
  name: string;
  scroll: React.MutableRefObject<Section>;
}

interface AboutMe {
  parrafos: Element[];
  imagen: Element | null;
  seccion: HTMLDivElement | Element | null;
  boton: Element | null;
}

interface Tecnologias {
  cards: Element[];
  seccion: HTMLDivElement | Element | null;
}

interface Proyectos {
  seccion: HTMLDivElement | Element | null;
}

interface Contacto {
  seccion: HTMLDivElement | Element | null;
  socialMedia: Element | null;
  formulario: Element | null;
}

function App() {
  const start = useRef<Section>({ seccion: document.createElement("div") });
  const contacto = useRef<Contacto>({
    seccion: document.createElement("div"),
    socialMedia: document.createElement("div"),
    formulario: document.createElement("div"),
  });
  const tecnologias = useRef<Tecnologias>({
    cards: [],
    seccion: document.createElement("div"),
  });
  const sobreMi = useRef<AboutMe>({
    parrafos: [],
    imagen: document.createElement("img"),
    seccion: document.createElement("div") as HTMLDivElement,
    boton: document.createElement("button"),
  });
  const proyectos = useRef<Proyectos>({
    seccion: document.createElement("div"),
  });

  //start

  const startSection = document.querySelector(".startSection");
  useEffect(() => {
    const startSection = document.querySelector(".startSection");
    if (startSection) {
      start.current = {
        seccion: startSection,
      };
    }
    //about me
    const aboutMeSection = document.querySelector(".sectionAboutMe");
    if (aboutMeSection) {
      const selectedParrafos = document.querySelectorAll(".parrafo");
      const selectedImage = document.querySelector(".imagenAboutMe");
      const selectedButton = document.querySelector(".botonCV");
      sobreMi.current = {
        parrafos: [...selectedParrafos],
        imagen: selectedImage,
        seccion: aboutMeSection,
        boton: selectedButton,
      };
    }

    //tecnologias
    const tecnoSection = document.querySelector(".tecnoSection");
    if (tecnoSection) {
      const tecnoCards = document.querySelectorAll(".tecnoCard");
      tecnologias.current = {
        cards: [...tecnoCards],
        seccion: tecnoSection,
      };
    }

    //proyectos
    const proyectoSection = document.querySelector(".proyectosSection");
    if (proyectoSection) {
      proyectos.current = {
        seccion: proyectoSection,
      };
    }

    //contacto

    const contactoSection = document.querySelector(".contactoSection");
    const socialMedia = document.querySelector(".socialMedia");
    const formulario = document.querySelector(".formulario");

    contacto.current = {
      seccion: contactoSection,
      socialMedia: socialMedia,
      formulario: formulario,
    };
  }, [startSection]);

  window.addEventListener("scroll", scrollHandler2);

  function scrollHandler2() {
    const triggerBotton = window.innerHeight * 0.9;
    const imageTrigger = window.innerHeight * 0.5;
    const tecnoTrigger = window.innerHeight;
    const contactTrigger = window.innerHeight * 0.7;
    const triggerButtonCV = window.innerHeight * 1.1;

    //parrafos about me
    sobreMi.current.parrafos.forEach((parrafo) => {
      const parrafoTop = parrafo.getBoundingClientRect().top;

      if (parrafoTop < triggerBotton) {
        parrafo.classList.add("efectoReveal");
        parrafo.classList.remove("efectoRevealOut");
        parrafo.classList.remove("efectoRevealOut");
      } else {
        parrafo.classList.remove("efectoReveal");
        parrafo.classList.add("efectoRevealOut");
      }
    });
    //imagen about me

    const imagenPerfil = sobreMi.current.imagen;

    if (imagenPerfil) {
      const imagenTop = imagenPerfil.getBoundingClientRect().top;

      if (imagenTop < imageTrigger) {
        imagenPerfil.classList.add("efectoReveal");
        imagenPerfil.classList.remove("efectoRevealOut");
      } else if (imagenTop > imageTrigger) {
        imagenPerfil.classList.add("efectoRevealOut");
        imagenPerfil.classList.remove("efectoReveal");
      }
    }

    //boton about me
    const boton = sobreMi.current.boton;

    if (boton) {
      const botonTop = boton.getBoundingClientRect().top;

      if (boton && botonTop < triggerButtonCV) {
        boton.classList.add("efectoReveal");
        boton.classList.remove("efectoRevealOut");
      } else if (boton && botonTop > triggerButtonCV) {
        boton.classList.add("efectoRevealOut");
        boton.classList.remove("efectoReveal");
      }
    }
    //tecnologias

    tecnologias.current.cards.forEach((card) => {
      const cardTop = card.getBoundingClientRect().top;

      if (cardTop < tecnoTrigger) {
        card.classList.add("efectoReveal");
        card.classList.remove("efectoRevealOut");
      } else {
        card.classList.remove("efectoReveal");
        card.classList.add("efectoRevealOut");
      }
    });

    //contacto

    const socialMedia = contacto.current.socialMedia;

    if (socialMedia) {
      const socialMediaTop = socialMedia.getBoundingClientRect().top;

      if (socialMediaTop < contactTrigger) {
        socialMedia.classList.add("efectoReveal");
        socialMedia.classList.remove("efectoRevealOut");
      }
      if (socialMediaTop > contactTrigger) {
        socialMedia.classList.remove("efectoReveal");
        socialMedia.classList.add("efectoRevealOut");
      }
    }

    const formulario = contacto.current.formulario;

    if (formulario) {
      const formularioTop = formulario.getBoundingClientRect().top;

      if (formularioTop < contactTrigger) {
        formulario.classList.add("efectoReveal");
        formulario.classList.remove("efectoRevealOut");
      }
      if (formularioTop > contactTrigger) {
        formulario.classList.remove("efectoReveal");
        formulario.classList.add("efectoRevealOut");
      }
    }
  }

  const navigate = useNavigate();

 

  const itemsNavbar: Item[] = [
    { name: "home", scroll: start },
    { name: "sobre mi", scroll: sobreMi },
    { name: "tecnologias", scroll: tecnologias },
    { name: "proyectos", scroll: proyectos },
    { name: "contacto", scroll: contacto },
  ];

  const scrollHandler = (
    elemRef:  React.MutableRefObject<Section | any>
  ) => {
    if (elemRef.current && elemRef.current.seccion) {
      window.scrollTo({
        top: elemRef.current.seccion.offsetTop,
        behavior: "smooth",
      });
    }
    navigate("/");
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              start={start}
              sobreMi={sobreMi}
              tecnologias={tecnologias}
              proyectos={proyectos}
              contacto={contacto}
              itemsNavbar={itemsNavbar}
              scrollHandler={scrollHandler}
            />
          }
        />
        <Route path="/:name" element={<ProjectInfo />} />
      </Routes>
    </>
  );
}

export default App;
