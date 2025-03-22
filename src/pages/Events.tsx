import reusableStyles from "../Reusable.module.css";
import { SingleEvent } from "../components/SingleEvent";
import { SubpageLayout } from "../components/SubpageLayout";
// import eventImage from "../assets/event-image.jpg";
// import anotherEventImage from "../assets/collage/340746994_610941687276072_741370566768146264_n.jpg";
import eventImageAnother from "../assets/PNH_Vinyl-2.jpg";
import evImage from "../assets/collage/431058573_368306576005718_4413819404342308708_n.jpg";
import image from "../assets/collage/414082706_330676729768703_7885650144736084968_n.jpg";
import styles from "./Events.module.css";
import collage from "../assets/images";
import { useState, useEffect } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useScrollToSection } from "../utils/useScrollToSection";

export const Events = () => {
  const events = [
    {
      foto: evImage,
      title: "Projekt New Hope: S.Y.L.A.",
      date: "28.03.2025",
      place: "Projekt New Hope",
      link: "",
    },
    {
      foto: eventImageAnother,
      title: "Dni Otwarte w Szkole DJ-skiej Projektu New Hope",
      date: "30.03.2025",
      place: "Projekt new Hope",
      link: "",
    },
    {
      foto: image,
      title: "Projekt New Hope: WIELKANOC",
      date: "30.04.2025",
      place: "Projekt New Hope",
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

  useScrollToSection();

  return (
    <main className={reusableStyles.sectionText}>
      <SubpageLayout>
        <h1 className={reusableStyles.sectionTitle}>Najblizsze wydarzenia</h1>
        <section className={styles.events}>
          {events.map((event) => (
            <SingleEvent event={event} />
          ))}
        </section>
        <section className={styles.collage}>
          <ResponsiveMasonry
            columnsCountBreakPoints={{
              350: 1,
              750: 2,
              900: 3,
              1200: 4,
              1600: 5,
            }}
          >
            <Masonry gutter="5px">
              {imagePaths.map((image, index) => (
                <div key={index}>
                  <img
                    src={image}
                    alt="zdjęcie z wydarzenia"
                    className={styles.image}
                  />
                </div>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </section>
      </SubpageLayout>
    </main>
  );
};
