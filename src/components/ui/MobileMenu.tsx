"use client";
import { BsXLg } from "react-icons/bs";

import { SpainFlag, UKflag } from "@/assets/logos/vectoresIconos";
import { LanguageContext } from "@/context/LanguageContext";
import Link from "next/link";
import { useContext } from "react";
import {ModalContext} from "@/context/ModalContext";

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

export function MobileMenu() {
  const { menuOpen, togleMenu } = useContext(ModalContext);
  const { chosenLanguage, togleLanguage } = useContext(LanguageContext);
  return (
   <aside
  id="menuHamburguesa"
  className={`${menuOpen ? "translate-x-0" : "translate-x-full"} 
    w-[50vw] h-[100vh] fixed z-50 flex flex-col justify-start right-0 bg-bgColor transform transition-transform duration-300 ease-in-out`}
>
      <div className="w-full flex justify-start mt-[2%]  ">
        <BsXLg
        onClick={togleMenu}
          style={{ marginLeft: "1%", marginTop: "1%", fontSize: "1.3rem",cursor:"pointer" }}
        />
      </div>
      <h2 className="text-[7vh] text-center my-[20%] sm:my-[5%]">FJM</h2>
      <ul className="flex flex-col justify-evenly items-center w-[80%] h-[55%] mx-auto mb-[10%] border-solid border-t-2 ">
        {itemsNavbar.map((item, i) => (
          <Link
            href={item.path}
             onClick={togleMenu}
            key={i}
            className=" hover:text-primaryColor text-[1.1rem]"
          >
            {chosenLanguage === "english"
              ? item.name.toUpperCase()
              : item.nombre.toUpperCase()}
          </Link>
        ))}
        <li className="flex h-[15%] aspect-[2/1] justify-between items-center">
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
    </aside>
  );
}
