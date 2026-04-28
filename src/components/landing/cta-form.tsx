"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";

type CtaFormProps = {
  title: string;
  subtitle: string;
  buttonLabel: string;
  accentClass: string;
};

export function CtaFormSection({ title, subtitle, buttonLabel, accentClass }: CtaFormProps) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="mx-auto w-full max-w-6xl px-4 py-18 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5 md:p-12"
      >
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">{title}</h2>
        <p className="mt-3 max-w-2xl text-slate-600">{subtitle}</p>
        <form onSubmit={handleSubmit} className="mt-8 grid gap-4 md:grid-cols-2">
          <input
            required
            placeholder="Your name"
            className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-slate-400"
          />
          <input
            required
            placeholder="Business type (e.g. salon, cafe)"
            className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-slate-400"
          />
          <input
            required
            placeholder="Phone number"
            className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-slate-400"
          />
          <input
            required
            type="email"
            placeholder="Email address"
            className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-slate-400"
          />
          <button
            type="submit"
            className={`md:col-span-2 rounded-xl px-6 py-3 text-sm font-medium text-white shadow-lg transition hover:brightness-95 ${accentClass}`}
          >
            {buttonLabel}
          </button>
        </form>
        {submitted ? (
          <p className="mt-4 text-sm text-emerald-600">Thanks! This is a demo form UI. Connect backend anytime.</p>
        ) : null}
      </motion.div>
    </section>
  );
}
