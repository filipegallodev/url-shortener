import React from "react";
import styles from "./Input.module.css";

const ResultInput = ({ shortenedURL }: { shortenedURL: string }) => {
  function copyShortenedURLToClipboard() {}

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="text"
        placeholder="A sua URL encurtada irá aparecer aqui"
        value={shortenedURL}
        disabled
      />
      <button className={styles.button} onClick={copyShortenedURLToClipboard}>
        Copiar URL
      </button>
    </div>
  );
};

export default ResultInput;
