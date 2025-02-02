import { LanguageProvider } from "./context/LanguageContext";
import LanguageSwitcher from "./components/LanguageSwitcher";
import TextComponent from "./components/TextComponent";
import './App.css'

function App() {
  return (
    <LanguageProvider>
      <div className="container">
        <LanguageSwitcher /> 
        <TextComponent />
      </div>
      </LanguageProvider>
  )
}

export default App