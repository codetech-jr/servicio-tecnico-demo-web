"use client";

import { MapPin } from "lucide-react";
import { motion } from "framer-motion";

export function CoverageZones() {
    return (
        <div className="bg-gray-100 border-y border-gray-200 py-3.5 px-4 overflow-hidden relative">
            <div className="max-w-6xl mx-auto flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex items-center gap-2.5 text-sm sm:text-base text-gray-700 text-center"
                >
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-sm flex-shrink-0">
                        <MapPin className="h-3.5 w-3.5 text-blue-600" />
                    </div>
                    <p>
                        Atención rápida en: <strong className="text-blue-950">Charallave Centro</strong>, <strong className="text-blue-950">Ciudad Miranda</strong>, <strong className="text-blue-950">Matalinda</strong>, <strong className="text-blue-950">Pitahaya</strong>, <strong className="text-blue-950">El Dividive</strong> y zonas aledañas.
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
