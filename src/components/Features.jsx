import { motion } from "framer-motion";
import { features } from "../data/siteData";

const materialIconsMap = {
  "personal-attention": "groups",
  "small-batches": "supervised_user_circle",
  "experienced-faculty": "school",
  "mock-tests": "analytics",
  "doubt-solving": "psychology_alt",
  "ac-classrooms": "ac_unit",
  "career-guidance": "explore",
  "study-material": "menu_book",
};

export default function Features({ limit }) {
  // Using 3 key features for the asymmetric storytelling layout that fit the new design better
  const keyFeatures = limit ? features.slice(0, 3) : features.slice(0,3);

  return (
    <section className="py-24 bg-surface-container-highest overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left Side: Asymmetric Images */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-1 relative"
        >
          {/* Blur blob behind */}
          <div className="absolute -top-12 -left-12 w-64 h-64 bg-tertiary-fixed-dim/20 rounded-full blur-3xl"></div>
          
          <div className="grid grid-cols-2 gap-4 relative z-10">
            <img 
              alt="Coaching session" 
              className="rounded-[2rem] shadow-lg mt-12 hover:-translate-y-2 transition-transform duration-500 h-64 object-cover w-full" 
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800"
            />
            <img 
              alt="Student studying" 
              className="rounded-4xl shadow-[0_20px_40px_rgba(12,50,118,0.12)] hover:-translate-y-2 transition-transform duration-500 h-80 object-cover w-full" 
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800"
            />
          </div>
        </motion.div>

        {/* Right Side: Content */}
        <div className="order-1 lg:order-2 space-y-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h4 className="text-tertiary font-bold uppercase tracking-widest text-xs font-label">
              Why Choose Us?
            </h4>
            <h2 className="text-4xl md:text-5xl font-extrabold font-headline text-primary tracking-tight leading-tight">
              We Teach Smarter, Not Just Harder
            </h2>
            <p className="text-on-surface-variant font-medium text-lg leading-relaxed pt-2">
              Forget boring lectures. We focus on building your confidence and logic. With 15+ years of experience in Mumbai, we know exactly what it takes to help you win.
            </p>
          </motion.div>

          {/* List */}
          <div className="space-y-8">
            {keyFeatures.map((feature, i) => (
              <motion.div 
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="flex gap-6 group cursor-default"
              >
                <div className="shrink-0 w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary border border-surface-variant group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <span className="material-symbols-outlined">{materialIconsMap[feature.id] || "school"}</span>
                </div>
                <div>
                  <h5 className="text-xl font-bold font-headline text-primary mb-2 group-hover:text-tertiary transition-colors">{feature.title}</h5>
                  <p className="text-on-surface-variant text-base leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
