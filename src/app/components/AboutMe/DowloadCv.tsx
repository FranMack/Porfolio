"use client";

import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";
import Link from "next/link";
import { FaDownload } from "react-icons/fa";

const cvEnglish =
  "https://drive.google.com/file/d/1TsPL6Nyj4eioZ6EeKynk8n93-c5ryr_L/view?usp=drive_link";
const cvSpanish =
  "https://drive.google.com/file/d/1NCuHO7_WfAe7rAief985Za574Uk4U70Q/view?usp=drive_link";

export const DowloadCv = () => {
  const refTitle = useScrollAnimation<HTMLDivElement>("efectoReveal");
  return (
    <div
      ref={refTitle}
      className="botonCV h-fit w-full flex justify-evenly  my-[1%]"
    >
      <Link
        href={cvSpanish}
        target="_blank"
        download="CV Francisco Mackinnon"
        className="  text-[1.1rem]  text-primary border-primary border-[2px]  font-semibold  p-[2%] rounded-lg flex justify-evenly  w-[40%] sm:w-[30%] lg:w-[30%] mb-[10%] lg:mb-0 hover:scale-[1.05] hover:shadow-lg hover:shadow-primary "
      >
        <FaDownload /> <p className="ml-[5%] ">{`CV (esp)`}</p>
      </Link>
      <Link
        href={cvEnglish}
        target="_blank"
        download="Resume Francisco Mackinnon"
        className=" text-[1.1rem]  text-primary border-primary border-[2px]  font-semibold  p-[2%] rounded-lg flex justify-evenly  w-[40%] sm:w-[30%] lg:w-[30%]  mb-[10%] lg:mb-0 hover:scale-[1.05] hover:shadow-lg hover:shadow-primary "
      >
        <FaDownload /> <p className="ml-[5%] ">{`CV (eng)`}</p>
      </Link>
    </div>
  );
};

//https://drive.google.com/file/d/1NCuHO7_WfAe7rAief985Za574Uk4U70Q/view?usp=drive_link
