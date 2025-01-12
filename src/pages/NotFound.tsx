import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";

export const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <h1 className={styles.title}>
        Ups! Strona, której szukasz, nie istnieje 😔
      </h1>
      <Link to="/" className={styles.link}>
        Wróć na stronę główną
      </Link>
    </div>
  );
};
