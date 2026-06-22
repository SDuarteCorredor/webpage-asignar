"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const navLinks = [
    { href: "/soluciones", label: "Servicios" },
    { href: "/nosotros", label: "Nosotros" },
    { href: "/vacantes", label: "Vacantes" },
    { href: "/contacto", label: "Contacto" },
  ];

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
          <Link
            href="/postulate"
            className="text-sm font-medium text-brand-blue border border-brand-blue px-5 py-2.5 rounded-full hover:bg-brand-blue/5 transition-colors duration-200"
          >
            Postúlate
          </Link>
          <Link
            href="/contacto"
            className="text-sm font-medium bg-brand-blue text-white px-5 py-2.5 rounded-full hover:bg-brand-deep-blue transition-colors duration-200 shadow-[0_4px_14px_0_rgba(0,122,254,0.3)]"
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
        <div className="md:hidden fixed inset-0 top-20 bg-white z-40 px-4 py-6 flex flex-col gap-2 animate-[fadeIn_0.2s_ease-out]">
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
          <Link
            href="/postulate"
            className="text-center text-base font-medium text-brand-blue border border-brand-blue py-3 rounded-full hover:bg-brand-blue/5 transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Postúlate
          </Link>
          <Link
            href="/contacto"
            className="text-center text-base font-medium bg-brand-blue text-white py-3 rounded-full hover:bg-brand-deep-blue transition-colors shadow-[0_4px_14px_0_rgba(0,122,254,0.3)]"
            onClick={() => setMobileOpen(false)}
          >
            Cotizar
          </Link>
        </div>
      )}
    </nav>
  );
}
