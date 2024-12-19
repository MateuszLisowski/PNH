import styles from "./App.module.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages";
import { Navigation } from "./Navigation";
import { Layout } from "./components/Layout";

function App() {
  return (
    <Router>
      <div className={styles.body}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<p>O nas</p>} />
            <Route path="/events" element={<p>wydarzenia</p>} />
            <Route path="/offer" element={<p>Oferta</p>} />
            <Route path="/rent" element={<p>Wynajem</p>} />
            <Route path="/contact" element={<p>Kontakt</p>} />
          </Routes>
        </Layout>
        <Navigation />
      </div>
    </Router>
  );
}

export default App;
