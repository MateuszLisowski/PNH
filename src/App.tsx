import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, Contact, About, Offer } from "./pages";
import { Navigation } from "./Navigation";
import { Layout } from "./components/Layout";
import { Footer } from "./components/Footer";
import styles from "./App.module.css";

function App() {
  return (
    <Router>
      <div className={styles.body}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<p>wydarzenia</p>} />
            <Route path="/offer" element={<Offer />} />
            <Route path="/rent" element={<p>Wynajem</p>} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/contact/:id" element={<Contact />} />
          </Routes>
          <Footer />
        </Layout>
        <Navigation />
      </div>
    </Router>
  );
}

export default App;
