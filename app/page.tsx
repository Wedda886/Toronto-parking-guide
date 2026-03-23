import { HeroSection } from "../components/HeroSection";
import { ComparisonGrid } from "../components/ComparisonGrid";
import { MapSection } from "../components/MapSection";
import { ProTipBox } from "../components/ProTipBox";

export default function Home() {
  return (
    <main className="min-h-screen city-tech-gradient transition-colors duration-300">
      <HeroSection />

      <div className="max-w-7xl mx-auto">
        <div className="lg:grid lg:grid-cols-[1fr_320px] lg:gap-8">
          <div>
            <ComparisonGrid />
            <MapSection />
          </div>
          <div className="lg:block">
            <ProTipBox />
          </div>
        </div>
      </div>

      <footer className="px-6 py-12 text-center text-sm text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800 mt-16">
        <p>Toronto Downtown Parking Survival Guide 2026 — Park Smart.</p>
      </footer>
    </main>
  );
}
