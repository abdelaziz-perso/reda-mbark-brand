"use client";

import { useEffect, useId, useState } from "react";

export function useStage() {
  const id = useId();
  const [ready, setReady] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lite, setLite] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const reduceQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mobileQuery = window.matchMedia("(max-width: 767px)");
    const sync = () => {
      const mobile = mobileQuery.matches;
      const cores = navigator.hardwareConcurrency ?? 8;
      const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
      const weak = Boolean(connection?.saveData) || (mobile && cores <= 2);
      setReduced(reduceQuery.matches);
      setLite(mobile);
      setReady(!weak);
    };
    sync();
    reduceQuery.addEventListener("change", sync);
    mobileQuery.addEventListener("change", sync);

    const node = document.getElementById(id);
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.08 },
    );
    if (node) observer.observe(node);

    return () => {
      reduceQuery.removeEventListener("change", sync);
      mobileQuery.removeEventListener("change", sync);
      observer.disconnect();
    };
  }, [id]);

  return { id, ready, visible, lite, reduced };
}
