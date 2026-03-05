"use client";

import { MessageCircle } from "lucide-react";

const WA_NUMBER = "584120000000";
const WA_MSG = encodeURIComponent(
    "Hola, vengo de la web. Requiero sus servicios técnicos, ¿pueden ayudarme?"
);

export function FloatingWhatsApp() {
    const handleClick = () => {
        window.open(
            `https://wa.me/${WA_NUMBER}?text=${WA_MSG}`,
            "_blank",
            "noopener,noreferrer"
        );
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
            {/* Tooltip label */}
            <div className="bg-white text-blue-950 text-xs font-semibold px-3 py-1.5 rounded-full shadow-md border border-gray-100 animate-pulse">
                Solicita revisión ahora
            </div>

            {/* Main button */}
            <button
                onClick={handleClick}
                aria-label="Contactar por WhatsApp"
                className="relative flex items-center justify-center w-16 h-16 bg-green-500 hover:bg-green-400 text-white rounded-full shadow-xl shadow-green-500/40 hover:shadow-green-500/60 transition-all duration-300 hover:scale-110 animate-bounce"
            >
                <MessageCircle className="w-7 h-7" />

                {/* Online badge (red dot with "pulsing" ring) */}
                <span className="absolute -top-1 -right-1 flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 items-center justify-center">
                        <span className="text-white text-[8px] font-bold leading-none">1</span>
                    </span>
                </span>
            </button>
        </div>
    );
}
