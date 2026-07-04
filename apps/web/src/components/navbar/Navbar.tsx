"use client";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0B1120]/80 backdrop-blur-lg">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <h1 className="text-2xl font-bold">
          <span className="text-violet-400">Spark</span> AI
        </h1>

        <nav className="hidden gap-8 text-gray-300 md:flex">
          <a href="#">Features</a>
          <a href="#">Solutions</a>
          <a href="#">Pricing</a>
          <a href="#">About</a>
        </nav>

        <button className="rounded-xl bg-violet-600 px-5 py-2 font-medium hover:bg-violet-500">
          Sign In
        </button>
      </div>
    </header>
  );
}