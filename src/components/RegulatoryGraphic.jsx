import React from 'react';
import { motion } from 'framer-motion';

export default function RegulatoryGraphic() {
    return (
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-brand-light/5 blur-3xl rounded-full scale-150" />

            <svg viewBox="0 0 400 400" preserveAspectRatio="xMidYMid meet" className="w-full h-full max-h-[80%] opacity-80">
                <defs>
                    <linearGradient id="brandGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#64ffda" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#003366" stopOpacity="0.2" />
                    </linearGradient>
                    <filter id="glow">
                        <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* Central Globe/Network */}
                <motion.circle
                    cx="200"
                    cy="200"
                    r="80"
                    fill="none"
                    stroke="#003366"
                    strokeWidth="1"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                />
                <motion.circle
                    cx="200"
                    cy="200"
                    r="60"
                    fill="url(#brandGradient)"
                    fillOpacity="0.1"
                    stroke="#64ffda"
                    strokeWidth="0.5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                />

                {/* Orbital Rings */}
                <motion.circle
                    cx="200"
                    cy="200"
                    r="110"
                    fill="none"
                    stroke="#64ffda"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                    opacity="0.3"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                />
                <motion.circle
                    cx="200"
                    cy="200"
                    r="140"
                    fill="none"
                    stroke="#64ffda"
                    strokeWidth="0.5"
                    opacity="0.2"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                />

                {/* Nodes */}
                {[0, 72, 144, 216, 288].map((angle, i) => {
                    const rad = (angle * Math.PI) / 180;
                    const x = 200 + 110 * Math.cos(rad);
                    const y = 200 + 110 * Math.sin(rad);
                    return (
                        <motion.g key={i}>
                            <motion.circle
                                cx={x}
                                cy={y}
                                r="4"
                                fill="#64ffda"
                                filter="url(#glow)"
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1 + i * 0.1, duration: 0.5 }}
                            />
                            <motion.line
                                x1="200"
                                y1="200"
                                x2={x}
                                y2={y}
                                stroke="#64ffda"
                                strokeWidth="1"
                                opacity="0.2"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ delay: 1 + i * 0.1, duration: 0.5 }}
                            />
                        </motion.g>
                    );
                })}

                {/* Icons/Symbols Representation */}
                <motion.rect
                    x="190"
                    y="190"
                    width="20"
                    height="20"
                    fill="#64ffda"
                    filter="url(#glow)"
                    animate={{
                        opacity: [0.5, 1, 0.5],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                />
            </svg>
        </div>
    );
}
