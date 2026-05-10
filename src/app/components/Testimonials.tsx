import { motion } from "motion/react";
import { Quote, BadgeCheck } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

export function Testimonials() {
  const { t } = useLanguage();
  const testimonials = [
    {
      name: "Timur R.",
      role: t('testimonials.roles.homeowner'),
      text: t('testimonials.reviews.t1'),
    },
    {
      name: "Alisher K.",
      role: t('testimonials.roles.business'),
      text: t('testimonials.reviews.t2'),
    },
    {
      name: "Maria V.",
      role: t('testimonials.roles.designer'),
      text: t('testimonials.reviews.t3'),
    },
    {
      name: "Rustam S.",
      role: t('testimonials.roles.manager'),
      text: t('testimonials.reviews.t4'),
    },
    {
      name: "Anna L.",
      role: t('testimonials.roles.homeowner'),
      text: t('testimonials.reviews.t5'),
    }
  ];

  // Duplicate for infinite scroll effect
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section id="reviews" className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-outfit font-bold text-white mb-4"
        >
          {t('testimonials.title')}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-slate-400 max-w-2xl mx-auto"
        >
          {t('testimonials.desc')}
        </motion.p>
      </div>

      <div className="relative w-full flex overflow-hidden group">
        {/* Left/Right Fading Gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0B132B] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0B132B] to-transparent z-10 pointer-events-none"></div>

        <motion.div 
          className="flex gap-6 w-max py-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
        >
          {duplicatedTestimonials.map((testimonial, idx) => (
            <div 
              key={idx} 
              className="w-[350px] md:w-[400px] shrink-0 p-[1px] rounded-2xl bg-gradient-to-br from-white/20 to-white/5"
            >
              <div className="h-full w-full bg-[#0B132B]/80 backdrop-blur-xl rounded-2xl p-8 relative overflow-hidden group-hover:bg-[#0B132B]/60 transition-colors">
                <div className="absolute top-0 right-0 p-6 opacity-10 text-[#00E5FF]">
                  <Quote size={80} />
                </div>
                
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <p className="text-slate-300 font-light leading-relaxed mb-8">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="flex items-center justify-between border-t border-white/10 pt-4 mt-auto">
                    <div>
                      <h4 className="text-white font-bold font-outfit">{testimonial.name}</h4>
                      <p className="text-xs text-slate-400">{testimonial.role}</p>
                    </div>
                    <div className="flex items-center gap-1 text-[#00E5FF] bg-[#00E5FF]/10 px-2 py-1 rounded border border-[#00E5FF]/20">
                      <BadgeCheck size={14} />
                      <span className="text-xs font-bold uppercase tracking-wider">{t('testimonials.verified')}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
