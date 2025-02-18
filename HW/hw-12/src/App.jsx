import React, { useState } from "react";
import ValueDisplay from "./ValueDisplay";
import "./App.css";

function App() { 
  const [value, setValue] = useState("")

  return (
    <div className="app">
      <h1>Текущее и предыдущее значение</h1>
      <input
      type="text" 
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Введите текст..."
      />
      < ValueDisplay value={value} /> 
    </div>
  )
}

export default App;