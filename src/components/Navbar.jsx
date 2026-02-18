import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { navigation, brand } from '../website-content';

function DockLink({ mouseX, href, children }) {
    const ref = useRef(null);
    const distance = useTransform(mouseX, (val) => {
        const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
        return val - bounds.x - bounds.width / 2;
    });

    const scaleSync = useTransform(distance, [-150, 0, 150], [1, 1.6, 1]);
    const scale = useSpring(scaleSync, { mass: 0.1, stiffness: 150, damping: 12 });

    // Unified style: Orange text (from morning) with Green hover (from evening)
    const textColorClass = "text-brand-accent hover:text-brand-light";

    return (
        <motion.a
            ref={ref}
            href={href}
            style={{ scale }}
            className={`${textColorClass} font-medium transition-colors text-sm uppercase tracking-wide block origin-bottom`}
        >
            {children}
        </motion.a>
    );
}

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const mouseX = useMotionValue(Infinity);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-brand-dark/95 backdrop-blur-sm shadow-lg py-4' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <motion.a
                    href="#"
                    className="flex items-center gap-3"
                    initial={{ filter: "drop-shadow(0 0 10px rgba(100,255,218,0.8))" }}
                    animate={{ filter: "drop-shadow(0 0 0px rgba(100,255,218,0))" }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                >
                    <img
                        src={brand.logo}
                        alt={`${brand.name} Logo`}
                        className="h-12 w-auto animate-glow-pulse"
                    />
                    <span className="text-lg md:text-2xl font-bold text-white tracking-wider">{brand.name}<span className="text-brand-light">{brand.nameHighlight}</span></span>
                </motion.a>

                {/* Desktop Menu */}
                <div
                    className="hidden lg:flex items-center gap-8"
                    onMouseMove={(e) => mouseX.set(e.pageX)}
                    onMouseLeave={() => mouseX.set(Infinity)}
                >
                    {navigation.map((link) => (
                        <DockLink
                            key={link.name}
                            href={link.href}
                            mouseX={mouseX}
                        >
                            {link.name}
                        </DockLink>
                    ))}
                </div>

                {/* Mobile Toggle */}
                <button className="lg:hidden text-white p-2 rounded-lg bg-black/20 backdrop-blur-md border border-white/10 hover:bg-black/40 transition-colors" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-brand-dark border-t border-white/10"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {navigation.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-gray-300 hover:text-brand-light text-lg font-medium"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
