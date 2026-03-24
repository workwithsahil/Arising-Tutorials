import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { navLinks, siteInfo } from "../data/siteData";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md shadow-[0_4px_20px_rgba(12,50,118,0.06)] py-3">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/logo.png"
              alt="Arising Tutorials"
              className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-medium transition-colors duration-300 ${
                    isActive
                      ? "text-primary font-bold border-b-2 border-tertiary-fixed-dim pb-1"
                      : "text-on-surface-variant hover:text-tertiary"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href={`tel:${siteInfo.phone.primary.replace(/\s/g, "")}`}
              className="flex items-center gap-2 text-sm font-bold text-on-surface-variant hover:text-primary transition-colors duration-300"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden lg:inline">{siteInfo.phone.primary}</span>
            </a>
            <Link
              to="/contact"
              className="bg-tertiary-fixed-dim text-tertiary flex items-center gap-2 font-bold px-6 py-2.5 rounded-xl hover:bg-tertiary-fixed transition-colors shadow-sm"
            >
              Enroll Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-primary hover:bg-surface-container transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-white shadow-[0_20px_40px_rgba(12,50,118,0.06)] border-t border-surface-variant"
          >
            <div className="px-6 py-4 space-y-1">
              {navLinks.map((link, i) => {
                 const isActive = location.pathname === link.path;
                 return (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      className={`block px-4 py-3 rounded-lg font-bold transition-colors ${
                        isActive
                          ? "bg-primary/5 text-primary"
                          : "text-on-surface-variant hover:bg-surface-container-low"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
              <div className="pt-3 border-t border-surface-variant space-y-2 mt-4">
                <a
                  href={`tel:${siteInfo.phone.primary.replace(/\s/g, "")}`}
                  className="flex items-center gap-2 px-4 py-3 font-bold text-on-surface hover:text-primary"
                >
                  <Phone className="w-5 h-5" />
                  {siteInfo.phone.primary}
                </a>
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 text-center bg-tertiary-fixed-dim text-tertiary px-4 py-3 rounded-xl font-bold transition-colors hover:bg-tertiary-fixed shadow-sm"
                >
                  Enroll Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
