"use client";

import { Wrench, Zap, Droplets, Check } from "lucide-react";
import { motion } from "framer-motion";

const services = [
    {
        icon: Wrench,
        iconColor: "text-blue-600",
        iconBg: "bg-blue-50",
        borderHover: "hover:border-blue-300",
        title: "Aire Acondicionado",
        description: "Instalación, mantenimiento y reparación de equipos Split y de ventana.",
        items: [
            "Mantenimiento preventivo de Split",
            "Carga y recuperación de gas refrigerante",
            "Instalación de equipos nuevos",
        ],
    },
    {
        icon: Zap,
        iconColor: "text-orange-500",
        iconBg: "bg-orange-50",
        borderHover: "hover:border-orange-300",
        title: "Electricidad Residencial",
        description: "Diagnóstico, reparación y actualización de sistemas eléctricos en el hogar.",
        items: [
            "Instalación de protectores de voltaje",
            "Revisión y cambio de tableros eléctricos",
            "Instalación de puntos de luz y tomacorrientes",
        ],
    },
    {
        icon: Droplets,
        iconColor: "text-cyan-500",
        iconBg: "bg-cyan-50",
        borderHover: "hover:border-cyan-300",
        title: "Plomería y Bombas",
        description: "Soluciones completas para tu sistema de agua — desde filtraciones hasta hidroneumáticos.",
        items: [
            "Instalación y reparación de hidroneumáticos",
            "Destape y reparación de tuberías",
            "Instalación de bombas de agua sumergibles",
        ],
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Services() {
    return (
        <section id="servicios" className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                {/* Section header */}
                <div className="text-center mb-14">
                    <span className="inline-block text-orange-500 font-semibold text-sm uppercase tracking-widest mb-3">
                        Lo que hacemos
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 leading-tight">
                        Servicios Especializados a Tu Puerta
                    </h2>
                    <p className="mt-4 text-gray-500 text-lg max-w-xl mx-auto">
                        Cubrimos las 3 áreas técnicas más críticas del hogar, con técnicos experimentados y herramientas profesionales.
                    </p>
                </div>

                {/* Cards grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
                >
                    {services.map((service) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={service.title}
                                variants={cardVariants}
                                className={`bg-white rounded-2xl p-7 border-2 border-transparent ${service.borderHover} shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col gap-5`}
                            >
                                {/* Icon */}
                                <div className={`w-14 h-14 ${service.iconBg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                                    <Icon className={`w-7 h-7 ${service.iconColor}`} />
                                </div>

                                {/* Title & description */}
                                <div>
                                    <h3 className="text-xl font-bold text-blue-950 mb-2">{service.title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
                                </div>

                                {/* Service list */}
                                <ul className="flex flex-col gap-2.5 mt-auto">
                                    {service.items.map((item) => (
                                        <li key={item} className="flex items-start gap-2.5 text-sm text-gray-700">
                                            <span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                                                <Check className="w-3 h-3 text-green-600" strokeWidth={3} />
                                            </span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        );
                    })}
                </motion.div>
                {/* Bottom note */}
                <p className="text-center text-gray-400 text-sm mt-10">
                    ¿No ves tu problema aquí?{" "}
                    <a
                        href={`https://wa.me/584120000000?text=${encodeURIComponent("Hola, tengo una consulta técnica que no encontré en la web.")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 font-medium underline underline-offset-2"
                    >
                        Consúltanos por WhatsApp →
                    </a>
                </p>
            </div>
        </section>
    );
}
