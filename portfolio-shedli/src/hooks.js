import { useEffect, useRef, useState } from "react";

/* Reveal-on-scroll: returns a ref; adds `.in` when element enters viewport */
export function useReveal(options = {}) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.unobserve(entry.target);
        }
      },
      { threshold: options.threshold ?? 0.18, rootMargin: options.rootMargin ?? "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [options.threshold, options.rootMargin]);

  return [ref, shown];
}

/* Count-up number animation, triggered once when visible */
export function useCounter(target, { duration = 1800, start = false } = {}) {
  const [value, setValue] = useState(0);
  const raf = useRef(null);

  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const tick = (t) => {
      if (startTime === null) startTime = t;
      const p = Math.min((t - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      setValue(target * eased);
      if (p < 1) raf.current = requestAnimationFrame(tick);
      else setValue(target);
    };
    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, [start, target, duration]);

  return value;
}
