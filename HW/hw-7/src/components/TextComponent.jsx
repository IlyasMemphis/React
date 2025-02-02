import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

const TextComponent = () => {
    const { language, translations } = useContext(LanguageContext)

    return <h1>{translations[language].greeting}</h1>
}

export default TextComponent