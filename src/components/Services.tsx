import styles from "./Services.module.css";

export const Services = ({
  services,
  sectionName,
}: {
  services: { price: string; service: string }[];
  sectionName: string;
}) => {
  return (
    <section className={styles.services}>
      <h3 className={styles.sectionName}>{sectionName}</h3>
      <ul>
        {services.map(({ price, service }) => (
          <li className={styles.row} key={service}>
            <p className={styles.service}>{service}</p>
            <p className={styles.price}>{price}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
