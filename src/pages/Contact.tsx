import { SubpageLayout } from "../components/SubpageLayout";
import { useScrollToSection } from "../utils/useScrollToSection";
import styles from "../Reusable.module.css";

const GoogleMap = () => {
  return (
    <div>
      <h2>Nasza lokalizacja</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d149.6200491954938!2d23.14089115024508!3d53.12956751487228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1734898991859!5m2!1sen!2sus"
        width="500"
        height="400"
        loading="lazy"
        allowFullScreen
      ></iframe>
    </div>
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
        </section>
        <section>
          <h2 id="localization" className={styles.sectionTitle}>
            Lokalizacja
          </h2>
          New Hope znajduje się w Białymstoku, w dzielnicy Centrum, przy ulicy
          Wyszyńskiego. Obok społemu kometa. Parking znajduje się za sklepem lub
          płatny przy ulicy.
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
