export default function DashboardPreview() {
  return (
    <div className="mt-20 w-full max-w-5xl rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl">

      <div className="mb-6 flex gap-2">
        <div className="h-3 w-3 rounded-full bg-red-400" />
        <div className="h-3 w-3 rounded-full bg-yellow-400" />
        <div className="h-3 w-3 rounded-full bg-green-400" />
      </div>

      <div className="grid gap-5 md:grid-cols-3">

        <div className="rounded-2xl bg-violet-500/20 p-6">
          <h3 className="font-bold">Today's Tasks</h3>
          <p className="mt-2 text-sm text-gray-300">
            12 tasks scheduled
          </p>
        </div>

        <div className="rounded-2xl bg-cyan-500/20 p-6">
          <h3 className="font-bold">AI Notes</h3>
          <p className="mt-2 text-sm text-gray-300">
            43 smart notes
          </p>
        </div>

        <div className="rounded-2xl bg-pink-500/20 p-6">
          <h3 className="font-bold">Productivity</h3>
          <p className="mt-2 text-sm text-gray-300">
            +96% this week
          </p>
        </div>

      </div>
    </div>
  );
}