export default function Newsletter() {
    return (
        <section className="py-20 bg-surface-dark border-t border-white/5">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-white uppercase mb-4">
                    Ingeniería Semanal en tu inbox
                </h2>
                <p className="text-slate-400 font-body italic mb-8">
                    Únete a +5,000 líderes que reciben estrategias de optimización personal y profesional.
                </p>
                <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
                    <input
                        type="email"
                        placeholder="Tu correo electrónico profesional"
                        className="w-full bg-background-dark border border-slate-700 text-white px-6 py-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none font-body placeholder:text-slate-600"
                    />
                    <button
                        type="submit"
                        className="bg-primary text-white font-display uppercase font-bold tracking-widest px-8 py-4 hover:bg-orange-700 transition-colors whitespace-nowrap shadow-lg shadow-orange-500/20"
                    >
                        Suscribirse
                    </button>
                </form>
                <p className="text-xs text-slate-500 mt-4 uppercase tracking-wider">
                    Sin spam. Solo valor de alto nivel.
                </p>
            </div>
        </section>
    );
}
