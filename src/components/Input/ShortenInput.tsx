import React, { useState } from "react";
import styles from "./Input.module.css";
import fetchURL from "@/helper/fetchURL";

const Input = ({
  setShortenedURL,
}: {
  setShortenedURL: React.Dispatch<React.SetStateAction<any>>;
}) => {
  const [longURL, setLongURL] = useState<string>("");

  async function handleShortenURL() {
    const data = await fetchURL(longURL);
    setShortenedURL(data.result.short_link);
  }

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="text"
        placeholder="Cole aqui sua URL"
        value={longURL}
        onChange={({ target }) => setLongURL(target.value)}
      />
      <button className={styles.button} onClick={handleShortenURL}>
        Encurtar URL
      </button>
    </div>
  );
};

export default Input;
