import Link from "next/link";

const sedes = [
  { nombre: "Medellín", direccion: "Sede Principal" },
  { nombre: "Bogotá", direccion: "Sede Bogotá" },
  { nombre: "Cali", direccion: "Sede Cali" },
  { nombre: "Barranquilla", direccion: "Sede Barranquilla" },
  { nombre: "Cartagena", direccion: "Sede Cartagena" },
  { nombre: "Rionegro", direccion: "Sede Rionegro" },
  { nombre: "Pereira", direccion: "Sede Eje Cafetero" },
];

const legalLinks = [
  { href: "#", label: "Políticas de privacidad" },
  { href: "#", label: "Tratamiento de datos" },
  { href: "#", label: "Responsabilidad social" },
  { href: "#", label: "Ética corporativa" },
  { href: "#", label: "SAGRILAFT" },
  { href: "#", label: "PTEE" },
];

const socialLinks = [
  {
    href: "https://www.instagram.com/asignar_sas",
    label: "Instagram",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    href: "https://www.linkedin.com/company/18033497",
    label: "LinkedIn",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    href: "https://www.facebook.com/asignartemporal",
    label: "Facebook",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    href: "https://www.tiktok.com/@asignar_sas",
    label: "TikTok",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="font-[var(--font-display)] text-2xl font-extrabold">
              Asignar SAS
            </h3>
            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
              Más de 20 años conectando talento y empresas para construir el
              futuro laboral de Colombia.
            </p>
            <p className="text-xs text-white/40">
              &quot;Creemos en ti y en tu talento&quot;
            </p>
            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-brand-blue hover:text-white transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Sedes */}
          <div>
            <h4 className="font-[var(--font-ui)] text-sm font-bold uppercase tracking-wider mb-4 text-white/90">
              Sedes
            </h4>
            <ul className="space-y-2.5">
              {sedes.map((sede) => (
                <li key={sede.nombre}>
                  <span className="text-sm text-white/60 hover:text-brand-light-blue transition-colors cursor-default">
                    {sede.nombre}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-[var(--font-ui)] text-sm font-bold uppercase tracking-wider mb-4 text-white/90">
              Legal y Políticas
            </h4>
            <ul className="space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-brand-light-blue transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-[var(--font-ui)] text-sm font-bold uppercase tracking-wider mb-4 text-white/90">
              Contacto
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-brand-light-blue text-lg mt-0.5">
                  mail
                </span>
                <div>
                  <p className="text-xs text-white/40">General</p>
                  <a
                    href="mailto:marketingdigital@asignar.com.co"
                    className="text-sm text-white/70 hover:text-brand-light-blue transition-colors"
                  >
                    marketingdigital@asignar.com.co
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-brand-light-blue text-lg mt-0.5">
                  shield
                </span>
                <div>
                  <p className="text-xs text-white/40">Línea Ética (SQR)</p>
                  <a
                    href="mailto:sqr@asignar.com.co"
                    className="text-sm text-white/70 hover:text-brand-light-blue transition-colors"
                  >
                    sqr@asignar.com.co
                  </a>
                </div>
              </li>
              <li className="pt-2">
                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-1 text-sm font-medium text-brand-light-blue hover:text-white transition-colors"
                >
                  Contáctanos
                  <span className="material-symbols-outlined text-base">
                    arrow_forward
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-5 px-4 md:px-6">
        <div className="max-w-[1280px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Asignar SAS. Todos los derechos
            reservados.
          </p>
          <p className="text-xs text-white/30">
            NIT: Empresa de Servicios Temporales · Ley 50 de 1990
          </p>
        </div>
      </div>
    </footer>
  );
}
