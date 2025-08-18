"use client"
import Image from "next/image";
import Link from "next/link";
import { FaArrowCircleDown } from "react-icons/fa";
import caricatura2 from "../../../public/profile_avatar.png";
import { useContext } from "react";
import { LanguageContext } from "@/context/LanguageContext"; 


export const Hero = () => {
 
  const { chosenLanguage } = useContext(LanguageContext);

  return (
    <section
      //ref={referencia}
      className={` fondoStart startSection w-full min-h-[100vh] h-auto mx-auto flex flex-col items-center justify-center pt-[12vh] justify-evenly `}
    >
      <div className="w-[100%]  h-auto flex  justify-center items-center flex-col lg:flex-row">
        <div className="w-[50%]  flex justify-center items-center  flex-col ">
          <h1 className=" whitespace-nowrap  xl:text-[3rem] lg:text-[2.5rem] sm:text-[2.2rem] text-[1.6rem] mt-[5%] text-secondary">
            <span className="saludoReveal">{`${
              chosenLanguage === "english" ? "Hi" : "Hola"
            },`}</span>{" "}
            <span className="saludoReveal2">{`${
              chosenLanguage === "english" ? "i'm Francisco" : "soy Francisco"
            }`}</span>
          </h1>
          <h2 className="textMotion  xl:text-[3rem] lg:text-[2.5rem] sm:text-[2.2rem] text-[1.6rem] ">{`Full-Stack Developer </>`}</h2>
        </div>
        <div className="h-[80%] flex justify-center  items-center my-[2%] lg:my-0 lg:w-[25%] sm:w-[40%] md:w-[40%] w-[60%]  ">
          <picture className=" caricaturaMotion  h-[100%] aspect-square rounded-full  overflow-hidden  border-primary border-[0.5rem]   ">
            <Image
              src={caricatura2}
              alt="Avatar"
              className={` sombraPerfil h-full w-full object-cover duration-1000 `}
            />
          </picture>
        </div>
      </div>
      <div className="saludoReveal3  flex flex-col items-center ">
        <h2 className=" xl:text-[2.5rem] lg:text-[2.2rem] sm:text-[2rem] text-[1.5rem]  text-secondary">
          {`${
            chosenLanguage === "english"
              ? "Welcome to my profile"
              : "Bienvenidos a mi porfolio"
          }`}
        </h2>

        <Link
          href="/#aboutMe"
          className="text-[6vh] rounded-full text-primary  arrowDownAnimation hover:shadow-lg hover:shadow-primary"
        >
          <FaArrowCircleDown />
        </Link>
      </div>
    </section>
  );
};
