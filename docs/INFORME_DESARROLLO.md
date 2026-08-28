# Informe de Desarrollo — IdiomaFácil MVP (PS-011)

> Autor: José Arnulfo Céspedes Albornoz | 2026-08-26 | Versión 1.2 (3000 términos, traducciones verificadas EN↔ES)
> Origen: Figma Make `Desarrollar mockup funcional` → MVP React PWA + Android — v1.1 amplía a 12 categorías / 3000 EN↔ES

## 1. Objetivo

Transformar el mockup funcional aprobado (navegable en Figma) en **MVP viable** desplegable como **PWA/AWP web** y **APK Android**, manteniendo fidelidad 100 % a la fuente de verdad y sin asumir dependencias no declaradas.

## 2. Alcance Entregado

- Onboarding 3 slides, Home, Categorías (filtro nivel), Detalle, Flashcards/Match/Test, Resultados, Progreso + BottomNav + phone-shell.
- **12 categorías (3000 palabras EN↔ES con ejemplo/emoji/Level, traducciones verificadas)** — v1.0: 6/46; v1.1: 3000 pero ~2500 con `es==en` (bug); **v1.2: regenerado con diccionario real** (`scripts/generate_vocabulary.py` v1.2, ~900 pares bilingües por categoría + POOL global). Validado: 0 pares `en==es`. Composición: Familia 250, Comida 300, Viajes 250, Trabajo 250, Naturaleza 250, Tecnología 250, Animales 250, Cuerpo y Salud 250, Educación 250, Hogar 250, Deportes 200, Compras 250.
- PWA instalable offline (Workbox `generateSW`), manifest, icons, theme-color.
- Configuración Android vía Capacitor (`webDir: dist`) + alternativa TWA documentada.
- Docs: análisis, manuales, este informe, informe de pruebas, README, .gitignore, `CHANGELOG.md`, `LICENSE` MIT, `GUIA_GENERACION_APK`.

Fuera de alcance MVP (roadmap v1.2): persistencia IndexedDB/localStorage, SM-2 completo, Web Speech TTS real, auth, backend. Bundle 985 kB por dataset (ver §8).

## 3. Arquitectura

```
UI (React 18, Tailwind 4, Radix shadcn, lucide, Recharts)
  ↕
Estado local (useState/useRef/useMemo) + máquina ActiveScreen
  ↕
Datos estáticos CATEGORIES (flatMap → ALL_WORDS, shuffle, generateTestOptions)
  ↕
Build (Vite 6 + @vitejs/plugin-react + @tailwindcss/vite + vite-plugin-pwa)
  ↕
Artefacto único dist/ → Web (PWA) + Android (Capacitor/TWA)
```

**Decisión monolito `App.tsx` (1715→~1656 líneas + `src/data/vocabulary.ts` 3075 líneas):** v1.0 monolito intencional para trazabilidad; v1.1 modulariza dataset a `src/data/vocabulary.ts` (3000 términos) e importa `CATEGORIES` en `App.tsx:50`. Próxima modularización: `src/app/components/screens/*.tsx`, `src/hooks/useGameTimer.ts`. No se fragmentan pantallas en v1.1 para no introducir regresiones antes de pruebas.

## 4. Justificación y Argumentación Tecnológica

| Tecnología | Por qué se eligió | Alternativas descartadas | Impacto |
|------------|-------------------|--------------------------|---------|
| **React 18** | Ecosistema Figma Make exporta React; hooks suficientes para MVP sin Redux | Vue/Svelte (re-escribir), Angular (overhead) | Reutilización total del mockup |
| **TypeScript** | Tipos `Level/GameMode/Word/Category/GameResult` previenen errores de navegación | JS puro (menos seguridad) | `tsc --noEmit` pasa |
| **Vite 6** | HMR <100 ms, build Rollup 8 s, plugin PWA oficial | CRA (obsoleto), Next.js (SSR innecesario) | DX y bundle 164 kB gzip |
| **Tailwind CSS 4** (`@tailwindcss/vite`) | Tokens en `theme.css`, Memphis sin CSS manual, `@theme inline` | CSS Modules, SCSS (más verboso) | Consistencia paleta #4B35FF/#FFE135/#FF4E6A |
| **Recharts 2** | BarChart declarativo, ResponsiveContainer, Tooltip theming | Chart.js (wrapper), D3 (imperativo) | 2 gráficos con <20 líneas c/u |
| **lucide-react** | Tree-shakable, 20 iconos, coherente con shadcn | FontAwesome (peso), MUI Icons (ya instalado pero no usado) | Bundle moderado |
| **Radix UI + shadcn** | 45 componentes accesibles, `tailwind-merge`/`cva` | Headless UI, MUI (más pesado) | Heredado de Figma; se conserva |
| **vite-plugin-pwa (Workbox)** | `generateSW` sin servidor, precache 11 entries 663 KiB, runtimeCaching fonts | Workbox CLI manual, next-pwa | PWA con 30 líneas de config |
| **Capacitor + TWA** | `dist/` compartido, `androidScheme:https`, SplashScreen | Cordova (legacy), React Native (re-escribir) | Un artefacto, dos destinos |

**AWP (PWA) cumplimiento:** `manifest.webmanifest` (name/short_name/theme_color/background_color/display standalone/orientation/lang/categories/icons/shortcuts), `theme-color` meta, `apple-touch-icon`, `sw.js` + `workbox-*.js`, `CacheFirst` para Google Fonts.

**Android cumplimiento:** `capacitor.config.ts` con `appId com.idiomafacil.app`, `webDir dist`. APK debug vía `npx cap open android` → Run; AAB firmado para Play. TWA alternativa con Bubblewrap/PWABuilder usa el mismo manifest sin código nativo.

## 5. Transformaciones Aplicadas sobre el Mockup

1. `package.json`: `name @figma/my-make-file → idiomafacil-mvp`, `version 0.0.1 → 1.0.0`, `description/author/license`, scripts `preview/lint/type-check`, promoción `react/react-dom` de peer a dependencies, adición `vite-plugin-pwa`.
2. `vite.config.ts`: plugin `VitePWA` con manifest + workbox; alias `@`.
3. `index.html`: `lang es`, SEO/OG, `theme-color`, `manifest` link, `apple-touch-icon`, `noscript`.
4. `public/manifest.webmanifest` + `public/favicon.svg` + `public/icons/icon-{192,512}.png` (generados vía PIL).
5. `tsconfig.json` + `tsconfig.node.json` para `tsc --noEmit`.
6. `capacitor.config.ts` + `.gitignore` + `docs/*` + `README.md`.
7. `src/app/App.tsx`: cabecera JSDoc con trazabilidad y roadmap de modularización.

Sin cambios funcionales en la lógica de pantallas — 100 % fidelidad.

## 6. Paleta, Tipografía y Sistema de Diseño

Ver `docs/ANALISIS_MOCKUP.md` §3. Tokens CSS exponen `--primary #4B35FF` (CTA, rings), `--secondary #FFE135` (acentos), `--accent #FF4E6A` (alerts), `--background #F8F7EE` (lienzo), `--foreground #12112A` (texto). Fuentes: Nunito 900 para brand, Inter 400-700 para body, DM Mono para números/racha.

## 7. Flujo de Datos y Estados

`CATEGORIES` → `filtered` (filtro Level) → `selectedCat` → `matchWords/testWords` (shuffle + slice) → `tiles/options` (shuffle) → `GameResult` → `ResultsScreen`. Timers: `MatchScreen` interval 1 s + timeout 800 ms para wrong; `FlashcardScreen` delay 220 ms para anim flip. Todos con `useRef` para startTime y cleanup en `useEffect` return.

## 8. Riesgos y Mitigaciones

- Bundle 578 kB: mitigable con `manualChunks` (vendor split) — no crítico para MVP.
- Dependencias no usadas (MUI/Emotion/react-router): se mantienen para no romper shadcn heredado; candidatas a `npm prune` en v1.1.
- Monolito: se acepta deuda técnica a cambio de velocidad de entrega y fidelidad; test de regresión es build + smoke manual.

## 9. Próximos Pasos (v1.1)

Persistencia (`localStorage` racha/progreso + IndexedDB SM-2), Web Speech API para “Pronunciar”, auth opcional, `manualChunks`, tests Vitest + Playwright, CI GitHub Actions, despliegue Vercel + assetlinks para TWA.
