import { MapPin, ShieldCheck } from "lucide-react";

export function TopBar() {
    return (
        <div className="w-full bg-blue-950 py-2 px-4">
            <div className="max-w-6xl mx-auto flex items-center justify-between">
                <div className="flex items-center gap-2 text-white text-xs sm:text-sm">
                    <MapPin className="w-3.5 h-3.5 text-orange-400 flex-shrink-0" />
                    <span>Cobertura total en Charallave y Valles del Tuy</span>
                </div>
                <div className="hidden md:flex items-center gap-2 text-white text-sm">
                    <ShieldCheck className="w-3.5 h-3.5 text-green-400 flex-shrink-0" />
                    <span>Garantía de servicio técnico</span>
                </div>
            </div>
        </div>
    );
}
