import React from 'react';
import { motion } from 'framer-motion';
import { brand } from '../website-content';

const Preloader = () => {
    return (
        <motion.div
            className="fixed inset-0 z-50 bg-[#020617] flex flex-col items-center justify-center font-sans"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
        >
            <div className="relative flex items-center justify-center mb-8">
                {/* Simplified Logo/Icon Animation */}
                <motion.div
                    className="w-20 h-20 rounded-full border-4 border-brand-light/20 border-t-brand-light"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <img src={brand.logo} alt="Logo" className="w-10 h-10 opacity-80" />
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-center"
            >
                <h1 className="text-2xl font-bold text-white tracking-[0.2em] uppercase">
                    {brand.name}
                </h1>
                <p className="text-brand-light/60 text-xs tracking-widest mt-2 uppercase">
                    {brand.slogan}
                </p>
            </motion.div>
        </motion.div>
    );
};

export default Preloader;
