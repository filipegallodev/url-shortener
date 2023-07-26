"use client";
import { useState } from "react";
import Header from "@/components/Header/Header";
import Section from "@/components/Section/Section";
import SectionTitle from "@/components/Section/SectionTitle";
import ShortenInput from "@/components/Input/ShortenInput";
import ResultInput from "@/components/Input/ResultInput";
import styles from "./page.module.css";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  const [shortenedURL, setShortenedURL] = useState<string>("");

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div>
          <Section>
            <SectionTitle>
              Basta colocar o link que desejar encurtar logo abaixo!
            </SectionTitle>
            <ShortenInput setShortenedURL={setShortenedURL} />
          </Section>
          <Section>
            <SectionTitle>Sua URL encurtada</SectionTitle>
            <ResultInput shortenedURL={shortenedURL} />
          </Section>
        </div>
      </main>
      <Footer />
    </>
  );
}
