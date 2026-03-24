import { Link } from "react-router-dom";
import { siteInfo, navLinks } from "../data/siteData";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white relative overflow-hidden pb-8 pt-20">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-tertiary-fixed-dim to-transparent opacity-80" />

      {/* Abstract Background element */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50 point-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-container/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Brand */}
          <div className="lg:col-span-1 pr-6">
            <Link to="/" className="inline-block mb-6">
              <img
                src="/logo.png"
                alt="Arising Tutorials"
                className="h-10 w-auto object-contain rounded-lg"
              />
            </Link>
            <p className="text-white/70 text-base leading-relaxed mb-6 font-medium">
              {siteInfo.tagline}
            </p>
            <div className="inline-flex items-center gap-3 text-sm text-white/80 font-bold font-label uppercase tracking-widest bg-white/5 px-4 py-2 rounded-lg border border-white/10 whitespace-nowrap">
              <span className="material-symbols-outlined text-tertiary-fixed-dim text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>schedule</span>
              <span>Mon - Sun: 7 AM - 9 PM</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-xs uppercase tracking-[0.2em] font-label mb-6">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/70 hover:text-tertiary-fixed-dim text-base transition-colors duration-300 flex items-center gap-2 group font-medium"
                  >
                    <span className="material-symbols-outlined text-[10px] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">arrow_forward_ios</span>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-white font-bold text-xs uppercase tracking-[0.2em] font-label mb-6">
              Our Programs
            </h3>
            <ul className="space-y-4">
              {[
                "Class 6 - 8 Foundation",
                "Class 9 - 10 Board Prep",
                "Class 11 - 12 Science",
                "JEE Main & Advanced",
                "NEET Preparation",
                "MHCET Coaching",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="/courses"
                    className="text-white/70 hover:text-tertiary-fixed-dim text-base transition-colors duration-300 font-medium whitespace-nowrap"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-xs uppercase tracking-[0.2em] font-label mb-6">
              Get in Touch
            </h3>
            <div className="space-y-4 mb-6 relative">
              <a
                href={`tel:${siteInfo.phone.primary.replace(/\s/g, "")}`}
                className="flex items-start gap-4 text-white/70 hover:text-white text-base transition-colors font-medium group"
              >
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-tertiary-fixed-dim/20 transition-colors shrink-0">
                  <span className="material-symbols-outlined text-sm text-tertiary-fixed-dim">call</span>
                </div>
                <span className="mt-1">{siteInfo.phone.primary}</span>
              </a>
              <div className="flex items-start gap-4 text-white/70 text-base font-medium group">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 transition-colors shrink-0">
                  <span className="material-symbols-outlined text-sm text-tertiary-fixed-dim">location_on</span>
                </div>
                <span className="mt-1 leading-relaxed">
                  {siteInfo.address.line1}, {siteInfo.address.area},{" "}
                  {siteInfo.address.city} - {siteInfo.address.pincode}
                </span>
              </div>
            </div>

            <a
              href={`https://wa.me/91${siteInfo.whatsapp.replace(/\s/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#1DA851] text-white text-sm font-bold uppercase tracking-wider rounded-xl transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              WhatsApp Us
              <span className="material-symbols-outlined text-sm">open_in_new</span>
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-xs font-bold font-label uppercase tracking-widest">
            &copy; {currentYear} Arising Tutorials. All rights reserved.
          </p>
          <p className="text-white/50 text-xs font-bold font-label uppercase tracking-widest">
            Built by{" "}
            <a
              href="https://sahilmaurya.work"
              target="_blank"
              rel="noopener noreferrer"
              className="text-tertiary-fixed-dim hover:text-white transition-colors"
            >
              Sahil Maurya
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
