# Guía de Generación del APK/AAB — IdiomaFácil MVP

> Dos vías válidas que reutilizan el **mismo artefacto `dist/`** de la PWA. No hay código duplicado entre web y Android.

## Opción A — Capacitor (wrapper nativo, APK de prueba local)

### A.1 Requisitos

- Node 20 LTS, `npm install` ya ejecutado, `npm run build` verde
- **Android Studio** Hedgehog+ con **SDK 34**, **JDK 17** (embebido en Studio), `ANDROID_HOME` configurado
- Dispositivo/emulador opcional para `Run`

### A.2 Pasos (PowerShell, ExecutionPolicy Bypass si es necesario)

```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass -Force

# 1. Build web (genera dist/ + sw.js + manifest)
npm run build

# 2. Instalar Capacitor (si aún no está)
npm install @capacitor/core @capacitor/cli @capacitor/android

# 3. Añadir plataforma Android (crea carpeta android/)
npx cap add android

# 4. Sincronizar dist/ → android/app/src/main/assets/public
npx cap sync

# 5. Abrir en Android Studio
npx cap open android
```

### A.3 Generar APK/AAB en Android Studio

**APK debug (instalable directo):**
`Run ▶` con emulador/dispositivo conectado → genera `android/app/build/outputs/apk/debug/app-debug.apk`

**APK/AAB firmado (para distribución / Play Console):**

1. Crea keystore una vez:
   ```powershell
   keytool -genkey -v -keystore idiomafacil.keystore -alias idiomafacil -keyalg RSA -keysize 2048 -validity 10000
   # Guarda idiomafacil.keystore FUERA del repo (ya en .gitignore: *.keystore, *.jks)
   ```
2. En Studio: `Build → Generate Signed Bundle / APK... → Android App Bundle` (recomendado para Play) o `APK`
3. Elige keystore, alias y passwords → `Release` → `Finish`
4. Salida:
   - AAB: `android/app/build/outputs/bundle/release/app-release.aab`
   - APK: `android/app/build/outputs/apk/release/app-release.apk`

**Actualizar tras cambios web:**
```powershell
npm run build; npx cap sync
# No es necesario npx cap add android de nuevo
```

Config relevante: `capacitor.config.ts` (`appId: com.idiomafacil.app`, `appName: IdiomaFácil`, `webDir: dist`, `androidScheme: https`, `SplashScreen.backgroundColor #4B35FF`).

---

## Opción B — Trusted Web Activity (TWA, sin código nativo, recomendado para Play Store)

La PWA ya cumple los requisitos TWA (manifest + SW + HTTPS + icons 192/512).

### B.1 Publicar la PWA en HTTPS

Despliega `dist/` en Vercel / Netlify / Firebase / GitHub Pages con HTTPS. Verifica con **Lighthouse** PWA score >90 y que `https://tu-dominio/manifest.webmanifest` y `https://tu-dominio/sw.js` sean accesibles.

### B.2 Añadir Digital Asset Links

En tu dominio, publica `https://tu-dominio/.well-known/assetlinks.json`:

```json
[{
  "relation": ["delegate_permission/common.handle_all_urls"],
  "target": { "namespace": "android_app", "package_name": "com.idiomafacil.app", "sha256_cert_fingerprints": ["<SHA256-del-keystore>"] }
}]
```

Obtén el SHA256 con:
```powershell
keytool -list -v -keystore idiomafacil.keystore -alias idiomafacil | Select-String SHA256
```

### B.3 Generar AAB con PWABuilder o Bubblewrap

**PWABuilder (sin CLI):**
1. Ve a https://www.pwabuilder.com → introduce tu URL → `Build My PWA` → `Android` → descarga `android.zip` / `.aab`

**Bubblewrap (CLI):**
```powershell
npm i -g @bubblewrap/cli
bubblewrap init --manifest https://tu-dominio/manifest.webmanifest
# Responde: appId com.idiomafacil.app, starterActivity, themeColor #4B35FF
bubblewrap build
# Genera app-release-signed.apk y app-release-bundle.aab
bubblewrap update   # tras cambios en manifest
```

Sube el `.aab` a **Google Play Console** → `Producción` → `Crear release`.

---

## Troubleshooting

| Síntoma | Causa | Fix |
|---------|-------|-----|
| `ANDROID_HOME not set` | SDK no en PATH | Define `ANDROID_HOME=C:\Users\%USER%\AppData\Local\Android\Sdk` y añade `platform-tools` al PATH |
| `capacitor.config.ts` no encontrado | Estás en carpeta equivocada | Ejecuta desde la raíz donde está `capacitor.config.ts` |
| `assetlinks.json` 404 | Hosting no sirve `.well-known` | Configura rewrites / verifica MIME `application/json` |
| APK instala pero abre en blanco | `webDir` apunta a `dist` vacío | Re-ejecuta `npm run build` antes de `npx cap sync` |
| Play rechaza AAB | Keystore distinto al de `assetlinks` | Usa el mismo keystore/SHA256 en ambos lados |

## Checklist de entrega

- [ ] `npm run build` y `npx tsc --noEmit` verdes
- [ ] `dist/manifest.webmanifest` y `dist/sw.js` existen
- [ ] APK debug instalable en dispositivo (Opción A) o AAB TWA firmado (Opción B)
- [ ] `LICENSE` + `ATTRIBUTIONS.md` incluidos en repo/release
- [ ] `assetlinks.json` publicado si es TWA

> Nota: `*.apk`, `*.aab`, `*.keystore`, `android/` están en `.gitignore` y no se commitean. Entrega el APK/AAB como **Release asset** en GitHub, no dentro del repo.
