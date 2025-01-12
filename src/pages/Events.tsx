import reusableStyles from "../Reusable.module.css";
import { SingleEvent } from "../components/SingleEvent";
import { SubpageLayout } from "../components/SubpageLayout";
import eventImage from "../assets/event-image.jpg";
import styles from "./Events.module.css";
import collage from "../assets/images";
import { useState, useEffect } from "react";

export const Events = () => {
  const events = [
    {
      foto: eventImage,
      title: "New Hope: ELEKTRO TEMPO",
      date: "25.01.2025",
      place: "Piwnica Projektu New Hope / Wyszyńskiego 6A/07",
      link: "/",
    },
    {
      foto: eventImage,
      title: "New Hope: This is my House",
      date: "15.02.2025",
      place: "Piwnica Projektu New Hope / Wyszyńskiego 6A/07",
      link: "/",
    },
    {
      foto: eventImage,
      title: "New Hope: MOTOR CITY",
      date: "15.03.2025",
      place: "Piwnica Projektu New Hope / Wyszyńskiego 6A/07",
      link: "/",
    },
    {
      foto: eventImage,
      title: "New Hope pres. Debiuty",
      date: "12.04.2025",
      place: "Piwnica Projektu New Hope / Wyszyńskiego 6A/07",
      link: "/",
    },
    {
      foto: eventImage,
      title: "New Hope: WIELKANOC",
      date: "20.04.2025",
      place: "Kawiarnia Muzyczna FAMA",
      link: "/",
    },
  ];

  const [imagePaths, setImagePaths] = useState<string[]>([]);

  useEffect(() => {
    const loadImages = async () => {
      const loadedImages = await Promise.all(
        Object.values(collage).map(async (importFn) => {
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
        <h1 className={reusableStyles.sectionTitle}>Najblisze wydarzenia</h1>
        <section className={styles.events}>
          {events.map((event) => (
            <SingleEvent event={event} />
          ))}
        </section>
        <section className={styles.collage}>
          {imagePaths.map((image, index) => (
            <div key={index} className="image-container">
              <img
                src={image}
                alt="zdjęcie z wydarzenia"
                className={styles.image}
              />
            </div>
          ))}
        </section>
      </SubpageLayout>
    </main>
  );
};
