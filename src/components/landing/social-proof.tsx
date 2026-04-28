"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Testimonial } from "@/types/landing";
import { SectionTitle } from "./section-title";

type SocialProofProps = {
  title: string;
  subtitle: string;
  testimonials: Testimonial[];
};

export function SocialProofSection({ title, subtitle, testimonials }: SocialProofProps) {
  return (
    <section id="reviews" className="mx-auto w-full max-w-6xl px-4 py-18 md:px-6">
      <SectionTitle title={title} subtitle={subtitle} />
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {testimonials.map((item, index) => (
          <motion.article
            key={item.business}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.4 }}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="mb-3 flex items-center gap-1">
              {Array.from({ length: item.rating }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-sm leading-relaxed text-slate-600">&ldquo;{item.quote}&rdquo;</p>
            <div className="mt-5">
              <p className="text-sm font-semibold text-slate-900">{item.name}</p>
              <p className="text-xs text-slate-500">{item.business}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
