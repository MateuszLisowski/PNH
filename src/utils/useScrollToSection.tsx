import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const scrollToSection = (hash: string) => {
  if (hash) {
    const elementId = hash.replace("#", "");
    const element = document.getElementById(elementId);

    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - 100;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      // TODO: after scroll remove hash from url
    } else {
      throw new Error(`Element with id ${elementId} not found`);
    }
  }
};

export const useScrollToSection = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      scrollToSection(hash);
    }
  }, [hash]);

  return null;
};
