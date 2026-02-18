import React from 'react';
import { motion } from 'framer-motion';
import { compliance } from '../website-content';
import { ShieldCheck, Lock, FileCheck, Globe2, ScanEye, ShieldAlert, FileKey } from 'lucide-react';

import RegulatoryGraphic from '../components/RegulatoryGraphic';

export default function Compliance() {
    const iconMap = [ShieldCheck, Lock, FileCheck];

    return (
        <section id="compliance" className="min-h-screen flex items-center py-24 bg-gradient-to-b from-brand-dark to-[#050f1e] text-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <motion.h2
                            className="text-3xl md:text-5xl font-bold mb-4 inline-block origin-center"
                            whileHover={{ scaleX: 1.1, letterSpacing: "0.05em" }}
                            transition={{ type: "spring", stiffness: 300, damping: 10 }}
                        >
                            {compliance.title} <span className="text-brand-light">{compliance.titleHighlight}</span>
                        </motion.h2>
                        <div className="w-24 h-1 bg-brand-light mx-auto rounded-full" />
                        <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto text-left">
                            {compliance.description}
                        </p>
                    </motion.div>
                </div>

                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-1 gap-12"
                    >
                        {compliance.items.map((item, idx) => {
                            const Icon = iconMap[idx];
                            return (
                                <div key={idx} className="flex flex-col md:flex-row gap-6 items-center md:items-start text-center md:text-left p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                                    <div className="shrink-0 w-16 h-16 rounded-full bg-brand-light/10 flex items-center justify-center border border-brand-light/20 shadow-[0_0_15px_rgba(105,150,63,0.3)]">
                                        <Icon className="w-8 h-8 text-brand-light" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold mb-3 text-white">{item.title}</h3>
                                        <p className="text-gray-400 leading-relaxed text-lg">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </motion.div>

                    {/* Help Section */}
                    {compliance.helpSection && (
                        <div className="mt-16 max-w-5xl mx-auto">
                            {/* Title Box */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-center mb-8"
                            >
                                <div className="inline-block px-8 py-3 rounded-xl bg-brand-light/10 border border-brand-light/20 backdrop-blur-sm">
                                    <h3 className="text-2xl font-bold text-brand-light uppercase tracking-wider">{compliance.helpSection.title}</h3>
                                </div>
                            </motion.div>

                            {/* Items Grid - Styled with "Digital Fortress" look */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                viewport={{ once: true }}
                                className="grid grid-cols-1 md:grid-cols-3 gap-8"
                            >
                                {compliance.helpSection.items.map((item, idx) => {
                                    const helpIcons = [ScanEye, ShieldAlert, FileKey];
                                    const Icon = helpIcons[idx] || ShieldCheck;

                                    return (
                                        <div key={idx} className="group relative p-8 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-brand-light/40 transition-all duration-500 overflow-hidden hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.15)] flex flex-col items-center">
                                            {/* Neon Glow Effects */}
                                            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-brand-light/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                            <div className="absolute bottom-0 right-0 w-24 h-24 bg-brand-light/10 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                            {/* Large Watermark Number */}
                                            <div className="absolute -right-2 -top-4 text-[6rem] font-bold text-white/5 select-none pointer-events-none group-hover:text-brand-light/5 transition-colors duration-500 font-serif leading-none">
                                                0{idx + 1}
                                            </div>

                                            {/* Icon Container */}
                                            <div className="relative z-10 w-16 h-16 mb-6 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-light group-hover:scale-110 group-hover:bg-brand-light group-hover:text-brand-dark transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.2)]">
                                                <Icon className="w-8 h-8" />
                                            </div>

                                            {/* Content */}
                                            <div className="relative z-10 text-center">
                                                <p className="text-gray-300 text-lg leading-relaxed group-hover:text-white transition-colors duration-300 font-light">
                                                    {item}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </motion.div>
                        </div>
                    )}

                    {/* Footer Link */}
                    <div className="text-center mt-16">
                        <a href="/GTC_Selvik_March5_2025.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-brand-light hover:text-white transition-colors font-medium text-lg hover:tracking-wide duration-300">
                            {compliance.linkText}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
