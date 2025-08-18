"use client";
import { proyectInfo2 } from "@/app/utils/info2";
import { notFound, useParams } from "next/navigation";
import { Carrousel, PojectHeader } from "../components";
import {LanguageContext} from "@/context/LanguageContext";
import { useContext } from "react";

const ProjectShowcase = () => {
 const { chosenLanguage } = useContext(LanguageContext);

  const slugParam = useParams().slug;
  

  if (!slugParam) {
    notFound(); // o podés manejar el error como prefieras
  }
  const projectName = decodeURIComponent(slugParam as string);

  const projectInfo = proyectInfo2.find((project) => {
    return (
      project.title.toLocaleLowerCase() === projectName.toLocaleLowerCase()
    );
  });

  if (!projectInfo) {
    notFound();
  }

  const {
    title,
    date,
    category,
    statusESP,
    statusENG,
    liveUrl,
    githubUrl,
    images,
    descriptionESP,
    descriptionENG,
    technologies,
    tabsESP,
    tabsENG,
  } = projectInfo;

  const tabs = chosenLanguage === "english" ? tabsENG : tabsESP;

  return (
    <section className=" w-screen h-auto min-h-screen flex items-center">
      <div className="max-w-[90%] sm:max-w-[80%] mx-auto bg-bgColor dark:bg-gray-900 rounded-3xl  overflow-hidden my-[15vh] shadow-lg shadow-primary">
        {/* Header con metadatos */}
        <PojectHeader
          title={title}
          category={category}
          status={chosenLanguage === "english" ? statusENG! : statusESP!}
          liveUrl={liveUrl}
          githubUrl={githubUrl}
          date={date}
        />

        <div className="grid lg:grid-cols-2 gap-8  p-4 sm:p-8">
          {/* Carrusel de imágenes */}
          <Carrousel technologies={technologies} images={images} />

          {/* Información del proyecto */}
          <div className="space-y-6">
            {/* Descripción */}
            <div>
              <h3 className="text-xl font-semibold text-[#ffff] dark:text-white mb-3">
                {chosenLanguage === "english"
                  ? "About the project"
                  : " Sobre el proyecto"}
              </h3>
              <p className="text-[#ffff] dark:text-gray-300 leading-relaxed">
                {chosenLanguage === "english" ? descriptionENG : descriptionESP}
              </p>
            </div>

            {/* Características destacadas */}
            <div className="bg-gray-900  dark:bg-gray-800/50 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-[#ffff] dark:text-white mb-3">
                {chosenLanguage === "english"
                  ? "Featured Features"
                  : "Características destacadas"}
              </h3>
              <div className="grid gap-2">
                {tabs?.map((item) => {
                  return (
                    <div
                      key={item}
                      className="flex items-center text-[#ffff] dark:text-gray-300"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span>{item}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
