import { motion } from "motion/react";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

export function Contact() {
  const { t } = useLanguage();

  const phoneNumbers = [
    { label: "+998 90 816 78 55", link: "tel:+998908167855" },
    { label: "+998 94 633 10 33", link: "tel:+998946331033" },
    { label: "+998 99 794 60 09", link: "tel:+998997946009" },
  ];

  const contactInfo = [
    {
      icon: <Phone className="text-[#00B4D8] dark:text-[#00E5FF]" size={24} />,
      title: t('contact.phone'),
      isPhoneList: true,
    },
    {
      icon: <MessageCircle className="text-[#00B4D8] dark:text-[#00E5FF]" size={24} />,
      title: "Telegram Bot",
      value: "@condshop_robot",
      link: "https://t.me/condshop_robot"
    },
    {
      icon: <MapPin className="text-[#00B4D8] dark:text-[#00E5FF]" size={24} />,
      title: t('contact.address'),
      value: t('footer.address').replace('\n', ', '),
      link: "#"
    },
    {
      icon: <Clock className="text-[#00B4D8] dark:text-[#00E5FF]" size={24} />,
      title: t('contact.hours'),
      value: "24/7",
      link: "#"
    }
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-white dark:bg-[#030614] transition-colors duration-300">
      {/* Decorative Glow */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#00B4D8]/10 dark:from-[#00E5FF]/5 to-transparent rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-outfit font-bold text-slate-900 dark:text-white mb-4"
          >
            {t('contact.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
          >
            {t('contact.desc')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-3xl p-8 sm:p-10">
              <h3 className="text-2xl font-bold font-outfit text-slate-900 dark:text-white mb-8">
                {t('contact.infoTitle')}
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, i) => (
                  <div key={i} className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-white dark:bg-[#0B132B] border border-slate-200 dark:border-white/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:border-[#00B4D8] dark:group-hover:border-[#00E5FF] transition-all duration-300 shadow-sm">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">{item.title}</p>
                      {item.isPhoneList ? (
                        <div className="space-y-1">
                          {phoneNumbers.map((phone, idx) => (
                            <a 
                              key={idx} 
                              href={phone.link} 
                              className="block text-lg font-bold text-slate-900 dark:text-white hover:text-[#00B4D8] dark:hover:text-[#00E5FF] transition-colors"
                            >
                              {phone.label}
                            </a>
                          ))}
                        </div>
                      ) : (
                        <a 
                          href={item.link || "#"} 
                          target={item.link?.startsWith('http') ? '_blank' : undefined}
                          rel={item.link?.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-lg font-bold text-slate-900 dark:text-white hover:text-[#00B4D8] dark:hover:text-[#00E5FF] transition-colors"
                        >
                          {item.value}
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-3xl p-8 sm:p-10 shadow-lg dark:shadow-none relative overflow-hidden group"
          >
            {/* Subtle hover gradient for form */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#00B4D8]/0 to-[#00B4D8]/0 dark:from-[#00E5FF]/0 dark:to-[#00E5FF]/0 group-hover:from-[#00B4D8]/5 group-hover:to-transparent dark:group-hover:from-[#00E5FF]/5 transition-all duration-500 pointer-events-none"></div>

            <h3 className="text-2xl font-bold font-outfit text-slate-900 dark:text-white mb-8 relative z-10">
              {t('contact.formTitle')}
            </h3>

            <div className="space-y-4 relative z-10 mt-6">
              <a 
                href="https://t.me/+998908167855" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded-2xl bg-[#00B4D8]/10 dark:bg-[#00E5FF]/10 border border-[#00B4D8]/30 dark:border-[#00E5FF]/30 flex items-center justify-between hover:bg-[#00B4D8]/20 dark:hover:bg-[#00E5FF]/20 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#00B4D8] dark:bg-[#00E5FF] flex items-center justify-center text-white dark:text-[#0B132B]">
                    <Send size={20} />
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-slate-900 dark:text-white text-lg">Elmurod Turobov</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Telegram orqali to'g'ridan-to'g'ri yozish</p>
                  </div>
                </div>
                <div className="text-[#00B4D8] dark:text-[#00E5FF] font-bold group-hover:translate-x-1 transition-transform">
                  →
                </div>
              </a>

              <a 
                href="https://t.me/+998997946009" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded-2xl bg-[#00B4D8]/10 dark:bg-[#00E5FF]/10 border border-[#00B4D8]/30 dark:border-[#00E5FF]/30 flex items-center justify-between hover:bg-[#00B4D8]/20 dark:hover:bg-[#00E5FF]/20 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#00B4D8] dark:bg-[#00E5FF] flex items-center justify-center text-white dark:text-[#0B132B]">
                    <Send size={20} />
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-slate-900 dark:text-white text-lg">Odilbek</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Telegram orqali to'g'ridan-to'g'ri yozish</p>
                  </div>
                </div>
                <div className="text-[#00B4D8] dark:text-[#00E5FF] font-bold group-hover:translate-x-1 transition-transform">
                  →
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
