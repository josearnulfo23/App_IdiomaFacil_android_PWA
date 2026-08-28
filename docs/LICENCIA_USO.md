# Licencia de Uso — IdiomaFácil MVP

> **Licencia:** MIT License
> **Titular:** José Arnulfo Céspedes Albornoz — IdiomaFácil
> **Año:** 2026
> **Archivo legal:** [`LICENSE`](../LICENSE) (inglés, texto oficial MIT)
> **Atribuciones de terceros:** [`ATTRIBUTIONS.md`](../ATTRIBUTIONS.md)

## 1. Resumen en lenguaje claro (no sustituye el texto legal)

La licencia MIT es **permisiva**: puedes usar, copiar, modificar, fusionar, publicar, distribuir, sublicenciar y vender el software, incluso en proyectos privados o comerciales, **siempre que** conserves el aviso de copyright y el texto de la licencia en todas las copias o partes sustanciales.

- ✅ Uso comercial permitido
- ✅ Modificación permitida
- ✅ Distribución permitida (código y binarios: PWA `dist/` y APK/AAB)
- ✅ Uso privado permitido
- ✅ Sublicencia permitida
- ⚠️ **Sin garantía:** el software se entrega "TAL CUAL", sin garantías de ningún tipo
- ⚠️ **Sin responsabilidad:** los autores no responden por reclamos o daños
- 📋 **Condición única:** incluir `LICENSE` y el aviso de copyright en distribuciones

No necesitas pedir permiso adicional para los usos anteriores. Para usos fuera de MIT (p. ej. re-licenciar sin conservar el aviso), contacta al titular.

## 2. Texto oficial

Ver [`LICENSE`](../LICENSE) — es el texto canónico en inglés tal como lo publica el Massachusetts Institute of Technology / Open Source Initiative.

## 3. Compatibilidad con dependencias

| Dependencia | Licencia | Compatibilidad MIT |
|-------------|----------|---------------------|
| `shadcn/ui` (Radix + tailwind-merge) | MIT | ✅ Compatible |
| Fotos Unsplash (si se usan) | Unsplash License | ✅ Compatible para MVP (atribuido en `ATTRIBUTIONS.md`) |
| `vite`, `react`, `recharts`, `lucide-react`, `vite-plugin-pwa` | MIT / ISC | ✅ Compatible |

Todas las licencias de terceros se conservan en `package.json` y `ATTRIBUTIONS.md`. Al distribuir el APK/AAB o la PWA, incluye `LICENSE` + `ATTRIBUTIONS.md`.

## 4. Cómo aplicar la licencia al distribuir

**Web PWA (`dist/`):** incluye `LICENSE` en la raíz del repositorio; no es necesario embeberlo en `dist/`, pero sí conservarlo en el repo y en releases de GitHub.

**Android (APK/AAB):** añade el texto MIT en:
- `android/app/src/main/assets/LICENSE` (si usas Capacitor), o
- pantalla “Acerca de → Licencias” / menú de la app con enlace al repo.

**Releases en GitHub:** adjunta `LICENSE` como parte del tag `v1.0.0` y menciona “Licensed under MIT” en la descripción del release.

## 5. Exclusiones

- Marca **IdiomaFácil**, logo `IF` y diseño Memphis no se ceden como marca registrada; puedes forkear el código pero usa tu propia marca si publicas una variante.
- Contenido pedagógico (palabras/ejemplos) del mockup es de demostración; verifica derechos si incorporas corpus externos.

## 6. Contacto

Para dual-licensing, soporte comercial o cesión de marca: **José Arnulfo Céspedes Albornoz** — vía issues del repositorio.

---

*English summary: This project is licensed under the MIT License — see `LICENSE` for the full legal text. You may use, modify and distribute it (including the PWA and Android APK/AAB) provided the copyright notice and permission notice are preserved.*
