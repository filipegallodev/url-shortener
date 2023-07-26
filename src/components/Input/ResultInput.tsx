import React, { useState } from "react";
import styles from "./Input.module.css";

const ResultInput = ({ shortenedURL }: { shortenedURL: string }) => {
  const [copied, setCopied] = useState<boolean>(false);

  function copyShortenedURLToClipboard() {
    navigator.clipboard.writeText(shortenedURL);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2500);
  }

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="text"
        placeholder="A sua URL encurtada irá aparecer aqui"
        value={shortenedURL}
        disabled
      />
      <button
        className={styles.button}
        onClick={copyShortenedURLToClipboard}
        disabled={copied || !shortenedURL}
      >
        {copied ? "URL copiada!" : "Copiar URL"}
      </button>
    </div>
  );
};

export default ResultInput;
