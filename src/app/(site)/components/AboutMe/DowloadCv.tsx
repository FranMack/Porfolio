"use client";

import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";
import { FaDownload } from "react-icons/fa";

export const DowloadCv = () => {
  const cvSpanish = "";
  const cvEnglish = "";

  const refTitle = useScrollAnimation<HTMLDivElement>("efectoReveal");
  return (
    <div
      ref={refTitle}
      className="botonCV h-fit w-full flex justify-evenly  my-[1%]"
    >
      <a
        href={cvSpanish}
        download="CV Francisco Mackinnon"
        className="  text-[1.1rem]  text-primary border-primary border-[2px]  font-semibold  p-[2%] rounded-lg flex justify-evenly  w-[40%] sm:w-[30%] lg:w-[30%] mb-[10%] lg:mb-0 hover:scale-[1.05] hover:shadow-lg hover:shadow-primary "
      >
        <FaDownload /> <p className="ml-[5%] ">{`CV (esp)`}</p>
      </a>
      <a
        href={cvEnglish}
        download="Resume Francisco Mackinnon"
        className=" text-[1.1rem]  text-primary border-primary border-[2px]  font-semibold  p-[2%] rounded-lg flex justify-evenly  w-[40%] sm:w-[30%] lg:w-[30%]  mb-[10%] lg:mb-0 hover:scale-[1.05] hover:shadow-lg hover:shadow-primary "
      >
        <FaDownload /> <p className="ml-[5%] ">{`CV (eng)`}</p>
      </a>
    </div>
  );
};
