import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import Features from "@/components/features/Features";
import Stats from "@/components/stats/Stats";
import { getHealth } from "@/lib/api";

export default async function Home() {
  const health = await getHealth();

  return (
    <main className="min-h-screen bg-[#0B1120] text-white">
      <Navbar />

      <Hero />

      <Features />

      <Stats />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-2xl border border-green-500/20 bg-green-500/10 p-6">
          <h2 className="text-2xl font-bold text-green-400">
            Backend Status
          </h2>

          <p className="mt-3 text-lg">
            Status: <strong>{health.status}</strong>
          </p>
        </div>
      </section>
    </main>
  );
}