import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home"
import Articles from "./components/pages/Articles"
import styles from "./components/App.module.css"
import ArticleDetail from "./components/pages/ArticleDetail";

const App = () => {
  return (
    <Router>
      <div className={styles.app}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:id" element={<ArticleDetail />} /> 
        </Routes>
      </div>
    </Router>
  );
};

export default App;
