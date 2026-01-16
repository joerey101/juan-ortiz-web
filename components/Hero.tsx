import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <header className="relative overflow-hidden bg-background-dark min-h-[90vh] flex items-center pt-20">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-slate-900 to-transparent opacity-30 z-0 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl z-0 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Text Content */}
                    <div className="space-y-8 order-2 lg:order-1 pt-10 lg:pt-0">
                        <div className="inline-block border-l-4 border-primary pl-4">
                            <p className="font-display font-semibold tracking-[0.2em] text-primary uppercase text-sm">
                                Industrial Engineering & Ontological Coaching
                            </p>
                        </div>

                        <h1 className="font-display font-bold text-6xl md:text-7xl lg:text-8xl leading-[0.9] text-white uppercase tracking-tighter">
                            Ingeniería <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-600">
                                de la
                            </span>{" "}
                            <br />
                            Consciencia
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-300 font-light max-w-lg italic border-l border-slate-700 pl-6 py-2">
                            Transformando líderes desde la precisión del proceso y la profundidad del ser.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Link
                                href="#"
                                className="inline-flex justify-center items-center bg-transparent border-2 border-white text-white font-display uppercase font-bold text-sm tracking-widest px-8 py-4 hover:bg-white hover:text-background-dark transition-all duration-300"
                            >
                                Explorar Método
                            </Link>
                            <Link
                                href="#"
                                className="inline-flex justify-center items-center text-slate-300 font-display uppercase font-bold text-sm tracking-widest px-8 py-4 hover:text-primary transition-colors group"
                            >
                                <span className="border-b border-transparent group-hover:border-primary transition-all">
                                    Ver Casos de Éxito
                                </span>
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform text-primary" />
                            </Link>
                        </div>
                    </div>

                    {/* Image Content */}
                    <div className="relative h-full min-h-[500px] lg:min-h-[700px] flex items-end justify-center lg:justify-end order-1 lg:order-2">
                        <div className="absolute bottom-0 right-10 w-3/4 h-3/4 bg-surface-dark z-0 border border-slate-700"></div>

                        {/* Main Portrait */}
                        <div className="relative z-10 w-auto h-[500px] lg:h-[750px] aspect-[3/4]">
                            <Image
                                src="/images/hero-new.png"
                                alt="Juan Martín Ortiz - Retrato profesional estilo corporativo"
                                fill
                                className="object-cover object-top drop-shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 ease-out"
                                style={{
                                    maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
                                    WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)"
                                }}
                                priority
                            />
                        </div>

                        {/* Floating Badge */}
                        <div className="absolute bottom-20 -left-6 z-20 bg-primary p-6 shadow-xl max-w-[200px] hidden md:block">
                            <p className="font-display font-bold text-white text-3xl mb-1">
                                15+
                            </p>
                            <p className="font-body text-white/90 text-sm italic leading-tight">
                                Años optimizando sistemas humanos y organizacionales.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
