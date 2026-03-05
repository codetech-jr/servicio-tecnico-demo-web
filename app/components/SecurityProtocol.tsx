"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Clock, ShieldCheck } from "lucide-react";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 }
    },
};

export function SecurityProtocol() {
    return (
        <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="inline-block text-green-600 font-bold text-xs uppercase tracking-widest mb-3 bg-green-50 px-3 py-1 rounded-full">
                        Protocolo de Seguridad
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950">
                        Tu tranquilidad es nuestra prioridad
                    </h2>
                </div>

                {/* 3 Columns Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
                >
                    {/* Column 1 */}
                    <motion.div variants={itemVariants} className="flex flex-col items-center text-center group">
                        <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-blue-100 group-hover:scale-110 group-hover:bg-blue-600 transition-all duration-300">
                            <BadgeCheck className="w-10 h-10 text-blue-600 group-hover:text-white transition-colors" strokeWidth={1.5} />
                        </div>
                        <h3 className="text-xl font-bold text-blue-950 mb-3">Identidad Verificada</h3>
                        <p className="text-gray-500 leading-relaxed">
                            Todos nuestros técnicos están registrados y uniformados. Te enviamos la ficha del técnico antes de que llegue a tu puerta.
                        </p>
                    </motion.div>

                    {/* Column 2 */}
                    <motion.div variants={itemVariants} className="flex flex-col items-center text-center group">
                        <div className="w-20 h-20 bg-orange-50 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-orange-100 group-hover:scale-110 group-hover:bg-orange-500 transition-all duration-300">
                            <Clock className="w-10 h-10 text-orange-500 group-hover:text-white transition-colors" strokeWidth={1.5} />
                        </div>
                        <h3 className="text-xl font-bold text-blue-950 mb-3">Atención Inmediata</h3>
                        <p className="text-gray-500 leading-relaxed">
                            Sabemos que tu tiempo vale. Por eso resolvemos el <strong>90% de las incidencias el mismo día</strong> de la visita.
                        </p>
                    </motion.div>

                    {/* Column 3 */}
                    <motion.div variants={itemVariants} className="flex flex-col items-center text-center group">
                        <div className="w-20 h-20 bg-green-50 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-green-100 group-hover:scale-110 group-hover:bg-green-500 transition-all duration-300">
                            <ShieldCheck className="w-10 h-10 text-green-600 group-hover:text-white transition-colors" strokeWidth={1.5} />
                        </div>
                        <h3 className="text-xl font-bold text-blue-950 mb-3">Garantía Real</h3>
                        <p className="text-gray-500 leading-relaxed">
                            Sin letras pequeñas. Si el equipo presenta exactamente la misma falla en los próximos 15 días, volvemos <strong>sin costo</strong>.
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
