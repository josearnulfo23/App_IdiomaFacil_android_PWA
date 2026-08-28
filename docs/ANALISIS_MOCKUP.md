# Análisis Exhaustivo del Mockup Funcional — IdiomaFácil (PS-011)

> Fecha: 2026-08-26 (v1.2 traducciones verificadas EN↔ES) | Autor: José Arnulfo Céspedes Albornoz | Versión: 1.2
> Fuente de verdad: `C:\Users\josea\Desktop\mockup-funcional-app-idiomas` (Figma Make export + `src/data/vocabulary.ts` 3000 términos, 0 pares en==es)

## 1. Estructura de Directorios y Archivos

```
mockup-funcional-app-idiomas/
├── index.html                     — Shell HTML, monta #root, carga /src/main.tsx
├── vite.config.ts                 — Vite + @tailwindcss/vite + @vitejs/plugin-react + figmaAssetResolver
├── postcss.config.mjs             — Vacío (Tailwind v4 vía Vite plugin)
├── package.json                   — @figma/my-make-file@0.0.1 → renombrado a idiomafacil-mvp@1.0.0
├── tsconfig.json / tsconfig.node.json — Añadidos en MVP (no existían)
├── public/{manifest.webmanifest, favicon.svg, icons/*} — Añadidos en MVP para PWA
├── capacitor.config.ts            — Añadido para wrapper Android
├── src/
│   ├── main.tsx                   — createRoot(<App />) + import "./styles/index.css"
│   ├── app/App.tsx                — ~1656 líneas, importa CATEGORIES de data (antes monolito 1715)
│   ├── data/vocabulary.ts         — 12 categorías × 3000 términos EN↔ES (generado por scripts/generate_vocabulary.py)
│   ├── app/components/ui/*        — 45 componentes shadcn/ui (Radix + tailwind-merge)
│   ├── app/components/figma/ImageWithFallback.tsx
│   ├── styles/{index.css, tailwind.css, theme.css, fonts.css, globals.css}
│   └── imports/{spec.md, PS-04-pseudocodigo-...} — Trazabilidad HU/CU/RF
├── guidelines/Guidelines.md       — Placeholder
└── ATTRIBUTIONS.md                — shadcn/ui MIT + Unsplash
```

**Hallazgo:** `src/styles/globals.css` vacío; `index.css` importa `fonts.css → tailwind.css → theme.css`. Sin `tsconfig.json` ni soporte PWA.

## 2. Inventario de Componentes de Aplicación (App.tsx)

| Área | Componente / Función | Responsabilidad | Navegación |
|------|----------------------|-----------------|------------|
| Tipos | `Level`, `GameMode`, `ActiveScreen`, `NavTab`, `Word`, `Category`, `MatchTile`, `GameResult` | Dominio | — |
| Datos | `CATEGORIES` (12 categorías × 200-300 palabras = 3000 palabras, `src/data/vocabulary.ts`), `ALL_WORDS`, `shuffle()`, `generateTestOptions()` | Vocabulario | — |
| UI atómica | `ProgressRing`, `LevelBadge` | Visual | — |
| Onboarding | `WelcomeScreen` (3 slides: Brand / Método / Seguimiento) | First-run | welcome |
| Home | `HomeScreen` (header gradiente, ProgressRing hoy 7/10, stats 3, quickActions 4, Recharts BarChart semanal, preview 3 categorías) | Dashboard | home |
| Categorías | `CategoriesScreen` (filtro Level all/basic/intermediate/advanced, grid 2 col) | Exploración | categories |
| Detalle | `CategoryDetailScreen` (hero color, 3 actividades, lista vocabulario con LevelBadge) | Punto de entrada a juegos | category-detail |
| Juegos | `FlashcardScreen` (flip 3D, reveal, Lo sé/Revisar, timer implícito), `MatchScreen` (grid 2 col, timer mm:ss, estados idle/selected/matched/wrong), `TestScreen` (pregunta EN→ES, 4 opciones, feedback) | Aprendizaje | flashcard/match/test |
| Resultados | `ResultsScreen` (emoji/pct, ProgressRing 136px, stats 3, retry/home) | Cierre de sesión | results |
| Progreso | `ProgressScreen` (hero 124/7d, 3 stats secundarios, BarChart 110px, por categoría 6, historial 4) | Analítica | progress |
| Shell | `BottomNav` (Home/Categorías/Progreso), status bar, home indicator, phone shell 390×844 rounded 44 | Navegación global | — |
| Root | `App` (estado screen/navTab/selectedCat/gameMode/gameResult/actKey, handlers startActivity/selectCategory/goBack/changeTab) | Orquestación | — |

**Máquina de estados `ActiveScreen`:** `welcome → home ↔ categories ↔ category-detail → {flashcard|match|test} → results → home` y `progress` vía BottomNav. `showNav` solo en home/categories/progress; welcome oculta chrome del teléfono.

## 3. Estilo, Paleta y Diseño

- **Tailwind CSS 4** vía `@tailwindcss/vite` + `tw-animate-css`. Tokens en `src/styles/theme.css` (`@theme inline`).
- **Paleta (variables CSS):** `--primary #4B35FF`, `--secondary #FFE135`, `--accent #FF4E6A`, `--background #F8F7EE`, `--foreground #12112A`, `--muted #EAE9F5`, `--destructive #FF4E6A`, `--border rgba(18,17,42,0.09)`, + `--chart-1..5` y sidebar tokens. Tipografía: Nunito (títulos/bold), Inter (body), DM Mono (números).
- **Estilo Memphis:** círculos/tringulos decorativos con `rgba()` + bordes dashed, sombras `0 8px 32px rgba(75,53,255,0.15)`, cards `rounded-2xl/3xl`, `border 1.5px solid var(--border)`.
- **Colores por categoría (12):** family `#FF4E6A`, food `#FF8C00`, travel `#4B35FF`, work `#00C4A7`, nature `#2ECC71`, technology `#9B59B6`, animals `#E67E22`, body_health `#E74C3C`, education `#3498DB`, home `#1ABC9C`, sports `#F1C40F`, shopping `#8E44AD`.
- **Niveles:** basic `#2ECC71`/`#E8FFF3`, intermediate `#FF8C00`/`#FFF4E0`, advanced `#9B59B6`/`#F3E8FF`.
- **Iconografía:** `lucide-react` (Home, BookOpen, BarChart3, Flame, Star, etc.) + emoji para categorías/palabras.
- **Gráficos:** `recharts` BarChart (weeklyData 7 días, barSize 18/22, Cell highlight día pico).
- **Animaciones:** `screenIn 0.22s ease`, flip flashcards `rotateY 0.55s cubic-bezier`, ProgressRing `stroke-dashoffset 0.6s ease`, `active:scale-95`.

## 4. Dependencias y Stack Declarado

- **Runtime:** `react@18.3.1`, `react-dom@18.3.1` (estaban como peerDependencies opcionales → promovidas a dependencies en MVP), `recharts@2.15.2`, `lucide-react@0.487.0`, `motion@12.23.24`, Radix UI (accordion, dialog, etc.), MUI + Emotion (instaladas pero no usadas en App.tsx — herencia shadcn), `react-router@7.13.0` (instalado no usado).
- **Build:** `vite@6.3.5`, `@vitejs/plugin-react@4.7.0`, `@tailwindcss/vite@4.1.12`, `tailwindcss@4.1.12`.
- **MVP añade:** `vite-plugin-pwa@0.21.1` (Workbox generateSW), `tsconfig.json`.

## 5. Funcionalidades Consolidadas (vs spec.md HU/CU)

| HU | Criterio spec | Cubierto en mockup |
|----|---------------|--------------------|
| HU-01 Flashcards | frente EN, dorso ES+ejemplo+emoji, audio, marcar | Sí (falta persistencia SM-2) |
| HU-02 Match | pares EN-ES, validación, puntuación, tipos | Sí (EN-ES, timer) |
| HU-03 Tests | opción múltiple, resultados, correctas/incorrectas, historial | Sí (4 opciones, ResultsScreen, historial mock) |
| HU-04 Repetición espaciada | frecuencia adaptativa | Parcial (shuffle; SM-2 documentado en PS-04, no implementado — roadmap) |
| HU-05 Categorías | agrupación temática, selección, progreso por categoría | Sí (12 categorías, 3000 términos, filtro Level, prog mock 12 entradas) |
| HU-06 Progreso | total, en progreso, racha | Sí (124/38/7d + gráficos) |
| HU-07 Niveles | basic/intermediate/advanced | Sí (LevelBadge + filtro) |

**Gaps para MVP viable:** persistencia (localStorage/IndexedDB), audio TTS real (Web Speech API), auth opcional, SM-2 completo. Se mantienen como roadmap; MVP prioriza fidelidad al mockup aprobado.

## 6. Restricciones y Decisiones para MVP

- **Hallucination control:** No se introducen dependencias no declaradas sin aprobación. `vite-plugin-pwa` es aprobada (única adición) por requerimiento “AWP/PWA para web”. Capacitor es config, no dependencia runtime obligatoria.
- **Secuencialidad:** Análisis → MVP (PWA) → .gitignore → tests iterativos → docs → reporte.
- **Estrategia de empaquetado:** `dist/` único artefacto para Web (PWA) y Android (Capacitor `webDir` o TWA/Bubblewrap). Evita duplicación y mantiene Figma como fuente de verdad.

## 7. Riesgos Identificados

- Bundle `985 kB` (gzip 216 kB) >500 kB warning — incrementado por dataset 3000 términos (+406 kB); mitigable con `manualChunks` (recharts/lucide/vendor split) o lazy-loading `vocabulary.ts` en iteración futura; no bloquea MVP (antes 578 kB / 164 kB con 46 palabras).
- MUI/Emotion/react-router instalados sin uso → candidatos a tree-shake/eliminar en fase de optimización, no tocados en MVP para no romper shadcn heredado.
- Monolito App.tsx dificulta tests unitarios aislados — se compensa con tests de smoke/build + plan de refactorización modular en INFORME_DESARROLLO.
