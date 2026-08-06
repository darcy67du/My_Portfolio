"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const isFine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    setEnabled(isFine);
    if (!isFine) return;

    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setHovering(!!target.closest("a, button, .cursor-hover"));
    };
    window.addEventListener("mouseover", onOver);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", onOver);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-accent pointer-events-none z-[9998]"
        animate={{ x: pos.x - 4, y: pos.y - 4 }}
        transition={{ type: "tween", duration: 0.08 }}
      />
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-primary pointer-events-none z-[9998]"
        animate={{
          x: pos.x - (hovering ? 27 : 17),
          y: pos.y - (hovering ? 27 : 17),
          width: hovering ? 54 : 34,
          height: hovering ? 54 : 34,
          opacity: hovering ? 0.35 : 0.6,
        }}
        transition={{ type: "tween", duration: 0.15 }}
      />
    </>
  );
}
