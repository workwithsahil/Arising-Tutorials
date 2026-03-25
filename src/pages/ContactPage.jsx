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
              Let's <span className="text-tertiary-fixed-dim">Get in Touch</span>
            </h1>
            <p className="text-white/70 text-lg sm:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
              Ready to stop struggling and start succeeding? Reach out today. Whether it's a quick question or a demo class, we're here to help.
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
              Admissions are closing fast for 2026-27! Don't wait—grab your seat before the deadline.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-surface-container-highest">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          {/* Top Row: Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-4 p-5 bg-white rounded-3xl border border-surface-variant shadow-sm"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
              </div>
              <div>
                <p className="font-bold font-headline text-primary text-sm mb-0.5">Phone</p>
                <p className="text-tertiary font-bold text-base">{siteInfo.phone.primary}</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-4 p-5 bg-white rounded-3xl border border-surface-variant shadow-sm"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#25D366]/10 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[#25D366] text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>forum</span>
              </div>
              <div>
                <p className="font-bold font-headline text-primary text-sm mb-0.5">WhatsApp</p>
                <p className="text-[#25D366] font-bold text-base">+91 {siteInfo.whatsapp}</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-4 p-5 bg-white rounded-3xl border border-surface-variant shadow-sm"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
              </div>
              <div>
                <p className="font-bold font-headline text-primary text-sm mb-0.5">Address</p>
                <p className="text-on-surface-variant text-sm font-medium leading-tight">Andheri East, Mumbai</p>
              </div>
            </motion.div>
          </div>

          {/* Bottom Row: Form and Map */}
          <div className="grid lg:grid-cols-5 gap-8 items-stretch">
            {/* Map */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 bg-white rounded-4xl border border-surface-variant overflow-hidden shadow-sm flex flex-col"
            >
              <div className="p-6 border-b border-surface-variant flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-2xl">navigation</span>
                  <h3 className="font-extrabold font-headline text-primary text-base">Our Location</h3>
                </div>
                <a href="https://maps.google.com/?q=Arising+Tutorials+Andheri+East" target="_blank" rel="noopener noreferrer" className="text-tertiary-fixed-dim hover:text-tertiary text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5 transition-colors">
                  Open in Maps <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                </a>
              </div>
              <div className="flex-1 w-full min-h-[400px] relative p-1">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.0!2d72.88!3d19.12!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA3JzEyLjAiTiA3MsKwNTInNDguMCJF!5e0!3m2!1sen!2sin!4v1"
                  className="w-full h-full absolute inset-0 p-2"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Location"
                />
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-3 bg-white rounded-4xl border border-surface-variant p-8 shadow-sm flex flex-col"
            >
              <div className="flex items-center gap-3 mb-8">
                <span className="material-symbols-outlined text-primary text-2xl">edit_note</span>
                <h3 className="font-extrabold font-headline text-primary text-xl">
                  Drop us a Message
                </h3>
              </div>

              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.target);
                  const data = Object.fromEntries(formData);
                  const message = `Hi Arising Tutorials,\n\nI'm interested in joining.\nName: ${data.name}\nPhone: ${data.phone}\nCourse: ${data.course}\nMessage: ${data.message}`;
                  window.open(`https://wa.me/91${siteInfo.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
                }}
                className="space-y-6 flex-1"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/70 ml-1">Full Name</label>
                    <input type="text" id="name" name="name" required placeholder="John Doe" className="w-full px-5 py-4 bg-surface-container-lowest border border-surface-variant rounded-2xl focus:ring-2 focus:ring-primary/20 outline-none transition-all font-medium text-sm" />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/70 ml-1">Phone Number</label>
                    <input type="tel" id="phone" name="phone" required placeholder="+91 00000 00000" className="w-full px-5 py-4 bg-surface-container-lowest border border-surface-variant rounded-2xl focus:ring-2 focus:ring-primary/20 outline-none transition-all font-medium text-sm" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="course" className="block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/70 ml-1">Interested Course</label>
                  <select id="course" name="course" required className="w-full px-5 py-4 bg-surface-container-lowest border border-surface-variant rounded-2xl focus:ring-2 focus:ring-primary/20 outline-none transition-all font-medium text-sm appearance-none cursor-pointer">
                    <option value="">Select Category</option>
                    <option value="Class 8-10">Class 8-10 Foundation</option>
                    <option value="Class 11-12">Class 11-12 Science</option>
                    <option value="JEE">JEE Preparation</option>
                    <option value="NEET">NEET Preparation</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="message" className="block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/70 ml-1">Message (Optional)</label>
                  <textarea id="message" name="message" rows="3" placeholder="How can we help you?" className="w-full px-5 py-4 bg-surface-container-lowest border border-surface-variant rounded-2xl focus:ring-2 focus:ring-primary/20 outline-none transition-all font-medium text-sm resize-none"></textarea>
                </div>
                <button type="submit" className="w-full bg-[#25D366] hover:bg-[#1DA851] text-white py-4 rounded-2xl text-xs font-bold uppercase tracking-[0.2em] transition-all shadow-[0_8px_20px_rgba(37,211,102,0.2)] flex items-center justify-center gap-3 mt-4">
                  <span className="material-symbols-outlined text-xl">send</span>
                  Send on WhatsApp
                </button>
              </form>
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
              Experience the <span className="text-tertiary-fixed-dim">Arising Edge</span>
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-10 text-lg sm:text-xl font-medium leading-relaxed relative z-10">
              Still on the fence? Come see how we teach. Book a free demo class today and feel the difference yourself.
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
