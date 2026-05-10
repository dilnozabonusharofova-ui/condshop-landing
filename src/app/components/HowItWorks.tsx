import { motion } from "motion/react";
import { useLanguage } from "../i18n/LanguageContext";
import { ClipboardList, Handshake, PenTool, CheckCircle } from "lucide-react";

export function HowItWorks() {
  const { t } = useLanguage();
  
  const steps = [
    {
      icon: <ClipboardList size={32} className="text-[#00B4D8] dark:text-[#00E5FF]" />,
      title: t('howItWorks.step1.title'),
      desc: t('howItWorks.step1.desc'),
    },
    {
      icon: <Handshake size={32} className="text-[#00B4D8] dark:text-[#00E5FF]" />,
      title: t('howItWorks.step2.title'),
      desc: t('howItWorks.step2.desc'),
    },
    {
      icon: <PenTool size={32} className="text-[#00B4D8] dark:text-[#00E5FF]" />,
      title: t('howItWorks.step3.title'),
      desc: t('howItWorks.step3.desc'),
    },
    {
      icon: <CheckCircle size={32} className="text-[#00B4D8] dark:text-[#00E5FF]" />,
      title: t('howItWorks.step4.title'),
      desc: t('howItWorks.step4.desc'),
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-white dark:bg-[#030614] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-outfit font-bold text-slate-900 dark:text-white mb-4"
          >
            {t('howItWorks.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
          >
            {t('howItWorks.desc')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-1/8 right-1/8 h-0.5 bg-gradient-to-r from-transparent via-slate-200 dark:via-[#00E5FF]/20 to-transparent z-0"></div>
          
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative z-10 flex flex-col items-center text-center group"
            >
              <div className="w-24 h-24 rounded-full bg-slate-50 dark:bg-[#0B132B] border-2 border-slate-200 dark:border-white/10 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(0,0,0,0.05)] dark:shadow-[0_0_20px_rgba(0,229,255,0.1)] group-hover:border-[#00B4D8] dark:group-hover:border-[#00E5FF] group-hover:scale-110 transition-all duration-300">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold font-outfit text-slate-900 dark:text-white mb-3">{step.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
