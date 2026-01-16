import Link from "next/link";
import { Hammer, Brain, Users, ArrowRight } from "lucide-react";

export default function ServicesGrid() {
    const services = [
        {
            title: "Ingeniería de Procesos",
            description:
                "Optimización de flujos de trabajo mediante metodologías Lean y Six Sigma, aplicadas no solo a la producción, sino a la toma de decisiones ejecutiva.",
            icon: Hammer,
        },
        {
            title: "Coaching Ontológico",
            description:
                "Desbloqueo de barreras lingüísticas y emocionales que impiden el alto rendimiento. Un enfoque profundo para líderes que buscan trascendencia.",
            icon: Brain,
        },
        {
            title: "Cultura Organizacional",
            description:
                "Diseño de arquitecturas culturales resilientes. Transformamos grupos de trabajo en equipos de alto desempeño con propósito compartido.",
            icon: Users,
        },
    ];

    return (
        <section className="py-24 bg-background-dark relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-white uppercase mb-4">
                            Áreas de <span className="text-primary">Impacto</span>
                        </h2>
                        <div className="h-1 w-24 bg-primary"></div>
                    </div>
                    <p className="max-w-md text-slate-400 font-body text-lg text-right md:text-left">
                        Intervenciones diseñadas para alinear la estrategia de negocio con el potencial humano.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <div
                            key={service.title}
                            className="group bg-surface-dark border border-white/10 p-8 hover:border-primary transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <service.icon className="w-24 h-24 text-primary" strokeWidth={1} />
                            </div>
                            <div className="relative z-10">
                                <h3 className="font-display font-bold text-2xl text-white uppercase mb-4 group-hover:text-primary transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-slate-300 mb-6 font-light leading-relaxed">
                                    {service.description}
                                </p>
                                <Link
                                    href="#"
                                    className="inline-flex items-center text-sm font-bold uppercase tracking-wider text-white group-hover:text-primary transition-colors"
                                >
                                    Ver detalles <ArrowRight className="ml-2 w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
