import React, { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from 'lucide-react';
import { footer, navigation, brand, about } from '../website-content';

export default function Footer() {
    const [heroImage, setHeroImage] = useState(about.images[0]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setHeroImage(about.images[Math.floor(Math.random() * about.images.length)]);
        }, 0);
        return () => clearTimeout(timer);
    }, []);

    return (
        <footer id="contact" className="bg-[#050f1e] border-t border-white/10 pt-0 md:pt-20 pb-10">
            {/* Mobile Hero Image */}
            <div className="relative w-full h-64 md:hidden overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050f1e]/50 to-[#050f1e] z-10" />
                <img
                    src={heroImage}
                    alt="Contact"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="container mx-auto px-6 pt-10 md:pt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-6 animate-glow-pulse">
                            <img src="/site_icon.svg" alt="Logo" className="h-10 w-auto" />
                            <span className="text-2xl font-bold text-white tracking-wider">{brand.name}<span className="text-brand-light">{brand.nameHighlight}</span></span>
                        </div>
                        <p className="text-gray-400 mb-6">
                            {footer.description}
                        </p>
                        <div className="flex gap-4">
                            {[Linkedin, Twitter, Facebook].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-light hover:text-brand-dark transition-all">
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-[#cbd980] font-bold text-lg mb-6">{footer.quickLinksTitle}</h4>
                        <ul className="space-y-4">
                            {navigation.map((item) => (
                                <li key={item.name}>
                                    <a href={item.href} className="text-gray-400 hover:text-brand-light transition-colors">
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-[#cbd980] font-bold text-lg mb-8">{footer.contactTitle}</h4>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-3 text-gray-400 group">
                                <MapPin className="w-5 h-5 text-brand-light shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                                <span className="whitespace-pre-line group-hover:text-white transition-colors">
                                    {footer.address}
                                </span>
                            </li>
                            <motion.li
                                className="flex items-center gap-3 text-gray-400 group"
                                initial={{ opacity: 0.3 }}
                                whileInView={{
                                    opacity: [0.3, 1, 0.3, 1, 1, 1],
                                    textShadow: ["none", "0 0 10px white", "none", "0 0 10px white", "0 0 40px #8bc357", "none"],
                                    color: ["#9ca3af", "#ffffff", "#9ca3af", "#ffffff", "#ffffff", "#9ca3af"]
                                }}
                                viewport={{ once: false }}
                                transition={{
                                    duration: 1.5,
                                    times: [0, 0.1, 0.2, 0.3, 0.8, 1],
                                    delay: 0.5 // Start after scroll settles
                                }}
                            >
                                <Phone className="w-5 h-5 text-brand-light shrink-0 group-hover:scale-110 transition-transform" />
                                <span className="group-hover:text-white transition-colors">{footer.phone}</span>
                            </motion.li>
                            <motion.li
                                className="flex items-center gap-3 text-gray-400 group"
                                initial={{ opacity: 0.3 }}
                                whileInView={{
                                    opacity: [0.3, 1, 0.3, 1, 1, 1],
                                    textShadow: ["none", "0 0 10px white", "none", "0 0 10px white", "0 0 40px #8bc357", "none"],
                                    color: ["#9ca3af", "#ffffff", "#9ca3af", "#ffffff", "#ffffff", "#9ca3af"]
                                }}
                                viewport={{ once: false }}
                                transition={{
                                    duration: 1.5,
                                    times: [0, 0.1, 0.2, 0.3, 0.8, 1],
                                    delay: 1.2 // Sequence after phone
                                }}
                            >
                                <Mail className="w-5 h-5 text-brand-light shrink-0 group-hover:scale-110 transition-transform" />
                                <span className="group-hover:text-white transition-colors">{footer.email}</span>
                            </motion.li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-[#cbd980] font-bold text-lg mb-6">{footer.newsletterTitle}</h4>
                        <p className="text-gray-400 mb-4 text-sm">{footer.newsletterDesc}</p>
                        <form
                            name="newsletter"
                            method="POST"
                            data-netlify="true"
                            className="flex gap-2"
                        >
                            <input type="hidden" name="form-name" value="newsletter" />
                            <input
                                type="email"
                                name="email"
                                required
                                placeholder="Email address"
                                className="bg-white/5 border border-white/10 rounded px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-brand-light w-full"
                            />
                            <button type="submit" className="bg-brand-accent text-white font-bold px-4 py-2 rounded hover:bg-white hover:text-brand-dark transition-colors">
                                OK
                            </button>
                        </form>
                    </div>
                </div>



                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>{footer.copyright}</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="/GTC_Selvik.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">General Terms and Conditions</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}


