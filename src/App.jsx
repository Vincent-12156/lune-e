import { Routes, Route, useLocation } from "react-router-dom";
import { scrollToTop } from "./utils/scrollToTop";
import { useEffect } from "react";
import BackToTop from "./components/ui/BackToTop";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Contact from "./pages/Contact";
import TPEApp from "./pages/TPEApp";
import Home from "./pages/Home";

export default function App() {
  const location = useLocation();

  // scroll top page change
  useEffect(() => {
    const timeout = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 50);

    return () => clearTimeout(timeout);
  }, [location.pathname]);

  // scroll hash
  useEffect(() => {
    if (!location.hash) return;

    const id = location.hash.replace("#", "");
    const el = document.getElementById(id);
    if (!el) return;

    const timeout = setTimeout(() => {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);

    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <div className="relative z-10 text-white overflow-hidden">
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tpe" element={<TPEApp />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />

      <BackToTop />
    </div>
  );
}
