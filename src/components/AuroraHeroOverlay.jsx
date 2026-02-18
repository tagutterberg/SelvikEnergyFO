import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

export default function AuroraHeroOverlay() {
    return (
        <div
            className="absolute inset-x-0 top-0 h-[20vh] pointer-events-none overflow-hidden z-10"
            style={{ maskImage: 'linear-gradient(to bottom, black 0%, black 20%, transparent 100%)' }} // Hard fade to ensure top-only
        >
            {/* Primary Aurora Band (Intense Green) */}
            <motion.div
                className="absolute top-[-80%] left-[-20%] w-[140%] h-[150%] rounded-[100%] blur-[50px]"
                style={{
                    background: 'conic-gradient(from 180deg at 50% 50%, #00ff41 0deg, #00bfae 120deg, #008f39 240deg, #00ff41 360deg)',
                    mixBlendMode: 'color-dodge',
                    filter: 'blur(50px)',
                    willChange: 'transform',
                }}
                animate={{
                    transform: [
                        'rotate(0deg) scale(1) translate(0, 0)',
                        'rotate(5deg) scale(1.1) translate(2%, 2%)',
                        'rotate(-5deg) scale(0.9) translate(-2%, -2%)',
                        'rotate(0deg) scale(1) translate(0, 0)',
                    ],
                    opacity: [0.1, 0.8, 0.1], // 10% to 80% intensity cycle
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            {/* Secondary Aurora Band (Deep Emerald/Teal for depth) */}
            <motion.div
                className="absolute top-[-60%] left-[-10%] w-[120%] h-[120%] rounded-[100%] blur-[40px]"
                style={{
                    background: 'radial-gradient(circle at center, #10b981 0%, #047857 50%, transparent 80%)',
                    mixBlendMode: 'overlay',
                    willChange: 'transform, opacity',
                }}
                animate={{
                    opacity: [0.1, 0.8, 0.1],
                    scale: [1, 1.15, 1],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                }}
            />

            {/* Aurora Flare/Shimmer (Brighter, faster movements) */}
            <motion.div
                className="absolute top-[-40%] left-[-20%] w-[150%] h-[100%] blur-[30px]"
                style={{
                    background: 'conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(200, 255, 230, 0.3) 40deg, transparent 80deg, rgba(255, 255, 255, 0.2) 120deg, transparent 360deg)',
                    mixBlendMode: 'color-dodge',
                    willChange: 'transform',
                }}
                animate={{
                    transform: [
                        'rotate(0deg) translate(0, 0)',
                        'rotate(15deg) translate(5%, 0)',
                        'rotate(0deg) translate(0, 0)',
                    ],
                    opacity: [0.1, 0.8, 0.1], // 10% to 80%
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Subtle Texture/Noise if needed, but keeping it clean for now */}
        </div>
    );
}
