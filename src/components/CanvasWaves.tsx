import { useEffect, useRef } from 'react';

export function CanvasWaves() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    const draw = () => {
      const width = canvas.width;
      const height = canvas.height;

      // Match the body background color perfectly to avoid black bars
      ctx.fillStyle = '#080808';
      ctx.fillRect(0, 0, width, height);

      const lines = 5;
      for (let i = 0; i < lines; i++) {
        ctx.beginPath();
        // Start from bottom left
        ctx.moveTo(0, height);

        // Draw flowing wave across the screen
        for (let x = 0; x <= width; x += 20) {
          // Complex organic wave math
          const y = height * 0.7 
            + Math.sin(x * 0.001 + time + i) * 120 
            + Math.sin(x * 0.002 - time * 0.5 + i * 0.5) * 60;
            
          ctx.lineTo(x, y - (i * (height * 0.12)));
        }

        ctx.lineTo(width, height);
        ctx.lineTo(0, height);
        ctx.closePath();

        // Soft white fill for the wave body (even more subtle)
        ctx.fillStyle = `rgba(255, 255, 255, ${0.005 + i * 0.003})`;
        ctx.fill();

        // Crisp elegant top edge line (subtle)
        ctx.strokeStyle = `rgba(255, 255, 255, ${0.02 + i * 0.015})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      time += 0.004; // Reduced speed for a calmer background
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" />;
}
