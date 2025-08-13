"use client";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";
import { ContactService, FormValues } from "@/app/service/contact.service";
import { Form, Formik } from "formik";
import { useContext, useState } from "react";
import { BeatLoader } from "react-spinners";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
import { MyTextArea } from "./MyTextArea";
import { MyTextInput } from "./MyTextInput";
import {LanguageContext} from "@/context/LanguageContext";

export const ContactForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
 const { chosenLanguage } = useContext(LanguageContext);

  const initialValues = {
    name: "",
    subject: "",
    email: "",
    message: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, "Firstname minimum 2 character")
      .required("Firstname is required"),
    subject: Yup.string()
      .min(2, "Subject minimum 2 character")
      .required("subject is required"),
    email: Yup.string().email("Invalid email").required("email is required"),
    message: Yup.string()
      .min(4, "Message minimum 4 characters")
      .required("Message is required"),
  });

  const onSubmit = async (
    values: FormValues,
    { resetForm }: { resetForm: () => void }
  ) => {
    if (isLoading) return;
    setIsLoading(true);

    const consultInfo = {
      name: values.name,
      subject: values.subject,
      email: values.email,
      message: values.message,
    };

    try {
      const sendMessage = await ContactService.sendMessage(consultInfo);

      if (!sendMessage.ok) {
        throw new Error("No se pudo enviar el mensaje");
      }

      toast.success("Mensaje enviado", {
        style: { backgroundColor: "#00ce7d", color: "#ffff" },
        hideProgressBar: true,
        autoClose: 4000,
      });

      // 🔄 Limpiar formulario
      resetForm();
    } catch (error) {
      console.error(error);
      toast.error("Error al enviar mensaje", {
        style: { backgroundColor: "#ff4d4f", color: "#ffff" },
        hideProgressBar: true,
        autoClose: 4000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const refTitle = useScrollAnimation<HTMLFormElement>("efectoReveal");

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form
            ref={refTitle}
            onSubmit={formik.handleSubmit}
            noValidate
            className="flex flex-col items-start w-[80%] rounded-lg mx-auto p-[3%] shadow-lg shadow-shodowGrey400 text-[1.1rem]"
          >
            <MyTextInput
              label={chosenLanguage === "english" ? "NAME" : "NOMBRE"}
              name="name"
              type="text"
            />
            <MyTextInput
              label={chosenLanguage === "english" ? "SUBJECT" : "ASUNTO"}
              name="subject"
              type="text"
            />
            <MyTextInput
              label={chosenLanguage === "english" ? "EMAIL" : "EMAIL"}
              name="email"
              type="text"
            />
            <MyTextArea
              label={chosenLanguage === "english" ? "MESSAGE" : "MENSAJE"}
              name="message"
            />
            <button
              type="submit"
              className="w-full h-[7vh] mt-[2%] bg-primary text-black rounded-lg text-[1.2rem] duration-1000  font-semibold hover:scale-[1.05]"
            >
              {!isLoading ? (
                `${
                  chosenLanguage === "english"
                    ? "SEND MESSAGE"
                    : "ENVIAR MENSAJE"
                }`
              ) : (
                <BeatLoader color={"white"} size={15} speedMultiplier={0.4} />
              )}
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};
