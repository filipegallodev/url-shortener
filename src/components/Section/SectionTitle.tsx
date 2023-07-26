import React from "react";
import styles from "./Section.module.css";

const SectionTitle = ({ children }: { children: React.ReactNode }) => {
  return <h2 className={styles.title}>{children}</h2>;
};

export default SectionTitle;
