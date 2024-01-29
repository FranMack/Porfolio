import caricatura2 from "../assets/caricatura_preview_rev_1.png"
import { FaArrowCircleDown } from "react-icons/fa";
import { Section,Item } from "../App";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

interface StartProps {
  referencia: React.MutableRefObject<Section | null | any>;
  itemsNavbar: Item[] |[];
  scrollHandler: (
    elemRef: React.MutableRefObject<Section | any>
  ) => void;
 
}

function Start({ referencia, itemsNavbar, scrollHandler }: StartProps) {
  const{chosenLanguage}=useContext(LanguageContext)
  return (
    <section
      ref={referencia}
      className={` fondoStart startSection w-full min-h-[100vh] h-auto mx-auto flex flex-col items-center justify-center pt-[12vh] xs:justify-evenly `}
    >
      <div className="w-[100%]  h-auto flex  justify-center items-center xs:flex-col lg:flex-row">
        <div className="w-[50%]  flex justify-center items-center  flex-col ">
          <h1 className=" whitespace-nowrap lg:text-[6vh] sm:text-[5vh] xs:text-[4vh]">
            <span className="saludoReveal">{`${chosenLanguage==="english" ? "Hi":"Hola"},`}</span>{" "}
            <span className="saludoReveal2">{`${chosenLanguage==="english" ? "i'm Francisco":"soy Francisco"}`}</span>
          </h1>
          <h2 className="textMotion lg:text-[6vh] sm:text-[5vh] xs:text-[4vh] ">{`Full-Stack Developer </>`}</h2>
        </div>
        <div className="h-[80%] flex justify-center  items-center my-[2%] lg:my-0 lg:w-[25%] sm:w-[50%]  xs:w-[70%]  ">
          <picture className=" caricaturaMotion  h-[100%] aspect-square rounded-full  overflow-hidden  border-primaryColor border-[0.5rem]   ">
            <source />
            <img
              className={` sombraPerfil h-full w-full object-cover duration-1000 `}
              src={caricatura2}
              alt=""
            />
          </picture>
        </div>
      </div>
      <div className="saludoReveal3  flex flex-col items-center">
        <h2 className="lg:text-[5vh] sm:text-[4vh] xs:text-[4vh] ">
        {`${chosenLanguage==="english" ? "Welcome to my profile":"Bienvenidos a mi porfolio"}`}
        </h2>

        <button
          onClick={() => scrollHandler(itemsNavbar[1].scroll)}
          className="text-[6vh] rounded-full text-primaryColor  arrowDownAnimation hover:shadow-lg hover:shadow-primaryColor"
        >
          <FaArrowCircleDown />
        </button>
      </div>
    </section>
  );
}

export default Start;
