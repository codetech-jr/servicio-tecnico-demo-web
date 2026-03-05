import { TopBar } from "./components/TopBar";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { CoverageZones } from "./components/CoverageZones";
import { Services } from "./components/Services";
import { SecurityProtocol } from "./components/SecurityProtocol";
import { DiagnosticTriage } from "./components/DiagnosticTriage";
import { CorporateFooter } from "./components/CorporateFooter";

export default function Home() {
    return (
        <main>
            <TopBar />
            <Navbar />
            <Hero />
            <CoverageZones />
            <Services />
            <SecurityProtocol />
            <DiagnosticTriage />
            <CorporateFooter />
        </main>
    );
}
