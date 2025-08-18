"use client";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";

interface Props {
  text: string;
}

export const Paragraph = ({ text }: Props) => {

     const refTitle = useScrollAnimation<HTMLParagraphElement>("efectoReveal");

  return (
    <p ref={refTitle} className=" parrafo text-[1.1rem] lg:text-[1.2rem]  mb-[2%] text-center">
      {text}
    </p>
  );
};
