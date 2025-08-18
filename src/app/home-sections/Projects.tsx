"use client";
import { proyectInfo2 } from "@/app/utils/info2";

import { LanguageContext } from "@/context/LanguageContext";
import { useContext } from "react";
import { ProyectItem } from "../components/Proyects/ProyectItem";

export const Projects = () => {
  const { chosenLanguage } = useContext(LanguageContext);

  return (
    <section id="projects" className="proyectosSection w-full pt-[12vh] ">
      <h2 className="ml-[5%] text-[1.5rem] font-medium">{`${
        chosenLanguage === "english" ? "PROJECTS" : "PROYECTOS"
      }`}</h2>
      <div className="sm:w-[85%] xs:w-[60%] grid  mx-auto mt-[2%] gap-10 sm:grid-cols-2 xs:grid-cols-1 pb-[1%]">
        {proyectInfo2.map((project) => {
          return (
            <ProyectItem
              key={project.title}
              name={project.title}
              path={project.images[0]}
              info={`${
                chosenLanguage === "english"
                  ? project.infoEnglish
                  : project.infoSpanish
              }`}
            />
          );
        })}
      </div>
    </section>
  );
};
