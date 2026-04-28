"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { PortfolioItem } from "@/types/landing";
import { SectionTitle } from "./section-title";

type PortfolioProps = {
  title: string;
  subtitle: string;
  items: PortfolioItem[];
};

export function PortfolioSection({ title, subtitle, items }: PortfolioProps) {
  return (
    <section id="portfolio" className="bg-slate-50">
      <div className="mx-auto w-full max-w-6xl px-4 py-18 md:px-6">
        <SectionTitle title={title} subtitle={subtitle} />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {items.map((item, index) => (
            <motion.a
              key={item.title}
              href={item.href}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={item.image}
                  alt={`${item.businessType} template preview`}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                  <ExternalLink className="h-4 w-4 text-slate-500" />
                </div>
                <p className="mt-1 text-sm font-medium text-slate-500">{item.businessType}</p>
                <p className="mt-3 text-sm text-slate-600">{item.blurb}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
