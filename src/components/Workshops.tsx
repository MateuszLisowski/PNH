import styles from "./Workshops.module.css";

export const Workshops = ({
  services,
  sectionName,
  subtitle,
}: {
  services: {
    title: string;
    offer: { detail: string | React.ReactElement }[];
  }[];
  sectionName?: string;
  subtitle?: string;
}) => {
  return (
    <section className={styles.workshops}>
      {sectionName && <h3 className={styles.sectionName}>{sectionName}</h3>}
      {subtitle && <h4 className={styles.subtitle}>{subtitle}</h4>}
      {services.map(({ offer, title }) => (
        <>
          <h4 className={styles.title}>{title}</h4>
          <ul>
            {offer.map(({ detail }) => (
              <li className={styles.row}>
                <span className={styles.dot}></span>
                {detail}
              </li>
            ))}
          </ul>
        </>
      ))}
    </section>
  );
};
