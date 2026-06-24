"use client";

import { useEffect } from "react";

export default function ScrollRevealInit() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = parseInt(el.dataset.delay || "0", 10);

            const reveal = () => {
              el.classList.add("revealed");
              setTimeout(() => {
                el.classList.remove("scroll-reveal", "revealed");
              }, 800);
            };

            if (delay > 0) {
              setTimeout(reveal, delay);
            } else {
              reveal();
            }

            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    const observe = (el: Element) => {
      if (prefersReducedMotion) {
        el.classList.remove("scroll-reveal");
        return;
      }
      observer.observe(el);
    };

    document.querySelectorAll(".scroll-reveal").forEach(observe);

    const mo = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        for (const node of mutation.addedNodes) {
          if (node instanceof HTMLElement) {
            if (node.classList.contains("scroll-reveal")) observe(node);
            node.querySelectorAll(".scroll-reveal").forEach(observe);
          }
        }
      }
    });

    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
}
