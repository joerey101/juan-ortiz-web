export default function SocialProof() {
    const companies = [
        { name: "PEPSICO", className: "font-display tracking-tighter" },
        { name: "MercadoLibre", className: "font-serif italic" },
        { name: "GLOBANT", className: "font-sans tracking-widest font-extrabold" },
        { name: "ACCENTURE", className: "font-mono font-bold border-2 border-current px-2" },
        { name: "TOYOTA", className: "font-display font-medium" },
        { name: "SANTANDER", className: "font-sans font-black italic" },
    ];

    return (
        <div className="bg-[#0F1623] border-y border-white/5 py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-center text-slate-400 font-display uppercase tracking-widest text-xs mb-8">
                    Empresas que han transformado su consciencia operativa
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                    {companies.map((company) => (
                        <div key={company.name} className="flex justify-center">
                            <span className={`text-2xl text-white ${company.className}`}>
                                {company.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
