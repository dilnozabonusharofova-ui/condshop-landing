import { useState, useRef } from "react";
import { motion } from "motion/react";
import { MoveHorizontal } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

export function Portfolio() {
  const { t } = useLanguage();
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleDrag = (e: React.MouseEvent | React.TouchEvent | MouseEvent | TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    
    // Get clientX for both mouse and touch events
    let clientX = 0;
    if ("touches" in e) {
      clientX = e.touches[0].clientX;
    } else {
      clientX = (e as React.MouseEvent).clientX;
    }

    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSliderPosition(percentage);
  };

  const handleMouseDown = () => {
    const handleMouseMove = (e: MouseEvent) => handleDrag(e);
    const handleMouseUp = () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  const handleTouchStart = () => {
    const handleTouchMove = (e: TouchEvent) => handleDrag(e);
    const handleTouchEnd = () => {
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", handleTouchEnd);
  };

  return (
    <section id="portfolio" className="py-24 bg-slate-900/50 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00E5FF]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-outfit font-bold text-white mb-4"
          >
            {t('portfolio.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 max-w-2xl mx-auto"
          >
            {t('portfolio.desc')}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full aspect-[4/3] md:aspect-[21/9] rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.6)] border border-white/10 group cursor-ew-resize"
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        >
          {/* Before Image (Background) */}
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1716703432213-3c7a6f75e535?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBhaXIlMjBjb25kaXRpb25pbmclMjBpbnN0YWxsfGVufDF8fHx8MTc3ODA2ODI3Mnww&ixlib=rb-4.1.0&q=80&w=1920" 
              alt="Before Installation" 
              className="w-full h-full object-cover"
              draggable={false}
            />
            <div className="absolute top-6 right-6 px-4 py-2 bg-black/60 backdrop-blur-md rounded-lg border border-white/10 text-white font-medium text-sm">
              {t('portfolio.before')}
            </div>
          </div>

          {/* After Image (Clipped) */}
          <div 
            className="absolute inset-0"
            style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
          >
            <img 
              src="https://images.unsplash.com/photo-1638284457192-27d3d0ec51aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBob21lJTIwbGl2aW5nJTIwcm9vbXxlbnwxfHx8fDE3NzgwNjgyNzJ8MA&ixlib=rb-4.1.0&q=80&w=1920" 
              alt="After Installation" 
              className="w-full h-full object-cover"
              draggable={false}
            />
            <div className="absolute top-6 left-6 px-4 py-2 bg-[#00E5FF]/20 backdrop-blur-md rounded-lg border border-[#00E5FF]/40 text-[#00E5FF] font-bold text-sm drop-shadow-[0_0_10px_rgba(0,229,255,0.8)]">
              {t('portfolio.after')}
            </div>
          </div>

          {/* Slider Handle */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)] z-20 cursor-ew-resize flex items-center justify-center"
            style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
          >
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg border border-slate-200">
              <MoveHorizontal className="text-[#0B132B]" size={20} />
            </div>
          </div>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
           {[
             { title: t('portfolio.items.split'), img: "https://images.unsplash.com/photo-1775508131358-6cfae3729de4" },
             { title: t('portfolio.items.smart'), img: "https://images.unsplash.com/photo-1717323454555-f053c31ff4b4" },
             { title: t('portfolio.items.ductless'), img: "https://images.unsplash.com/photo-1716703432213-3c7a6f75e535" }
           ].map((item, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 + (i * 0.1) }}
               className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer"
             >
               <img src={`${item.img}?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&q=80`} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
               <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B]/90 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
               <div className="absolute bottom-4 left-4 right-4">
                 <h4 className="text-white font-medium text-sm md:text-base translate-y-2 group-hover:translate-y-0 transition-transform">{item.title}</h4>
                 <div className="h-[2px] w-0 bg-[#00E5FF] mt-2 group-hover:w-full transition-all duration-300"></div>
               </div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
