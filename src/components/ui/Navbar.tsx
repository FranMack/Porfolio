"use client";

import { SpainFlag, UKflag } from "@/assets/logos/vectoresIconos";
import { LanguageContext } from "@/context/LanguageContext";
import { ModalContext } from "@/context/ModalContext";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";

interface Item {
  name: string;
  nombre: string;
  path: string;
}
const itemsNavbar: Item[] = [
  { name: "home", nombre: "inicio", path: "/#home" },
  { name: "about me", nombre: "sobre mi", path: "/#aboutMe" },
  { name: "technologies", nombre: "tecnologias", path: "/#technologies" },
  { name: "projects", nombre: "proyectos", path: "/#projects" },
  { name: "contact", nombre: "contacto", path: "/#contact" },
];

export function Navbar() {
  const { togleMenu } = useContext(ModalContext);
  const [scrollPosition, setScrolPosition] = useState<number>(0);

  useEffect(() => {
    function handleScroll() {
      setScrolPosition(window.scrollY);
    }

    // Agregar el event listener solo una vez
    window.addEventListener("scroll", handleScroll);

    // Cleanup: remover el event listener cuando se desmonte el componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Array vacío = solo se ejecuta al montar/desmontar

  const { chosenLanguage, togleLanguage } = useContext(LanguageContext);

  return (
    <>
      <nav
        className={`${
          scrollPosition > 0 && "shadow-sm shadow-primary bg-bgColor"
        } w-full h-[12vh]  items-center justify-between fixed  z-40  hidden md:flex`}
      >
        <Link
          href="/#home"
          className="ml-[2%] text-[2rem] hover:text-primaryColor"
        >
          FJM
        </Link>
        <ul className="flex justify-around  md:w-[75%] lg:w-[60%] xl:w-[45%] h-[50%] items-center mr-[2%]">
          {itemsNavbar.map((item, i) => (
            <Link
              href={item.path}
              key={i}
              //onClick={() => scrollHandler(item.scroll)}
              className="text-[1.1rem] group relative after:content-[''] after:absolute after:inset-y-6 after:inset-x-0 after:mx-auto after:w-0 after:h-1 after:bg-primaryColor after:transition-all after:origin-left after:transform-gpu after:group-hover:w-full after:group-hover:duration-300 after:hover:content-[''] after:hover:w-full after:hover:font-bold hover:text-primaryColor"
            >
              {chosenLanguage === "english"
                ? item.name.toUpperCase()
                : item.nombre.toUpperCase()}
            </Link>
          ))}
          <li className="flex h-full aspect-[2/1] justify-between items-center cursor-pointer">
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
          // onClick={() => scrollHandler(itemsNavbar[0].scroll)}
          className="ml-[2%] text-[2rem] hover:text-primaryColor"
        >
          FJM
        </h3>
        <FaBars
          onClick={togleMenu}
          style={{ fontSize: "1.5rem", marginRight: "2%",cursor:"pointer" }}
        />
      </nav>
    </>
  );
}
