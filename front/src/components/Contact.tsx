import { SocialMedia } from "../assets/SocialMedia";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaArrowCircleUp } from "react-icons/fa";
import Footer from "./Footer";
import ModalMensaje from "../commons/ModalMensaje";
import { Section, Item } from "../App";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

interface ContactProps {
  referencia: React.MutableRefObject<Section | null | any>;
  itemsNavbar: Item[] | [];
  scrollHandler: (elemRef: React.MutableRefObject<Section | any>) => void;
}
function Contact({ referencia, itemsNavbar, scrollHandler }: ContactProps) {
  const { chosenLanguage } = useContext(LanguageContext);

  const handleModal = (): void => {
    const modal = document.querySelector(".modalMensaje");

    modal?.classList.remove("menuHamburAnimationOut");
    modal?.classList.remove("opacity-0");

    modal?.classList.add("menuHamburAnimation");
    modal?.classList.add("opacity-100");

    setTimeout(() => {
      modal?.classList.remove("menuHamburAnimation");
      modal?.classList.add("menuHamburAnimationOut");
    }, 2500);
  };

  const singUpForm = useFormik({
    initialValues: {
      name: "",
      subject: "",
      email: "",
      message: "",
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "firstname minimum 2 character")
        .required("firstname is required"),
      subject: Yup.string()
        .min(2, "subject minimum 2 character")
        .required("subject is required"),
      email: Yup.string().email("invalid email").required("email is required"),
      message: Yup.string()
        .min(4, "message minimum 4 characters")
        .required("message is required"),
    }),

    onSubmit: (values) => {
      axios
        .post("https://formspree.io/f/xgegwpzd", {
          name: values.name,
          subject: values.subject,
          email: values.email,
          message: values.message,
        })
        .then((response) => {
          console.log(response.data);
          singUpForm.resetForm();
          handleModal();
        })
        .catch((error) => {
          console.log(error);
        });
    },
  });

  return (
    <section
      ref={referencia}
      id="contacto"
      className={` contactoSection w-full h-auto pt-[12vh] fondo relative overflow-hidden`}
    >
      <h2 className="ml-[5%] text-[1.5rem] font-medium">{`${
        chosenLanguage === "english" ? "CONTACT" : "CONTACTO"
      }`}</h2>
      <div className="w-full h-auto h-min-[90vh]  flex justify-center items-start lg:flex-row xs:flex-col xs:items-center  ">
        <div
          className={`socialMedia efectoRevealOut w-1/2 min-h-[40vh] h-[70%]  flex items-center flex-col justify-center xs:w-[100%] xs:mt-[5%]`}
        >
          <div className="w-[80%]">
            <h3 className="text-[1.2rem] font-medium ">{`${chosenLanguage==="english" ? "Let's get in touch:":"Contactemonos:"}`}</h3>
            <p className="mt-[2%] text-[1.05rem]">
              {`${
                chosenLanguage === "english"
                  ? "I am currently looking for new opportunities. If you have any questions or just want to get in touch, don't hesitate to contact me."
                  : "Actualmente me encuentro en búsqueda de nuevas oportunidades Si tienes alguna pregunta o simplemente quieres ponerte en contacto, no dudes en contactarme."
              }`}
            </p>
          </div>
          <div className="w-[60%] h-[8vh]  my-[2%] flex justify-center items-cente">
            {SocialMedia.map((media) => {
              return (
                <div className="aspect-square rounded-full h-[100%] flex justify-center items-center shadow-lg shadow-shodowGrey400 mr-[5%] hover:text-primaryColor">
                  <Link
                    to={media.link}
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

        <div className={`formulario efectoRevealOut w-1/2 xs:w-[100%]`}>
          <form
            onSubmit={singUpForm.handleSubmit}
            className="flex flex-col items-start w-[80%] rounded-lg mx-auto p-[3%] shadow-lg shadow-shodowGrey400 text-[1.1rem]"
          >
            <label className="ml-[1%] text-[1.15rem] font-medium">{`${
              chosenLanguage === "english" ? "NAME" : "NOMBRE"
            }`}</label>
            <input
              id="name"
              name="name"
              value={singUpForm.values.name}
              onChange={singUpForm.handleChange}
              onBlur={singUpForm.handleBlur}
              type="text"
              className={`w-[100%] h-[6.5vh] border  rounded-lg text-black  ${
                singUpForm.errors.name && singUpForm.touched.name
                  ? "mb-[0] border-red-600"
                  : "mb-[2%] border-blue-400"
              } `}
            />
            <p className="text-[red] text-[0.9rem]">
              {singUpForm.errors.name &&
                singUpForm.touched.name &&
                singUpForm.errors.name}
            </p>
            <label className="ml-[1%] text-[1.15rem] font-medium">{`${
              chosenLanguage === "english" ? "SUBJECT" : "ASUNTO"
            }`}</label>
            <input
              id="subject"
              name="subject"
              value={singUpForm.values.subject}
              onChange={singUpForm.handleChange}
              onBlur={singUpForm.handleBlur}
              type="text"
              className={`w-[100%] h-[6.5vh] border  rounded-lg text-black ${
                singUpForm.errors.subject && singUpForm.touched.subject
                  ? "mb-[0] border-red-600"
                  : "mb-[2%] border-blue-400"
              } `}
            />
            <p className="text-[red] text-[0.9rem]">
              {singUpForm.errors.subject &&
                singUpForm.touched.subject &&
                singUpForm.errors.subject}
            </p>
            <label className="ml-[1%] text-[1.15rem] font-medium">EMAIL</label>
            <input
              id="email"
              name="email"
              value={singUpForm.values.email}
              onChange={singUpForm.handleChange}
              onBlur={singUpForm.handleBlur}
              type="email"
              className={`w-[100%] h-[6.5vh] border  rounded-lg text-black ${
                singUpForm.errors.email && singUpForm.touched.email
                  ? "mb-[0] border-red-600"
                  : "mb-[2%] border-blue-400"
              } `}
            />
            <p className="text-[red] text-[0.9rem]">
              {singUpForm.errors.email &&
                singUpForm.touched.email &&
                singUpForm.errors.email}
            </p>
            <label className="ml-[1%] text-[1.15rem] font-medium">
              {`${chosenLanguage === "english" ? "MESSAGE" : "MENSAJE"}`}
            </label>
            <textarea
              id="message"
              name="message"
              value={singUpForm.values.message}
              onChange={singUpForm.handleChange}
              onBlur={singUpForm.handleBlur}
              className={`w-[100%] h-[20vh] border  rounded-lg text-black ${
                singUpForm.errors.message && singUpForm.touched.message
                  ? "mb-[0] border-red-600"
                  : "mb-[2%] border-blue-400"
              } `}
            />
            <p className="text-[red] text-[0.9rem]">
              {singUpForm.errors.message &&
                singUpForm.touched.message &&
                singUpForm.errors.message}
            </p>
            <button
              type="submit"
              className="w-full h-[7vh] mt-[2%] bg-primaryColor text-black rounded-lg text-[1.2rem] duration-1000  font-semibold hover:scale-[1.05]"
            >
              {`${
                chosenLanguage === "english" ? "SEND MESSAGE" : "ENVIAR MENSAJE"
              }`}
            </button>
          </form>
        </div>
      </div>
      <div className="w-full flex justify-center mb-[2%]">
        <button
          onClick={() => scrollHandler(itemsNavbar[0].scroll)}
          className="text-[6vh] rounded-full text-primaryColor  arrowDownAnimation hover:shadow-lg hover:shadow-primaryColor"
        >
          <FaArrowCircleUp />
        </button>
      </div>
      <ModalMensaje />
      <Footer />
    </section>
  );
}

export default Contact;
