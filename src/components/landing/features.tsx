"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  Globe,
  MessageCircle,
  Smartphone,
  Users,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { Feature } from "@/types/landing";
import { SectionTitle } from "./section-title";

const ICONS: Record<Feature["icon"], LucideIcon> = {
  globe: Globe,
  users: Users,
  smartphone: Smartphone,
  zap: Zap,
  messageCircle: MessageCircle,
  calendar: Calendar,
};

type FeaturesProps = {
  title: string;
  subtitle: string;
  items: Feature[];
};

export function FeaturesSection({ title, subtitle, items }: FeaturesProps) {
  return (
    <section id="features" className="bg-slate-50">
      <div className="mx-auto w-full max-w-6xl px-4 py-18 md:px-6">
        <SectionTitle title={title} subtitle={subtitle} />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => {
            const Icon = ICONS[item.icon];
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.35 }}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900/5">
                  <Icon className="h-5 w-5 text-slate-700" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
