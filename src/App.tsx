import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { Home, Contact, About, Offer } from "./pages";
import { Navigation } from "./Navigation";
import { Layout } from "./components/Layout";
import { Footer } from "./components/Footer";
import styles from "./App.module.css";
import { BeginnerClassProgram } from "./pages/BeginnerClassProgram";
import { Voucher } from "./pages/Voucher";
import { Events } from "./pages/Events";
import { NotFound } from "./pages/NotFound";
// import { Collective } from "./pages/Collective";
import { PastEvents } from "./pages/PastEvents";
import { Rent } from "./pages/Rent";
import ScrollToTop from "./utils/ScrollToTop";
import { useEffect } from "react";
// import { Shop } from "./pages/Shop";

function RedirectHandler() {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const redirectPath = params.get("redirect");
    if (redirectPath) {
      navigate(redirectPath);
    }
  }, [navigate]);

  return null;
}

function App() {
  return (
    <Router basename="/">
      <ScrollToTop />
      <RedirectHandler />
      <div className={styles.body}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/o-nas" element={<About />} />
            <Route path="/wydarzenia" element={<Events />} />
            <Route path="/oferta" element={<Offer />} />
            <Route path="/warsztaty" element={<Offer />} />
            <Route path="/wynajem" element={<Rent />} />
            <Route path="/kontakt" element={<Contact />} />
            <Route path="/vinyl-voucher" element={<Voucher />} />
            {/* <Route path="/shop" element={<Shop />} /> */}
            {/* <Route path="/pnh-collective" element={<Collective />} /> */}
            <Route path="/archiwum-wydarzen" element={<PastEvents />} />
            <Route
              path="/oferta/program-kurs-podstawowy"
              element={<BeginnerClassProgram />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </Layout>
        <Navigation />
      </div>
    </Router>
  );
}

export default App;
