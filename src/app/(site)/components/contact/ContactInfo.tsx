"use client";

import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";
import { SocialMedia } from "@/assets/SocialMedia";
import {LanguageContext} from "@/context/LanguageContext";
import Link from "next/link";
import { useContext } from "react";

export const ContactInfo = () => {
  const refTitle = useScrollAnimation<HTMLDivElement>("efectoReveal");
const { chosenLanguage } = useContext(LanguageContext);
  return (
    <div
      ref={refTitle}
      className={`socialMedia sm:w-1/2 min-h-[40vh] h-[70%]  flex items-center flex-col justify-center w-[100%] mt-[5%]`}
    >
      <div className="w-[80%]">
        <h3 className="text-[1.2rem] font-medium ">{`${
          chosenLanguage === "english"
            ? "Let's get in touch:"
            : "Contactemonos:"
        }`}</h3>
        <p className="mt-[2%] text-[1.05rem]">
          {`${
            chosenLanguage === "english"
              ? "I am currently looking for new opportunities. If you have any questions or just want to get in touch, don't hesitate to contact me."
              : "Actualmente me encuentro en búsqueda de nuevas oportunidades Si tienes alguna pregunta o simplemente quieres ponerte en contacto, no dudes en escribirme."
          }`}
        </p>
      </div>
      <div className="w-[60%] h-[8vh]  my-[2%] flex justify-center items-cente">
        {SocialMedia.map((media) => {
          return (
            <div
              key={media.id}
              className="aspect-square rounded-full h-[100%] flex justify-center items-center shadow-lg shadow-shodowGrey400 mr-[5%] hover:text-primary"
            >
              <Link
                href={media.link}
                target="_blank"
                style={{
                  height: "100%",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {media.icon}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
