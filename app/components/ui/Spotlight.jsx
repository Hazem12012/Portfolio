'use client';

import { useState , useCallback } from "react";

export default function Spotlight() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove =useCallback( (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  },[])

  return (
    <div
      className="absolute w-full h-screen overflow-hidden top-0 left-0  z-40"
      onMouseMove={handleMouseMove}
    >
      <div
        className="pointer-events-none absolute w-60 h-60 rounded-full bg-white opacity-10 blur-3xl"
        style={{
          left: position.x - 120,
          top: position.y - 120,
        }}
      />
    </div>
  );
}
