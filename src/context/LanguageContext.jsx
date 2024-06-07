import { createContext, useState } from "react";
import { content } from "../data/content";

export const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  // de, en
  const [language, setLanguage] = useState("en");
  function changeLanguage(newLanguage) {
    if (!Object.keys(content).includes(newLanguage)) {
      console.log("Language not supported!");
      return;
    }
    setLanguage(newLanguage);
  }

  return (
    <LanguageContext.Provider
      value={{
        language,
        content: content[language],
        changeLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}
