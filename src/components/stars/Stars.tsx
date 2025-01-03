import { useRef, useEffect, useState, useCallback } from "react";
import { StarPoint } from "./StarPoint";
import "./Stars.scss";

export function Stars() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const pointsRef = useRef<StarPoint[]>([]);

  const [background] = useState("#151515");
  const [starColor] = useState("#fcf7ff7f");

  const handleClick = useCallback((event: MouseEvent) => {
    console.log("here");
    const baseSpeed = 2.4;
    pointsRef.current.push(
      new StarPoint(
        event.clientX,
        event.clientY,
        Math.random() * (baseSpeed / 10) - baseSpeed / 20,
        Math.random() * (baseSpeed / 10) - baseSpeed / 20
      )
    );
    pointsRef.current.shift();
  }, []);

  useEffect(() => {
    let animationFrameId: number;
    let ctx: CanvasRenderingContext2D | null = null;

    const setup = () => {
      const baseSpeed = 2.4;

      const canvas = canvasRef.current;
      if (!canvas) return;
      const amount = Math.min(200, Math.floor(canvas.width / 3));

      ctx = canvas.getContext("2d");
      if (!ctx) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const screenDelta = Math.sqrt(canvas.width + canvas.height) / 100;
      const useAmount = amount * screenDelta;

      for (let i = 0; i < useAmount; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const xSpeed = Math.random() * (baseSpeed / 10) - baseSpeed / 20;
        const ySpeed = Math.random() * (baseSpeed / 10) - baseSpeed / 20;
        const newPoint = new StarPoint(x, y, xSpeed, ySpeed);

        pointsRef.current.push(newPoint);
      }

      if (ctx) {
        ctx.fillStyle = starColor;
        ctx.fillRect(1, 1, canvas.width, canvas.height);
      }

      window.addEventListener("click", handleClick);
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
      window.removeEventListener("click", handleClick);
      cancelAnimationFrame(animationFrameId);
    };
  }, [background, starColor, handleClick]);

  return <canvas ref={canvasRef} />;
}
