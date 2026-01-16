import Link from "next/link";
import { Linkedin, Instagram, Youtube, UserCheck } from "lucide-react"; // Using UserCheck as specific Spotify icon not in Lucide default usually, but checking... Lucide has 'Music' or similar. I'll use `Music` for Spotify for now or just generic if preferred. Wait, I can import Music.
// Correction: Lucide doesn't have brand icons like Spotify directly in all versions, but `lucide-react` often doesn't inclusion brands.
// I will use text or generic icons if brands are missing. Actually, Lucide generally avoids brands. 
// I will use generic icons: Linkedin (Linkedin is in Lucide?), Instagram (Yes), Youtube (Yes). Spotify? Maybe `Music`.
// Let's check available icons. Lucide has: `Linkedin`, `Instagram`, `Youtube`. `Spotify` is NOT in standard lucide lib. I'll use `Music4` or similar.

import { Music } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-white py-12 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">

                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <Link
                            href="/"
                            className="text-3xl font-bold font-display tracking-tight text-white uppercase block mb-6"
                        >
                            JM<span className="text-primary">.</span>Ortiz
                        </Link>
                        <p className="text-slate-400 text-sm max-w-sm font-light">
                            Fusionando la rigurosidad de la ingeniería industrial con la profundidad del coaching ontológico para crear resultados sostenibles.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="font-display font-bold uppercase tracking-widest text-sm mb-6 text-primary">
                            Navegación
                        </h4>
                        <ul className="space-y-4 text-sm text-slate-400">
                            {["Home", "Sobre Mí", "Servicios Corporativos", "Mentoria 1:1"].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="hover:text-white transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h4 className="font-display font-bold uppercase tracking-widest text-sm mb-6 text-primary">
                            Conecta
                        </h4>
                        <ul className="space-y-4 text-sm text-slate-400">
                            <li>
                                <Link href="#" className="hover:text-white transition-colors flex items-center">
                                    <Linkedin className="w-4 h-4 mr-2 text-blue-500" /> LinkedIn
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-white transition-colors flex items-center">
                                    <Instagram className="w-4 h-4 mr-2 text-pink-500" /> Instagram
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-white transition-colors flex items-center">
                                    <Youtube className="w-4 h-4 mr-2 text-red-500" /> YouTube
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-white transition-colors flex items-center">
                                    <Music className="w-4 h-4 mr-2 text-green-500" /> Spotify
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 uppercase tracking-widest">
                    <p>© 2024 Juan Martín Ortiz. Todos los derechos reservados.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-white">Privacidad</Link>
                        <Link href="#" className="hover:text-white">Términos</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
