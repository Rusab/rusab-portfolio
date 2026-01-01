'use client';

import { useEffect, useRef } from 'react';

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    // Binary characters: 0 and 1
    const binary = '01';
    const fontSize = 14;
    const columns = Math.floor(width / fontSize);

    // Array to track the y position of each column
    const drops: number[] = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100; // Start at random negative positions
    }

    const draw = () => {
      // Fade effect - creates the trail
      ctx.fillStyle = 'rgba(5, 5, 5, 0.05)';
      ctx.fillRect(0, 0, width, height);

      // Set text properties
      ctx.fillStyle = '#3b82f6'; // Blue-500
      ctx.font = `${fontSize}px monospace`;

      // Draw binary characters
      for (let i = 0; i < drops.length; i++) {
        // Random binary character (0 or 1)
        const text = binary[Math.floor(Math.random() * binary.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillText(text, x, y);

        // Reset drop to top randomly
        if (y > height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        // Increment Y coordinate
        drops[i]++;
      }
    };

    // Animation loop
    const interval = setInterval(draw, 50);

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none opacity-30"
    />
  );
}
