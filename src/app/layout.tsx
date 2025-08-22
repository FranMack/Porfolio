import { Navbar } from "@/components";
import { MobileMenu } from "@/components/ui/MobileMenu";
import { envs } from "@/config/envs";
import LanguageContextProvider from "@/context/LanguageContext";
import ModalContextProvider from "@/context/ModalContext";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ToastContainer } from "react-toastify";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const poppins = Poppins({
  weight: ["100","200","300","400","500","600","700","800","900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Francisco Mackinnon - Desarrollador Web & Ingeniero Civil",
  description:
    "Soy Francisco Mackinnon, desarrollador web fullstack e ingeniero civil. Especializado en JavaScript, TypeScript, React, Next.js, NestJS y Express, construyo aplicaciones modernas, escalables y de alto rendimiento.",
  keywords:
    "Francisco Mackinnon, desarrollador web, ingeniero civil, fullstack, JavaScript, TypeScript, React, Next.js, NestJS, Express, desarrollo web, programación, portafolio, software",
  robots: "index, follow",
  openGraph: {
    title: "Francisco Mackinnon - Desarrollador Web & Ingeniero Civil",
    description:
      "Perfil profesional de Francisco Mackinnon, desarrollador web fullstack e ingeniero civil. Experto en tecnologías como JavaScript, TypeScript, React, Next.js, NestJS y Express.",
    images: `${envs.DOMAIN}/favicon.png`,
    url: `${envs.DOMAIN}`,
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Francisco Mackinnon - Desarrollador Web & Ingeniero Civil",
    description:
      "Desarrollador web fullstack e ingeniero civil. Experto en JavaScript, TypeScript, React, Next.js, NestJS y Express.",
    images: `${envs.DOMAIN}/favicon.png`,
  },
  authors: { name: "Francisco Mackinnon", url: `${envs.DOMAIN}` },
  alternates: {
    canonical: `${envs.DOMAIN}`,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${poppins.className} antialiased`}>
        <LanguageContextProvider>
          <ModalContextProvider>
            <Navbar />
            <MobileMenu />
            {children}
            <ToastContainer style={{ fontSize: "1rem" }} />
          </ModalContextProvider>
        </LanguageContextProvider>
        <Analytics />
      </body>
    </html>
  );
}
