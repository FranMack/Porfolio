"use client";
import { LanguageContext } from "@/context/LanguageContext";
import { useContext } from "react";
import {
  FaCalendar,
  FaCode,
  FaExternalLinkAlt,
  FaGithub,
} from "react-icons/fa";

interface Props {
  status: string;
  category: string;
  title: string;
  date: string;
  liveUrl?: string;
  githubUrl?: string;
}

export const PojectHeader = ({
  category,
  title,
  date,
  liveUrl,
  githubUrl,
  status,
}: Props) => {
  const { chosenLanguage } = useContext(LanguageContext);
  const getStatusColor = (status: string) => {
    const colors = {
      Completado: "bg-green-100 text-green-800 border-green-200",
      "En desarrollo": "bg-yellow-100 text-yellow-800 border-yellow-200",
      Pausado: "bg-gray-100 text-gray-800 border-gray-200",
      Beta: "bg-blue-100 text-blue-800 border-blue-200",
    } as const;

    return (
      colors[status as keyof typeof colors] ||
      "bg-gray-100 text-gray-800 border-gray-200"
    );
  };

  return (
    <div className="bg-gradient-to-r from-gray-900 via-green-800 to-green-600 p-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">{title}</h2>
          <div className="flex items-center gap-4 text-white/80">
            <div className="flex items-center gap-1">
              <FaCalendar className="w-4 h-4" />
              <span className="text-sm">{date}</span>
            </div>
            <div className="flex items-center gap-1">
              <FaCode className="w-4 h-4" />
              <span className="text-sm">{category}</span>
            </div>
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(
                status
              )}`}
            >
              {status}
            </span>
          </div>
        </div>

        {/* Enlaces de acción */}
        <div className="flex gap-3">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105"
            >
              <FaExternalLinkAlt className="w-4 h-4" />
              <span className="hidden sm:inline">
                {chosenLanguage === "english" ? "Visit site" : "  Ver sitio"}
              </span>
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105"
            >
              <FaGithub className="w-4 h-4" />
              <span className="hidden sm:inline">
                {chosenLanguage === "english" ? "Code" : "Código"}
              </span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
