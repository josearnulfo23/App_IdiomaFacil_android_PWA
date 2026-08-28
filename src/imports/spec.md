ESPECIFICACIONES COMPLETAS - APLICACIÓN DE APRENDIZAJE DE IDIOMA INGLÉS
1. ASUNCIÓN DE ROLES
Rol Principal: Programador Senior
He asumido el rol de programador senior especializado en diseño y análisis de aplicaciones, con competencias en:

Identificación y desarrollo de historias de usuario
Definición de casos de uso
Especificación de requisitos funcionales y no funcionales
Diseño de arquitecturas de software
Rol Complementario: Lingüista Experto - Consultor
He asumido el rol de consultor lingüista experto en enseñanza del inglés como segunda lengua, proporcionando asesoría metodológica para el diseño funcional.

2. ANÁLISIS DE LA NECESIDAD DEL USUARIO
Desde la perspectiva del Programador Senior:
Problemas identificados:

Métodos tradicionales de aprendizaje inefectivos para el usuario
Alternativas actuales con costos elevados
Falta de resultados tangibles en lectura, escritura y habla
Necesidad de solución multiplataforma
Urgencia en obtener resultados en tiempos razonables
Requisitos iniciales detectados:

Aplicación multiplataforma
Enfoque en métodos nemotécnicos
Implementación de flashcards
Sistema de juegos de relación (match)
Sistema de validación mediante tests
Prácticas de memorización de vocabulario
3. ANÁLISIS DESDE LA PERSPECTIVA DEL CONSULTOR LINGÜISTA
Evaluación metodológica:

El usuario requiere un enfoque que aborde las cuatro habilidades fundamentales del idioma:

Reading (Lectura)
Writing (Escritura)
Listening (Escucha) - Implícita en la necesidad
Speaking (Habla)
Recomendaciones del consultor:

Métodos nemotécnicos apropiados:
Flashcards con repetición espaciada: Sistema comprobado para retención a largo plazo
Asociación visual-textual: Combinar imágenes con palabras
Contextualización: Palabras en frases y situaciones reales
Gamificación: Match games y ejercicios interactivos mantienen motivación
Componentes pedagógicos esenciales:
Vocabulario gradual: Desde básico hasta avanzado
Categorización temática: Vocabulario organizado por temas (familia, trabajo, viajes, etc.)
Evaluación continua: Tests regulares para medir progreso
Práctica activa: Ejercicios que requieran producción del lenguaje, no solo reconocimiento
4. CONSULTA PROGRAMADOR-LINGÜISTA: FUNCIONALIDADES PROPUESTAS
Diálogo técnico:
Programador: ¿Qué funcionalidades específicas debe tener la aplicación para satisfacer la necesidad del usuario?

Lingüista Consultor:

Funcionalidades esenciales:

Sistema de Flashcards inteligente:

Presentación de palabra/frase en inglés
Traducción y contexto
Imagen asociada (memoria visual)
Audio de pronunciación
Sistema de repetición espaciada (palabras difíciles aparecen más frecuentemente)
Juegos de relación (Match):

Relacionar palabra en inglés con traducción
Relacionar palabra con imagen
Relacionar frase con contexto
Sistema de evaluación:

Tests de opción múltiple
Tests de escritura
Tests de comprensión auditiva
Evaluación de progreso por categorías
Práctica de memorización:

Sesiones de repaso programadas
Recordatorios de estudio
Estadísticas de palabras aprendidas vs. pendientes
Organización del contenido:

Niveles: Básico, Intermedio, Avanzado
Categorías temáticas
Progresión estructurada
5. HISTORIAS DE USUARIO
HU-01: Gestión de Flashcards
Como estudiante de inglés
Quiero estudiar vocabulario mediante flashcards con imágenes, audio y traducción
Para memorizar palabras nuevas de forma efectiva usando técnicas nemotécnicas

Criterios de aceptación:

La flashcard muestra palabra en inglés en el frente
Al voltear muestra: traducción, imagen asociada, ejemplo en contexto
Incluye botón de audio para pronunciación
Permite marcar como "aprendida" o "revisar"
HU-02: Juego de Relación (Match)
Como estudiante de inglés
Quiero practicar vocabulario mediante juegos de relacionar
Para reforzar el aprendizaje de manera interactiva y entretenida

Criterios de aceptación:

Presenta pares de elementos a relacionar
Valida respuestas correctas/incorrectas
Muestra puntuación al finalizar
Permite diferentes tipos: palabra-traducción, palabra-imagen
HU-03: Sistema de Tests
Como estudiante de inglés
Quiero evaluar mi conocimiento mediante tests
Para validar mi progreso en el aprendizaje del vocabulario

Criterios de aceptación:

Tests con preguntas de opción múltiple
Muestra resultados al finalizar
Indica respuestas correctas e incorrectas
Guarda historial de puntuaciones
HU-04: Práctica de Repetición Espaciada
Como estudiante de inglés
Quiero que el sistema me presente palabras según mi nivel de dominio
Para optimizar mi tiempo de estudio enfocándome en lo que necesito repasar

Criterios de aceptación:

Palabras no dominadas aparecen con mayor frecuencia
Palabras aprendidas se repasan periódicamente
Sistema ajusta intervalos según desempeño del usuario
HU-05: Organización por Categorías
Como estudiante de inglés
Quiero estudiar vocabulario organizado por temas
Para aprender de manera estructurada según mis intereses o necesidades

Criterios de aceptación:

Vocabulario agrupado por temas (familia, trabajo, comida, etc.)
Posibilidad de seleccionar categoría específica para estudiar
Visualización de progreso por categoría
HU-06: Seguimiento de Progreso
Como estudiante de inglés
Quiero ver mis estadísticas de aprendizaje
Para conocer mi avance y mantener la motivación

Criterios de aceptación:

Muestra total de palabras aprendidas
Muestra palabras en progreso
Muestra racha de días estudiados
Gráficos de progreso temporal
HU-07: Gestión de Niveles
Como estudiante de inglés
Quiero acceder a contenido según mi nivel (básico, intermedio, avanzado)
Para estudiar vocabulario apropiado a mi conocimiento actual

Criterios de aceptación:

Contenido categorizado por niveles
Posibilidad de seleccionar nivel de estudio
Progresión clara entre niveles
6. CASOS DE USO
Roles de Usuario Identificados:
Estudiante (rol principal)
Sistema (para funciones automáticas)
CU-01: Estudiar con Flashcards
Actor Principal: Estudiante
Precondiciones:

Usuario ha seleccionado una categoría o nivel
Existe vocabulario disponible
Flujo Principal:

Estudiante selecciona "Estudiar con Flashcards"
Sistema muestra flashcard con palabra en inglés
Estudiante intenta recordar significado
Estudiante toca para voltear la tarjeta
Sistema muestra traducción, imagen y ejemplo
Estudiante reproduce audio de pronunciación (opcional)
Estudiante marca como "Sé" o "Revisar"
Sistema registra respuesta y ajusta algoritmo de repetición
Sistema muestra siguiente flashcard
Proceso se repite hasta completar sesión
Flujos Alternativos:

FA1: Si no hay más flashcards, sistema muestra resumen de sesión
FA2: Estudiante puede salir en cualquier momento
Postcondiciones:

Progreso del estudiante actualizado
Algoritmo de repetición espaciada ajustado
CU-02: Jugar Match (Juego de Relación)
Actor Principal: Estudiante
Precondiciones:

Usuario ha seleccionado categoría o nivel
Existe vocabulario suficiente para generar pares
Flujo Principal:

Estudiante selecciona "Juego Match"
Sistema selecciona tipo de relación (palabra-traducción, palabra-imagen)
Sistema genera pares aleatorios
Sistema muestra elementos desordenados en pantalla
Estudiante selecciona primer elemento
Estudiante selecciona segundo elemento
Sistema valida si es par correcto
Si correcto: elementos desaparecen, suma puntos
Si incorrecto: elementos se deseleccionan
Proceso se repite hasta emparejar todos los elementos
Sistema muestra puntuación final y tiempo
Postcondiciones:

Puntuación registrada
Estadísticas de juego actualizadas
CU-03: Realizar Test de Evaluación
Actor Principal: Estudiante
Precondiciones:

Usuario ha estudiado vocabulario de la categoría
Existen preguntas disponibles
Flujo Principal:

Estudiante selecciona "Realizar Test"
Sistema genera test con preguntas aleatorias
Sistema muestra pregunta con opciones múltiples
Estudiante selecciona una opción
Sistema valida respuesta
Sistema muestra siguiente pregunta
Proceso se repite hasta completar test
Sistema calcula puntuación total
Sistema muestra resultados: correctas/incorrectas
Sistema guarda puntuación en historial
Postcondiciones:

Test completado y calificado
Progreso del estudiante actualizado
Historial de tests actualizado
CU-04: Programar Sesión de Repaso
Actor Principal: Sistema
Actor Secundario: Estudiante
Precondiciones:

Estudiante tiene palabras marcadas para repasar
Han transcurrido intervalos de repetición
Flujo Principal:

Sistema calcula palabras que requieren repaso según algoritmo
Sistema notifica al estudiante
Estudiante inicia sesión de repaso
Sistema presenta flashcards según prioridad
Estudiante responde por cada palabra
Sistema ajusta próximos intervalos según desempeño
Sistema actualiza estadísticas
Postcondiciones:

Intervalos de repetición recalculados
Estadísticas actualizadas
CU-05: Consultar Progreso
Actor Principal: Estudiante
Precondiciones:

Usuario ha realizado actividades de aprendizaje
Flujo Principal:

Estudiante selecciona "Ver Progreso"
Sistema recupera estadísticas del usuario
Sistema muestra:
Total de palabras aprendidas
Palabras en progreso
Palabras pendientes
Racha de días
Gráficos de progreso
Estudiante puede filtrar por categoría o nivel
Sistema actualiza visualización según filtros
Postcondiciones:

Ninguna (consulta)
CU-06: Seleccionar Categoría de Estudio
Actor Principal: Estudiante
Precondiciones:

Existen categorías de vocabulario disponibles
Flujo Principal:

Estudiante accede a lista de categorías
Sistema muestra categorías con progreso
Estudiante selecciona una categoría
Sistema carga vocabulario de la categoría
Estudiante elige actividad (flashcards, match, test)
Sistema inicia actividad con vocabulario filtrado
Postcondiciones:

Contexto de estudio configurado para categoría seleccionada
CU-07: Gestionar Niveles de Dificultad
Actor Principal: Estudiante
Precondiciones:

Existen niveles definidos (básico, intermedio, avanzado)
Flujo Principal:

Estudiante accede a selección de nivel
Sistema muestra niveles disponibles con descripción
Estudiante selecciona nivel deseado
Sistema filtra contenido según nivel
Sistema habilita categorías correspondientes
Estudiante procede a estudiar
Postcondiciones:

Nivel de estudio configurado
Contenido filtrado por nivel
7. REQUISITOS FUNCIONALES
RF-01: Gestión de Flashcards
Descripción: El sistema debe permitir la visualización y estudio mediante flashcards digitales.

Criterios:

RF-01.1: Mostrar palabra en inglés en cara frontal
RF-01.2: Mostrar traducción, imagen y ejemplo en cara posterior
RF-01.3: Reproducir audio de pronunciación
RF-01.4: Permitir marcar como "aprendida" o "revisar"
RF-01.5: Registrar interacción del usuario con cada flashcard
RF-02: Algoritmo de Repetición Espaciada
Descripción: El sistema debe implementar algoritmo para optimizar intervalos de repaso.

Criterios:

RF-02.1: Calcular intervalos según desempeño del usuario
RF-02.2: Priorizar palabras no dominadas
RF-02.3: Programar repasos periódicos de palabras aprendidas
RF-02.4: Ajustar dinámicamente frecuencia de aparición
RF-03: Juego de Relación (Match)
Descripción: El sistema debe ofrecer juegos interactivos de emparejamiento.

Criterios:

RF-03.1: Generar pares aleatorios de vocabulario
RF-03.2: Soportar tipos: palabra-traducción, palabra-imagen
RF-03.3: Validar respuestas en tiempo real
RF-03.4: Calcular y mostrar puntuación
RF-03.5: Registrar tiempo de completado
RF-04: Sistema de Evaluación
Descripción: El sistema debe proporcionar tests para validar aprendizaje.

Criterios:

RF-04.1: Generar tests con preguntas aleatorias
RF-04.2: Presentar preguntas de opción múltiple
RF-04.3: Validar respuestas automáticamente
RF-04.4: Calcular puntuación (porcentaje de aciertos)
RF-04.5: Mostrar resultados detallados
RF-04.6: Guardar historial de tests
RF-05: Organización por Categorías
Descripción: El sistema debe organizar vocabulario por temas.

Criterios:

RF-05.1: Agrupar vocabulario por categorías temáticas
RF-05.2: Permitir selección de categoría específica
RF-05.3: Mostrar progreso por categoría
RF-05.4: Filtrar actividades según categoría seleccionada
RF-06: Gestión de Niveles
Descripción: El sistema debe categorizar contenido por niveles de dificultad.

Criterios:

RF-06.1: Definir niveles: Básico, Intermedio, Avanzado
RF-06.2: Asignar vocabulario a niveles apropiados
RF-06.3: Permitir selección de nivel de estudio
RF-06.4: Filtrar contenido según nivel seleccionado
RF-07: Seguimiento de Progreso
Descripción: El sistema debe rastrear y mostrar el progreso del estudiante.

Criterios:

RF-07.1: Contabilizar palabras aprendidas, en progreso y pendientes
RF-07.2: Calcular racha de días de estudio consecutivos
RF-07.3: Generar gráficos de progreso temporal
RF-07.4: Mostrar estadísticas por categoría y nivel
RF-07.5: Permitir visualización de historial de actividades
RF-08: Gestión de Vocabulario
Descripción: El sistema debe almacenar y gestionar el vocabulario con sus atributos.

Criterios:

RF-08.1: Almacenar palabra en inglés
RF-08.2: Almacenar traducción
RF-08.3: Asociar imagen representativa
RF-08.4: Almacenar archivo de audio
RF-08.5: Incluir ejemplo de uso en contexto
RF-08.6: Clasificar por categoría y nivel
RF-09: Sistema de Notificaciones
Descripción: El sistema debe notificar al usuario sobre sesiones de repaso.

Criterios:

RF-09.1: Generar recordatorios según intervalos de repetición
RF-09.2: Permitir configuración de horarios preferidos
RF-09.3: Mostrar notificaciones push (si la plataforma lo permite)
RF-10: Gestión de Sesiones de Estudio
Descripción: El sistema debe gestionar sesiones de estudio del usuario.

Criterios:

RF-10.1: Permitir iniciar sesión de estudio
RF-10.2: Registrar duración de sesión
RF-10.3: Guardar progreso al finalizar
RF-10.4: Permitir pausar y retomar sesión
8. REQUISITOS NO FUNCIONALES
RNF-01: Multiplataforma
Descripción: La aplicación debe funcionar en múltiples plataformas.

Criterios:

Compatibilidad con Web, Android e iOS (mínimo 2 plataformas)
Interfaz responsiva que se adapte a diferentes tamaños de pantalla
Experiencia de usuario consistente entre plataformas
Justificación: El usuario especifica explícitamente necesidad de aplicación multiplataforma.

RNF-02: Usabilidad
Descripción: La aplicación debe ser intuitiva y fácil de usar.

Criterios:

Navegación clara con máximo 3 niveles de profundidad
Interfaz minimalista sin elementos distractores
Feedback visual inmediato en todas las interacciones
Curva de aprendizaje mínima (usuario puede iniciar sin tutorial)
Justificación: Usuario ha tenido dificultades con métodos tradicionales, requiere interfaz amigable.

RNF-03: Rendimiento
Descripción: La aplicación debe responder ágilmente.

Criterios:

Tiempo de carga inicial < 3 segundos
Transiciones entre pantallas < 500ms
Reproducción de audio sin delay perceptible
Carga de imágenes optimizada (< 1 segundo)
Justificación: La experiencia fluida mantiene la motivación del usuario en el aprendizaje.

RNF-04: Disponibilidad Offline
Descripción: La aplicación debe funcionar sin conexión a internet.

Criterios:

Vocabulario, imágenes y audios almacenados localmente
Sincronización de progreso cuando haya conexión
Todas las funciones principales disponibles offline
Justificación: Permite estudio en cualquier momento y lugar, maximizando oportunidades de práctica.

RNF-05: Escalabilidad
Descripción: El sistema debe soportar crecimiento de contenido y usuarios.

Criterios:

Arquitectura modular que permita agregar nuevas categorías
Capacidad para almacenar vocabulario extenso (10,000+ palabras)
Diseño que permita futura incorporación de nuevos idiomas
Justificación: Asegura viabilidad a largo plazo del aprendizaje del usuario.

RNF-06: Mantenibilidad
Descripción: El código debe ser fácil de mantener y extender.

Criterios:

Código documentado con comentarios claros
Arquitectura basada en principios SOLID
Separación clara de responsabilidades
Pruebas unitarias para lógica crítica
Justificación: Facilita corrección de errores y adición de nuevas funcionalidades.

RNF-07: Seguridad de Datos
Descripción: El sistema debe proteger la información del usuario.

Criterios:

Almacenamiento seguro de datos locales
Encriptación de datos sensibles
Validación de entradas para prevenir inyecciones
Justificación: Protege el progreso y datos personales del usuario.

RNF-08: Eficiencia de Almacenamiento
Descripción: La aplicación debe optimizar el uso de espacio.

Criterios:

Compresión de imágenes sin pérdida significativa de calidad
Audios en formato optimizado (MP3 o AAC)
Tamaño total de aplicación < 100MB inicial
Descarga incremental de contenido por niveles
Justificación: Facilita instalación y no consume excesivo espacio en dispositivos.

RNF-09: Accesibilidad
Descripción: La aplicación debe ser accesible para diferentes tipos de usuarios.

Criterios:

Tamaños de fuente ajustables
Alto contraste en elementos visuales
Soporte para lectores de pantalla (básico)
Navegación mediante teclado (versión web)
Justificación: Amplía el alcance de la aplicación a usuarios con necesidades especiales.

RNF-10: Tolerancia a Fallos
Descripción: El sistema debe manejar errores sin perder datos.

Criterios:

Guardado automático de progreso cada acción
Manejo de excepciones sin cierre abrupto
Mensajes de error claros y orientadores
Recuperación automática ante fallos
Justificación: Previene frustración del usuario y pérdida de progreso de estudio.

9. ARQUITECTURA ORIENTADA A OBJETOS
9.1. JERARQUÍA DE CLASES
text

📦 APLICACIÓN DE APRENDIZAJE DE INGLÉS
│
├── 📋 CAPA DE DOMINIO (Lógica de Negocio)
│   │
│   ├── 🔹 Clase: Palabra
│   │   ├── Atributos:
│   │   │   - id: int (privado)
│   │   │   - palabraIngles: string (privado)
│   │   │   - traduccion: string (privado)
│   │   │   - imagenUrl: string (privado)
│   │   │   - audioUrl: string (privado)
│   │   │   - ejemploContexto: string (privado)
│   │   │   - categoria: Categoria (privado)
│   │   │   - nivel: Nivel (privado)
│   │   │   - fechaCreacion: Date (privado)
│   │   │
│   │   └── Métodos:
│   │       - obtenerPalabraIngles(): string (público)
│   │       - obtenerTraduccion(): string (público)
│   │       - obtenerImagen(): string (público)
│   │       - reproducirAudio(): void (público)
│   │       - obtenerEjemplo(): string (público)
│   │       - obtenerCategoria(): Categoria (público)
│   │       - obtenerNivel(): Nivel (público)
│   │
│   ├── 🔹 Clase: Categoria
│   │   ├── Atributos:
│   │   │   - id: int (privado)
│   │   │   - nombre: string (privado)
│   │   │   - descripcion: string (privado)
│   │   │   - iconoUrl: string (privado)
│   │   │   - palabras: List<Palabra> (privado)
│   │   │
│   │   └── Métodos:
│   │       - obtenerNombre(): string (público)
│   │       - obtenerDescripcion(): string (público)
│   │       - obtenerPalabras(): List<Palabra> (público)
│   │       - agregarPalabra(palabra: Palabra): void (público)
│   │       - contarPalabras(): int (público)
│   │
│   ├── 🔹 Enumeración: Nivel
│   │   └── Valores:
│   │       - BASICO
│   │       - INTERMEDIO
│   │       - AVANZADO
│   │
│   ├── 🔹 Clase: Usuario
│   │   ├── Atributos:
│   │   │   - id: int (privado)
│   │   │   - nombre: string (privado)
│   │   │   - nivelActual: Nivel (privado)
│   │   │   - progresoPalabras: List<ProgresoPalabra> (privado)
│   │   │   - estadisticas: Estadisticas (privado)
│   │   │   - preferencias: Preferencias (privado)
│   │   │
│   │   └── Métodos:
│   │       - obtenerNombre(): string (público)
│   │       - obtenerNivelActual(): Nivel (público)
│   │       - actualizarProgreso(progreso: ProgresoPalabra): void (público)
│   │       - obtenerEstadisticas(): Estadisticas (público)
│   │       - configurarPreferencias(pref: Preferencias): void (público)
│   │
│   ├── 🔹 Clase: ProgresoPalabra
│   │   ├── Atributos:
│   │   │   - palabra: Palabra (privado)
│   │   │   - nivelDominio: int (privado) // 0-5
│   │   │   - vecesRevisada: int (privado)
│   │   │   - ultimaRevision: Date (privado)
│   │   │   - proximaRevision: Date (privado)
│   │   │   - intervaloActual: int (privado) // días
│   │   │   - aprendida: boolean (privado)
│   │   │
│   │   └── Métodos:
│   │       - actualizarDominio(respuestaCorrecta: boolean): void (público)
│   │       - calcularProximaRevision(): Date (público)
│   │       - marcarComoAprendida(): void (público)
│   │       - requiereRepaso(): boolean (público)
│   │       - obtenerNivelDominio(): int (público)
│   │
│   ├── 🔹 Clase: Estadisticas
│   │   ├── Atributos:
│   │   │   - totalPalabrasAprendidas: int (privado)
│   │   │   - totalPalabrasEnProgreso: int (privado)
│   │   │   - totalPalabrasPendientes: int (privado)
│   │   │   - rachaDias: int (privado)
│   │   │   - ultimaFechaEstudio: Date (privado)
│   │   │   - tiempoTotalEstudio: int (privado) // minutos
│   │   │   - historialSesiones: List<SesionEstudio> (privado)
│   │   │
│   │   └── Métodos:
│   │       - obtenerPalabrasAprendidas(): int (público)
│   │       - obtenerRachaDias(): int (público)
│   │       - actualizarRacha(): void (público)
│   │       - registrarSesion(sesion: SesionEstudio): void (público)
│   │       - obtenerProgresoGeneral(): float (público)
│   │
│   ├── 🔹 Clase: SesionEstudio
│   │   ├── Atributos:
│   │   │   - id: int (privado)
│   │   │   - fechaInicio: Date (privado)
│   │   │   - fechaFin: Date (privado)
│   │   │   - duracion: int (privado) // minutos
│   │   │   - tipoActividad: TipoActividad (privado)
│   │   │   - palabrasRevisadas: int (privado)
│   │   │   - palabrasAcertadas: int (privado)
│   │   │
│   │   └── Métodos:
│   │       - iniciarSesion(): void (público)
│   │       - finalizarSesion(): void (público)
│   │       - calcularDuracion(): int (público)
│   │       - calcularPorcentajeAcierto(): float (público)
│   │
│   ├── 🔹 Enumeración: TipoActividad
│   │   └── Valores:
│   │       - FLASHCARD
│   │       - MATCH
│   │       - TEST
│   │       - REPASO
│   │
│   ├── 🔹 Clase Abstracta: Actividad
│   │   ├── Atributos:
│   │   │   - id: int (protegido)
│   │   │   - nombre: string (protegido)
│   │   │   - tipo: TipoActividad (protegido)
│   │   │   - palabras: List<Palabra> (protegido)
│   │   │   - puntuacion: int (protegido)
│   │   │
│   │   └── Métodos:
│   │       - iniciar(): void (público abstracto)
│   │       - finalizar(): void (público abstracto)
│   │       - calcularPuntuacion(): int (público abstracto)
│   │       - obtenerResultados(): Resultados (público abstracto)
│   │
│   ├── 🔹 Clase: ActividadFlashcard (hereda de Actividad)
│   │   ├── Atributos:
│   │   │   - flashcardActual: Flashcard (privado)
│   │   │   - indiceActual: int (privado)
│   │   │   - respuestasUsuario: List<RespuestaFlashcard> (privado)
│   │   │
│   │   └── Métodos:
│   │       - iniciar(): void (público)
│   │       - mostrarSiguienteFlashcard(): Flashcard (público)
│   │       - voltearFlashcard(): void (público)
│   │       - registrarRespuesta(conoce: boolean): void (público)
│   │       - finalizar(): void (público)
│   │       - calcularPuntuacion(): int (público)
│   │       - obtenerResultados(): Resultados (público)
│   │
│   ├── 🔹 Clase: ActividadMatch (hereda de Actividad)
│   │   ├── Atributos:
│   │   │   - pares: List<ParMatch> (privado)
│   │   │   - paresEncontrados: int (privado)
│   │   │   - intentos: int (privado)
│   │   │   - tiempoInicio: Date (privado)
│   │   │   - tipoMatch: TipoMatch (privado)
│   │   │
│   │   └── Métodos:
│   │       - iniciar(): void (público)
│   │       - generarPares(): List<ParMatch> (privado)
│   │       - validarSeleccion(elem1: Elemento, elem2: Elemento): boolean (público)
│   │       - registrarParEncontrado(): void (privado)
│   │       - finalizar(): void (público)
│   │       - calcularPuntuacion(): int (público)
│   │       - obtenerResultados(): Resultados (público)
│   │
│   ├── 🔹 Enumeración: TipoMatch
│   │   └── Valores:
│   │       - PALABRA_TRADUCCION
│   │       - PALABRA_IMAGEN
│   │
│   ├── 🔹 Clase: ActividadTest (hereda de Actividad)
│   │   ├── Atributos:
│   │   │   - preguntas: List<Pregunta> (privado)
│   │   │   - preguntaActual: int (privado)
│   │   │   - respuestasUsuario: List<RespuestaTest> (privado)
│   │   │   - respuestasCorrectas: int (privado)
│   │   │
│   │   └── Métodos:
│   │       - iniciar(): void (público)
│   │       - generarPreguntas(): List<Pregunta> (privado)
│   │       - mostrarSiguientePregunta(): Pregunta (público)
│   │       - registrarRespuesta(respuesta: string): void (público)
│   │       - validarRespuesta(respuesta: string): boolean (privado)
│   │       - finalizar(): void (público)
│   │       - calcularPuntuacion(): int (público)
│   │       - obtenerResultados(): Resultados (público)
│   │
│   ├── 🔹 Clase: Pregunta
│   │   ├── Atributos:
│   │   │   - id: int (privado)
│   │   │   - enunciado: string (privado)
│   │   │   - opciones: List<string> (privado)
│   │   │   - respuestaCorrecta: string (privado)
│   │   │   - palabra: Palabra (privado)
│   │   │
│   │   └── Métodos:
│   │       - obtenerEnunciado(): string (público)
│   │       - obtenerOpciones(): List<string> (público)
│   │       - validarRespuesta(respuesta: string): boolean (público)
│   │
│   ├── 🔹 Clase: Resultados
│   │   ├── Atributos:
│   │   │   - puntuacionTotal: int (privado)
│   │   │   - porcentajeAcierto: float (privado)
│   │   │   - tiempoTotal: int (privado)
│   │   │   - detalles: string (privado)
│   │   │
│   │   └── Métodos:
│   │       - obtenerPuntuacion(): int (público)
│   │       - obtenerPorcentaje(): float (público)
│   │       - obtenerTiempo(): int (público)
│   │       - generarResumen(): string (público)
│   │
│   └── 🔹 Clase: AlgoritmoRepeticionEspaciada
│       ├── Atributos:
│       │   - factorFacil: float (privado) = 2.5
│       │   - intervalosBase: List<int> (privado) = [1, 3, 7, 14, 30]
│       │
│       └── Métodos:
│           - calcularProximoIntervalo(progreso: ProgresoPalabra, correcta: boolean): int (público)
│           - ajustarDificultad(progreso: ProgresoPalabra): void (privado)
│           - obtenerPalabrasParaRepasar(usuario: Usuario): List<Palabra> (público)
│
│
├── 📋 CAPA DE SERVICIOS (Lógica de Aplicación)
│   │
│   ├── 🔹 Clase: ServicioVocabulario
│   │   └── Métodos:
│   │       - obtenerPalabrasPorCategoria(categoria: Categoria): List<Palabra> (público)
│   │       - obtenerPalabrasPorNivel(nivel: Nivel): List<Palabra> (público)
│   │       - buscarPalabra(termino: string): Palabra (público)
│   │       - obtenerTodasCategorias(): List<Categoria> (público)
│   │
│   ├── 🔹 Clase: ServicioActividades
│   │   └── Métodos:
│   │       - crearActividadFlashcard(palabras: List<Palabra>): ActividadFlashcard (público)
│   │       - crearActividadMatch(palabras: List<Palabra>, tipo: TipoMatch): ActividadMatch (público)
│   │       - crearActividadTest(palabras: List<Palabra>, numPreguntas: int): ActividadTest (público)
│   │       - guardarResultados(actividad: Actividad, usuario: Usuario): void (público)
│   │
│   ├── 🔹 Clase: ServicioProgreso
│   │   └── Métodos:
│   │       - actualizarProgresoPalabra(usuario: Usuario, palabra: Palabra, correcta: boolean): void (público)
│   │       - obtenerEstadisticas(usuario: Usuario): Estadisticas (público)
│   │       - calcularProgresoPorCategoria(usuario: Usuario, categoria: Categoria): float (público)
│   │       - obtenerPalabrasParaRepasar(usuario: Usuario): List<Palabra> (público)
│   │
│   ├── 🔹 Clase: ServicioNotificaciones
│   │   └── Métodos:
│   │       - programarRecordatorio(usuario: Usuario, fecha: Date): void (público)
│   │       - enviarNotificacion(mensaje: string): void (público)
│   │       - verificarRepasosPendientes(usuario: Usuario): int (público)
│   │
│   └── 🔹 Clase: ServicioSesion
│       └── Métodos:
│           - iniciarSesion(usuario: Usuario, tipo: TipoActividad): SesionEstudio (público)
│           - finalizarSesion(sesion: SesionEstudio): void (público)
│           - guardarSesion(sesion: SesionEstudio): void (público)
│
│
├── 📋 CAPA DE PERSISTENCIA (Acceso a Datos)
│   │
│   ├── 🔹 Interface: IRepositorioPalabras
│   │   └── Métodos:
│   │       - obtenerTodas(): List<Palabra> (público)
│   │       - obtenerPorId(id: int): Palabra (público)
│   │       - obtenerPorCategoria(categoriaId: int): List<Palabra> (público)
│   │       - obtenerPorNivel(nivel: Nivel): List<Palabra> (público)
│   │       - guardar(palabra: Palabra): void (público)
│   │
│   ├── 🔹 Clase: RepositorioPalabras (implementa IRepositorioPalabras)
│   │   ├── Atributos:
│   │   │   - baseDatos: BaseDatos (privado)
│   │   │
│   │   └── Métodos:
│   │       - obtenerTodas(): List<Palabra> (público)
│   │       - obtenerPorId(id: int): Palabra (público)
│   │       - obtenerPorCategoria(categoriaId: int): List<Palabra> (público)
│   │       - obtenerPorNivel(nivel: Nivel): List<Palabra> (público)
│   │       - guardar(palabra: Palabra): void (público)
│   │
│   ├── 🔹 Interface: IRepositorioUsuario
│   │   └── Métodos:
│   │       - obtenerUsuario(): Usuario (público)
│   │       - guardarUsuario(usuario: Usuario): void (público)
│   │       - actualizarProgreso(progreso: ProgresoPalabra): void (público)
│   │
│   ├── 🔹 Clase: RepositorioUsuario (implementa IRepositorioUsuario)
│   │   ├── Atributos:
│   │   │   - baseDatos: BaseDatos (privado)
│   │   │
│   │   └── Métodos:
│   │       - obtenerUsuario(): Usuario (público)
│   │       - guardarUsuario(usuario: Usuario): void (público)
│   │       - actualizarProgreso(progreso: ProgresoPalabra): void (público)
│   │
│   └── 🔹 Clase: BaseDatos
│       └── Métodos:
│           - conectar(): void (público)
│           - ejecutarConsulta(query: string): ResultSet (público)
│           - ejecutarActualizacion(query: string): boolean (público)
│           - cerrar(): void (público)
│
│
└── 📋 CAPA DE PRESENTACIÓN (Interfaz de Usuario)
    │
    ├── 🔹 Clase: ControladorPrincipal
    │   └── Métodos:
    │       - mostrarMenuPrincipal(): void (público)
    │       - navegarACategorias(): void (público)
    │       - navegarAProgreso(): void (público)
    │       - navegarAConfiguracion(): void (público)
    │
    ├── 🔹 Clase: ControladorFlashcards
    │   ├── Atributos:
    │   │   - actividad: ActividadFlashcard (privado)
    │   │   - vista: VistaFlashcard (privado)
    │   │
    │   └── Métodos:
    │       - iniciarActividad(palabras: List<Palabra>): void (público)
    │       - mostrarSiguiente(): void (público)
    │       - procesarRespuesta(conoce: boolean): void (público)
    │       - finalizarActividad(): void (público)
    │
    ├── 🔹 Clase: ControladorMatch
    │   ├── Atributos:
    │   │   - actividad: ActividadMatch (privado)
    │   │   - vista: VistaMatch (privado)
    │   │
    │   └── Métodos:
    │       - iniciarJuego(palabras: List<Palabra>, tipo: TipoMatch): void (público)
    │       - procesarSeleccion(elem1: Elemento, elem2: Elemento): void (público)
    │       - finalizarJuego(): void (público)
    │
    ├── 🔹 Clase: ControladorTest
    │   ├── Atributos:
    │   │   - actividad: ActividadTest (privado)
    │   │   - vista: VistaTest (privado)
    │   │
    │   └── Métodos:
    │       - iniciarTest(palabras: List<Palabra>): void (público)
    │       - procesarRespuesta(respuesta: string): void (público)
    │       - finalizarTest(): void (público)
    │
    └── 🔹 Clase: ControladorProgreso
        ├── Atributos:
        │   - vista: VistaProgreso (privado)
        │   - servicioProgreso: ServicioProgreso (privado)
        │
        └── Métodos:
            - mostrarEstadisticas(usuario: Usuario): void (público)
            - filtrarPorCategoria(categoria: Categoria): void (público)
            - generarGraficos(): void (público)
9.2. PRINCIPIOS DE DISEÑO APLICADOS
Encapsulación:
Todos los atributos son privados o protegidos, accesibles solo mediante métodos públicos (getters/setters)
Justificación: Protege la integridad de los datos y permite validación controlada
Herencia:
Clase abstracta Actividad con especialización en:
ActividadFlashcard
ActividadMatch
ActividadTest
Justificación: Reutilización de código común y polimorfismo para tratamiento uniforme de actividades
Abstracción:
Interfaces para repositorios (IRepositorioPalabras, IRepositorioUsuario)
Justificación: Permite cambiar implementaciones de persistencia sin afectar servicios
Polimorfismo:
Método abstracto iniciar(), finalizar(), etc. implementados específicamente por cada tipo de actividad
Justificación: Código cliente puede trabajar con Actividad sin conocer implementación específica
Separación de Responsabilidades:
Capa de Dominio: Lógica de negocio pura
Capa de Servicios: Orquestación y lógica de aplicación
Capa de Persistencia: Acceso y almacenamiento de datos
Capa de Presentación: Interacción con usuario
Justificación: Facilita mantenimiento, testing y escalabilidad
10. ESTRUCTURA DE CARPETAS Y ARCHIVOS
text

📁 aplicacion-aprendizaje-ingles/
│
├── 📁 src/
│   │
│   ├── 📁 domain/                          # Capa de Dominio
│   │   │
│   │   ├── 📁 entities/                    # Entidades del dominio
│   │   │   ├── 📄 Palabra.java
│   │   │   ├── 📄 Categoria.java
│   │   │   ├── 📄 Usuario.java
│   │   │   ├── 📄 ProgresoPalabra.java
│   │   │   ├── 📄 Estadisticas.java
│   │   │   ├── 📄 SesionEstudio.java
│   │   │   ├── 📄 Pregunta.java
│   │   │   ├── 📄 Resultados.java
│   │   │   └── 📄 Preferencias.java
│   │   │
│   │   ├── 📁 enums/                       # Enumeraciones
│   │   │   ├── 📄 Nivel.java
│   │   │   ├── 📄 TipoActividad.java
│   │   │   └── 📄 TipoMatch.java
│   │   │
│   │   ├── 📁 activities/                  # Actividades de aprendizaje
│   │   │   ├── 📄 Actividad.java           # Clase abstracta
│   │   │   ├── 📄 ActividadFlashcard.java
│   │   │   ├── 📄 ActividadMatch.java
│   │   │   ├── 📄 ActividadTest.java
│   │   │   ├── 📄 Flashcard.java
│   │   │   ├── 📄 ParMatch.java
│   │   │   ├── 📄 RespuestaFlashcard.java
│   │   │   └── 📄 RespuestaTest.java
│   │   │
│   │   └── 📁 algorithms/                  # Algoritmos especializados
│   │       └── 📄 AlgoritmoRepeticionEspaciada.java
│   │
│   ├── 📁 services/                        # Capa de Servicios
│   │   ├── 📄 ServicioVocabulario.java
│   │   ├── 📄 ServicioActividades.java
│   │   ├── 📄 ServicioProgreso.java
│   │   ├── 📄 ServicioNotificaciones.java
│   │   └── 📄 ServicioSesion.java
│   │
│   ├── 📁 persistence/                     # Capa de Persistencia
│   │   │
│   │   ├── 📁 interfaces/                  # Interfaces de repositorios
│   │   │   ├── 📄 IRepositorioPalabras.java
│   │   │   ├── 📄 IRepositorioUsuario.java
│   │   │   ├── 📄 IRepositorioCategorias.java
│   │   │   └── 📄 IRepositorioSesiones.java
│   │   │
│   │   ├── 📁 implementations/             # Implementaciones concretas
│   │   │   ├── 📄 RepositorioPalabras.java
│   │   │   ├── 📄 RepositorioUsuario.java
│   │   │   ├── 📄 RepositorioCategorias.java
│   │   │   └── 📄 RepositorioSesiones.java
│   │   │
│   │   └── 📁 database/                    # Gestión de base de datos
│   │       ├── 📄 BaseDatos.java
│   │       └── 📄 ConfiguracionDB.java
│   │
│   ├── 📁 presentation/                    # Capa de Presentación
│   │   │
│   │   ├── 📁 controllers/                 # Controladores
│   │   │   ├── 📄 ControladorPrincipal.java
│   │   │   ├── 📄 ControladorFlashcards.java
│   │   │   ├── 📄 ControladorMatch.java
│   │   │   ├── 📄 ControladorTest.java
│   │   │   ├── 📄 ControladorProgreso.java
│   │   │   └── 📄 ControladorCategorias.java
│   │   │
│   │   └── 📁 views/                       # Vistas (UI)
│   │       ├── 📄 VistaPrincipal.java
│   │       ├── 📄 VistaFlashcard.java
│   │       ├── 📄 VistaMatch.java
│   │       ├── 📄 VistaTest.java
│   │       ├── 📄 VistaProgreso.java
│   │       └── 📄 VistaCategorias.java
│   │
│   ├── 📁 utils/                           # Utilidades
│   │   ├── 📄 Validador.java               # Validación de datos
│   │   ├── 📄 GeneradorAleatorio.java      # Generación de elementos aleatorios
│   │   ├── 📄 ReproductorAudio.java        # Reproducción de audio
│   │   └── 📄 CargadorImagenes.java        # Carga y caché de imágenes
│   │
│   └── 📄 Main.java                        # Punto de entrada de la aplicación
│
├── 📁 resources/                           # Recursos de la aplicación
│   │
│   ├── 📁 data/                            # Datos del vocabulario
│   │   ├── 📁 vocabulary/
│   │   │   ├── 📄 basico.json              # Vocabulario nivel básico
│   │   │   ├── 📄 intermedio.json          # Vocabulario nivel intermedio
│   │   │   └── 📄 avanzado.json            # Vocabulario nivel avanzado
│   │   │
│   │   └── 📁 categories/
│   │       └── 📄 categorias.json          # Definición de categorías
│   │
│   ├── 📁 audio/                           # Archivos de audio
│   │   ├── 📁 basico/
│   │   ├── 📁 intermedio/
│   │   └── 📁 avanzado/
│   │
│   ├── 📁 images/                          # Imágenes
│   │   ├── 📁 vocabulary/                  # Imágenes de vocabulario
│   │   │   ├── 📁 basico/
│   │   │   ├── 📁 intermedio/
│   │   │   └── 📁 avanzado/
│   │   │
│   │   ├── 📁 icons/                       # Iconos de categorías
│   │   └── 📁 ui/                          # Elementos de interfaz
│   │
│   ├── 📁 styles/                          # Estilos (CSS si es web)
│   │   └── 📄 main.css
│   │
│   └── 📁 config/                          # Archivos de configuración
│       ├── 📄 app-config.json              # Configuración general
│       └── 📄 database-config.json         # Configuración de BD
│
├── 📁 tests/                               # Pruebas unitarias
│   ├── 📁 domain/
│   │   ├── 📄 PalabraTest.java
│   │   ├── 📄 UsuarioTest.java
│   │   └── 📄 AlgoritmoRepeticionEspaciadaTest.java
│   │
│   ├── 📁 services/
│   │   ├── 📄 ServicioVocabularioTest.java
│   │   └── 📄 ServicioProgresoTest.java
│   │
│   └── 📁 persistence/
│       └── 📄 RepositorioPalabrasTest.java
│
├── 📁 docs/                                # Documentación
│   ├── 📄 arquitectura.md
│   ├── 📄 manual-usuario.md
│   └── 📄 guia-desarrollo.md
│
├── 📄 README.md                            # Documentación principal
├── 📄 .gitignore                           # Archivos ignorados por Git
└── 📄 pom.xml / build.gradle               # Gestión de dependencias
10.1. JUSTIFICACIÓN DE LA ESTRUCTURA
Separación por Capas:
domain/: Contiene lógica de negocio pura, sin dependencias externas
services/: Orquesta operaciones entre dominio y persistencia
persistence/: Aísla el acceso a datos, permite cambiar BD sin afectar otras capas
presentation/: Separa lógica de presentación, facilita cambios de UI
Criterio: Arquitectura en capas facilita mantenimiento y testing independiente

Organización de Resources:
Separación por tipo de recurso (audio, images, data)
Subdivisión por nivel para facilitar gestión
Formato JSON para datos permite fácil edición y extensión
Criterio: Organización clara facilita localización de recursos y adición de contenido

Tests Paralelos a src/:
Estructura de tests replica estructura de src/
Facilita localización de pruebas correspondientes
Criterio: Convención estándar de proyectos Java/Kotlin

Archivos de Configuración Centralizados:
config/ contiene toda configuración en un solo lugar
Formato JSON permite modificación sin recompilar
Criterio: Facilita despliegue en diferentes entornos

10.2. CONVENCIONES DE NOMENCLATURA
Archivos de Clases:
PascalCase: ActividadFlashcard.java
Nombres descriptivos que reflejan responsabilidad
Carpetas:
lowercase con guiones: domain, activities
Nombres en plural para contenedores de múltiples elementos
Archivos de Recursos:
kebab-case: app-config.json, basico.json
Descriptivos del contenido
RESUMEN EJECUTIVO
Alcance del Proyecto:
Aplicación multiplataforma de aprendizaje de inglés mediante:

Flashcards con repetición espaciada
Juegos de relación (Match)
Tests de evaluación
Sistema de seguimiento de progreso
Usuarios Identificados:
Estudiante: Usuario principal que aprende inglés
Componentes Principales:
6 Historias de Usuario que cubren funcionalidades esenciales
7 Casos de Uso detallados
10 Requisitos Funcionales específicos
10 Requisitos No Funcionales que aseguran calidad
Arquitectura OOP robusta con 25+ clases organizadas en 4 capas
Estructura de carpetas modular que facilita mantenimiento
Criterios de Aceptación Cumplidos:
✅ Análisis basado exclusivamente en necesidad del usuario
✅ Consulta técnica con experto lingüista
✅ Especificaciones completas sin código
✅ Argumentación técnica y precisa
✅ Formato estructurado y comprensible

