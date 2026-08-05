"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowDown, Bell, Layers, ShieldCheck, Activity, Cpu } from "lucide-react";

function RouteCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    // Node particles representing freight hubs
    const nodes = Array.from({ length: 24 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 2.5 + 1.5,
      pulse: Math.random() * Math.PI * 2,
    }));

    // Animated route signals
    const signals = Array.from({ length: 6 }, () => ({
      from: Math.floor(Math.random() * nodes.length),
      to: Math.floor(Math.random() * nodes.length),
      progress: Math.random(),
      speed: 0.003 + Math.random() * 0.004,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Update and draw nodes
      nodes.forEach((node, i) => {
        node.x += node.vx;
        node.y += node.vy;
        node.pulse += 0.03;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        // Connections
        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const dx = other.x - node.x;
          const dy = other.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 180) {
            const alpha = (1 - dist / 180) * 0.25;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(0, 143, 93, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }

        // Draw node
        const glow = Math.sin(node.pulse) * 1.5 + 2.5;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius + glow * 0.3, 0, Math.PI * 2);
        ctx.fillStyle = i % 3 === 0 ? "rgba(0, 143, 93, 0.7)" : "rgba(192, 192, 192, 0.4)";
        ctx.fill();
      });

      // Draw moving signals along route lines
      signals.forEach((sig) => {
        sig.progress += sig.speed;
        if (sig.progress >= 1) {
          sig.progress = 0;
          sig.from = Math.floor(Math.random() * nodes.length);
          sig.to = Math.floor(Math.random() * nodes.length);
        }

        const start = nodes[sig.from];
        const end = nodes[sig.to];
        if (start && end) {
          const sx = start.x + (end.x - start.x) * sig.progress;
          const sy = start.y + (end.y - start.y) * sig.progress;

          ctx.beginPath();
          ctx.arc(sx, sy, 3, 0, Math.PI * 2);
          ctx.fillStyle = "#008F5D";
          ctx.shadowColor = "#008F5D";
          ctx.shadowBlur = 10;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full opacity-60 pointer-events-none"
    />
  );
}

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden gradient-mesh pt-20 pb-16">
      {/* Abstract render image background blend */}
      <div className="absolute inset-0 z-0 opacity-35 mix-blend-screen pointer-events-none">
        <Image
          src="/hero1.jpg"
          alt="Abstract logistics network render"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Dynamic route particle canvas */}
      <RouteCanvas />

      {/* Abstract geometric route overlay lines */}
      <svg
        className="absolute inset-0 h-full w-full opacity-20 pointer-events-none z-0"
        viewBox="0 0 1200 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M-100 600 Q200 400 400 500 T800 300 T1300 400"
          stroke="#008F5D"
          strokeWidth="2"
          fill="none"
          className="animate-dash-flow"
        />
        <path
          d="M-100 500 Q300 300 500 450 T900 250 T1300 350"
          stroke="#008F5D"
          strokeWidth="1.5"
          fill="none"
          opacity="0.6"
        />
        <path
          d="M-100 700 Q250 500 450 600 T850 400 T1300 500"
          stroke="#C0C0C0"
          strokeWidth="1"
          fill="none"
          opacity="0.4"
        />
      </svg>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        {/* Eyebrow & Pipeline Badge */}
        <div className="mb-6 flex flex-wrap items-center justify-center gap-3">
          <span className="text-xs font-semibold tracking-[0.25em] text-silver/60 uppercase">
            A SECTOR OF AMANORX HOLDINGS
          </span>
          <span className="text-silver/30">•</span>
          
        </div>

        {/* Title */}
        <h1 className="mb-4 font-[var(--font-poppins)] text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl text-glow">
          Freight, built on trust
        </h1>

        {/* Tagline */}
        <p className="mb-8 font-[var(--font-poppins)] text-2xl font-semibold text-primary sm:text-3xl tracking-tight">
          Moving potential. Delivering growth.
        </p>

        {/* Sub-copy */}
        <p className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-silver/80 font-normal">
          LEMMIC is AmanorX&apos;s planned logistics-sector company — positioned
          to bring evaluation, management, a verified freight Marketplace, and
          disciplined investment to Pakistan&apos;s road-freight industry. Currently
          in the Pipeline stage of AmanorX&apos;s sixteen-sector architecture.
        </p>

        {/* Floating Telemetry Glass Badges */}
        <div className="mb-10 hidden sm:flex flex-wrap items-center justify-center gap-4">
          <div className="glass-card flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-silver/80">
            <ShieldCheck size={14} className="text-primary" />
            <span>Carrier Evaluation Gate</span>
          </div>
          <div className="glass-card flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-silver/80">
            <Activity size={14} className="text-primary" />
            <span>Enforced Shipment Lifecycle</span>
          </div>
          <div className="glass-card flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-silver/80">
            <Cpu size={14} className="text-primary" />
            <span>Verified Freight Marketplace</span>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-primary px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-primary/90 hover:force-glow hover:scale-105"
          >
            <Bell size={18} />
            <span>Contact Us</span>
          </a>
          <a
            href="#framework"
            className="group inline-flex items-center gap-2 rounded-xl border border-silver/30 bg-ink/60 backdrop-blur-md px-8 py-4 text-base font-semibold text-silver transition-all duration-300 hover:border-silver/60 hover:text-white hover:bg-ink-light"
          >
            <Layers size={18} />
            <span>See the model</span>
          </a>
        </div>
      </div>

      {/* Down indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-silver/40" size={22} />
      </div>
    </section>
  );
}