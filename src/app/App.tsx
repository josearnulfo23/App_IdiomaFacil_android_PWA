/**
 * IdiomaFácil — MVP Prototipo (PS-011)
 * @file src/app/App.tsx
 * @author José Arnulfo Céspedes Albornoz
 * @description Transformación del mockup funcional de Figma (Figma Make) a MVP React.
 *   Single-file architecture elegida deliberadamente para MVP: facilita revisión del cliente
 *   como fuente única de verdad y reduce overhead de navegación entre archivos.
 *   Evolución prevista: extraer CATEGORIES → src/data/categories.ts,
 *   componentes → src/app/components/screens/*.tsx, hooks → src/hooks/.
 *   Stack: React 18 + TypeScript + Vite 6 + Tailwind CSS 4 + Recharts + lucide-react.
 *   PWA: vite-plugin-pwa (Workbox) genera sw.js + manifest.webmanifest.
 *   Android: dist/ es consumido por Capacitor/TWA sin duplicar código.
 */
import { useState, useEffect, useRef, useMemo } from "react";
import {
  Home, BookOpen, BarChart3, Flame, Star,
  Check, X, ChevronRight, ArrowLeft,
  Clock, Volume2, Brain, Target, Zap,
} from "lucide-react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip,
  ResponsiveContainer, Cell,
} from "recharts";

// ─── Types ────────────────────────────────────────────────────────────────────
type Level = "basic" | "intermediate" | "advanced";
type GameMode = "flashcard" | "match" | "test";
type ActiveScreen =
  | "welcome"
  | "home" | "categories" | "category-detail"
  | "flashcard" | "match" | "test"
  | "results" | "progress";
type NavTab = "home" | "categories" | "progress";

interface Word {
  id: string; en: string; es: string;
  example: string; emoji: string; level: Level;
}
interface Category {
  id: string; name: string; emoji: string; color: string; words: Word[];
}
interface MatchTile {
  id: string; wordId: string; content: string;
  type: "en" | "es"; status: "idle" | "selected" | "matched" | "wrong";
}
interface GameResult {
  score: number; total: number; timeSeconds: number; mode: GameMode;
}

// ─── Data (3000+ terms) ───────────────────────────────────────────────────────
// Dataset externalizado para escalabilidad y trazabilidad.
// Ver src/data/vocabulary.ts — 12 categorías, 3000 EN↔ES con niveles y ejemplos.
// Evolución MVP: single-file → dataset modular (PS-011 ampliación vocabulario).
import { CATEGORIES } from "@/data/vocabulary";

// ─── Utilities ────────────────────────────────────────────────────────────────
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const ALL_WORDS = CATEGORIES.flatMap(c => c.words);

function generateTestOptions(correct: Word): string[] {
  const wrong = shuffle(ALL_WORDS.filter(w => w.id !== correct.id))
    .slice(0, 3)
    .map(w => w.es);
  return shuffle([correct.es, ...wrong]);
}

// ─── Progress Ring ────────────────────────────────────────────────────────────
function ProgressRing({ pct, size = 72, stroke = 6, color }: {
  pct: number; size?: number; stroke?: number; color: string;
}) {
  const r = (size - stroke) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ * (1 - Math.min(pct, 100) / 100);
  return (
    <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#E0DFFF" strokeWidth={stroke} />
      <circle
        cx={size / 2} cy={size / 2} r={r}
        fill="none" stroke={color} strokeWidth={stroke}
        strokeDasharray={circ} strokeDashoffset={offset}
        strokeLinecap="round"
        style={{ transition: "stroke-dashoffset 0.6s ease" }}
      />
    </svg>
  );
}

// ─── Level Badge ──────────────────────────────────────────────────────────────
function LevelBadge({ level }: { level: Level }) {
  const map = {
    basic: { label: "Básico", bg: "#E8FFF3", color: "#2ECC71" },
    intermediate: { label: "Inter.", bg: "#FFF4E0", color: "#FF8C00" },
    advanced: { label: "Avanz.", bg: "#F3E8FF", color: "#9B59B6" },
  };
  const s = map[level];
  return (
    <span className="text-xs px-2 py-0.5 rounded-full font-semibold" style={{ background: s.bg, color: s.color }}>
      {s.label}
    </span>
  );
}

// ─── Home Screen ──────────────────────────────────────────────────────────────
function HomeScreen({ onNavigate, onStartActivity }: {
  onNavigate: (s: ActiveScreen) => void;
  onStartActivity: (mode: GameMode, catId: string) => void;
}) {
  const todayGoal = 10;
  const todayDone = 7;

  const weeklyData = [
    { day: "L", words: 8 }, { day: "M", words: 12 }, { day: "X", words: 5 },
    { day: "J", words: 15 }, { day: "V", words: 10 }, { day: "S", words: 18 },
    { day: "D", words: 7 },
  ];

  const quickActions = [
    { label: "Flashcards", icon: "🃏", color: "#4B35FF", mode: "flashcard" as GameMode, catId: "family" },
    { label: "Match", icon: "🎯", color: "#FF4E6A", mode: "match" as GameMode, catId: "food" },
    { label: "Test", icon: "📝", color: "#FF8C00", mode: "test" as GameMode, catId: "travel" },
    { label: "Repaso", icon: "🔄", color: "#00C4A7", mode: "flashcard" as GameMode, catId: "work" },
  ];

  return (
    <div className="flex flex-col h-full overflow-y-auto hide-scrollbar">
      {/* Header gradient */}
      <div className="relative px-5 pt-8 pb-6 overflow-hidden flex-shrink-0"
        style={{ background: "linear-gradient(140deg, #4B35FF 0%, #6E56FF 60%, #8C70FF 100%)" }}>
        {/* Memphis shapes */}
        <div className="absolute -top-6 -right-6 w-28 h-28 rounded-full"
          style={{ background: "rgba(255,225,53,0.22)" }} />
        <div className="absolute top-8 right-14 w-10 h-10 rounded-full"
          style={{ background: "rgba(0,196,167,0.28)" }} />
        <div className="absolute bottom-0 right-6 w-0 h-0"
          style={{ borderLeft: "20px solid transparent", borderRight: "20px solid transparent", borderBottom: "34px solid rgba(255,78,106,0.22)" }} />

        <div className="flex items-center justify-between mb-5 relative z-10">
          <div>
            <p className="text-white/65 text-sm">Buenos días,</p>
            <h1 className="text-white text-xl font-bold" style={{ fontFamily: "'Nunito', sans-serif" }}>
              Carlos 👋
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 px-3 py-1.5 rounded-full"
              style={{ background: "rgba(255,225,53,0.22)" }}>
              <Flame size={14} style={{ color: "#FFE135" }} />
              <span className="font-bold text-sm" style={{ color: "#FFE135", fontFamily: "'DM Mono', monospace" }}>7</span>
            </div>
            <div className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm"
              style={{ background: "#FFE135", color: "#12112A", fontFamily: "'Nunito', sans-serif" }}>
              C
            </div>
          </div>
        </div>

        {/* Today goal */}
        <div className="flex items-center gap-4 relative z-10">
          <div className="relative">
            <ProgressRing pct={(todayDone / todayGoal) * 100} size={60} stroke={5} color="#FFE135" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white text-xs font-bold" style={{ fontFamily: "'DM Mono', monospace" }}>
                {todayDone}/{todayGoal}
              </span>
            </div>
          </div>
          <div>
            <p className="text-white font-semibold text-sm">Meta de hoy</p>
            <p className="text-white/60 text-xs">{todayGoal - todayDone} palabras más para completar</p>
          </div>
        </div>
      </div>

      {/* Stats row */}
      <div className="px-5 py-4 flex-shrink-0">
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "Aprendidas", value: "124", icon: "⭐", color: "#4B35FF" },
            { label: "En progreso", value: "38", icon: "📚", color: "#FF8C00" },
            { label: "Racha", value: "7d", icon: "🔥", color: "#FF4E6A" },
          ].map(s => (
            <div key={s.label} className="bg-card rounded-2xl p-3 text-center shadow-sm"
              style={{ border: "1.5px solid var(--border)" }}>
              <div className="text-xl mb-1">{s.icon}</div>
              <div className="font-bold text-base" style={{ color: s.color, fontFamily: "'DM Mono', monospace" }}>
                {s.value}
              </div>
              <div className="text-xs mt-0.5 leading-tight" style={{ color: "var(--muted-foreground)" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick actions */}
      <div className="px-5 pb-4 flex-shrink-0">
        <h2 className="font-bold text-sm mb-3 uppercase tracking-wider" style={{ color: "var(--muted-foreground)" }}>
          Actividades
        </h2>
        <div className="grid grid-cols-2 gap-3">
          {quickActions.map(a => (
            <button
              key={a.label}
              onClick={() => onStartActivity(a.mode, a.catId)}
              className="rounded-2xl p-4 text-left transition-all active:scale-95 hover:opacity-90"
              style={{ background: a.color, boxShadow: `0 4px 16px ${a.color}40` }}
            >
              <div className="text-2xl mb-2">{a.icon}</div>
              <div className="text-white font-bold text-sm" style={{ fontFamily: "'Nunito', sans-serif" }}>
                {a.label}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Weekly sparkline */}
      <div className="px-5 pb-4 flex-shrink-0">
        <div className="bg-card rounded-2xl p-4 shadow-sm" style={{ border: "1.5px solid var(--border)" }}>
          <h3 className="font-bold text-sm mb-3" style={{ color: "var(--foreground)" }}>Palabras esta semana</h3>
          <ResponsiveContainer width="100%" height={80}>
            <BarChart data={weeklyData} barSize={18} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
              <XAxis dataKey="day" tick={{ fontSize: 10, fill: "#6B6A8A" }} axisLine={false} tickLine={false} />
              <YAxis hide />
              <Tooltip
                contentStyle={{ background: "#12112A", border: "none", borderRadius: 8, color: "#fff", fontSize: 11 }}
                cursor={{ fill: "rgba(75,53,255,0.06)" }}
              />
              <Bar dataKey="words" radius={[5, 5, 0, 0]}>
                {weeklyData.map((_, i) => (
                  <Cell key={i} fill={i === 5 ? "#4B35FF" : "#D8D6F5"} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Category preview */}
      <div className="px-5 pb-8 flex-shrink-0">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-sm uppercase tracking-wider" style={{ color: "var(--muted-foreground)" }}>
            Categorías
          </h2>
          <button
            onClick={() => onNavigate("categories")}
            className="text-xs font-bold"
            style={{ color: "#4B35FF" }}
          >
            Ver todas →
          </button>
        </div>
        <div className="space-y-2">
          {CATEGORIES.slice(0, 3).map((cat, i) => {
            const progress = [68, 42, 85][i];
            return (
              <button
                key={cat.id}
                onClick={() => onNavigate("categories")}
                className="w-full flex items-center gap-3 bg-card rounded-2xl p-3 text-left transition-shadow hover:shadow-md"
                style={{ border: "1.5px solid var(--border)" }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                  style={{ background: cat.color + "18" }}>
                  {cat.emoji}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-sm" style={{ color: "var(--foreground)" }}>{cat.name}</div>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ background: "var(--muted)" }}>
                      <div className="h-full rounded-full" style={{ width: `${progress}%`, background: cat.color }} />
                    </div>
                    <span className="text-xs font-semibold" style={{ color: cat.color, fontFamily: "'DM Mono', monospace" }}>
                      {progress}%
                    </span>
                  </div>
                </div>
                <ChevronRight size={14} style={{ color: "var(--muted-foreground)", flexShrink: 0 }} />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ─── Categories Screen ────────────────────────────────────────────────────────
function CategoriesScreen({ onSelectCategory }: {
  onSelectCategory: (cat: Category) => void;
}) {
  const [filter, setFilter] = useState<Level | "all">("all");

  const mockProgress: Record<string, number> = useMemo(() => ({
    family: 68, food: 42, travel: 85, work: 33, nature: 57, technology: 20,
    animals: 48, body_health: 61, education: 73, home: 39, sports: 55, shopping: 44,
  }), []);

  const filtered = CATEGORIES.filter(cat =>
    filter === "all" ? true : cat.words.some(w => w.level === filter)
  );

  const levels: { key: Level | "all"; label: string }[] = [
    { key: "all", label: "Todos" },
    { key: "basic", label: "Básico" },
    { key: "intermediate", label: "Intermedio" },
    { key: "advanced", label: "Avanzado" },
  ];

  return (
    <div className="flex flex-col h-full overflow-y-auto hide-scrollbar">
      <div className="px-5 pt-6 pb-3 flex-shrink-0">
        <h1 className="text-xl font-bold" style={{ color: "var(--foreground)", fontFamily: "'Nunito', sans-serif" }}>
          Categorías
        </h1>
        <p className="text-sm mt-0.5" style={{ color: "var(--muted-foreground)" }}>
          Elige un tema para estudiar
        </p>
      </div>

      <div className="px-5 pb-4 flex-shrink-0">
        <div className="flex gap-2 overflow-x-auto pb-1 hide-scrollbar">
          {levels.map(lv => (
            <button
              key={lv.key}
              onClick={() => setFilter(lv.key)}
              className="flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-semibold transition-all"
              style={{
                background: filter === lv.key ? "#4B35FF" : "var(--muted)",
                color: filter === lv.key ? "#fff" : "var(--muted-foreground)",
              }}
            >
              {lv.label}
            </button>
          ))}
        </div>
      </div>

      <div className="px-5 pb-8 grid grid-cols-2 gap-3">
        {filtered.map(cat => {
          const prog = mockProgress[cat.id] ?? 50;
          const wordCount = filter === "all"
            ? cat.words.length
            : cat.words.filter(w => w.level === filter).length;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat)}
              className="bg-card rounded-2xl overflow-hidden text-left transition-all active:scale-95 hover:shadow-md"
              style={{ border: "1.5px solid var(--border)" }}
            >
              <div className="h-2" style={{ background: cat.color }} />
              <div className="p-4">
                <div className="text-3xl mb-3">{cat.emoji}</div>
                <div className="font-bold text-sm mb-1" style={{ color: "var(--foreground)", fontFamily: "'Nunito', sans-serif" }}>
                  {cat.name}
                </div>
                <div className="text-xs mb-3" style={{ color: "var(--muted-foreground)" }}>
                  {wordCount} palabras
                </div>
                <div className="h-1.5 rounded-full overflow-hidden mb-1" style={{ background: "var(--muted)" }}>
                  <div className="h-full rounded-full transition-all duration-700"
                    style={{ width: `${prog}%`, background: cat.color }} />
                </div>
                <div className="text-xs font-bold" style={{ color: cat.color, fontFamily: "'DM Mono', monospace" }}>
                  {prog}%
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ─── Category Detail Screen ───────────────────────────────────────────────────
function CategoryDetailScreen({ category, onBack, onStartActivity }: {
  category: Category;
  onBack: () => void;
  onStartActivity: (mode: GameMode, catId: string) => void;
}) {
  const activities = [
    { mode: "flashcard" as GameMode, label: "Flashcards", desc: "Memoriza con tarjetas", icon: "🃏", color: "#4B35FF" },
    { mode: "match" as GameMode, label: "Match", desc: "Conecta pares en tiempo real", icon: "🎯", color: "#FF4E6A" },
    { mode: "test" as GameMode, label: "Test", desc: "Evalúa tu conocimiento", icon: "📝", color: "#FF8C00" },
  ];

  return (
    <div className="flex flex-col h-full overflow-y-auto hide-scrollbar">
      {/* Hero */}
      <div className="relative px-5 pt-6 pb-5 overflow-hidden flex-shrink-0"
        style={{ background: category.color }}>
        <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-white/15" />
        <div className="absolute right-12 bottom-2 w-10 h-10 rounded-full bg-white/10" />
        <button onClick={onBack}
          className="mb-4 w-8 h-8 rounded-full flex items-center justify-center bg-white/25">
          <ArrowLeft size={16} className="text-white" />
        </button>
        <div className="text-4xl mb-2">{category.emoji}</div>
        <h1 className="text-white text-xl font-bold" style={{ fontFamily: "'Nunito', sans-serif" }}>
          {category.name}
        </h1>
        <p className="text-white/70 text-sm">{category.words.length} palabras disponibles</p>
      </div>

      {/* Activities */}
      <div className="px-5 py-4 flex-shrink-0">
        <h2 className="font-bold text-sm uppercase tracking-wider mb-3" style={{ color: "var(--muted-foreground)" }}>
          Actividades
        </h2>
        <div className="space-y-2.5">
          {activities.map(act => (
            <button
              key={act.mode}
              onClick={() => onStartActivity(act.mode, category.id)}
              className="w-full flex items-center gap-4 bg-card rounded-2xl p-4 text-left transition-all active:scale-95 hover:shadow-md"
              style={{ border: "1.5px solid var(--border)" }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                style={{ background: act.color + "18" }}>
                {act.icon}
              </div>
              <div className="flex-1">
                <div className="font-bold text-sm" style={{ color: "var(--foreground)", fontFamily: "'Nunito', sans-serif" }}>
                  {act.label}
                </div>
                <div className="text-xs" style={{ color: "var(--muted-foreground)" }}>{act.desc}</div>
              </div>
              <ChevronRight size={16} style={{ color: "var(--muted-foreground)" }} />
            </button>
          ))}
        </div>
      </div>

      {/* Word list */}
      <div className="px-5 pb-8">
        <h2 className="font-bold text-sm uppercase tracking-wider mb-3" style={{ color: "var(--muted-foreground)" }}>
          Vocabulario
        </h2>
        <div className="space-y-2">
          {category.words.map(w => (
            <div key={w.id}
              className="flex items-center gap-3 bg-card rounded-xl p-3"
              style={{ border: "1.5px solid var(--border)" }}>
              <span className="text-xl flex-shrink-0">{w.emoji}</span>
              <div className="flex-1 min-w-0">
                <span className="font-semibold text-sm" style={{ color: "var(--foreground)" }}>{w.en}</span>
                <span className="text-xs ml-2" style={{ color: "var(--muted-foreground)" }}>{w.es}</span>
              </div>
              <LevelBadge level={w.level} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Flashcard Screen ─────────────────────────────────────────────────────────
function FlashcardScreen({ category, onBack, onComplete }: {
  category: Category;
  onBack: () => void;
  onComplete: (r: GameResult) => void;
}) {
  const words = useRef(shuffle(category.words)).current;
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [score, setScore] = useState(0);
  const startTime = useRef(Date.now());

  const word = words[index];
  const progress = (index / words.length) * 100;

  function respond(knew: boolean) {
    const newScore = score + (knew ? 1 : 0);
    if (index < words.length - 1) {
      if (knew) setScore(s => s + 1);
      setFlipped(false);
      setTimeout(() => setIndex(i => i + 1), 220);
    } else {
      onComplete({
        score: newScore,
        total: words.length,
        timeSeconds: Math.floor((Date.now() - startTime.current) / 1000),
        mode: "flashcard",
      });
    }
  }

  return (
    <div className="flex flex-col h-full" style={{ background: "var(--background)" }}>
      {/* Topbar */}
      <div className="flex items-center gap-3 px-5 pt-6 pb-4 flex-shrink-0">
        <button onClick={onBack}
          className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
          style={{ background: "var(--muted)" }}>
          <ArrowLeft size={17} style={{ color: "#4B35FF" }} />
        </button>
        <div className="flex-1">
          <div className="h-2 rounded-full overflow-hidden" style={{ background: "var(--muted)" }}>
            <div className="h-full rounded-full transition-all duration-500"
              style={{ width: `${progress}%`, background: "#4B35FF" }} />
          </div>
        </div>
        <span className="text-sm font-semibold flex-shrink-0"
          style={{ color: "var(--muted-foreground)", fontFamily: "'DM Mono', monospace" }}>
          {index + 1}/{words.length}
        </span>
      </div>

      <div className="px-5 mb-2 flex-shrink-0">
        <span className="text-xs font-bold uppercase tracking-wider" style={{ color: "#4B35FF" }}>
          {category.name} · Flashcards
        </span>
      </div>

      {/* Card */}
      <div className="flex-1 flex flex-col items-center justify-center px-5">
        <p className="text-xs font-semibold mb-4 uppercase tracking-wider" style={{ color: "var(--muted-foreground)" }}>
          {flipped ? "Traducción al español" : "Toca la tarjeta para revelar"}
        </p>

        <div
          className="w-full max-w-sm cursor-pointer select-none"
          style={{ perspective: "1200px" }}
          onClick={() => setFlipped(f => !f)}
        >
          <div style={{
            transformStyle: "preserve-3d",
            transition: "transform 0.55s cubic-bezier(0.4, 0, 0.2, 1)",
            transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
            position: "relative",
            height: 220,
          }}>
            {/* Front */}
            <div className="absolute inset-0 bg-card rounded-3xl flex flex-col items-center justify-center p-6"
              style={{
                backfaceVisibility: "hidden",
                border: "3px solid #4B35FF",
                boxShadow: "0 8px 32px rgba(75,53,255,0.15)",
              }}>
              <div className="text-6xl mb-4">{word.emoji}</div>
              <h2 className="text-3xl font-bold text-center" style={{ color: "var(--foreground)", fontFamily: "'Nunito', sans-serif" }}>
                {word.en}
              </h2>
              <span className="mt-3 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full"
                style={{ background: "#4B35FF18", color: "#4B35FF" }}>
                inglés
              </span>
            </div>

            {/* Back */}
            <div className="absolute inset-0 rounded-3xl flex flex-col items-center justify-center p-6"
              style={{
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
                background: "#4B35FF",
                boxShadow: "0 8px 32px rgba(75,53,255,0.35)",
              }}>
              <div className="text-5xl mb-3">{word.emoji}</div>
              <h2 className="text-3xl font-bold text-center text-white" style={{ fontFamily: "'Nunito', sans-serif" }}>
                {word.es}
              </h2>
              <p className="text-white/70 text-sm mt-3 text-center leading-relaxed px-2">
                "{word.example}"
              </p>
            </div>
          </div>
        </div>

        <button className="mt-5 flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold"
          style={{ background: "var(--muted)", color: "#4B35FF" }}>
          <Volume2 size={13} />
          Pronunciar
        </button>
      </div>

      {/* Actions */}
      <div className="px-5 pb-8 flex-shrink-0">
        {flipped ? (
          <div className="flex gap-4">
            <button
              onClick={() => respond(false)}
              className="flex-1 flex items-center justify-center gap-2 py-4 rounded-2xl font-bold text-base transition-all active:scale-95"
              style={{ background: "#FFE8EC", color: "#FF4E6A", border: "2px solid #FF4E6A" }}>
              <X size={20} />
              Revisar
            </button>
            <button
              onClick={() => respond(true)}
              className="flex-1 flex items-center justify-center gap-2 py-4 rounded-2xl font-bold text-base transition-all active:scale-95"
              style={{ background: "#4B35FF", color: "#fff" }}>
              <Check size={20} />
              Lo sé
            </button>
          </div>
        ) : (
          <button
            onClick={() => setFlipped(true)}
            className="w-full py-4 rounded-2xl font-bold text-base transition-all"
            style={{ background: "var(--muted)", color: "#4B35FF" }}>
            Revelar traducción
          </button>
        )}
      </div>
    </div>
  );
}

// ─── Match Screen ─────────────────────────────────────────────────────────────
function MatchScreen({ category, onBack, onComplete }: {
  category: Category;
  onBack: () => void;
  onComplete: (r: GameResult) => void;
}) {
  const matchWords = useRef(shuffle(category.words).slice(0, 5)).current;

  const initialTiles = useMemo((): MatchTile[] => {
    const tiles: MatchTile[] = [];
    matchWords.forEach(w => {
      tiles.push({ id: `${w.id}-en`, wordId: w.id, content: w.en, type: "en", status: "idle" });
      tiles.push({ id: `${w.id}-es`, wordId: w.id, content: w.es, type: "es", status: "idle" });
    });
    return shuffle(tiles);
  }, [matchWords]);

  const [tiles, setTiles] = useState<MatchTile[]>(initialTiles);
  const [selected, setSelected] = useState<string | null>(null);
  const [matched, setMatched] = useState(0);
  const [locked, setLocked] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [done, setDone] = useState(false);
  const startTime = useRef(Date.now());
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      if (!done) setElapsed(e => e + 1);
    }, 1000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [done]);

  function handleTap(tileId: string) {
    if (done || locked) return;
    const tile = tiles.find(t => t.id === tileId);
    if (!tile || tile.status === "matched" || tile.status === "wrong") return;

    if (!selected) {
      setSelected(tileId);
      setTiles(prev => prev.map(t => t.id === tileId ? { ...t, status: "selected" } : t));
      return;
    }
    if (selected === tileId) {
      setSelected(null);
      setTiles(prev => prev.map(t => t.id === tileId ? { ...t, status: "idle" } : t));
      return;
    }

    const selTile = tiles.find(t => t.id === selected)!;
    const isMatch = selTile.wordId === tile.wordId && selTile.type !== tile.type;

    if (isMatch) {
      const newCount = matched + 1;
      setMatched(newCount);
      setSelected(null);
      setTiles(prev => prev.map(t =>
        t.id === tileId || t.id === selected ? { ...t, status: "matched" } : t
      ));
      if (newCount >= matchWords.length) {
        setDone(true);
        if (timerRef.current) clearInterval(timerRef.current);
        const t = Math.floor((Date.now() - startTime.current) / 1000);
        setTimeout(() => onComplete({ score: newCount, total: matchWords.length, timeSeconds: t, mode: "match" }), 500);
      }
    } else {
      setLocked(true);
      setSelected(null);
      setTiles(prev => prev.map(t =>
        t.id === tileId || t.id === selected ? { ...t, status: "wrong" } : t
      ));
      timeoutRef.current = setTimeout(() => {
        setTiles(prev => prev.map(t => t.status === "wrong" ? { ...t, status: "idle" } : t));
        setLocked(false);
      }, 800);
    }
  }

  const mins = String(Math.floor(elapsed / 60)).padStart(2, "0");
  const secs = String(elapsed % 60).padStart(2, "0");

  function tileStyle(tile: MatchTile): React.CSSProperties {
    if (tile.status === "matched") return { background: "#E8FFF3", color: "#2ECC71", border: "2px solid #2ECC71", opacity: 0.55 };
    if (tile.status === "selected") return { background: "#4B35FF", color: "#fff", border: "2px solid #4B35FF" };
    if (tile.status === "wrong") return { background: "#FFE8EC", color: "#FF4E6A", border: "2px solid #FF4E6A" };
    return { background: "var(--card)", color: "var(--foreground)", border: "2px solid var(--border)" };
  }

  return (
    <div className="flex flex-col h-full" style={{ background: "var(--background)" }}>
      <div className="flex items-center gap-3 px-5 pt-6 pb-4 flex-shrink-0">
        <button onClick={onBack}
          className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
          style={{ background: "var(--muted)" }}>
          <ArrowLeft size={17} style={{ color: "#4B35FF" }} />
        </button>
        <div className="flex-1">
          <h2 className="font-bold text-sm" style={{ color: "var(--foreground)", fontFamily: "'Nunito', sans-serif" }}>
            Match · {category.name}
          </h2>
          <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>
            {matched}/{matchWords.length} pares encontrados
          </p>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full flex-shrink-0"
          style={{ background: "var(--muted)" }}>
          <Clock size={12} style={{ color: "#4B35FF" }} />
          <span className="text-sm font-bold" style={{ color: "#4B35FF", fontFamily: "'DM Mono', monospace" }}>
            {mins}:{secs}
          </span>
        </div>
      </div>

      {/* Language hint */}
      <div className="px-5 mb-3 flex items-center gap-3 flex-shrink-0">
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold"
          style={{ background: "#4B35FF18", color: "#4B35FF" }}>
          EN inglés
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold"
          style={{ background: "#FF4E6A18", color: "#FF4E6A" }}>
          ES español
        </div>
        <span className="text-xs" style={{ color: "var(--muted-foreground)" }}>
          — Conecta los pares
        </span>
      </div>

      {/* Tiles */}
      <div className="flex-1 px-5 overflow-hidden">
        <div className="grid grid-cols-2 gap-3">
          {tiles.map(tile => (
            <button
              key={tile.id}
              onClick={() => handleTap(tile.id)}
              className="rounded-2xl py-3 px-3 font-semibold text-sm text-center transition-all duration-200 active:scale-95 relative"
              style={{ ...tileStyle(tile), minHeight: 60 }}
            >
              <span className="absolute top-1.5 left-2 text-[9px] font-bold opacity-50 uppercase"
                style={{ fontFamily: "'DM Mono', monospace" }}>
                {tile.type}
              </span>
              <span className="block mt-1">
                {tile.status === "matched" ? "✓" : tile.content}
              </span>
            </button>
          ))}
        </div>
      </div>
      <div className="pb-6" />
    </div>
  );
}

// ─── Test Screen ──────────────────────────────────────────────────────────────
function TestScreen({ category, onBack, onComplete }: {
  category: Category;
  onBack: () => void;
  onComplete: (r: GameResult) => void;
}) {
  const testWords = useRef(shuffle(category.words).slice(0, Math.min(6, category.words.length))).current;
  const [index, setIndex] = useState(0);
  const [options, setOptions] = useState(() => generateTestOptions(testWords[0]));
  const [selected, setSelected] = useState<string | null>(null);
  const correctRef = useRef(0);
  const startTime = useRef(Date.now());

  const word = testWords[index];
  const progress = (index / testWords.length) * 100;

  function pick(opt: string) {
    if (selected !== null) return;
    setSelected(opt);
    if (opt === word.es) correctRef.current += 1;
  }

  function next() {
    if (index < testWords.length - 1) {
      const ni = index + 1;
      setIndex(ni);
      setOptions(generateTestOptions(testWords[ni]));
      setSelected(null);
    } else {
      onComplete({
        score: correctRef.current,
        total: testWords.length,
        timeSeconds: Math.floor((Date.now() - startTime.current) / 1000),
        mode: "test",
      });
    }
  }

  function optionStyle(opt: string): React.CSSProperties {
    if (!selected) return { background: "var(--card)", color: "var(--foreground)", border: "2px solid var(--border)" };
    if (opt === word.es) return { background: "#E8FFF3", color: "#2ECC71", border: "2px solid #2ECC71" };
    if (opt === selected) return { background: "#FFE8EC", color: "#FF4E6A", border: "2px solid #FF4E6A" };
    return { background: "var(--card)", color: "var(--muted-foreground)", border: "2px solid var(--border)", opacity: 0.6 };
  }

  return (
    <div className="flex flex-col h-full" style={{ background: "var(--background)" }}>
      <div className="flex items-center gap-3 px-5 pt-6 pb-4 flex-shrink-0">
        <button onClick={onBack}
          className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
          style={{ background: "var(--muted)" }}>
          <ArrowLeft size={17} style={{ color: "#FF8C00" }} />
        </button>
        <div className="flex-1">
          <div className="h-2 rounded-full overflow-hidden" style={{ background: "var(--muted)" }}>
            <div className="h-full rounded-full transition-all duration-500"
              style={{ width: `${progress}%`, background: "#FF8C00" }} />
          </div>
        </div>
        <span className="text-sm font-semibold flex-shrink-0"
          style={{ color: "var(--muted-foreground)", fontFamily: "'DM Mono', monospace" }}>
          {index + 1}/{testWords.length}
        </span>
      </div>

      <div className="flex-1 px-5 flex flex-col overflow-y-auto hide-scrollbar">
        <div className="mb-5 flex-shrink-0">
          <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: "var(--muted-foreground)" }}>
            ¿Qué significa en español?
          </p>
          <div className="bg-card rounded-3xl flex flex-col items-center py-7 px-6"
            style={{ border: "3px solid #FF8C00", boxShadow: "0 6px 24px rgba(255,140,0,0.15)" }}>
            <div className="text-5xl mb-4">{word.emoji}</div>
            <h2 className="text-3xl font-bold text-center" style={{ color: "var(--foreground)", fontFamily: "'Nunito', sans-serif" }}>
              {word.en}
            </h2>
          </div>
        </div>

        <div className="space-y-3 flex-shrink-0">
          {options.map((opt, i) => (
            <button
              key={opt}
              onClick={() => pick(opt)}
              className="w-full text-left px-5 py-4 rounded-2xl font-semibold text-sm transition-all active:scale-95"
              style={optionStyle(opt)}
            >
              <span className="font-bold mr-3" style={{ fontFamily: "'DM Mono', monospace" }}>
                {String.fromCharCode(65 + i)}.
              </span>
              {opt}
              {selected && opt === word.es && (
                <Check size={14} className="inline ml-2" style={{ color: "#2ECC71" }} />
              )}
              {selected && opt === selected && opt !== word.es && (
                <X size={14} className="inline ml-2" style={{ color: "#FF4E6A" }} />
              )}
            </button>
          ))}
        </div>

        {selected && (
          <button
            onClick={next}
            className="mt-5 w-full py-4 rounded-2xl font-bold text-base text-white flex-shrink-0"
            style={{ background: "#4B35FF" }}>
            {index < testWords.length - 1 ? "Siguiente →" : "Ver resultados"}
          </button>
        )}
        <div className="pb-6" />
      </div>
    </div>
  );
}

// ─── Results Screen ───────────────────────────────────────────────────────────
function ResultsScreen({ result, onRetry, onHome }: {
  result: GameResult;
  onRetry: () => void;
  onHome: () => void;
}) {
  const pct = Math.round((result.score / result.total) * 100);
  const { emoji, msg, ringColor } =
    pct >= 80 ? { emoji: "🏆", msg: "¡Excelente trabajo!", ringColor: "#2ECC71" }
    : pct >= 60 ? { emoji: "⭐", msg: "¡Bien hecho!", ringColor: "#FF8C00" }
    : { emoji: "💪", msg: "¡Sigue practicando!", ringColor: "#FF4E6A" };

  const mins = Math.floor(result.timeSeconds / 60);
  const secs = result.timeSeconds % 60;
  const timeStr = mins > 0 ? `${mins}m ${secs}s` : `${secs}s`;

  const modeLabel = result.mode === "flashcard" ? "Flashcards" : result.mode === "match" ? "Match" : "Test";

  return (
    <div className="flex flex-col h-full items-center justify-center px-6 relative overflow-hidden"
      style={{ background: "var(--background)" }}>
      {/* Memphis decoration */}
      <div className="absolute top-10 left-4 w-20 h-20 rounded-full" style={{ background: "rgba(255,225,53,0.3)" }} />
      <div className="absolute top-20 right-6 w-0 h-0"
        style={{ borderLeft: "18px solid transparent", borderRight: "18px solid transparent", borderBottom: "30px solid rgba(255,78,106,0.2)" }} />
      <div className="absolute bottom-28 left-8 w-14 h-14 rounded-full" style={{ background: "rgba(75,53,255,0.12)" }} />
      <div className="absolute bottom-20 right-4 w-10 h-10 rounded-full" style={{ background: "rgba(0,196,167,0.18)" }} />

      <div className="text-7xl mb-3 relative z-10">{emoji}</div>
      <h1 className="text-2xl font-bold mb-1 relative z-10 text-center"
        style={{ color: "var(--foreground)", fontFamily: "'Nunito', sans-serif" }}>
        {msg}
      </h1>
      <p className="text-sm mb-7 relative z-10" style={{ color: "var(--muted-foreground)" }}>
        Actividad de {modeLabel} completada
      </p>

      <div className="relative mb-7 z-10">
        <ProgressRing pct={pct} size={136} stroke={10} color={ringColor} />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-3xl font-bold" style={{ color: "var(--foreground)", fontFamily: "'DM Mono', monospace" }}>
            {pct}%
          </span>
          <span className="text-xs" style={{ color: "var(--muted-foreground)" }}>aciertos</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 mb-7 w-full z-10">
        {[
          { label: "Correctas", value: `${result.score}/${result.total}`, icon: "✅" },
          { label: "Tiempo", value: timeStr, icon: "⏱️" },
          { label: "Modo", value: modeLabel, icon: "🎮" },
        ].map(s => (
          <div key={s.label} className="bg-card rounded-2xl p-3 text-center"
            style={{ border: "1.5px solid var(--border)" }}>
            <div className="text-xl mb-1">{s.icon}</div>
            <div className="font-bold text-xs leading-tight" style={{ color: "var(--foreground)", fontFamily: "'DM Mono', monospace" }}>
              {s.value}
            </div>
            <div className="text-xs mt-0.5" style={{ color: "var(--muted-foreground)" }}>{s.label}</div>
          </div>
        ))}
      </div>

      <div className="w-full space-y-3 z-10">
        <button onClick={onRetry}
          className="w-full py-4 rounded-2xl font-bold text-base text-white transition-all active:scale-95"
          style={{ background: "#4B35FF" }}>
          Intentar de nuevo
        </button>
        <button onClick={onHome}
          className="w-full py-4 rounded-2xl font-bold text-base transition-all active:scale-95"
          style={{ background: "var(--muted)", color: "#4B35FF" }}>
          Ir al inicio
        </button>
      </div>
    </div>
  );
}

// ─── Progress Screen ──────────────────────────────────────────────────────────
function ProgressScreen() {
  const weeklyData = [
    { day: "L", words: 8 }, { day: "M", words: 12 }, { day: "X", words: 5 },
    { day: "J", words: 15 }, { day: "V", words: 10 }, { day: "S", words: 18 },
    { day: "D", words: 7 },
  ];

  const catProgress = useMemo(() =>
    CATEGORIES.map((cat, i) => ({
      ...cat,
      prog: [68, 42, 85, 33, 57, 20, 48, 61, 73, 39, 55, 44][i] ?? 50,
      learned: Math.round(cat.words.length * ([0.68, 0.42, 0.85, 0.33, 0.57, 0.20, 0.48, 0.61, 0.73, 0.39, 0.55, 0.44][i] ?? 0.5)),
    })), []
  );

  const testHistory = [
    { date: "23 ago", mode: "Test", score: "5/6", pct: 83 },
    { date: "22 ago", mode: "Match", score: "5/5", pct: 100 },
    { date: "21 ago", mode: "Test", score: "4/6", pct: 67 },
    { date: "20 ago", mode: "Flashcards", score: "8/8", pct: 100 },
  ];

  return (
    <div className="flex flex-col h-full overflow-y-auto hide-scrollbar">
      <div className="px-5 pt-6 pb-3 flex-shrink-0">
        <h1 className="text-xl font-bold" style={{ color: "var(--foreground)", fontFamily: "'Nunito', sans-serif" }}>
          Tu Progreso
        </h1>
        <p className="text-sm mt-0.5" style={{ color: "var(--muted-foreground)" }}>
          Semana del 19–25 ago 2026
        </p>
      </div>

      {/* Hero stats */}
      <div className="px-5 mb-4 grid grid-cols-2 gap-3 flex-shrink-0">
        <div className="bg-card rounded-2xl p-4" style={{ border: "1.5px solid var(--border)" }}>
          <div className="flex items-center gap-1.5 mb-2">
            <Star size={14} style={{ color: "#4B35FF" }} />
            <span className="text-xs font-semibold" style={{ color: "var(--muted-foreground)" }}>Total aprendidas</span>
          </div>
          <div className="text-3xl font-bold" style={{ color: "var(--foreground)", fontFamily: "'DM Mono', monospace" }}>
            124
          </div>
          <div className="text-xs mt-1" style={{ color: "#4B35FF" }}>+12 esta semana</div>
        </div>
        <div className="bg-card rounded-2xl p-4" style={{ border: "1.5px solid var(--border)" }}>
          <div className="flex items-center gap-1.5 mb-2">
            <Flame size={14} style={{ color: "#FF4E6A" }} />
            <span className="text-xs font-semibold" style={{ color: "var(--muted-foreground)" }}>Racha actual</span>
          </div>
          <div className="flex items-end gap-1">
            <span className="text-3xl font-bold" style={{ color: "var(--foreground)", fontFamily: "'DM Mono', monospace" }}>7</span>
            <span className="text-sm mb-0.5" style={{ color: "var(--muted-foreground)" }}>días</span>
          </div>
          <div className="text-xs mt-1" style={{ color: "#FF4E6A" }}>Mejor: 14 días</div>
        </div>
      </div>

      {/* Secondary stats */}
      <div className="px-5 mb-4 grid grid-cols-3 gap-3 flex-shrink-0">
        {[
          { label: "Sesiones", value: "28", icon: <Brain size={13} style={{ color: "#FF8C00" }} />, color: "#FF8C00" },
          { label: "Minutos", value: "342", icon: <Clock size={13} style={{ color: "#00C4A7" }} />, color: "#00C4A7" },
          { label: "Precisión", value: "78%", icon: <Target size={13} style={{ color: "#9B59B6" }} />, color: "#9B59B6" },
        ].map(s => (
          <div key={s.label} className="bg-card rounded-2xl p-3 text-center" style={{ border: "1.5px solid var(--border)" }}>
            <div className="flex justify-center mb-1">{s.icon}</div>
            <div className="font-bold text-base" style={{ color: s.color, fontFamily: "'DM Mono', monospace" }}>{s.value}</div>
            <div className="text-xs" style={{ color: "var(--muted-foreground)" }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Weekly chart */}
      <div className="px-5 mb-4 flex-shrink-0">
        <div className="bg-card rounded-2xl p-4" style={{ border: "1.5px solid var(--border)" }}>
          <h3 className="font-bold text-sm mb-1" style={{ color: "var(--foreground)" }}>Palabras por día</h3>
          <p className="text-xs mb-4" style={{ color: "var(--muted-foreground)" }}>Esta semana</p>
          <ResponsiveContainer width="100%" height={110}>
            <BarChart data={weeklyData} barSize={22} margin={{ top: 0, right: 0, left: -24, bottom: 0 }}>
              <XAxis dataKey="day" tick={{ fontSize: 11, fill: "#6B6A8A" }} axisLine={false} tickLine={false} />
              <YAxis hide />
              <Tooltip
                contentStyle={{ background: "#12112A", border: "none", borderRadius: 8, color: "#fff", fontSize: 11 }}
                cursor={{ fill: "rgba(75,53,255,0.07)" }}
                formatter={(v: number) => [`${v} palabras`, ""]}
              />
              <Bar dataKey="words" radius={[6, 6, 0, 0]}>
                {weeklyData.map((_, i) => (
                  <Cell key={i} fill={i === 5 ? "#4B35FF" : "#D6D3F8"} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Category progress */}
      <div className="px-5 mb-4 flex-shrink-0">
        <h3 className="font-bold text-sm uppercase tracking-wider mb-3" style={{ color: "var(--muted-foreground)" }}>
          Por categoría
        </h3>
        <div className="space-y-2.5">
          {catProgress.map(cat => (
            <div key={cat.id} className="bg-card rounded-2xl p-4" style={{ border: "1.5px solid var(--border)" }}>
              <div className="flex items-center gap-3 mb-2.5">
                <span className="text-xl">{cat.emoji}</span>
                <span className="font-semibold text-sm flex-1" style={{ color: "var(--foreground)", fontFamily: "'Nunito', sans-serif" }}>
                  {cat.name}
                </span>
                <span className="text-sm font-bold" style={{ color: cat.color, fontFamily: "'DM Mono', monospace" }}>
                  {cat.prog}%
                </span>
              </div>
              <div className="h-2 rounded-full overflow-hidden" style={{ background: "var(--muted)" }}>
                <div className="h-full rounded-full transition-all duration-700"
                  style={{ width: `${cat.prog}%`, background: cat.color }} />
              </div>
              <p className="text-xs mt-1.5" style={{ color: "var(--muted-foreground)" }}>
                {cat.learned} / {cat.words.length} palabras · <span style={{ color: cat.color }}>{cat.words.length - cat.learned} pendientes</span>
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Recent activity */}
      <div className="px-5 pb-8 flex-shrink-0">
        <h3 className="font-bold text-sm uppercase tracking-wider mb-3" style={{ color: "var(--muted-foreground)" }}>
          Actividad reciente
        </h3>
        <div className="space-y-2">
          {testHistory.map((h, i) => (
            <div key={i} className="flex items-center gap-3 bg-card rounded-xl p-3"
              style={{ border: "1.5px solid var(--border)" }}>
              <div className="w-9 h-9 rounded-xl flex items-center justify-center text-base flex-shrink-0"
                style={{ background: h.pct >= 80 ? "#E8FFF3" : h.pct >= 60 ? "#FFF4E0" : "#FFE8EC" }}>
                {h.pct >= 80 ? "🏆" : h.pct >= 60 ? "⭐" : "💪"}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-sm" style={{ color: "var(--foreground)" }}>{h.mode}</span>
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full"
                    style={{
                      background: h.pct >= 80 ? "#E8FFF3" : h.pct >= 60 ? "#FFF4E0" : "#FFE8EC",
                      color: h.pct >= 80 ? "#2ECC71" : h.pct >= 60 ? "#FF8C00" : "#FF4E6A",
                    }}>
                    {h.pct}%
                  </span>
                </div>
                <div className="text-xs" style={{ color: "var(--muted-foreground)" }}>{h.date} · {h.score} correctas</div>
              </div>
              <Zap size={14} style={{ color: h.pct >= 80 ? "#2ECC71" : "var(--muted-foreground)", flexShrink: 0 }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Welcome / Onboarding Screen ─────────────────────────────────────────────
function WelcomeScreen({ onComplete }: { onComplete: () => void }) {
  const [slide, setSlide] = useState(0);
  const TOTAL = 3;
  const isDark = slide === 0;

  function next() {
    if (slide < TOTAL - 1) setSlide(s => s + 1);
    else onComplete();
  }

  return (
    <div className="flex flex-col h-full relative overflow-hidden">

      {/* Skip — visible on slides 0 & 1 */}
      {slide < TOTAL - 1 && (
        <button
          onClick={onComplete}
          className="absolute top-4 right-5 z-20 text-xs font-bold px-3 py-1.5 rounded-full transition-all"
          style={{
            background: isDark ? "rgba(255,255,255,0.14)" : "var(--muted)",
            color: isDark ? "rgba(255,255,255,0.65)" : "var(--muted-foreground)",
          }}
        >
          Saltar
        </button>
      )}

      {/* ── Slide content ── */}
      <div className="flex-1 overflow-hidden">
        <div key={slide} className="screen-in h-full">

          {/* ─ Slide 0: Brand ─ */}
          {slide === 0 && (
            <div
              className="flex flex-col items-center justify-center h-full px-8 text-center relative overflow-hidden"
              style={{ background: "linear-gradient(150deg, #2E1ECC 0%, #4B35FF 45%, #7B5FFF 100%)" }}
            >
              {/* Memphis shapes */}
              <div className="absolute -top-12 -right-12 w-52 h-52 rounded-full"
                style={{ background: "rgba(255,225,53,0.18)" }} />
              <div className="absolute top-24 right-5 w-14 h-14 rounded-full"
                style={{ background: "rgba(0,196,167,0.25)" }} />
              <div className="absolute top-16 right-24 w-6 h-6 rounded-full"
                style={{ background: "rgba(255,225,53,0.45)" }} />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full"
                style={{ background: "rgba(255,78,106,0.18)" }} />
              <div className="absolute bottom-32 left-5 w-0 h-0"
                style={{ borderLeft: "16px solid transparent", borderRight: "16px solid transparent", borderBottom: "28px solid rgba(255,225,53,0.35)" }} />
              <div className="absolute bottom-20 right-10 w-8 h-8 rounded-full"
                style={{ background: "rgba(255,78,106,0.30)" }} />

              {/* Logo mark */}
              <div className="relative z-10 mb-7">
                <div
                  className="w-28 h-28 rounded-[28px] flex items-center justify-center mx-auto"
                  style={{
                    background: "#FFE135",
                    boxShadow: "0 0 0 8px rgba(255,225,53,0.20), 0 16px 48px rgba(255,225,53,0.35)",
                  }}
                >
                  <span
                    className="text-5xl font-black select-none"
                    style={{ color: "#12112A", fontFamily: "'Nunito', sans-serif", letterSpacing: "-2px" }}
                  >
                    IF
                  </span>
                </div>
                {/* Glow ring */}
                <div
                  className="absolute inset-0 rounded-[28px] pointer-events-none"
                  style={{
                    boxShadow: "0 0 60px 12px rgba(255,225,53,0.20)",
                    margin: -8,
                    borderRadius: 36,
                  }}
                />
              </div>

              <h1
                className="text-white text-[2.6rem] font-black leading-none mb-3 relative z-10"
                style={{ fontFamily: "'Nunito', sans-serif", letterSpacing: "-1px" }}
              >
                IdiomaFácil
              </h1>
              <p
                className="font-semibold mb-4 relative z-10"
                style={{ color: "rgba(255,255,255,0.80)", fontSize: 17, lineHeight: 1.45 }}
              >
                Tu camino al inglés fluido
              </p>
              <p
                className="text-sm relative z-10"
                style={{ color: "rgba(255,255,255,0.48)", lineHeight: 1.7, maxWidth: 270 }}
              >
                Flashcards inteligentes, juegos de vocabulario y análisis de progreso — todo en un solo lugar.
              </p>

              {/* Decorative dashed line */}
              <div
                className="absolute bottom-40 left-0 right-0 h-px opacity-15"
                style={{ background: "repeating-linear-gradient(90deg,#fff 0,#fff 8px,transparent 8px,transparent 16px)" }}
              />
            </div>
          )}

          {/* ─ Slide 1: Method ─ */}
          {slide === 1 && (
            <div
              className="flex flex-col h-full px-6 pt-14 pb-2 relative overflow-hidden"
              style={{ background: "var(--background)" }}
            >
              {/* Memphis shapes */}
              <div className="absolute -top-8 -right-8 w-36 h-36 rounded-full"
                style={{ background: "rgba(75,53,255,0.07)" }} />
              <div className="absolute top-40 -left-6 w-20 h-20 rounded-full"
                style={{ background: "rgba(255,78,106,0.09)" }} />
              <div className="absolute bottom-28 right-4 w-0 h-0"
                style={{ borderLeft: "14px solid transparent", borderRight: "14px solid transparent", borderBottom: "24px solid rgba(255,225,53,0.45)" }} />

              <div className="relative z-10">
                <span
                  className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4"
                  style={{ background: "#4B35FF14", color: "#4B35FF" }}
                >
                  Método efectivo
                </span>

                <h2
                  className="font-black mb-2 leading-tight"
                  style={{ color: "var(--foreground)", fontFamily: "'Nunito', sans-serif", fontSize: "2rem", letterSpacing: "-0.5px" }}
                >
                  Aprende de{" "}
                  <span style={{ color: "#4B35FF" }}>verdad</span>
                </h2>

                <p className="text-sm mb-7" style={{ color: "var(--muted-foreground)", lineHeight: 1.65 }}>
                  Tres actividades con respaldo científico para retener vocabulario a largo plazo.
                </p>

                <div className="space-y-3.5">
                  {[
                    {
                      icon: "🃏", color: "#4B35FF",
                      title: "Flashcards inteligentes",
                      desc: "Repetición espaciada que se adapta a lo que más necesitas repasar",
                    },
                    {
                      icon: "🎯", color: "#FF4E6A",
                      title: "Juego Match",
                      desc: "Empareja palabras con sus traducciones contrarreloj y supera tus marcas",
                    },
                    {
                      icon: "📝", color: "#FF8C00",
                      title: "Tests de evaluación",
                      desc: "Opción múltiple que mide exactamente cuánto vocabulario dominas",
                    },
                  ].map(f => (
                    <div
                      key={f.title}
                      className="flex items-start gap-4 bg-card rounded-2xl p-4"
                      style={{ border: `2px solid ${f.color}1A`, boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}
                    >
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                        style={{ background: f.color + "15" }}
                      >
                        {f.icon}
                      </div>
                      <div>
                        <div
                          className="font-bold text-sm mb-0.5"
                          style={{ color: "var(--foreground)", fontFamily: "'Nunito', sans-serif" }}
                        >
                          {f.title}
                        </div>
                        <div className="text-xs leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                          {f.desc}
                        </div>
                      </div>
                      {/* Colored left accent */}
                      <div
                        className="absolute left-0 top-3 bottom-3 w-1 rounded-r-full"
                        style={{ background: f.color }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ─ Slide 2: Progress ─ */}
          {slide === 2 && (
            <div
              className="flex flex-col h-full px-6 pt-14 pb-2 relative overflow-hidden"
              style={{ background: "var(--background)" }}
            >
              {/* Memphis shapes */}
              <div className="absolute -top-6 right-8 w-0 h-0"
                style={{ borderLeft: "26px solid transparent", borderRight: "26px solid transparent", borderBottom: "44px solid rgba(255,225,53,0.45)" }} />
              <div className="absolute top-4 -left-8 w-28 h-28 rounded-full"
                style={{ background: "rgba(0,196,167,0.10)" }} />
              <div className="absolute bottom-36 -right-4 w-20 h-20 rounded-full"
                style={{ background: "rgba(255,78,106,0.09)" }} />

              <div className="relative z-10">
                <span
                  className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4"
                  style={{ background: "#FF4E6A14", color: "#FF4E6A" }}
                >
                  Seguimiento
                </span>

                <h2
                  className="font-black mb-2 leading-tight"
                  style={{ color: "var(--foreground)", fontFamily: "'Nunito', sans-serif", fontSize: "2rem", letterSpacing: "-0.5px" }}
                >
                  Ve tus avances{" "}
                  <span style={{ color: "#FF4E6A" }}>cada día</span>
                </h2>

                <p className="text-sm mb-6" style={{ color: "var(--muted-foreground)", lineHeight: 1.65 }}>
                  Mantén tu racha, mide tu precisión y descubre qué categorías necesitan más práctica.
                </p>

                {/* Stats grid */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {[
                    { icon: "📚", label: "Categorías", value: "12", color: "#4B35FF" },
                    { icon: "🔤", label: "Palabras", value: "3000+", color: "#FF8C00" },
                    { icon: "🌍", label: "Niveles", value: "3", color: "#00C4A7" },
                  ].map(s => (
                    <div
                      key={s.label}
                      className="bg-card rounded-2xl p-3 text-center"
                      style={{ border: "1.5px solid var(--border)", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}
                    >
                      <div className="text-2xl mb-1">{s.icon}</div>
                      <div
                        className="font-black text-xl"
                        style={{ color: s.color, fontFamily: "'DM Mono', monospace" }}
                      >
                        {s.value}
                      </div>
                      <div className="text-xs mt-0.5" style={{ color: "var(--muted-foreground)" }}>{s.label}</div>
                    </div>
                  ))}
                </div>

                {/* Feature list */}
                <div className="space-y-3.5">
                  {[
                    { icon: "🔥", text: "Racha diaria para mantenerte motivado" },
                    { icon: "📈", text: "Gráficos de progreso semanal detallados" },
                    { icon: "🏆", text: "Resultados y puntuación tras cada actividad" },
                    { icon: "🧠", text: "Repetición espaciada inteligente (SM-2)" },
                  ].map(item => (
                    <div key={item.text} className="flex items-center gap-3">
                      <span className="text-xl w-8 text-center flex-shrink-0">{item.icon}</span>
                      <span className="text-sm font-medium" style={{ color: "var(--foreground)" }}>
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>
      </div>

      {/* ── Bottom controls ── */}
      <div
        className="px-6 pt-5 pb-8 flex flex-col gap-4 flex-shrink-0"
        style={{
          background: isDark
            ? "linear-gradient(to top, rgba(36,22,200,0.95) 0%, rgba(36,22,200,0) 100%)"
            : "var(--background)",
        }}
      >
        {/* Slide dots */}
        <div className="flex justify-center items-center gap-2">
          {Array.from({ length: TOTAL }).map((_, i) => (
            <button
              key={i}
              onClick={() => setSlide(i)}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === slide ? 28 : 8,
                height: 8,
                background: isDark
                  ? i === slide ? "#FFE135" : "rgba(255,255,255,0.28)"
                  : i === slide ? "#4B35FF" : "rgba(75,53,255,0.20)",
              }}
            />
          ))}
        </div>

        {/* CTA button */}
        <button
          onClick={next}
          className="w-full py-4 rounded-2xl font-bold text-base transition-all active:scale-95"
          style={{
            background: isDark ? "#FFE135" : "#4B35FF",
            color: isDark ? "#12112A" : "#fff",
            boxShadow: isDark
              ? "0 8px 24px rgba(255,225,53,0.35)"
              : "0 8px 24px rgba(75,53,255,0.30)",
            fontFamily: "'Nunito', sans-serif",
            fontSize: "1rem",
          }}
        >
          {slide < TOTAL - 1 ? "Siguiente →" : "¡Comenzar ahora! 🚀"}
        </button>
      </div>

    </div>
  );
}

// ─── Bottom Nav ───────────────────────────────────────────────────────────────
function BottomNav({ active, onChange }: {
  active: NavTab;
  onChange: (t: NavTab) => void;
}) {
  const tabs: { key: NavTab; Icon: React.ElementType; label: string }[] = [
    { key: "home", Icon: Home, label: "Inicio" },
    { key: "categories", Icon: BookOpen, label: "Categorías" },
    { key: "progress", Icon: BarChart3, label: "Progreso" },
  ];

  return (
    <div className="flex items-center justify-around px-2 py-2 flex-shrink-0"
      style={{ background: "var(--card)", borderTop: "1.5px solid var(--border)" }}>
      {tabs.map(({ key, Icon, label }) => {
        const isActive = active === key;
        return (
          <button
            key={key}
            onClick={() => onChange(key)}
            className="flex flex-col items-center gap-1 px-5 py-1.5 rounded-xl transition-all"
            style={{ color: isActive ? "#4B35FF" : "var(--muted-foreground)" }}
          >
            <Icon size={20} />
            <span className="text-xs font-semibold">{label}</span>
          </button>
        );
      })}
    </div>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  const [screen, setScreen] = useState<ActiveScreen>("welcome");
  const [navTab, setNavTab] = useState<NavTab>("home");
  const [selectedCat, setSelectedCat] = useState<Category | null>(null);
  const [gameMode, setGameMode] = useState<GameMode>("flashcard");
  const [gameResult, setGameResult] = useState<GameResult | null>(null);
  const [actKey, setActKey] = useState(0);

  function startActivity(mode: GameMode, catId: string) {
    const cat = CATEGORIES.find(c => c.id === catId) ?? CATEGORIES[0];
    setSelectedCat(cat);
    setGameMode(mode);
    setGameResult(null);
    setActKey(k => k + 1);
    setScreen(mode);
  }

  function selectCategory(cat: Category) {
    setSelectedCat(cat);
    setScreen("category-detail");
  }

  function goBack() {
    if (screen === "category-detail") {
      setScreen("categories");
      setNavTab("categories");
    } else if (["flashcard", "match", "test"].includes(screen)) {
      setScreen("category-detail");
    } else {
      setScreen(navTab);
    }
  }

  function changeTab(t: NavTab) {
    setNavTab(t);
    setScreen(t);
  }

  const showNav = ["home", "categories", "progress"].includes(screen);
  const isWelcome = screen === "welcome";

  return (
    <>
      <style>{`
        .hide-scrollbar { scrollbar-width: none; }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        @keyframes screenIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes welcomeOut {
          from { opacity: 1; transform: scale(1); }
          to { opacity: 0; transform: scale(0.96); }
        }
        .screen-in { animation: screenIn 0.22s ease both; }
      `}</style>

      <div
        className="size-full flex items-center justify-center transition-colors duration-700"
        style={{ background: isWelcome ? "#2E1ECC" : "#2D2B4E" }}
      >
        {/* Phone shell */}
        <div
          className="relative flex flex-col overflow-hidden"
          style={{
            width: "min(390px, 100vw)",
            height: "min(844px, 100vh)",
            borderRadius: "min(44px, 0px)",
            background: "var(--background)",
            boxShadow: isWelcome
              ? "0 40px 120px rgba(46,30,204,0.6), 0 16px 48px rgba(75,53,255,0.40)"
              : "0 40px 100px rgba(0,0,0,0.5), 0 12px 32px rgba(75,53,255,0.25)",
            transition: "box-shadow 0.7s ease",
          }}
        >
          {/* Status bar — hidden during welcome */}
          {!isWelcome && (
            <div
              className="flex items-center justify-between px-6 pt-3 pb-1 flex-shrink-0"
              style={{ background: "var(--background)" }}
            >
              <span
                className="text-xs font-bold"
                style={{ color: "var(--muted-foreground)", fontFamily: "'DM Mono', monospace" }}
              >
                9:41
              </span>
              <div className="flex items-center gap-1.5">
                <div className="w-4 h-2 rounded-sm border" style={{ borderColor: "var(--muted-foreground)" }}>
                  <div className="h-full w-3/4 rounded-sm" style={{ background: "#2ECC71" }} />
                </div>
                <div className="flex gap-0.5">
                  {[3, 2, 1].map(h => (
                    <div key={h} className="w-0.5 rounded-sm" style={{ height: h * 4, background: "var(--muted-foreground)" }} />
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Screen content */}
          <div className="flex-1 overflow-hidden relative">
            <div key={screen} className="screen-in h-full overflow-hidden">
              {screen === "welcome" && (
                <WelcomeScreen
                  onComplete={() => { setNavTab("home"); setScreen("home"); }}
                />
              )}
              {screen === "home" && (
                <HomeScreen
                  onNavigate={s => { setScreen(s); if (["home", "categories", "progress"].includes(s)) setNavTab(s as NavTab); }}
                  onStartActivity={startActivity}
                />
              )}
              {screen === "categories" && (
                <CategoriesScreen onSelectCategory={selectCategory} />
              )}
              {screen === "category-detail" && selectedCat && (
                <CategoryDetailScreen category={selectedCat} onBack={goBack} onStartActivity={startActivity} />
              )}
              {screen === "flashcard" && selectedCat && (
                <FlashcardScreen key={actKey} category={selectedCat} onBack={goBack} onComplete={r => { setGameResult(r); setScreen("results"); }} />
              )}
              {screen === "match" && selectedCat && (
                <MatchScreen key={actKey} category={selectedCat} onBack={goBack} onComplete={r => { setGameResult(r); setScreen("results"); }} />
              )}
              {screen === "test" && selectedCat && (
                <TestScreen key={actKey} category={selectedCat} onBack={goBack} onComplete={r => { setGameResult(r); setScreen("results"); }} />
              )}
              {screen === "results" && gameResult && (
                <ResultsScreen
                  result={gameResult}
                  onRetry={() => { setActKey(k => k + 1); setScreen(gameMode); }}
                  onHome={() => { setNavTab("home"); setScreen("home"); }}
                />
              )}
              {screen === "progress" && <ProgressScreen />}
            </div>
          </div>

          {/* Bottom nav — hidden during welcome */}
          {showNav && <BottomNav active={navTab} onChange={changeTab} />}

          {/* Home indicator — hidden during welcome */}
          {!isWelcome && (
            <div
              className="flex justify-center pb-2 pt-1 flex-shrink-0"
              style={{ background: "var(--background)" }}
            >
              <div className="w-28 h-1 rounded-full" style={{ background: "var(--border)" }} />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
