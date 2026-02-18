import React from 'react';
import { motion } from 'framer-motion';

const CityNightsText = ({ text, className = "" }) => {
    return (
        <motion.div
            className={`relative inline-block overflow-hidden cursor-default ${className}`}
            initial="initial"
            whileHover="hover"
        >
            {/* Base Text (White/Metallic) */}
            <span className="relative z-10 block bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
                {text}
            </span>

            {/* City Lights Gradient Overlay (Revealed on Hover) */}
            <motion.span
                className="absolute inset-0 z-20 block bg-clip-text text-transparent bg-[size:200%_auto]"
                style={{
                    backgroundImage: "linear-gradient(90deg, #0a192f 0%, #d946ef 25%, #64ffda 50%, #fbbf24 75%, #0a192f 100%)",
                }}
                variants={{
                    initial: {
                        opacity: 0,
                        backgroundPosition: "0% 50%"
                    },
                    hover: {
                        opacity: 1,
                        backgroundPosition: "200% 50%",
                        transition: {
                            opacity: { duration: 0.2 },
                            backgroundPosition: {
                                duration: 2,
                                ease: "linear",
                                repeat: Infinity
                            }
                        }
                    }
                }}
            >
                {text}
            </motion.span>

            {/* Glow/Blur effect for the neon */}
            <motion.div
                className="absolute inset-0 z-0 blur-md opacity-0"
                style={{
                    background: "linear-gradient(90deg, transparent, rgba(217, 70, 239, 0.5), rgba(100, 255, 218, 0.5), rgba(251, 191, 36, 0.5), transparent)"
                }}
                variants={{
                    initial: { opacity: 0, x: "-100%" },
                    hover: {
                        opacity: 0.5,
                        x: "100%",
                        transition: {
                            duration: 2,
                            ease: "linear",
                            repeat: Infinity
                        }
                    }
                }}
            />
        </motion.div>
    );
};

export default CityNightsText;
