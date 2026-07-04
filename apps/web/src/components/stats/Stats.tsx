"use client";

import { motion } from "framer-motion";

const stats = [
  {
    number: "50K+",
    title: "Active Users",
  },
  {
    number: "1M+",
    title: "Tasks Completed",
  },
  {
    number: "99.9%",
    title: "System Uptime",
  },
  {
    number: "24/7",
    title: "AI Assistance",
  },
];

export default function Stats() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
        {stats.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.15,
            }}
            className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur-xl"
          >
            <h2 className="text-5xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              {item.number}
            </h2>

            <p className="mt-3 text-gray-400">
              {item.title}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}