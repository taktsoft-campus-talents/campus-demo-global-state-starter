import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

export function Footer() {
  const { content } = useContext(LanguageContext);
  return (
    <p
      style={{
        backgroundColor: "purple",
        color: "white",
      }}
    >
      {content.footer}
    </p>
  );
}
