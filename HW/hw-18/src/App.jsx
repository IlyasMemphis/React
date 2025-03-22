import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Contacts from './components/Contacts';

function App() {
  return (
    <Router>
      <Routes>
        {/* Маршрут для корневого пути */}
        <Route path="/" element={<Navigate to="/contacts" />} />
        
        {/* Маршрут для страницы контактов */}
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </Router>
  );
}

export default App;