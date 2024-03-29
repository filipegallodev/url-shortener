import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.text}>
        Desenvolvido por{" "}
        <a href="https://github.com/filipegallodev" className={styles.link}>
          Filipe
        </a>
        .
      </p>
    </footer>
  );
};

export default Footer;
