import Image from "next/image";
import { PlayCircle, Cast, Youtube } from "lucide-react";

export default function PodcastSection() {
    return (
        <section className="py-24 bg-black border-t border-white/10 relative overflow-hidden">
            {/* Texture Background */}
            <div
                className="absolute inset-0 opacity-5 pointer-events-none"
                style={{ backgroundImage: "url('/images/cubes.png')" }}
            ></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12">

                    {/* Image */}
                    <div className="lg:w-1/2">
                        <div className="relative rounded-lg overflow-hidden shadow-2xl border border-white/10 group cursor-pointer">
                            <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-all z-10"></div>
                            <div className="relative w-full aspect-video">
                                <Image
                                    src="/images/microphone.jpg"
                                    alt="Micrófono de estudio en ambiente oscuro"
                                    fill
                                    className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center z-20">
                                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-4 group-hover:scale-110 transition-transform">
                                    <PlayCircle className="text-white w-12 h-12" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="lg:w-1/2 text-white">
                        <span className="text-primary font-display font-bold tracking-widest uppercase text-sm mb-2 block">
                            Nuevo Episodio
                        </span>
                        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 uppercase leading-none">
                            El Algoritmo <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                                Del Líder Consciente
                            </span>
                        </h2>
                        <p className="font-body text-slate-300 text-lg mb-8 font-light border-l-2 border-primary pl-6">
                            Exploramos cómo la inteligencia emocional y los datos duros convergen para crear las empresas del futuro. Invitado especial: CEO de TechFuture.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="bg-white text-black font-display uppercase font-bold text-sm tracking-widest px-8 py-3 hover:bg-gray-200 transition-colors flex items-center justify-center">
                                <Youtube className="mr-2 text-red-600 w-5 h-5" /> Ver en YouTube
                            </button>
                            <button className="border border-white/30 text-white font-display uppercase font-bold text-sm tracking-widest px-8 py-3 hover:bg-white/10 transition-colors flex items-center justify-center">
                                <Cast className="mr-2 text-green-500 w-5 h-5" /> Escuchar en Spotify
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
