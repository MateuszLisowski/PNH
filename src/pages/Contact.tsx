import { SubpageLayout } from "../components/SubpageLayout";
import { useScrollToSection } from "../utils/useScrollToSection";
import { cx } from "../utils/classnames";
import styles from "../Reusable.module.css";
import contactStyles from "./Contact.module.css";

const GoogleMap = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d76609.026987841!2d23.07409198015058!3d53.12756945836712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f1.3!3m3!1m2!1s0x82285a0a1cb1a273%3A0xcb8a492df14c54db!2sProjekt%20New%20Hope!5e0!3m2!1spl!2spl!4v1736604271443!5m2!1spl!2spl"
      width="500"
      height="400"
      loading="lazy"
      allowFullScreen
      className={contactStyles.map}
    ></iframe>
  );
};

export const Contact = () => {
  useScrollToSection();

  return (
    <main>
      <SubpageLayout>
        <section>
          <h1 id="info" className={styles.sectionTitle}>
            Kontakt
          </h1>
          <section
            className={cx([styles.sectionText, contactStyles.contactSection])}
          >
            <p className={styles.text}>
              <span className={styles.contact}>+48 530 546 016</span>
            </p>
            <p className={styles.smallText}>
              <span className={styles.contact}>projektnewhope@gmail.com</span>
            </p>
            <p className={styles.text}>
              <span className={styles.contact}>
                projektnewhope.warsztaty@gmail.com
              </span>
            </p>
            <p className={styles.sectionText}>
              ul. Kardynała Stefana Wyszyńskiego 6A/07
            </p>
            <p className={styles.sectionText}>15-888 Białystok</p>
          </section>
        </section>
        <section>
          <h2 id="lokalizacja" className={styles.sectionTitle}>
            Lokalizacja
          </h2>
          <p className={cx([styles.text, styles.sectionText])}>
            New Hope znajduje się w Białymstoku, nieopodal dworca PKS, przy
            ulicy Wyszyńskiego, obok sklepu Kometa. Samochód można zaparkować na
            bezpłatnym parkingu za sklepem lub płatnym przy ulicy głównej.
            Wejście do lokalu znajduje się w prawej części rzemieślnika przy
            ulicy Wyszyńskiego 6A. Nasze miejsce usytuowane jest w podziemiach
            budynku, do którego prowadzą schody i długi korytarz.
          </p>
        </section>
        <GoogleMap />
      </SubpageLayout>
    </main>
  );
};
