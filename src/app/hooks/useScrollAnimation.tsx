"use client";
import { useEffect, useRef, useState } from "react";

export const useScrollAnimation = <T extends HTMLElement>(
  className: string
) => {
  const elementRef = useRef<T | null>(null);
  const [hasTrigged, setHasTrigged] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      if (typeof window === "undefined") return;

      if (hasTrigged) return;

      const triggerBottom = window.innerHeight;
      const element = elementRef.current;

      if (element) {
        const topCoordinates = element.getBoundingClientRect().top;

        if (topCoordinates < triggerBottom) {
          element.classList.add(className);
          setHasTrigged(true);
        }
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", scrollHandler);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", scrollHandler);
      }
    };
  }, [className, hasTrigged]); // ✅ agregamos dependencias necesarias

  return elementRef;
};
