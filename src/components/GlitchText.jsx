import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const GlitchText = ({ text, delay = 0, duration = 0.5, className = "", stretch = true }) => {
    const [displayProps, setDisplayProps] = useState([]);
    // Characters to cycle through for the glitch effect
    const chars = "!<>-_\\/[]{}—=+*^?#________";

    useEffect(() => {
        if (!text) return; // Prevent crash if text is missing

        // Initialize state for each character
        const initialProps = text.split("").map((char) => ({
            char: " ", // Start empty or random
            isDone: false,
            opacity: 0,
        }));
        setDisplayProps(initialProps);

        text.split("").forEach((targetChar, index) => {
            const startDelay = delay + (index * 0.05); // Staggered start

            // Start the glitch process for this character
            setTimeout(() => {
                let cycles = 0;
                const maxCycles = 5 + Math.random() * 5; // vary glitch length slightly

                const interval = setInterval(() => {
                    setDisplayProps(prev => {
                        const newProps = [...prev];
                        // Safety check in case component unmounts or state is stale
                        if (!newProps[index]) return prev;

                        if (cycles >= maxCycles) {
                            // Settle on final character
                            newProps[index] = { char: targetChar, isDone: true, opacity: 1 };
                            clearInterval(interval);
                        } else {
                            // Show random character
                            newProps[index] = {
                                char: chars[Math.floor(Math.random() * chars.length)],
                                isDone: false,
                                opacity: 1
                            };
                            cycles++;
                        }
                        return newProps;
                    });
                }, 50); // Glitch speed
            }, startDelay * 1000);
        });
    }, [text, delay]);

    if (!text) return null;

    return (
        <span className={`inline-flex ${stretch ? "justify-between w-full" : "gap-x-[1px]"} ${className}`}>
            {/* Render placeholders if state isn't ready to prevent layout shift */}
            {displayProps.length === 0 ? text.split("").map((c, i) => <span key={i} className="opacity-0">{c}</span>) :
                displayProps.map((item, i) => (
                    <span
                        key={i}
                        className={`${item.isDone ? "" : "text-brand-light/50"} whitespace-pre`} // Dim glitch chars
                        style={{ opacity: item.opacity }}
                    >
                        {item.char}
                    </span>
                ))}
        </span>
    );
};

export default GlitchText;
