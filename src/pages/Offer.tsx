import { SubpageLayout } from "../components/SubpageLayout";
import { useScrollToSection } from "../utils/useScrollToSection";
import { Link } from "react-router-dom";
import styles from "../Reusable.module.css";

export const Offer = () => {
  useScrollToSection();

  return (
    <main>
      <SubpageLayout>
        <section className={styles.sectionText}>
          <p className={styles.text}>
            Prowadzimy kursy i warsztaty DJ-skie stacjonarnie i wyjazdowo. W
            naszej ofercie znajdziesz między innymi warsztaty grupowe i
            indywidualne skierowane do każdej grupy wiekowej. Oferujemy również
            szereg usług (
            {
              <Link to="./#services" className={styles.link}>
                cennik
              </Link>
            }
            ).
          </p>
          <p className={styles.text}>
            W razie pytań, spersonalizowanych usług niewymienionych w cenniku
            lub chęci zapisania się na zajęcia prosimy o kontakt telefoniczny
            lub mailowy -{" "}
            {
              <Link to="../contact#info" className={styles.link}>
                kontakt
              </Link>
            }
            . Postaramy się spełnić Twoje oczekiwania.
          </p>
        </section>
        <h2 id="workshops" className={styles.sectionTitle}>
          Warsztaty DJ-skie
        </h2>
        <h2 id="lessons" className={styles.sectionTitle}>
          Lekcje indywidualne
        </h2>
        <h2 id="rent" className={styles.sectionTitle}>
          Wynajem przestrzeni
        </h2>
        <h2 id="services" className={styles.sectionTitle}>
          Cennik
        </h2>
      </SubpageLayout>
    </main>
  );
};
