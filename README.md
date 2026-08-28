# IdiomaFácil — MVP Prototipo

> **PS-011 · Transformación del Mockup Funcional en Prototipo de Aplicación**
> Autor: José Arnulfo Céspedes Albornoz · 2026-08-26
> Stack: React 18 + TypeScript + Vite 6 + Tailwind CSS 4 + Recharts + vite-plugin-pwa
> Destinos: **Web PWA (AWP)** + **Android (APK/AAB vía Capacitor/TWA)**

Mockup original: Figma Make → `https://www.figma.com/design/FJGCUlWXtYi4YLf9WFgKo7/Desarrollar-mockup-funcional` (fuente de verdad).

## Demo Rápido

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # genera dist/ + sw.js + manifest
npm run preview  # previsualiza build de producción
```

## Estructura

```
src/
  app/App.tsx                 # Orquestación + 9 pantallas (importa CATEGORIES de data)
  data/vocabulary.ts          # Dataset 3000 términos EN↔ES (12 categorías, niveles, ejemplos)
  app/components/ui/*         # 45 componentes shadcn/ui (Radix)
  app/components/figma/*      # ImageWithFallback
  styles/{index,tailwind,theme,fonts}.css
  imports/{spec,PS-04}        # Trazabilidad HU/CU
public/
  manifest.webmanifest        # PWA
  favicon.svg + icons/*       # Iconos 192/512
docs/
  ANALISIS_MOCKUP.md
  MANUAL_USUARIO.md
  MANUAL_INSTALACION.md
  INFORME_DESARROLLO.md
  INFORME_PRUEBAS.md
  LICENCIA_USO.md             # Resumen MIT en español
  GUIA_GENERACION_APK.md      # Pasos Capacitor/TWA para APK/AAB
  CHANGELOG.md                # Mejoras y bugs corregidos v1.0 → v1.2
LICENSE                       # MIT — José Arnulfo Céspedes Albornoz 2026
capacitor.config.ts           # Wrapper Android (webDir: dist)
scripts/
  generate-apk.ps1            # Automatiza build → cap sync → open android
  generate_vocabulary.py      # Genera 3000 términos (reproducible)
```

## Funcionalidades MVP

- **Onboarding** 3 slides (Brand/Método/Seguimiento) — **12 categorías / 3000+ palabras / 3 niveles**
- **Home** con meta diaria, stats, BarChart semanal, actividades rápidas
- **Categorías** (12: Familia, Comida, Viajes, Trabajo, Naturaleza, Tecnología, Animales, Cuerpo y Salud, Educación, Hogar, Deportes, Compras) con filtro por nivel
- **Detalle** + 3 actividades: **Flashcards** (flip 3D), **Match** (timer, estados), **Test** (4 opciones) — operan sobre 250-300 palabras por categoría
- **Resultados** + **Progreso** (racha, gráficos, historial por categoría)
- **PWA instalable** offline (Workbox), **responsive** phone-shell 390×844
- **Dataset** `src/data/vocabulary.ts` — 3000 términos EN↔ES con ejemplo/emoji/level, **traducciones verificadas (0 pares `en==es`)** (v1.2 corrige bug EN-vs-EN de v1.1; v1.1 amplía de 46 a 3000)

## Justificación Tecnológica (resumen)

Vite 6 por HMR instantáneo y build Rollup optimizado; Tailwind 4 por tokens CSS y Memphis design system; Recharts por simplicidad declarativa; `vite-plugin-pwa` por integración Workbox sin servidor propio; Capacitor/TWA para APK reutilizando `dist/` sin duplicar lógica. Ver `docs/INFORME_DESARROLLO.md` §4.

## Entregables PS-011

1. **PWA** en `dist/` (desplegable en Vercel/Netlify/GitHub Pages)
2. **APK/AAB** vía `npx cap add android && npx cap sync && npx cap open android` (requiere Android Studio) o TWA con Bubblewrap
3. Código fuente en este repo
4. `docs/INFORME_PRUEBAS.md`
5. Documentación (`docs/*.md`)
6. Justificación en `docs/INFORME_DESARROLLO.md`

## GitHub

```bash
git init
git add .
git commit -m "feat: MVP IdiomaFácil PWA + Android (PS-011)"
git branch -M main
git remote add origin <tu-repo>
git push -u origin main
```

`.gitignore` ya incluye `node_modules/`, `dist/`, `.env`, `android/`, `*.keystore`.

## APK — Generación

Ver `docs/GUIA_GENERACION_APK.md` y `scripts/generate-apk.ps1`:

```powershell
powershell -ExecutionPolicy Bypass -File scripts/generate-apk.ps1
# APK debug: android/app/build/outputs/apk/debug/app-debug.apk
# AAB release: android/app/build/outputs/bundle/release/app-release.aab
```

Requiere Android Studio + SDK 34 + JDK 17. Alternativa TWA sin código nativo con Bubblewrap/PWABuilder — ver guía.

## Licencia

**MIT** — Copyright (c) 2026 José Arnulfo Céspedes Albornoz — ver `LICENSE` (texto oficial) y `docs/LICENCIA_USO.md` (resumen en español). shadcn/ui MIT + Unsplash license — ver `ATTRIBUTIONS.md`.
