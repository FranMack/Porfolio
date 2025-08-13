"use client"
import { tecnologias } from "@/assets/logos/logos";
import { TechItem } from "../components/Technologies/TechItem";
import {LanguageContext} from "@/context/LanguageContext";
import { useContext } from "react";

export const Technologies = () => {
  const { chosenLanguage } = useContext(LanguageContext);

  return (
    <section
    id="technologies"
     className="tecnoSection w-full h-auto pt-[12vh]">
      <h2 className="ml-[5%] text-[1.5rem] font-medium">{`${
        chosenLanguage === "english" ? "TECHNOLOGIES" : "TECNOLOGÍAS"
      }`}</h2>
      <div
        className={`h-auto  w-[90%] grid  py-[5%] gap-y-6 items-center justify-items-center mx-auto duration-1000 lg:grid-cols-4 sm:grid-cols-3 grid-cols-2  sm:[80%] lg:w-[70%] overflow-x-hidden`}
      >
        {tecnologias.map((tec) => {
          return (
           <TechItem key={tec.name} name={tec.name} svg={tec.svg}/>
          );
        })}
      </div>
    </section>
  );
};
