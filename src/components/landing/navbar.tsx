"use client";

import { NavItem, ThemeKey } from "@/types/landing";

type NavbarProps = {
  items: NavItem[];
  themes: { key: ThemeKey; label: string }[];
  selectedTheme: ThemeKey;
  onThemeChange: (theme: ThemeKey) => void;
};

export function Navbar({ items, themes, selectedTheme, onThemeChange }: NavbarProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-100/80 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <a href="#home" className="text-lg font-semibold text-slate-900">
          Local Business Landing
        </a>
        <div className="hidden items-center gap-6 md:flex">
          {items.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-slate-600 transition hover:text-slate-900">
              {item.label}
            </a>
          ))}
        </div>
        <select
          value={selectedTheme}
          onChange={(e) => onThemeChange(e.target.value as ThemeKey)}
          className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 outline-none ring-indigo-100 transition focus:ring-4"
          aria-label="Choose business style"
        >
          {themes.map((theme) => (
            <option key={theme.key} value={theme.key}>
              {theme.label}
            </option>
          ))}
        </select>
      </nav>
    </header>
  );
}
