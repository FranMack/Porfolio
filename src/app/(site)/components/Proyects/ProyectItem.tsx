"use client";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";

interface Props {
  name: string;
  path: StaticImageData;
  info: string;
}

export const ProyectItem = ({ name, path, info }: Props) => {
  const chosenLanguage = "english";
  const router = useRouter();
  const handleLink = (projectName: string) => {
    router.push(`/projects/${projectName}`);
  };

  const ref = useScrollAnimation<HTMLDivElement>("efectoReveal");

  return (
    <div
      ref={ref}
      key={name}
      className="group w-[90%] aspect-[2/1] items-center justify-self-center rounded-xl overflow-hidden relative hover:shadow-lg hover:shadow-primary"
    >
      <div className="absolute h-[100%] w-[100%]   opacity-0 duration-1000 group-hover:opacity-100 z-10 flex items-center flex-col justify-center">
        <h3 className="text-[1.8rem] font-semibold mb-[2%]">{name}</h3>
        <p className=" mb-[2%] sm:text-[1.3rem] xs:text-[1.1rem] hidden lg:block text-center">
          {info}
        </p>

        <button
          onClick={() => {
            handleLink(name);
          }}
          className="text-[1.1rem]  text-primary border-primary border-[2px]  font-semibold py-[1%] px-[3%] rounded-xl  hover:scale-[1.05] hover:shadow-lg hover:shadow-primary"
        >
          {`${chosenLanguage === "english" ? "MORE IFO" : "VER MAS"}`}
        </button>
      </div>

      <Image
        src={path}
        alt={name}
        className="h-full w-full object-center object-cover group-hover:opacity-40 duration-1000 "
      />
    </div>
  );
};
