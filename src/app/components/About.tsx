import { motion } from "motion/react";
import { useLanguage } from "../i18n/LanguageContext";
import { Shield, Award, Users, ThumbsUp, CheckCircle2 } from "lucide-react";

export function About() {
  const { t } = useLanguage();

  const trustItems = [
    { icon: <Shield size={28} />, value: "15+", label: t('about.trust.years') },
    { icon: <Users size={28} />, value: "10,000+", label: t('about.trust.clients') },
    { icon: <Award size={28} />, value: "100%", label: t('about.trust.guarantee') },
    { icon: <ThumbsUp size={28} />, value: "24/7", label: t('about.trust.support') },
  ];

  const checkpoints = [
    t('about.check1'),
    t('about.check2'),
    t('about.check3'),
    t('about.check4'),
    t('about.check5'),
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-50 dark:bg-[#0B132B] transition-colors duration-300">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#00B4D8]/10 dark:from-[#00E5FF]/5 to-transparent rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#0077B6]/10 dark:from-[#0099FF]/5 to-transparent rounded-full blur-[80px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block py-1.5 px-4 rounded-full bg-[#00B4D8]/10 dark:bg-[#00E5FF]/10 text-[#00B4D8] dark:text-[#00E5FF] text-sm font-bold tracking-wider uppercase mb-4"
          >
            {t('about.badge')}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-outfit font-bold text-slate-900 dark:text-white mb-4"
          >
            {t('about.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg"
          >
            {t('about.subtitle')}
          </motion.p>
        </div>

        {/* Main Content: 2 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left: Image with overlay badge */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/ac_technician_about_1778155432431.png"
                alt="Professional AC Installation"
                className="w-full h-[400px] md:h-[600px] object-cover rounded-3xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-4 md:right-6 bg-white dark:bg-[#0B132B] border border-slate-200 dark:border-white/10 rounded-2xl p-5 shadow-xl dark:shadow-[0_0_30px_rgba(0,229,255,0.1)]">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-xl bg-[#00B4D8]/10 dark:bg-[#00E5FF]/10 flex items-center justify-center">
                  <Award className="text-[#00B4D8] dark:text-[#00E5FF]" size={28} />
                </div>
                <div>
                  <p className="text-2xl font-bold font-outfit text-slate-900 dark:text-white">15+</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">{t('about.trust.years')}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Text content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-outfit font-bold text-slate-900 dark:text-white leading-snug">
              {t('about.heading')}
            </h3>

            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base">
              {t('about.desc1')}
            </p>

            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base">
              {t('about.desc2')}
            </p>

            {/* Checkmarks */}
            <div className="space-y-3 pt-2">
              {checkpoints.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="text-[#00B4D8] dark:text-[#00E5FF] flex-shrink-0" size={20} />
                  <span className="text-slate-700 dark:text-slate-300 font-medium">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4">
              <a
                href="https://t.me/condshop_robot"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#00B4D8] dark:bg-[#00E5FF] text-white dark:text-[#0B132B] font-bold text-lg hover:bg-[#0096C7] dark:hover:bg-[#00E5FF]/90 transition-all dark:shadow-[0_0_20px_rgba(0,229,255,0.4)] hover:-translate-y-1"
              >
                📞 {t('about.cta')}
              </a>
            </div>
          </motion.div>
        </div>

        {/* Trust Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {trustItems.map((item, i) => (
            <div
              key={i}
              className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl p-6 text-center hover:border-[#00B4D8] dark:hover:border-[#00E5FF]/50 transition-all group"
            >
              <div className="w-14 h-14 mx-auto rounded-xl bg-[#00B4D8]/10 dark:bg-[#00E5FF]/10 flex items-center justify-center mb-4 text-[#00B4D8] dark:text-[#00E5FF] group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <p className="text-3xl font-bold font-outfit text-slate-900 dark:text-white mb-1">{item.value}</p>
              <p className="text-sm text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider">{item.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
