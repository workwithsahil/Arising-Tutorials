import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Trophy, ArrowRight } from "lucide-react";
import { results } from "../data/siteData";

export default function ResultsPreview() {
  const topResults = results.slice(0, 6);

  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-tertiary-fixed-dim/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-tertiary font-bold text-xs uppercase tracking-[0.2em] font-label">
            Our Results
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold font-headline text-primary mt-3">
            SSC Board Results <span className="text-tertiary">2024-25</span>
          </h2>
          <p className="text-on-surface-variant font-medium mt-4 max-w-2xl mx-auto text-lg">
            Our students consistently achieve outstanding results. Here are
            some of our top performers from the latest SSC board examinations.
          </p>
        </motion.div>

        {/* Results Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {topResults.map((student, i) => (
            <motion.div
              key={student.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group bg-surface-container-low rounded-3xl p-6 hover:bg-white transition-all duration-300 shadow-sm hover:shadow-[0_20px_40px_rgba(12,50,118,0.06)] text-center relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-tertiary-fixed-dim to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="w-14 h-14 rounded-2xl bg-tertiary-fixed-dim/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-tertiary/10 transition-colors">
                <Trophy className="w-6 h-6 text-tertiary" />
              </div>
              <p className="text-3xl font-black font-headline text-primary mb-1">
                {student.percentage}%
              </p>
              <p className="text-sm font-bold text-on-surface leading-tight">
                {student.name}
              </p>
              <p className="text-xs font-semibold text-on-surface-variant/70 uppercase tracking-widest mt-2 font-label">
                SSC 24-25
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            to="/results"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-container font-bold transition-all group hover:gap-3"
          >
            View All Results
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
