import reusableStyles from "../Reusable.module.css";
import { SubpageLayout } from "../components/SubpageLayout";
import styles from "./PastEvents.module.css";
import images from "../assets/past-events";
import { useState, useEffect } from "react";

export const PastEvents = () => {
  const [imagePaths, setImagePaths] = useState<string[]>([]);

  useEffect(() => {
    const loadImages = async () => {
      const loadedImages = await Promise.all(
        Object.values(images).map(async (importFn) => {
          const module = (await importFn()) as { default: string };
          return module.default;
        })
      );
      setImagePaths(loadedImages);
    };

    loadImages();
  }, []);

  return (
    <main className={reusableStyles.sectionText}>
      <SubpageLayout>
        <h1 className={reusableStyles.sectionTitle}>To juz sie działo</h1>
        <section className={styles.events}>
          {imagePaths.map((path, index) => (
            <img
              src={path}
              alt="przeszłe wydarzenie"
              key={index}
              className={styles.image}
            />
          ))}
        </section>
      </SubpageLayout>
    </main>
  );
};
