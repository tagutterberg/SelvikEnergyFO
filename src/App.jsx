import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import ScrollProgress from './components/ScrollProgress';
import Preloader from './components/Preloader';
import { hero } from './website-content';
import { getBackgroundForTime } from './utils/timeUtils';

function Watermark() {
  const { scrollY } = useScroll();
  const rotate = useTransform(scrollY, [0, 5000], [0, 360]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 flex items-center justify-center overflow-hidden opacity-10">
      <motion.img
        src="/watermark.svg"
        alt=""
        className="w-[150vmax] h-[150vmax] object-cover max-w-none"
        style={{ rotate }}
      />
    </div>
  );
}
import Hero from './sections/Hero';
import Services from './sections/Services';
import OperationsMap from './sections/OperationsMap';
import Compliance from './sections/Compliance';
import About from './sections/About';
import Footer from './sections/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadAssets = async () => {
      // Determine which background to load based on current time
      const currentBg = getBackgroundForTime();
      const assets = [currentBg, '/CO2_1.webp', '/CO2_2.webp', '/sverri_out.webp'];

      const assetPromises = assets.map((src) => {
        return new Promise((resolve) => {
          if (src?.endsWith('.mp4')) {
            // Preload video using fetch to ensure it's downloaded
            fetch(src)
              .then(() => resolve())
              .catch(() => resolve()); // Resolve on error too to prevent blocking
          } else {
            // Preload images
            const img = new Image();
            img.src = src;
            img.onload = resolve;
            img.onerror = resolve;
          }
        });
      });

      // Wait for all assets to load
      await Promise.all(assetPromises);

      // Add a small delay for branding impact and smoothness
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    };

    loadAssets();
  }, []);

  return (
    <div className="bg-brand-dark min-h-screen text-white font-sans selection:bg-brand-light selection:text-brand-dark relative">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader key="preloader" />}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ScrollProgress />
          <Watermark />
          <Navbar />
          <Hero />
          <Services />
          <OperationsMap />
          <Compliance />
          <About />
          <Footer />
        </motion.div>
      )}
    </div>
  );
}

export default App;
