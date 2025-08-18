"use client";

import { LanguageContext } from "@/context/LanguageContext";
import Image, { StaticImageData } from "next/image";
import { title } from "process";
import { useContext, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface Props {
  images: StaticImageData[];
  technologies: string[];
}

export const Carrousel = ({ images, technologies }: Props) => {
  const { chosenLanguage } = useContext(LanguageContext);
  const [currentImage, setCurrentImage] = useState(0);
  const [isImageLoading, setIsImageLoading] = useState(true);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
    setIsImageLoading(true);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
    setIsImageLoading(true);
  };

  const goToImage = (index: number) => {
    setCurrentImage(index);
    setIsImageLoading(true);
  };

  const handleImageLoad = () => {
    setIsImageLoading(false);
  };

 const colors = {
  React: "bg-blue-500",
  TypeScript: "bg-blue-600",
  Javascript: "bg-yellow-500",
  "Node js": "bg-green-600",
  Express: "bg-gray-800",
  PostgreSQL: "bg-blue-700",
  MongoDB: "bg-green-700",
  Sass: "bg-cyan-500",
  "Tailwind CSS": "bg-cyan-500",
  "Next.js": "bg-gray-800",
  "Vue.js": "bg-green-500",
  Mongoose: "bg-red-800",
  JWT:"bg-purple-500",
  Github:"bg-black",
  "Mercado Pago":"bg-blue-500",
  Paypal:"bg-blue-800"
} as const; // hace que las claves sean literales

type Tech = keyof typeof colors; // tipo de todas las claves de colors

const getTechColor = (tech: string) => {
  if ((tech as Tech) in colors) {
    return colors[tech as Tech];
  }
  return "bg-gray-600";
};

  return (
    <div className="space-y-4">
      <div className="relative group bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden">
        <div className="aspect-auto relative border">
          {isImageLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-200 dark:bg-gray-700 animate-pulse">
              <div className="w-8 h-8 border-4 border-violet-200 border-t-primary rounded-full animate-spin"></div>
            </div>
          )}
          <Image
            src={images[currentImage]}
            alt={`${title} - Screenshot ${currentImage + 1}`}
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              isImageLoading ? "opacity-0" : "opacity-100"
            }`}
            onLoad={handleImageLoad}
          />

          {/* Controles del carrusel */}
          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
              >
                <FaChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
              >
                <FaChevronRight className="w-5 h-5" />
              </button>
            </>
          )}
        </div>
      </div>

      {/* Indicadores de imagen */}
      {images.length > 1 && (
        <div className="flex justify-center gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                index === currentImage
                  ? "bg-primary"
                  : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
              }`}
            />
          ))}
        </div>
      )}

      <div>
        <h3 className="text-xl font-semibold text-[#ffff] dark:text-white mb-4">
          {chosenLanguage === "english"
            ? "Technologies used"
            : "Tecnologías utilizadas"}
        </h3>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className={`inline-flex items-center px-3 py-1.5 rounded-lg text-white text-sm font-medium ${getTechColor(
                tech
              )} hover:scale-105 transition-transform duration-200 shadow-lg`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
