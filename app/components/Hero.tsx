import Link from "next/link";
import { MessageCircle, ChevronDown, Star } from "lucide-react";

const WA_NUMBER = "584120000000";
const WA_HERO_MSG = encodeURIComponent(
    "Hola, vengo de la web y quiero agendar una revisión técnica. ¿Tienen disponibilidad?"
);

export function Hero() {
    return (
        <section className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 min-h-[90vh] flex items-center overflow-hidden">
            {/* Background decorative circles */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-700/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left: Copy */}
                    <div className="flex flex-col gap-6 animate-fade-in">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-orange-500/15 border border-orange-500/30 text-orange-300 text-sm font-medium px-4 py-1.5 rounded-full w-fit">
                            <span>🛠️</span>
                            <span>Expertos en Reparaciones</span>
                        </div>

                        {/* H1 */}
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
                            Técnicos{" "}
                            <span className="text-orange-400">Confiables</span>{" "}
                            y a Domicilio en{" "}
                            <span className="text-orange-400">Charallave</span>
                        </h1>

                        {/* Subtitle */}
                        <p className="text-blue-200 text-lg leading-relaxed max-w-lg">
                            No arriesgues tus equipos con improvisados. Nuestros técnicos certificados reparan{" "}
                            <strong className="text-white">Aires Acondicionados, Sistemas Eléctricos y Plomería</strong>{" "}
                            en toda la región de Valles del Tuy — con diagnóstico rápido y garantía real.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 mt-2">
                            <a
                                href="#triage"
                                className="inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-400 text-white font-bold text-base sm:text-lg px-7 py-4 rounded-xl shadow-lg hover:shadow-green-500/30 transition-all duration-300 hover:-translate-y-0.5"
                            >
                                <MessageCircle className="w-5 h-5 flex-shrink-0" />
                                Agendar Revisión vía WhatsApp
                            </a>
                            <Link
                                href="#servicios"
                                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-base px-7 py-4 rounded-xl transition-all duration-300 hover:-translate-y-0.5"
                            >
                                Ver Servicios
                                <ChevronDown className="w-4 h-4" />
                            </Link>
                        </div>

                        {/* Trust indicators */}
                        <div className="flex flex-wrap items-center gap-6 mt-2">
                            <div className="flex items-center gap-2 text-blue-200 text-sm">
                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                                <span>Atendemos hoy</span>
                            </div>
                            <div className="flex items-center gap-2 text-blue-200 text-sm">
                                <div className="w-2 h-2 bg-orange-400 rounded-full" />
                                <span>Presupuesto sin costo</span>
                            </div>
                            <div className="flex items-center gap-2 text-blue-200 text-sm">
                                <div className="w-2 h-2 bg-blue-400 rounded-full" />
                                <span>Pago contra entrega</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Image with floating badge */}
                    <div className="relative flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-lg">
                            {/* Main image */}
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/60">
                                <img
                                    src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=700&q=80&auto=format&fit=crop"
                                    alt="Técnico profesional amable en casa"
                                    className="w-full h-80 lg:h-96 object-cover"
                                />
                                {/* Image overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/50 to-transparent" />
                            </div>

                            {/* Floating badge — bottom left */}
                            <div className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-5 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 animate-bounce-slow">
                                <div className="flex flex-col items-center justify-center w-10 h-10 bg-orange-50 rounded-xl">
                                    <Star className="w-5 h-5 text-orange-500 fill-orange-500" />
                                </div>
                                <div>
                                    <p className="text-blue-950 font-bold text-sm leading-tight">+120 clientes satisfechos</p>
                                    <div className="flex items-center gap-0.5 mt-0.5">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-3 h-3 text-orange-400 fill-orange-400" />
                                        ))}
                                        <span className="text-gray-500 text-xs ml-1">en el Tuy</span>
                                    </div>
                                </div>
                            </div>

                            {/* Top right floating pill */}
                            <div className="absolute -top-3 -right-3 bg-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                                ✓ Garantía incluida
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom wave */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                    <path d="M0 60L1440 60L1440 20C1200 60 960 0 720 20C480 40 240 0 0 20L0 60Z" fill="#f9fafb" />
                </svg>
            </div>
        </section>
    );
}
