"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Login destinations (portales reales de Asignar)
const loginOptions = [
  {
    href: "https://www.asignar.com.co/_admin/usuario.php",
    title: "Ingreso Empleados",
    subtitle: "Colaboradores en misión",
    icon: "badge",
  },
  {
    href: "https://www.asignar.com.co/_admin/",
    title: "Ingreso Empresas",
    subtitle: "Clientes y empresas aliadas",
    icon: "corporate_fare",
  },
];

// Políticas — PDFs oficiales (asignar.com.co/build/img/)
const POL = "https://www.asignar.com.co/build/img/";
const policies = [
  { label: "Responsabilidad social", file: "Politica_de_Responsabilidad_Social_Corporativa.pdf" },
  { label: "Tratamiento de datos personales", file: "Politica_Tratamiento_Datos_Personales.pdf" },
  { label: "Datos por videovigilancia", file: "Politica_Tratamiento_Datos_Captados_por_Sistemas_Videovigilancia.pdf" },
  { label: "Prácticas laborales", file: "Politica_de_Practicas_Laborales.pdf" },
  { label: "Política ambiental", file: "Politica_Ambiental.pdf" },
  { label: "Ética corporativa", file: "Etica_Corporativa.pdf" },
  { label: "Sostenibilidad", file: "Politica_de_Sostenibilidad.pdf" },
  { label: "Inhabilidades por delitos sexuales", file: "Politica_de_Inhabilidades_por_Delitos_Sexuales.pdf" },
  { label: "Derechos humanos", file: "Politica_de_Derechos_Humanos.pdf" },
  { label: "Ética", file: "Politica_de_Etica.pdf" },
  { label: "SAGRILAFT", file: "Manual_de_Procedimientos_Politicas_SAGRILAFT.pdf" },
  { label: "PTEE", file: "Manual_de_Procedimientos_Politicas_PTEE.pdf" },
];

const navLinks = [
  { href: "/servicios", label: "Servicios" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/vacantes", label: "Vacantes" },
  { href: "/faq", label: "FAQ" },
  { href: "/contacto", label: "Contacto" },
];

/* Inline SVG icons — bulletproof (no icon-font dependency) */
const IconMenu = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);
const IconClose = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);
const IconChevron = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [polOpen, setPolOpen] = useState(false);
  const loginRef = useRef<HTMLDivElement>(null);
  const polRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Cerrar dropdowns al hacer clic afuera / Escape
  useEffect(() => {
    if (!loginOpen && !polOpen) return;
    const onClick = (e: MouseEvent) => {
      const t = e.target as Node;
      if (loginRef.current && !loginRef.current.contains(t)) setLoginOpen(false);
      if (polRef.current && !polRef.current.contains(t)) setPolOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLoginOpen(false);
        setPolOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [loginOpen, polOpen]);

  return (
    <>
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-white/80 backdrop-blur-md border-b border-transparent"
      }`}
    >
      <div className="flex justify-between items-center w-full px-4 md:px-6 max-w-[1280px] mx-auto h-20">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center shrink-0"
          aria-label="Asignar Servicios Temporales — Inicio"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-asignar.svg"
            alt="Asignar Servicios Temporales"
            className="h-8 md:h-9 w-auto"
          />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-7 font-[var(--font-ui)] text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-1 transition-colors duration-200 ${
                  isActive
                    ? "text-brand-blue"
                    : "text-text-secondary hover:text-brand-blue"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-brand-blue rounded-full" />
                )}
              </Link>
            );
          })}

          {/* Políticas dropdown */}
          <div className="relative" ref={polRef}>
            <button
              onClick={() => {
                setPolOpen((v) => !v);
                setLoginOpen(false);
              }}
              aria-expanded={polOpen}
              aria-haspopup="true"
              className="inline-flex items-center gap-1 text-text-secondary hover:text-brand-blue transition-colors duration-200"
            >
              Políticas
              <IconChevron
                className={`h-4 w-4 transition-transform duration-200 ${
                  polOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {polOpen && (
              <div className="absolute left-0 mt-3 w-80 bg-white rounded-2xl card-elevated p-2 max-h-[70vh] overflow-y-auto z-50 animate-[fadeIn_0.15s_ease-out]">
                {policies.map((p) => (
                  <a
                    key={p.label}
                    href={`${POL}${p.file}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setPolOpen(false)}
                    className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm text-text-secondary hover:bg-brand-blue/[0.05] hover:text-brand-navy transition-colors"
                  >
                    <span className="material-symbols-outlined text-brand-blue text-base shrink-0">
                      picture_as_pdf
                    </span>
                    {p.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          {/* Ingreso dropdown */}
          <div className="relative" ref={loginRef}>
            <button
              onClick={() => {
                setLoginOpen((v) => !v);
                setPolOpen(false);
              }}
              aria-expanded={loginOpen}
              aria-haspopup="true"
              className={`inline-flex items-center gap-1.5 text-sm font-semibold px-5 py-2.5 rounded-full border transition-all duration-200 ${
                loginOpen
                  ? "border-brand-blue text-brand-blue bg-brand-blue/5"
                  : "border-brand-blue/30 text-brand-blue hover:border-brand-blue hover:bg-brand-blue/[0.04]"
              }`}
            >
              <span className="material-symbols-outlined text-lg">lock_open</span>
              Ingreso
              <IconChevron
                className={`h-4 w-4 transition-transform duration-200 ${
                  loginOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {loginOpen && (
              <div
                className="absolute right-0 mt-2 w-72 bg-white rounded-2xl card-elevated p-2 animate-[fadeIn_0.15s_ease-out] z-50"
                role="menu"
              >
                <p className="font-[var(--font-ui)] text-[11px] font-semibold uppercase tracking-[0.1em] text-text-muted px-3 pt-2 pb-1">
                  Ingreso a la plataforma
                </p>
                {loginOptions.map((opt) => (
                  <a
                    key={opt.title}
                    href={opt.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setLoginOpen(false)}
                    className="group flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-brand-blue/[0.05] transition-colors"
                    role="menuitem"
                  >
                    <div className="w-10 h-10 rounded-xl bg-brand-blue/[0.08] flex items-center justify-center shrink-0 group-hover:bg-brand-blue transition-colors">
                      <span className="material-symbols-outlined text-brand-blue text-xl group-hover:text-white transition-colors">
                        {opt.icon}
                      </span>
                    </div>
                    <div className="flex-1">
                      <p className="font-[var(--font-ui)] text-sm font-semibold text-brand-navy">
                        {opt.title}
                      </p>
                      <p className="font-[var(--font-ui)] text-xs text-text-muted">
                        {opt.subtitle}
                      </p>
                    </div>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="w-4 h-4 text-text-muted group-hover:translate-x-0.5 group-hover:text-brand-blue transition-all"
                      aria-hidden="true"
                    >
                      <path
                        d="M4 12h15M13 5l7 7-7 7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/contacto"
            className="text-sm font-medium bg-brand-blue text-white px-5 py-2.5 rounded-full hover:bg-brand-deep-blue active:scale-[0.98] transition-all duration-200 shadow-[0_4px_14px_0_rgba(0,122,254,0.3)]"
          >
            Cotizar
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex h-11 w-11 items-center justify-center rounded-xl text-brand-navy hover:bg-surface-gray transition-colors -mr-2"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <IconClose className="h-6 w-6" />
          ) : (
            <IconMenu className="h-6 w-6" />
          )}
        </button>
      </div>
    </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden fixed left-0 right-0 top-20 bottom-0 bg-white z-40 px-4 pt-4 pb-[max(1rem,env(safe-area-inset-bottom))] flex flex-col gap-0.5 overflow-y-auto overscroll-contain animate-[fadeIn_0.2s_ease-out]">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-base font-medium py-2.5 px-4 rounded-xl transition-colors ${
                  isActive
                    ? "text-brand-blue bg-brand-blue/[0.06]"
                    : "text-text-primary hover:bg-surface-gray"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}

          {/* Políticas (mobile) */}
          <details className="group px-4 py-2.5 rounded-xl hover:bg-surface-gray transition-colors">
            <summary className="text-base font-medium text-text-primary cursor-pointer list-none flex items-center justify-between">
              Políticas
              <IconChevron className="h-5 w-5 transition-transform duration-200 group-open:rotate-180" />
            </summary>
            <div className="mt-2 flex flex-col">
              {policies.map((p) => (
                <a
                  key={p.label}
                  href={`${POL}${p.file}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2 py-1.5 pl-2 text-sm text-text-secondary"
                >
                  <span className="material-symbols-outlined text-brand-blue text-base shrink-0">
                    picture_as_pdf
                  </span>
                  {p.label}
                </a>
              ))}
            </div>
          </details>

          <hr className="my-2.5 border-border" />

          {/* Login group */}
          <p className="font-[var(--font-ui)] text-[11px] font-semibold uppercase tracking-[0.1em] text-text-muted px-4 mb-0.5">
            Ingreso a la plataforma
          </p>
          {loginOptions.map((opt) => (
            <a
              key={opt.title}
              href={opt.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-3 py-2.5 px-4 rounded-xl hover:bg-brand-blue/[0.05] transition-colors"
            >
              <div className="w-9 h-9 rounded-xl bg-brand-blue/[0.08] flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-brand-blue text-lg">
                  {opt.icon}
                </span>
              </div>
              <div>
                <p className="font-[var(--font-ui)] text-sm font-semibold text-brand-navy">
                  {opt.title}
                </p>
                <p className="font-[var(--font-ui)] text-xs text-text-muted">
                  {opt.subtitle}
                </p>
              </div>
            </a>
          ))}

          <Link
            href="/contacto"
            className="mt-auto shrink-0 text-center text-base font-medium bg-brand-blue text-white py-3 rounded-full hover:bg-brand-deep-blue transition-colors shadow-[0_4px_14px_0_rgba(0,122,254,0.3)]"
            onClick={() => setMobileOpen(false)}
          >
            Cotizar
          </Link>
        </div>
      )}
    </>
  );
}
