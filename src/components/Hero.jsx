import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { siteInfo } from "../data/siteData";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface py-20 lg:py-28 min-h-screen flex items-center pt-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 hero-pattern opacity-60"></div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center w-full">
        {/* Left Content */}
        <div className="space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-tertiary/5 text-tertiary px-4 py-1.5 rounded-full border border-tertiary/10"
          >
            <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>campaign</span>
            <span className="text-xs font-bold uppercase tracking-wider font-label">
              Admissions closing {siteInfo.admissionDeadline}
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold font-headline text-primary leading-[1.1] tracking-tight"
          >
            The Smartest Way to Ace Your Exams
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg text-on-surface-variant font-medium max-w-lg leading-relaxed"
          >
            Real mentorship for CBSE, JEE & NEET. No crowded classrooms—just expert teachers who actually care about your score. Rated {siteInfo.googleRating} on Google.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <Link 
              to="/contact"
              className="bg-primary text-on-primary px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all"
            >
              Enroll Now
            </Link>
            <a 
              href={`https://wa.me/91${siteInfo.whatsapp.replace(/\s/g, "")}?text=Hi, I am interested in a free demo class.`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border-2 border-primary/20 text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary/5 transition-all"
            >
              Claim Free Demo
            </a>
          </motion.div>
        </div>

        {/* Right Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative mt-8 lg:mt-0"
        >
          <div className="relative w-full aspect-square max-w-md lg:max-w-lg mx-auto lg:ml-auto">
            {/* Abstract Geometric Container */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-container rounded-[3rem] rotate-3 shadow-2xl"></div>
            <img 
              alt="Students Learning" 
              className="absolute inset-0 w-full h-full object-cover rounded-[3rem] -rotate-3 transition-transform hover:rotate-0 duration-500 shadow-xl" 
              src="/arising-hero.jpg"
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800";
              }}
            />
            
            {/* Floating Stat Cards */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -top-6 -left-6 lg:-left-12 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-[0_20px_40px_rgba(12,50,118,0.06)] border border-primary/5 animate-bounce-slow"
            >
              <p className="text-xs font-bold text-primary/60 uppercase font-label">Experience</p>
              <p className="text-xl sm:text-2xl font-black text-primary">Since {siteInfo.established}</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="absolute top-1/4 -right-6 lg:-right-10 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-[0_20px_40px_rgba(12,50,118,0.06)] border border-primary/5"
            >
              <div className="flex items-center gap-1 text-tertiary-fixed-dim">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="text-xl sm:text-2xl font-black text-primary">{siteInfo.googleRating} Rating</span>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="absolute -bottom-8 left-10 lg:left-1/4 bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-[0_20px_40px_rgba(12,50,118,0.06)] border border-primary/5"
            >
              <p className="text-primary text-3xl font-black">1000+ <span className="text-xs sm:text-sm font-bold text-on-surface-variant block uppercase tracking-tighter mt-1">Students Mentored</span></p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="absolute bottom-1/4 -right-4 lg:-right-6 bg-primary text-white p-4 rounded-2xl shadow-xl shadow-primary/30"
            >
              <p className="text-2xl font-black">96%</p>
              <p className="text-[10px] font-bold uppercase tracking-widest opacity-80 mt-0.5">Top Score</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
