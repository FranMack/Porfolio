"use client";

import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";
import { JSX } from "react";

interface Props {
  name: string;
  svg: JSX.Element;
}

export const TechItem = ({ name, svg }: Props) => {
  const refTitle = useScrollAnimation<HTMLDivElement>("efectoReveal");
  return (
    <div
      ref={refTitle}
      key={name}
      className={`tecnoCard  w-[85%] sm:w-[80%] aspect-[2.2/1] text-secondary  flex flex-col sm:flex-row justify-center items-center rounded-xl shadow-sm shadow-primary  duration-1000 hover:shadow-lg hover:shadow-primary`}
    >
      {svg}
      <p className="text-[1.3rem] font-semibold ">{name}</p>
    </div>
  );
};
