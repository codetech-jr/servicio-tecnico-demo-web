"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Wrench, Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Detect scroll to handle sticky background
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Inicio", href: "#" },
        { name: "Servicios", href: "#servicios" },
        { name: "Agendar Revisión", href: "#triage" },
    ];

    return (
        <>
            <header
                className={`sticky top-0 w-full z-40 transition-all duration-300 border-b ${isScrolled
                    ? "bg-white/95 backdrop-blur-md border-gray-200 shadow-sm py-3"
                    : "bg-blue-950 border-transparent py-4 text-white"
                    }`}
            // If TopBar is present, we might need top-[40px] if we want both sticky, but 
            // usually TopBar scrolls away and Navbar sticks. We will just make Navbar fixed.
            >
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

                    {/* Logo */}
                    <Link href="#" className="flex items-center gap-2 font-bold text-xl sm:text-2xl group">
                        <div className={`p-1.5 rounded-lg transition-colors ${isScrolled ? 'bg-orange-100' : 'bg-white/10'}`}>
                            <Wrench className={`w-6 h-6 ${isScrolled ? 'text-orange-500' : 'text-orange-400'}`} />
                        </div>
                        <span className={`tracking-tight ${isScrolled ? 'text-blue-950' : 'text-white'}`}>
                            VALLES TÉCNICOS
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`text-sm font-medium transition-colors hover:text-orange-500 ${isScrolled ? "text-gray-600" : "text-gray-200"
                                    }`}
                            >
                                {link.name}
                            </a>
                        ))}

                        {/* CTA Button */}
                        <a
                            href="tel:+584120000000"
                            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold text-sm px-5 py-2.5 rounded-lg shadow-md hover:shadow-green-500/30 transition-all duration-300 hover:-translate-y-0.5"
                        >
                            <Phone className="w-4 h-4" />
                            Llamar Urgencia
                        </a>
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className={`md:hidden p-2 rounded-lg transition-colors ${isScrolled ? "text-blue-950 hover:bg-gray-100" : "text-white hover:bg-white/10"
                            }`}
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-30 pt-20 px-4 bg-white md:hidden"
                    >
                        <nav className="flex flex-col gap-6 mt-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-2xl font-bold text-blue-950 border-b border-gray-100 pb-4"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="tel:+584120000000"
                                className="mt-4 flex items-center justify-center gap-3 bg-green-500 text-white font-bold text-lg px-6 py-4 rounded-xl shadow-lg"
                            >
                                <Phone className="w-5 h-5" />
                                Llamar Urgencia (+58 412-000-0000)
                            </a>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
