type FooterProps = {
  agencyName: string;
  contactEmail: string;
  phone: string;
  tagline: string;
  socialLinks: { label: string; href: string }[];
};

export function Footer({ agencyName, contactEmail, phone, tagline, socialLinks }: FooterProps) {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col justify-between gap-6 px-4 py-10 md:flex-row md:px-6">
        <div>
          <p className="text-base font-semibold text-slate-900">{agencyName}</p>
          <p className="mt-2 text-sm text-slate-600">{tagline}</p>
          <p className="mt-2 text-sm text-slate-600">{contactEmail}</p>
          <p className="text-sm text-slate-600">{phone}</p>
        </div>
        <div className="flex gap-4">
          {socialLinks.map((link) => (
            <a key={link.label} href={link.href} className="text-sm text-slate-600 transition hover:text-slate-900">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
