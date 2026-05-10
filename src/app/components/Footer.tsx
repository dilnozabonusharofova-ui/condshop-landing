import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-[#030614] border-t border-white/10 pt-20 pb-10 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#00E5FF]/5 rounded-full blur-[100px] pointer-events-none translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          
          <div className="lg:col-span-1">
            <a href="#" className="font-outfit text-2xl font-bold text-white flex items-center gap-2 mb-6">
              <span className="text-[#00E5FF] drop-shadow-[0_0_12px_rgba(0,229,255,0.6)]">Cond</span>
              <span>Shop</span>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              {t('footer.desc')}
            </p>
          </div>

          <div>
            <h3 className="font-outfit text-lg font-bold text-white mb-6">{t('footer.quickLinks')}</h3>
            <ul className="space-y-3">
              {[
                { key: 'about', id: 'about' },
                { key: 'team', id: 'team' },
                { key: 'portfolio', id: 'portfolio' },
                { key: 'reviews', id: 'reviews' }
              ].map((item) => (
                <li key={item.key}>
                  <a href={`#${item.id}`} className="text-slate-400 hover:text-[#00E5FF] transition-colors text-sm">
                    {t(`navbar.${item.key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-outfit text-lg font-bold text-white mb-6">{t('footer.contactUs')}</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-400 text-sm">
                <Phone size={18} className="text-[#00E5FF] mt-0.5 shrink-0" />
                <div className="flex flex-col gap-1">
                  <a href="tel:+998908167855" className="hover:text-white transition-colors">+998 90 816 78 55</a>
                  <a href="tel:+998946331033" className="hover:text-white transition-colors">+998 94 633 10 33</a>
                  <a href="tel:+998997946009" className="hover:text-white transition-colors">+998 99 794 60 09</a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-slate-400 text-sm">
                <Send size={18} className="text-[#00E5FF] mt-0.5 shrink-0" />
                <a href="https://t.me/condshop_robot" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">@condshop_robot</a>
              </li>
              <li className="flex items-start gap-3 text-slate-400 text-sm">
                <Mail size={18} className="text-[#00E5FF] mt-0.5 shrink-0" />
                <a href="mailto:info@condshop.uz" className="hover:text-white transition-colors">info@condshop.uz</a>
              </li>
              <li className="flex items-start gap-3 text-slate-400 text-sm whitespace-pre-line">
                <MapPin size={18} className="text-[#00E5FF] mt-0.5 shrink-0" />
                <span>{t('footer.address')}</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs">
            &copy; {new Date().getFullYear()} {t('footer.rights')}
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-500 hover:text-white text-xs transition-colors">{t('footer.privacy')}</a>
            <a href="#" className="text-slate-500 hover:text-white text-xs transition-colors">{t('footer.terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
