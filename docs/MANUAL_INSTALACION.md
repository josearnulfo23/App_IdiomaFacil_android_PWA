# Manual de Instalación — IdiomaFácil MVP

## 1. Requisitos

| Componente | Versión mínima | Notas |
|------------|----------------|-------|
| Node.js | 20 LTS | `node --version` |
| npm | 10 | o pnpm 9 / yarn 1.22 |
| Git | 2.x | para clonar |
| Navegador | Chrome 120 / Edge 120 / Safari 17 | PWA requiere HTTPS en prod |
| Android Studio | Hedgehog+ | solo para APK/AAB, SDK 34, JDK 17 |

## 2. Clonar y Dependencias

```bash
git clone <tu-repo> idiomafacil
cd idiomafacil
npm install
# Si usas pnpm: pnpm install
```

> Nota: `react` y `react-dom` están en `dependencies` (antes peer). `@emotion`, `@mui`, `recharts`, `lucide-react` ya vienen.

## 3. Desarrollo

```bash
npm run dev
# → http://localhost:5173  (Vite HMR)
```

Estructura de estilos: `src/styles/index.css` → `fonts.css` (Google Fonts) + `tailwind.css` + `theme.css`.

## 4. Build Web (PWA/AWP)

```bash
npm run build
# genera dist/ + dist/sw.js + dist/workbox-*.js + dist/manifest.webmanifest
npm run preview        # http://localhost:4173
# o
npm run preview:host   # --host para probar en móvil en la misma red
```

Verifica PWA: abre `dist/index.html` vía servidor (no `file://`), DevTools → Application → Manifest & Service Workers.

### 4.1 Despliegue

Cualquier hosting estático con HTTPS:

- **Vercel:** `vercel --prod` o conectar repo (framework: Vite, output: `dist`)
- **Netlify:** `netlify deploy --prod --dir dist`
- **GitHub Pages:** `npx gh-pages -d dist` (configura `vite.config.ts` `base: "/<repo>/"` si no es dominio raíz)
- **Firebase Hosting:** `firebase deploy`

Cabeceras recomendadas: `Cache-Control: no-cache` para `sw.js`, `immutable` para `assets/*`.

## 5. Empaquetado Android

### Opción A — Capacitor (wrapper nativo, recomendado para APK de prueba)

```bash
npm run build
npm install @capacitor/core @capacitor/cli @capacitor/android
npx cap add android
npx cap sync
npx cap open android
# En Android Studio: Build → Generate Signed Bundle / APK
# Requiere keystore; para debug: Run ▶ en emulador/dispositivo
```

Config: `capacitor.config.ts` (`appId: com.idiomafacil.app`, `webDir: dist`, `androidScheme: https`).

### Opción B — Trusted Web Activity (TWA, sin código nativo)

1. Publica la PWA en HTTPS.
2. Usa **PWABuilder** (https://www.pwabuilder.com) o **Bubblewrap**:
   ```bash
   npm i -g @bubblewrap/cli
   bubblewrap init --manifest https://tu-dominio/manifest.webmanifest
   bubblewrap build
   ```
3. Firma el `.aab` y súbelo a Play Console. Requiere `assetlinks.json` en `/.well-known/`.

## 6. Variables de Entorno

No requeridas en MVP. Para v1.1 (analytics, TTS key) crear `.env`:

```
VITE_API_URL=https://api.idiomafacil.example
VITE_TTS_PROVIDER=webspeech
```

Nunca commitear `.env` (ya en `.gitignore`).

## 7. Type Checking y Lint

```bash
npm run lint        # tsc --noEmit
npm run type-check  # alias
```

## 8. Solución de Problemas

| Error | Causa | Fix |
|-------|-------|-----|
| `npm.ps1 cannot be loaded` (Windows) | ExecutionPolicy | `Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass` |
| `vite: command not found` | deps no instaladas | `npm install` |
| PWA no registra SW en dev | `devOptions.enabled:false` | Es normal; prueba con `npm run build && npm run preview` |
| Chunk >500 kB warning | recharts+lucide en bundle único | Ignorable en MVP; futuro `manualChunks: { vendor: ['recharts'] }` |
| Fuentes no cargan offline | Google Fonts cache | Ya configurado en `workbox.runtimeCaching` |

## 9. Estructura para GitHub

```
.gitignore  # node_modules, dist, android, .env, *.keystore
README.md
docs/*.md
public/
src/
capacitor.config.ts
vite.config.ts
```

Primer push:

```bash
git init
git add .
git commit -m "feat: MVP IdiomaFácil PWA + Android (PS-011)"
git branch -M main
git remote add origin https://github.com/<user>/idiomafacil.git
git push -u origin main
```
