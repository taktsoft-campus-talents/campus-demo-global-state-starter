import styles from "./Header.module.css";
import { LanguageSelector } from "./LanguageSelector";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

export function Header() {
  const { content } = useContext(LanguageContext);
  console.log(content);
  return (
    <header className={styles.header}>
      {/* We will make a component for the nav later! */}
      <nav>
        <ul>
          {content.nav.map((navItem) => (
            <li key={navItem}>{navItem}</li>
          ))}
        </ul>
      </nav>
      <LanguageSelector />
    </header>
  );
}
