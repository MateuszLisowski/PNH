import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const scrollToSection = (hash: string) => {
  if (hash) {
    const elementId = hash.replace("#", "");
    const element = document.getElementById(elementId);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      throw new Error(`Element with id ${elementId} not found`);
    }
  }
};

export const useScrollToSection = () => {
  const { hash } = useLocation();

  useEffect(() => {
    scrollToSection(hash);
  }, [hash]);

  return null;
};
