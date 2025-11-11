"use client";
import React, { useEffect, useRef } from "react";
import "@/styles/SoapBubbleCursor.css";
import gsap from "gsap";

interface BlobPoint {
  angle: number;
  radius: number;
  noiseOffset: number;
}

const SoapBubbleCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const text = textRef.current;
    const canvas = canvasRef.current;
    if (!cursor || !text || !canvas) return;

    const ctx = canvas.getContext("2d")!;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Blob points
    const points: BlobPoint[] = [];
    const pointCount = 0;
    const baseRadius = 0;

    for (let i = 0; i < pointCount; i++) {
      const angle = (Math.PI * 2 * i) / pointCount;
      points.push({
        angle,
        radius: baseRadius + Math.random() * 10,
        noiseOffset: Math.random() * 1000,
      });
    }

    let puddleX = window.innerWidth / 2;
    let puddleY = window.innerHeight / 2;
    let targetX = puddleX;
    let targetY = puddleY;
    let velocityX = 0;
    let velocityY = 0;
    let lastX = puddleX;
    let lastY = puddleY;

    let isMoving = false;
    let lastMoveTime = Date.now();

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Hide bubble if mouse not moved for 300ms
      if (Date.now() - lastMoveTime > 300) {
        requestAnimationFrame(draw);
        return;
      }

      // Smooth movement
      puddleX += (targetX - puddleX) * 0.15;
      puddleY += (targetY - puddleY) * 0.15;

      velocityX = puddleX - lastX;
      velocityY = puddleY - lastY;
      lastX = puddleX;
      lastY = puddleY;

      const speed = Math.sqrt(velocityX * velocityX + velocityY * velocityY);
      const angle = Math.atan2(velocityY, velocityX);

      // Outer layer acceleration → stronger when faster
      const stretchFactor = Math.min(speed * 2.5, 200);

      // Update blob points with lightning-like irregularities
      points.forEach((p, i) => {
        p.noiseOffset += 0.005 + speed * 0.001; // faster wiggle when faster
        // create jagged lightning-like radius variation
        p.radius =
          baseRadius +
          Math.sin(p.noiseOffset * 3) * 10 +
          (i % 2 === 0 ? Math.random() * 30 : -Math.random() * 20) +
          (i === 0 ? stretchFactor : 0); // extend in front
      });

      // Draw blob
      ctx.save();
      ctx.translate(puddleX, puddleY);
      ctx.rotate(angle);

      ctx.beginPath();
      for (let i = 0; i < points.length; i++) {
        const p = points[i];
        const next = points[(i + 1) % points.length];

        const x = Math.cos(p.angle) * p.radius;
        const y = Math.sin(p.angle) * p.radius;
        const nx = Math.cos(next.angle) * next.radius;
        const ny = Math.sin(next.angle) * next.radius;

        const cx = (x + nx) / 2;
        const cy = (y + ny) / 2;

        if (i === 0) ctx.moveTo(x, y);
        ctx.quadraticCurveTo(x, y, cx, cy);
      }
      ctx.closePath();

      // Fill interior faint
      const fillGrad = ctx.createRadialGradient(0, 0, baseRadius * 0.3, 0, 0, baseRadius * 1.3);
      fillGrad.addColorStop(0, "rgba(17, 17, 17, 1)");
      fillGrad.addColorStop(1, "rgba(0, 0, 0, 0.41)");
      ctx.fillStyle = fillGrad;
      ctx.fill();

      // Outer lightning-like stroke
      const edgeGrad = ctx.createLinearGradient(-baseRadius, 0, baseRadius, 0);
      edgeGrad.addColorStop(0, `rgba(255,255,255,0.05)`);
      edgeGrad.addColorStop(0.5, `rgba(200,200,255,0.8)`);
      edgeGrad.addColorStop(1, `rgba(255,255,255,0.05)`);

      ctx.strokeStyle = edgeGrad;
      ctx.lineWidth = 3 + Math.min(speed * 0.5, 8);
      ctx.setLineDash([5, Math.max(3, 15 - speed)]); // jagged like lightning
      ctx.stroke();

      ctx.restore();

      requestAnimationFrame(draw);
    };

    draw();

    const moveCursor = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      lastMoveTime = Date.now();
      isMoving = true;

      gsap.to(cursor, {
        x: targetX,
        y: targetY,
        duration: 0.1,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

     const handleMouseEnter = (e: Event) => {
      const target = e.currentTarget as HTMLElement;
      const hoverText = target.getAttribute("data-cursor-text");
      if (hoverText) {
        text.textContent = hoverText;
        cursor.classList.add("cursor--active");
      }
    };

    const handleMouseLeave = () => {
      text.textContent = "";
      cursor.classList.remove("cursor--active");
    };

    document.querySelectorAll("[data-cursor-text]").forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 50,
        }}
      />
      <div className="soap-cursor" ref={cursorRef}>
        <p className="cursor-text " ref={textRef}></p>
      </div>
    </>
  );
};

export default SoapBubbleCursor;
