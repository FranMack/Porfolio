import { useParams } from "react-router-dom";
import { projectsInfo } from "../assets/proyectos/Info";
import { FaArrowCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import ModalDemo from "../commons/ModalDemo";
import { useState } from "react";
import Footer from "../components/Footer";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { SpainFlag } from "../assets/logos/vectoresIconos";
import { UKflag } from "../assets/logos/vectoresIconos";

function ProjectInfo() {
  const { chosenLanguage, togleLanguage } = useContext(LanguageContext);
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
  const handleLinkFront2 = (): void => {
    const newTab = window.open(`${projectInfo.frontLink2}`, "_blank");
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

  const handleAppDomain = (): void => {
    const newTab = window.open(`${projectInfo.appDomain}`, "_blank");
    if (newTab) {
      newTab.focus();
    }
  };

  const [modalVideo, setModalVideo] = useState<boolean>(false);
  const [videoOption, setVideoOption] = useState("user");

  const handleModalVideo = (): void => {
    setModalVideo(!modalVideo);
  };

  window.scrollTo(0, 0);

  return (
    <>
      <section className="saludoReveal min-h-[88vh] fondo">
        <figure className="h-[25vh] w-full overflow-hidden bg-bgColor relative flex justify-start items-center">
          <button className=" text-[6vh] rounded-full text-primaryColor  absolute left-[2%] top-[4%] z-50  hover:scale-[1.05]">
            <Link to="/">
              <FaArrowCircleLeft />
            </Link>
          </button>
          <div className="flex h-[25%] aspect-[2/1] justify-between items-center absolute top-[4%] right-[4%] z-50">
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
          </div>
          <h2 className="xs:text-[3rem] lg:text-[3.5rem] font-bold ml-[7%] mb-[1%] absolute  z-10">
            {`Proyecto: ${projectInfo.name}`}
          </h2>
         {(projectInfo.name !== "My Profile") && <img
            className="h-[100%] w-[100%] object-cover opacity-40 object-top "
            src={projectInfo.bannerPath || projectInfo.path}
            alt={projectInfo.name}
          />}
        </figure>
        {modalVideo && videoOption === "user" ? (
          <ModalDemo
            handleModalVideo={handleModalVideo}
            modalVideo={modalVideo}
            videoId={projectInfo.videoIdUser}
          />
        ) : modalVideo && videoOption === "admin" ? (
          <ModalDemo
            handleModalVideo={handleModalVideo}
            modalVideo={modalVideo}
            videoId={projectInfo.videoIdAdmin}
          />
        ) : (
          <div className="w-full flex justify-evenly mt-[2%] xs:items-center lg:items-start xs:flex-col lg:flex-row ">
            <article className="  mb-[2%] xs:w-[90%] lg:w-[55%]">
              <h2 className="text-[1.5rem] font-semibold my-[1%]">
                {`${
                  chosenLanguage === "english" ? "DESCRIPTION" : "DESCRIPCIÓN"
                }`}
              </h2>
              <p className="mb-[1%] mr-[2%] xs:text-[1.1rem] lg:text-[1.15rem]">
                {`${
                  chosenLanguage === "english"
                    ? projectInfo.descriptionEnglish
                    : projectInfo.descriptionSpanish
                }`}
              </p>
              <h3 className="text-[1.5rem] font-semibold my-[1%]">
                {`${
                  chosenLanguage === "english"
                    ? "FUNCTIONALITIES"
                    : "FUNCIONALIDADES"
                }`}
              </h3>
              {projectInfo.userFunctionalitySpanish && (
                <>
                  <div className="flex flex-col">
                    <h4 className="text-[1.3rem] font-semibold my-[1%] underline underline-offset-4">
                      {`${chosenLanguage === "english" ? "User" : "Usuario"}`}
                    </h4>
                    <p className="mr-[2%] xs:text-[1.1rem] lg:text-[1.15rem]">
                      {`${
                        chosenLanguage === "english"
                          ? projectInfo.userFunctionalityEnglish
                          : projectInfo.userFunctionalitySpanish
                      }`}
                    </p>
                    {projectInfo.videoIdUser && <button
                      onClick={() => {
                        setVideoOption("user");
                        handleModalVideo();
                      }}
                      className=" text-primaryColor border-primaryColor border-[2px] font-semibold px-[3%] py-[1%] my-[1%] rounded-md text-[1.1rem]  xs:w-[25%] lg:w-[13%] hover:scale-[1.05] hover:shadow-lg hover:shadow-primaryColor"
                    >
                      Demo
                    </button>}
                  </div>
                </>
              )}
              {projectInfo.adminFunctionalitySpanish && (
                <>
                  <h4 className="text-[1.3rem] font-semibold my-[1%] underline underline-offset-4">
                    {`${
                      chosenLanguage === "english" ? "Admin" : "Administrador"
                    }`}
                  </h4>
                  <p className="mb-[1%] mr-[2%] xs:text-[1.1rem] lg:text-[1.15rem]">
                    {`${
                      chosenLanguage === "english"
                        ? projectInfo.adminFunctionalityEnglish
                        : projectInfo.adminFunctionalitySpanish
                    }`}
                  </p>
                  {projectInfo.videoIdAdmin &&
                  <button
                    onClick={() => {
                      setVideoOption("admin");
                      handleModalVideo();
                    }}
                    className=" text-primaryColor border-primaryColor border-[2px] font-semibold px-[3%] py-[1%] my-[1%] rounded-md text-[1.1rem] xs:w-[25%] lg:w-[13%] hover:scale-[1.05] hover:shadow-lg hover:shadow-primaryColor"
                  >
                    Demo
                  </button>}
                </>
              )}
              <h3 className="text-[1.5rem] font-semibold mt-[1%] mb-[2%] ">
                {`${
                  chosenLanguage === "english" ? "REPOSITORIES / DEPLOY" : "REPOSITORIOS / DEPLOY"
                }`}
              </h3>
              <div className=" flex justify-between   text-[1.15rem] xs:w-[100%] sm:w-[80%] lg:w-[50%] ">
                {projectInfo.backLink && (
                  <button
                    onClick={handleLinkBack}
                    className="  text-primaryColor border-primaryColor border-[2px]  font-semibold xs:px-[3%] xs:py-[1%] lg:px-[5%] lg:py-[2%] rounded-md hover:scale-[1.05] hover:shadow-lg hover:shadow-primaryColor"
                  >
                    Backend
                  </button>
                )}

               {projectInfo.frontLink && <button
                  onClick={handleLinkFront}
                  className="  text-primaryColor border-primaryColor border-[2px]  font-semibold xs:px-[3%] xs:py-[1%]  lg:px-[5%] lg:py-[2%] rounded-md hover:scale-[1.05] hover:shadow-lg hover:shadow-primaryColor"
                >
                  Frontend
                </button>}
                {projectInfo.frontLink2 && (
                  <button
                    onClick={handleLinkFront2}
                    className="  text-primaryColor border-primaryColor border-[2px]  font-semibold xs:px-[3%] xs:py-[1%]  lg:px-[5%] lg:py-[2%]] rounded-md hover:scale-[1.05] hover:shadow-lg hover:shadow-primaryColor"
                  >
                    Frontend II
                  </button>
                )}
              </div>

              {!projectInfo.frontLink && !projectInfo.frontLink2  && !projectInfo.backLink  && <button
                  onClick={handleAppDomain}
                  className="  text-primaryColor border-primaryColor border-[2px]  font-semibold xs:px-[3%] xs:py-[1%]  lg:px-[5%] lg:py-[2%] rounded-md hover:scale-[1.05] hover:shadow-lg hover:shadow-primaryColor"
                >
                  Visitar el sitio
                </button>}
            </article>

            <aside className=" lg:text-start shadow-lg mb-[2%] my-[1%] rounded-lg h-fit py-[1%] flex flex-col  xs:items-start lg:items-center  xs:w-[90%] lg:w-[25%] lg:shadow-primaryColor  ">
              <h3 className="text-[1.5rem] font-semibold my-[3%]">
                {`${
                  chosenLanguage === "english" ? "TECHNOLOGIES" : "TECNOLOGÍAS"
                }`}
              </h3>
              <ul className="text-[1.2rem] flex flex-col items-center justify-center  w-fit  xs:items-start lg:mx-auto xs:list-disc ml-[5%] lg:list-none">
                {projectInfo &&
                  projectInfo.tecnologias &&
                  projectInfo.tecnologias.map((tec, i) => {
                    return (
                      <li className="mb-[5%] list-disc " key={i}>
                        {tec}
                      </li>
                    );
                  })}
              </ul>
            </aside>
          </div>
        )}
        <Footer />
      </section>
    </>
  );
}

export default ProjectInfo;
