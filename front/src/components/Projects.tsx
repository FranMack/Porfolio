import React from "react";
import { projectsInfo } from "../assets/proyectos/InfoProyects";

interface ProjectsProps {
  referencia: React.MutableRefObject<HTMLDivElement | null>;
}

function Projects({ referencia }: ProjectsProps) {
  return (
    <section ref={referencia} className="w-full pt-[12vh] ">
      <h2 className="ml-[5%] text-[1.5rem] font-medium">PROYECTOS</h2>
      <div className="w-[80%]  grid grid-cols-2 mx-auto mt-[2%] gap-10">
        {projectsInfo.map((project, i) => {
          return (
            <div
              key={i}
              className="group w-[100%] aspect-[2./1] items-center justify-self-center rounded-xl overflow-hidden relative revealImage"
            >
              <div className="absolute h-[100%] w-[100%]  text-center opacity-0 duration-1000 group-hover:opacity-100 z-10 flex items-center flex-col justify-center">
                <h3 className="text-[1.8rem] font-semibold mb-[2%]">{project.name}</h3>
                <p className="text-[1.3rem] mb-[2%]" >{project.info}</p>
                <button className="text-[1.2rem] bg-yellow-500 py-[1%] px-[2%] rounded-2xl">VER MAS</button>
              </div>

              <img
                src={project.path}
                alt={project.name}
                className="h-full w-full object-center object-cover group-hover:opacity-40 duration-1000 "
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
