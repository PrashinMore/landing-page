"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type HeroProps = {
  badge: string;
  headline: string;
  highlightedWord: string;
  subheading: string;
  ctaPrimary: string;
  ctaSecondary: string;
  previewImage: string;
  accentClass: string;
  gradientClass: string;
};

export function HeroSection(props: HeroProps) {
  return (
    <section id="home" className={`bg-gradient-to-br ${props.gradientClass}`}>
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-4 py-18 md:grid-cols-2 md:px-6 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <span className="inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-medium text-slate-600 shadow-sm">
            {props.badge}
          </span>
          <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-slate-900 md:text-6xl">
            {props.headline}{" "}
            <span className={props.accentClass}>
              {props.highlightedWord}
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-base text-slate-600 md:text-lg">{props.subheading}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-slate-900/20 transition hover:-translate-y-0.5 hover:bg-slate-800"
            >
              {props.ctaPrimary}
            </a>
            <a
              href="#portfolio"
              className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
            >
              {props.ctaSecondary}
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="relative overflow-hidden rounded-3xl border border-white/70 bg-white p-3 shadow-2xl shadow-slate-900/10"
        >
          <Image
            src={props.previewImage}
            alt="Website preview mockup"
            width={1000}
            height={700}
            className="h-full w-full rounded-2xl object-cover"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
