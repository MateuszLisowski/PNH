import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, Contact, About, Offer } from "./pages";
import { Navigation } from "./Navigation";
import { Layout } from "./components/Layout";
import { Footer } from "./components/Footer";
import styles from "./App.module.css";
import { BeginnerClassProgram } from "./pages/BeginnerClassProgram";
import { Voucher } from "./pages/Voucher";

function App() {
  return (
    <Router>
      <div className={styles.body}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<></>} />
            <Route path="/offer" element={<Offer />} />
            <Route path="/rent" element={<></>} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/vinyl-voucher" element={<Voucher />} />
            <Route path="/pnh-collective" element={<></>} />
            <Route path="/past-events" element={<></>} />
            <Route
              path="/offer/beginner-class-program"
              element={<BeginnerClassProgram />}
            />
            <Route path="*" element={<p>NOT FOUND TODO</p>} />
          </Routes>
          <Footer />
        </Layout>
        <Navigation />
      </div>
    </Router>
  );
}

export default App;
