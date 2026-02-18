import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
    const { scrollYProgress } = useScroll();
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const [activeSection, setActiveSection] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            let current = 1;

            sections.forEach((section, index) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (window.scrollY >= sectionTop - sectionHeight / 3) {
                    current = index + 1;
                }
            });

            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed right-[6px] top-0 bottom-0 w-8 z-50 pointer-events-none flex flex-col justify-center items-center">
            {/* White line indicator */}
            <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-white/20"></div>

            {/* Active Page Indicator */}
            {/* We position this relative to the viewport center or track the scroll thumb? 
                The user said: "Left to the scrollbar add a thin white line... and displaying the page number in a tiny font when centered on page"
                I'll place a fixed indicator in the vertical center of the screen that updates.
                OR, does "Left to the scrollbar" mean the line spans the height? Yes.
                "Displaying the page number... when centered on page"
            */}
            <div className="fixed right-[12px] top-1/2 -translate-y-1/2 flex items-center gap-2">
                <span className="text-[10px] font-mono text-brand-light font-bold tracking-widest rotate-90 origin-right">
                    {String(activeSection).padStart(2, '0')}
                </span>
                <div className="w-[1px] h-8 bg-white"></div>
            </div>
        </div>
    );
}
