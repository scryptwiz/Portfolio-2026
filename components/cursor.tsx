"use client";

import { useEffect, useRef } from "react";

export function Cursor() {
  const root = useRef<HTMLDivElement>(null);
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    const rootEl = root.current;
    const dotEl = dot.current;
    const ringEl = ring.current;
    if (!rootEl || !dotEl || !ringEl) return;

    document.documentElement.classList.add("has-cursor");

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let rx = x;
    let ry = y;
    let frame = 0;

    const place = (element: HTMLDivElement, nextX: number, nextY: number) => {
      element.style.transform = `translate3d(${nextX}px, ${nextY}px, 0)`;
    };

    const onMove = (event: PointerEvent) => {
      x = event.clientX;
      y = event.clientY;
      rootEl.classList.add("is-on");
      place(dotEl, x, y);
    };

    const onOver = (event: Event) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      ringEl.classList.toggle("is-hot", Boolean(target.closest("a, button")));
    };

    const onLeave = () => {
      rootEl.classList.remove("is-on");
    };

    const tick = () => {
      rx += (x - rx) * 0.16;
      ry += (y - ry) * 0.16;
      place(ringEl, rx, ry);
      frame = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove);
    document.addEventListener("pointerover", onOver);
    document.addEventListener("pointerleave", onLeave);
    frame = requestAnimationFrame(tick);

    return () => {
      document.documentElement.classList.remove("has-cursor");
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerover", onOver);
      document.removeEventListener("pointerleave", onLeave);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={root} className="cursor" aria-hidden>
      <div ref={ring} className="cursor-ring">
        <span />
      </div>
      <div ref={dot} className="cursor-dot" />
    </div>
  );
}
