"use client";

import { motion } from "framer-motion";
import { BeforeAfterCard } from "@/types/landing";
import { SectionTitle } from "./section-title";

type BeforeAfterProps = {
  title: string;
  subtitle: string;
  cards: BeforeAfterCard[];
};

export function BeforeAfterSection({ title, subtitle, cards }: BeforeAfterProps) {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-18 md:px-6">
      <SectionTitle title={title} subtitle={subtitle} />
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {cards.map((card, index) => (
          <motion.article
            key={card.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.4 }}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <h3 className="text-lg font-semibold text-slate-900">{card.title}</h3>
            <div className="mt-4 rounded-xl bg-rose-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-rose-700">Before</p>
              <p className="mt-1 text-sm text-rose-900">{card.before}</p>
            </div>
            <div className="mt-3 rounded-xl bg-emerald-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">After</p>
              <p className="mt-1 text-sm text-emerald-900">{card.after}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
