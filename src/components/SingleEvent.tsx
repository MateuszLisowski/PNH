import { Link } from "react-router-dom";
import styles from "./SingleEvent.module.css";

export const SingleEvent = ({
  event,
}: {
  event: {
    date: string;
    title: string;
    place: string;
    foto: string;
    link?: string;
  };
}) => {
  return (
    <article className={styles.event}>
      <img
        src={event.foto}
        alt={`wydarzenie - ${event.title}`}
        className={styles.image}
      />
      <div className={styles.details}>
        <p className={styles.date}>{event.date}</p>
        <h2 className={styles.title}>{event.title}</h2>
        <p className={styles.place}>{event.place}</p>
        {event.link && (
          <Link to={event.link} className={styles.link}>
            Szczegóły
          </Link>
        )}
      </div>
    </article>
  );
};
