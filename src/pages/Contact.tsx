import { SubpageLayout } from "../components/SubpageLayout";
import { useScrollToSection } from "../utils/useScrollToSection";
import { cx } from "../utils/classnames";
import styles from "../Reusable.module.css";

const GoogleMap = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d149.6200491954938!2d23.14089115024508!3d53.12956751487228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1734898991859!5m2!1sen!2sus"
      width="500"
      height="400"
      loading="lazy"
      allowFullScreen
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
          <section className={styles.sectionText}>
            <p className={styles.text}>
              Telefon: <span className={styles.contact}>+48530546016</span>
            </p>
            <p className={styles.smallText}>
              Email główny -{" "}
              <span className={styles.contact}>projektnewhope@gmail.com</span>
            </p>
            <p className={styles.text}>
              Email Warsztaty -{" "}
              <span className={styles.contact}>
                projektnewhope.warsztaty@gmail.com
              </span>
            </p>
            <p className={styles.smallText}>Adres:</p>
            <p className={styles.sectionText}>Wyszyńskiego 6A/07</p>
            <p className={styles.sectionText}>15-888 Białystok</p>
          </section>
        </section>
        <section>
          <h2 id="localization" className={styles.sectionTitle}>
            Lokalizacja
          </h2>
          <p className={cx([styles.text, styles.sectionText])}>
            New Hope znajduje się w Białymstoku, nieopodal dworca PKS, przy
            ulicy Wyszyńskiego. Obok sklepu Kometa. Samochód mozna zaparkować na
            bezpłatnym parkingu za sklepem lub płatnym przy ulicy głównej.
            Wejście do lokalu znajduje się w prawej części rzemieślnika przy
            ulicy Wyszyńskiego 6A. Nasze miejsce usytuowane jest w podziemiach
            budynku, do którego prowadzą schody i długi korytarz.
          </p>
        </section>
        <GoogleMap />
        <section>
          <h2 id="partnership" className={styles.sectionTitle}>
            Zostań partnerem
          </h2>
        </section>
      </SubpageLayout>
    </main>
  );
};
