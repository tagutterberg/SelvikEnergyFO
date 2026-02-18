import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Users } from 'lucide-react';
import { about } from '../website-content';

import SnowHoverText from '../components/SnowHoverText';

export default function About() {
    // Initialize with a random shuffle
    const [orderedImages, setOrderedImages] = useState(() => {
        return [...about.images].sort(() => Math.random() - 0.5);
    });
    const [isTeamOpen, setIsTeamOpen] = useState(false);
    const [isTeamImageLoading, setIsTeamImageLoading] = useState(true);



    // Auto-advance slideshow
    useEffect(() => {
        const timer = setInterval(() => {
            setOrderedImages(prev => {
                const copy = [...prev];
                const first = copy.shift();
                copy.push(first);
                return copy;
            });
        }, 90000);
        return () => clearInterval(timer);
    }, []);

    const currentImage = orderedImages[0];

    return (
        <section id="about" className="relative min-h-screen pb-12 pt-32 flex items-end overflow-hidden">
            {/* Background Slideshow */}
            <div className="absolute inset-0 z-0">
                <AnimatePresence mode="popLayout">
                    <motion.img
                        key={currentImage}
                        src={currentImage}
                        alt="Background"
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5 }}
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                </AnimatePresence>
                {/* Dark Overlay for readability - reduced to 20% */}
                <div className="absolute inset-0 bg-brand-dark/0"></div>
            </div>

            {/* Content Container */}
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center relative">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-brand-dark/60 backdrop-blur-md p-6 md:p-8 rounded-3xl border border-white/10 shadow-2xl relative"
                    >
                        <motion.h2
                            className="text-4xl md:text-6xl font-bold text-white mb-6 flex flex-wrap justify-center gap-x-3 items-baseline"
                            initial="initial"
                            whileHover="hover"
                        >
                            <SnowHoverText text={about.title} stretch={false} />
                            <SnowHoverText text={about.titleHighlight} className="text-brand-light" stretch={false} />
                        </motion.h2>

                        <div className="w-32 h-1 bg-brand-light mx-auto rounded-full mb-6"></div>

                        <div className="space-y-4 text-gray-200 text-lg md:text-xl leading-relaxed font-light text-left pb-16">
                            {about.paragraphs.map((para, i) => (
                                <p key={i}>{para}</p>
                            ))}
                        </div>

                        {/* Stats Grid Moved to Bottom */}



                        {/* Stats Grid - Bottom Positioned, Pill Style */}
                        <div className="mt-16 flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24 pb-4">
                            {about.stats.map((stat, idx) => (
                                <div key={idx} className="w-32 py-3 rounded-full border bg-brand-light/10 border-brand-light/30 text-brand-light hover:bg-brand-light hover:text-brand-dark transition-all duration-300 flex flex-col items-center justify-center group cursor-default shadow-[0_0_15px_rgba(16,185,129,0.1)] hover:shadow-[0_0_25px_rgba(16,185,129,0.3)]">
                                    <h4 className="font-bold text-lg md:text-xl mb-0 leading-none">{stat.value}</h4>
                                    <p className="text-[0.65rem] uppercase tracking-wider font-semibold opacity-90">{stat.label}</p>
                                </div>
                            ))}
                        </div>

                        {/* Experience Badge - Bottom Center Bleed */}
                        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 z-20">
                            <div className="inline-flex items-center gap-3 py-3 px-8 rounded-full bg-brand-dark/80 backdrop-blur-xl border border-white/10 text-brand-light shadow-[0_8px_30px_rgb(0,0,0,0.12)] whitespace-nowrap cursor-default">
                                <span className="font-bold text-lg">{about.experienceBadge}</span>
                                <span className="h-4 w-px bg-brand-light/30"></span>
                                <span className="text-xs font-medium">{about.experienceText}</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* CEO Bio Button - Moved to Top Center */}
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-20">
                        <button
                            onClick={() => setIsTeamOpen(true)}
                            className="relative group overflow-hidden px-8 py-3 rounded-full bg-brand-light border border-brand-light text-brand-dark hover:bg-white hover:border-white transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:shadow-[0_0_30px_rgba(16,185,129,0.6)] flex items-center gap-3 whitespace-nowrap cursor-pointer"
                        >
                            <Users className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                            <span className="font-bold text-sm uppercase tracking-wider relative z-10">{about.team.triggerLabel}</span>
                        </button>
                    </div>
                </div>
            </div>
            {/* Team Modal */}
            <AnimatePresence>
                {isTeamOpen && (
                    <div className="fixed inset-0 z-[100] flex justify-end isolate">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsTeamOpen(false)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm z-0"
                        />
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="relative w-full h-full bg-brand-dark shadow-2xl z-10 overflow-y-auto"
                        >
                            {/* Full Screen Image Background */}
                            <div className="absolute inset-0 z-0 bg-brand-dark">
                                {isTeamImageLoading && (
                                    <div className="absolute inset-0 flex items-center justify-center z-10">
                                        <div className="w-12 h-12 border-4 border-brand-light/20 border-t-brand-light rounded-full animate-spin"></div>
                                    </div>
                                )}
                                <img
                                    src={about.team.image}
                                    alt={about.team.name}
                                    onLoad={() => setIsTeamImageLoading(false)}
                                    className={`w-full h-full object-cover object-center transition-opacity duration-700 ${isTeamImageLoading ? 'opacity-0' : 'opacity-100'}`}
                                />
                                <div className="absolute inset-0 bg-brand-dark/20 pointer-events-none"></div>
                            </div>

                            {/* Content Panel - Right Side */}
                            <div className="absolute top-0 right-0 w-full md:w-1/2 h-full z-10 bg-black/40 backdrop-blur-xl border-l border-white/10 p-8 md:p-16 flex flex-col justify-center overflow-y-auto">
                                <button
                                    onClick={() => setIsTeamOpen(false)}
                                    className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white hover:text-brand-dark transition-colors z-50"
                                >
                                    <X className="w-6 h-6" />
                                </button>

                                <div className="max-w-xl mx-auto">
                                    <h3 className="text-sm font-bold text-brand-light uppercase tracking-widest mb-3">{about.team.role}</h3>
                                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-8 border-l-4 border-brand-light pl-6">{about.team.name}</h2>

                                    {/* CEO Quote */}
                                    <blockquote className="text-xl md:text-2xl font-light italic text-brand-light mb-8 opacity-90 leading-relaxed border-l-2 border-brand-light/30 pl-4 py-2">
                                        "{about.team.quote}"
                                    </blockquote>

                                    <div className="space-y-6 text-white/90 text-lg leading-relaxed font-light drop-shadow-md">
                                        {about.team.bio.map((para, i) => (
                                            <p key={i}>{para}</p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
