import { Link } from "react-router-dom";
import styles from "./Home.module.css";

export const Home = () => {
  return (
    <>
      <div className={styles.background}></div>
      <main className={styles.container}>
        <h1 className={styles.title}>
          Tworzymy kulturę niezależną w Białymstoku
        </h1>
        <h2 className={styles.subtitle}>
          Celem Projektu New Hope jest stworzenie przestrzeni, w której każda
          osoba artystyczna, niezależnie od swojego doświadczenia, będzie mogła
          rozwijać swoje pasje i umiejętności
        </h2>
        <div className={styles.buttons}>
          <Link to="/offer" className={styles.linkButton}>
            Warsztaty
          </Link>
          <Link to="/offer" className={styles.secondLink}>
            Wydarzenia
          </Link>
        </div>
      </main>
    </>
  );
};
