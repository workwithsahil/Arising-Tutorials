import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { siteInfo } from "../data/siteData";
import Features from "../components/Features";

export default function AboutPage() {
  const milestones = [
    { year: "2009", event: "Arising Tutorials established in Andheri East, Mumbai" },
    { year: "2015", event: "Launched dedicated JEE & NEET coaching divisions" },
    { year: "2020", event: "Expanded infrastructure with modern AC classrooms" },
    { year: "2024", event: "9 students scored 90%+ in SSC Board Exams" },
    { year: "2025", event: "Rated 4.7 on Google with 67+ reviews" },
    { year: "2026", event: "New website launch & admissions for 2026-27 batch" },
  ];

  const policies = [
    "Students are expected to attend all classes regularly",
    "Mutual respect between students, faculty, and staff is mandatory",
    "Regular evaluations to monitor student progress",
    "Parent-teacher meetings to keep parents informed",
    "Safe and secure environment for all students and staff",
    "Free demo class available before enrolment",
  ];

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
              <span className="material-symbols-outlined text-tertiary-fixed-dim text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>corporate_fare</span>
              <span className="text-white/90 text-xs font-bold font-label uppercase tracking-widest">
                Since {siteInfo.established}
              </span>
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold font-headline text-white mb-6 tracking-tight">
              The Story of Arising
            </h1>
            <p className="text-white/70 text-lg sm:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
              We started with a simple goal: to make elite coaching personal. Today, we’re proud to be Andheri’s most trusted destination for student success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-surface-container-highest">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-tertiary font-bold text-xs uppercase tracking-[0.2em] font-label">
                Our Why
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold font-headline text-primary mt-3 mb-8 tracking-tight">
                More Than Just Grades
              </h2>
              <p className="text-on-surface-variant font-medium text-lg leading-relaxed mb-6">
                {siteInfo.mission}
              </p>
              <p className="text-on-surface text-base leading-relaxed mb-10 opacity-80">
                {siteInfo.description}
              </p>
              <div className="grid grid-cols-2 gap-5">
                {[
                  { icon: "calendar_today", label: "Established 2009" },
                  { icon: "group", label: "1000+ Students" },
                  { icon: "menu_book", label: "SSC, CBSE" },
                  { icon: "my_location", label: "JEE & NEET" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-surface-variant shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-primary text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>{item.icon}</span>
                    </div>
                    <span className="text-sm font-bold font-headline text-primary">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-primary rounded-[2.5rem] p-10 sm:p-12 text-white relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px]" />
                
                <div className="relative z-10">
                  <span className="material-symbols-outlined text-tertiary-fixed-dim text-5xl mb-6" style={{ fontVariationSettings: "'FILL' 1" }}>security</span>
                  <h3 className="text-2xl font-extrabold font-headline mb-8">Our Values</h3>
                  <ul className="space-y-6">
                    {[
                      "Elite education accessible to every student",
                      "Modern pedagogy for competitive exam success",
                      "Expert faculty with 15+ years of proven results",
                      "One-on-one career guidance and peak performance support",
                      "The perfect blend of conceptual depth and exam skills",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <span className="material-symbols-outlined text-tertiary-fixed-dim text-xl shrink-0 mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                        <span className="text-white/80 text-base font-medium leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-surface">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-tertiary font-bold text-xs uppercase tracking-[0.2em] font-label">
              Our History
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold font-headline text-primary mt-3 tracking-tight">
              How We <span className="text-tertiary">Grew</span>
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-primary/10 -translate-x-1/2" />

            <div className="space-y-12">
              {milestones.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`relative flex items-center gap-6 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-tertiary rounded-full border-[4px] border-white shadow-md -translate-x-1/2 z-10" />

                  {/* Content */}
                  <div
                    className={`ml-12 md:ml-0 md:w-1/2 ${
                      i % 2 === 0 ? "md:pr-14 md:text-right" : "md:pl-14"
                    }`}
                  >
                    <span className="text-tertiary-fixed-dim font-extrabold font-headline text-2xl inline-block mb-1">
                      {item.year}
                    </span>
                    <p className="text-on-surface-variant text-base font-medium">{item.event}</p>
                  </div>
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Policies */}
      <section className="py-24 bg-surface-container-highest">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-tertiary font-bold text-xs uppercase tracking-[0.2em] font-label">
              The Rules
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold font-headline text-primary mt-3 tracking-tight">
              How We <span className="text-tertiary">Keep It Professional</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {policies.map((policy, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-start gap-4 p-6 bg-white rounded-3xl border border-surface-variant shadow-sm hover:shadow-[0_10px_30px_rgba(12,50,118,0.04)] transition-all"
              >
                <span className="material-symbols-outlined text-[#25D366] mt-0.5 shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <p className="text-base font-medium text-on-surface-variant leading-relaxed">{policy}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-tertiary-fixed-dim hover:bg-tertiary-fixed text-tertiary px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-[0.15em] transition-all duration-300 shadow-[0_4px_14px_rgba(245,166,35,0.3)] hover:shadow-[0_6px_20px_rgba(245,166,35,0.4)] hover:-translate-y-0.5 group"
            >
              Get in Touch
              <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">east</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <Features />
    </>
  );
}
