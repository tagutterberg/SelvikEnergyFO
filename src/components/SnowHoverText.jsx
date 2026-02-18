import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SnowHoverText = ({ text, className = "", stretch = false }) => {
    const [particles, setParticles] = useState([]);
    const containerRef = useRef(null);

    const handleMouseMove = (e) => {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        // Calculate localized coordinates
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Add 1-3 particles per move event for density
        const newParticles = Array.from({ length: 2 }).map(() => ({
            id: Math.random(),
            x: x + (Math.random() * 20 - 10), // slight spread
            y: y,
            size: Math.random() * 3 + 2,
            velocity: {
                x: Math.random() * 2 - 1, // drift left or right
                y: Math.random() * 2 + 1  // fall down
            }
        }));

        setParticles(prev => [...prev.slice(-50), ...newParticles]); // Keep max 50 particles
    };

    return (
        <span
            ref={containerRef}
            className={`relative inline-block cursor-default ${stretch ? "w-full flex justify-between" : ""} ${className}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setParticles([])} // Optional: clear instantly on leave, or let them fade
        >
            {/* The Text */}
            {stretch ? (
                text.split("").map((char, i) => (
                    <span key={i}>{char}</span>
                ))
            ) : (
                text
            )}

            {/* The Snow Particles */}
            <AnimatePresence>
                {particles.map((p) => (
                    <motion.span
                        key={p.id}
                        initial={{ opacity: 0.8, x: p.x, y: p.y, scale: 0 }}
                        animate={{
                            opacity: 0,
                            y: p.y + (Math.random() * 50 + 20), // Fall distance
                            x: p.x + (Math.random() * 30 - 15), // Drift distance
                            scale: 1
                        }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        onAnimationComplete={() => {
                            setParticles(prev => prev.filter(item => item.id !== p.id));
                        }}
                        className="absolute w-1 h-1 bg-white rounded-full pointer-events-none z-20 shadow-[0_0_5px_rgba(255,255,255,0.8)]"
                        style={{
                            width: p.size,
                            height: p.size,
                            left: 0,
                            top: 0
                        }}
                    />
                ))}
            </AnimatePresence>
        </span>
    );
};

export default SnowHoverText;
