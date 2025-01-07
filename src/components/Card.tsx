import styles from "./Card.module.css";
import { cx } from "../utils/classnames";

export const Card = ({
  nick,
  foto,
  description,
}: {
  nick: string;
  foto?: string;
  description: string;
}) => (
  <article className={styles.card}>
    <h3 className={styles.title}>{nick}</h3>
    {foto ? (
      <img src={foto} alt="fotka" className={styles.foto} />
    ) : (
      <div className={cx([styles.foto, { [styles.mockedFoto]: !foto }])}></div>
    )}
    <p className={styles.cardText}>{description}</p>
  </article>
);
