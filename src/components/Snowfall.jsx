import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Snowfall = () => {
    // Generate a consistent set of snowflakes
    const [snowflakes, setSnowflakes] = useState([]);

    useEffect(() => {
        const flakes = Array.from({ length: 50 }).map((_, i) => ({
            id: i,
            x: Math.random() * 100, // percentage
            delay: Math.random() * 5,
            duration: 5 + Math.random() * 5,
            size: 2 + Math.random() * 4,
            opacity: 0.3 + Math.random() * 0.5,
        }));
        setSnowflakes(flakes);
    }, []);

    return (
        <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
            {snowflakes.map((flake) => (
                <motion.div
                    key={flake.id}
                    className="absolute bg-white rounded-full blur-[1px]"
                    style={{
                        left: `${flake.x}%`,
                        width: flake.size,
                        height: flake.size,
                        opacity: flake.opacity,
                    }}
                    initial={{ top: -20 }}
                    animate={{ top: '100%' }}
                    transition={{
                        duration: flake.duration,
                        repeat: Infinity,
                        delay: flake.delay,
                        ease: "linear",
                    }}
                />
            ))}
        </div>
    );
};

export default Snowfall;
