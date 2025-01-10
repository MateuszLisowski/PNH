import styles from "./Card.module.css";
import { cx } from "../utils/classnames";

export const Card = ({
  nick,
  foto,
  description,
  tags,
}: {
  nick: string;
  foto?: string;
  description: string;
  tags?: string[];
}) => (
  <article className={styles.card}>
    <h3 className={styles.title}>{nick}</h3>
    {foto ? (
      <img src={foto} alt="fotka" className={styles.foto} />
    ) : (
      <div className={cx([styles.foto, { [styles.mockedFoto]: !foto }])}></div>
    )}
    <p className={styles.cardText}>{description}</p>
    <p className={styles.tags}>
      {tags && (
        <>
          {tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </>
      )}
    </p>
  </article>
);
