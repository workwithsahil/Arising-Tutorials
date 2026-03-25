import { motion } from "framer-motion";
import { siteInfo } from "../data/siteData";

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative pt-40 pb-20 overflow-hidden bg-primary">
        {/* Abstract Background element */}
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50 point-events-none" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary-container/20 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-2 mb-6">
              <span className="material-symbols-outlined text-tertiary-fixed-dim text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>support_agent</span>
              <span className="text-white/90 text-xs font-bold font-label uppercase tracking-widest">
                Support
              </span>
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold font-headline text-white mb-6 tracking-tight">
              Contact <span className="text-tertiary-fixed-dim">Us</span>
            </h1>
            <p className="text-white/70 text-lg sm:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
              Take the first step toward academic success. Contact us to claim your free demo session or enquire about admissions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Admission Banner */}
      <section className="bg-tertiary-fixed-dim py-5 shadow-sm relative z-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
            <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>campaign</span>
            <p className="text-primary font-bold text-sm sm:text-base font-headline uppercase tracking-wide">
              Admissions closing soon for 2026-27! Claim your seat before the deadline.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-surface-container-highest">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-extrabold font-headline text-primary mb-8 tracking-tight">
                  Reach Out to Us
                </h2>

                <div className="space-y-6">
                  {/* Phone */}
                  <a
                    href={`tel:${siteInfo.phone.primary.replace(/\s/g, "")}`}
                    className="flex items-start gap-5 p-6 bg-white rounded-3xl border border-surface-variant hover:border-primary/20 hover:shadow-[0_10px_30px_rgba(12,50,118,0.06)] transition-all duration-300 group"
                  >
                    <div className="w-14 h-14 rounded-[1.25rem] bg-primary/5 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                      <span className="material-symbols-outlined text-primary group-hover:text-white transition-colors text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
                    </div>
                    <div>
                      <p className="font-extrabold font-headline text-primary text-base">
                        Phone
                      </p>
                      <p className="text-tertiary font-bold mt-1 text-lg">
                        {siteInfo.phone.primary}
                      </p>
                      <p className="text-on-surface-variant text-sm font-medium mt-1">
                        {siteInfo.phone.secondary}
                      </p>
                    </div>
                  </a>

                  {/* WhatsApp */}
                  <a
                    href={`https://wa.me/91${siteInfo.whatsapp}?text=Hi, I want to know more about Arising Tutorials.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-5 p-6 bg-white rounded-3xl border border-surface-variant hover:border-[#25D366]/30 hover:shadow-[0_10px_30px_rgba(37,211,102,0.1)] transition-all duration-300 group"
                  >
                    <div className="w-14 h-14 rounded-[1.25rem] bg-[#25D366]/10 flex items-center justify-center shrink-0 group-hover:bg-[#25D366] transition-colors">
                      <span className="material-symbols-outlined text-[#25D366] group-hover:text-white transition-colors text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>forum</span>
                    </div>
                    <div>
                      <p className="font-extrabold font-headline text-primary text-base">
                        WhatsApp
                      </p>
                      <p className="text-[#25D366] font-bold mt-1 text-lg">
                        +91 {siteInfo.whatsapp}
                      </p>
                      <p className="text-on-surface-variant text-sm font-medium mt-1">
                        Message us for quick response
                      </p>
                    </div>
                  </a>

                  {/* Address */}
                  <div className="flex items-start gap-5 p-6 bg-white rounded-3xl border border-surface-variant">
                    <div className="w-14 h-14 rounded-[1.25rem] bg-primary/5 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                    </div>
                    <div>
                      <p className="font-extrabold font-headline text-primary text-base mb-2">
                        Address
                      </p>
                      <p className="text-on-surface-variant text-base font-medium leading-relaxed">
                        {siteInfo.address.line1}
                        <br />
                        {siteInfo.address.line2}
                        <br />
                        {siteInfo.address.line3}
                        <br />
                        {siteInfo.address.area}, {siteInfo.address.city} -{" "}
                        {siteInfo.address.pincode}
                      </p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-5 p-6 bg-white rounded-3xl border border-surface-variant">
                    <div className="w-14 h-14 rounded-[1.25rem] bg-primary/5 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>schedule</span>
                    </div>
                    <div>
                      <p className="font-extrabold font-headline text-primary text-base mb-2">
                        Working Hours
                      </p>
                      <p className="text-on-surface-variant text-base font-medium leading-relaxed">
                        Monday - Sunday
                        <br />
                        7:00 AM - 9:00 PM
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <a
                    href={`https://wa.me/91${siteInfo.whatsapp}?text=Hi, I am interested in a free demo class at Arising Tutorials.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1DA851] text-white px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-[0.1em] transition-all duration-300 shadow-[0_4px_14px_rgba(37,211,102,0.3)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.4)] hover:-translate-y-0.5"
                  >
                    <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>forum</span>
                    WhatsApp Us
                  </a>
                  <a
                    href={`tel:${siteInfo.phone.primary.replace(/\s/g, "")}`}
                    className="inline-flex items-center justify-center gap-3 bg-primary hover:bg-primary-container text-white px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-[0.1em] transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                  >
                    <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
                    Call Now
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white rounded-[2rem] border border-surface-variant overflow-hidden shadow-sm h-full min-h-[400px] flex flex-col hover:shadow-[0_20px_40px_rgba(12,50,118,0.06)] transition-shadow duration-300">
                <div className="p-6 border-b border-surface-variant flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">navigation</span>
                    <h3 className="font-extrabold font-headline text-primary text-base">
                      Find Us
                    </h3>
                  </div>
                  <a
                    href="https://maps.google.com/?q=Arising+Tutorials+Andheri+East+Mumbai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-tertiary-fixed-dim hover:text-tertiary text-sm font-bold uppercase tracking-widest flex items-center gap-1.5 transition-colors font-label"
                  >
                    Open in Maps
                    <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                  </a>
                </div>
                <div className="flex-1 w-full h-full p-2">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.0!2d72.88!3d19.12!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA3JzEyLjAiTiA3MsKwNTInNDguMCJF!5e0!3m2!1sen!2sin!4v1"
                    className="w-full h-full rounded-[1.5rem]"
                    style={{ border: 0, minHeight: "450px" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Arising Tutorials Location"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enquiry Info */}
      <section className="py-24 bg-surface relative overflow-hidden">
        {/* Background decorative pattern */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-[400px] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMTIsIDUwLCAxMTgsIDAuMDUpIi8+PC9zdmc+')] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-primary rounded-[3rem] p-10 sm:p-16 text-center shadow-2xl overflow-hidden relative"
          >
             <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px]" />
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-tertiary-fixed-dim/20 rounded-full blur-[80px]" />
             
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-headline text-white mb-6 tracking-tight relative z-10">
              Claim Your <span className="text-tertiary-fixed-dim">Free Demo</span> Class
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-10 text-lg sm:text-xl font-medium leading-relaxed relative z-10">
              See the "Arising Edge" in action. Book a complimentary session today and experience our expert mentorship firsthand.
            </p>
            <a
              href={`https://wa.me/91${siteInfo.whatsapp}?text=Hi, I would like to book a free demo class at Arising Tutorials.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-tertiary-fixed-dim hover:bg-tertiary-fixed text-tertiary px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-[0.15em] transition-all duration-300 shadow-[0_4px_14px_rgba(245,166,35,0.3)] hover:shadow-[0_6px_20px_rgba(245,166,35,0.4)] hover:-translate-y-0.5 group relative z-10"
            >
              Book on WhatsApp
              <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">open_in_new</span>
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
