"use client";
import { Footer } from "@/components";
import { FaArrowCircleUp } from "react-icons/fa";
import { ContactForm } from "../components";
import { ContactInfo } from "../components/contact/ContactInfo";
import Link from "next/link";
import {LanguageContext} from "@/context/LanguageContext";
import { useContext } from "react";

export const Contact = () => {
 const { chosenLanguage } = useContext(LanguageContext);

  return (
    <section
      id="contact"
      className={` contactoSection w-full h-auto pt-[12vh] fondo relative overflow-hidden`}
    >
      <h2 className="ml-[5%] text-[1.5rem] font-medium">{`${
        chosenLanguage === "english" ? "CONTACT" : "CONTACTO"
      }`}</h2>
      <div className="w-full h-auto h-min-[90vh]  flex justify-center items-center lg:flex-row flex-col items-center  ">
        <ContactInfo />

        <div className={`formulario  sm:w-1/2 w-[100%]`}>
          <ContactForm />
        </div>
      </div>
      <div className="w-full flex justify-center mb-[2%]">
        <Link
        href="/#home"
          // onClick={() => scrollHandler(itemsNavbar[0].scroll)}
          className="text-[6vh] rounded-full text-primary  arrowDownAnimation hover:shadow-lg hover:shadow-primary"
        >
          <FaArrowCircleUp />
        </Link>
      </div>
      <Footer />
    </section>
  );
};
