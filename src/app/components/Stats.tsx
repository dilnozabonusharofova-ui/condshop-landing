import { motion } from "motion/react";
import { useLanguage } from "../i18n/LanguageContext";

export function Stats() {
  const { t } = useLanguage();
  const stats = [
    { value: "10,000+", label: t('stats.projects') },
    { value: "15+", label: t('stats.experience') },
    { value: "10+", label: t('stats.experts') },
    { value: "100%", label: t('stats.satisfaction') },
  ];

  return (
    <section className="relative z-20 -mt-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-center pt-6 md:pt-0 first:pt-0 [&:nth-child(3)]:pt-6 md:[&:nth-child(3)]:pt-0 [&:nth-child(2)]:pt-0 md:[&:nth-child(2)]:pt-0">
              <span className="text-4xl md:text-5xl font-outfit font-bold text-[#00E5FF] drop-shadow-[0_0_15px_rgba(0,229,255,0.4)]">
                {stat.value}
              </span>
              <span className="mt-2 text-sm text-slate-300 font-medium uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
