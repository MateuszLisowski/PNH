import styles from "./TagPrice.module.css";

export const TagPrice = ({
  title,
  price,
}: {
  title: string;
  price: string;
}) => {
  return (
    <h4 className={styles.tagPrice}>
      <p className={styles.title}>{title}</p>
      <p className={styles.tag}>{price}</p>
    </h4>
  );
};
