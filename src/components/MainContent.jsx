import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

export function MainContent() {
  const { content } = useContext(LanguageContext);
  return (
    <main>
      <h2>{content.title}</h2>
      <p>{content.description}</p>
    </main>
  );
}
