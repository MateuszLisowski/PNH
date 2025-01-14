import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
// import { Shop } from "./pages/Shop";

function App() {
  return (
    <Router>
      <div className={styles.body}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<Events />} />
            <Route path="/offer" element={<Offer />} />
            <Route path="/rent" element={<Rent />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/voucher" element={<Voucher />} />
            {/* <Route path="/shop" element={<Shop />} /> */}
            {/* <Route path="/pnh-collective" element={<Collective />} /> */}
            <Route path="/past-events" element={<PastEvents />} />
            <Route
              path="/offer/beginner-class-program"
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
