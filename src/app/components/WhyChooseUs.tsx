import { motion } from "motion/react";
import { useLanguage } from "../i18n/LanguageContext";
import { ShieldCheck, Clock, Settings, Wrench, Headphones, Award } from "lucide-react";

export function WhyChooseUs() {
  const { t } = useLanguage();
  
  const reasons = [
    {
      icon: <Award size={24} className="text-[#00B4D8] dark:text-[#00E5FF]" />,
      title: t('whyChooseUs.reason1.title'),
      desc: t('whyChooseUs.reason1.desc'),
    },
    {
      icon: <Clock size={24} className="text-[#00B4D8] dark:text-[#00E5FF]" />,
      title: t('whyChooseUs.reason2.title'),
      desc: t('whyChooseUs.reason2.desc'),
    },
    {
      icon: <ShieldCheck size={24} className="text-[#00B4D8] dark:text-[#00E5FF]" />,
      title: t('whyChooseUs.reason3.title'),
      desc: t('whyChooseUs.reason3.desc'),
    },
    {
      icon: <Settings size={24} className="text-[#00B4D8] dark:text-[#00E5FF]" />,
      title: t('whyChooseUs.reason4.title'),
      desc: t('whyChooseUs.reason4.desc'),
    },
    {
      icon: <Headphones size={24} className="text-[#00B4D8] dark:text-[#00E5FF]" />,
      title: t('whyChooseUs.reason5.title'),
      desc: t('whyChooseUs.reason5.desc'),
    },
    {
      icon: <Wrench size={24} className="text-[#00B4D8] dark:text-[#00E5FF]" />,
      title: t('whyChooseUs.reason6.title'),
      desc: t('whyChooseUs.reason6.desc'),
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-slate-50 dark:bg-[#0B132B] transition-colors duration-300">
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-blue-100/50 dark:from-[#00E5FF]/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-outfit font-bold text-slate-900 dark:text-white mb-4"
          >
            {t('whyChooseUs.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
          >
            {t('whyChooseUs.desc')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 p-8 rounded-2xl shadow-sm hover:shadow-xl dark:hover:bg-white/10 transition-all group"
            >
              <div className="w-14 h-14 rounded-xl bg-slate-100 dark:bg-[#00E5FF]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold font-outfit text-slate-900 dark:text-white mb-3">{reason.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {reason.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
