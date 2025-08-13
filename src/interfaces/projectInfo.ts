import { StaticImageData } from "next/image";

export interface ProjectInfo {
  title: string;
  infoSpanish: string;
  infoEnglish: string;
  descriptionESP: string;
  descriptionENG: string;
  images: StaticImageData[]; // Si las imágenes son imports, podrían tiparse como StaticImageData[]
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  date: string;
  statusESP: string;
  statusENG: string;
  category: string;
  tabsESP: string[];
  tabsENG: string[];
}
