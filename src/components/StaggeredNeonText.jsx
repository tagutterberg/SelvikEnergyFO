import React from 'react';
import { motion } from 'framer-motion';

const StaggeredNeonText = ({ text, className = "" }) => {
    // Brand Green: #8bc357 -> RGB: 139, 195, 87
    const glowColor = "139, 195, 87";
    const letters = text.split("");

    return (
        <motion.div
            className={`inline-block cursor-default ${className}`}
            initial="initial"
            whileHover="hover"
        >
            {letters.map((letter, i) => (
                <motion.span
                    key={i}
                    className="inline-block relative z-10 font-bold"
                    variants={{
                        initial: {
                            color: "#ffffff",
                            textShadow: `0 0 0px rgba(${glowColor}, 0)`,
                        },
                        hover: {
                            color: "#ffffff",
                            textShadow: [
                                `0 0 4px rgba(${glowColor}, 0.1)`,
                                `0 0 10px rgba(${glowColor}, 0.4)`,
                                `0 0 20px rgba(${glowColor}, 0.6)`,
                                `0 0 40px rgba(${glowColor}, 0.8)`,
                                `0 0 80px rgba(${glowColor}, 1)`
                            ].join(", "),
                            transition: {
                                duration: 1.5,
                                ease: "easeInOut",
                                repeat: Infinity,
                                repeatType: "reverse",
                                delay: i * 0.1 // Stagger effect
                            }
                        }
                    }}
                >
                    {letter === " " ? "\u00A0" : letter}
                </motion.span>
            ))}
        </motion.div>
    );
};

export default StaggeredNeonText;
