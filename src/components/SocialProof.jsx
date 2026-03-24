import { motion } from "framer-motion";

export default function SocialProof() {
  return (
    <section className="bg-surface-container-low py-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
          
          {/* Google Reviews */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row items-center gap-4"
          >
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
              <img 
                alt="Google" 
                className="w-6 h-6" 
                src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" 
              />
            </div>
            <div>
              <div className="flex items-center justify-center md:justify-start gap-1 text-tertiary-fixed-dim mb-0.5">
                {[...Array(4)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                ))}
                <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>star_half</span>
                <span className="text-primary font-bold ml-1 text-lg">4.7</span>
              </div>
              <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest font-label">67 Google Reviews</p>
            </div>
          </motion.div>

          {/* Years of Experience */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col items-center justify-center border-x-0 md:border-x-2 md:border-surface-variant px-4 py-4 md:py-0"
          >
            <p className="text-4xl font-black text-primary font-headline">15+ Years</p>
            <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest font-label mt-1">Academic Excellence</p>
          </motion.div>

          {/* Student Success Stories */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center md:items-end"
          >
            <div className="flex -space-x-3 mb-2">
              <div className="w-10 h-10 rounded-full border-2 border-white bg-secondary flex items-center justify-center text-white"><span className="material-symbols-outlined text-sm">person</span></div>
              <div className="w-10 h-10 rounded-full border-2 border-white bg-tertiary-fixed-dim flex items-center justify-center text-white"><span className="material-symbols-outlined text-sm">person</span></div>
              <div className="w-10 h-10 rounded-full border-2 border-white bg-primary flex items-center justify-center text-white"><span className="material-symbols-outlined text-sm">person</span></div>
              <div className="w-10 h-10 rounded-full border-2 border-white bg-primary-container flex items-center justify-center text-[10px] text-white font-bold">+1k</div>
            </div>
            <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest font-label">Success Stories Shared</p>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
