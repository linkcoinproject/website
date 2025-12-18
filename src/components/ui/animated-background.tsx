"use client";

import React, { useEffect, useRef } from "react";

interface Wave {
  amplitude: number;
  frequency: number;
  speed: number;
  offset: number;
  color: { r: number; g: number; b: number };
  alpha: number;
}

export const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Resize canvas to match parent container
    const resizeCanvas = () => {
      const container = canvas.parentElement;
      if (container) {
        canvas.width = container.offsetWidth;
        canvas.height = container.offsetHeight;
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Define wave colors based on Linkcoin theme
    const colors = [
      { r: 200, g: 149, b: 59 }, // --secondary
      { r: 179, g: 132, b: 42 }, // --secondary-dark
    ];

    // Initialize waves with varying properties
    const waves: Wave[] = Array(5)
      .fill(null)
      .map((_, i) => ({
        amplitude: 20 + i * 10, // Vary wave height
        frequency: 0.01 + i * 0.002, // Vary wave density
        speed: 0.02 + i * 0.005, // Vary wave speed
        offset: Math.random() * Math.PI * 2, // Random phase
        color: colors[i % colors.length],
        alpha: 0.3 - i * 0.05, // Fade out deeper waves
      }));

    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw each wave
      waves.forEach((wave) => {
        ctx.beginPath();
        ctx.moveTo(0, canvas.height / 2);

        // Calculate wave points
        for (let x = 0; x < canvas.width; x += 2) {
          const y =
            canvas.height / 2 +
            wave.amplitude * Math.sin(wave.frequency * x + time * wave.speed + wave.offset);
          ctx.lineTo(x, y);
        }

        // Create gradient for wave
        const { r, g, b } = wave.color;
        const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
        gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${wave.alpha})`);
        gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, ${wave.alpha * 0.2})`);

        ctx.fillStyle = gradient;
        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.fill();
      });

      time += 0.02; // Control overall animation speed
      requestAnimationFrame(animate);
    };

    animate();

    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.15, pointerEvents: "none" }} // Prevent interaction, subtle opacity
    />
  );
};