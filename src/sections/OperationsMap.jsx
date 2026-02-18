import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import WeatherWidget from '../components/WeatherWidget';
import SnowHoverText from '../components/SnowHoverText'; // Updated import
import { map } from '../website-content';
import { CloudRain, Globe, Leaf, X, ChevronRight, ChevronLeft } from 'lucide-react';

export default function OperationsMap() {
  const [activeView, setActiveView] = useState('default'); // 'default', 'weather'
  const [isEmissionsOpen, setIsEmissionsOpen] = useState(false);

  const toggleView = (view) => {
    setActiveView(prev => prev === view ? 'default' : view);
  };

  const images = ['/CO2_1.webp', '/CO2_2.webp'];
  const [imageIndex, setImageIndex] = useState(0);
  const [cycleCount, setCycleCount] = useState(0);
  const [isImageLoading, setIsImageLoading] = useState(true);
  const [hasManuallyNavigated, setHasManuallyNavigated] = useState(false);

  React.useEffect(() => {
    setIsImageLoading(true);
  }, [imageIndex]);

  React.useEffect(() => {
    if (!isEmissionsOpen) {
      setImageIndex(0);
      setCycleCount(0);
      setHasManuallyNavigated(false);
      return;
    }

    // Stop auto-rotation if user manually navigated or one cycle completed
    if (cycleCount >= 1 || hasManuallyNavigated) return;

    const interval = setInterval(() => {
      setImageIndex(prev => {
        const next = (prev + 1) % images.length;
        if (next === 0) {
          setCycleCount(c => c + 1);
        }
        return next;
      });
    }, 55000);
    return () => clearInterval(interval);
  }, [isEmissionsOpen, cycleCount, hasManuallyNavigated]);

  const nextImage = () => {
    setHasManuallyNavigated(true);
    setImageIndex(prev => (prev + 1) % images.length);
  };

  const highlightGreen = (text, className = "text-brand-light") => {
    if (!text) return text;
    // "CII rating" must come before "CII" for correct regex matching
    const parts = text.split(/(Carbon Intensity Indicator|CII rating|CII|Emissions|Reduction|Carbon|Costs|Cost|One Tanker|Production Time)/g);
    return parts.map((part, i) => {
      // Special case for "CII rating" - make it bold
      if (part === 'CII rating') {
        return <span key={i} className={`${className} font-bold`}>{part}</span>;
      }
      return ['Carbon Intensity Indicator', 'CII', 'Emissions', 'Reduction', 'Carbon', 'Costs', 'Cost', 'One Tanker', 'Production Time'].includes(part) ?
        <span key={i} className={className}>{part}</span> : part;
    });
  };

  return (
    <section id="map" className="relative min-h-screen pb-32 flex items-end overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={map.image}
          alt="Operations Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark Overlay for readability - Set to 35% */}
        <div className="absolute inset-0 bg-brand-dark/[0.35]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 block">
        <div className={`mx-auto bg-brand-dark/60 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl transition-all duration-500 ease-in-out ${activeView === 'weather' ? 'max-w-7xl' : 'max-w-2xl'}`}>
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-full lg:min-w-[500px] lg:flex-1">
              <span className="text-brand-light font-semibold tracking-wider uppercase mb-2 block">{map.label}</span>
              <motion.h2
                className="text-3xl md:text-5xl font-bold text-white mb-6 inline-flex flex-row gap-3 items-baseline"
                initial="initial"
                whileHover="hover"
              >
                <div className="flex flex-col">
                  <SnowHoverText text={map.title} stretch={false} />
                  <div className="h-1 bg-brand-light w-16 mt-2 rounded-full" />
                </div>
                <SnowHoverText text={map.titleHighlight} className="text-brand-light" stretch={false} />
              </motion.h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                {map.description}
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap gap-4 justify-center">
                {/* Live Weather Toggle */}
                <button
                  onClick={() => toggleView('weather')}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-300 font-semibold group ${activeView === 'weather'
                    ? 'bg-brand-light text-brand-dark border-brand-light'
                    : 'bg-brand-light/10 border-brand-light/30 text-brand-light hover:bg-brand-light hover:text-brand-dark'
                    }`}
                >
                  <CloudRain className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>{activeView === 'weather' ? 'Hide Live Weather' : 'Live weather'}</span>
                </button>

                {/* Optimize Business Toggle (Modal) */}
                <button
                  onClick={() => setIsEmissionsOpen(true)}
                  className="flex items-center gap-2 px-6 py-3 rounded-full border bg-brand-light/10 border-brand-light/30 text-brand-light hover:bg-brand-light hover:text-brand-dark transition-all duration-300 font-semibold group"
                >
                  <Leaf className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>Optimize Now</span>
                </button>
              </div>
            </div>

            <div className="overflow-hidden lg:flex-1 w-full">
              <AnimatePresence mode="wait">
                {activeView === 'weather' && (
                  <motion.div
                    key="weather"
                    initial={{ opacity: 0, x: -20, width: 0 }}
                    animate={{ opacity: 1, x: 0, width: "100%" }}
                    exit={{ opacity: 0, x: -20, width: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="relative w-full h-[500px] bg-blue-900/20 rounded-2xl overflow-hidden border border-white/10"
                  >
                    {map.weather && (
                      <WeatherWidget url={map.weather.url} title={map.weather.title} />
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* Emissions Modal - Full Screen Overlay */}
      <AnimatePresence>
        {isEmissionsOpen && (
          <div className="fixed inset-0 z-[100] flex justify-end isolate">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsEmissionsOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm z-0"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full h-full bg-[#050f1e] shadow-2xl z-10 overflow-y-auto"
            >
              {/* Spinning Watermark Background */}
              <div className="absolute inset-0 flex items-center justify-center overflow-hidden opacity-10 pointer-events-none">
                <img
                  src="/watermark.svg"
                  alt=""
                  className="w-[150vmax] h-[150vmax] object-cover max-w-none animate-spin"
                  style={{ animationDuration: '120s' }}
                />
              </div>
              <div className="flex flex-col h-full font-sans bg-transparent relative z-10">


                {/* Scrollable Container for Content */}
                <div className="flex-1 overflow-y-auto w-full custom-scrollbar">
                  {/* Vertical Centering Wrapper */}
                  <div className="min-h-full flex flex-col justify-start items-center py-10 px-4 md:px-12">

                    {/* Header Section */}
                    <div className="max-w-6xl w-full text-center mb-4 shrink-0 min-h-[80px] flex flex-col justify-end">

                      {/* Title and Navigation Buttons Row */}
                      <div className="relative w-full flex items-center justify-between mb-3">

                        {/* Title - Left/Center */}
                        <div className="flex-1">
                          {imageIndex === 0 ? (
                            <h3 className="text-white font-light text-xl md:text-2xl lg:text-3xl leading-tight tracking-wide">
                              {highlightGreen(map.emissions.title, "text-brand-light font-bold")}
                            </h3>
                          ) : (
                            <h3 className="text-white font-light text-xl md:text-2xl lg:text-3xl leading-tight tracking-wide">
                              {highlightGreen(map.emissions.overlayCO2_2?.title, "text-brand-light font-bold")}
                            </h3>
                          )}
                        </div>

                        {/* Dual Navigation Buttons - Right */}
                        <div className="flex items-center gap-2 z-50 ml-4">
                          {/* Previous/Next Button */}
                          <button
                            onClick={(e) => { e.stopPropagation(); nextImage(); }}
                            className="p-2 rounded-full bg-white/10 text-brand-light border border-brand-light/30 hover:bg-brand-light hover:text-brand-dark transition-all duration-300 cursor-pointer"
                            title={imageIndex === 0 ? "Next" : "Previous"}
                          >
                            {imageIndex === 0 ? (
                              <ChevronRight className="w-5 h-5" />
                            ) : (
                              <ChevronLeft className="w-5 h-5" />
                            )}
                          </button>

                          {/* Exit Button */}
                          <button
                            onClick={() => setIsEmissionsOpen(false)}
                            className="p-2 rounded-full bg-[#10B981] text-white shadow-[0_0_20px_rgba(16,185,129,0.6)] hover:shadow-[0_0_30px_rgba(16,185,129,0.9)] hover:scale-110 transition-all duration-300 cursor-pointer border border-white/20"
                            title="Close"
                          >
                            <X className="w-5 h-5 font-bold" />
                          </button>
                        </div>
                      </div>

                      {/* Description Text */}
                      <div className="max-w-4xl w-full mx-auto">
                        {imageIndex === 0 ? (
                          <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-6xl mx-auto text-left tracking-tighter">
                            {map.emissions.description}
                          </p>
                        ) : (
                          map.emissions.overlayCO2_2?.items?.[0] && (
                            <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-6xl mx-auto text-left tracking-tighter">
                              <span>
                                {map.emissions.overlayCO2_2.items[0].subtitle && (
                                  <span className="text-brand-light font-bold block md:inline md:mr-2">{highlightGreen(map.emissions.overlayCO2_2.items[0].subtitle)}</span>
                                )}
                                {highlightGreen(map.emissions.overlayCO2_2.items[0].text)}
                              </span>
                            </p>
                          )
                        )}
                      </div>
                    </div>

                    {/* Image Section - Constrained height, auto width */}
                    <div className="w-full flex flex-col items-center mt-4 mb-0 shrink-0 group relative max-w-6xl mx-auto">
                      {/* Image wrapper with source text */}
                      <div className="relative inline-block">
                        <AnimatePresence mode="wait">
                          <motion.img
                            key={imageIndex}
                            onLoad={() => setIsImageLoading(false)}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8 }}
                            src={images[imageIndex]}
                            alt="Reduce Emissions"
                            className="relative z-10 w-auto h-auto max-w-full max-h-[55vh] object-contain object-center rounded-xl shadow-2xl mix-blend-lighten"
                          />
                        </AnimatePresence>

                        {/* Source Text Overlay - Bottom Right inside image bounds */}
                        <p className="absolute bottom-2 right-2 z-20 text-xs italic text-gray-400 opacity-80 bg-black/60 px-2 py-1 rounded scale-[0.7] origin-bottom-right">{map.emissions.source}</p>
                      </div>

                      {/* Spacer */}
                      <div className="max-w-4xl w-full mx-auto mt-3">
                        <div className="w-full h-px bg-white/10" />
                      </div>

                      {/* Footer Section */}
                      <div className="max-w-4xl w-full mx-auto shrink-0">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 text-left pt-3">
                          {imageIndex === 0 ? (
                            map.emissions.subsections.map((section, idx) => (
                              <div key={idx}>
                                <h4 className="text-white font-bold text-lg mb-3">{highlightGreen(section.title)}</h4>
                                <div className="text-gray-400 text-sm leading-relaxed space-y-3">
                                  <p>{section.text}</p>
                                  {section.source && (
                                    <p className="text-xs italic opacity-60 hover:opacity-100 transition-opacity">{section.source}</p>
                                  )}
                                </div>
                              </div>
                            ))
                          ) : (
                            map.emissions.overlayCO2_2?.items?.slice(1).map((item, idx) => (
                              <div key={idx}>
                                <h4 className="text-white font-bold text-lg mb-3">{highlightGreen(item.subtitle)}</h4>
                                <div className="text-gray-400 text-sm leading-relaxed space-y-3">
                                  <p>{highlightGreen(item.text)}</p>
                                </div>
                              </div>
                            ))
                          )}
                        </div>
                      </div>

                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {map.worldClocks && (
        <div className="absolute bottom-0 w-full bg-[#020617]/80 backdrop-blur-md border-t border-white/10 z-20 py-4">
          <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <span className="text-brand-light font-bold uppercase tracking-widest text-sm flex items-center gap-2">
              <Globe className="w-4 h-4" />
              Global Operations Time
            </span>
            <div className="flex flex-wrap justify-center md:justify-end gap-8 md:gap-12">
              {map.worldClocks.map((clock, i) => (
                <div key={i} className="flex items-center gap-3">
                  <WorldClock label={clock.label} timezone={clock.timezone} />
                  {i !== map.worldClocks.length - 1 && (
                    <div className="hidden md:block w-px h-8 bg-white/10"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function WorldClock({ label, timezone }) {
  const [time, setTime] = React.useState('');

  React.useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format: HH:mm
      const timeString = new Intl.DateTimeFormat('en-US', {
        timeZone: timezone,
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      }).format(now);
      setTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [timezone]);

  return (
    <div>
      <div className="text-white font-mono text-xl font-bold mb-1">
        {time}
      </div>
      <div className="text-gray-500 text-xs uppercase tracking-wider font-medium">
        {label}
      </div>
    </div>
  );
}
