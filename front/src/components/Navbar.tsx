import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Item } from "../App";
import { Section } from "../App";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { SpainFlag } from "../assets/logos/vectoresIconos";
import { UKflag } from "../assets/logos/vectoresIconos";

interface NavbarProps {
  itemsNavbar: Item[] | [];
  scrollHandler: (elemRef: React.MutableRefObject<Section | any>) => void;
  handlerMenuOpen: () => void;
}

function Navbar({ itemsNavbar, scrollHandler, handlerMenuOpen }: NavbarProps) {
  const [scrollPosition, setScrolPosition] = useState<number>(0);

  function sizeHandler() {
    setScrolPosition(window.scrollY);
  }

  window.addEventListener("scroll", sizeHandler);

  const { chosenLanguage, togleLanguage } = useContext(LanguageContext);

  return (
    <>
      <nav
        className={`${
          scrollPosition > 0 && "shadow-sm shadow-primaryColor bg-bgColor"
        } w-full h-[12vh]  items-center justify-between fixed  z-40  hidden md:flex`}
      >
        <h2
          onClick={() => scrollHandler(itemsNavbar[0].scroll)}
          className="ml-[2%] text-[2rem] hover:text-primaryColor"
        >
          FJM
        </h2>
        <ul className="flex justify-around  md:w-[75%] lg:w-[60%] xl:w-[45%] h-[50%] items-center mr-[2%]">
          {itemsNavbar.map((item, i) => (
            <li
              key={i}
              onClick={() => scrollHandler(item.scroll)}
              className="text-[1.1rem] group relative after:content-[''] after:absolute after:inset-y-6 after:inset-x-0 after:mx-auto after:w-0 after:h-1 after:bg-primaryColor after:transition-all after:origin-left after:transform-gpu after:group-hover:w-full after:group-hover:duration-300 after:hover:content-[''] after:hover:w-full after:hover:font-bold hover:text-primaryColor"
            >
              {chosenLanguage === "english"
                ? item.name.toUpperCase()
                : item.nombre.toUpperCase()}
            </li>
          ))}
          <li className="flex h-full aspect-[2/1] justify-between items-center">
            <div
              title="Español"
              onClick={togleLanguage}
              className={`${
                chosenLanguage !== "english" ? "opacity-100" : "opacity-40"
              } h-[35%] aspect-[2/1] `}
            >
              <SpainFlag />
            </div>
            <div
              title="English"
              onClick={togleLanguage}
              className={`${
                chosenLanguage === "english" ? "opacity-100" : "opacity-40"
              } h-[35%] aspect-[2/1]`}
            >
              <UKflag />
            </div>
          </li>
        </ul>
      </nav>

      <nav
        className={`${
          scrollPosition > 0 && "shadow-sm shadow-primaryColor bg-bgColor"
        } w-full h-[12vh] flex md:hidden items-center justify-between fixed shadow-lg shadow-shodowGrey400  z-40`}
      >
        <h3
          onClick={() => scrollHandler(itemsNavbar[0].scroll)}
          className="ml-[2%] text-[2rem] hover:text-primaryColor"
        >
          FJM
        </h3>
        <FaBars
          onClick={handlerMenuOpen}
          style={{ fontSize: "1.5rem", marginRight: "2%" }}
        />
      </nav>
    </>
  );
}

export default Navbar;
