import { motion } from "motion/react";
import { useLanguage } from "../i18n/LanguageContext";

export function Brands() {
  const { t } = useLanguage();

  const brands = [
    {
      name: "LG",
      logo: "/Clip path group.png"
    },
    {
      name: "Artel",
      logo: "/Vector-1.png",
      subtitleImg: "/Vector.png"
    },
    {
      name: "AUX",
      logo: "/logo-aux-podval.png"
    },
    {
      name: "PREMIER",
      logo: "/premier-logo.png"
    },
    {
      name: "Midea",
      logo: "/image 8.png"
    },
    {
      name: "Hisense",
      logo: "/hisense-logo-2.png"
    },
    {
      name: "Hofmann",
      logo: "/hofmann-logo.png"
    }
  ];

  return (
    <section className="py-24 bg-[#000000] border-y border-white/5 overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative flex items-center justify-center w-full"
          >
            {/* Decorative Lines */}
            <div className="absolute left-0 w-[15%] md:w-[35%] h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            <div className="absolute right-0 w-[15%] md:w-[35%] h-[1px] bg-gradient-to-l from-transparent via-white/20 to-transparent"></div>
            
            <h2 className="text-sm md:text-base font-bold tracking-[0.5em] uppercase font-outfit text-center bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
              {t('brands.title') || "Biz ishlaydigan brendlar"}
            </h2>
          </motion.div>
          
          {/* Subtle Glow Under Title */}
          <div className="w-32 h-px bg-[#00E5FF]/40 blur-md mt-4 shadow-[0_0_20px_#00E5FF]"></div>
        </div>
        
        {/* Marquee Container */}
        <div className="relative overflow-hidden flex w-full">
          {/* Fading Edges */}
          <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-[#000000] via-[#000000]/80 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-[#000000] via-[#000000]/80 to-transparent z-10 pointer-events-none"></div>
          
          <div className="flex animate-[scroll_100s_linear_infinite] w-max items-center">
            {Array(8).fill(brands).flat().map((brand, i) => (
              <div key={i} className="flex-shrink-0 flex flex-col items-center justify-center transition-all duration-500 hover:scale-110 px-5 sm:px-8 md:px-10">
                <img 
                  src={brand.logo} 
                  alt={brand.name} 
                  className={`${brand.name === 'PREMIER' ? 'h-5 md:h-6' : 'h-7 md:h-10'} w-auto object-contain`}
                />
                {brand.subtitleImg && (
                  <img 
                    src={brand.subtitleImg} 
                    alt="subtitle" 
                    className="h-1.5 md:h-2 w-auto object-contain mt-2"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}} />
    </section>
  );
}
