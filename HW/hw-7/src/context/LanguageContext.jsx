import React, { createContext, useState, useContext } from "react";

export const LanguageContext = createContext()

const translations = {
    en: { greeting: "Hello, world", switch: "Switch to Russian" },
    ru: { greeting: "Привет, мир", switch: "Переключить на английский" },
}

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState("en")

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === "en" ? "ru" : "en"))
    }

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, translations }}>
            {children}
            </LanguageContext.Provider>
    )
}