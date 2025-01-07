import { ReactNode } from "react";

import styles from "./SubpageLayout.module.css";

export const SubpageLayout = ({ children }: { children: ReactNode }) => {
  return <div className={styles.container}>{children}</div>;
};
