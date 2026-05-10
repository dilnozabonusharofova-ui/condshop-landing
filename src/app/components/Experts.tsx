import { motion } from "motion/react";
import { Star } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

export function Experts() {
  const { t } = useLanguage();
  
  const experts = [
    {
      name: "Turopov Elmurod",
      role: t('experts.roles.alexey'),
      image: "/toyi.jpeg",
      rating: 5.0,
      skills: [t('experts.skills.acRepair'), t('experts.skills.diagnostics')],
    },
    {
      name: "Sharopov Sardor",
      role: t('experts.roles.dmitry'),
      image: "/sardor.jpg",
      rating: 5.0,
      skills: [t('experts.skills.installation'), t('experts.skills.smartSystems')],
    },
    {
      name: "Odilbek",
      role: t('experts.roles.elena'),
      image: "/odilbek.jpg",
      rating: 5.0,
      skills: [t('experts.skills.airQuality'), t('experts.skills.smartSystems')],
    },
  ];

  return (
    <section id="team" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto transition-colors duration-300">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-outfit font-bold text-slate-900 dark:text-white mb-4"
        >
          {t('experts.title')}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
        >
          {t('experts.desc')}
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {experts.map((expert, index) => (
          <motion.div
            key={expert.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="group relative bg-white dark:bg-white/5 backdrop-blur-md rounded-2xl border border-slate-200 dark:border-white/10 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-[#00B4D8] dark:hover:border-[#00E5FF]/50 hover:shadow-[0_0_30px_rgba(0,180,216,0.15)] dark:hover:shadow-[0_0_30px_rgba(0,229,255,0.15)]"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img 
                src={expert.image} 
                alt={expert.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-slate-50/40 dark:from-[#0B132B] dark:via-[#0B132B]/40 to-transparent"></div>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="flex justify-between items-end mb-2">
                <div>
                  <h3 className="font-outfit text-2xl font-bold text-slate-900 dark:text-white">{expert.name}</h3>
                  <p className="text-[#00B4D8] dark:text-[#00E5FF] text-sm font-medium">{expert.role}</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex text-[#00B4D8] dark:text-[#00E5FF] drop-shadow-none dark:drop-shadow-[0_0_5px_rgba(0,229,255,0.5)]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill={i < Math.floor(expert.rating) ? "currentColor" : "none"} />
                    ))}
                  </div>
                  <span className="text-xs text-slate-600 dark:text-white/80 mt-1 font-bold">{expert.rating}</span>
                </div>
              </div>
              
              <div className="flex gap-2 mt-4">
                {expert.skills.map(skill => (
                  <span key={skill} className="text-xs bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-200 px-3 py-1 rounded-full border border-slate-200 dark:border-white/5">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
