// src/hooks/useRevealOnScroll.js
import { useEffect } from 'react';

export function useRevealOnScroll(selector = '.reveal', rootMargin = '-10% 0px') {
  useEffect(() => {
    const els = document.querySelectorAll(selector);
    if (!('IntersectionObserver' in window) || els.length === 0) return;

    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible');
            obs.unobserve(e.target); // revelar una vez
          }
        }
      },
      { threshold: 0.15, rootMargin }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [selector, rootMargin]);
}
