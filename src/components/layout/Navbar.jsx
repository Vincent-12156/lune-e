import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import LogoOrbit from "../ui/LogoOrbit";
import { Menu, X } from "lucide-react";
import Container from "./Container";

const links = [
  {
    name: "Accueil",
    to: "/",
    children: [
      { name: "Services", to: "/#services" },
      { name: "Projets", to: "/#projects" },
      { name: "À propos", to: "/#about" },
    ],
  },
  { name: "GestAL", to: "/tpe" },
  { name: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Navigation Nav
  const handleNav = (to) => {
    navigate(to);
  };

  // Navigation Logo
  const handleLogoClick = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Menu open/close
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* ----------- HEADER ------------ */}
      <header
        className="
          fixed
          top-0
          left-0
          w-full
          z-50
          border-b border-white/10
          bg-gray-950/70
          backdrop-blur-xl
        "
      >
        <Container>
          <div
            className="
              h-20
              flex
              items-center
              justify-between
            "
          >
            {/* Logo */}
            <Link
              to="/"
              onClick={() => {
                closeMenu();
                handleLogoClick();
              }}
              className="group"
            >
              <h1
                className="
                  flex items-center
                  gap-6
                  text-2xl
                  font-black
                  text-blue-500
                  group-hover:text-cyan-400
                  transition
                "
              >
                <span>L</span>
                <span>U</span>
                <span>N</span>

                <span className="relative inline-flex items-center justify-center">
                  <span className="relative z-10">E</span>

                  <LogoOrbit />
                </span>
              </h1>

              <p
                className="
                  text-xs
                  text-zinc-500
                  group-hover:text-zinc-300
                  transition
                "
              >
                Lien d’Univers Numériques
              </p>
            </Link>

            {/* ------------ Desktop menu ------------------ */}
            <nav
              className="
                hidden md:flex
                items-center gap-10
              "
            >
              {links.map((link) => (
                <div key={link.name} className="relative group">
                  {link.children ? (
                    <>
                      <button
                        onClick={() => handleNav("/")}
                        className="
                          text-zinc-300
                          hover:text-blue-400
                          transition
                          cursor-pointer
                        "
                      >
                        {link.name}
                      </button>

                      <div
                        className="
                          absolute
                          top-full
                          left-0
                          mt-2
                          w-48
                          rounded-xl
                          border border-white/10
                          bg-gray-950/95
                          backdrop-blur-xl
                          opacity-0
                          invisible
                          group-hover:opacity-100
                          group-hover:visible
                          transition-all
                        "
                      >
                        {link.children.map((child) => (
                          <button
                            key={child.name}
                            onClick={() => handleNav(child.to)}
                            className="
                              block
                              w-full
                              px-4 py-3
                              text-left
                              text-zinc-300
                              hover:text-blue-400
                              hover:bg-white/5
                              transition cursor-pointer
                            "
                          >
                            {child.name}
                          </button>
                        ))}
                      </div>
                    </>
                  ) : (
                    <button
                      onClick={() => handleNav(link.to)}
                      className="
                        text-zinc-300
                        hover:text-blue-400
                        transition
                        cursor-pointer
                      "
                    >
                      {link.name}
                    </button>
                  )}
                </div>
              ))}
            </nav>

            {/* ---------------- Mobile menu -------------------- */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="
              md:hidden
              w-12 h-12
              rounded-2xl
              border border-white/10
              bg-white/[0.03]
              flex items-center justify-center
              hover:border-blue-500
              transition
            "
            >
              <motion.div
                className="w-6 h-6 relative"
                animate={menuOpen ? "open" : "closed"}
              >
                {/* top line */}
                <motion.span
                  className="absolute left-0 w-6 h-[2px] bg-white rounded"
                  style={{ top: "6px" }}
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: 45, y: 6 },
                  }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />

                {/* middle line */}
                <motion.span
                  className="absolute left-0 w-6 h-[2px] bg-white rounded"
                  style={{ top: "12px" }}
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 },
                  }}
                  transition={{ duration: 0.15 }}
                />

                {/* bottom line */}
                <motion.span
                  className="absolute left-0 w-6 h-[2px] bg-white rounded"
                  style={{ top: "18px" }}
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: -45, y: -6 },
                  }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              </motion.div>
            </button>
          </div>
        </Container>
      </header>

      {/* -------------- MOBILE MENU ----------------- */}
      <AnimatePresence>
        {menuOpen && (
          <div className="fixed inset-0 z-40 md:hidden">
            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="absolute inset-0 bg-black/70 backdrop-blur-md"
            />

            {/* PANEL */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="
                absolute
                top-0
                right-0
                w-[85%]
                max-w-[350px]
                h-full
                border-l border-white/10
                bg-[#050816]
                p-10
              "
            >
              <div className="mt-24 flex flex-col gap-8">
                {links.map((link) => (
                  <div key={link.name}>
                    <button
                      onClick={() => {
                        handleNav(link.to);
                        closeMenu();
                      }}
                      className="
                  text-2xl
                  text-zinc-200
                  hover:text-blue-400
                  transition
                  text-left
                "
                    >
                      {link.name}
                    </button>

                    {link.children && (
                      <div className="mt-3 ml-4 flex flex-col gap-3">
                        {link.children.map((child) => (
                          <button
                            key={child.name}
                            onClick={() => {
                              handleNav(child.to);
                              closeMenu();
                            }}
                            className="
                        text-lg
                        text-zinc-400
                        hover:text-blue-400
                        text-left
                      "
                          >
                            {child.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
