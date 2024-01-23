import { useParams } from "react-router-dom";
import { projectsInfo } from "../assets/proyectos/InfoProyects";
import { FaArrowCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import ModalDemo from "../commons/ModalDemo";
import { useState } from "react";
import Footer from "../components/Footer";

function ProjectInfo() {
  const projectName = useParams().name;

  const projectInfo = projectsInfo.filter((project) => {
    return project.name === projectName;
  })[0];

  const handleLinkFront = (): void => {
    const newTab = window.open(`${projectInfo.frontLink}`, "_blank");
    if (newTab) {
      newTab.focus();
    }
  };

  const handleLinkBack = (): void => {
    const newTab = window.open(`${projectInfo.frontLink}`, "_blank");
    if (newTab) {
      newTab.focus();
    }
  };

  const [modalVideo, setModalVideo] = useState<boolean>(false);
  const handleModalVideo = (): void => {
    setModalVideo(!modalVideo);
  };

  return (
    <>
      <section className="min-h-[88vh] fondo">
        <figure className="h-[40vh] w-full overflow-hidden bg-bgColor relative flex justify-start items-center">
          <button className=" text-[6vh] rounded-full text-primaryColor  absolute left-[2%] top-[4%] z-50  hover:scale-[1.05]">
            <Link to="/">
              <FaArrowCircleLeft />
            </Link>
          </button>
          <h2 className="xs:text-[3rem] lg:text-[3.5rem] font-bold ml-[7%] mb-[1%] absolute  z-10">
            {`Proyecto: ${projectInfo.name}`}
          </h2>
          <img
            className="h-[100%] w-[100%] object-cover opacity-40 object-top "
            src={projectInfo.path}
            alt={projectInfo.name}
          />
        </figure>
        {modalVideo ? (
          <ModalDemo
            handleModalVideo={handleModalVideo}
            modalVideo={modalVideo}
            videoId={projectInfo.videoId}
          />
        ) : (
          <div className="w-full flex justify-evenly mt-[2%] items-center xs:flex-col lg:flex-row">
            <article className="  mb-[2%] xs:w-[90%] lg:w-[60%]">
              <h2 className="text-[1.5rem] font-semibold my-[1%]">
                Descripción
              </h2>
              <p className="mb-[1%] mr-[2%] xs:text-[1.1rem] lg:text-[1.15rem]">
                {projectInfo.description}
              </p>
              <h3 className="text-[1.5rem] font-semibold my-[1%]">
                Funcionalidades
              </h3>
              {projectInfo.userFunctionality && (
                <>
                <div className="flex flex-col">
                  <h4 className="text-[1.3rem] font-semibold my-[1%]">
                    Usuario
                  </h4>
                  <p className="mr-[2%] xs:text-[1.1rem] lg:text-[1.15rem]">
                    {projectInfo.userFunctionality}
                  </p>
                  <button
                  onClick={handleModalVideo}
                  className=" bg-primaryColor px-[3%] py-[1%] my-[1%] rounded-md text-[1.1rem] w-1/6"
                >
                  Demo
                </button>
                </div>
                  
                </>
              )}
              {projectInfo.adminFunctionality && (
                <>
                  <h4 className="text-[1.3rem] font-semibold my-[1%]">
                    Administrador
                  </h4>
                  <p className="mb-[1%] mr-[2%] xs:text-[1.1rem] lg:text-[1.15rem]">
                    {projectInfo.adminFunctionality}
                  </p>
                </>
              )}
              <h3 className="text-[1.5rem] font-semibold mt-[1%] mb-[2%] ">
                Repositorios
              </h3>
              <div className=" flex justify-between   text-[1.15rem] xs:w-[90%] lg:w-[30%] ">
                {projectInfo.backLink && (
                  <button
                    onClick={handleLinkBack}
                    className=" bg-primaryColor px-[10%] py-[3%] rounded-md"
                  >
                    Backend
                  </button>
                )}

                <button
                  onClick={handleLinkFront}
                  className=" bg-primaryColor px-[10%] py-[3%] rounded-md"
                >
                  Frontend
                </button>
                
              </div>
            </article>

            <aside className=" lg:text-start shadow-lg mb-[2%] rounded-lg h-fit py-[1%] flex flex-col  xs:items-start lg:items-center  xs:w-[90%] lg:w-[30%] lg:shadow-primaryColor  ">
              <h3 className="text-[1.5rem] font-semibold my-[3%]">
                Tecnologías
              </h3>
              <ul className="text-[1.2rem] flex flex-col items-center justify-center  w-fit  xs:items-start lg:mx-auto xs:list-disc ml-[5%] lg:list-none">
                {projectInfo &&
                  projectInfo.tecnologias &&
                  projectInfo.tecnologias.map((tec, i) => {
                    return (
                      <li className="mb-[1%] " key={i}>
                        {tec}
                      </li>
                    );
                  })}
              </ul>
            </aside>
          </div>
        )}
        <Footer/>
      </section>
    </>
  );
}

export default ProjectInfo;
