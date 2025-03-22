import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contacts from "./components/Contacts";
import styles from "./App.module.css"

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
