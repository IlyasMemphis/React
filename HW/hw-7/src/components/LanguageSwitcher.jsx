import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

const LanguageSwitcher = () => {
    const { toggleLanguage, language, translations } = useContext(LanguageContext)

    return <button onClick={toggleLanguage}>{translations[language].switch}</button>
}

export default LanguageSwitcher