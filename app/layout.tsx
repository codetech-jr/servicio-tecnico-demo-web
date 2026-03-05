import type { Metadata } from "next";
import "./globals.css";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";

export const metadata: Metadata = {
    title: "Técnicos Confiables en Charallave | Servicios a Domicilio - Valles del Tuy",
    description:
        "Servicio técnico profesional en Charallave, Cúa y todo el Valles del Tuy. Reparación de Aire Acondicionado, Electricidad y Plomería a domicilio. ¡Solicita tu revisión hoy!",
    keywords: "técnico, reparación, aire acondicionado, electricidad, plomería, Charallave, Valles del Tuy, Cúa",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es">
            <body className="antialiased">
                {children}
                <FloatingWhatsApp />
            </body>
        </html>
    );
}
