import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { siteInfo } from "../data/siteData";

export default function CTABanner() {
  return (
    <section className="py-24 px-6 sm:px-8 bg-surface">
      <div className="max-w-7xl mx-auto rounded-[3rem] bg-gradient-to-br from-primary to-primary-container p-12 md:p-24 relative overflow-hidden text-center shadow-[0_40px_80px_rgba(12,50,118,0.15)]">
        {/* Background Pattern */}
        <div className="absolute inset-0 hero-pattern opacity-10"></div>
        
        {/* Decorative highlights */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-tertiary-fixed-dim/20 rounded-full blur-[80px]" />
        
        <div className="relative z-10 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-5 py-2 mb-8 backdrop-blur-md">
              <span className="material-symbols-outlined text-tertiary-fixed-dim text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>schedule</span>
              <span className="text-white/90 text-sm font-bold font-label uppercase tracking-widest">
                Deadline: {siteInfo.admissionDeadline}
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-extrabold text-white font-headline leading-tight mb-6 tracking-tight">
              Ready to Rise to <br className="hidden md:block" /> Your Potential?
            </h2>
            
            <p className="text-primary-fixed-dim text-lg md:text-xl max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
              Join our 2026-27 batch today. Limited seats are available for Class 8 to 10 (SSC / CBSE) in {siteInfo.address.area}.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                to="/contact"
                className="bg-tertiary-fixed-dim text-tertiary px-10 py-5 rounded-2xl font-bold text-xl shadow-2xl hover:scale-105 active:scale-95 transition-all w-full sm:w-auto"
              >
                Enroll Now
              </Link>
              <a
                href={`https://wa.me/91${siteInfo.whatsapp.replace(/\s/g, "")}?text=Hi, I want to know about admissions at Arising Tutorials for 2026-27.`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-white/20 transition-all w-full sm:w-auto"
              >
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
