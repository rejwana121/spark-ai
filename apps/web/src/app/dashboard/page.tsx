import { auth } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Navbar */}
      <header className="border-b border-slate-800">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
          <div>
            <h1 className="text-2xl font-bold">⚡ Spark AI</h1>
          </div>

          <div className="flex items-center gap-4">
            <UserButton afterSignOutUrl="/sign-in" />
          </div>
        </div>
      </header>

      {/* Dashboard */}
      <section className="mx-auto max-w-7xl px-8 py-10">
        <h2 className="text-4xl font-bold">
          Welcome to Spark AI 🚀
        </h2>

        <p className="mt-2 text-slate-400">
          Your Personal AI Operating System
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-xl font-semibold">🤖 AI Assistant</h3>
            <p className="mt-2 text-slate-400">
              Chat with your AI assistant.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-xl font-semibold">✅ Tasks</h3>
            <p className="mt-2 text-slate-400">
              Manage daily tasks.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-xl font-semibold">📝 Notes</h3>
            <p className="mt-2 text-slate-400">
              Organize notes.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-xl font-semibold">📅 Calendar</h3>
            <p className="mt-2 text-slate-400">
              Track your schedule.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}