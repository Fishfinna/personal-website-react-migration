import { useRef, useEffect, useState } from "react";
import { StarPoint } from "./StarPoint";
import "./Stars.scss";

export function Stars() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const pointsRef = useRef<StarPoint[]>([]);
  const [background, setBackground] = useState("#1b1b1b");
  const [starColor, setStarColor] = useState("rgba(252, 247, 255, 0.5)");

  useEffect(() => {
    let animationFrameId: number;
    let ctx: CanvasRenderingContext2D | null = null;

    const setup = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      ctx = canvas.getContext("2d");
      if (!ctx) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const screenDelta = Math.sqrt(canvas.width + canvas.height) / 100;
      const useAmount = 250 * screenDelta;

      for (let i = 0; i < useAmount; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const xSpeed = Math.random() * (2.4 / 10) - 2.4 / 20;
        const ySpeed = Math.random() * (2.4 / 10) - 2.4 / 20;
        const newPoint = new StarPoint(x, y, xSpeed, ySpeed);

        pointsRef.current.push(newPoint);
      }

      if (ctx) {
        ctx.fillStyle = starColor;
        ctx.fillRect(1, 1, canvas.width, canvas.height);
      }

      draw();
    };

    const draw = () => {
      if (!ctx) return;

      ctx.globalCompositeOperation = "source-over";

      ctx.fillStyle = background;
      ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

      ctx.lineWidth = 1.4;
      ctx.fillStyle = starColor;

      const screenDelta = Math.sqrt(ctx.canvas.width + ctx.canvas.height) / 100;
      const useDistance = 210 * screenDelta;

      ctx.globalCompositeOperation = "lighter";

      pointsRef.current.forEach((point) => {
        pointsRef.current.forEach((connection) => {
          const distanceX = Math.pow(connection.x - point.x, 2);
          const distanceY = Math.pow(connection.y - point.y, 2);
          const distance = Math.sqrt(distanceX + distanceY);

          if (distance <= useDistance && ctx) {
            const alpha = 1 - distance / useDistance;

            ctx.strokeStyle = `hsla(15, 60%, 10%, ${alpha})`;

            ctx.beginPath();
            ctx.moveTo(point.x, point.y);
            ctx.lineTo(connection.x, connection.y);
            ctx.stroke();
            ctx.closePath();
          }
        });
      });

      ctx.globalCompositeOperation = "source-over";

      pointsRef.current.forEach((point) => {
        if (ctx) {
          point.draw(ctx);
        }
      });

      animationFrameId = window.requestAnimationFrame(draw);
    };

    const handleResize = () => {
      const canvas = canvasRef.current;

      if (ctx && canvas) {
        console.log("changed");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        ctx.fillStyle = starColor;
        ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
      }
    };

    window.addEventListener("resize", handleResize);

    setup();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} />;
}
