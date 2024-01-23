import { projectsInfo } from "../assets/proyectos/InfoProyects";
import { useNavigate } from "react-router-dom";

interface ProjectsProps {
  referencia: React.MutableRefObject<HTMLDivElement | null>;
}

function Projects({ referencia }: ProjectsProps) {
  const navigate = useNavigate();
  const handleLink = (projectName: string) => {
    navigate(projectName);
  };
  return (
    <section ref={referencia} className="proyectosSection w-full pt-[12vh] ">
      <h2 className="ml-[5%] text-[1.5rem] font-medium">PROYECTOS</h2>
      <div className="sm:w-[80%] xs:w-[85%]   grid  mx-auto mt-[2%] gap-10 sm:grid-cols-2 xs:grid-cols-1">
        {projectsInfo.map((project, i) => {
          return (
            <div
              key={i}
              className="group w-[100%] aspect-[2/1] items-center justify-self-center rounded-xl overflow-hidden relative revealImage"
            >
              <div className="absolute h-[100%] w-[100%]   opacity-0 duration-1000 group-hover:opacity-100 z-10 flex items-center flex-col justify-center">
                <h3 className="text-[1.8rem] font-semibold mb-[2%]">
                  {project.name}
                </h3>
                <p className=" mb-[2%] sm:text-[1.3rem] xs:text-[1.1rem]">
                  {project.info}
                </p>

                <button
                  onClick={() => {
                    handleLink(project.name);
                  }}
                  className="text-[1.1rem] bg-yellow-500 py-[1%] px-[3%] rounded-xl hover:bg-yellow-600 hover:scale-[1.05] "
                >
                  VER MAS
                </button>
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
