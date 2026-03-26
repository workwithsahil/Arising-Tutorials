import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import { courses } from "../data/siteData";
import { syllabusData } from "../data/syllabus";
import { generateSyllabusPDF } from "../utils/syllabusUtils";

export default function CoursesPage() {
  const [activeExam, setActiveExam] = useState("jee");
  const [activeClass, setActiveClass] = useState("class11");

  const handleDownload = (e, exam, classKey) => {
    e.preventDefault();
    generateSyllabusPDF(exam, classKey, syllabusData[exam][classKey]);
  };

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
                SSC, CBSE, JEE, NEET
              </span>
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold font-headline text-white mb-6 tracking-tight">
              Programs that Deliver Results
            </h1>
            <p className="text-white/70 text-lg sm:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
              No fluff. No crowded halls. Just pure, results-driven coaching to help you reach your dream college.
              Programs starting as low as ₹8,000.
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
                  <div className="divide-y divide-surface-variant px-2 py-2">
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
                        <div className="flex items-center gap-5">
                          <div className="text-right">
                            <p className="text-lg font-extrabold text-primary font-headline">
                              Rs. {item.fee}
                            </p>
                            <p className="text-[10px] text-on-surface-variant/80 font-bold uppercase tracking-widest font-label">
                              per session
                            </p>
                          </div>
                          <a
                            href={`https://wa.me/918692053788?text=${encodeURIComponent(
                              `Hi, I'm interested in enrolling for ${item.name} (${item.board}) at Arising Tutorials. Please share more details.`
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 rounded-full text-[#075E54] hover:text-[#25D366] hover:bg-[#25D366]/10 transition-all duration-300 group/item flex items-center justify-center border border-[#075E54]/20 hover:border-[#25D366]/50"
                            title={`Enquire via WhatsApp for ${item.name}`}
                          >
                            <svg className="w-5 h-5 fill-current transition-transform group-hover/item:scale-110" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                              <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.4 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.2-8.5-44.2-27.1-16.4-14.6-27.4-32.7-30.6-38.2-3.2-5.6-.3-8.6 2.5-11.3 2.5-2.5 5.5-6.5 8.3-9.7 2.8-3.3 3.7-5.6 5.6-9.3 1.9-3.7.9-6.9-.5-9.7-1.4-2.8-12.4-29.8-17-41.2-4.5-10.9-9.1-9.4-12.4-9.6-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.8 23.5 9.2 31.5 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Card Action */}
                  <div className="px-8 pb-8 mt-auto flex justify-center">
                    <a
                      href={`https://wa.me/918692053788?text=${encodeURIComponent(
                        `Hi, I'm interested in the ${category.category} (${category.subtitle}) program. Please provide more information.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2.5 text-primary hover:text-[#25D366] text-xs font-black uppercase tracking-[0.2em] transition-all duration-300 group/btn"
                    >
                      <span className="border-b-2 border-primary/10 group-hover/btn:border-[#25D366]/50 transition-colors">Express Enquiry</span>
                      <svg className="w-5 h-5 fill-[#075E54] group-hover/btn:fill-[#25D366] transition-all group-hover/btn:scale-110" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                        <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.4 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.2-8.5-44.2-27.1-16.4-14.6-27.4-32.7-30.6-38.2-3.2-5.6-.3-8.6 2.5-11.3 2.5-2.5 5.5-6.5 8.3-9.7 2.8-3.3 3.7-5.6 5.6-9.3 1.9-3.7.9-6.9-.5-9.7-1.4-2.8-12.4-29.8-17-41.2-4.5-10.9-9.1-9.4-12.4-9.6-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.8 23.5 9.2 31.5 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                      </svg>
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Syllabus Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-32"
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-5xl font-extrabold font-headline text-primary mb-6">
                {activeExam === "jee" ? "JEE Main & Advanced" : "NEET (UG)"} Syllabus
              </h2>
              <p className="text-on-surface-variant font-medium text-lg max-w-2xl mx-auto">
                Comprehensive, results-oriented syllabus designed to bridge the gap between school curriculum and competitive excellence.
              </p>
            </div>

            <div className="bg-white rounded-[2.5rem] p-6 sm:px-10 sm:py-8 shadow-[0_24px_80px_rgba(12,50,118,0.08)] border border-surface-variant/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32" />

              {/* Top Controls: Tabs + Download */}
              <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-8 relative z-10 border-b border-surface-variant/20 pb-6">
                <div className="flex flex-col sm:flex-row gap-4 items-center w-full lg:w-auto overflow-x-auto pb-2 lg:pb-0 scrollbar-hide">
                  {/* Exam Toggle */}
                  <div className="inline-flex bg-surface-container-highest p-1.5 rounded-2xl border border-surface-variant/50 shadow-inner shrink-0">
                    {["jee", "neet"].map((exam) => (
                      <button
                        key={exam}
                        onClick={() => setActiveExam(exam)}
                        className={`px-6 py-2.5 rounded-xl text-[10px] sm:text-xs font-black uppercase tracking-widest transition-all duration-300 ${activeExam === exam
                            ? "bg-primary text-white shadow-md"
                            : "text-primary/60 hover:text-primary hover:bg-white/50"
                          }`}
                      >
                        {exam === "jee" ? "JEE" : "NEET"}
                      </button>
                    ))}
                  </div>

                  {/* Class Toggle */}
                  <div className="inline-flex bg-surface-container-highest p-1.5 rounded-2xl border border-surface-variant/50 shadow-inner shrink-0">
                    {["class11", "class12"].map((classKey) => (
                      <button
                        key={classKey}
                        onClick={() => setActiveClass(classKey)}
                        className={`px-6 py-2.5 rounded-xl text-[10px] sm:text-xs font-black uppercase tracking-widest transition-all duration-300 ${activeClass === classKey
                            ? "bg-primary text-white shadow-md"
                            : "text-primary/60 hover:text-primary hover:bg-white/50"
                          }`}
                      >
                        {classKey === "class11" ? `Class 11 (${activeExam.toUpperCase()})` : `Class 12 (${activeExam.toUpperCase()})`}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={(e) => handleDownload(e, activeExam, activeClass)}
                  className="inline-flex items-center justify-center gap-2.5 bg-primary hover:bg-primary-container text-white px-6 py-3.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all duration-300 shadow-xl hover:-translate-y-0.5 active:translate-y-0 group w-full lg:w-auto shrink-0"
                >
                  <span className="material-symbols-outlined text-lg group-hover:animate-bounce">download</span>
                  Download PDF
                </button>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeExam}-${activeClass}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="grid grid-cols-1 lg:grid-cols-3 gap-x-12 gap-y-8 relative z-10"
                >
                  {(activeExam === "jee" ? ["physics", "chemistry", "mathematics"] : ["physics", "chemistry", "biology"]).map((subject) => (
                    <div key={subject} className="flex flex-col bg-surface-container-lowest p-6 rounded-3xl border border-surface-variant/30 hover:shadow-xl transition-all duration-500 group/card relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -mr-16 -mt-16 group-hover/card:bg-tertiary/10 transition-colors duration-500" />
                      
                      <div className="flex items-center gap-4 mb-6 relative z-10">
                        <div className={`p-3 rounded-2xl shadow-sm ${subject === "physics" ? "bg-blue-50 text-blue-600 border border-blue-100" :
                            subject === "chemistry" ? "bg-green-50 text-green-600 border border-green-100" :
                            subject === "mathematics" ? "bg-purple-50 text-purple-600 border border-purple-100" :
                            "bg-rose-50 text-rose-600 border border-rose-100"
                          }`}>
                          <span className="material-symbols-outlined text-2xl group-hover/card:scale-110 transition-transform duration-300">
                            {subject === "physics" ? "bolt" : subject === "chemistry" ? "science" : subject === "mathematics" ? "calculate" : "biotech"}
                          </span>
                        </div>
                        <h3 className="text-xl font-black font-headline text-primary uppercase tracking-widest group-hover/card:text-tertiary transition-colors">
                          {subject}
                        </h3>
                      </div>

                      <div className="space-y-5 relative z-10 grow">
                        {syllabusData[activeExam]?.[activeClass]?.[subject]?.map((item, idx) => (
                          <div key={idx} className="group/item">
                            <h4 className="text-primary font-extrabold text-[15px] mb-1.5 flex items-start gap-3 leading-tight">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary/30 group-hover/item:bg-tertiary transition-colors shrink-0 mt-1.5" />
                              <span className="group-hover/item:-translate-y-0.5 transition-transform duration-300 block">{item.title || item.category}</span>
                            </h4>
                            {item.topics && item.topics.length > 0 && (
                              <p className="text-[13px] text-on-surface-variant/80 leading-relaxed pl-4.5 border-l-2 border-surface-variant/30 ml-0.5 py-1">
                                {item.topics.join(", ")}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Bottom Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-24 text-center"
          >
            <p className="text-on-surface-variant font-medium text-xl mb-8">
              Still unsure? Join us for a free demo session and feel the "Arising Edge" yourself.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-4 bg-primary text-white px-10 py-5 rounded-2xl text-base font-black uppercase tracking-widest transition-all duration-300 shadow-[0_12px_30px_rgba(12,50,118,0.2)] hover:shadow-[0_15px_40px_rgba(12,50,118,0.3)] hover:-translate-y-1 group"
            >
              Book Free Demo
              <span className="material-symbols-outlined text-lg group-hover:translate-x-1.5 transition-transform font-black">arrow_forward</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
