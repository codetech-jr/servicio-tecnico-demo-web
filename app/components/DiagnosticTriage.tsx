"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { ClipboardList, SendHorizontal, Lock, AlertCircle, TriangleAlert, Phone } from "lucide-react";

const WA_NUMBER = "584120000000";

const ZONAS = [
    "Charallave Centro",
    "Matalinda",
    "Paso Real",
    "Cúa",
    "San Francisco de Yare",
    "Santa Teresa del Tuy",
    "Ocumare del Tuy",
];

interface FormState {
    nombre: string;
    zona: string;
    equipo: string;
    marca: string;
    sintomas: string;
}

const initialState: FormState = {
    nombre: "",
    zona: "",
    equipo: "",
    marca: "",
    sintomas: "",
};

function isFormValid(f: FormState): boolean {
    return (
        f.nombre.trim().length > 0 &&
        f.zona !== "" &&
        f.equipo.trim().length > 0 &&
        f.sintomas.trim().length > 0
    );
}

export function DiagnosticTriage() {
    const [form, setForm] = useState<FormState>(initialState);

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (!isFormValid(form)) return;

        const msg =
            `🔧 *SOLICITUD DE DIAGNÓSTICO TÉCNICO*\n\n` +
            `👤 *Nombre:* ${form.nombre}\n` +
            `📍 *Zona:* ${form.zona}\n` +
            `⚠️ *Equipo con falla:* ${form.equipo}\n` +
            (form.marca ? `🏷️ *Marca:* ${form.marca}\n` : "") +
            `📋 *Síntomas relatados:*\n${form.sintomas}\n\n` +
            `_Enviado desde la web de diagnóstico automático._`;

        const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
        window.open(url, "_blank", "noopener,noreferrer");
    };

    const valid = isFormValid(form);

    return (
        <section
            id="triage"
            className="bg-gradient-to-br from-blue-50 via-white to-slate-50 py-20 px-4 sm:px-6 lg:px-8"
        >
            <div className="max-w-3xl mx-auto">
                {/* Section header */}
                <div className="text-center mb-10">
                    <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
                        Sistema inteligente
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 leading-tight">
                        Genera Tu Ticket de Diagnóstico
                    </h2>
                    <p className="mt-4 text-gray-500 text-base max-w-lg mx-auto leading-relaxed">
                        Completa el formulario y en segundos enviaremos toda la información directamente a nuestro técnico vía WhatsApp — sin llamadas intermedias, sin demoras.
                    </p>
                </div>

                {/* Info banner */}
                <div className="flex items-start gap-3 bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
                    <AlertCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <p className="text-blue-800 text-sm leading-relaxed">
                        <strong>¿Por qué este sistema?</strong> Recopilar los datos técnicos antes del diagnóstico permite que nuestro técnico llegue preparado con las herramientas correctas, reduciendo el tiempo de reparación hasta un 60%.
                    </p>
                </div>

                {/* Emergency Call-Out */}
                <div className="bg-orange-50/80 border border-orange-200 rounded-2xl p-5 sm:p-6 mb-8 lg:mb-12 shadow-sm text-left">
                    <div className="flex items-start gap-4">
                        <TriangleAlert className="w-8 h-8 text-orange-500 flex-shrink-0 mt-1" strokeWidth={2.5} />
                        <div>
                            <strong className="text-orange-900 block font-semibold mb-1 text-base sm:text-lg">
                                ¿Es una emergencia grave?
                            </strong>
                            <p className="text-orange-800 text-sm sm:text-base leading-relaxed">
                                (Inundaciones, chispas eléctricas, cortocircuitos).<br className="sm:hidden" /> No esperes el ticket, llama directo al soporte de emergencia.
                            </p>
                            <a href="tel:+584120000000" className="inline-flex items-center gap-2 mt-4 text-orange-700 font-bold hover:text-orange-500 hover:underline transition-all">
                                <Phone className="w-5 h-5" />
                                +58 412-000-0000
                            </a>
                        </div>
                    </div>
                </div>
                {/* Form card */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-xl shadow-blue-100/40 p-6 sm:p-8">
                    <div className="flex items-center gap-3 mb-7 pb-5 border-b border-gray-100">
                        <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                            <ClipboardList className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                            <p className="font-bold text-blue-950">Ficha de Pre-Diagnóstico</p>
                            <p className="text-gray-400 text-xs">Todos los campos marcados con * son requeridos</p>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                        {/* Nombre */}
                        <div>
                            <label htmlFor="nombre" className="block text-sm font-semibold text-gray-700 mb-1.5">
                                Nombre completo <span className="text-orange-500">*</span>
                            </label>
                            <input
                                id="nombre"
                                name="nombre"
                                type="text"
                                value={form.nombre}
                                onChange={handleChange}
                                placeholder="Ej: María González"
                                className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-base sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                            />
                        </div>

                        {/* Zona */}
                        <div>
                            <label htmlFor="zona" className="block text-sm font-semibold text-gray-700 mb-1.5">
                                Zona / Sector <span className="text-orange-500">*</span>
                            </label>
                            <select
                                id="zona"
                                name="zona"
                                value={form.zona}
                                onChange={handleChange}
                                className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-base sm:text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                            >
                                <option value="">Selecciona tu zona...</option>
                                {ZONAS.map((z) => (
                                    <option key={z} value={z}>
                                        {z}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Equipo y Marca en fila */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div>
                                <label htmlFor="equipo" className="block text-sm font-semibold text-gray-700 mb-1.5">
                                    Equipo con falla <span className="text-orange-500">*</span>
                                </label>
                                <input
                                    id="equipo"
                                    name="equipo"
                                    type="text"
                                    value={form.equipo}
                                    onChange={handleChange}
                                    placeholder="Ej: Aire acondicionado Split"
                                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                />
                            </div>
                            <div>
                                <label htmlFor="marca" className="block text-sm font-semibold text-gray-700 mb-1.5">
                                    Marca <span className="text-gray-400 font-normal">(opcional)</span>
                                </label>
                                <input
                                    id="marca"
                                    name="marca"
                                    type="text"
                                    value={form.marca}
                                    onChange={handleChange}
                                    placeholder="Ej: LG, Samsung, Midea..."
                                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                />
                            </div>
                        </div>

                        {/* Síntomas */}
                        <div>
                            <label htmlFor="sintomas" className="block text-sm font-semibold text-gray-700 mb-1.5">
                                Describe los síntomas <span className="text-orange-500">*</span>
                            </label>
                            <textarea
                                id="sintomas"
                                name="sintomas"
                                rows={4}
                                value={form.sintomas}
                                onChange={handleChange}
                                placeholder="Ej: El equipo enciende pero no enfría, hace un ruido extraño y gotea agua por la parte delantera..."
                                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                            />
                        </div>

                        {/* Submit button */}
                        <button
                            type="submit"
                            disabled={!valid}
                            className={`mt-2 w-full flex items-center justify-center gap-3 font-bold text-base py-4 px-6 rounded-xl transition-all duration-300 ${valid
                                ? "bg-blue-600 hover:bg-blue-500 text-white shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 cursor-pointer"
                                : "bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200"
                                }`}
                        >
                            {valid ? (
                                <>
                                    <SendHorizontal className="w-5 h-5 flex-shrink-0" />
                                    Generar Ticket y Enviar por WhatsApp
                                </>
                            ) : (
                                <>
                                    <Lock className="w-4 h-4 flex-shrink-0" />
                                    Completa los campos requeridos para continuar
                                </>
                            )}
                        </button>

                        {!valid && (
                            <p className="text-center text-xs text-gray-400">
                                El botón se activará cuando completes: nombre, zona, equipo y síntomas.
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
}
