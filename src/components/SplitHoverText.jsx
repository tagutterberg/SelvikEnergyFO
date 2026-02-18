import React from 'react';
import { motion } from 'framer-motion';

const SplitHoverText = ({ text, className = "" }) => {
    return (
        <motion.div
            className={`relative inline-block cursor-default ${className}`}
            initial="initial"
            whileHover="hover"
        >
            {/* The Green Reveal Text (Background/Center) */}
            {/* This text fades in as the white halves split away */}
            <motion.span
                className="absolute inset-0 flex items-center justify-center text-brand-light font-bold"
                variants={{
                    initial: { opacity: 0, scale: 0.9 },
                    hover: { opacity: 1, scale: 1 }
                }}
                transition={{ duration: 0.3 }}
            >
                {text}
            </motion.span>

            {/* Top Half (White) */}
            <motion.span
                className="block text-white font-bold relative z-10"
                style={{ clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 50%)" }}
                variants={{
                    initial: { y: 0, opacity: 1 },
                    hover: { y: -10, opacity: 0 }
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
            >
                {text}
            </motion.span>

            {/* Bottom Half (White) */}
            <motion.span
                className="absolute inset-0 block text-white font-bold z-10"
                style={{ clipPath: "polygon(0 50%, 100% 50%, 100% 100%, 0 100%)" }}
                variants={{
                    initial: { y: 0, opacity: 1 },
                    hover: { y: 10, opacity: 0 }
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
            >
                {text}
            </motion.span>
        </motion.div>
    );
};

export default SplitHoverText;
