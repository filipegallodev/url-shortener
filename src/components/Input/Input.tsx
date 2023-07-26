import React from "react";
import styles from "./Input.module.css";

const Input = () => {
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="text"
        placeholder="Cole aqui sua URL"
      />
      <button className={styles.button}>Encurtar URL</button>
    </div>
  );
};

export default Input;
