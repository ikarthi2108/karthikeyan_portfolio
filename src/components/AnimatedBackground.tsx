import { useEffect, useRef } from 'react';

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const bubbles: Array<{
      x: number;
      y: number;
      size: number;
      speedY: number;
      opacity: number;
      color: string;
    }> = [];

    const colors = ['147, 51, 234', '79, 70, 229', '236, 72, 153'];

    const createBubble = () => {
      return {
        x: Math.random() * canvas.width,
        y: canvas.height + 100,
        size: Math.random() * 15 + 3,
        speedY: Math.random() * 1 + 0.2,
        opacity: Math.random() * 0.15 + 0.05,
        color: colors[Math.floor(Math.random() * colors.length)],
      };
    };

    for (let i = 0; i < 30; i++) {
      bubbles.push(createBubble());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      bubbles.forEach((bubble, index) => {
        ctx.beginPath();
        ctx.arc(bubble.x, bubble.y, bubble.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${bubble.color}, ${bubble.opacity})`;
        ctx.fill();

        bubble.y -= bubble.speedY;

        if (bubble.y < -100) {
          bubbles[index] = createBubble();
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ background: 'transparent' }}
    />
  );
}