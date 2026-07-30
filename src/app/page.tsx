"use client";

import Link from "next/link";
import { ArrowRight, ChefHat, Utensils, Zap, Clock, Bell, LineChart, Sparkles, AlertCircle, Laptop, Smartphone } from "lucide-react";

const DEMO_MENU_HREF = "/customer/login";

function FeatureCard({
  icon: Icon,
  emoji,
  title,
  description,
  bgColor,
}: {
  icon?: React.ElementType;
  emoji?: string;
  title: string;
  description: string;
  bgColor: string;
}) {
  return (
    <div
      className={`relative p-8 rounded-3xl ${bgColor} border border-black/5 hover:-translate-y-1 transition-transform duration-300`}
    >
      <div className="w-14 h-14 rounded-2xl bg-white/50 border border-white/60 flex items-center justify-center shadow-sm mb-6 text-2xl">
        {emoji ? emoji : Icon && <Icon size={24} className="text-stone-800" />}
      </div>
      <h3 className="font-[family-name:var(--font-space-grotesk)] font-bold text-xl text-stone-900 mb-3">
        {title}
      </h3>
      <p className="text-stone-700 font-sans leading-relaxed text-sm">
        {description}
      </p>
    </div>
  );
}

function ProblemCard({
  emoji,
  title,
  description,
}: {
  emoji: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-4 p-5 rounded-2xl bg-white border border-stone-200 shadow-sm hover:shadow-md transition-shadow">
      <div className="shrink-0 mt-1 text-2xl">
        {emoji}
      </div>
      <div>
        <h4 className="text-lg font-bold text-stone-900 mb-1 font-[family-name:var(--font-space-grotesk)]">{title}</h4>
        <p className="text-stone-600 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FCFAF6] text-stone-900 selection:bg-red-200 font-[family-name:var(--font-ibm-plex-sans)] overflow-hidden">
      
      {/* ── Nav ─────────────────────────────────────────────── */}
      <nav className="fixed top-0 w-full z-50 bg-[#FCFAF6]/90 backdrop-blur-md border-b border-stone-200/60">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-red-600 flex items-center justify-center text-white font-bold text-lg shadow-sm">
              V
            </div>
            <span className="font-[family-name:var(--font-space-grotesk)] text-xl font-extrabold tracking-tight text-stone-900">
              Vibeathon
            </span>
          </div>

          <div className="flex items-center gap-6 text-sm font-semibold">
            <Link
              href="/login"
              className="text-stone-600 hover:text-stone-900 transition-colors"
            >
              Staff Portal
            </Link>
            <Link
              href={DEMO_MENU_HREF}
              className="bg-stone-900 text-white px-6 py-2.5 rounded-full hover:bg-stone-800 transition-colors shadow-[0px_4px_12px_rgba(0,0,0,0.1)] flex items-center gap-2"
            >
              Demo Menu <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </nav>

      {/* ── Hero ────────────────────────────────────────────── */}
      <main className="pt-40 pb-24 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFE7AA] text-[#9A6D00] mb-8 font-bold text-xs tracking-widest uppercase">
          🚀 Built for Modern Dine-in
        </div>

        <h1 className="font-[family-name:var(--font-space-grotesk)] text-6xl md:text-7xl lg:text-8xl font-black leading-[1.05] text-stone-900 mb-8 tracking-tighter">
          Find your perfect <br/>
          <span className="text-red-600">restaurant flow.</span>
        </h1>

        <p className="text-lg md:text-xl text-stone-600 max-w-2xl leading-relaxed mb-12 font-medium mx-auto">
          A full-stack, real-time platform bridging the gap between customers, kitchen, and management. Ditch the paper tickets and orchestrate perfect service.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-5">
          <Link
            href={DEMO_MENU_HREF}
            className="w-full sm:w-auto bg-red-600 text-white px-8 py-4 rounded-2xl text-base font-bold hover:bg-red-700 transition-all flex items-center justify-center gap-2 shadow-[4px_6px_0px_0px_rgba(153,27,27,1)] hover:translate-y-1 hover:shadow-[0px_0px_0px_0px_rgba(153,27,27,1)] active:scale-95"
          >
            <Smartphone size={20} /> Try Customer Menu
          </Link>
          <Link
            href="/login"
            className="w-full sm:w-auto bg-white text-stone-900 px-8 py-4 rounded-2xl text-base font-bold border-2 border-stone-200 hover:border-stone-300 hover:bg-stone-50 transition-all flex items-center justify-center gap-2"
          >
            <Laptop size={20} /> Staff Dashboard
          </Link>
        </div>
      </main>

      {/* ── The Problem ─────────────────────────────────────── */}
      <section className="py-24 bg-white/50 border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-[family-name:var(--font-space-grotesk)] font-extrabold text-4xl md:text-5xl text-stone-900 mb-6 tracking-tight">
                The chaos of <br/><span className="text-red-600">traditional</span> operations.
              </h2>
              <p className="text-stone-600 text-lg leading-relaxed mb-8 font-medium">
                Running a restaurant is hard. Relying on fragmented, manual processes makes it chaotic. Paper tickets get lost, customers wait in the dark, and managers fly blind.
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <ProblemCard
                emoji="😫"
                title="Front-of-House Friction"
                description="Customers suffer from slow service, paper menus without dietary context, and zero visibility into their order status."
              />
              <ProblemCard
                emoji="🔥"
                title="Back-of-House Chaos"
                description="Kitchens struggle with lost paper tickets, poor timing coordination, and untracked ingredient waste during rush hours."
              />
              <ProblemCard
                emoji="🙈"
                title="Management Blind Spots"
                description="Managers lack real-time operational insights, demand forecasting, and struggle to identify bottlenecks."
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── The Solution / Features ─────────────────────────── */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-red-600 font-bold tracking-widest uppercase text-sm font-[family-name:var(--font-ibm-plex-mono)] mb-4 block">The Solution</span>
            <h2 className="font-[family-name:var(--font-space-grotesk)] font-black text-4xl md:text-5xl text-stone-900 mb-6 tracking-tight">
              A 100% digitized workflow.
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed font-medium">
              Vibeathon strictly models enterprise POS state machines (Placed → Confirmed → Preparing → Ready → Served), syncing every update instantly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              emoji="📱"
              title="Smart Digital Menu"
              description="Mobile-first, interactive menu with category filtering, dietary contexts, and a responsive real-time cart."
              bgColor="bg-rose-100"
            />
            <FeatureCard
              emoji="🔔"
              title="Live Order Tracking"
              description="Customers track their order status in real-time with visual progress and background native push notifications."
              bgColor="bg-amber-100"
            />
            
            <FeatureCard
              emoji="👨‍🍳"
              title="Real-Time Kanban"
              description="Orders instantly flow through a strict state machine, keeping the kitchen perfectly synced without page reloads."
              bgColor="bg-emerald-100"
            />
            <FeatureCard
              emoji="⏳"
              title="Wait-Time Alerts"
              description="Automated visual warnings for tables exceeding average service times to ensure prompt and perfect service."
              bgColor="bg-orange-100"
            />

            <FeatureCard
              emoji="🤖"
              title="Gemini AI Forecasting"
              description="AI analyzes historical order data to predict dish demand and suggest prep quantities for upcoming services."
              bgColor="bg-blue-100"
            />
            <FeatureCard
              emoji="✨"
              title="AI Ops Assistant"
              description="A conversational AI agent for managers to ask natural language questions about sales and bottlenecks."
              bgColor="bg-purple-100"
            />
          </div>
        </div>
      </section>

      {/* ── Tech Stack Banner ───────────────────────────────── */}
      <section className="py-20 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold mb-10">Built on the bleeding edge of the modern web</h3>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-80 font-[family-name:var(--font-ibm-plex-mono)] text-sm font-bold tracking-wider uppercase">
            <span>Next.js 15</span>
            <span>Supabase Realtime</span>
            <span>Tailwind CSS</span>
            <span>Google Gemini AI</span>
            <span>Web Push API</span>
          </div>
        </div>
      </section>
      
      {/* ── Footer ──────────────────────────────────────────── */}
      <footer className="bg-stone-950 text-stone-400 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center text-white font-bold text-sm shadow-sm">
              V
            </div>
            <div className="font-[family-name:var(--font-space-grotesk)] text-2xl text-stone-200 font-bold">
              Vibeathon.
            </div>
          </div>
          <div className="text-sm font-[family-name:var(--font-ibm-plex-mono)] font-medium">
            Built with ❤️ for the Hackathon.
          </div>
        </div>
      </footer>
    </div>
  );
}
