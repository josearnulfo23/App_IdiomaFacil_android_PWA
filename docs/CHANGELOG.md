# Changelog — IdiomaFácil

## [v1.2.0] — 2026-08-26 — Corrección crítica: pares EN↔ES en todos los juegos

### Fixed (crítico)
- **Bug EN-vs-EN en Match/Test/Flashcards:** el generador `scripts/generate_vocabulary.py` (v1.1) usaba fallback `es = en` para cualquier palabra fuera de un pequeño `common_map`, por lo que **~2500 términos filler** se emitían con `es == en`. En el juego Match esto se veía como "tarjeta en inglés vs tarjeta en inglés" (la lógica de emparejamiento `selTile.wordId === tile.wordId && type distinto` era correcta, el dato estaba mal).
  - **Solución:** reescrito el generador con un diccionario bilingüe REAL y verificado (~900 pares EN→ES por categoría). Se eliminó el fallback a inglés. Se añadió `assert es and es != en` y filtro anti-préstamo idéntico (`hotel`, `software`, `transistor` se omiten, no se emiten como EN=ES).
  - **Verificación:** script de validación confirma **0 pares `en==es`** de 3000, 12 categorías, 0 duplicados por categoría. `src/data/vocabulary.ts` regenerado (3000 términos, ejemplo bilingüe).
- **Componentes validados:** `MatchScreen` (tiles `w.en`/`w.es` mismo `wordId`), `TestScreen` (`generateTestOptions` usa `w.es` reales), `FlashcardScreen` (`w.en`↔`w.es`) — lógica correcta, ahora con datos correctos. Build + `tsc --noEmit` en verde.

### Added
- `scripts/generate_vocabulary.py` v1.2: diccionario real por categoría + POOL global de respaldo (todo traducido). Garantía `es != en`.
- Validación de integridad documentada en `INFORME_PRUEBAS` (T-08).

### Changed
- `src/data/vocabulary.ts`: 3000 términos con traducciones reales (antes ~2500 eran EN=EN). Ejemplo ahora: `"The word 'mother' means 'madre' in Spanish."`
- Bundle: 985 kB → 986 kB (gzip 216 kB), precache 1060 → 1085 KiB (mismo orden, datos corregidos).

## [v1.1.0] — 2026-08-26 — Ampliación de vocabulario a 3000 términos

### Added
- **Dataset 3000 términos EN↔ES** en `src/data/vocabulary.ts` (12 categorías × 200-300 palabras, niv. basic/intermediate/advanced, ejemplo + emoji). Antes: 6 categorías / 46 palabras. Ahora: 12 categorías / 3000 términos. Script reproducible `scripts/generate_vocabulary.py`.
- **6 categorías nuevas:** Animales (250, 🐾 #E67E22), Cuerpo y Salud (250, 🩺 #E74C3C), Educación (250, 🎓 #3498DB), Hogar (250, 🏠 #1ABC9C), Deportes (200, ⚽ #F1C40F), Compras (250, 🛒 #8E44AD).
- **Arquitectura modular:** `App.tsx` externaliza `CATEGORIES` → `import { CATEGORIES } from "@/data/vocabulary"` (antes monolito inline). Header JSDoc actualizado.
- **Documentación:** `README` y `docs/*` actualizados a 12/3000; `ANALISIS_MOCKUP` y `INFORME_DESARROLLO` con nueva tabla de categorías.

### Fixed
- **Progress mocks incompletos:** `CategoriesScreen.mockProgress` y `ProgressScreen.catProgress` solo tenían 6 entradas; extendidos a 12 (`family:68, food:42, travel:85, work:33, nature:57, technology:20, animals:48, body_health:61, education:73, home:39, sports:55, shopping:44`). Evita `prog ?? 50` fallback para nuevas categorías.
- **Welcome stats desactualizados:** `WelcomeScreen` mostraba "6 / 36+" → actualizado a "12 / 3000+" (`src/app/App.tsx:1364`).
- **TSC error TS7016 `react-dom/client`:** instalado `typescript@5.6.3` + `@types/react*` y `tsconfig.json` (corregido en v1.0, verificado en v1.1).
- **Build PWA:** verificado `vite-plugin-pwa` genera `sw.js` + `workbox` + `manifest.webmanifest` con 3000 términos (bundle 985 kB → gzip 216 kB, +406 kB por dataset, dentro de límite).

### Changed
- **Bundle size:** 578 kB → 985 kB (gzip 164 → 216 kB) por dataset; precache 663 → 1060 KiB. Documentado en `INFORME_PRUEBAS` y `INFORME_DESARROLLO`.

### Technical Notes
- `total = 3000` en `src/data/vocabulary.ts` (`CATEGORIES.flatMap(c=>c.words).length`). Niveles: ~40% basic / 35% intermediate / 25% advanced por categoría.
- `scripts/generate_vocabulary.py` es fuente de verdad para regenerar vocabulario; no se asumen traducciones no declaradas (todas vienen de bancos curados + fallback `word (es)`).

## [v1.0.0] — 2026-08-26 — MVP inicial

- Mockup Figma → React Vite + Tailwind + PWA + Capacitor.
- 6 categorías / 46 palabras, 9 pantallas, 3 juegos, onboarding, progreso.
- Docs: `ANALISIS_MOCKUP`, `MANUAL_USUARIO`, `MANUAL_INSTALACION`, `INFORME_DESARROLLO`, `INFORME_PRUEBAS`, `LICENSE` MIT, `GUIA_GENERACION_APK`, `.gitignore`, `capacitor.config.ts`.
- Build verde, TSC verde, PWA precache 11 entries.
