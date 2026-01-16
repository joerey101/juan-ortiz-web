"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`sticky top-0 z-50 w-full transition-all duration-300 border-b ${isScrolled
                    ? "bg-background-dark/95 border-slate-800 backdrop-blur-md shadow-lg"
                    : "bg-transparent border-transparent py-4"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link
                            href="/"
                            className="text-2xl font-bold font-display tracking-tight text-white uppercase"
                        >
                            JM<span className="text-primary">.</span>Ortiz
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8 items-center">
                        {["Sobre Mí", "Coaching", "Consultoría", "Podcast"].map((item) => (
                            <Link
                                key={item}
                                href="#"
                                className="font-display uppercase tracking-wider text-sm font-medium text-slate-300 hover:text-primary transition-colors"
                            >
                                {item}
                            </Link>
                        ))}
                    </div>

                    {/* Desktop Actions */}
                    <div className="hidden md:flex items-center space-x-4">
                        <button className="text-slate-300 hover:text-primary transition-colors">
                            <Search className="w-5 h-5" />
                        </button>
                        <Link
                            href="#"
                            className="bg-primary text-white font-display uppercase font-bold text-xs tracking-widest px-6 py-3 hover:bg-orange-700 transition-all transform hover:-translate-y-0.5 shadow-lg shadow-orange-500/20"
                        >
                            Agenda tu Sesión
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-slate-300 hover:text-white"
                        >
                            {isMobileMenuOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-background-dark border-t border-slate-800 absolute w-full left-0 animate-fade-in px-4 pt-2 pb-6 shadow-xl">
                    <div className="space-y-1">
                        {["Sobre Mí", "Coaching", "Consultoría", "Podcast"].map((item) => (
                            <Link
                                key={item}
                                href="#"
                                className="block px-3 py-4 text-base font-display uppercase font-medium text-slate-300 hover:text-primary hover:bg-slate-800/50 rounded-md transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item}
                            </Link>
                        ))}
                        <div className="mt-4 pt-4 border-t border-slate-800">
                            <Link
                                href="#"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block w-full text-center bg-primary text-white font-display uppercase font-bold text-xs tracking-widest px-6 py-4 hover:bg-orange-700 transition-all"
                            >
                                Agenda tu Sesión
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
