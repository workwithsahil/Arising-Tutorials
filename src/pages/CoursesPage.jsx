import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { courses } from "../data/siteData";

export default function CoursesPage() {
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
              <span className="material-symbols-outlined text-tertiary-fixed-dim text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>auto_stories</span>
              <span className="text-white/90 text-xs font-bold font-label uppercase tracking-widest">
                SSC, CBSE, ICSE, JEE, NEET
              </span>
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold font-headline text-white mb-6 tracking-tight">
              Our <span className="text-tertiary-fixed-dim">Programs</span>
            </h1>
            <p className="text-white/70 text-lg sm:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
              Comprehensive coaching programs designed to help every student excel.
              Fees starting from Rs. 8,000 per session.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Courses */}
      <section className="py-24 bg-surface-container-highest">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {courses.map((category, i) => {
              return (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="bg-white rounded-3xl shadow-sm border border-surface-variant overflow-hidden hover:shadow-[0_20px_40px_rgba(12,50,118,0.06)] transition-all duration-300 flex flex-col"
                >
                  {/* Category Header */}
                  <div className="bg-primary px-8 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 relative overflow-hidden">
                    <div className="absolute right-0 top-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -mr-10 -mt-10" />
                    <div className="relative z-10">
                      <h2 className="text-2xl font-extrabold font-headline text-white">
                        {category.category}
                      </h2>
                      <p className="text-tertiary-fixed-dim text-sm mt-1 font-bold uppercase tracking-widest font-label">
                        {category.subtitle}
                      </p>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/20 shrink-0 relative z-10">
                      <span className="material-symbols-outlined text-white text-xl">school</span>
                    </div>
                  </div>

                  {/* Course Items */}
                  <div className="divide-y divide-surface-variant flex-1 flex flex-col justify-center px-2 py-2">
                    {category.items.map((item) => (
                      <div
                        key={`${item.name}-${item.board}`}
                        className="px-6 py-5 flex items-center justify-between hover:bg-surface-container-lowest transition-colors rounded-xl mx-2"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-2 h-2 rounded-full bg-tertiary" />
                          <div>
                            <p className="text-base font-bold font-headline text-primary">
                              {item.name}
                            </p>
                            <p className="text-xs text-on-surface-variant/70 font-bold uppercase tracking-widest font-label mt-0.5">
                              {item.board}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-extrabold text-primary font-headline">
                            Rs. {item.fee}
                          </p>
                          <p className="text-[10px] text-on-surface-variant/60 font-bold uppercase tracking-widest font-label">
                            per session
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16 text-center"
          >
            <p className="text-on-surface-variant font-medium text-base mb-6">
              Free demo class available before enrolment. Contact us for more details.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-tertiary-fixed-dim hover:bg-tertiary-fixed text-tertiary px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-[0.15em] transition-all duration-300 shadow-[0_4px_14px_rgba(245,166,35,0.3)] hover:shadow-[0_6px_20px_rgba(245,166,35,0.4)] hover:-translate-y-0.5 group"
            >
              Enquire Now
              <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
