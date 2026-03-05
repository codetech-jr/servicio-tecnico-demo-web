import Link from "next/link";
import { Wrench, Instagram, Phone, MapPin, Mail } from "lucide-react";

export function CorporateFooter() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-neutral-900 border-t border-neutral-800 pt-16 pb-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">

                    {/* Column 1: Brand */}
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2 text-white font-bold text-xl">
                            <Wrench className="w-6 h-6 text-orange-500" />
                            VALLES TÉCNICOS
                        </div>
                        <p className="text-neutral-400 text-sm leading-relaxed">
                            Expertos certificados en reparación de electrodomésticos, sistemas eléctricos y plomería. Tu confianza es nuestra garantía.
                        </p>
                        <div className="flex items-center gap-4 mt-2">
                            <a href="#" className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 hover:bg-orange-500 hover:text-white transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="https://wa.me/584120000000" className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 hover:bg-green-500 hover:text-white transition-colors">
                                <Phone className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="flex flex-col gap-4 lg:pl-8">
                        <h4 className="text-white font-bold mb-2">Enlaces Rápidos</h4>
                        <nav className="flex flex-col gap-3">
                            <Link href="#" className="text-neutral-400 hover:text-white text-sm transition-colors w-fit">Inicio</Link>
                            <Link href="#servicios" className="text-neutral-400 hover:text-white text-sm transition-colors w-fit">Servicios Especializados</Link>
                            <Link href="#triage" className="text-neutral-400 hover:text-white text-sm transition-colors w-fit">Agendar Revisión</Link>
                            <Link href="#" className="text-neutral-400 hover:text-white text-sm transition-colors w-fit">Preguntas Frecuentes</Link>
                        </nav>
                    </div>

                    {/* Column 3: Contact */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-white font-bold mb-2">Atención al Cliente</h4>
                        <ul className="flex flex-col gap-4">
                            <li className="flex items-start gap-3 text-neutral-400 text-sm">
                                <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0" />
                                <span>Base de operaciones en Charallave. Cobetura en todo el Valles del Tuy.</span>
                            </li>
                            <li className="flex items-start gap-3 text-neutral-400 text-sm">
                                <Phone className="w-5 h-5 text-orange-500 flex-shrink-0" />
                                <div className="flex flex-col">
                                    <span>Lunes a Sábado: 8:00 AM - 6:00 PM</span>
                                    <a href="tel:+584120000000" className="hover:text-white">+58 412-000-0000</a>
                                </div>
                            </li>
                            <li className="flex items-start gap-3 text-neutral-400 text-sm">
                                <Mail className="w-5 h-5 text-orange-500 flex-shrink-0" />
                                <a href="mailto:soporte@vallestecnicos.com" className="hover:text-white">soporte@vallestecnicos.com</a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Legal */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-white font-bold mb-2">Legal & Confianza</h4>
                        <nav className="flex flex-col gap-3">
                            <Link href="#" className="text-neutral-400 hover:text-white text-sm transition-colors w-fit">Certificaciones Técnicas</Link>
                            <Link href="#" className="text-neutral-400 hover:text-white text-sm transition-colors w-fit">Política de Privacidad</Link>
                            <Link href="#" className="text-neutral-400 hover:text-white text-sm transition-colors w-fit">Términos de Servicio</Link>
                            <Link href="#" className="text-neutral-400 hover:text-white text-sm transition-colors w-fit">Garantía Real (15 días)</Link>
                        </nav>
                    </div>

                </div>

                {/* Copyright Footer */}
                <div className="pt-8 border-t border-neutral-800/60 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-500">
                    <p>© {currentYear} Valles Técnicos. Todos los derechos reservados.</p>
                    <p>Expertos en reparaciones a domicilio en Valles del Tuy.</p>
                </div>
            </div>
        </footer>
    );
}
