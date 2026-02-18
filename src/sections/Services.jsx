import React, { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { Droplet, Ship, Truck, ClipboardCheck } from 'lucide-react';

import { services, compliance } from '../website-content';
import StaggeredNeonText from '../components/StaggeredNeonText';

export default function Services() {
    const iconMap = [Droplet, Ship, Truck, ClipboardCheck];
    const [activeService, setActiveService] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        let timer;
        if (isVisible) {
            timer = setTimeout(() => {
                setIsVisible(false);
            }, 6000); // Display time
        } else {
            timer = setTimeout(() => {
                setActiveService((prev) => (prev + 1) % services.items.length);
                setIsVisible(true);
            }, 5000); // Hidden time
        }
        return () => clearTimeout(timer);
    }, [isVisible]);

    return (
        <section id="services" className="min-h-screen flex items-center py-24 bg-brand-dark/50 relative overflow-hidden">
            {/* Wider Container for Desktop/4K */}
            <div className="w-full max-w-[1800px] mx-auto px-4 md:px-10">

                {/* Video Section Card - Increased Top Padding */}
                <div className="w-full bg-gradient-to-b from-brand-dark to-[#050f1e] rounded-3xl p-6 pt-12 md:p-12 md:pt-24 border border-white/5 shadow-2xl relative overflow-hidden z-10">

                    {/* Integrated Video Container */}
                    <div className="relative w-full aspect-[21/10] rounded-2xl overflow-hidden border-4 border-black/50 shadow-2xl bg-black mb-12 group/video">
                        <style>{`
                            @keyframes fadeLoop {
                                0% { opacity: 1; }
                                5% { opacity: 0; }
                                95% { opacity: 0; }
                                100% { opacity: 1; }
                            }
                        `}</style>
                        <div className="absolute inset-0 w-full h-full pointer-events-none">
                            <iframe
                                src={`${compliance.videoUrl}&vq=hd1080&background=1&autoplay=1&loop=1&byline=0&title=0`}
                                title="Regulatory Framework Video"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full h-full object-cover opacity-60 scale-[1.35]"
                            ></iframe>
                        </div>
                        <div className="absolute inset-0 bg-brand-dark/20 z-10"></div>
                        <div className="absolute inset-0 bg-black z-20" style={{ animation: 'fadeLoop 27s linear infinite' }}></div>

                        {/* Title Overlay */}
                        <div className="absolute top-6 left-6 z-30">
                            <motion.h2
                                className="text-3xl md:text-5xl font-bold text-white mb-2"
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true }}
                            >
                                <StaggeredNeonText text={services.title} />
                            </motion.h2>
                            <div className="w-24 h-1 bg-brand-light rounded-full" />
                        </div>

                        {/* Service Box Slider Overlay */}
                        <div className="absolute bottom-4 left-0 w-full px-4 z-30 flex flex-col items-center pointer-events-none">
                            <AnimatePresence mode="wait">
                                {services.items.map((service, index) => {
                                    if (index !== activeService || !isVisible) return null;
                                    const Icon = iconMap[index];
                                    return (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -20 }}
                                            transition={{ duration: 0.5 }}
                                            className="relative p-6 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-md shadow-2xl w-auto max-w-xl pointer-events-auto"
                                        >
                                            {/* Icon - Top Right */}
                                            <div className="absolute top-6 right-6 w-10 h-10 shrink-0 rounded-xl bg-brand-light/20 flex items-center justify-center border border-brand-light/30">
                                                {Icon && <Icon className="w-5 h-5 text-brand-light" />}
                                            </div>

                                            <div className="flex items-center gap-3 mb-4 pr-12">
                                                <h3 className="text-lg font-bold text-white">
                                                    {service.title}
                                                </h3>
                                            </div>
                                            <p className="text-gray-200 text-base leading-relaxed text-balance">
                                                {service.desc}
                                            </p>
                                        </motion.div>
                                    );
                                })}
                            </AnimatePresence>
                            {/* Progress Indicators */}
                            <div className="flex justify-center gap-2 mt-4 pointer-events-auto">
                                {services.items.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setActiveService(idx)}
                                        className={`h-1.5 rounded-full transition-all duration-300 ${idx === activeService ? 'w-8 bg-brand-light' : 'w-2 bg-white/20'}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Win Text Grid - Below Video */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 border-t border-white/10 pt-12">
                        {services.imageOverlays && services.imageOverlays.map((overlay, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 + (idx * 0.1) }}
                                className="text-left"
                            >
                                <h4 className="text-brand-light font-bold tracking-wider text-sm mb-2 uppercase opacity-90">{overlay.title}</h4>
                                <h3 className="text-white font-bold text-xl mb-3 leading-tight tracking-wide">{overlay.subtitle}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{overlay.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Request Quote - Bottom */}
                    <motion.div
                        className="flex justify-center mt-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <a href="#contact" onClick={(e) => {
                            e.preventDefault();
                            const contactSection = document.getElementById('contact');
                            if (contactSection) {
                                contactSection.scrollIntoView({ behavior: 'smooth' });
                            }
                        }} className="px-10 py-4 bg-brand-accent text-white font-bold text-lg rounded-full hover:bg-white hover:text-brand-dark transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(249,115,22,0.4)]">
                            Request Quote
                        </a>
                    </motion.div>

                </div>
            </div>
        </section >
    );
}
