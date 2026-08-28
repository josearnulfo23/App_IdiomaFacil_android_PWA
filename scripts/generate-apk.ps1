#Requires -Version 5.1
<#
.SYNOPSIS
  Genera APK/AAB de IdiomaFácil (PS-011) — wrapper Capacitor sobre dist/.
.DESCRIPTION
  1) npm run build  2) npx cap sync  3) abre Android Studio.
  Requiere Android Studio + SDK 34 + JDK 17. El keystore no se commitea (*.keystore en .gitignore).
.EXAMPLE
  powershell -ExecutionPolicy Bypass -File scripts/generate-apk.ps1
  powershell -ExecutionPolicy Bypass -File scripts/generate-apk.ps1 -Signed -Keystore C:\keys\idiomafacil.keystore -Alias idiomafacil
#>
param(
  [switch]$Signed,
  [string]$Keystore,
  [string]$Alias = "idiomafacil"
)

$ErrorActionPreference = "Stop"
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass -Force | Out-Null

function Step($msg) { Write-Host "`n==> $msg" -ForegroundColor Cyan }

Step "1/4 — Build web (Vite + PWA)"
npm run build
if ($LASTEXITCODE -ne 0) { throw "npm run build falló" }

Step "2/4 — Sincronizar Capacitor"
if (-not (Test-Path "capacitor.config.ts")) { throw "capacitor.config.ts no encontrado — ejecuta desde la raíz" }
if (-not (Test-Path "node_modules/@capacitor/cli")) {
  Write-Host "Instalando @capacitor/* ..." -ForegroundColor Yellow
  npm install @capacitor/core @capacitor/cli @capacitor/android
}
if (-not (Test-Path "android")) {
  Write-Host "Añadiendo plataforma android ..." -ForegroundColor Yellow
  npx cap add android
}
npx cap sync
if ($LASTEXITCODE -ne 0) { throw "npx cap sync falló" }

Step "3/4 — Verificación"
Get-ChildItem dist -Recurse | Select-Object Name,Length | Format-Table -AutoSize | Out-Host
Write-Host "Manifest: $(Test-Path dist/manifest.webmanifest)  SW: $(Test-Path dist/sw.js)" -ForegroundColor Green
Write-Host "LICENSE: $(Test-Path LICENSE)  Icons: $(Test-Path public/icons/icon-512.png)" -ForegroundColor Green

if ($Signed) {
  if (-not $Keystore -or -not (Test-Path $Keystore)) {
    Write-Warning "Para AAB/APK firmado necesitas -Keystore <ruta>. Genera uno: keytool -genkey -v -keystore idiomafacil.keystore -alias $Alias -keyalg RSA -keysize 2048 -validity 10000"
  } else {
    Write-Host "Keystore: $Keystore  Alias: $Alias" -ForegroundColor Green
    Write-Host "SHA256:" -ForegroundColor Yellow
    keytool -list -v -keystore $Keystore -alias $Alias | Select-String SHA256 | Out-Host
  }
}

Step "4/4 — Abrir Android Studio"
Write-Host "Se abrirá Android Studio. Luego: Build → Generate Signed Bundle / APK... (o Run ▶ para debug APK)" -ForegroundColor Yellow
npx cap open android

Write-Host "`nListo. APK debug: android/app/build/outputs/apk/debug/app-debug.apk" -ForegroundColor Green
Write-Host "AAB release: android/app/build/outputs/bundle/release/app-release.aab" -ForegroundColor Green
Write-Host "No commitees *.apk/*.aab/*.keystore — súbelos como Release asset en GitHub." -ForegroundColor DarkGray
