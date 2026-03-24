import { motion } from "framer-motion";
import { testimonials } from "../data/siteData";

export default function Testimonials({ limit }) {
  const displayTestimonials = limit
    ? testimonials.slice(0, limit)
    : testimonials;

  return (
    <section className="py-24 bg-surface-container-highest overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-tertiary font-bold text-xs uppercase tracking-[0.2em] font-label">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold font-headline text-primary mt-3 tracking-tight">
            What Our <span className="text-tertiary">Students Say</span>
          </h2>
          <p className="text-on-surface-variant font-medium mt-4 max-w-2xl mx-auto text-lg leading-relaxed">
            Real reviews from students and parents who have experienced the
            Arising Tutorials difference.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayTestimonials.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white rounded-3xl p-8 shadow-sm border border-surface-variant hover:shadow-[0_20px_40px_rgba(12,50,118,0.06)] transition-all duration-300 flex flex-col relative group"
            >
              <div className="absolute top-8 right-8 text-tertiary/20 group-hover:text-tertiary/40 transition-colors">
                 <span className="material-symbols-outlined text-6xl" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
              </div>
              <p className="text-on-surface-variant text-base leading-relaxed flex-1 relative z-10 pt-4 italic">
                "{item.text}"
              </p>
              <div className="mt-8 pt-6 border-t border-surface-variant flex items-center justify-between relative z-10 w-full">
                <div>
                  <p className="text-base font-bold text-primary font-headline">
                    {item.name}
                  </p>
                  <p className="text-xs font-bold text-on-surface-variant/70 uppercase tracking-widest mt-0.5 font-label">
                    {item.date}
                  </p>
                </div>
                <div className="flex gap-0.5 text-tertiary-fixed-dim">
                   {[...Array(5)].map((_, j) => (
                    <span key={j} className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
