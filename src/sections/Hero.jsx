import React, { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MapPin, Shield, Droplet } from 'lucide-react';
import MarketWidget from '../components/MarketWidget';
import AuroraHeroOverlay from '../components/AuroraHeroOverlay';

import GlitchText from '../components/GlitchText';
import { hero } from '../website-content';
import { getBackgroundForTime } from '../utils/timeUtils';

export default function Hero() {
    const [bgImage, setBgImage] = useState(getBackgroundForTime());
    const isVideo = (url) => url?.endsWith('.mp4');

    useEffect(() => {
        const updateBackground = () => {
            const newBg = getBackgroundForTime();
            console.log('Current Hour:', new Date().getHours());
            console.log('Selected Background:', newBg);
            setBgImage(newBg);
        };
        updateBackground(); // Log immediately on mount

        const timer = setInterval(updateBackground, 60000); // Check every minute
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="home" className="relative min-h-screen flex justify-center overflow-hidden py-20">
            {/* Background with Overlay */}
            {/* Background with Overlay */}
            <div className="absolute inset-0 z-0">
                <AnimatePresence mode="popLayout">
                    {isVideo(bgImage) ? (
                        <motion.video
                            key={bgImage}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            className="absolute inset-0 w-full h-full object-cover"
                            autoPlay
                            muted
                            loop
                            playsInline
                            src={bgImage}
                        />
                    ) : (
                        <motion.div
                            key={bgImage}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            className="absolute inset-0 w-full h-full bg-cover bg-[position:25%_center] md:bg-center"
                            style={{
                                backgroundImage: `url(${bgImage})`,
                            }}
                        />
                    )}
                </AnimatePresence>

                {/* Aurora Effect for Day and Night only */}
                {(bgImage === hero.bgImage || bgImage === hero.bgImageNight || bgImage === hero.bgImageMorning) && (
                    <AuroraHeroOverlay />
                )}




            </div>

            <div className="container mx-auto px-6 relative z-20 pt-20 flex flex-col justify-center">
                <div className="max-w-6xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mt-32 md:-mt-[40vh]"
                    >


                        <h1 className={`text-4xl md:text-5xl font-bold mb-8 leading-tight inline-flex flex-col items-center tracking-tight ${bgImage === hero.bgImageMorning ? "text-brand-accent drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)]" : "text-brand-light"}`}>
                            {/* Title - "Bunkering at Sea" */}
                            <motion.div
                                className="flex flex-wrap justify-center gap-x-1"
                                initial="initial"
                                animate="animate"
                            >
                                {hero.title.split(" ").map((word, wIndex) => (
                                    <div key={wIndex} className="flex">
                                        {word.split("").map((char, cIndex) => (
                                            <motion.span
                                                key={`${wIndex}-${cIndex}`}
                                                className="inline-block origin-bottom"
                                                variants={{
                                                    initial: { skewX: 0, scaleY: 1 },
                                                    animate: {
                                                        skewX: [0, 5, 0, -5, 0],
                                                        scaleY: [1, 1.1, 1, 0.9, 1],
                                                        transition: {
                                                            duration: 2.5,
                                                            repeat: Infinity,
                                                            repeatDelay: 0.5,
                                                            delay: (wIndex * word.length + cIndex) * 0.1,
                                                            ease: "easeInOut"
                                                        }
                                                    }
                                                }}
                                            >
                                                {char}
                                            </motion.span>
                                        ))}
                                        {/* Add space between words unless it's the last word */}
                                        {wIndex < hero.title.split(" ").length - 1 && <span>&nbsp;</span>}
                                    </div>
                                ))}
                            </motion.div>

                            {/* Subtitle - "Performance Delivered" - Glitch Effect & Full Width */}
                            <div className="w-full -mt-4">
                                <GlitchText
                                    text={hero.subtitle}
                                    className={`${bgImage === hero.bgImageMorning
                                        ? "text-brand-accent drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)]"
                                        : "text-[#69963F] [text-shadow:0_0_10px_#69963F,0_0_20px_#69963F]"
                                        } text-xl md:text-2xl font-semibold tracking-wide transition-colors duration-1000`}
                                    delay={0.5}
                                />
                            </div>
                        </h1>




                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="mt-20 md:mt-0 md:absolute md:bottom-5 md:left-0 md:w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left"
                    >
                        {hero.features.map((item, idx) => {
                            // Helper to format title with highlighted words
                            const formatTitle = (title) => {
                                const parts = title.split(/(Locations|Optimized|24\/|Gasoil)/g);
                                return parts.map((part, i) =>
                                    ["Locations", "Optimized", "24/", "Gasoil"].includes(part) ? (
                                        <span key={i} className="text-[#cbd980]">{part}</span>
                                    ) : (
                                        part
                                    )
                                );
                            };

                            // Determine Icon
                            let Icon = Shield;
                            if (idx === 0) Icon = MapPin;
                            if (item.isMarketData) {
                                return (
                                    <a
                                        key={idx}
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all hover:border-brand-light/30 h-full flex flex-col cursor-pointer no-underline"
                                    >
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className="text-white font-bold text-lg">{formatTitle(item.title)}</h3>
                                            <Droplet className="w-6 h-6 text-brand-light" />
                                        </div>
                                        <div className="flex-grow flex items-center justify-start w-full pl-3">
                                            <MarketWidget symbol={item.widgetSymbol} />
                                        </div>
                                    </a>
                                );
                            }

                            return (
                                <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-white font-bold text-lg">{formatTitle(item.title)}</h3>
                                        <Icon className="w-6 h-6 text-brand-light" />
                                    </div>
                                    <p className="text-white text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            );
                        })}
                    </motion.div>


                </div>
            </div>

            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 cursor-pointer hover:text-white transition-colors"
                onClick={() => {
                    const servicesSection = document.getElementById('services');
                    if (servicesSection) {
                        servicesSection.scrollIntoView({ behavior: 'smooth' });
                    }
                }}
            >
                <ChevronDown className="w-8 h-8" />
            </motion.div>
        </section>
    );
}
