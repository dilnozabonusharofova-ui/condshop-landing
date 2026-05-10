import { motion } from "motion/react";
import { Menu, X, Sun, Moon, Send, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { useTheme } from "next-themes";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  const links = [
    { key: "about", id: "about" },
    { key: "team", id: "team" },
    { key: "portfolio", id: "portfolio" },
    { key: "reviews", id: "reviews" },
    { key: "contact", id: "contact" }
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-[#0B132B]/60 backdrop-blur-md border-b border-black/5 dark:border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="font-outfit text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span className="text-[#00B4D8] dark:text-[#00E5FF] drop-shadow-none dark:drop-shadow-[0_0_12px_rgba(0,229,255,0.6)]">Cond</span>
              <span>Shop</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <div className="ml-6 flex items-center space-x-1">
              {links.map((link) => (
                <a
                  key={link.key}
                  href={`#${link.id}`}
                  className="text-slate-600 dark:text-slate-300 hover:text-[#00B4D8] dark:hover:text-[#00E5FF] transition-colors px-2.5 py-2 rounded-md text-sm font-medium whitespace-nowrap"
                >
                  {t(`navbar.${link.key}`)}
                </a>
              ))}
              
              <div className="flex items-center gap-1.5 ml-3 border-l border-slate-200 dark:border-white/20 pl-3">
                <button onClick={() => setLanguage('uz')} className={`text-xs font-bold transition-colors ${language === 'uz' ? 'text-[#00B4D8] dark:text-[#00E5FF]' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}>UZ</button>
                <span className="text-slate-300 dark:text-slate-600">|</span>
                <button onClick={() => setLanguage('ru')} className={`text-xs font-bold transition-colors ${language === 'ru' ? 'text-[#00B4D8] dark:text-[#00E5FF]' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}>RU</button>
                <span className="text-slate-300 dark:text-slate-600">|</span>
                <button onClick={() => setLanguage('en')} className={`text-xs font-bold transition-colors ${language === 'en' ? 'text-[#00B4D8] dark:text-[#00E5FF]' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}>EN</button>
              </div>

              {mounted && (
                <button
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="ml-2 p-2 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-white hover:bg-slate-200 dark:hover:bg-white/10 transition-all"
                  aria-label="Toggle Dark Mode"
                >
                  {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
                </button>
              )}

              <div className="relative group ml-3">
                <button 
                  onClick={() => setIsOpen(!isOpen)}
                  className="px-5 py-2.5 rounded-full bg-[#00B4D8] dark:bg-[#00E5FF] text-white dark:text-[#0B132B] font-bold text-sm hover:bg-[#0096C7] dark:hover:bg-[#00E5FF]/90 transition-all dark:shadow-[0_0_15px_rgba(0,229,255,0.4)] inline-flex items-center whitespace-nowrap gap-2"
                >
                  <Phone size={16} />
                  <span>{t('navbar.contact')}</span>
                </button>
                
                <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-[#0B132B] border border-slate-200 dark:border-white/10 rounded-2xl shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-[100]">
                  <p className="px-4 py-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100 dark:border-white/5 mb-1">{t('footer.contactUs')}</p>
                  <a href="tel:+998908167855" className="flex items-center gap-3 px-4 py-2 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-white/5 font-bold text-sm transition-colors">
                    <Phone size={14} className="text-[#00B4D8] dark:text-[#00E5FF]" />
                    +998 90 816 78 55
                  </a>
                  <a href="tel:+998946331033" className="flex items-center gap-3 px-4 py-2 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-white/5 font-bold text-sm transition-colors">
                    <Phone size={14} className="text-[#00B4D8] dark:text-[#00E5FF]" />
                    +998 94 633 10 33
                  </a>
                  <a href="tel:+998997946009" className="flex items-center gap-3 px-4 py-2 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-white/5 font-bold text-sm transition-colors">
                    <Phone size={14} className="text-[#00B4D8] dark:text-[#00E5FF]" />
                    +998 99 794 60 09
                  </a>
                  <div className="border-t border-slate-100 dark:border-white/5 mt-1 pt-1">
                    <a href="https://t.me/condshop_robot" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-2 text-[#00B4D8] dark:text-[#00E5FF] hover:bg-slate-50 dark:hover:bg-white/5 font-bold text-sm transition-colors">
                      <Send size={14} />
                      Telegram Bot
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white focus:outline-none p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="lg:hidden bg-white/95 dark:bg-[#0B132B]/95 backdrop-blur-xl border-b border-black/5 dark:border-white/10"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <a
                key={link.key}
                href={`#${link.id}`}
                onClick={() => setIsOpen(false)}
                className="text-slate-600 dark:text-slate-300 hover:text-[#00B4D8] dark:hover:text-[#00E5FF] block px-3 py-2 rounded-md text-base font-medium"
              >
                {t(`navbar.${link.key}`)}
              </a>
            ))}
            
            <div className="flex items-center gap-4 px-3 py-4 mt-2 border-t border-slate-200 dark:border-white/10">
              <button onClick={() => setLanguage('uz')} className={`text-base font-bold transition-colors ${language === 'uz' ? 'text-[#00B4D8] dark:text-[#00E5FF]' : 'text-slate-500 dark:text-slate-400'}`}>UZ</button>
              <button onClick={() => setLanguage('ru')} className={`text-base font-bold transition-colors ${language === 'ru' ? 'text-[#00B4D8] dark:text-[#00E5FF]' : 'text-slate-500 dark:text-slate-400'}`}>RU</button>
              <button onClick={() => setLanguage('en')} className={`text-base font-bold transition-colors ${language === 'en' ? 'text-[#00B4D8] dark:text-[#00E5FF]' : 'text-slate-500 dark:text-slate-400'}`}>EN</button>
            </div>

            {mounted && (
              <div className="px-3 py-2 flex items-center justify-between border-t border-slate-200 dark:border-white/10">
                <span className="text-slate-600 dark:text-slate-300 font-medium">Theme</span>
                <button
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="p-2 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-white"
                >
                  {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                </button>
              </div>
            )}

            <div className="px-3 py-4 space-y-3 border-t border-slate-200 dark:border-white/10">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest px-3">{t('footer.contactUs')}</p>
              <div className="grid grid-cols-1 gap-2">
                <a href="tel:+998908167855" className="flex items-center gap-3 px-3 py-2 rounded-lg bg-slate-50 dark:bg-white/5 text-slate-900 dark:text-white font-bold">
                  <Phone size={18} className="text-[#00B4D8] dark:text-[#00E5FF]" />
                  +998 90 816 78 55
                </a>
                <a href="tel:+998946331033" className="flex items-center gap-3 px-3 py-2 rounded-lg bg-slate-50 dark:bg-white/5 text-slate-900 dark:text-white font-bold">
                  <Phone size={18} className="text-[#00B4D8] dark:text-[#00E5FF]" />
                  +998 94 633 10 33
                </a>
                <a href="tel:+998997946009" className="flex items-center gap-3 px-3 py-2 rounded-lg bg-slate-50 dark:bg-white/5 text-slate-900 dark:text-white font-bold">
                  <Phone size={18} className="text-[#00B4D8] dark:text-[#00E5FF]" />
                  +998 99 794 60 09
                </a>
              </div>
            </div>

            <a href="https://t.me/condshop_robot" target="_blank" rel="noopener noreferrer" className="w-full mt-4 px-6 py-4 rounded-xl bg-[#00B4D8] dark:bg-[#00E5FF] text-white dark:text-[#0B132B] font-bold dark:shadow-[0_0_15px_rgba(0,229,255,0.4)] text-center flex items-center justify-center gap-2">
              <Send size={18} />
              <span>{t('navbar.contact')}</span>
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
