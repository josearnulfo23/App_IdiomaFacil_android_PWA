# Manual de Usuario — IdiomaFácil v1.2.0 (3000 términos, traducciones verificadas)

## 1. Bienvenida

IdiomaFácil es tu camino al inglés fluido. Practica vocabulario con **Flashcards**, **Match** y **Tests**, y sigue tu racha y progreso semanal.

## 2. Instalación (usuario final)

### Web (PWA/AWP)
1. Abre la URL desplegada (ej. `https://tu-dominio.vercel.app`).
2. En Chrome/Edge móvil: menú ⋮ → **Instalar app** / **Agregar a pantalla de inicio**.
3. En iOS Safari: Compartir → **Agregar a pantalla de inicio**.
4. La app funciona **offline** tras la primera visita (Service Worker).

### Android (APK)
1. Descarga `idiomafacil.apk` (o instala desde Play Store si se publica).
2. Permite “Instalar apps desconocidas” si es APK directo.
3. Abre **IdiomaFácil** desde el launcher.

## 3. Primer Uso — Onboarding (3 pasos)

| Slide | Contenido | Acción |
|-------|-----------|--------|
| 1/3 Brand | Logo IF, “Tu camino al inglés fluido” | **Siguiente →** o **Saltar** |
| 2/3 Método | 3 actividades (Flashcards/Match/Test) | **Siguiente →** |
| 3/3 Seguimiento | Stats, racha, gráficos | **¡Comenzar ahora! 🚀** |

Toca los **dots** para navegar entre slides.

## 4. Navegación Principal

Barra inferior (siempre visible salvo en juegos/onboarding):

- **Inicio** (Home): dashboard
- **Categorías** (BookOpen): explorar temas
- **Progreso** (BarChart3): estadísticas

Header: racha 🔥 `7`, avatar `C`, meta diaria `7/10`.

## 5. Flujo de Estudio Recomendado

### 5.1 Inicio
- Meta del día: anillo amarillo (ej. 7/10 palabras).
- **Stats:** Aprendidas 124, En progreso 38, Racha 7d.
- **Actividades rápidas:** Flashcards/Match/Test/Repaso (atajos a categorías).
- **Gráfico semanal** (L–D, 5–18 palabras) y **preview 3 categorías** → **Ver todas**.

### 5.2 Categorías
**12 categorías (3000 términos)**, cada una con color, emoji, Nº palabras (200-300) y barra de progreso:

Familia 👨‍👩‍👧 `#FF4E6A` (250) · Comida 🍕 `#FF8C00` (300) · Viajes ✈️ `#4B35FF` (250) · Trabajo 💼 `#00C4A7` (250) · Naturaleza 🌿 `#2ECC71` (250) · Tecnología 💻 `#9B59B6` (250) · Animales 🐾 `#E67E22` (250) · Cuerpo y Salud 🩺 `#E74C3C` (250) · Educación 🎓 `#3498DB` (250) · Hogar 🏠 `#1ABC9C` (250) · Deportes ⚽ `#F1C40F` (200) · Compras 🛒 `#8E44AD` (250)

Filtra por **Todos / Básico / Intermedio / Avanzado**. Toca una tarjeta para ver el detalle.

### 5.3 Detalle de Categoría
Hero del color de la categoría + 3 actividades + lista de vocabulario (emoji, EN, ES, LevelBadge).

### 5.4 Flashcards
1. Ves **EN + emoji** (frente) — toca o pulsa **Revelar traducción**.
2. Dorso: **ES + ejemplo** (ej. “The word 'mother' means 'madre' in Spanish.”).
3. **Pronunciar** (placeholder TTS), luego **Revisar** (X) o **Lo sé** (Check).
4. Barra superior `1/N → N/N` (N = 200-300 según categoría, ej. `1/250`); al terminar vas a **Resultados**.

### 5.5 Match
Conecta **EN ↔ ES** (etiquetas `en`/`es` en cada tile). Timer `mm:ss`, contador `2/5 pares`. Estados: idle (blanco), selected (violeta `#4B35FF`), matched (verde `#2ECC71` + ✓), wrong (rojo `#FF4E6A` 800 ms). Al completar 5 pares → Resultados.

### 5.6 Test
Pregunta fija: **¿Qué significa en español?** Tarjeta EN grande + 4 opciones (A–D). Feedback inmediato: verde correcto, rojo tu error, resto atenuado. **Siguiente →** o **Ver resultados**.

### 5.7 Resultados
Emoji según %: 🏆 ≥80 % “¡Excelente!”, ⭐ ≥60 % “¡Bien hecho!”, 💪 <60 % “¡Sigue practicando!”. Anillo central con %, 3 stats (Correctas/Tiempo/Modo), **Intentar de nuevo** y **Ir al inicio**.

### 5.8 Progreso
- Hero: Total aprendidas **124** (+12 semana), Racha **7 días** (mejor 14).
- Secundarios: Sesiones 28, Minutos 342, Precisión 78 %.
- Gráfico “Palabras por día”, “Por categoría” (12 barras con pendientes, una por categoría 200-300 palabras), “Actividad reciente” (4 entradas con %).

## 6. Consejos

- Estudia 10 min/día para mantener la racha.
- Alterna Flashcards (memoria) → Match (velocidad) → Test (evaluación).
- Repasa categorías con <50 % primero.

## 7. Solución de Problemas

| Síntoma | Solución |
|---------|----------|
| No instala PWA | Verifica HTTPS y que el navegador soporte PWA; recarga la página. |
| Tiles no responden en Match | Espera 800 ms tras error; no toques durante animación. |
| Gráficos vacíos | Son datos mock semanales; se conectarán a persistencia en v1.1. |
| Audio no suena | TTS planificado (Web Speech API) — usa “Pronunciar” como placeholder en MVP. |

## 8. Accesibilidad y Atajos

- Tap targets ≥44 px, contraste `#12112A` sobre `#F8F7EE` y `#FFE135`.
- Navegación solo con toque; en desktop también click.
- Idioma UI: español; contenido EN↔ES.
