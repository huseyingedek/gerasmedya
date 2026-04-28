"use client";
import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glowRef = useRef(null);
  const pos = useRef({ x: -9999, y: -9999 });
  const current = useRef({ x: -9999, y: -9999 });
  const rafRef = useRef(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    const handleMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };

    // Smooth follow with lerp
    const animate = () => {
      current.current.x += (pos.current.x - current.current.x) * 0.08;
      current.current.y += (pos.current.y - current.current.y) * 0.08;
      glow.style.transform = `translate(${current.current.x}px, ${current.current.y}px)`;
      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "700px",
        height: "700px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(201,168,76,0.055) 0%, rgba(201,168,76,0.02) 35%, transparent 70%)",
        pointerEvents: "none",
        zIndex: 1,
        marginLeft: "-350px",
        marginTop: "-350px",
        willChange: "transform",
      }}
    />
  );
}
