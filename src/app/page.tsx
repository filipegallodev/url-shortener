import Header from "@/components/Header/Header";
import Section from "@/components/Section/Section";
import SectionTitle from "@/components/Section/SectionTitle";
import Input from "@/components/Input/Input";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Section>
          <SectionTitle>
            Basta colocar o link que desejar encurtar logo abaixo!
          </SectionTitle>
          <Input />
        </Section>
      </main>
    </>
  );
}
