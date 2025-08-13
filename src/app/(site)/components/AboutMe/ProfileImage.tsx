"use client";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";
import Image from "next/image";
import aboutMePicture from "../../../../../public/profilePicture.jpg";

export const ProfileImage = () => {
  const refTitle = useScrollAnimation<HTMLDivElement>("efectoReveal");
  return (
    <div ref={refTitle} className="  sm:w-[85%] lg:w-[50%] h-ful">
      <picture className=" w-[100%] overflow-hidden flex justify-center items-center  ">
        <Image
          src={aboutMePicture}
          alt="Avatar"
          className={`imagenAboutMe  w-[80%]  object-cover duration-1000 rounded-lg shadow-lg shadow-primary mb-[2%] `}
        />
      </picture>
    </div>
  );
};
