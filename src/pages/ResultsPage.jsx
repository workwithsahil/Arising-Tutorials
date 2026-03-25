import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { results } from "../data/siteData";

export default function ResultsPage() {
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
              <span className="material-symbols-outlined text-tertiary-fixed-dim text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>social_leaderboard</span>
              <span className="text-white/90 text-xs font-bold font-label uppercase tracking-widest">
                SSC Board 2024-25
              </span>
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold font-headline text-white mb-6 tracking-tight">
              Our <span className="text-tertiary-fixed-dim">Results</span>
            </h1>
            <p className="text-white/70 text-lg sm:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
              Proven results year after year. Our students consistently outshine the competition with elite scores and top rankings.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-surface border-b border-surface-variant z-20 relative -mt-10 rounded-t-[3rem] shadow-[0_-10px_40px_rgba(0,0,0,0.05)] mx-4 sm:mx-8">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: "workspace_premium", value: "96%", label: "Highest Score" },
              { icon: "star", value: "9", label: "Students Above 90%" },
              { icon: "trending_up", value: "92.4%", label: "Average Score" },
              { icon: "emoji_events", value: "2024-25", label: "SSC Board Exam" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center p-8 rounded-3xl bg-surface-container-lowest border border-surface-variant hover:shadow-[0_10px_30px_rgba(12,50,118,0.04)] transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-tertiary-fixed-dim/10 flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-tertiary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>{stat.icon}</span>
                </div>
                <p className="text-3xl font-extrabold text-primary font-headline">{stat.value}</p>
                <p className="text-xs font-bold text-on-surface-variant/70 uppercase tracking-widest font-label mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Grid */}
      <section className="py-24 bg-surface-container-highest">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-extrabold text-primary font-headline tracking-tight">
              Celebrating Our <span className="text-tertiary">2024-25 Stars</span>
            </h2>
            <p className="text-on-surface-variant font-medium mt-4 text-lg">
              Meet the achievers who turned dedication into top-tier board scores.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {results.map((student, i) => (
              <motion.div
                key={student.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`flex flex-col relative bg-white rounded-3xl p-8 border hover:-translate-y-1 transition-all duration-300 ${
                  i === 0
                    ? "border-tertiary-fixed-dim/30 shadow-[0_20px_40px_rgba(245,166,35,0.15)]"
                    : "border-surface-variant shadow-sm hover:shadow-[0_20px_40px_rgba(12,50,118,0.06)]"
                }`}
              >
                {/* Rank badge */}
                {i < 3 && (
                  <div
                    className={`absolute -top-4 -right-4 w-12 h-12 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg font-headline ${
                      i === 0
                        ? "bg-tertiary"
                        : i === 1
                        ? "bg-gray-400"
                        : "bg-amber-700"
                    }`}
                  >
                    #{i + 1}
                  </div>
                )}

                <div className="flex items-center gap-5">
                  {/* Avatar */}
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold font-headline shrink-0 ${
                      i === 0
                        ? "bg-tertiary/10 text-tertiary-fixed-dim"
                        : "bg-primary/5 text-primary"
                    }`}
                  >
                    {student.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-extrabold text-primary font-headline">
                      {student.name}
                    </h3>
                    <p className="text-xs font-bold text-on-surface-variant/70 uppercase tracking-widest font-label mt-1">10th SSC Board</p>
                  </div>

                  {/* Score */}
                  <div className="text-right">
                    <p
                      className={`text-3xl font-extrabold font-headline ${
                        i === 0 ? "text-tertiary-fixed-dim" : "text-primary/90"
                      }`}
                    >
                      {student.percentage}%
                    </p>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="mt-8 bg-surface-container-highest rounded-full h-2 overflow-hidden w-full relative">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{
                      width: `${parseFloat(student.percentage)}%`,
                    }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 + i * 0.05 }}
                    className={`absolute top-0 left-0 h-full rounded-full ${
                      i === 0
                        ? "bg-gradient-to-r from-tertiary-fixed-dim to-[#FFD700]"
                        : "bg-gradient-to-r from-primary to-[#3A5FA8]"
                    }`}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mt-20"
          >
            <p className="text-on-surface-variant text-base font-medium mb-6">
              Ready to secure your spot among the next batch of toppers?
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-tertiary-fixed-dim hover:bg-tertiary-fixed text-tertiary px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-[0.15em] transition-all duration-300 shadow-[0_4px_14px_rgba(245,166,35,0.3)] hover:shadow-[0_6px_20px_rgba(245,166,35,0.4)] hover:-translate-y-0.5 group"
            >
              Start Your Journey
              <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">east</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
