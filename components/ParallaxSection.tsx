export default function ParallaxSection() {
    return (
        <section className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden flex items-center justify-center">
            <div
                className="absolute inset-0 bg-fixed bg-center bg-cover bg-no-repeat z-0"
                style={{
                    backgroundImage: "url('/images/parallax-speaker.jpg')",
                    backgroundPosition: "center 30%"
                }}
            ></div>
            <div className="absolute inset-0 bg-black/40 z-10"></div>

            <div className="relative z-20 text-center max-w-4xl px-4">
                <h2 className="font-display text-4xl md:text-6xl font-bold text-white uppercase tracking-wider mb-6 drop-shadow-lg">
                    Liderazgo que <span className="text-primary">Inspira</span>
                </h2>
                <div className="w-24 h-1 bg-primary mx-auto"></div>
            </div>
        </section>
    );
}
