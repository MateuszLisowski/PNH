import React from "react";
import styles from "./App.module.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className={styles.body}>
        <Routes>
          <Route path="/" element={<></>} />
          <Route path="/about" element={<p>About me</p>} />
        </Routes>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
    </Router>
  );
}

export default App;
