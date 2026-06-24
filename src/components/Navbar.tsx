"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

// Login destinations for the "Ingreso" dropdown.
// TODO: confirm final URLs with the team (empresas portal pending).
const loginOptions = [
  {
    href: "https://postulate.asignar.cloud",
    external: true,
    title: "Ingreso Empleados",
    subtitle: "Colaboradores en misión",
    icon: "badge",
  },
  {
    href: "#",
    external: false,
    title: "Ingreso Empresas",
    subtitle: "Clientes y empresas aliadas",
    icon: "corporate_fare",
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const loginRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close login dropdown on outside click / Escape
  useEffect(() => {
    if (!loginOpen) return;
    const onClick = (e: MouseEvent) => {
      if (loginRef.current && !loginRef.current.contains(e.target as Node)) {
        setLoginOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLoginOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [loginOpen]);

  const navLinks = [
    { href: "/soluciones", label: "Servicios" },
    { href: "/nosotros", label: "Nosotros" },
    { href: "/vacantes", label: "Vacantes" },
    { href: "/contacto", label: "Contacto" },
  ];

  const linkProps = (external: boolean) =>
    external ? { target: "_blank", rel: "noopener noreferrer" } : {};

  return (
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
          className="font-[var(--font-display)] text-2xl font-extrabold text-brand-navy hover:text-brand-blue transition-colors duration-200"
        >
          Asignar SAS
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8 font-[var(--font-ui)] text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-text-secondary hover:text-brand-blue transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          {/* Ingreso dropdown (Bancolombia-style) */}
          <div className="relative" ref={loginRef}>
            <button
              onClick={() => setLoginOpen((v) => !v)}
              aria-expanded={loginOpen}
              aria-haspopup="true"
              className={`inline-flex items-center gap-1.5 text-sm font-semibold px-5 py-2.5 rounded-full border transition-all duration-200 ${
                loginOpen
                  ? "border-brand-blue text-brand-blue bg-brand-blue/5"
                  : "border-brand-blue/30 text-brand-blue hover:border-brand-blue hover:bg-brand-blue/[0.04]"
              }`}
            >
              <span
                className="material-symbols-outlined text-lg"
                style={{ fontVariationSettings: '"FILL" 0' }}
              >
                lock_open
              </span>
              Ingreso
              <span
                className={`material-symbols-outlined text-lg transition-transform duration-200 ${
                  loginOpen ? "rotate-180" : ""
                }`}
              >
                expand_more
              </span>
            </button>

            {loginOpen && (
              <div
                className="absolute right-0 mt-2 w-72 bg-white rounded-2xl card-elevated p-2 origin-top-right animate-[fadeIn_0.15s_ease-out] z-50"
                role="menu"
              >
                <p className="font-[var(--font-ui)] text-[11px] font-semibold uppercase tracking-[0.1em] text-text-muted px-3 pt-2 pb-1">
                  Ingreso a la plataforma
                </p>
                {loginOptions.map((opt) => (
                  <a
                    key={opt.title}
                    href={opt.href}
                    {...linkProps(opt.external)}
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
                    <span className="material-symbols-outlined text-text-muted text-base group-hover:translate-x-0.5 group-hover:text-brand-blue transition-all">
                      arrow_forward
                    </span>
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
          className="md:hidden text-brand-navy p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
        >
          <span className="material-symbols-outlined text-[28px]">
            {mobileOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 top-20 bg-white z-40 px-4 py-6 flex flex-col gap-2 overflow-y-auto animate-[fadeIn_0.2s_ease-out]">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-lg font-medium text-text-primary py-3 px-4 rounded-xl hover:bg-surface-gray transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <hr className="my-4 border-border" />

          {/* Login group */}
          <p className="font-[var(--font-ui)] text-[11px] font-semibold uppercase tracking-[0.1em] text-text-muted px-4 mb-1">
            Ingreso a la plataforma
          </p>
          {loginOptions.map((opt) => (
            <a
              key={opt.title}
              href={opt.href}
              {...linkProps(opt.external)}
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-3 py-3 px-4 rounded-xl hover:bg-brand-blue/[0.05] transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-brand-blue/[0.08] flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-brand-blue text-xl">
                  {opt.icon}
                </span>
              </div>
              <div>
                <p className="font-[var(--font-ui)] text-base font-semibold text-brand-navy">
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
            className="mt-4 text-center text-base font-medium bg-brand-blue text-white py-3 rounded-full hover:bg-brand-deep-blue transition-colors shadow-[0_4px_14px_0_rgba(0,122,254,0.3)]"
            onClick={() => setMobileOpen(false)}
          >
            Cotizar
          </Link>
        </div>
      )}
    </nav>
  );
}
