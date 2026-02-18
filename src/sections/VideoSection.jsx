import React from 'react';
import { motion } from 'framer-motion';
import { compliance } from '../website-content';

export default function VideoSection() {
    return (
        <section className="py-24 bg-gradient-to-b from-[#050f1e] to-brand-dark text-white relative overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative w-full aspect-video mx-auto flex flex-col items-center justify-center bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
                >
                    {/* Video Background */}
                    <div className="absolute inset-0 z-0 bg-black pointer-events-none select-none overflow-hidden">
                        <style>{`
                            @keyframes fadeLoop {
                                0% { opacity: 1; }
                                5% { opacity: 0; }
                                95% { opacity: 0; }
                                100% { opacity: 1; }
                            }
                        `}</style>
                        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
                            {/* Mobile Video - Viewport Unit Coverage */}
                            <div className="absolute inset-0 md:hidden overflow-hidden">
                                <iframe
                                    src={compliance.videoUrl}
                                    title="Regulatory Framework Video"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.78vh] h-[100vh] min-w-full min-h-full opacity-80"
                                ></iframe>
                            </div>

                            {/* Desktop Video - Standard Coverage */}
                            <iframe
                                src={compliance.videoUrl}
                                title="Regulatory Framework Video"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="hidden md:block w-full h-full scale-[1.05] object-cover opacity-80"
                            ></iframe>
                        </div>
                        {/* Fade Overlay */}
                        <div
                            className="absolute inset-0 bg-black z-10"
                            style={{ animation: 'fadeLoop 27s linear infinite' }}
                        ></div>
                    </div>

                    {/* Overlay Content - Foreground */}
                    <div className="relative z-10 w-full h-full pointer-events-none">
                        {/* Content can go here if needed */}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
