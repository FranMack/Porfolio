import Start from "../components/Start";
import AboutMe from "../components/AboutMe";
import Tecnologias from "../components/Tecnologias";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import MenuHamburguesa from "../commons/MenuHamburguesa";
import {useMenuHamburguer} from "../hooks/useMenuHamburguer"

interface HomeProps {
  start: React.MutableRefObject<HTMLDivElement | never[]>;
  sobreMi: React.MutableRefObject<HTMLDivElement | never[]>;
  tecnologias: React.MutableRefObject<HTMLDivElement | never[]>;
  proyectos: React.MutableRefObject<HTMLDivElement | never[]>;
  contacto: React.MutableRefObject<HTMLDivElement | never[]>;
  itemsNavbar: {
    name: string;
    scroll: React.MutableRefObject<HTMLDivElement | never[]>;
  }[];
  scrollHandler: (
    elemRef: React.MutableRefObject<HTMLDivElement | null>
  ) => void;
}

function Home({
  start,
  sobreMi,
  tecnologias,
  proyectos,
  contacto,
  itemsNavbar,
  scrollHandler,
}: HomeProps) {

  const {handlerMenuOpen,menuOpen}=useMenuHamburguer()

  
 
  return (
    <>
      <Navbar
        itemsNavbar={itemsNavbar}
        scrollHandler={scrollHandler}
        handlerMenuOpen={handlerMenuOpen}
      />
      
      <MenuHamburguesa
        itemsNavbar={itemsNavbar}
        scrollHandler={scrollHandler}
        handlerMenuOpen={handlerMenuOpen}
      />
      <main className={`${
        menuOpen && "opacity-40 brightness-50 pointer-events-none bg-bgColor"
      }`}>
      <Start
        referencia={start}
        itemsNavbar={itemsNavbar}
        scrollHandler={scrollHandler}
      />
      <AboutMe referencia={sobreMi} />
      <Tecnologias referencia={tecnologias} />
      <Projects referencia={proyectos} />
      <Contact
        referencia={contacto}
        itemsNavbar={itemsNavbar}
        scrollHandler={scrollHandler}
      />
      </main>
    </>
  );
}

export default Home;
