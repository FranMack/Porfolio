import { useParams } from "react-router-dom";
import { projectsInfo } from "../assets/proyectos/InfoProyects";
import { FaArrowCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import ModalDemo from "../commons/ModalDemo";
import { useState } from "react";

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

  const [modalVideo,setModalVideo]=useState<boolean>(false)
  const handleModalVideo=():void=>{
    setModalVideo(!modalVideo)
  }

  return (
    <>
      <section className="min-h-[88vh]">
        <figure className="h-[40vh] w-full overflow-hidden bg-black relative">
        <button className=" text-[6vh] rounded-full text-yellow-400 arrowDownAnimation absolute left-[4%] top-[4%] z-50">
    <Link to="/"><FaArrowCircleLeft/></Link>
    
    </button>
          <h2 className="text-[3.5rem] font-bold ml-[7%] mb-[1%] absolute top-[40%] z-10">
            {`Proyecto: ${projectInfo.name}`}
          </h2>
          <img
            className="h-[100%] w-[100%] object-cover opacity-40 object-top "
            src={projectInfo.path}
            alt={projectInfo.name}
          />
        </figure>
        {modalVideo ? (<ModalDemo handleModalVideo={handleModalVideo} modalVideo={modalVideo} videoId={projectInfo.videoId}/>):(
          <div className="w-full flex justify-evenly mt-[2%] items-center">
          <article className="w-[60%]  mb-[2%]">
            <h2 className="text-[1.5rem] font-semibold mb-[1%]">Descripción</h2>
            <p className="mb-[1%] mr-[2%] text-[1.15rem]">{projectInfo.description}</p>
            <h3 className="text-[1.5rem] font-semibold mb-[1%]">
              Funcionalidades
            </h3>
            {projectInfo.userFunctionality && (
              <>
                <h4 className="text-[1.3rem] font-semibold mb-[1%]">Usuario</h4>
                <p className="mr-[2%] text-[1.15rem]">{projectInfo.userFunctionality}</p>
              </>
            )}
            {projectInfo.adminFunctionality && (
              <>
                <h4 className="text-[1.3rem] font-semibold mb-[1%]">
                  Administrador
                </h4>
                <p className="mb-[1%] mr-[2%] text-[1.15rem]">
                  {projectInfo.adminFunctionality}
                </p>
              </>
            )}
            <h3 className="text-[1.5rem] font-semibold my-[1%] mb-[1%]">
              Repositorios
            </h3>
            <div className="w-1/2 flex justify-around  mx-auto text-[1.15rem]">
              {projectInfo.backLink && (
                <button
                  onClick={handleLinkBack}
                  className=" bg-yellow-500 px-[3%] py-[2%] rounded-md"
                >
                  Backend
                </button>
              )}

              <button
                onClick={handleLinkFront}
                className=" bg-yellow-500 px-[3%] py-[2%] rounded-md"
              >
                Frontend
              </button>
              <button
                onClick={handleModalVideo}
                className=" bg-yellow-500 px-[3%] py-[2%] rounded-md"
              >
                Demo
              </button>
            </div>
          </article>

          <aside className="w-[20%]  text-start shadow-lg shadow-yellow-400 mb-[2%] rounded-lg h-fit py-[1%] flex flex-col items-center ">
            <h3 className="text-[1.5rem] font-semibold my-[3%]">Tecnologías</h3>
            <ul className="text-[1.2rem] flex flex-col items-center justify-center  w-fit mx-auto ">
              {projectInfo &&
                projectInfo.tecnologias &&
                projectInfo.tecnologias.map((tec, i) => {
                  return (
                    <li className="mb-[1%]" key={i}>
                      {tec}
                    </li>
                  );
                })}
            </ul>
          </aside>
        </div>)}
        
      </section>
    </>
  );
}

export default ProjectInfo;
