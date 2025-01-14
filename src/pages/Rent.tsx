import { SubpageLayout } from "../components/SubpageLayout";
import styles from "../Reusable.module.css";
import { useScrollToSection } from "../utils/useScrollToSection";
import homeStyles from "./Home.module.css";
import { Link } from "react-router-dom";

export const Rent = () => {
  useScrollToSection();

  return (
    <main className={styles.sectionText}>
      <SubpageLayout>
        <h1 id="rent" className={styles.sectionTitle}>
          Wynajem przestrzeni
        </h1>
        <section className={styles.sectionText}>
          <p className={styles.text}>Zapraszamy do naszej przestrzeni!</p>
          <p className={styles.text}>
            Wynajmij przestrzeń Projektu New Hope na swoje prywatne, firmowe lub
            publiczne wydarzenie. Oferta jest skierowana również do osób, które
            cyklicznie chcą wynająć salę lub cały lokal na poczet prywatnych
            lekcji czy spotkań. Jest to również atrakcyjna oferta dla
            nauczycieli: tańca, śpiewu, pianina, itp.
          </p>
          <p className={styles.text}>
            Lokal, to niespełna 120 metrów kwadratowych z 3 oddzielnymi
            pomieszczeniami, wspólną toaletą i magazynem roboczym. Miejsce jest
            w pełni wyposażone w wygodne umeblowanie, autorskie dekoracje i
            sprzęt audio. Jesteśmy w stanie zaoferować niezbędną obsługę na dany
            wynajem. Możemy zapewnić Państwu: profesjonalną ochronę, dźwiękowca,
            realizatora świateł, catering, bar, fotografa czy biletera.
          </p>
          <p className={styles.text}>
            Cena wynajmu jest ustalana indywidualnie bazując na zapotrzebowaniu
            klienta. Swoje zapytanie prosimy wysłać przy pomocy formularza lub
            zapraszamy do kontaktu telefonicznego. Na podstawie odpowiedzi
            przygotujemy indywidualną ofertę w ciągu 2 dni roboczych.
          </p>
          <div style={{ margin: "50px 0 40px 0" }}>
            <Link to="../contact#info" className={homeStyles.linkButton}>
              Formularz do wynajmu
            </Link>
          </div>
        </section>
      </SubpageLayout>
    </main>
  );
};
