import {
  Brain,
  CheckCircle2,
  CalendarDays,
  FileText,
  Wallet,
  Mail,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Assistant",
    description: "Chat with your intelligent personal assistant.",
  },
  {
    icon: CheckCircle2,
    title: "Task Manager",
    description: "Organize and prioritize tasks effortlessly.",
  },
  {
    icon: CalendarDays,
    title: "Smart Calendar",
    description: "Schedule meetings and events with AI support.",
  },
  {
    icon: FileText,
    title: "AI Notes",
    description: "Write, summarize and organize notes instantly.",
  },
  {
    icon: Wallet,
    title: "Finance",
    description: "Track expenses and manage your budget.",
  },
  {
    icon: Mail,
    title: "Email Assistant",
    description: "Generate and reply to emails using AI.",
  },
];

export default function Features() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28">
      <div className="text-center">
        <h2 className="text-4xl font-bold">Everything in One Workspace</h2>

        <p className="mt-4 text-gray-400">
          Spark AI combines productivity, organization and artificial
          intelligence into a single platform.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <div
              key={feature.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 transition duration-300 hover:-translate-y-2 hover:border-violet-500/40"
            >
              <Icon className="mb-5 h-10 w-10 text-violet-400" />

              <h3 className="text-xl font-semibold">
                {feature.title}
              </h3>

              <p className="mt-3 text-gray-400">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}