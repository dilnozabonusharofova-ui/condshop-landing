import { motion } from "motion/react";
import { useLanguage } from "../i18n/LanguageContext";

export function Hero() {
  const { t } = useLanguage();
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center pt-20 pb-32">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1717323454555-f053c31ff4b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzbWFydCUyMGhvbWUlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzgwNjgyNjh8MA&ixlib=rb-4.1.0&q=80&w=1920"
          alt="Modern Smart Home Interior"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/90 via-slate-50/80 to-slate-50 dark:from-[#0B132B]/80 dark:via-[#0B132B]/60 dark:to-[#0B132B]"></div>
        <div className="absolute inset-0 backdrop-blur-[2px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-slate-900/5 dark:bg-white/5 border border-slate-900/10 dark:border-white/10 text-[#00B4D8] dark:text-[#00E5FF] text-sm font-semibold tracking-wider mb-6 uppercase">
            {t('hero.badge')}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl font-outfit font-bold text-slate-900 dark:text-white leading-tight tracking-tight max-w-4xl"
        >
          {t('hero.title1')} <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B4D8] to-[#0077B6] dark:from-[#00E5FF] dark:to-[#0099FF] drop-shadow-none dark:drop-shadow-[0_0_20px_rgba(0,229,255,0.3)]">
            {t('hero.title2')}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-6 text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl font-light"
        >
          {t('hero.desc')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <a href="#contact" className="px-8 py-4 rounded-xl bg-[#00B4D8] dark:bg-[#00E5FF] text-white dark:text-[#0B132B] font-bold text-lg hover:bg-[#00B4D8]/90 dark:hover:bg-[#00E5FF]/90 transition-all dark:shadow-[0_0_25px_rgba(0,229,255,0.5)] dark:hover:shadow-[0_0_35px_rgba(0,229,255,0.7)] hover:-translate-y-1 text-center flex items-center justify-center">
            {t('hero.bookBtn')}
          </a>
          <a href="#portfolio" className="px-8 py-4 rounded-xl bg-slate-900/5 dark:bg-white/5 border border-slate-900/10 dark:border-white/20 text-slate-900 dark:text-white font-medium text-lg hover:bg-slate-900/10 dark:hover:bg-white/10 backdrop-blur-md transition-all hover:-translate-y-1 text-center flex items-center justify-center">
            {t('hero.portfolioBtn')}
          </a>
        </motion.div>
      </div>
      
    </section>
  );
}
