import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

export function LanguageSelector() {
  const { language, changeLanguage, content } = useContext(LanguageContext);
  return (
    <select
      value={language}
      onChange={(event) => {
        console.log(event.target.value);
        changeLanguage(event.target.value);
      }}
    >
      {content.languages.map((languageConfig) => {
        return (
          <option key={languageConfig.key} value={languageConfig.key}>
            {languageConfig.value}
          </option>
        );
      })}
    </select>
  );
}
