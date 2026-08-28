<!-- TOC -->
- [PS-04 — PSEUDOCÓDIGO DE LA APLICACIÓN DE APRENDIZAJE DE IDIOMA INGLÉS](#ps-04-pseudocódigo-de-la-aplicación-de-aprendizaje-de-idioma-inglés)
  - [0. Convenciones del pseudocódigo](#0-convenciones-del-pseudocódigo)
  - [1. CAPA DE DOMINIO — Enumeraciones](#1-capa-de-dominio-enumeraciones)
    - [1.1. ENUMERACIÓN Nivel](#11-enumeración-nivel)
    - [1.2. ENUMERACIÓN TipoActividad](#12-enumeración-tipoactividad)
    - [1.3. ENUMERACIÓN TipoMatch](#13-enumeración-tipomatch)
    - [1.4. ENUMERACIÓN auxiliar de cara de flashcard](#14-enumeración-auxiliar-de-cara-de-flashcard)
  - [2. CAPA DE DOMINIO — Entidades](#2-capa-de-dominio-entidades)
    - [2.1. CLASE Palabra](#21-clase-palabra)
    - [2.2. CLASE Categoria](#22-clase-categoria)
    - [2.3. CLASE Preferencias](#23-clase-preferencias)
    - [2.4. CLASE Usuario](#24-clase-usuario)
    - [2.5. CLASE ProgresoPalabra](#25-clase-progresopalabra)
    - [2.6. CLASE Estadisticas](#26-clase-estadisticas)
    - [2.7. CLASE SesionEstudio](#27-clase-sesionestudio)
    - [2.8. CLASE Pregunta](#28-clase-pregunta)
    - [2.9. CLASE Resultados](#29-clase-resultados)
  - [3. CAPA DE DOMINIO — Actividades de aprendizaje](#3-capa-de-dominio-actividades-de-aprendizaje)
    - [3.1. Tipos de apoyo declarados en la estructura de archivos](#31-tipos-de-apoyo-declarados-en-la-estructura-de-archivos)
    - [3.2. CLASE ABSTRACTA Actividad](#32-clase-abstracta-actividad)
    - [3.3. CLASE ActividadFlashcard (hereda de Actividad)](#33-clase-actividadflashcard-hereda-de-actividad)
    - [3.4. CLASE ActividadMatch (hereda de Actividad)](#34-clase-actividadmatch-hereda-de-actividad)
    - [3.5. CLASE ActividadTest (hereda de Actividad)](#35-clase-actividadtest-hereda-de-actividad)
  - [4. CAPA DE DOMINIO — Algoritmo de repetición espaciada](#4-capa-de-dominio-algoritmo-de-repetición-espaciada)
  - [5. CAPA DE SERVICIOS — Lógica de aplicación](#5-capa-de-servicios-lógica-de-aplicación)
    - [5.1. CLASE ServicioVocabulario](#51-clase-serviciovocabulario)
    - [5.2. CLASE ServicioActividades](#52-clase-servicioactividades)
    - [5.3. CLASE ServicioProgreso](#53-clase-servicioprogreso)
    - [5.4. CLASE ServicioNotificaciones](#54-clase-servicionotificaciones)
    - [5.5. CLASE ServicioSesion](#55-clase-serviciosesion)
  - [6. CAPA DE PERSISTENCIA — Acceso a datos](#6-capa-de-persistencia-acceso-a-datos)
    - [6.1. INTERFAZ IRepositorioPalabras](#61-interfaz-irepositoriopalabras)
    - [6.2. CLASE RepositorioPalabras (implementa IRepositorioPalabras)](#62-clase-repositoriopalabras-implementa-irepositoriopalabras)
    - [6.3. INTERFAZ IRepositorioUsuario](#63-interfaz-irepositoriousuario)
    - [6.4. CLASE RepositorioUsuario (implementa IRepositorioUsuario)](#64-clase-repositoriousuario-implementa-irepositoriousuario)
    - [6.5. INTERFAZ IRepositorioCategorias](#65-interfaz-irepositoriocategorias)
    - [6.6. CLASE RepositorioCategorias (implementa IRepositorioCategorias)](#66-clase-repositoriocategorias-implementa-irepositoriocategorias)
    - [6.7. INTERFAZ IRepositorioSesiones](#67-interfaz-irepositoriosesiones)
    - [6.8. CLASE RepositorioSesiones (implementa IRepositorioSesiones)](#68-clase-repositoriosesiones-implementa-irepositoriosesiones)
    - [6.9. CLASE BaseDatos](#69-clase-basedatos)
    - [6.10. CLASE ConfiguracionDB](#610-clase-configuraciondb)
    - [6.11. Modelo lógico de persistencia (sin SQL de un lenguaje)](#611-modelo-lógico-de-persistencia-sin-sql-de-un-lenguaje)
  - [7. CAPA DE PRESENTACIÓN — Controladores y vistas](#7-capa-de-presentación-controladores-y-vistas)
    - [7.1. Vistas](#71-vistas)
    - [7.2. CLASE ControladorPrincipal](#72-clase-controladorprincipal)
    - [7.3. CLASE ControladorCategorias](#73-clase-controladorcategorias)
    - [7.4. CLASE ControladorFlashcards](#74-clase-controladorflashcards)
    - [7.5. CLASE ControladorMatch](#75-clase-controladormatch)
    - [7.6. CLASE ControladorTest](#76-clase-controladortest)
    - [7.7. CLASE ControladorProgreso](#77-clase-controladorprogreso)
  - [8. UTILIDADES](#8-utilidades)
  - [9. PUNTO DE ENTRADA](#9-punto-de-entrada)
  - [10. FLUJOS ORQUESTADOS (casos de uso en pseudocódigo)](#10-flujos-orquestados-casos-de-uso-en-pseudocódigo)
    - [10.1. CU-01 — Estudiar con Flashcards](#101-cu-01-estudiar-con-flashcards)
    - [10.2. CU-02 — Jugar Match](#102-cu-02-jugar-match)
    - [10.3. CU-03 — Realizar Test](#103-cu-03-realizar-test)
    - [10.4. CU-04 — Programar Sesión de Repaso](#104-cu-04-programar-sesión-de-repaso)
    - [10.5. CU-05 — Consultar Progreso](#105-cu-05-consultar-progreso)
    - [10.6. CU-06 — Seleccionar Categoría de Estudio](#106-cu-06-seleccionar-categoría-de-estudio)
    - [10.7. CU-07 — Gestionar Niveles de Dificultad](#107-cu-07-gestionar-niveles-de-dificultad)
  - [11. CORRESPONDENCIA MÓDULO ↔ ARCHIVO (sección 10)](#11-correspondencia-módulo-archivo-sección-10)
  - [12. ARGUMENTACIÓN DEL PSEUDOCÓDIGO](#12-argumentación-del-pseudocódigo)
    - [12.1. Criterio rector](#121-criterio-rector)
    - [12.2. Argumentación por historias de usuario](#122-argumentación-por-historias-de-usuario)
    - [12.3. Argumentación por casos de uso](#123-argumentación-por-casos-de-uso)
    - [12.4. Argumentación por requisitos funcionales](#124-argumentación-por-requisitos-funcionales)
    - [12.5. Argumentación por requisitos no funcionales](#125-argumentación-por-requisitos-no-funcionales)
    - [12.6. Argumentación de la jerarquía OOP (sección 9.2)](#126-argumentación-de-la-jerarquía-oop-sección-92)
    - [12.7. Decisiones de no invención (cumplimiento de la restricción 2)](#127-decisiones-de-no-invención-cumplimiento-de-la-restricción-2)
    - [12.8. Cobertura de componentes solicitada por PS-04](#128-cobertura-de-componentes-solicitada-por-ps-04)
    - [12.9. Correspondencia de principios profesionales aplicados](#129-correspondencia-de-principios-profesionales-aplicados)
    - [12.10. Límites conscientes de este entregable](#1210-límites-conscientes-de-este-entregable)
  - [13. CIERRE DEL ENTREGABLE](#13-cierre-del-entregable)
<!-- /TOC -->

# PS-04 — PSEUDOCÓDIGO DE LA APLICACIÓN DE APRENDIZAJE DE IDIOMA INGLÉS

---

> **Nota de cumplimiento**
>
> - Título de la solicitud: creación de pseudocódigo para aplicación de aprendizaje de idiomas.
> - Autor de la solicitud: José Arnulfo Céspedes Albornoz
> - Versión de la solicitud: 1.0
> - Fecha de la solicitud: 16/08/2026
> - Versión del presente entregable: 1.0
> - Fecha del entregable: 17/08/2026
> - Fuente de verdad exclusiva: documento `especificacion-prompt-Claude-sonnet-necesidad2.md`
> - Restricción aplicada: este entregable contiene **únicamente pseudocódigo** (no código de un lenguaje de programación estándar).
> - Restricción aplicada: no se inventa atributo, método, regla, entidad ni flujo que no esté contenido o inequívocamente derivado de la especificación.

---

## 0. Convenciones del pseudocódigo

El presente documento usa una notación algorítmica independiente de lenguaje, alineada con programación orientada a objetos y con los principios citados en la especificación (encapsulación, herencia, abstracción, polimorfismo y separación de responsabilidades).

| Símbolo / forma | Significado |
|---|---|
| `CLASE`, `CLASE ABSTRACTA`, `INTERFAZ`, `ENUMERACIÓN` | Tipos de la jerarquía de la especificación |
| `ATRIBUTOS` / `PRIVADO` / `PROTEGIDO` | Encapsulación: atributos no accesibles fuera de la clase salvo por métodos públicos |
| `MÉTODO PÚBLICO` / `MÉTODO PRIVADO` / `MÉTODO ABSTRACTO` | Visibilidad y contrato |
| `INICIO` … `FIN` | Cuerpo de un método |
| `SI` / `SINO SI` / `SINO` / `FIN SI` | Decisión |
| `SEGUN` … `CASO` … `FIN SEGUN` | Selección múltiple |
| `PARA` / `PARA CADA` / `MIENTRAS` / `REPETIR` | Iteración |
| `RETORNAR` | Devolución de valor |
| `NULO` | Ausencia de referencia |
| `VERDADERO` / `FALSO` | Booleano |
| `LISTA<T>` | Colección ordenada del tipo T |
| `//` | Comentario de comprensión o trazabilidad |
| `TRAZABILIDAD` | Referencia a HU, CU, RF, RNF o sección 9/10 de la especificación |

Tipos abstractos usados (no son un lenguaje concreto):

- `ENTERO`, `CADENA`, `BOOLEANO`, `REAL`, `FECHA`, `HORA`, `VACIO`
- Tipos de dominio definidos más adelante: `Palabra`, `Categoria`, `Nivel`, `Usuario`, etc.

Alcance de lo definido:

1. Si la especificación declara atributos y métodos, el pseudocódigo los implementa todos.
2. Si la especificación declara un componente en la jerarquía o en la estructura de carpetas, pero no detalla su interior, el componente se declara y solo se le asignan operaciones que otros elementos ya especificados invocan, o que un caso de uso / requisito funcional describe de forma explícita.
3. No se añaden clases, atributos ni métodos “de conveniencia” ajenos al documento.

Correspondencia de módulos con la estructura de carpetas de la sección 10 de la especificación:

```
aplicacion-aprendizaje-ingles/
└── src/
    ├── domain/entities|enums|activities|algorithms
    ├── services/
    ├── persistence/interfaces|implementations|database
    ├── presentation/controllers|views
    ├── utils/
    └── Main
```

---

## 1. CAPA DE DOMINIO — Enumeraciones

Módulo: `src/domain/enums/`

### 1.1. ENUMERACIÓN Nivel

```
// =============================================================================
// ENUMERACIÓN: Nivel
// Módulo: src/domain/enums/Nivel
// Trazabilidad: HU-07, CU-07, RF-06.1, RF-06.2, RF-06.4, sección 9.1
// Propósito: categorizar el contenido por dificultad.
// Valores exactamente los definidos en la especificación.
// =============================================================================

ENUMERACIÓN Nivel
    BASICO
    INTERMEDIO
    AVANZADO
FIN ENUMERACIÓN
```

### 1.2. ENUMERACIÓN TipoActividad

```
// =============================================================================
// ENUMERACIÓN: TipoActividad
// Módulo: src/domain/enums/TipoActividad
// Trazabilidad: SesionEstudio.tipoActividad, Actividad.tipo, RF-10, sección 9.1
// Propósito: identificar el tipo de sesión o actividad en curso.
// =============================================================================

ENUMERACIÓN TipoActividad
    FLASHCARD
    MATCH
    TEST
    REPASO
FIN ENUMERACIÓN
```

### 1.3. ENUMERACIÓN TipoMatch

```
// =============================================================================
// ENUMERACIÓN: TipoMatch
// Módulo: src/domain/enums/TipoMatch
// Trazabilidad: HU-02, CU-02, RF-03.2, sección 9.1
// Propósito: distinguir los dos tipos de relación admitidos.
// =============================================================================

ENUMERACIÓN TipoMatch
    PALABRA_TRADUCCION
    PALABRA_IMAGEN
FIN ENUMERACIÓN
```

### 1.4. ENUMERACIÓN auxiliar de cara de flashcard

```
// =============================================================================
// ENUMERACIÓN: CaraFlashcard
// No aparece como enumeración nominada en la sección 9.1.
// Se declara SOLO como estado interno necesario para el método
// ActividadFlashcard.voltearFlashcard() y para HU-01 / RF-01.1 / RF-01.2
// (cara frontal vs. cara posterior). No añade comportamiento extra.
// =============================================================================

ENUMERACIÓN CaraFlashcard
    FRONTAL      // palabra en inglés
    POSTERIOR    // traducción, imagen y ejemplo
FIN ENUMERACIÓN
```

---

## 2. CAPA DE DOMINIO — Entidades

Módulo: `src/domain/entities/`

### 2.1. CLASE Palabra

```
// =============================================================================
// CLASE: Palabra
// Módulo: src/domain/entities/Palabra
// Trazabilidad: RF-08 (todos los criterios), HU-01, sección 9.1
// Responsabilidad: representar una unidad de vocabulario con sus atributos
//                  de estudio (texto, traducción, imagen, audio, contexto,
//                  categoría y nivel). Encapsulación total de atributos.
// =============================================================================

CLASE Palabra

    ATRIBUTOS
        PRIVADO id              : ENTERO
        PRIVADO palabraIngles   : CADENA
        PRIVADO traduccion      : CADENA
        PRIVADO imagenUrl       : CADENA
        PRIVADO audioUrl        : CADENA
        PRIVADO ejemploContexto : CADENA
        PRIVADO categoria       : Categoria
        PRIVADO nivel           : Nivel
        PRIVADO fechaCreacion   : FECHA
    FIN ATRIBUTOS


    // -------------------------------------------------------------------------
    // INICIALIZAR
    // Asigna los atributos declarados en la especificación.
    // No introduce campos adicionales.
    // -------------------------------------------------------------------------
    MÉTODO PÚBLICO INICIALIZAR (
            pId              : ENTERO,
            pPalabraIngles   : CADENA,
            pTraduccion      : CADENA,
            pImagenUrl       : CADENA,
            pAudioUrl        : CADENA,
            pEjemploContexto : CADENA,
            pCategoria       : Categoria,
            pNivel           : Nivel,
            pFechaCreacion   : FECHA
    ) : VACIO
        INICIO
            id              ← pId
            palabraIngles   ← pPalabraIngles
            traduccion      ← pTraduccion
            imagenUrl       ← pImagenUrl
            audioUrl        ← pAudioUrl
            ejemploContexto ← pEjemploContexto
            categoria       ← pCategoria
            nivel           ← pNivel
            fechaCreacion   ← pFechaCreacion
        FIN
    FIN MÉTODO


    // -------------------------------------------------------------------------
    // obtenerPalabraIngles
    // Trazabilidad: RF-01.1, RF-08.1, HU-01 (frente de la flashcard)
    // -------------------------------------------------------------------------
    MÉTODO PÚBLICO obtenerPalabraIngles() : CADENA
        INICIO
            RETORNAR palabraIngles
        FIN
    FIN MÉTODO


    // -------------------------------------------------------------------------
    // obtenerTraduccion
    // Trazabilidad: RF-01.2, RF-08.2, HU-01 (cara posterior)
    // -------------------------------------------------------------------------
    MÉTODO PÚBLICO obtenerTraduccion() : CADENA
        INICIO
            RETORNAR traduccion
        FIN
    FIN MÉTODO


    // -------------------------------------------------------------------------
    // obtenerImagen
    // Trazabilidad: RF-01.2, RF-08.3, HU-01 (imagen asociada)
    // Devuelve la referencia de la imagen representativa.
    // -------------------------------------------------------------------------
    MÉTODO PÚBLICO obtenerImagen() : CADENA
        INICIO
            RETORNAR imagenUrl
        FIN
    FIN MÉTODO


    // -------------------------------------------------------------------------
    // reproducirAudio
    // Trazabilidad: RF-01.3, RF-08.4, HU-01 (botón de audio), RNF-03
    // Delega la reproducción en el utilitario ReproductorAudio.
    // No se define delay artificial: RNF-03 exige reproducción sin delay
    // perceptible.
    // -------------------------------------------------------------------------
    MÉTODO PÚBLICO reproducirAudio() : VACIO
        INICIO
            SI audioUrl ES NULO O audioUrl ES VACIA ENTONCES
                // No hay archivo de pronunciación asociado (RF-08.4)
                RETORNAR
            FIN SI
            ReproductorAudio.reproducir(audioUrl)
        FIN
    FIN MÉTODO


    // -------------------------------------------------------------------------
    // obtenerEjemplo
    // Trazabilidad: RF-01.2, RF-08.5, HU-01 (ejemplo en contexto)
    // -------------------------------------------------------------------------
    MÉTODO PÚBLICO obtenerEjemplo() : CADENA
        INICIO
            RETORNAR ejemploContexto
        FIN
    FIN MÉTODO


    // -------------------------------------------------------------------------
    // obtenerCategoria
    // Trazabilidad: RF-05.1, RF-08.6
    // -------------------------------------------------------------------------
    MÉTODO PÚBLICO obtenerCategoria() : Categoria
        INICIO
            RETORNAR categoria
        FIN
    FIN MÉTODO


    // -------------------------------------------------------------------------
    // obtenerNivel
    // Trazabilidad: RF-06.2, RF-06.4, RF-08.6
    // -------------------------------------------------------------------------
    MÉTODO PÚBLICO obtenerNivel() : Nivel
        INICIO
            RETORNAR nivel
        FIN
    FIN MÉTODO

FIN CLASE
```

### 2.2. CLASE Categoria

```
// =============================================================================
// CLASE: Categoria
// Módulo: src/domain/entities/Categoria
// Trazabilidad: HU-05, CU-06, RF-05, sección 9.1
// Responsabilidad: agrupar vocabulario por tema (familia, trabajo, comida,
//                  viajes, etc., según HU-05 y la sección 3 de la especificación).
// =============================================================================

CLASE Categoria

    ATRIBUTOS
        PRIVADO id          : ENTERO
        PRIVADO nombre      : CADENA
        PRIVADO descripcion : CADENA
        PRIVADO iconoUrl    : CADENA
        PRIVADO palabras    : LISTA<Palabra>
    FIN ATRIBUTOS


    MÉTODO PÚBLICO INICIALIZAR (
            pId          : ENTERO,
            pNombre      : CADENA,
            pDescripcion : CADENA,
            pIconoUrl    : CADENA
    ) : VACIO
        INICIO
            id          ← pId
            nombre      ← pNombre
            descripcion ← pDescripcion
            iconoUrl    ← pIconoUrl
            palabras    ← LISTA_VACIA<Palabra>()
        FIN
    FIN MÉTODO


    // Trazabilidad: HU-05, CU-06 paso 2
    MÉTODO PÚBLICO obtenerNombre() : CADENA
        INICIO
            RETORNAR nombre
        FIN
    FIN MÉTODO


    MÉTODO PÚBLICO obtenerDescripcion() : CADENA
        INICIO
            RETORNAR descripcion
        FIN
    FIN MÉTODO


    // Trazabilidad: RF-05.1, RF-05.4
    MÉTODO PÚBLICO obtenerPalabras() : LISTA<Palabra>
        INICIO
            RETORNAR palabras
        FIN
    FIN MÉTODO


    // Trazabilidad: RF-05.1 (agrupar vocabulario por categorías temáticas)
    MÉTODO PÚBLICO agregarPalabra(palabra : Palabra) : VACIO
        INICIO
            SI palabra ES NULO ENTONCES
                RETORNAR
            FIN SI
            SI NO palabras.contiene(palabra) ENTONCES
                palabras.agregar(palabra)
            FIN SI
        FIN
    FIN MÉTODO


    // Trazabilidad: CU-06 (mostrar categorías con progreso requiere conteo)
    MÉTODO PÚBLICO contarPalabras() : ENTERO
        INICIO
            RETORNAR palabras.longitud()
        FIN
    FIN MÉTODO

FIN CLASE
```

### 2.3. CLASE Preferencias

```
// =============================================================================
// CLASE: Preferencias
// Módulo: src/domain/entities/Preferencias
// Trazabilidad: Usuario.preferencias (sección 9.1), archivo Preferencias en
//               sección 10, RF-09.2, RNF-09 (tamaños de fuente ajustables).
// Observación de cumplimiento: la especificación NO detalla una lista
// completa de atributos. Solo se modela lo que el documento sí exige:
//   1) horarios preferidos de recordatorio (RF-09.2)
//   2) tamaño de fuente ajustable (RNF-09)
// No se agregan preferencias no mencionadas.
// =============================================================================

CLASE Preferencias

    ATRIBUTOS
        PRIVADO horariosPreferidos : LISTA<HORA>     // RF-09.2
        PRIVADO tamanoFuente       : ENTERO          // RNF-09
    FIN ATRIBUTOS


    MÉTODO PÚBLICO INICIALIZAR() : VACIO
        INICIO
            horariosPreferidos ← LISTA_VACIA<HORA>()
            tamanoFuente       ← VALOR_POR_DEFECTO_DE_INTERFAZ
        FIN
    FIN MÉTODO


    MÉTODO PÚBLICO obtenerHorariosPreferidos() : LISTA<HORA>
        INICIO
            RETORNAR horariosPreferidos
        FIN
    FIN MÉTODO


    MÉTODO PÚBLICO establecerHorariosPreferidos(horarios : LISTA<HORA>) : VACIO
        INICIO
            horariosPreferidos ← horarios
        FIN
    FIN MÉTODO


    MÉTODO PÚBLICO obtenerTamanoFuente() : ENTERO
        INICIO
            RETORNAR tamanoFuente
        FIN
    FIN MÉTODO


    MÉTODO PÚBLICO establecerTamanoFuente(tamano : ENTERO) : VACIO
        INICIO
            tamanoFuente ← tamano
        FIN
    FIN MÉTODO

FIN CLASE
```

### 2.4. CLASE Usuario

```
// =============================================================================
// CLASE: Usuario
// Módulo: src/domain/entities/Usuario
// Trazabilidad: rol Estudiante (sección 6), HU-06, HU-07, RF-07, RF-09, sección 9.1
// Responsabilidad: representar al estudiante y su estado de aprendizaje.
// =============================================================================

CLASE Usuario

    ATRIBUTOS
        PRIVADO id               : ENTERO
        PRIVADO nombre           : CADENA
        PRIVADO nivelActual      : Nivel
        PRIVADO progresoPalabras : LISTA<ProgresoPalabra>
        PRIVADO estadisticas     : Estadisticas
        PRIVADO preferencias     : Preferencias
    FIN ATRIBUTOS


    MÉTODO PÚBLICO INICIALIZAR (
            pId     : ENTERO,
            pNombre : CADENA,
            pNivel  : Nivel
    ) : VACIO
        INICIO
            id               ← pId
            nombre           ← pNombre
            nivelActual      ← pNivel
            progresoPalabras ← LISTA_VACIA<ProgresoPalabra>()
            estadisticas     ← NUEVO Estadisticas()
            preferencias     ← NUEVO Preferencias()
        FIN
    FIN MÉTODO


    MÉTODO PÚBLICO obtenerNombre() : CADENA
        INICIO
            RETORNAR nombre
        FIN
    FIN MÉTODO


    // Trazabilidad: HU-07, CU-07, RF-06.3
    MÉTODO PÚBLICO obtenerNivelActual() : Nivel
        INICIO
            RETORNAR nivelActual
        FIN
    FIN MÉTODO


    // Trazabilidad: RF-01.5, RF-07, CU-01 postcondición
    MÉTODO PÚBLICO actualizarProgreso(progreso : ProgresoPalabra) : VACIO
        INICIO
            SI progreso ES NULO ENTONCES
                RETORNAR
            FIN SI

            encontrado ← FALSO
            PARA CADA item EN progresoPalabras HACER
                SI item.obtenerPalabraAsociada() ES IGUAL A progreso.obtenerPalabraAsociada() ENTONCES
                    // Sustituye el progreso de esa palabra (RF-01.5)
                    item ← progreso
                    encontrado ← VERDADERO
                FIN SI
            FIN PARA

            SI encontrado ES FALSO ENTONCES
                progresoPalabras.agregar(progreso)
            FIN SI
        FIN
    FIN MÉTODO


    // Trazabilidad: HU-06, CU-05, RF-07
    MÉTODO PÚBLICO obtenerEstadisticas() : Estadisticas
        INICIO
            RETORNAR estadisticas
        FIN
    FIN MÉTODO


    // Trazabilidad: RF-09.2, Usuario.configurarPreferencias (sección 9.1)
    MÉTODO PÚBLICO configurarPreferencias(pref : Preferencias) : VACIO
        INICIO
            SI pref ES NULO ENTONCES
                RETORNAR
            FIN SI
            preferencias ← pref
        FIN
    FIN MÉTODO


    // Acceso requerido por AlgoritmoRepeticionEspaciada.obtenerPalabrasParaRepasar
    // y por ServicioProgreso. No es un método extra de negocio: expone la
    // colección ya declarada como atributo.
    MÉTODO PÚBLICO obtenerProgresoPalabras() : LISTA<ProgresoPalabra>
        INICIO
            RETORNAR progresoPalabras
        FIN
    FIN MÉTODO


    MÉTODO PÚBLICO obtenerPreferencias() : Preferencias
        INICIO
            RETORNAR preferencias
        FIN
    FIN MÉTODO


    MÉTODO PÚBLICO establecerNivelActual(nivel : Nivel) : VACIO
        // Trazabilidad: CU-07 postcondición “Nivel de estudio configurado”
        INICIO
            nivelActual ← nivel
        FIN
    FIN MÉTODO

FIN CLASE
```

### 2.5. CLASE ProgresoPalabra

```
// =============================================================================
// CLASE: ProgresoPalabra
// Módulo: src/domain/entities/ProgresoPalabra
// Trazabilidad: HU-04, CU-01, CU-04, RF-02, RF-07.1, sección 9.1
// Responsabilidad: estado de dominio de UNA palabra para UN usuario.
// nivelDominio: entero 0-5, exactamente como indica la especificación.
// intervaloActual: días, exactamente como indica la especificación.
// =============================================================================

CLASE ProgresoPalabra

    ATRIBUTOS
        PRIVADO palabra         : Palabra
        PRIVADO nivelDominio    : ENTERO      // 0-5
        PRIVADO vecesRevisada   : ENTERO
        PRIVADO ultimaRevision  : FECHA
        PRIVADO proximaRevision : FECHA
        PRIVADO intervaloActual : ENTERO      // días
        PRIVADO aprendida       : BOOLEANO
    FIN ATRIBUTOS


    MÉTODO PÚBLICO INICIALIZAR(pPalabra : Palabra) : VACIO
        INICIO
            palabra         ← pPalabra
            nivelDominio    ← 0              // aún no dominada (RF-02.2)
            vecesRevisada   ← 0
            ultimaRevision  ← NULO
            proximaRevision ← FECHA_ACTUAL() // disponible de inmediato
            intervaloActual ← 0
            aprendida       ← FALSO
        FIN
    FIN MÉTODO


    MÉTODO PÚBLICO obtenerPalabraAsociada() : Palabra
        INICIO
            RETORNAR palabra
        FIN
    FIN MÉTODO


    // -------------------------------------------------------------------------
    // actualizarDominio
    // Trazabilidad: HU-04, RF-02.1, RF-02.4, CU-01 paso 8, CU-04 paso 6
    // Ajusta el nivel de dominio 0-5 según acierto o error.
    // No usa constantes no declaradas distintas del rango 0-5.
    // -------------------------------------------------------------------------
    MÉTODO PÚBLICO actualizarDominio(respuestaCorrecta : BOOLEANO) : VACIO
        INICIO
            vecesRevisada  ← vecesRevisada + 1
            ultimaRevision ← FECHA_ACTUAL()

            SI respuestaCorrecta ES VERDADERO ENTONCES
                SI nivelDominio < 5 ENTONCES
                    nivelDominio ← nivelDominio + 1
                FIN SI
                // HU-01 / RF-01.4: marcar como aprendida cuando se alcanza
                // el tope de dominio declarado (5).
                SI nivelDominio = 5 ENTONCES
                    marcarComoAprendida()
                FIN SI
            SINO
                // RF-02.2: palabras no dominadas se priorizan.
                // Un fallo reduce el dominio, nunca por debajo de 0.
                SI nivelDominio > 0 ENTONCES
                    nivelDominio ← nivelDominio - 1
                FIN SI
                aprendida ← FALSO
            FIN SI
        FIN
    FIN MÉTODO


    // -------------------------------------------------------------------------
    // calcularProximaRevision
    // Trazabilidad: HU-04, RF-02.3, CU-04
    // La fecha se obtiene a partir del intervalo vigente (días).
    // El cálculo del intervalo lo realiza AlgoritmoRepeticionEspaciada;
    // esta clase solo aplica el intervalo ya ajustado.
    // -------------------------------------------------------------------------
    MÉTODO PÚBLICO calcularProximaRevision() : FECHA
        INICIO
            SI ultimaRevision ES NULO ENTONCES
                proximaRevision ← FECHA_ACTUAL()
            SINO
                proximaRevision ← ultimaRevision + intervaloActual DIAS
            FIN SI
            RETORNAR proximaRevision
        FIN
    FIN MÉTODO


    // Trazabilidad: HU-01 (marcar como “aprendida”), RF-01.4, RF-07.1
    MÉTODO PÚBLICO marcarComoAprendida() : VACIO
        INICIO
            aprendida    ← VERDADERO
            nivelDominio ← 5
        FIN
    FIN MÉTODO


    // Trazabilidad: HU-04, CU-04 precondición “han transcurrido intervalos”
    MÉTODO PÚBLICO requiereRepaso() : BOOLEANO
        INICIO
            SI proximaRevision ES NULO ENTONCES
                RETORNAR VERDADERO
            FIN SI
            RETORNAR (FECHA_ACTUAL() >= proximaRevision)
        FIN
    FIN MÉTODO


    MÉTODO PÚBLICO obtenerNivelDominio() : ENTERO
        INICIO
            RETORNAR nivelDominio
        FIN
    FIN MÉTODO


    // Accesores requeridos por AlgoritmoRepeticionEspaciada y Estadisticas.
    // No añaden reglas nuevas; exponen atributos ya declarados.
    MÉTODO PÚBLICO estaAprendida() : BOOLEANO
        INICIO
            RETORNAR aprendida
        FIN
    FIN MÉTODO


    MÉTODO PÚBLICO obtenerIntervaloActual() : ENTERO
        INICIO
            RETORNAR intervaloActual
        FIN
    FIN MÉTODO


    MÉTODO PÚBLICO establecerIntervaloActual(dias : ENTERO) : VACIO
        INICIO
            SI dias < 0 ENTONCES
                intervaloActual ← 0
            SINO
                intervaloActual ← dias
            FIN SI
        FIN
    FIN MÉTODO


    MÉTODO PÚBLICO obtenerVecesRevisada() : ENTERO
        INICIO
            RETORNAR vecesRevisada
        FIN
    FIN MÉTODO


    MÉTODO PÚBLICO obtenerProximaRevision() : FECHA
        INICIO
            RETORNAR proximaRevision
        FIN
    FIN MÉTODO

FIN CLASE
```

### 2.6. CLASE Estadisticas

```
// =============================================================================
// CLASE: Estadisticas
// Módulo: src/domain/entities/Estadisticas
// Trazabilidad: HU-06, CU-05, RF-07, sección 9.1
// Responsabilidad: consolidar métricas de aprendizaje del estudiante.
// tiempoTotalEstudio se expresa en minutos, según la especificación.
// =============================================================================

CLASE Estadisticas

    ATRIBUTOS
        PRIVADO totalPalabrasAprendidas  : ENTERO
        PRIVADO totalPalabrasEnProgreso  : ENTERO
        PRIVADO totalPalabrasPendientes  : ENTERO
        PRIVADO rachaDias                : ENTERO
        PRIVADO ultimaFechaEstudio       : FECHA
        PRIVADO tiempoTotalEstudio       : ENTERO          // minutos
        PRIVADO historialSesiones        : LISTA<SesionEstudio>
    FIN ATRIBUTOS


    MÉTODO PÚBLICO INICIALIZAR() : VACIO
        INICIO
            totalPalabrasAprendidas ← 0
            totalPalabrasEnProgreso ← 0
            totalPalabrasPendientes ← 0
            rachaDias               ← 0
            ultimaFechaEstudio      ← NULO
            tiempoTotalEstudio      ← 0
            historialSesiones       ← LISTA_VACIA<SesionEstudio>()
        FIN
    FIN MÉTODO


    // Trazabilidad: HU-06, RF-07.1
    MÉTODO PÚBLICO obtenerPalabrasAprendidas() : ENTERO
        INICIO
            RETORNAR totalPalabrasAprendidas
        FIN
    FIN MÉTODO


    // Trazabilidad: HU-06, RF-07.2
    MÉTODO PÚBLICO obtenerRachaDias() : ENTERO
        INICIO
            RETORNAR rachaDias
        FIN
    FIN MÉTODO


    // -------------------------------------------------------------------------
    // actualizarRacha
    // Trazabilidad: HU-06 “racha de días estudiados”, RF-07.2
    // “días de estudio consecutivos”:
    //   - misma fecha  → no incrementa
    //   - día inmediato anterior → incrementa
    //   - hueco de uno o más días → reinicia en 1
    // -------------------------------------------------------------------------
    MÉTODO PÚBLICO actualizarRacha() : VACIO
        INICIO
            hoy ← FECHA_ACTUAL()

            SI ultimaFechaEstudio ES NULO ENTONCES
                rachaDias ← 1
            SINO SI ultimaFechaEstudio ES IGUAL A hoy ENTONCES
                // Ya se estudió hoy; la racha no cambia
                NO_HACER_NADA
            SINO SI ultimaFechaEstudio ES IGUAL A (hoy - 1 DIA) ENTONCES
                rachaDias ← rachaDias + 1
            SINO
                rachaDias ← 1
            FIN SI

            ultimaFechaEstudio ← hoy
        FIN
    FIN MÉTODO


    // Trazabilidad: RF-07.5, RF-10.3, CU-01 / CU-02 / CU-03 postcondiciones
    MÉTODO PÚBLICO registrarSesion(sesion : SesionEstudio) : VACIO
        INICIO
            SI sesion ES NULO ENTONCES
                RETORNAR
            FIN SI
            historialSesiones.agregar(sesion)
            tiempoTotalEstudio ← tiempoTotalEstudio + sesion.calcularDuracion()
            actualizarRacha()
        FIN
    FIN MÉTODO


    // -------------------------------------------------------------------------
    // obtenerProgresoGeneral
    // Trazabilidad: HU-06, RF-07.1, CU-05
    // Progreso = palabras aprendidas / (aprendidas + en progreso + pendientes)
    // -------------------------------------------------------------------------
    MÉTODO PÚBLICO obtenerProgresoGeneral() : REAL
        INICIO
            total ← totalPalabrasAprendidas + totalPalabrasEnProgreso + totalPalabrasPendientes
            SI total = 0 ENTONCES
                RETORNAR 0.0
            FIN SI
            RETORNAR (totalPalabrasAprendidas / total)
        FIN
    FIN MÉTODO


    // Recalifica los tres contadores a partir del progreso real del usuario.
    // Trazabilidad: RF-07.1 (contabilizar aprendidas, en progreso y pendientes)
    MÉTODO PÚBLICO recuentaDesdeProgreso(listaProgreso : LISTA<ProgresoPalabra>, totalVocabulario : ENTERO) : VACIO
        INICIO
            aprendidas ← 0
            enProgreso ← 0

            PARA CADA p EN listaProgreso HACER
                SI p.estaAprendida() ENTONCES
                    aprendidas ← aprendidas + 1
                SINO SI p.obtenerVecesRevisada() > 0 ENTONCES
                    enProgreso ← enProgreso + 1
                FIN SI
            FIN PARA

            totalPalabrasAprendidas ← aprendidas
            totalPalabrasEnProgreso ← enProgreso
            pendientes ← totalVocabulario - aprendidas - enProgreso
            SI pendientes < 0 ENTONCES
                pendientes ← 0
            FIN SI
            totalPalabrasPendientes ← pendientes
        FIN
    FIN MÉTODO


    MÉTODO PÚBLICO obtenerPalabrasEnProgreso() : ENTERO
        INICIO
            RETORNAR totalPalabrasEnProgreso
        FIN
    FIN MÉTODO


    MÉTODO PÚBLICO obtenerPalabrasPendientes() : ENTERO
        INICIO
            RETORNAR totalPalabrasPendientes
        FIN
    FIN MÉTODO


    MÉTODO PÚBLICO obtenerTiempoTotalEstudio() : ENTERO
        INICIO
            RETORNAR tiempoTotalEstudio
        FIN
    FIN MÉTODO


    MÉTODO PÚBLICO obtenerHistorialSesiones() : LISTA<SesionEstudio>
        INICIO
            RETORNAR historialSesiones
        FIN
    FIN MÉTODO


    MÉTODO PÚBLICO obtenerUltimaFechaEstudio() : FECHA
        INICIO
            RETORNAR ultimaFechaEstudio
        FIN
    FIN MÉTODO

FIN CLASE
```

### 2.7. CLASE SesionEstudio

```
// =============================================================================
// CLASE: SesionEstudio
// Módulo: src/domain/entities/SesionEstudio
// Trazabilidad: RF-10, CU-01 a CU-04, sección 9.1
// Responsabilidad: registrar una sesión de estudio (inicio, fin, duración,
//                  tipo de actividad, aciertos).
// duracion se expresa en minutos, según la especificación.
// RF-10.4 (pausar y retomar) se resuelve persistiendo el estado de la sesión
// mediante ServicioSesion.guardarSesion, sin añadir métodos no declarados.
// =============================================================================

CLASE SesionEstudio

    ATRIBUTOS
        PRIVADO id                : ENTERO
        PRIVADO fechaInicio       : FECHA
        PRIVADO fechaFin          : FECHA
        PRIVADO duracion          : ENTERO           // minutos
        PRIVADO tipoActividad     : TipoActividad
        PRIVADO palabrasRevisadas : ENTERO
        PRIVADO palabrasAcertadas : ENTERO
    FIN ATRIBUTOS


    MÉTODO PÚBLICO INICIALIZAR(pId : ENTERO, pTipo : TipoActividad) : VACIO
        INICIO
            id                ← pId
            tipoActividad     ← pTipo
            fechaInicio       ← NULO
            fechaFin          ← NULO
            duracion          ← 0
            palabrasRevisadas ← 0
            palabrasAcertadas ← 0
        FIN
    FIN MÉTODO


    // Trazabilidad: RF-10.1
    MÉTODO PÚBLICO iniciarSesion() : VACIO
        INICIO
            fechaInicio ← FECHA_HORA_ACTUAL()
            fechaFin    ← NULO
        FIN
    FIN MÉTODO


    // Trazabilidad: RF-10.3
    MÉTODO PÚBLICO finalizarSesion() : VACIO
        INICIO
            fechaFin ← FECHA_HORA_ACTUAL()
            duracion ← calcularDuracion()
        FIN
    FIN MÉTODO


    // Trazabilidad: RF-10.2
    MÉTODO PÚBLICO calcularDuracion() : ENTERO
        INICIO
            SI fechaInicio ES NULO ENTONCES
                RETORNAR 0
            FIN SI
            SI fechaFin ES NULO ENTONCES
                finEfectivo ← FECHA_HORA_ACTUAL()
            SINO
                finEfectivo ← fechaFin
            FIN SI
            minutos ← DIFERENCIA_EN_MINUTOS(fechaInicio, finEfectivo)
            SI minutos < 0 ENTONCES
                minutos ← 0
            FIN SI
            duracion ← minutos
            RETORNAR duracion
        FIN
    FIN MÉTODO


    MÉTODO PÚBLICO calcularPorcentajeAcierto() : REAL
        INICIO
            SI palabrasRevisadas = 0 ENTONCES
                RETORNAR 0.0
            FIN SI
            RETORNAR (palabrasAcertadas / palabrasRevisadas)
        FIN
    FIN MÉTODO


    MÉTODO PÚBLICO registrarRevision(acertada : BOOLEANO) : VACIO
        // Soporte de RF-01.5 / RF-10.3: cada interacción se contabiliza.
        INICIO
            palabrasRevisadas ← palabrasRevisadas + 1
            SI acertada ES VERDADERO ENTONCES
                palabrasAcertadas ← palabrasAcertadas + 1
            FIN SI
        FIN
    FIN MÉTODO


    MÉTODO PÚBLICO obtenerId() : ENTERO
        INICIO
            RETORNAR id
        FIN
    FIN MÉTODO


    MÉTODO PÚBLICO obtenerTipoActividad() : TipoActividad
        INICIO
            RETORNAR tipoActividad
        FIN
    FIN MÉTODO


    MÉTODO PÚBLICO obtenerFechaInicio() : FECHA
        INICIO
            RETORNAR fechaInicio
        FIN
    FIN MÉTODO


    MÉTODO PÚBLICO obtenerFechaFin() : FECHA
        INICIO
            RETORNAR fechaFin
        FIN
    FIN MÉTODO


    MÉTODO PÚBLICO obtenerPalabrasRevisadas() : ENTERO
        INICIO
            RETORNAR palabrasRevisadas
        FIN
    FIN MÉTODO


    MÉTODO PÚBLICO obtenerPalabrasAcertadas() : ENTERO
        INICIO
            RETORNAR palabrasAcertadas
        FIN
    FIN MÉTODO

FIN CLASE
```

### 2.8. CLASE Pregunta

```
// =============================================================================
// CLASE: Pregunta
// Módulo: src/domain/entities/Pregunta
// Trazabilidad: HU-03, CU-03, RF-04.2, RF-04.3, sección 9.1
// Responsabilidad: ítem de test de opción múltiple asociado a una Palabra.
// =============================================================================

CLASE Pregunta

    ATRIBUTOS
        PRIVADO id                : ENTERO
        PRIVADO enunciado         : CADENA
        PRIVADO opciones          : LISTA<CADENA>
        PRIVADO respuestaCorrecta : CADENA
        PRIVADO palabra           : Palabra
    FIN ATRIBUTOS


    MÉTODO PÚBLICO INICIALIZAR (
            pId                : ENTERO,
            pEnunciado         : CADENA,
            pOpciones          : LISTA<CADENA>,
            pRespuestaCorrecta : CADENA,
            pPalabra           : Palabra
    ) : VACIO
        INICIO
            id                ← pId
            enunciado         ← pEnunciado
            opciones          ← pOpciones
            respuestaCorrecta ← pRespuestaCorrecta
            palabra           ← pPalabra
        FIN
    FIN MÉTODO


    MÉTODO PÚBLICO obtenerEnunciado() : CADENA
        INICIO
            RETORNAR enunciado
        FIN
    FIN MÉTODO


    MÉTODO PÚBLICO obtenerOpciones() : LISTA<CADENA>
        INICIO
            RETORNAR opciones
        FIN
    FIN MÉTODO


    // Trazabilidad: RF-04.3, HU-03 (indica correctas e incorrectas)
    MÉTODO PÚBLICO validarRespuesta(respuesta : CADENA) : BOOLEANO
        INICIO
            SI respuesta ES NULO ENTONCES
                RETORNAR FALSO
            FIN SI
            RETORNAR (respuesta ES IGUAL A respuestaCorrecta)
        FIN
    FIN MÉTODO


    MÉTODO PÚBLICO obtenerPalabra() : Palabra
        INICIO
            RETORNAR palabra
        FIN
    FIN MÉTODO


    MÉTODO PÚBLICO obtenerRespuestaCorrecta() : CADENA
        INICIO
            RETORNAR respuestaCorrecta
        FIN
    FIN MÉTODO

FIN CLASE
```

### 2.9. CLASE Resultados

```
// =============================================================================
// CLASE: Resultados
// Módulo: src/domain/entities/Resultados
// Trazabilidad: HU-02, HU-03, CU-01 FA1, CU-02, CU-03, RF-03.4, RF-04.4,
//               RF-04.5, sección 9.1
// Responsabilidad: consolidar el resultado de una actividad.
// =============================================================================

CLASE Resultados

    ATRIBUTOS
        PRIVADO puntuacionTotal   : ENTERO
        PRIVADO porcentajeAcierto : REAL
        PRIVADO tiempoTotal       : ENTERO
        PRIVADO detalles          : CADENA
    FIN ATRIBUTOS


    MÉTODO PÚBLICO INICIALIZAR (
            pPuntuacion : ENTERO,
            pPorcentaje : REAL,
            pTiempo     : ENTERO,
            pDetalles   : CADENA
    ) : VACIO
        INICIO
            puntuacionTotal   ← pPuntuacion
            porcentajeAcierto ← pPorcentaje
            tiempoTotal       ← pTiempo
            detalles          ← pDetalles
        FIN
    FIN MÉTODO


    MÉTODO PÚBLICO obtenerPuntuacion() : ENTERO
        INICIO
            RETORNAR puntuacionTotal
        FIN
    FIN MÉTODO


    MÉTODO PÚBLICO obtenerPorcentaje() : REAL
        INICIO
            RETORNAR porcentajeAcierto
        FIN
    FIN MÉTODO


    MÉTODO PÚBLICO obtenerTiempo() : ENTERO
        INICIO
            RETORNAR tiempoTotal
        FIN
    FIN MÉTODO


    // Trazabilidad: CU-01 FA1, CU-02 paso 11, CU-03 paso 9, RF-04.5
    MÉTODO PÚBLICO generarResumen() : CADENA
        INICIO
            resumen ← CONCATENAR(
                "Puntuación: ", CONVERTIR_A_CADENA(puntuacionTotal),
                " | Aciertos: ", CONVERTIR_A_CADENA(porcentajeAcierto),
                " | Tiempo: ", CONVERTIR_A_CADENA(tiempoTotal),
                " | ", detalles
            )
            RETORNAR resumen
        FIN
    FIN MÉTODO

FIN CLASE
```

---

## 3. CAPA DE DOMINIO — Actividades de aprendizaje

Módulo: `src/domain/activities/`

### 3.1. Tipos de apoyo declarados en la estructura de archivos

La sección 10 lista `Flashcard`, `ParMatch`, `RespuestaFlashcard` y `RespuestaTest`. La sección 9.1 los usa como tipos de atributos. Se definen solo con lo que HU/CU/RF describen.

```
// =============================================================================
// CLASE: Flashcard
// Módulo: src/domain/activities/Flashcard
// Trazabilidad: HU-01, CU-01, RF-01, ActividadFlashcard.flashcardActual
// Responsabilidad: representar la tarjeta en pantalla (cara frontal / posterior)
//                  sobre una Palabra.
// =============================================================================

CLASE Flashcard

    ATRIBUTOS
        PRIVADO palabra     : Palabra
        PRIVADO caraVisible : CaraFlashcard
    FIN ATRIBUTOS


    MÉTODO PÚBLICO INICIALIZAR(pPalabra : Palabra) : VACIO
        INICIO
            palabra     ← pPalabra
            caraVisible ← FRONTAL     // RF-01.1: inicia mostrando inglés
        FIN
    FIN MÉTODO


    MÉTODO PÚBLICO obtenerPalabra() : Palabra
        INICIO
            RETORNAR palabra
        FIN
    FIN MÉTODO


    MÉTODO PÚBLICO obtenerCaraVisible() : CaraFlashcard
        INICIO
            RETORNAR caraVisible
        FIN
    FIN MÉTODO


    // Trazabilidad: HU-01, CU-01 pasos 2 y 5, RF-01.1, RF-01.2
    MÉTODO PÚBLICO voltear() : VACIO
        INICIO
            SI caraVisible = FRONTAL ENTONCES
                caraVisible ← POSTERIOR
            SINO
                caraVisible ← FRONTAL
            FIN SI
        FIN
    FIN MÉTODO

FIN CLASE


// =============================================================================
// CLASE: Elemento
// Tipo usado por ActividadMatch.validarSeleccion(elem1, elem2) en la sección 9.1.
// Trazabilidad: CU-02 pasos 5-9, RF-03.1, RF-03.2, RF-03.3
// Un elemento es uno de los dos lados de un par (palabra, traducción o imagen).
// =============================================================================

CLASE Elemento

    ATRIBUTOS
        PRIVADO identificadorPar : ENTERO     // une los dos lados del mismo par
        PRIVADO contenido        : CADENA     // texto o referencia de imagen
        PRIVADO palabraOrigen    : Palabra
    FIN ATRIBUTOS


    MÉTODO PÚBLICO INICIALIZAR (
            pIdentificador : ENTERO,
            pContenido     : CADENA,
            pPalabra       : Palabra
    ) : VACIO
        INICIO
            identificadorPar ← pIdentificador
            contenido        ← pContenido
            palabraOrigen    ← pPalabra
        FIN
    FIN MÉTODO


    MÉTODO PÚBLICO obtenerIdentificadorPar() : ENTERO
        INICIO
            RETORNAR identificadorPar
        FIN
    FIN MÉTODO


    MÉTODO PÚBLICO obtenerContenido() : CADENA
        INICIO
            RETORNAR contenido
        FIN
    FIN MÉTODO


    MÉTODO PÚBLICO obtenerPalabraOrigen() : Palabra
        INICIO
            RETORNAR palabraOrigen
        FIN
    FIN MÉTODO

FIN CLASE


// =============================================================================
// CLASE: ParMatch
// Módulo: src/domain/activities/ParMatch
// Trazabilidad: HU-02, CU-02, RF-03, ActividadMatch.pares
// =============================================================================

CLASE ParMatch

    ATRIBUTOS
        PRIVADO elementoA   : Elemento
        PRIVADO elementoB   : Elemento
        PRIVADO encontrado  : BOOLEANO
    FIN ATRIBUTOS


    MÉTODO PÚBLICO INICIALIZAR(pA : Elemento, pB : Elemento) : VACIO
        INICIO
            elementoA  ← pA
            elementoB  ← pB
            encontrado ← FALSO
        FIN
    FIN MÉTODO


    MÉTODO PÚBLICO obtenerElementoA() : Elemento
        INICIO
            RETORNAR elementoA
        FIN
    FIN MÉTODO


    MÉTODO PÚBLICO obtenerElementoB() : Elemento
        INICIO
            RETORNAR elementoB
        FIN
    FIN MÉTODO


    MÉTODO PÚBLICO estaEncontrado() : BOOLEANO
        INICIO
            RETORNAR encontrado
        FIN
    FIN MÉTODO


    MÉTODO PÚBLICO marcarEncontrado() : VACIO
        INICIO
            encontrado ← VERDADERO
        FIN
    FIN MÉTODO

FIN CLASE


// =============================================================================
// CLASE: RespuestaFlashcard
// Módulo: src/domain/activities/RespuestaFlashcard
// Trazabilidad: ActividadFlashcard.respuestasUsuario, RF-01.4, RF-01.5, HU-01
// “Sé”  → conoce = VERDADERO
// “Revisar” → conoce = FALSO
// =============================================================================

CLASE RespuestaFlashcard

    ATRIBUTOS
        PRIVADO palabra : Palabra
        PRIVADO conoce  : BOOLEANO
        PRIVADO fecha   : FECHA
    FIN ATRIBUTOS


    MÉTODO PÚBLICO INICIALIZAR(pPalabra : Palabra, pConoce : BOOLEANO) : VACIO
        INICIO
            palabra ← pPalabra
            conoce  ← pConoce
            fecha   ← FECHA_HORA_ACTUAL()
        FIN
    FIN MÉTODO


    MÉTODO PÚBLICO obtenerPalabra() : Palabra
        INICIO
            RETORNAR palabra
        FIN
    FIN MÉTODO


    MÉTODO PÚBLICO elUsuarioConoce() : BOOLEANO
        INICIO
            RETORNAR conoce
        FIN
    FIN MÉTODO

FIN CLASE


// =============================================================================
// CLASE: RespuestaTest
// Módulo: src/domain/activities/RespuestaTest
// Trazabilidad: ActividadTest.respuestasUsuario, HU-03, CU-03, RF-04.3, RF-04.5
// =============================================================================

CLASE RespuestaTest

    ATRIBUTOS
        PRIVADO pregunta         : Pregunta
        PRIVADO respuestaUsuario : CADENA
        PRIVADO esCorrecta       : BOOLEANO
    FIN ATRIBUTOS


    MÉTODO PÚBLICO INICIALIZAR (
            pPregunta  : Pregunta,
            pRespuesta : CADENA,
            pCorrecta  : BOOLEANO
    ) : VACIO
        INICIO
            pregunta         ← pPregunta
            respuestaUsuario ← pRespuesta
            esCorrecta       ← pCorrecta
        FIN
    FIN MÉTODO


    MÉTODO PÚBLICO obtenerPregunta() : Pregunta
        INICIO
            RETORNAR pregunta
        FIN
    FIN MÉTODO


    MÉTODO PÚBLICO obtenerRespuestaUsuario() : CADENA
        INICIO
            RETORNAR respuestaUsuario
        FIN
    FIN MÉTODO


    MÉTODO PÚBLICO fueCorrecta() : BOOLEANO
        INICIO
            RETORNAR esCorrecta
        FIN
    FIN MÉTODO

FIN CLASE
```

### 3.2. CLASE ABSTRACTA Actividad

```
// =============================================================================
// CLASE ABSTRACTA: Actividad
// Módulo: src/domain/activities/Actividad
// Trazabilidad: sección 9.1 y 9.2 (herencia y polimorfismo)
// Especializaciones: ActividadFlashcard, ActividadMatch, ActividadTest
// Los atributos son PROTEGIDOS, tal como declara la especificación.
// Los cuatro métodos de comportamiento son ABSTRACTOS.
// =============================================================================

CLASE ABSTRACTA Actividad

    ATRIBUTOS
        PROTEGIDO id         : ENTERO
        PROTEGIDO nombre     : CADENA
        PROTEGIDO tipo       : TipoActividad
        PROTEGIDO palabras   : LISTA<Palabra>
        PROTEGIDO puntuacion : ENTERO
    FIN ATRIBUTOS


    MÉTODO PÚBLICO ABSTRACTO iniciar() : VACIO
        // Implementado por cada especialización.
    FIN MÉTODO


    MÉTODO PÚBLICO ABSTRACTO finalizar() : VACIO
        // Implementado por cada especialización.
    FIN MÉTODO


    MÉTODO PÚBLICO ABSTRACTO calcularPuntuacion() : ENTERO
        // Implementado por cada especialización.
    FIN MÉTODO


    MÉTODO PÚBLICO ABSTRACTO obtenerResultados() : Resultados
        // Implementado por cada especialización.
    FIN MÉTODO


    MÉTODO PÚBLICO obtenerTipo() : TipoActividad
        INICIO
            RETORNAR tipo
        FIN
    FIN MÉTODO


    MÉTODO PÚBLICO obtenerPalabras() : LISTA<Palabra>
        INICIO
            RETORNAR palabras
        FIN
    FIN MÉTODO


    MÉTODO PÚBLICO obtenerPuntuacion() : ENTERO
        INICIO
            RETORNAR puntuacion
        FIN
    FIN MÉTODO

FIN CLASE
```

### 3.3. CLASE ActividadFlashcard (hereda de Actividad)

```
// =============================================================================
// CLASE: ActividadFlashcard  HEREDA DE Actividad
// Módulo: src/domain/activities/ActividadFlashcard
// Trazabilidad: HU-01, HU-04, CU-01, RF-01, RF-02, RF-10, sección 9.1
// Implementa el flujo principal de CU-01 y los flujos alternativos FA1 y FA2.
// =============================================================================

CLASE ActividadFlashcard HEREDA DE Actividad

    ATRIBUTOS
        PRIVADO flashcardActual   : Flashcard
        PRIVADO indiceActual      : ENTERO
        PRIVADO respuestasUsuario : LISTA<RespuestaFlashcard>
        PRIVADO finalizada        : BOOLEANO
        PRIVADO tiempoInicio      : FECHA
        PRIVADO tiempoFin         : FECHA
    FIN ATRIBUTOS


    MÉTODO PÚBLICO INICIALIZAR(pId : ENTERO, pPalabras : LISTA<Palabra>) : VACIO
        INICIO
            id                 ← pId
            nombre             ← "Estudiar con Flashcards"
            tipo               ← FLASHCARD
            palabras           ← pPalabras
            puntuacion         ← 0
            flashcardActual    ← NULO
            indiceActual       ← -1
            respuestasUsuario  ← LISTA_VACIA<RespuestaFlashcard>()
            finalizada         ← FALSO
            tiempoInicio       ← NULO
            tiempoFin          ← NULO
        FIN
    FIN MÉTODO


    // -------------------------------------------------------------------------
    // iniciar
    // Trazabilidad: CU-01 pasos 1-2, RF-10.1
    // Precondiciones de CU-01: hay categoría/nivel seleccionado y vocabulario.
    // -------------------------------------------------------------------------
    MÉTODO PÚBLICO iniciar() : VACIO
        INICIO
            SI palabras ES NULO O palabras.longitud() = 0 ENTONCES
                // Precondición no satisfecha: no hay vocabulario disponible
                finalizada ← VERDADERO
                RETORNAR
            FIN SI
            indiceActual    ← -1
            finalizada      ← FALSO
            tiempoInicio    ← FECHA_HORA_ACTUAL()
            mostrarSiguienteFlashcard()
        FIN
    FIN MÉTODO


    // -------------------------------------------------------------------------
    // mostrarSiguienteFlashcard
    // Trazabilidad: CU-01 pasos 2 y 9, FA1
    // -------------------------------------------------------------------------
    MÉTODO PÚBLICO mostrarSiguienteFlashcard() : Flashcard
        INICIO
            indiceActual ← indiceActual + 1

            SI indiceActual >= palabras.longitud() ENTONCES
                // FA1: no hay más flashcards → se cierra la actividad
                flashcardActual ← NULO
                finalizar()
                RETORNAR NULO
            FIN SI

            flashcardActual ← NUEVO Flashcard()
            flashcardActual.INICIALIZAR(palabras[indiceActual])
            RETORNAR flashcardActual
        FIN
    FIN MÉTODO


    // -------------------------------------------------------------------------
    // voltearFlashcard
    // Trazabilidad: HU-01, CU-01 pasos 4-5, RF-01.1, RF-01.2
    // -------------------------------------------------------------------------
    MÉTODO PÚBLICO voltearFlashcard() : VACIO
        INICIO
            SI flashcardActual ES NULO ENTONCES
                RETORNAR
            FIN SI
            flashcardActual.voltear()
        FIN
    FIN MÉTODO


    // -------------------------------------------------------------------------
    // registrarRespuesta
    // Trazabilidad: HU-01 (Sé / Revisar), CU-01 pasos 7-8, RF-01.4, RF-01.5
    // conoce = VERDADERO  → “Sé” / “aprendida”
    // conoce = FALSO      → “Revisar”
    // El ajuste del algoritmo de repetición lo orquesta ServicioProgreso
    // (no se mezcla persistencia aquí: separación de responsabilidades).
    // -------------------------------------------------------------------------
    MÉTODO PÚBLICO registrarRespuesta(conoce : BOOLEANO) : VACIO
        INICIO
            SI flashcardActual ES NULO O finalizada ES VERDADERO ENTONCES
                RETORNAR
            FIN SI

            respuesta ← NUEVO RespuestaFlashcard()
            respuesta.INICIALIZAR(flashcardActual.obtenerPalabra(), conoce)
            respuestasUsuario.agregar(respuesta)
            // RNF-10: el progreso se considera registrable en cada acción
        FIN
    FIN MÉTODO


    // -------------------------------------------------------------------------
    // finalizar
    // Trazabilidad: CU-01 FA1 y FA2, RF-10.3
    // FA2: el estudiante puede salir en cualquier momento.
    // -------------------------------------------------------------------------
    MÉTODO PÚBLICO finalizar() : VACIO
        INICIO
            finalizada ← VERDADERO
            tiempoFin  ← FECHA_HORA_ACTUAL()
            puntuacion ← calcularPuntuacion()
        FIN
    FIN MÉTODO


    // Puntuación = cantidad de respuestas “Sé”.
    // La especificación no fija una fórmula numérica distinta para flashcards;
    // se usa el recuento de aciertos, coherente con SesionEstudio.
    MÉTODO PÚBLICO calcularPuntuacion() : ENTERO
        INICIO
            aciertos ← 0
            PARA CADA r EN respuestasUsuario HACER
                SI r.elUsuarioConoce() ES VERDADERO ENTONCES
                    aciertos ← aciertos + 1
                FIN SI
            FIN PARA
            puntuacion ← aciertos
            RETORNAR puntuacion
        FIN
    FIN MÉTODO


    MÉTODO PÚBLICO obtenerResultados() : Resultados
        INICIO
            total ← respuestasUsuario.longitud()
            SI total = 0 ENTONCES
                porcentaje ← 0.0
            SINO
                porcentaje ← (calcularPuntuacion() / total)
            FIN SI

            SI tiempoInicio ES NULO ENTONCES
                tiempo ← 0
            SINO
                finEfectivo ← tiempoFin
                SI finEfectivo ES NULO ENTONCES
                    finEfectivo ← FECHA_HORA_ACTUAL()
                FIN SI
                tiempo ← DIFERENCIA_EN_MINUTOS(tiempoInicio, finEfectivo)
            FIN SI

            detalles ← CONCATENAR(
                "Flashcards respondidas: ", CONVERTIR_A_CADENA(total),
                " | Marcadas como Sé: ", CONVERTIR_A_CADENA(puntuacion)
            )

            resultado ← NUEVO Resultados()
            resultado.INICIALIZAR(puntuacion, porcentaje, tiempo, detalles)
            RETORNAR resultado
        FIN
    FIN MÉTODO


    MÉTODO PÚBLICO obtenerFlashcardActual() : Flashcard
        INICIO
            RETORNAR flashcardActual
        FIN
    FIN MÉTODO


    MÉTODO PÚBLICO estaFinalizada() : BOOLEANO
        INICIO
            RETORNAR finalizada
        FIN
    FIN MÉTODO


    MÉTODO PÚBLICO obtenerRespuestasUsuario() : LISTA<RespuestaFlashcard>
        INICIO
            RETORNAR respuestasUsuario
        FIN
    FIN MÉTODO

FIN CLASE
```

### 3.4. CLASE ActividadMatch (hereda de Actividad)

```
// =============================================================================
// CLASE: ActividadMatch  HEREDA DE Actividad
// Módulo: src/domain/activities/ActividadMatch
// Trazabilidad: HU-02, CU-02, RF-03, sección 9.1
// Implementa el flujo de CU-02 completo, incluida la validación en tiempo real.
// =============================================================================

CLASE ActividadMatch HEREDA DE Actividad

    ATRIBUTOS
        PRIVADO pares            : LISTA<ParMatch>
        PRIVADO paresEncontrados : ENTERO
        PRIVADO intentos         : ENTERO
        PRIVADO tiempoInicio     : FECHA
        PRIVADO tipoMatch        : TipoMatch
        PRIVADO tiempoFin        : FECHA
        PRIVADO finalizada       : BOOLEANO
    FIN ATRIBUTOS


    MÉTODO PÚBLICO INICIALIZAR (
            pId       : ENTERO,
            pPalabras : LISTA<Palabra>,
            pTipo     : TipoMatch
    ) : VACIO
        INICIO
            id               ← pId
            nombre           ← "Juego Match"
            tipo             ← MATCH
            palabras         ← pPalabras
            puntuacion       ← 0
            pares            ← LISTA_VACIA<ParMatch>()
            paresEncontrados ← 0
            intentos         ← 0
            tipoMatch        ← pTipo
            tiempoInicio     ← NULO
            tiempoFin        ← NULO
            finalizada       ← FALSO
        FIN
    FIN MÉTODO


    // -------------------------------------------------------------------------
    // iniciar
    // Trazabilidad: CU-02 pasos 1-4
    // Precondición: existe vocabulario suficiente para generar pares.
    // -------------------------------------------------------------------------
    MÉTODO PÚBLICO iniciar() : VACIO
        INICIO
            SI palabras ES NULO O palabras.longitud() = 0 ENTONCES
                finalizada ← VERDADERO
                RETORNAR
            FIN SI
            pares            ← generarPares()
            paresEncontrados ← 0
            intentos         ← 0
            puntuacion       ← 0
            finalizada       ← FALSO
            tiempoInicio     ← FECHA_HORA_ACTUAL()     // RF-03.5
        FIN
    FIN MÉTODO


    // -------------------------------------------------------------------------
    // generarPares
    // Trazabilidad: CU-02 pasos 2-4, RF-03.1, RF-03.2
    // Método PRIVADO, tal como declara la especificación.
    // Tipo PALABRA_TRADUCCION: lado A = inglés, lado B = traducción.
    // Tipo PALABRA_IMAGEN:     lado A = inglés, lado B = imagen.
    // Los elementos se desordenan (CU-02 paso 4).
    // -------------------------------------------------------------------------
    MÉTODO PRIVADO generarPares() : LISTA<ParMatch>
        INICIO
            listaPares ← LISTA_VACIA<ParMatch>()
            identificador ← 0

            PARA CADA palabra EN palabras HACER
                identificador ← identificador + 1

                SEGUN tipoMatch HACER
                    CASO PALABRA_TRADUCCION:
                        contenidoA ← palabra.obtenerPalabraIngles()
                        contenidoB ← palabra.obtenerTraduccion()
                    CASO PALABRA_IMAGEN:
                        contenidoA ← palabra.obtenerPalabraIngles()
                        contenidoB ← palabra.obtenerImagen()
                FIN SEGUN

                elemA ← NUEVO Elemento()
                elemA.INICIALIZAR(identificador, contenidoA, palabra)
                elemB ← NUEVO Elemento()
                elemB.INICIALIZAR(identificador, contenidoB, palabra)

                par ← NUEVO ParMatch()
                par.INICIALIZAR(elemA, elemB)
                listaPares.agregar(par)
            FIN PARA

            // CU-02 paso 4: elementos desordenados en pantalla
            listaPares ← GeneradorAleatorio.desordenar(listaPares)
            RETORNAR listaPares
        FIN
    FIN MÉTODO


    // -------------------------------------------------------------------------
    // validarSeleccion
    // Trazabilidad: CU-02 pasos 5-9, RF-03.3 (validación en tiempo real)
    // Par correcto: mismo identificadorPar y elementos distintos.
    // Si correcto → desaparecen (se marcan encontrados) y suma puntos.
    // Si incorrecto → se deseleccionan (no se marcan).
    // -------------------------------------------------------------------------
    MÉTODO PÚBLICO validarSeleccion(elem1 : Elemento, elem2 : Elemento) : BOOLEANO
        INICIO
            SI finalizada ES VERDADERO ENTONCES
                RETORNAR FALSO
            FIN SI
            SI elem1 ES NULO O elem2 ES NULO ENTONCES
                RETORNAR FALSO
            FIN SI
            SI elem1 ES IGUAL A elem2 ENTONCES
                RETORNAR FALSO
            FIN SI

            intentos ← intentos + 1
            esPar ← (elem1.obtenerIdentificadorPar() = elem2.obtenerIdentificadorPar())

            SI esPar ES VERDADERO ENTONCES
                registrarParEncontrado()
                RETORNAR VERDADERO
            SINO
                // CU-02 paso 9: elementos se deseleccionan; no se alteran pares
                RETORNAR FALSO
            FIN SI
        FIN
    FIN MÉTODO


    // Trazabilidad: CU-02 paso 8, RF-03.4
    MÉTODO PRIVADO registrarParEncontrado() : VACIO
        INICIO
            paresEncontrados ← paresEncontrados + 1
            puntuacion       ← puntuacion + 1     // “suma puntos” (CU-02)
            // La especificación no fija un valor de puntos distinto de “sumar”.

            SI paresEncontrados >= pares.longitud() ENTONCES
                // CU-02 paso 10: se emparejaron todos los elementos
                finalizar()
            FIN SI
        FIN
    FIN MÉTODO


    // Trazabilidad: CU-02 paso 11, RF-03.4, RF-03.5
    MÉTODO PÚBLICO finalizar() : VACIO
        INICIO
            finalizada ← VERDADERO
            tiempoFin  ← FECHA_HORA_ACTUAL()
            puntuacion ← calcularPuntuacion()
        FIN
    FIN MÉTODO


    MÉTODO PÚBLICO calcularPuntuacion() : ENTERO
        INICIO
            // RF-03.4: calcular puntuación a partir de pares encontrados.
            puntuacion ← paresEncontrados
            RETORNAR puntuacion
        FIN
    FIN MÉTODO


    MÉTODO PÚBLICO obtenerResultados() : Resultados
        INICIO
            SI pares.longitud() = 0 ENTONCES
                porcentaje ← 0.0
            SINO
                porcentaje ← (paresEncontrados / pares.longitud())
            FIN SI

            SI tiempoInicio ES NULO ENTONCES
                tiempo ← 0
            SINO
                finEfectivo ← tiempoFin
                SI finEfectivo ES NULO ENTONCES
                    finEfectivo ← FECHA_HORA_ACTUAL()
                FIN SI
                tiempo ← DIFERENCIA_EN_MINUTOS(tiempoInicio, finEfectivo)
            FIN SI

            detalles ← CONCATENAR(
                "Pares encontrados: ", CONVERTIR_A_CADENA(paresEncontrados),
                " | Intentos: ", CONVERTIR_A_CADENA(intentos),
                " | Tipo: ", CONVERTIR_A_CADENA(tipoMatch)
            )

            resultado ← NUEVO Resultados()
            resultado.INICIALIZAR(puntuacion, porcentaje, tiempo, detalles)
            RETORNAR resultado
        FIN
    FIN MÉTODO


    MÉTODO PÚBLICO obtenerPares() : LISTA<ParMatch>
        INICIO
            RETORNAR pares
        FIN
    FIN MÉTODO


    MÉTODO PÚBLICO obtenerIntentos() : ENTERO
        INICIO
            RETORNAR intentos
        FIN
    FIN MÉTODO


    MÉTODO PÚBLICO obtenerTiempoInicio() : FECHA
        INICIO
            RETORNAR tiempoInicio
        FIN
    FIN MÉTODO


    MÉTODO PÚBLICO estaFinalizada() : BOOLEANO
        INICIO
            RETORNAR finalizada
        FIN
    FIN MÉTODO

FIN CLASE
```

### 3.5. CLASE ActividadTest (hereda de Actividad)

```
// =============================================================================
// CLASE: ActividadTest  HEREDA DE Actividad
// Módulo: src/domain/activities/ActividadTest
// Trazabilidad: HU-03, CU-03, RF-04, sección 9.1
// Implementa el flujo de CU-03: generación aleatoria, opción múltiple,
// validación, puntuación porcentual e historial (el historial lo persiste
// ServicioActividades.guardarResultados).
// =============================================================================

CLASE ActividadTest HEREDA DE Actividad

    ATRIBUTOS
        PRIVADO preguntas           : LISTA<Pregunta>
        PRIVADO preguntaActual      : ENTERO
        PRIVADO respuestasUsuario   : LISTA<RespuestaTest>
        PRIVADO respuestasCorrectas : ENTERO
        PRIVADO numeroPreguntas     : ENTERO
        PRIVADO tiempoInicio        : FECHA
        PRIVADO tiempoFin           : FECHA
        PRIVADO finalizada          : BOOLEANO
    FIN ATRIBUTOS


    MÉTODO PÚBLICO INICIALIZAR (
            pId             : ENTERO,
            pPalabras       : LISTA<Palabra>,
            pNumPreguntas   : ENTERO
    ) : VACIO
        INICIO
            id                  ← pId
            nombre              ← "Realizar Test"
            tipo                ← TEST
            palabras            ← pPalabras
            puntuacion          ← 0
            preguntas           ← LISTA_VACIA<Pregunta>()
            preguntaActual      ← -1
            respuestasUsuario   ← LISTA_VACIA<RespuestaTest>()
            respuestasCorrectas ← 0
            numeroPreguntas     ← pNumPreguntas
            tiempoInicio        ← NULO
            tiempoFin           ← NULO
            finalizada          ← FALSO
        FIN
    FIN MÉTODO


    // -------------------------------------------------------------------------
    // iniciar
    // Trazabilidad: CU-03 pasos 1-3
    // Precondición: existen preguntas disponibles (vocabulario estudiado).
    // -------------------------------------------------------------------------
    MÉTODO PÚBLICO iniciar() : VACIO
        INICIO
            SI palabras ES NULO O palabras.longitud() = 0 ENTONCES
                finalizada ← VERDADERO
                RETORNAR
            FIN SI
            preguntas           ← generarPreguntas()
            preguntaActual      ← -1
            respuestasUsuario   ← LISTA_VACIA<RespuestaTest>()
            respuestasCorrectas ← 0
            finalizada          ← FALSO
            tiempoInicio        ← FECHA_HORA_ACTUAL()
            mostrarSiguientePregunta()
        FIN
    FIN MÉTODO


    // -------------------------------------------------------------------------
    // generarPreguntas
    // Trazabilidad: CU-03 paso 2, RF-04.1, RF-04.2
    // Método PRIVADO, tal como declara la especificación.
    // Cada pregunta es de opción múltiple. Las opciones distractoras se toman
    // de otras palabras del mismo conjunto (único material disponible según
    // RF-08 / RF-04, sin inventar un banco externo).
    // -------------------------------------------------------------------------
    MÉTODO PRIVADO generarPreguntas() : LISTA<Pregunta>
        INICIO
            lista ← LISTA_VACIA<Pregunta>()
            banco ← GeneradorAleatorio.desordenar(COPIA(palabras))

            cantidad ← numeroPreguntas
            SI cantidad > banco.longitud() ENTONCES
                cantidad ← banco.longitud()
            FIN SI
            SI cantidad <= 0 ENTONCES
                cantidad ← banco.longitud()
            FIN SI

            i ← 0
            MIENTRAS i < cantidad HACER
                palabraObjetivo ← banco[i]
                enunciado ← CONCATENAR(
                    "¿Cuál es la traducción de: ",
                    palabraObjetivo.obtenerPalabraIngles(),
                    "?"
                )
                correcta ← palabraObjetivo.obtenerTraduccion()

                opciones ← LISTA_VACIA<CADENA>()
                opciones.agregar(correcta)

                // Distractores: traducciones de otras palabras del conjunto
                j ← 0
                MIENTRAS j < banco.longitud() Y opciones.longitud() < 4 HACER
                    candidata ← banco[j].obtenerTraduccion()
                    SI candidata NO ES IGUAL A correcta Y NO opciones.contiene(candidata) ENTONCES
                        opciones.agregar(candidata)
                    FIN SI
                    j ← j + 1
                FIN MIENTRAS

                opciones ← GeneradorAleatorio.desordenar(opciones)

                pregunta ← NUEVO Pregunta()
                pregunta.INICIALIZAR(i + 1, enunciado, opciones, correcta, palabraObjetivo)
                lista.agregar(pregunta)
                i ← i + 1
            FIN MIENTRAS

            RETORNAR lista
        FIN
    FIN MÉTODO


    // Trazabilidad: CU-03 pasos 3 y 6
    MÉTODO PÚBLICO mostrarSiguientePregunta() : Pregunta
        INICIO
            preguntaActual ← preguntaActual + 1
            SI preguntaActual >= preguntas.longitud() ENTONCES
                finalizar()
                RETORNAR NULO
            FIN SI
            RETORNAR preguntas[preguntaActual]
        FIN
    FIN MÉTODO


    // -------------------------------------------------------------------------
    // registrarRespuesta
    // Trazabilidad: CU-03 pasos 4-6, RF-04.3
    // -------------------------------------------------------------------------
    MÉTODO PÚBLICO registrarRespuesta(respuesta : CADENA) : VACIO
        INICIO
            SI finalizada ES VERDADERO ENTONCES
                RETORNAR
            FIN SI
            SI preguntaActual < 0 O preguntaActual >= preguntas.longitud() ENTONCES
                RETORNAR
            FIN SI

            pregunta ← preguntas[preguntaActual]
            esCorrecta ← validarRespuesta(respuesta)

            registro ← NUEVO RespuestaTest()
            registro.INICIALIZAR(pregunta, respuesta, esCorrecta)
            respuestasUsuario.agregar(registro)

            SI esCorrecta ES VERDADERO ENTONCES
                respuestasCorrectas ← respuestasCorrectas + 1
            FIN SI
            // RNF-10: cada respuesta queda registrada de inmediato
        FIN
    FIN MÉTODO


    // Trazabilidad: RF-04.3 — método PRIVADO, según especificación
    MÉTODO PRIVADO validarRespuesta(respuesta : CADENA) : BOOLEANO
        INICIO
            pregunta ← preguntas[preguntaActual]
            RETORNAR pregunta.validarRespuesta(respuesta)
        FIN
    FIN MÉTODO


    // Trazabilidad: CU-03 pasos 8-10, RF-04.4, RF-04.5, RF-04.6
    MÉTODO PÚBLICO finalizar() : VACIO
        INICIO
            finalizada ← VERDADERO
            tiempoFin  ← FECHA_HORA_ACTUAL()
            puntuacion ← calcularPuntuacion()
        FIN
    FIN MÉTODO


    // RF-04.4: puntuación = porcentaje de aciertos (se almacena como entero 0-100)
    MÉTODO PÚBLICO calcularPuntuacion() : ENTERO
        INICIO
            SI preguntas.longitud() = 0 ENTONCES
                puntuacion ← 0
            SINO
                puntuacion ← ENTERO( (respuestasCorrectas / preguntas.longitud()) * 100 )
            FIN SI
            RETORNAR puntuacion
        FIN
    FIN MÉTODO


    MÉTODO PÚBLICO obtenerResultados() : Resultados
        INICIO
            SI preguntas.longitud() = 0 ENTONCES
                porcentaje ← 0.0
            SINO
                porcentaje ← (respuestasCorrectas / preguntas.longitud())
            FIN SI

            SI tiempoInicio ES NULO ENTONCES
                tiempo ← 0
            SINO
                finEfectivo ← tiempoFin
                SI finEfectivo ES NULO ENTONCES
                    finEfectivo ← FECHA_HORA_ACTUAL()
                FIN SI
                tiempo ← DIFERENCIA_EN_MINUTOS(tiempoInicio, finEfectivo)
            FIN SI

            detalles ← CONCATENAR(
                "Correctas: ", CONVERTIR_A_CADENA(respuestasCorrectas),
                " | Incorrectas: ", CONVERTIR_A_CADENA(preguntas.longitud() - respuestasCorrectas),
                " | Total: ", CONVERTIR_A_CADENA(preguntas.longitud())
            )

            resultado ← NUEVO Resultados()
            resultado.INICIALIZAR(puntuacion, porcentaje, tiempo, detalles)
            RETORNAR resultado
        FIN
    FIN MÉTODO


    MÉTODO PÚBLICO obtenerPreguntaEnCurso() : Pregunta
        INICIO
            SI preguntaActual < 0 O preguntaActual >= preguntas.longitud() ENTONCES
                RETORNAR NULO
            FIN SI
            RETORNAR preguntas[preguntaActual]
        FIN
    FIN MÉTODO


    MÉTODO PÚBLICO obtenerRespuestasUsuario() : LISTA<RespuestaTest>
        INICIO
            RETORNAR respuestasUsuario
        FIN
    FIN MÉTODO


    MÉTODO PÚBLICO estaFinalizada() : BOOLEANO
        INICIO
            RETORNAR finalizada
        FIN
    FIN MÉTODO

FIN CLASE
```

---

## 4. CAPA DE DOMINIO — Algoritmo de repetición espaciada

Módulo: `src/domain/algorithms/`

```
// =============================================================================
// CLASE: AlgoritmoRepeticionEspaciada
// Módulo: src/domain/algorithms/AlgoritmoRepeticionEspaciada
// Trazabilidad: HU-04, CU-01 paso 8, CU-04, RF-02 (todos los criterios), sección 9.1
//
// Atributos EXACTOS de la especificación:
//   factorFacil     = 2.5
//   intervalosBase  = [1, 3, 7, 14, 30]   (días)
//
// Interpretación estrictamente anclada a esos datos y a RF-02:
//   RF-02.1  Calcular intervalos según desempeño.
//   RF-02.2  Priorizar palabras no dominadas.
//   RF-02.3  Programar repasos periódicos de palabras aprendidas.
//   RF-02.4  Ajustar dinámicamente la frecuencia de aparición.
//   nivelDominio 0-5 (ProgresoPalabra) se alinea con los 5 intervalos base.
// =============================================================================

CLASE AlgoritmoRepeticionEspaciada

    ATRIBUTOS
        PRIVADO factorFacil    : REAL         // = 2.5
        PRIVADO intervalosBase : LISTA<ENTERO> // = [1, 3, 7, 14, 30]
    FIN ATRIBUTOS


    MÉTODO PÚBLICO INICIALIZAR() : VACIO
        INICIO
            factorFacil    ← 2.5
            intervalosBase ← [1, 3, 7, 14, 30]
        FIN
    FIN MÉTODO


    // -------------------------------------------------------------------------
    // calcularProximoIntervalo
    // Trazabilidad: RF-02.1, RF-02.3, RF-02.4, CU-04 paso 6
    //
    // Desempeño incorrecto:
    //   - se usa el primer intervalo base (1 día) → mayor frecuencia (RF-02.2)
    // Desempeño correcto:
    //   - se toma el intervalo base correspondiente al nivelDominio
    //   - si el dominio ya cubrió todos los intervalos base, se multiplica
    //     el intervalo vigente por factorFacil (2.5) → RF-02.3 y RF-02.4
    // -------------------------------------------------------------------------
    MÉTODO PÚBLICO calcularProximoIntervalo (
            progreso : ProgresoPalabra,
            correcta : BOOLEANO
    ) : ENTERO
        INICIO
            SI progreso ES NULO ENTONCES
                RETORNAR intervalosBase[0]
            FIN SI

            SI correcta ES FALSO ENTONCES
                nuevoIntervalo ← intervalosBase[0]     // 1 día
            SINO
                dominio ← progreso.obtenerNivelDominio()
                // dominio ya fue actualizado por actualizarDominio (0-5)
                SI dominio <= 0 ENTONCES
                    nuevoIntervalo ← intervalosBase[0]
                SINO SI dominio <= intervalosBase.longitud() ENTONCES
                    nuevoIntervalo ← intervalosBase[dominio - 1]
                SINO
                    // Palabra aprendida: repaso periódico más amplio (RF-02.3)
                    nuevoIntervalo ← ENTERO(progreso.obtenerIntervaloActual() * factorFacil)
                    SI nuevoIntervalo < intervalosBase[intervalosBase.longitud() - 1] ENTONCES
                        nuevoIntervalo ← intervalosBase[intervalosBase.longitud() - 1]
                    FIN SI
                FIN SI
            FIN SI

            progreso.establecerIntervaloActual(nuevoIntervalo)
            progreso.calcularProximaRevision()
            RETORNAR nuevoIntervalo
        FIN
    FIN MÉTODO


    // -------------------------------------------------------------------------
    // ajustarDificultad
    // Trazabilidad: RF-02.4 — método PRIVADO, según especificación
    // Recalibra el intervalo vigente a partir del nivel de dominio actual,
    // sin alterar los valores base declarados.
    // -------------------------------------------------------------------------
    MÉTODO PRIVADO ajustarDificultad(progreso : ProgresoPalabra) : VACIO
        INICIO
            SI progreso ES NULO ENTONCES
                RETORNAR
            FIN SI

            dominio ← progreso.obtenerNivelDominio()
            SI dominio <= 0 ENTONCES
                progreso.establecerIntervaloActual(intervalosBase[0])
            SINO SI dominio <= intervalosBase.longitud() ENTONCES
                progreso.establecerIntervaloActual(intervalosBase[dominio - 1])
            SINO
                intervalo ← ENTERO(progreso.obtenerIntervaloActual() * factorFacil)
                progreso.establecerIntervaloActual(intervalo)
            FIN SI
        FIN
    FIN MÉTODO


    // -------------------------------------------------------------------------
    // obtenerPalabrasParaRepasar
    // Trazabilidad: HU-04, CU-04 paso 1, RF-02.2
    // Devuelve las palabras cuyo intervalo ya venció.
    // Orden: menor nivel de dominio primero (priorizar no dominadas).
    // =============================================================================
    MÉTODO PÚBLICO obtenerPalabrasParaRepasar(usuario : Usuario) : LISTA<Palabra>
        INICIO
            resultado ← LISTA_VACIA<Palabra>()
            SI usuario ES NULO ENTONCES
                RETORNAR resultado
            FIN SI

            candidatos ← LISTA_VACIA<ProgresoPalabra>()
            PARA CADA progreso EN usuario.obtenerProgresoPalabras() HACER
                SI progreso.requiereRepaso() ENTONCES
                    candidatos.agregar(progreso)
                FIN SI
            FIN PARA

            // RF-02.2: priorizar palabras no dominadas
            ORDENAR candidatos POR progreso.obtenerNivelDominio() ASCENDENTE

            PARA CADA progreso EN candidatos HACER
                resultado.agregar(progreso.obtenerPalabraAsociada())
            FIN PARA

            RETORNAR resultado
        FIN
    FIN MÉTODO

FIN CLASE
```

---

## 5. CAPA DE SERVICIOS — Lógica de aplicación

Módulo: `src/services/`

Los servicios orquestan dominio y persistencia. No contienen reglas que la especificación no declare.

### 5.1. CLASE ServicioVocabulario

```
// =============================================================================
// CLASE: ServicioVocabulario
// Módulo: src/services/ServicioVocabulario
// Trazabilidad: HU-05, HU-07, CU-06, CU-07, RF-05, RF-06, RF-08, sección 9.1
// =============================================================================

CLASE ServicioVocabulario

    ATRIBUTOS
        PRIVADO repositorioPalabras   : IRepositorioPalabras
        PRIVADO repositorioCategorias : IRepositorioCategorias
    FIN ATRIBUTOS


    MÉTODO PÚBLICO INICIALIZAR (
            repoPalabras   : IRepositorioPalabras,
            repoCategorias : IRepositorioCategorias
    ) : VACIO
        INICIO
            repositorioPalabras   ← repoPalabras
            repositorioCategorias ← repoCategorias
        FIN
    FIN MÉTODO


    // Trazabilidad: RF-05.2, RF-05.4, CU-06 pasos 4-6
    MÉTODO PÚBLICO obtenerPalabrasPorCategoria(categoria : Categoria) : LISTA<Palabra>
        INICIO
            SI categoria ES NULO ENTONCES
                RETORNAR LISTA_VACIA<Palabra>()
            FIN SI
            RETORNAR repositorioPalabras.obtenerPorCategoria(categoria.obtenerIdInterno())
        FIN
    FIN MÉTODO


    // Trazabilidad: RF-06.3, RF-06.4, CU-07 pasos 4-5
    MÉTODO PÚBLICO obtenerPalabrasPorNivel(nivel : Nivel) : LISTA<Palabra>
        INICIO
            SI nivel ES NULO ENTONCES
                RETORNAR LISTA_VACIA<Palabra>()
            FIN SI
            RETORNAR repositorioPalabras.obtenerPorNivel(nivel)
        FIN
    FIN MÉTODO


    MÉTODO PÚBLICO buscarPalabra(termino : CADENA) : Palabra
        INICIO
            SI termino ES NULO O termino ES VACIA ENTONCES
                RETORNAR NULO
            FIN SI
            todas ← repositorioPalabras.obtenerTodas()
            PARA CADA palabra EN todas HACER
                SI palabra.obtenerPalabraIngles() ES IGUAL_IGNORANDO_MAYUSCULAS A termino
                   O palabra.obtenerTraduccion() ES IGUAL_IGNORANDO_MAYUSCULAS A termino ENTONCES
                    RETORNAR palabra
                FIN SI
            FIN PARA
            RETORNAR NULO
        FIN
    FIN MÉTODO


    // Trazabilidad: CU-06 paso 1-2, RF-05.2
    MÉTODO PÚBLICO obtenerTodasCategorias() : LISTA<Categoria>
        INICIO
            RETORNAR repositorioCategorias.obtenerTodas()
        FIN
    FIN MÉTODO


    // Filtrado combinado exigido por CU-06 + CU-07 + RF-05.4 + RF-06.4
    MÉTODO PÚBLICO obtenerPalabrasPorCategoriaYNivel (
            categoria : Categoria,
            nivel     : Nivel
    ) : LISTA<Palabra>
        INICIO
            filtradas ← LISTA_VACIA<Palabra>()
            origen ← obtenerPalabrasPorCategoria(categoria)
            PARA CADA palabra EN origen HACER
                SI palabra.obtenerNivel() = nivel ENTONCES
                    filtradas.agregar(palabra)
                FIN SI
            FIN PARA
            RETORNAR filtradas
        FIN
    FIN MÉTODO

FIN CLASE
```

Nota de cumplimiento: `Categoria` no declara `obtenerId` en la sección 9.1. El repositorio sí opera por `categoriaId` (`obtenerPorCategoria(categoriaId: int)`). Para no inventar un atributo nuevo se expone el `id` ya declarado como atributo privado mediante un accesor mínimo, análogo a los demás getters de la misma clase:

```
// Accesor del atributo id ya declarado en Categoria (sección 9.1).
// Necesario para IRepositorioPalabras.obtenerPorCategoria(categoriaId).
MÉTODO PÚBLICO obtenerIdInterno() : ENTERO    // de Categoria
    INICIO
        RETORNAR id
    FIN
FIN MÉTODO
```

El mismo criterio aplica a `Palabra.id` y `Usuario.id` cuando un repositorio opera por identificador.

### 5.2. CLASE ServicioActividades

```
// =============================================================================
// CLASE: ServicioActividades
// Módulo: src/services/ServicioActividades
// Trazabilidad: HU-01, HU-02, HU-03, CU-01, CU-02, CU-03, RF-01, RF-03, RF-04
// =============================================================================

CLASE ServicioActividades

    ATRIBUTOS
        PRIVADO servicioProgreso : ServicioProgreso
        PRIVADO servicioSesion   : ServicioSesion
        PRIVADO contadorIds      : ENTERO
    FIN ATRIBUTOS


    MÉTODO PÚBLICO INICIALIZAR (
            pProgreso : ServicioProgreso,
            pSesion   : ServicioSesion
    ) : VACIO
        INICIO
            servicioProgreso ← pProgreso
            servicioSesion   ← pSesion
            contadorIds      ← 0
        FIN
    FIN MÉTODO


    MÉTODO PRIVADO siguienteId() : ENTERO
        INICIO
            contadorIds ← contadorIds + 1
            RETORNAR contadorIds
        FIN
    FIN MÉTODO


    MÉTODO PÚBLICO crearActividadFlashcard(palabras : LISTA<Palabra>) : ActividadFlashcard
        INICIO
            actividad ← NUEVO ActividadFlashcard()
            actividad.INICIALIZAR(siguienteId(), palabras)
            RETORNAR actividad
        FIN
    FIN MÉTODO


    MÉTODO PÚBLICO crearActividadMatch (
            palabras : LISTA<Palabra>,
            tipo     : TipoMatch
    ) : ActividadMatch
        INICIO
            actividad ← NUEVO ActividadMatch()
            actividad.INICIALIZAR(siguienteId(), palabras, tipo)
            RETORNAR actividad
        FIN
    FIN MÉTODO


    MÉTODO PÚBLICO crearActividadTest (
            palabras      : LISTA<Palabra>,
            numPreguntas  : ENTERO
    ) : ActividadTest
        INICIO
            actividad ← NUEVO ActividadTest()
            actividad.INICIALIZAR(siguienteId(), palabras, numPreguntas)
            RETORNAR actividad
        FIN
    FIN MÉTODO


    // -------------------------------------------------------------------------
    // guardarResultados
    // Trazabilidad: CU-01 / CU-02 / CU-03 postcondiciones,
    //               RF-01.5, RF-03.4, RF-04.6, RF-07.5, RF-10.3, RNF-10
    // Actualiza progreso de cada palabra evaluada y conserva el resultado.
    // -------------------------------------------------------------------------
    MÉTODO PÚBLICO guardarResultados(actividad : Actividad, usuario : Usuario) : VACIO
        INICIO
            SI actividad ES NULO O usuario ES NULO ENTONCES
                RETORNAR
            FIN SI

            SEGUN actividad.obtenerTipo() HACER

                CASO FLASHCARD:
                    flash ← CONVERTIR_A ActividadFlashcard (actividad)
                    PARA CADA respuesta EN flash.obtenerRespuestasUsuario() HACER
                        servicioProgreso.actualizarProgresoPalabra(
                            usuario,
                            respuesta.obtenerPalabra(),
                            respuesta.elUsuarioConoce()
                        )
                    FIN PARA

                CASO MATCH:
                    // CU-02 postcondición: puntuación y estadísticas de juego.
                    // El documento no detalla actualización por cada par;
                    // se registra la sesión, no se inventa un recálculo por par.
                    NO_HACER_NADA_ADICIONAL_POR_PALABRA

                CASO TEST:
                    test ← CONVERTIR_A ActividadTest (actividad)
                    PARA CADA respuesta EN test.obtenerRespuestasUsuario() HACER
                        servicioProgreso.actualizarProgresoPalabra(
                            usuario,
                            respuesta.obtenerPregunta().obtenerPalabra(),
                            respuesta.fueCorrecta()
                        )
                    FIN PARA

                CASO REPASO:
                    // CU-04: el repaso se materializa como flashcards;
                    // el progreso ya se actualiza en el caso FLASHCARD.
                    NO_HACER_NADA_ADICIONAL_POR_PALABRA

            FIN SEGUN

            // RF-04.6 / RF-07.5 / RF-10.3: el resultado queda en el historial
            // a través de la sesión asociada (ServicioSesion.guardarSesion).
        FIN
    FIN MÉTODO

FIN CLASE
```

### 5.3. CLASE ServicioProgreso

```
// =============================================================================
// CLASE: ServicioProgreso
// Módulo: src/services/ServicioProgreso
// Trazabilidad: HU-04, HU-06, CU-04, CU-05, RF-02, RF-07, sección 9.1
// =============================================================================

CLASE ServicioProgreso

    ATRIBUTOS
        PRIVADO algoritmo           : AlgoritmoRepeticionEspaciada
        PRIVADO repositorioUsuario  : IRepositorioUsuario
        PRIVADO repositorioPalabras : IRepositorioPalabras
    FIN ATRIBUTOS


    MÉTODO PÚBLICO INICIALIZAR (
            pAlgoritmo   : AlgoritmoRepeticionEspaciada,
            pRepoUsuario : IRepositorioUsuario,
            pRepoPalabras: IRepositorioPalabras
    ) : VACIO
        INICIO
            algoritmo           ← pAlgoritmo
            repositorioUsuario  ← pRepoUsuario
            repositorioPalabras ← pRepoPalabras
        FIN
    FIN MÉTODO


    // -------------------------------------------------------------------------
    // actualizarProgresoPalabra
    // Trazabilidad: CU-01 paso 8, CU-04 paso 6, RF-01.5, RF-02.1, RF-02.4, RNF-10
    // -------------------------------------------------------------------------
    MÉTODO PÚBLICO actualizarProgresoPalabra (
            usuario  : Usuario,
            palabra  : Palabra,
            correcta : BOOLEANO
    ) : VACIO
        INICIO
            SI usuario ES NULO O palabra ES NULO ENTONCES
                RETORNAR
            FIN SI

            progreso ← BUSCAR EN usuario.obtenerProgresoPalabras()
                        DONDE item.obtenerPalabraAsociada() ES IGUAL A palabra

            SI progreso ES NULO ENTONCES
                progreso ← NUEVO ProgresoPalabra()
                progreso.INICIALIZAR(palabra)
            FIN SI

            progreso.actualizarDominio(correcta)
            algoritmo.calcularProximoIntervalo(progreso, correcta)
            usuario.actualizarProgreso(progreso)
            repositorioUsuario.actualizarProgreso(progreso)
            // RNF-10: guardado automático de progreso en cada acción
        FIN
    FIN MÉTODO


    // Trazabilidad: HU-06, CU-05, RF-07
    MÉTODO PÚBLICO obtenerEstadisticas(usuario : Usuario) : Estadisticas
        INICIO
            SI usuario ES NULO ENTONCES
                RETORNAR NULO
            FIN SI
            estadisticas ← usuario.obtenerEstadisticas()
            totalVocabulario ← repositorioPalabras.obtenerTodas().longitud()
            estadisticas.recuentaDesdeProgreso(
                usuario.obtenerProgresoPalabras(),
                totalVocabulario
            )
            RETORNAR estadisticas
        FIN
    FIN MÉTODO


    // Trazabilidad: HU-05, CU-05 paso 6, CU-06, RF-05.3, RF-07.4
    MÉTODO PÚBLICO calcularProgresoPorCategoria (
            usuario   : Usuario,
            categoria : Categoria
    ) : REAL
        INICIO
            SI usuario ES NULO O categoria ES NULO ENTONCES
                RETORNAR 0.0
            FIN SI

            totalCategoria ← 0
            aprendidas     ← 0

            PARA CADA palabra EN categoria.obtenerPalabras() HACER
                totalCategoria ← totalCategoria + 1
            FIN PARA

            // Si la categoría no tiene la lista cargada, se consulta persistencia
            SI totalCategoria = 0 ENTONCES
                lista ← repositorioPalabras.obtenerPorCategoria(categoria.obtenerIdInterno())
                totalCategoria ← lista.longitud()
                PARA CADA palabra EN lista HACER
                    progreso ← BUSCAR EN usuario.obtenerProgresoPalabras()
                                DONDE item.obtenerPalabraAsociada() ES IGUAL A palabra
                    SI progreso NO ES NULO Y progreso.estaAprendida() ENTONCES
                        aprendidas ← aprendidas + 1
                    FIN SI
                FIN PARA
            SINO
                PARA CADA palabra EN categoria.obtenerPalabras() HACER
                    progreso ← BUSCAR EN usuario.obtenerProgresoPalabras()
                                DONDE item.obtenerPalabraAsociada() ES IGUAL A palabra
                    SI progreso NO ES NULO Y progreso.estaAprendida() ENTONCES
                        aprendidas ← aprendidas + 1
                    FIN SI
                FIN PARA
            FIN SI

            SI totalCategoria = 0 ENTONCES
                RETORNAR 0.0
            FIN SI
            RETORNAR (aprendidas / totalCategoria)
        FIN
    FIN MÉTODO


    // Trazabilidad: HU-04, CU-04, RF-02.2
    MÉTODO PÚBLICO obtenerPalabrasParaRepasar(usuario : Usuario) : LISTA<Palabra>
        INICIO
            RETORNAR algoritmo.obtenerPalabrasParaRepasar(usuario)
        FIN
    FIN MÉTODO

FIN CLASE
```

### 5.4. CLASE ServicioNotificaciones

```
// =============================================================================
// CLASE: ServicioNotificaciones
// Módulo: src/services/ServicioNotificaciones
// Trazabilidad: HU-04 (sesiones de repaso), CU-04, RF-09, sección 9.1
// =============================================================================

CLASE ServicioNotificaciones

    ATRIBUTOS
        PRIVADO servicioProgreso : ServicioProgreso
    FIN ATRIBUTOS


    MÉTODO PÚBLICO INICIALIZAR(pProgreso : ServicioProgreso) : VACIO
        INICIO
            servicioProgreso ← pProgreso
        FIN
    FIN MÉTODO


    // Trazabilidad: RF-09.1, RF-09.2
    // La fecha recibida debe respetar los horarios preferidos del usuario.
    MÉTODO PÚBLICO programarRecordatorio(usuario : Usuario, fecha : FECHA) : VACIO
        INICIO
            SI usuario ES NULO O fecha ES NULO ENTONCES
                RETORNAR
            FIN SI

            horarios ← usuario.obtenerPreferencias().obtenerHorariosPreferidos()
            fechaProgramada ← fecha

            SI horarios.longitud() > 0 ENTONCES
                // RF-09.2: se ajusta la hora de la fecha al primer horario preferido
                fechaProgramada ← COMBINAR_FECHA_Y_HORA(fecha, horarios[0])
            FIN SI

            REGISTRAR_RECORDATORIO_LOCAL(usuario, fechaProgramada)
        FIN
    FIN MÉTODO


    // Trazabilidad: RF-09.3 (push si la plataforma lo permite), CU-04 paso 2
    MÉTODO PÚBLICO enviarNotificacion(mensaje : CADENA) : VACIO
        INICIO
            SI mensaje ES NULO O mensaje ES VACIA ENTONCES
                RETORNAR
            FIN SI
            SI PLATAFORMA_PERMITE_PUSH() ENTONCES
                EMITIR_NOTIFICACION_PUSH(mensaje)
            SINO
                MOSTRAR_AVISO_EN_APLICACION(mensaje)
            FIN SI
        FIN
    FIN MÉTODO


    // Trazabilidad: CU-04 paso 1-2, RF-09.1
    MÉTODO PÚBLICO verificarRepasosPendientes(usuario : Usuario) : ENTERO
        INICIO
            SI usuario ES NULO ENTONCES
                RETORNAR 0
            FIN SI
            pendientes ← servicioProgreso.obtenerPalabrasParaRepasar(usuario)
            cantidad ← pendientes.longitud()
            SI cantidad > 0 ENTONCES
                enviarNotificacion(
                    CONCATENAR("Tienes ", CONVERTIR_A_CADENA(cantidad), " palabras para repasar")
                )
            FIN SI
            RETORNAR cantidad
        FIN
    FIN MÉTODO

FIN CLASE
```

### 5.5. CLASE ServicioSesion

```
// =============================================================================
// CLASE: ServicioSesion
// Módulo: src/services/ServicioSesion
// Trazabilidad: RF-10 (todos los criterios), CU-01 a CU-04, RNF-04, RNF-10
// RF-10.4 (pausar y retomar) se realiza así:
//   - pausar  = guardarSesion de una sesión aún no finalizada
//   - retomar = iniciarSesion reutiliza el estado persistido si existe
// No se declara un método público adicional no listado en la sección 9.1.
// =============================================================================

CLASE ServicioSesion

    ATRIBUTOS
        PRIVADO repositorioSesiones : IRepositorioSesiones
        PRIVADO contadorIds         : ENTERO
    FIN ATRIBUTOS


    MÉTODO PÚBLICO INICIALIZAR(repo : IRepositorioSesiones) : VACIO
        INICIO
            repositorioSesiones ← repo
            contadorIds         ← 0
        FIN
    FIN MÉTODO


    // Trazabilidad: RF-10.1, RF-10.4
    MÉTODO PÚBLICO iniciarSesion(usuario : Usuario, tipo : TipoActividad) : SesionEstudio
        INICIO
            // Retomar: si hay una sesión no finalizada del mismo tipo, se reutiliza
            existente ← repositorioSesiones.obtenerSesionAbierta(usuario, tipo)
            SI existente NO ES NULO ENTONCES
                RETORNAR existente
            FIN SI

            contadorIds ← contadorIds + 1
            sesion ← NUEVO SesionEstudio()
            sesion.INICIALIZAR(contadorIds, tipo)
            sesion.iniciarSesion()
            repositorioSesiones.guardar(sesion)
            RETORNAR sesion
        FIN
    FIN MÉTODO


    // Trazabilidad: RF-10.2, RF-10.3
    MÉTODO PÚBLICO finalizarSesion(sesion : SesionEstudio) : VACIO
        INICIO
            SI sesion ES NULO ENTONCES
                RETORNAR
            FIN SI
            sesion.finalizarSesion()
            guardarSesion(sesion)
        FIN
    FIN MÉTODO


    // Trazabilidad: RF-10.3, RF-10.4, RNF-04, RNF-10
    MÉTODO PÚBLICO guardarSesion(sesion : SesionEstudio) : VACIO
        INICIO
            SI sesion ES NULO ENTONCES
                RETORNAR
            FIN SI
            sesion.calcularDuracion()
            repositorioSesiones.guardar(sesion)
            // Persistencia local inmediata (RNF-04, RNF-10).
            // La sincronización remota ocurre cuando exista conexión (RNF-04).
        FIN
    FIN MÉTODO

FIN CLASE
```

---

## 6. CAPA DE PERSISTENCIA — Acceso a datos

Módulo: `src/persistence/`

### 6.1. INTERFAZ IRepositorioPalabras

```
// =============================================================================
// INTERFAZ: IRepositorioPalabras
// Módulo: src/persistence/interfaces/IRepositorioPalabras
// Trazabilidad: sección 9.1, 9.2 (abstracción), RF-08
// =============================================================================

INTERFAZ IRepositorioPalabras
    MÉTODO PÚBLICO obtenerTodas() : LISTA<Palabra>
    MÉTODO PÚBLICO obtenerPorId(id : ENTERO) : Palabra
    MÉTODO PÚBLICO obtenerPorCategoria(categoriaId : ENTERO) : LISTA<Palabra>
    MÉTODO PÚBLICO obtenerPorNivel(nivel : Nivel) : LISTA<Palabra>
    MÉTODO PÚBLICO guardar(palabra : Palabra) : VACIO
FIN INTERFAZ
```

### 6.2. CLASE RepositorioPalabras (implementa IRepositorioPalabras)

```
// =============================================================================
// CLASE: RepositorioPalabras  IMPLEMENTA IRepositorioPalabras
// Módulo: src/persistence/implementations/RepositorioPalabras
// Trazabilidad: sección 9.1, RF-08, RNF-04, RNF-07
// =============================================================================

CLASE RepositorioPalabras IMPLEMENTA IRepositorioPalabras

    ATRIBUTOS
        PRIVADO baseDatos : BaseDatos
    FIN ATRIBUTOS


    MÉTODO PÚBLICO INICIALIZAR(pBaseDatos : BaseDatos) : VACIO
        INICIO
            baseDatos ← pBaseDatos
        FIN
    FIN MÉTODO


    MÉTODO PÚBLICO obtenerTodas() : LISTA<Palabra>
        INICIO
            resultadoConsulta ← baseDatos.ejecutarConsulta("OBTENER TODAS LAS PALABRAS")
            RETORNAR MAPEAR_A_LISTA_PALABRA(resultadoConsulta)
        FIN
    FIN MÉTODO


    MÉTODO PÚBLICO obtenerPorId(id : ENTERO) : Palabra
        INICIO
            resultadoConsulta ← baseDatos.ejecutarConsulta(
                CONCATENAR("OBTENER PALABRA CON id = ", CONVERTIR_A_CADENA(id))
            )
            RETORNAR MAPEAR_A_PALABRA(resultadoConsulta)
        FIN
    FIN MÉTODO


    MÉTODO PÚBLICO obtenerPorCategoria(categoriaId : ENTERO) : LISTA<Palabra>
        INICIO
            resultadoConsulta ← baseDatos.ejecutarConsulta(
                CONCATENAR("OBTENER PALABRAS CON categoriaId = ", CONVERTIR_A_CADENA(categoriaId))
            )
            RETORNAR MAPEAR_A_LISTA_PALABRA(resultadoConsulta)
        FIN
    FIN MÉTODO


    MÉTODO PÚBLICO obtenerPorNivel(nivel : Nivel) : LISTA<Palabra>
        INICIO
            resultadoConsulta ← baseDatos.ejecutarConsulta(
                CONCATENAR("OBTENER PALABRAS CON nivel = ", CONVERTIR_A_CADENA(nivel))
            )
            RETORNAR MAPEAR_A_LISTA_PALABRA(resultadoConsulta)
        FIN
    FIN MÉTODO


    MÉTODO PÚBLICO guardar(palabra : Palabra) : VACIO
        INICIO
            SI palabra ES NULO ENTONCES
                RETORNAR
            FIN SI
            baseDatos.ejecutarActualizacion("GUARDAR O ACTUALIZAR PALABRA")
        FIN
    FIN MÉTODO

FIN CLASE
```

### 6.3. INTERFAZ IRepositorioUsuario

```
// =============================================================================
// INTERFAZ: IRepositorioUsuario
// Módulo: src/persistence/interfaces/IRepositorioUsuario
// Trazabilidad: sección 9.1, RF-07, RNF-07
// =============================================================================

INTERFAZ IRepositorioUsuario
    MÉTODO PÚBLICO obtenerUsuario() : Usuario
    MÉTODO PÚBLICO guardarUsuario(usuario : Usuario) : VACIO
    MÉTODO PÚBLICO actualizarProgreso(progreso : ProgresoPalabra) : VACIO
FIN INTERFAZ
```

### 6.4. CLASE RepositorioUsuario (implementa IRepositorioUsuario)

```
// =============================================================================
// CLASE: RepositorioUsuario  IMPLEMENTA IRepositorioUsuario
// Módulo: src/persistence/implementations/RepositorioUsuario
// Trazabilidad: sección 9.1, RF-07, RNF-04, RNF-07, RNF-10
// =============================================================================

CLASE RepositorioUsuario IMPLEMENTA IRepositorioUsuario

    ATRIBUTOS
        PRIVADO baseDatos : BaseDatos
    FIN ATRIBUTOS


    MÉTODO PÚBLICO INICIALIZAR(pBaseDatos : BaseDatos) : VACIO
        INICIO
            baseDatos ← pBaseDatos
        FIN
    FIN MÉTODO


    MÉTODO PÚBLICO obtenerUsuario() : Usuario
        INICIO
            resultadoConsulta ← baseDatos.ejecutarConsulta("OBTENER USUARIO ACTUAL")
            RETORNAR MAPEAR_A_USUARIO(resultadoConsulta)
        FIN
    FIN MÉTODO


    MÉTODO PÚBLICO guardarUsuario(usuario : Usuario) : VACIO
        INICIO
            SI usuario ES NULO ENTONCES
                RETORNAR
            FIN SI
            // RNF-07: los datos sensibles se persisten de forma segura
            baseDatos.ejecutarActualizacion("GUARDAR USUARIO DE FORMA SEGURA")
        FIN
    FIN MÉTODO


    MÉTODO PÚBLICO actualizarProgreso(progreso : ProgresoPalabra) : VACIO
        INICIO
            SI progreso ES NULO ENTONCES
                RETORNAR
            FIN SI
            baseDatos.ejecutarActualizacion("ACTUALIZAR PROGRESO_PALABRA")
        FIN
    FIN MÉTODO

FIN CLASE
```

### 6.5. INTERFAZ IRepositorioCategorias

```
// =============================================================================
// INTERFAZ: IRepositorioCategorias
// Módulo: src/persistence/interfaces/IRepositorioCategorias
// Trazabilidad: sección 10 (estructura de archivos). La sección 9.1 no detalla
// métodos; se declaran SOLO los que ServicioVocabulario y CU-06 requieren.
// =============================================================================

INTERFAZ IRepositorioCategorias
    MÉTODO PÚBLICO obtenerTodas() : LISTA<Categoria>
    MÉTODO PÚBLICO obtenerPorId(id : ENTERO) : Categoria
    MÉTODO PÚBLICO guardar(categoria : Categoria) : VACIO
FIN INTERFAZ
```

### 6.6. CLASE RepositorioCategorias (implementa IRepositorioCategorias)

```
CLASE RepositorioCategorias IMPLEMENTA IRepositorioCategorias

    ATRIBUTOS
        PRIVADO baseDatos : BaseDatos
    FIN ATRIBUTOS


    MÉTODO PÚBLICO INICIALIZAR(pBaseDatos : BaseDatos) : VACIO
        INICIO
            baseDatos ← pBaseDatos
        FIN
    FIN MÉTODO


    MÉTODO PÚBLICO obtenerTodas() : LISTA<Categoria>
        INICIO
            resultadoConsulta ← baseDatos.ejecutarConsulta("OBTENER TODAS LAS CATEGORIAS")
            RETORNAR MAPEAR_A_LISTA_CATEGORIA(resultadoConsulta)
        FIN
    FIN MÉTODO


    MÉTODO PÚBLICO obtenerPorId(id : ENTERO) : Categoria
        INICIO
            resultadoConsulta ← baseDatos.ejecutarConsulta(
                CONCATENAR("OBTENER CATEGORIA CON id = ", CONVERTIR_A_CADENA(id))
            )
            RETORNAR MAPEAR_A_CATEGORIA(resultadoConsulta)
        FIN
    FIN MÉTODO


    MÉTODO PÚBLICO guardar(categoria : Categoria) : VACIO
        INICIO
            SI categoria ES NULO ENTONCES
                RETORNAR
            FIN SI
            baseDatos.ejecutarActualizacion("GUARDAR CATEGORIA")
        FIN
    FIN MÉTODO

FIN CLASE
```

### 6.7. INTERFAZ IRepositorioSesiones

```
// =============================================================================
// INTERFAZ: IRepositorioSesiones
// Módulo: src/persistence/interfaces/IRepositorioSesiones
// Trazabilidad: sección 10, RF-10, RF-04.6, RF-07.5
// Métodos limitados a lo que ServicioSesion y el historial requieren.
// =============================================================================

INTERFAZ IRepositorioSesiones
    MÉTODO PÚBLICO guardar(sesion : SesionEstudio) : VACIO
    MÉTODO PÚBLICO obtenerPorUsuario(usuario : Usuario) : LISTA<SesionEstudio>
    MÉTODO PÚBLICO obtenerSesionAbierta(usuario : Usuario, tipo : TipoActividad) : SesionEstudio
FIN INTERFAZ
```

### 6.8. CLASE RepositorioSesiones (implementa IRepositorioSesiones)

```
CLASE RepositorioSesiones IMPLEMENTA IRepositorioSesiones

    ATRIBUTOS
        PRIVADO baseDatos : BaseDatos
    FIN ATRIBUTOS


    MÉTODO PÚBLICO INICIALIZAR(pBaseDatos : BaseDatos) : VACIO
        INICIO
            baseDatos ← pBaseDatos
        FIN
    FIN MÉTODO


    MÉTODO PÚBLICO guardar(sesion : SesionEstudio) : VACIO
        INICIO
            SI sesion ES NULO ENTONCES
                RETORNAR
            FIN SI
            baseDatos.ejecutarActualizacion("GUARDAR O ACTUALIZAR SESION_ESTUDIO")
        FIN
    FIN MÉTODO


    MÉTODO PÚBLICO obtenerPorUsuario(usuario : Usuario) : LISTA<SesionEstudio>
        INICIO
            resultadoConsulta ← baseDatos.ejecutarConsulta("OBTENER SESIONES DEL USUARIO")
            RETORNAR MAPEAR_A_LISTA_SESION(resultadoConsulta)
        FIN
    FIN MÉTODO


    MÉTODO PÚBLICO obtenerSesionAbierta(usuario : Usuario, tipo : TipoActividad) : SesionEstudio
        INICIO
            resultadoConsulta ← baseDatos.ejecutarConsulta(
                "OBTENER SESION CON fechaFin NULO Y tipo DADO"
            )
            RETORNAR MAPEAR_A_SESION(resultadoConsulta)
        FIN
    FIN MÉTODO

FIN CLASE
```

### 6.9. CLASE BaseDatos

```
// =============================================================================
// CLASE: BaseDatos
// Módulo: src/persistence/database/BaseDatos
// Trazabilidad: sección 9.1, RNF-04 (almacenamiento local + sincronización),
//               RNF-07 (almacenamiento seguro / encriptación de sensibles),
//               RNF-10 (no perder datos ante fallos)
// Las cadenas de consulta se expresan en lenguaje natural a propósito:
// no se emite SQL de un motor concreto (restricción: solo pseudocódigo).
// =============================================================================

CLASE BaseDatos

    ATRIBUTOS
        PRIVADO conectada      : BOOLEANO
        PRIVADO configuracion  : ConfiguracionDB
    FIN ATRIBUTOS


    MÉTODO PÚBLICO INICIALIZAR(pConfig : ConfiguracionDB) : VACIO
        INICIO
            configuracion ← pConfig
            conectada     ← FALSO
        FIN
    FIN MÉTODO


    MÉTODO PÚBLICO conectar() : VACIO
        INICIO
            SI conectada ES VERDADERO ENTONCES
                RETORNAR
            FIN SI
            ABRIR_ALMACEN_LOCAL(configuracion)
            conectada ← VERDADERO
        FIN
    FIN MÉTODO


    MÉTODO PÚBLICO ejecutarConsulta(query : CADENA) : CONJUNTO_RESULTADOS
        INICIO
            SI conectada ES FALSO ENTONCES
                conectar()
            FIN SI
            // RNF-07: validar entradas para prevenir inyecciones
            consultaSegura ← Validador.validarConsulta(query)
            RETORNAR EJECUTAR_LECTURA_LOCAL(consultaSegura)
        FIN
    FIN MÉTODO


    MÉTODO PÚBLICO ejecutarActualizacion(query : CADENA) : BOOLEANO
        INICIO
            SI conectada ES FALSO ENTONCES
                conectar()
            FIN SI
            consultaSegura ← Validador.validarConsulta(query)
            exito ← EJECUTAR_ESCRITURA_LOCAL_SEGURA(consultaSegura)
            // RNF-04: si hay conexión, se marca para sincronizar progreso
            SI HAY_CONEXION_DE_RED() ENTONCES
                MARCAR_SINCRONIZACION_PENDIENTE()
            FIN SI
            RETORNAR exito
        FIN
    FIN MÉTODO


    MÉTODO PÚBLICO cerrar() : VACIO
        INICIO
            SI conectada ES VERDADERO ENTONCES
                CERRAR_ALMACEN_LOCAL()
                conectada ← FALSO
            FIN SI
        FIN
    FIN MÉTODO

FIN CLASE
```

### 6.10. CLASE ConfiguracionDB

```
// =============================================================================
// CLASE: ConfiguracionDB
// Módulo: src/persistence/database/ConfiguracionDB
// Trazabilidad: sección 10 (database/ConfiguracionDB y resources/config/
//               database-config.json). La especificación no lista atributos;
//               solo se modela lo imprescindible para BaseDatos.conectar
//               y para RNF-04 / RNF-07 / RNF-08.
// =============================================================================

CLASE ConfiguracionDB

    ATRIBUTOS
        PRIVADO rutaAlmacenLocal : CADENA
        PRIVADO cifradoActivo    : BOOLEANO     // RNF-07
    FIN ATRIBUTOS


    MÉTODO PÚBLICO INICIALIZAR(pRuta : CADENA, pCifrado : BOOLEANO) : VACIO
        INICIO
            rutaAlmacenLocal ← pRuta
            cifradoActivo    ← pCifrado
        FIN
    FIN MÉTODO


    MÉTODO PÚBLICO obtenerRutaAlmacenLocal() : CADENA
        INICIO
            RETORNAR rutaAlmacenLocal
        FIN
    FIN MÉTODO


    MÉTODO PÚBLICO cifradoEstaActivo() : BOOLEANO
        INICIO
            RETORNAR cifradoActivo
        FIN
    FIN MÉTODO

FIN CLASE
```

### 6.11. Modelo lógico de persistencia (sin SQL de un lenguaje)

Las “tablas” siguientes no son código de un SGBD: son el mapeo de los atributos ya declarados en la sección 9.1 y de RF-08 / RF-04.6 / RF-07 / RF-10. No se añaden columnas que no existan como atributo o requisito.

```
ALMACÉN LÓGICO: Palabra                         // RF-08.1 a RF-08.6
    id                  ENTERO
    palabraIngles       CADENA
    traduccion          CADENA
    imagenUrl           CADENA
    audioUrl            CADENA
    ejemploContexto     CADENA
    categoriaId         ENTERO                  // asociación a Categoria
    nivel               Nivel
    fechaCreacion       FECHA

ALMACÉN LÓGICO: Categoria                       // RF-05.1
    id                  ENTERO
    nombre              CADENA
    descripcion         CADENA
    iconoUrl            CADENA

ALMACÉN LÓGICO: Usuario
    id                  ENTERO
    nombre              CADENA
    nivelActual         Nivel
    preferencias        Preferencias            // RF-09.2, RNF-07 si sensible

ALMACÉN LÓGICO: ProgresoPalabra                 // RF-02, RF-07.1
    usuarioId           ENTERO
    palabraId           ENTERO
    nivelDominio        ENTERO                  // 0-5
    vecesRevisada       ENTERO
    ultimaRevision      FECHA
    proximaRevision     FECHA
    intervaloActual     ENTERO                  // días
    aprendida           BOOLEANO

ALMACÉN LÓGICO: Estadisticas                    // RF-07
    usuarioId                  ENTERO
    totalPalabrasAprendidas    ENTERO
    totalPalabrasEnProgreso    ENTERO
    totalPalabrasPendientes    ENTERO
    rachaDias                  ENTERO
    ultimaFechaEstudio         FECHA
    tiempoTotalEstudio         ENTERO           // minutos

ALMACÉN LÓGICO: SesionEstudio                   // RF-10, RF-04.6, RF-07.5
    id                  ENTERO
    usuarioId           ENTERO
    fechaInicio         FECHA
    fechaFin            FECHA
    duracion            ENTERO                  // minutos
    tipoActividad       TipoActividad
    palabrasRevisadas   ENTERO
    palabrasAcertadas   ENTERO
    puntuacion          ENTERO                  // resultado de la actividad
```

Recursos de contenido (sección 10, no son tablas de negocio):

```
resources/data/vocabulary/basico.json
resources/data/vocabulary/intermedio.json
resources/data/vocabulary/avanzado.json
resources/data/categories/categorias.json
resources/audio/{basico|intermedio|avanzado}/
resources/images/vocabulary/{basico|intermedio|avanzado}/
resources/images/icons/
resources/config/app-config.json
resources/config/database-config.json
```

Carga incremental por niveles: RNF-08.

---

## 7. CAPA DE PRESENTACIÓN — Controladores y vistas

Módulo: `src/presentation/`

Las vistas no tienen métodos en la sección 9.1. Se les asignan únicamente operaciones de “mostrar / actualizar” que los casos de uso describen con el verbo del sistema (“Sistema muestra…”, “Sistema actualiza visualización…”).

### 7.1. Vistas

```
// =============================================================================
// CLASE: VistaPrincipal
// Trazabilidad: ControladorPrincipal, RNF-02 (navegación clara, ≤ 3 niveles)
// =============================================================================

CLASE VistaPrincipal
    MÉTODO PÚBLICO mostrarMenuPrincipal() : VACIO
        INICIO
            MOSTRAR opciones:
                "Categorías de estudio"     // CU-06
                "Ver progreso"              // CU-05
                "Configuración"             // RF-09.2 / preferencias
        FIN
    FIN MÉTODO
FIN CLASE


// =============================================================================
// CLASE: VistaCategorias
// Trazabilidad: CU-06, CU-07, HU-05, HU-07, RF-05.3
// =============================================================================

CLASE VistaCategorias
    MÉTODO PÚBLICO mostrarCategoriasConProgreso (
            categorias : LISTA<Categoria>,
            progresos  : LISTA<REAL>
    ) : VACIO
        INICIO
            PARA i DESDE 0 HASTA categorias.longitud() - 1 HACER
                MOSTRAR categorias[i].obtenerNombre()
                MOSTRAR categorias[i].obtenerDescripcion()
                MOSTRAR progresos[i]
            FIN PARA
        FIN
    FIN MÉTODO

    MÉTODO PÚBLICO mostrarNivelesDisponibles() : VACIO
        INICIO
            MOSTRAR BASICO, INTERMEDIO, AVANZADO     // RF-06.1, CU-07 paso 2
        FIN
    FIN MÉTODO

    MÉTODO PÚBLICO mostrarActividadesDisponibles() : VACIO
        INICIO
            MOSTRAR "Estudiar con Flashcards"        // CU-01
            MOSTRAR "Juego Match"                    // CU-02
            MOSTRAR "Realizar Test"                  // CU-03
        FIN
    FIN MÉTODO
FIN CLASE


// =============================================================================
// CLASE: VistaFlashcard
// Trazabilidad: HU-01, CU-01, RF-01, RNF-02 (feedback visual inmediato)
// =============================================================================

CLASE VistaFlashcard

    MÉTODO PÚBLICO mostrarCaraFrontal(palabra : Palabra) : VACIO
        INICIO
            MOSTRAR palabra.obtenerPalabraIngles()          // RF-01.1
            MOSTRAR control de voltear
            MOSTRAR control de audio                        // RF-01.3
        FIN
    FIN MÉTODO

    MÉTODO PÚBLICO mostrarCaraPosterior(palabra : Palabra) : VACIO
        INICIO
            MOSTRAR palabra.obtenerTraduccion()             // RF-01.2
            MOSTRAR imagen de palabra.obtenerImagen()
            MOSTRAR palabra.obtenerEjemplo()
            MOSTRAR control “Sé”
            MOSTRAR control “Revisar”                       // RF-01.4
        FIN
    FIN MÉTODO

    MÉTODO PÚBLICO mostrarResumenSesion(resultados : Resultados) : VACIO
        INICIO
            MOSTRAR resultados.generarResumen()             // CU-01 FA1
        FIN
    FIN MÉTODO
FIN CLASE


// =============================================================================
// CLASE: VistaMatch
// Trazabilidad: HU-02, CU-02, RF-03, RNF-02
// =============================================================================

CLASE VistaMatch

    MÉTODO PÚBLICO mostrarElementosDesordenados(pares : LISTA<ParMatch>) : VACIO
        INICIO
            elementos ← REUNIR_TODOS_LOS_ELEMENTOS(pares)
            elementos ← GeneradorAleatorio.desordenar(elementos)
            MOSTRAR elementos                               // CU-02 paso 4
        FIN
    FIN MÉTODO

    MÉTODO PÚBLICO marcarParCorrecto(elem1 : Elemento, elem2 : Elemento) : VACIO
        INICIO
            OCULTAR elem1
            OCULTAR elem2                                   // CU-02 paso 8
            RETROALIMENTACION_VISUAL_INMEDIATA("correcto")  // RNF-02, RF-03.3
        FIN
    FIN MÉTODO

    MÉTODO PÚBLICO deseleccionarParIncorrecto(elem1 : Elemento, elem2 : Elemento) : VACIO
        INICIO
            DESELECCIONAR elem1
            DESELECCIONAR elem2                             // CU-02 paso 9
            RETROALIMENTACION_VISUAL_INMEDIATA("incorrecto")
        FIN
    FIN MÉTODO

    MÉTODO PÚBLICO mostrarPuntuacionFinal(resultados : Resultados) : VACIO
        INICIO
            MOSTRAR resultados.obtenerPuntuacion()
            MOSTRAR resultados.obtenerTiempo()              // CU-02 paso 11, RF-03.5
        FIN
    FIN MÉTODO
FIN CLASE


// =============================================================================
// CLASE: VistaTest
// Trazabilidad: HU-03, CU-03, RF-04
// =============================================================================

CLASE VistaTest

    MÉTODO PÚBLICO mostrarPregunta(pregunta : Pregunta) : VACIO
        INICIO
            MOSTRAR pregunta.obtenerEnunciado()
            MOSTRAR pregunta.obtenerOpciones()              // RF-04.2
        FIN
    FIN MÉTODO

    MÉTODO PÚBLICO mostrarResultadosDetallados (
            resultados : Resultados,
            respuestas : LISTA<RespuestaTest>
    ) : VACIO
        INICIO
            MOSTRAR resultados.generarResumen()             // RF-04.5
            PARA CADA r EN respuestas HACER
                MOSTRAR r.obtenerPregunta().obtenerEnunciado()
                MOSTRAR r.obtenerRespuestaUsuario()
                MOSTRAR r.fueCorrecta()
                SI r.fueCorrecta() ES FALSO ENTONCES
                    MOSTRAR r.obtenerPregunta().obtenerRespuestaCorrecta()
                FIN SI
            FIN PARA
        FIN
    FIN MÉTODO
FIN CLASE


// =============================================================================
// CLASE: VistaProgreso
// Trazabilidad: HU-06, CU-05, RF-07
// =============================================================================

CLASE VistaProgreso

    MÉTODO PÚBLICO mostrarEstadisticas(estadisticas : Estadisticas) : VACIO
        INICIO
            MOSTRAR estadisticas.obtenerPalabrasAprendidas()     // RF-07.1
            MOSTRAR estadisticas.obtenerPalabrasEnProgreso()
            MOSTRAR estadisticas.obtenerPalabrasPendientes()
            MOSTRAR estadisticas.obtenerRachaDias()              // RF-07.2
        FIN
    FIN MÉTODO

    MÉTODO PÚBLICO mostrarGraficos(estadisticas : Estadisticas) : VACIO
        INICIO
            MOSTRAR GRAFICO_TEMPORAL(estadisticas.obtenerHistorialSesiones())
            // RF-07.3: gráficos de progreso temporal
        FIN
    FIN MÉTODO

    MÉTODO PÚBLICO actualizarSegunFiltros (
            estadisticas : Estadisticas,
            categoria    : Categoria,
            nivel        : Nivel
    ) : VACIO
        INICIO
            MOSTRAR estadisticas filtradas                      // CU-05 pasos 6-7
        FIN
    FIN MÉTODO
FIN CLASE
```

### 7.2. CLASE ControladorPrincipal

```
// =============================================================================
// CLASE: ControladorPrincipal
// Módulo: src/presentation/controllers/ControladorPrincipal
// Trazabilidad: sección 9.1, RNF-02
// =============================================================================

CLASE ControladorPrincipal

    ATRIBUTOS
        PRIVADO vista                   : VistaPrincipal
        PRIVADO controladorCategorias   : ControladorCategorias
        PRIVADO controladorProgreso     : ControladorProgreso
        PRIVADO usuarioActual           : Usuario
    FIN ATRIBUTOS


    MÉTODO PÚBLICO mostrarMenuPrincipal() : VACIO
        INICIO
            vista.mostrarMenuPrincipal()
        FIN
    FIN MÉTODO


    MÉTODO PÚBLICO navegarACategorias() : VACIO
        INICIO
            controladorCategorias.mostrarListaCategorias(usuarioActual)
        FIN
    FIN MÉTODO


    MÉTODO PÚBLICO navegarAProgreso() : VACIO
        INICIO
            controladorProgreso.mostrarEstadisticas(usuarioActual)
        FIN
    FIN MÉTODO


    MÉTODO PÚBLICO navegarAConfiguracion() : VACIO
        INICIO
            // RF-09.2: el usuario configura horarios preferidos
            // RNF-09: el usuario ajusta tamaño de fuente
            MOSTRAR_PANTALLA_PREFERENCIAS(usuarioActual.obtenerPreferencias())
        FIN
    FIN MÉTODO

FIN CLASE
```

### 7.3. CLASE ControladorCategorias

```
// =============================================================================
// CLASE: ControladorCategorias
// Módulo: src/presentation/controllers/ControladorCategorias
// Trazabilidad: sección 10 (archivo listado), CU-06, CU-07, RF-05, RF-06
// =============================================================================

CLASE ControladorCategorias

    ATRIBUTOS
        PRIVADO vista                 : VistaCategorias
        PRIVADO servicioVocabulario   : ServicioVocabulario
        PRIVADO servicioProgreso      : ServicioProgreso
        PRIVADO controladorFlashcards : ControladorFlashcards
        PRIVADO controladorMatch      : ControladorMatch
        PRIVADO controladorTest       : ControladorTest
        PRIVADO categoriaActual       : Categoria
        PRIVADO nivelActual           : Nivel
    FIN ATRIBUTOS


    MÉTODO PÚBLICO mostrarListaCategorias(usuario : Usuario) : VACIO
        INICIO
            categorias ← servicioVocabulario.obtenerTodasCategorias()
            progresos  ← LISTA_VACIA<REAL>()
            PARA CADA categoria EN categorias HACER
                progresos.agregar(
                    servicioProgreso.calcularProgresoPorCategoria(usuario, categoria)
                )
            FIN PARA
            vista.mostrarCategoriasConProgreso(categorias, progresos)
        FIN
    FIN MÉTODO


    // Trazabilidad: CU-06
    MÉTODO PÚBLICO seleccionarCategoria(categoria : Categoria, usuario : Usuario) : VACIO
        INICIO
            categoriaActual ← categoria
            vista.mostrarActividadesDisponibles()
        FIN
    FIN MÉTODO


    // Trazabilidad: CU-07
    MÉTODO PÚBLICO seleccionarNivel(nivel : Nivel, usuario : Usuario) : VACIO
        INICIO
            nivelActual ← nivel
            usuario.establecerNivelActual(nivel)
            vista.mostrarListaCategorias se refresca con contenido filtrado
        FIN
    FIN MÉTODO


    MÉTODO PÚBLICO iniciarActividadSeleccionada (
            tipo    : TipoActividad,
            tipoM   : TipoMatch,
            usuario : Usuario
    ) : VACIO
        INICIO
            SI categoriaActual ES NULO ENTONCES
                RETORNAR
            FIN SI

            SI nivelActual ES NULO ENTONCES
                palabras ← servicioVocabulario.obtenerPalabrasPorCategoria(categoriaActual)
            SINO
                palabras ← servicioVocabulario.obtenerPalabrasPorCategoriaYNivel(
                    categoriaActual, nivelActual
                )
            FIN SI

            SEGUN tipo HACER
                CASO FLASHCARD:
                    controladorFlashcards.iniciarActividad(palabras)
                CASO MATCH:
                    controladorMatch.iniciarJuego(palabras, tipoM)
                CASO TEST:
                    controladorTest.iniciarTest(palabras)
                CASO REPASO:
                    palabrasRepaso ← servicioProgreso.obtenerPalabrasParaRepasar(usuario)
                    controladorFlashcards.iniciarActividad(palabrasRepaso)
            FIN SEGUN
        FIN
    FIN MÉTODO

FIN CLASE
```

### 7.4. CLASE ControladorFlashcards

```
// =============================================================================
// CLASE: ControladorFlashcards
// Módulo: src/presentation/controllers/ControladorFlashcards
// Trazabilidad: HU-01, CU-01, RF-01, sección 9.1
// =============================================================================

CLASE ControladorFlashcards

    ATRIBUTOS
        PRIVADO actividad        : ActividadFlashcard
        PRIVADO vista            : VistaFlashcard
        PRIVADO servicioActividades : ServicioActividades
        PRIVADO servicioSesion   : ServicioSesion
        PRIVADO usuarioActual    : Usuario
        PRIVADO sesionActual     : SesionEstudio
    FIN ATRIBUTOS


    MÉTODO PÚBLICO iniciarActividad(palabras : LISTA<Palabra>) : VACIO
        INICIO
            sesionActual ← servicioSesion.iniciarSesion(usuarioActual, FLASHCARD)
            actividad    ← servicioActividades.crearActividadFlashcard(palabras)
            actividad.iniciar()
            flashcard ← actividad.obtenerFlashcardActual()
            SI flashcard ES NULO ENTONCES
                finalizarActividad()
            SINO
                vista.mostrarCaraFrontal(flashcard.obtenerPalabra())
            FIN SI
        FIN
    FIN MÉTODO


    MÉTODO PÚBLICO mostrarSiguiente() : VACIO
        INICIO
            SI actividad.estaFinalizada() ENTONCES
                finalizarActividad()
                RETORNAR
            FIN SI

            // Si la cara visible es frontal y el usuario voltea, no avanza aún
            flashcard ← actividad.obtenerFlashcardActual()
            SI flashcard NO ES NULO Y flashcard.obtenerCaraVisible() = FRONTAL ENTONCES
                actividad.voltearFlashcard()
                vista.mostrarCaraPosterior(flashcard.obtenerPalabra())
            SINO
                siguiente ← actividad.mostrarSiguienteFlashcard()
                SI siguiente ES NULO ENTONCES
                    finalizarActividad()
                SINO
                    vista.mostrarCaraFrontal(siguiente.obtenerPalabra())
                FIN SI
            FIN SI
        FIN
    FIN MÉTODO


    MÉTODO PÚBLICO procesarRespuesta(conoce : BOOLEANO) : VACIO
        INICIO
            actividad.registrarRespuesta(conoce)
            SI sesionActual NO ES NULO ENTONCES
                sesionActual.registrarRevision(conoce)
                servicioSesion.guardarSesion(sesionActual)     // RNF-10, RF-10.4
            FIN SI
            // Avanza a la siguiente tarjeta (CU-01 paso 9)
            siguiente ← actividad.mostrarSiguienteFlashcard()
            SI siguiente ES NULO ENTONCES
                finalizarActividad()
            SINO
                vista.mostrarCaraFrontal(siguiente.obtenerPalabra())
            FIN SI
        FIN
    FIN MÉTODO


    MÉTODO PÚBLICO finalizarActividad() : VACIO
        INICIO
            SI actividad NO ES NULO ENTONCES
                actividad.finalizar()
                servicioActividades.guardarResultados(actividad, usuarioActual)
                vista.mostrarResumenSesion(actividad.obtenerResultados())
            FIN SI
            SI sesionActual NO ES NULO ENTONCES
                servicioSesion.finalizarSesion(sesionActual)
                usuarioActual.obtenerEstadisticas().registrarSesion(sesionActual)
            FIN SI
        FIN
    FIN MÉTODO


    // Operación de CU-01 paso 6 (audio opcional)
    MÉTODO PÚBLICO reproducirPronunciacion() : VACIO
        INICIO
            flashcard ← actividad.obtenerFlashcardActual()
            SI flashcard NO ES NULO ENTONCES
                flashcard.obtenerPalabra().reproducirAudio()
            FIN SI
        FIN
    FIN MÉTODO

FIN CLASE
```

### 7.5. CLASE ControladorMatch

```
// =============================================================================
// CLASE: ControladorMatch
// Módulo: src/presentation/controllers/ControladorMatch
// Trazabilidad: HU-02, CU-02, RF-03, sección 9.1
// =============================================================================

CLASE ControladorMatch

    ATRIBUTOS
        PRIVADO actividad           : ActividadMatch
        PRIVADO vista               : VistaMatch
        PRIVADO servicioActividades : ServicioActividades
        PRIVADO servicioSesion      : ServicioSesion
        PRIVADO usuarioActual       : Usuario
        PRIVADO sesionActual        : SesionEstudio
    FIN ATRIBUTOS


    MÉTODO PÚBLICO iniciarJuego(palabras : LISTA<Palabra>, tipo : TipoMatch) : VACIO
        INICIO
            sesionActual ← servicioSesion.iniciarSesion(usuarioActual, MATCH)
            actividad    ← servicioActividades.crearActividadMatch(palabras, tipo)
            actividad.iniciar()
            vista.mostrarElementosDesordenados(actividad.obtenerPares())
        FIN
    FIN MÉTODO


    MÉTODO PÚBLICO procesarSeleccion(elem1 : Elemento, elem2 : Elemento) : VACIO
        INICIO
            correcto ← actividad.validarSeleccion(elem1, elem2)
            SI correcto ES VERDADERO ENTONCES
                vista.marcarParCorrecto(elem1, elem2)
                SI sesionActual NO ES NULO ENTONCES
                    sesionActual.registrarRevision(VERDADERO)
                FIN SI
            SINO
                vista.deseleccionarParIncorrecto(elem1, elem2)
                SI sesionActual NO ES NULO ENTONCES
                    sesionActual.registrarRevision(FALSO)
                FIN SI
            FIN SI
            servicioSesion.guardarSesion(sesionActual)         // RNF-10

            SI actividad.estaFinalizada() ENTONCES
                finalizarJuego()
            FIN SI
        FIN
    FIN MÉTODO


    MÉTODO PÚBLICO finalizarJuego() : VACIO
        INICIO
            SI actividad NO ES NULO ENTONCES
                actividad.finalizar()
                servicioActividades.guardarResultados(actividad, usuarioActual)
                vista.mostrarPuntuacionFinal(actividad.obtenerResultados())
            FIN SI
            SI sesionActual NO ES NULO ENTONCES
                servicioSesion.finalizarSesion(sesionActual)
                usuarioActual.obtenerEstadisticas().registrarSesion(sesionActual)
            FIN SI
        FIN
    FIN MÉTODO

FIN CLASE
```

### 7.6. CLASE ControladorTest

```
// =============================================================================
// CLASE: ControladorTest
// Módulo: src/presentation/controllers/ControladorTest
// Trazabilidad: HU-03, CU-03, RF-04, sección 9.1
// =============================================================================

CLASE ControladorTest

    ATRIBUTOS
        PRIVADO actividad           : ActividadTest
        PRIVADO vista               : VistaTest
        PRIVADO servicioActividades : ServicioActividades
        PRIVADO servicioSesion      : ServicioSesion
        PRIVADO usuarioActual       : Usuario
        PRIVADO sesionActual        : SesionEstudio
    FIN ATRIBUTOS


    MÉTODO PÚBLICO iniciarTest(palabras : LISTA<Palabra>) : VACIO
        INICIO
            sesionActual ← servicioSesion.iniciarSesion(usuarioActual, TEST)
            // El número de preguntas no está fijado en la especificación;
            // se entrega el tamaño del conjunto disponible (RF-04.1 aleatorio
            // sobre el vocabulario de la categoría/nivel).
            actividad ← servicioActividades.crearActividadTest(palabras, palabras.longitud())
            actividad.iniciar()
            pregunta ← actividad.obtenerPreguntaEnCurso()
            SI pregunta ES NULO ENTONCES
                finalizarTest()
            SINO
                vista.mostrarPregunta(pregunta)
            FIN SI
        FIN
    FIN MÉTODO


    MÉTODO PÚBLICO procesarRespuesta(respuesta : CADENA) : VACIO
        INICIO
            actividad.registrarRespuesta(respuesta)
            SI sesionActual NO ES NULO ENTONCES
                pregunta ← actividad.obtenerPreguntaEnCurso()
                acierto ← FALSO
                SI pregunta NO ES NULO ENTONCES
                    acierto ← pregunta.validarRespuesta(respuesta)
                FIN SI
                sesionActual.registrarRevision(acierto)
                servicioSesion.guardarSesion(sesionActual)
            FIN SI

            siguiente ← actividad.mostrarSiguientePregunta()
            SI siguiente ES NULO ENTONCES
                finalizarTest()
            SINO
                vista.mostrarPregunta(siguiente)
            FIN SI
        FIN
    FIN MÉTODO


    MÉTODO PÚBLICO finalizarTest() : VACIO
        INICIO
            SI actividad NO ES NULO ENTONCES
                actividad.finalizar()
                servicioActividades.guardarResultados(actividad, usuarioActual)
                vista.mostrarResultadosDetallados(
                    actividad.obtenerResultados(),
                    actividad.obtenerRespuestasUsuario()
                )
            FIN SI
            SI sesionActual NO ES NULO ENTONCES
                servicioSesion.finalizarSesion(sesionActual)
                usuarioActual.obtenerEstadisticas().registrarSesion(sesionActual)
            FIN SI
        FIN
    FIN MÉTODO

FIN CLASE
```

### 7.7. CLASE ControladorProgreso

```
// =============================================================================
// CLASE: ControladorProgreso
// Módulo: src/presentation/controllers/ControladorProgreso
// Trazabilidad: HU-06, CU-05, RF-07, sección 9.1
// =============================================================================

CLASE ControladorProgreso

    ATRIBUTOS
        PRIVADO vista            : VistaProgreso
        PRIVADO servicioProgreso : ServicioProgreso
        PRIVADO usuarioActual    : Usuario
        PRIVADO categoriaFiltro  : Categoria
    FIN ATRIBUTOS


    MÉTODO PÚBLICO mostrarEstadisticas(usuario : Usuario) : VACIO
        INICIO
            usuarioActual ← usuario
            estadisticas  ← servicioProgreso.obtenerEstadisticas(usuario)
            vista.mostrarEstadisticas(estadisticas)
            generarGraficos()
        FIN
    FIN MÉTODO


    MÉTODO PÚBLICO filtrarPorCategoria(categoria : Categoria) : VACIO
        INICIO
            categoriaFiltro ← categoria
            SI usuarioActual ES NULO ENTONCES
                RETORNAR
            FIN SI
            estadisticas ← servicioProgreso.obtenerEstadisticas(usuarioActual)
            vista.actualizarSegunFiltros(
                estadisticas,
                categoria,
                usuarioActual.obtenerNivelActual()
            )
        FIN
    FIN MÉTODO


    MÉTODO PÚBLICO generarGraficos() : VACIO
        INICIO
            SI usuarioActual ES NULO ENTONCES
                RETORNAR
            FIN SI
            estadisticas ← servicioProgreso.obtenerEstadisticas(usuarioActual)
            vista.mostrarGraficos(estadisticas)
        FIN
    FIN MÉTODO

FIN CLASE
```

---

## 8. UTILIDADES

Módulo: `src/utils/`

La sección 10 lista cuatro utilidades y describe su responsabilidad en un comentario. No se les inventan APIs ajenas a esa responsabilidad ni a los RNF que las invocan.

```
// =============================================================================
// CLASE: Validador
// Comentario de la especificación: “Validación de datos”
// Trazabilidad: RNF-07 (validación de entradas para prevenir inyecciones)
// =============================================================================

CLASE Validador

    MÉTODO PÚBLICO DE_CLASE validarConsulta(query : CADENA) : CADENA
        INICIO
            SI query ES NULO ENTONCES
                RETORNAR CADENA_VACIA
            FIN SI
            // Se rechazan construcciones de inyección; no se ejecuta la original
            SI CONTIENE_PATRON_DE_INYECCION(query) ENTONCES
                RETORNAR CADENA_VACIA
            FIN SI
            RETORNAR query
        FIN
    FIN MÉTODO


    MÉTODO PÚBLICO DE_CLASE validarTextoEntrada(texto : CADENA) : BOOLEANO
        INICIO
            SI texto ES NULO ENTONCES
                RETORNAR FALSO
            FIN SI
            RETORNAR NO CONTIENE_PATRON_DE_INYECCION(texto)
        FIN
    FIN MÉTODO

FIN CLASE


// =============================================================================
// CLASE: GeneradorAleatorio
// Comentario de la especificación: “Generación de elementos aleatorios”
// Trazabilidad: RF-03.1, RF-04.1, CU-02, CU-03
// =============================================================================

CLASE GeneradorAleatorio

    MÉTODO PÚBLICO DE_CLASE desordenar(lista : LISTA) : LISTA
        INICIO
            copia ← COPIA(lista)
            MEZCLAR_ALEATORIAMENTE(copia)
            RETORNAR copia
        FIN
    FIN MÉTODO

FIN CLASE


// =============================================================================
// CLASE: ReproductorAudio
// Comentario de la especificación: “Reproducción de audio”
// Trazabilidad: RF-01.3, RF-08.4, RNF-03 (sin delay perceptible),
//               RNF-08 (formato MP3 o AAC)
// =============================================================================

CLASE ReproductorAudio

    MÉTODO PÚBLICO DE_CLASE reproducir(audioUrl : CADENA) : VACIO
        INICIO
            SI audioUrl ES NULO O audioUrl ES VACIA ENTONCES
                RETORNAR
            FIN SI
            REPRODUCIR_SIN_DELAY_PERCEPTIBLE(audioUrl)
        FIN
    FIN MÉTODO

FIN CLASE


// =============================================================================
// CLASE: CargadorImagenes
// Comentario de la especificación: “Carga y caché de imágenes”
// Trazabilidad: RF-01.2, RF-08.3, RNF-03 (< 1 segundo), RNF-08 (compresión)
// =============================================================================

CLASE CargadorImagenes

    ATRIBUTOS
        PRIVADO DE_CLASE cache : MAPA<CADENA, IMAGEN>
    FIN ATRIBUTOS


    MÉTODO PÚBLICO DE_CLASE cargar(imagenUrl : CADENA) : IMAGEN
        INICIO
            SI cache.contiene(imagenUrl) ENTONCES
                RETORNAR cache.obtener(imagenUrl)
            FIN SI
            imagen ← CARGAR_OPTIMIZADA(imagenUrl)     // RNF-03, RNF-08
            cache.guardar(imagenUrl, imagen)
            RETORNAR imagen
        FIN
    FIN MÉTODO

FIN CLASE
```

---

## 9. PUNTO DE ENTRADA

Módulo: `src/Main`

```
// =============================================================================
// MÓDULO: Main
// Trazabilidad: sección 10 (Main, punto de entrada), RNF-01, RNF-03, RNF-04
// Orquesta el arranque. No añade funcionalidad de negocio.
// =============================================================================

ALGORITMO Main
INICIO
    // 1. Cargar configuración (resources/config/app-config.json y database-config.json)
    configuracionDB ← NUEVO ConfiguracionDB()
    configuracionDB.INICIALIZAR(RUTA_ALMACEN_LOCAL, CIFRADO_ACTIVO ← VERDADERO)

    // 2. Conectar persistencia local (RNF-04, RNF-07)
    baseDatos ← NUEVO BaseDatos()
    baseDatos.INICIALIZAR(configuracionDB)
    baseDatos.conectar()

    // 3. Componer repositorios (capa de persistencia)
    repoPalabras   ← NUEVO RepositorioPalabras()
    repoPalabras.INICIALIZAR(baseDatos)
    repoUsuario    ← NUEVO RepositorioUsuario()
    repoUsuario.INICIALIZAR(baseDatos)
    repoCategorias ← NUEVO RepositorioCategorias()
    repoCategorias.INICIALIZAR(baseDatos)
    repoSesiones   ← NUEVO RepositorioSesiones()
    repoSesiones.INICIALIZAR(baseDatos)

    // 4. Componer dominio y servicios
    algoritmo          ← NUEVO AlgoritmoRepeticionEspaciada()
    algoritmo.INICIALIZAR()

    servicioProgreso   ← NUEVO ServicioProgreso()
    servicioProgreso.INICIALIZAR(algoritmo, repoUsuario, repoPalabras)

    servicioVocabulario ← NUEVO ServicioVocabulario()
    servicioVocabulario.INICIALIZAR(repoPalabras, repoCategorias)

    servicioSesion     ← NUEVO ServicioSesion()
    servicioSesion.INICIALIZAR(repoSesiones)

    servicioActividades ← NUEVO ServicioActividades()
    servicioActividades.INICIALIZAR(servicioProgreso, servicioSesion)

    servicioNotificaciones ← NUEVO ServicioNotificaciones()
    servicioNotificaciones.INICIALIZAR(servicioProgreso)

    // 5. Recuperar usuario y verificar repasos (CU-04, RF-09)
    usuario ← repoUsuario.obtenerUsuario()
    servicioNotificaciones.verificarRepasosPendientes(usuario)

    // 6. Mostrar menú principal (RNF-02, RNF-03 carga inicial < 3 s)
    controladorPrincipal ← NUEVO ControladorPrincipal()
    controladorPrincipal.mostrarMenuPrincipal()
FIN
```

---

## 10. FLUJOS ORQUESTADOS (casos de uso en pseudocódigo)

Los flujos siguientes no crean clases nuevas: ensamblan métodos ya definidos, en el orden de la sección 6 de la especificación.

### 10.1. CU-01 — Estudiar con Flashcards

```
ALGORITMO CU01_EstudiarConFlashcards
    // Precondiciones: categoría o nivel seleccionado; vocabulario disponible
INICIO
    ControladorCategorias.iniciarActividadSeleccionada(FLASHCARD, NULO, usuario)
        → ControladorFlashcards.iniciarActividad(palabras)
            → ServicioSesion.iniciarSesion(usuario, FLASHCARD)
            → ServicioActividades.crearActividadFlashcard(palabras)
            → ActividadFlashcard.iniciar()
            → VistaFlashcard.mostrarCaraFrontal(palabra)          // paso 2

    // paso 3: el estudiante intenta recordar (acción humana, sin sistema)

    ControladorFlashcards.mostrarSiguiente()                      // paso 4 (voltear)
        → ActividadFlashcard.voltearFlashcard()
        → VistaFlashcard.mostrarCaraPosterior(palabra)            // paso 5

    // paso 6 (opcional)
    ControladorFlashcards.reproducirPronunciacion()
        → Palabra.reproducirAudio()

    ControladorFlashcards.procesarRespuesta(conoce)               // paso 7
        → ActividadFlashcard.registrarRespuesta(conoce)
        → ServicioSesion.guardarSesion(sesion)                    // RNF-10
        → ActividadFlashcard.mostrarSiguienteFlashcard()          // paso 9

    // Repetir hasta agotar la lista o hasta salida del estudiante (FA2)
    // FA1:
    ControladorFlashcards.finalizarActividad()
        → ServicioActividades.guardarResultados(...)              // ajusta SRS
        → VistaFlashcard.mostrarResumenSesion(...)
        → ServicioSesion.finalizarSesion(sesion)
FIN
```

### 10.2. CU-02 — Jugar Match

```
ALGORITMO CU02_JugarMatch
INICIO
    ControladorCategorias.iniciarActividadSeleccionada(MATCH, tipoMatch, usuario)
        → ControladorMatch.iniciarJuego(palabras, tipoMatch)
            → ActividadMatch.iniciar()
            → ActividadMatch.generarPares()                       // pasos 2-4
            → VistaMatch.mostrarElementosDesordenados(pares)

    REPETIR
        ControladorMatch.procesarSeleccion(elem1, elem2)          // pasos 5-9
            → ActividadMatch.validarSeleccion(elem1, elem2)
            SI correcto ENTONCES VistaMatch.marcarParCorrecto(...)
            SINO VistaMatch.deseleccionarParIncorrecto(...)
    HASTA QUE ActividadMatch.estaFinalizada()                     // paso 10

    ControladorMatch.finalizarJuego()                             // paso 11
        → VistaMatch.mostrarPuntuacionFinal(...)
FIN
```

### 10.3. CU-03 — Realizar Test

```
ALGORITMO CU03_RealizarTest
INICIO
    ControladorCategorias.iniciarActividadSeleccionada(TEST, NULO, usuario)
        → ControladorTest.iniciarTest(palabras)
            → ActividadTest.iniciar()
            → ActividadTest.generarPreguntas()                    // pasos 2-3
            → VistaTest.mostrarPregunta(pregunta)

    REPETIR
        ControladorTest.procesarRespuesta(opcion)                 // pasos 4-6
            → ActividadTest.registrarRespuesta(opcion)
            → ActividadTest.validarRespuesta(opcion)
            → ActividadTest.mostrarSiguientePregunta()
    HASTA QUE no haya más preguntas                               // paso 7

    ControladorTest.finalizarTest()                               // pasos 8-10
        → ActividadTest.calcularPuntuacion()                      // porcentaje
        → VistaTest.mostrarResultadosDetallados(...)              // correctas/incorrectas
        → ServicioActividades.guardarResultados(...)              // historial
FIN
```

### 10.4. CU-04 — Programar Sesión de Repaso

```
ALGORITMO CU04_ProgramarSesionDeRepaso
    // Actor principal: Sistema. Actor secundario: Estudiante
INICIO
    // paso 1
    palabras ← ServicioProgreso.obtenerPalabrasParaRepasar(usuario)
        → AlgoritmoRepeticionEspaciada.obtenerPalabrasParaRepasar(usuario)

    // paso 2
    cantidad ← ServicioNotificaciones.verificarRepasosPendientes(usuario)
        → ServicioNotificaciones.enviarNotificacion(...)

    // pasos 3-5 (el estudiante inicia el repaso)
    ControladorCategorias.iniciarActividadSeleccionada(REPASO, NULO, usuario)
        → ControladorFlashcards.iniciarActividad(palabras)
        // prioridad ya aplicada por el algoritmo (menor dominio primero)

    // paso 6-7
    POR CADA respuesta:
        ServicioProgreso.actualizarProgresoPalabra(usuario, palabra, correcta)
            → ProgresoPalabra.actualizarDominio(correcta)
            → AlgoritmoRepeticionEspaciada.calcularProximoIntervalo(...)
FIN
```

### 10.5. CU-05 — Consultar Progreso

```
ALGORITMO CU05_ConsultarProgreso
INICIO
    ControladorPrincipal.navegarAProgreso()
        → ControladorProgreso.mostrarEstadisticas(usuario)
            → ServicioProgreso.obtenerEstadisticas(usuario)
            → VistaProgreso.mostrarEstadisticas(...)              // RF-07.1, RF-07.2
            → ControladorProgreso.generarGraficos()               // RF-07.3

    // paso 6-7 (opcional)
    ControladorProgreso.filtrarPorCategoria(categoria)
        → VistaProgreso.actualizarSegunFiltros(...)
FIN
```

### 10.6. CU-06 — Seleccionar Categoría de Estudio

```
ALGORITMO CU06_SeleccionarCategoria
INICIO
    ControladorPrincipal.navegarACategorias()
        → ControladorCategorias.mostrarListaCategorias(usuario)
            → ServicioVocabulario.obtenerTodasCategorias()
            → ServicioProgreso.calcularProgresoPorCategoria(...)  // RF-05.3
            → VistaCategorias.mostrarCategoriasConProgreso(...)

    ControladorCategorias.seleccionarCategoria(categoria, usuario)
        → VistaCategorias.mostrarActividadesDisponibles()

    ControladorCategorias.iniciarActividadSeleccionada(tipo, tipoMatch, usuario)
        → ServicioVocabulario.obtenerPalabrasPorCategoria(categoria)
        → inicia flashcards / match / test con vocabulario filtrado
FIN
```

### 10.7. CU-07 — Gestionar Niveles de Dificultad

```
ALGORITMO CU07_GestionarNiveles
INICIO
    VistaCategorias.mostrarNivelesDisponibles()                   // BASICO, INTERMEDIO, AVANZADO
    ControladorCategorias.seleccionarNivel(nivel, usuario)
        → Usuario.establecerNivelActual(nivel)
        → el contenido posterior se filtra con
          ServicioVocabulario.obtenerPalabrasPorCategoriaYNivel(...)
FIN
```

---

## 11. CORRESPONDENCIA MÓDULO ↔ ARCHIVO (sección 10)

Se respeta la estructura de carpetas de la especificación. Los nombres de archivo de la especificación se citan como referencia de ubicación, no como código de un lenguaje.

| Ubicación especificada | Componente de este pseudocódigo |
|---|---|
| `src/domain/entities/Palabra` | CLASE Palabra |
| `src/domain/entities/Categoria` | CLASE Categoria |
| `src/domain/entities/Usuario` | CLASE Usuario |
| `src/domain/entities/ProgresoPalabra` | CLASE ProgresoPalabra |
| `src/domain/entities/Estadisticas` | CLASE Estadisticas |
| `src/domain/entities/SesionEstudio` | CLASE SesionEstudio |
| `src/domain/entities/Pregunta` | CLASE Pregunta |
| `src/domain/entities/Resultados` | CLASE Resultados |
| `src/domain/entities/Preferencias` | CLASE Preferencias |
| `src/domain/enums/Nivel` | ENUMERACIÓN Nivel |
| `src/domain/enums/TipoActividad` | ENUMERACIÓN TipoActividad |
| `src/domain/enums/TipoMatch` | ENUMERACIÓN TipoMatch |
| `src/domain/activities/Actividad` | CLASE ABSTRACTA Actividad |
| `src/domain/activities/ActividadFlashcard` | CLASE ActividadFlashcard |
| `src/domain/activities/ActividadMatch` | CLASE ActividadMatch |
| `src/domain/activities/ActividadTest` | CLASE ActividadTest |
| `src/domain/activities/Flashcard` | CLASE Flashcard |
| `src/domain/activities/ParMatch` | CLASE ParMatch |
| `src/domain/activities/RespuestaFlashcard` | CLASE RespuestaFlashcard |
| `src/domain/activities/RespuestaTest` | CLASE RespuestaTest |
| `src/domain/algorithms/AlgoritmoRepeticionEspaciada` | CLASE AlgoritmoRepeticionEspaciada |
| `src/services/ServicioVocabulario` | CLASE ServicioVocabulario |
| `src/services/ServicioActividades` | CLASE ServicioActividades |
| `src/services/ServicioProgreso` | CLASE ServicioProgreso |
| `src/services/ServicioNotificaciones` | CLASE ServicioNotificaciones |
| `src/services/ServicioSesion` | CLASE ServicioSesion |
| `src/persistence/interfaces/IRepositorioPalabras` | INTERFAZ IRepositorioPalabras |
| `src/persistence/interfaces/IRepositorioUsuario` | INTERFAZ IRepositorioUsuario |
| `src/persistence/interfaces/IRepositorioCategorias` | INTERFAZ IRepositorioCategorias |
| `src/persistence/interfaces/IRepositorioSesiones` | INTERFAZ IRepositorioSesiones |
| `src/persistence/implementations/RepositorioPalabras` | CLASE RepositorioPalabras |
| `src/persistence/implementations/RepositorioUsuario` | CLASE RepositorioUsuario |
| `src/persistence/implementations/RepositorioCategorias` | CLASE RepositorioCategorias |
| `src/persistence/implementations/RepositorioSesiones` | CLASE RepositorioSesiones |
| `src/persistence/database/BaseDatos` | CLASE BaseDatos |
| `src/persistence/database/ConfiguracionDB` | CLASE ConfiguracionDB |
| `src/presentation/controllers/ControladorPrincipal` | CLASE ControladorPrincipal |
| `src/presentation/controllers/ControladorFlashcards` | CLASE ControladorFlashcards |
| `src/presentation/controllers/ControladorMatch` | CLASE ControladorMatch |
| `src/presentation/controllers/ControladorTest` | CLASE ControladorTest |
| `src/presentation/controllers/ControladorProgreso` | CLASE ControladorProgreso |
| `src/presentation/controllers/ControladorCategorias` | CLASE ControladorCategorias |
| `src/presentation/views/VistaPrincipal` | CLASE VistaPrincipal |
| `src/presentation/views/VistaFlashcard` | CLASE VistaFlashcard |
| `src/presentation/views/VistaMatch` | CLASE VistaMatch |
| `src/presentation/views/VistaTest` | CLASE VistaTest |
| `src/presentation/views/VistaProgreso` | CLASE VistaProgreso |
| `src/presentation/views/VistaCategorias` | CLASE VistaCategorias |
| `src/utils/Validador` | CLASE Validador |
| `src/utils/GeneradorAleatorio` | CLASE GeneradorAleatorio |
| `src/utils/ReproductorAudio` | CLASE ReproductorAudio |
| `src/utils/CargadorImagenes` | CLASE CargadorImagenes |
| `src/Main` | ALGORITMO Main |

La especificación menciona además, fuera de `src/`, recursos, pruebas y documentación (`tests/`, `docs/`, `README`, gestión de dependencias). Esos elementos no son lógica de la aplicación y, por la restricción de no inventar, no se les asigna pseudocódigo de negocio. Las pruebas unitarias citadas en RNF-06 y en la sección 10 se dejan como componente existente de la estructura, sin diseñar casos de prueba no especificados.

---

## 12. ARGUMENTACIÓN DEL PSEUDOCÓDIGO

La argumentación se organiza por numeración, listado y sangría, como exige el formato de salida de la solicitud PS-04.

### 12.1. Criterio rector

1. La única fuente de verdad es el documento de especificación suministrado.
2. Cada clase, atributo y método de la sección 9.1 aparece en el pseudocódigo.
3. Cada componente de la sección 10 aparece como módulo, aunque su interior no estuviera detallado.
4. Cada flujo de la sección 6 (casos de uso) se implementa ensamblando métodos ya declarados.
5. Cada requisito funcional de la sección 7 queda cubierto por uno o más métodos.
6. Los requisitos no funcionales de la sección 8 se tratan como restricciones de comportamiento (comentarios y guardas), no como funcionalidad nueva.
7. No se emite código Java, Kotlin, Python ni SQL de un motor concreto.

### 12.2. Argumentación por historias de usuario

1. **HU-01 — Gestión de Flashcards**
    - Se cubre con `ActividadFlashcard`, `Flashcard`, `VistaFlashcard` y `ControladorFlashcards`.
    - Cara frontal = `palabraIngles` (RF-01.1).
    - Cara posterior = traducción + imagen + ejemplo (RF-01.2).
    - Audio = `Palabra.reproducirAudio()` (RF-01.3).
    - “Sé” / “Revisar” = `registrarRespuesta(conoce)` (RF-01.4).

2. **HU-02 — Juego de Relación (Match)**
    - Se cubre con `ActividadMatch`, `ParMatch`, `Elemento`, `TipoMatch`, `VistaMatch` y `ControladorMatch`.
    - Los dos tipos admitidos son exactamente `PALABRA_TRADUCCION` y `PALABRA_IMAGEN`.
    - La validación es inmediata (`validarSeleccion`).
    - El cierre muestra puntuación y tiempo (CU-02 paso 11, RF-03.4, RF-03.5).

3. **HU-03 — Sistema de Tests**
    - Se cubre con `ActividadTest`, `Pregunta`, `RespuestaTest`, `VistaTest` y `ControladorTest`.
    - Opción múltiple, validación automática, resultados correctos/incorrectos e historial (RF-04.1 a RF-04.6).
    - La puntuación es porcentaje de aciertos, como exige RF-04.4.

4. **HU-04 — Práctica de Repetición Espaciada**
    - Se cubre con `ProgresoPalabra`, `AlgoritmoRepeticionEspaciada`, `ServicioProgreso` y `ServicioNotificaciones`.
    - Se usan de forma literal `factorFacil = 2.5` e `intervalosBase = [1, 3, 7, 14, 30]`.
    - Las no dominadas vuelven al intervalo de 1 día (mayor frecuencia).
    - Las aprendidas se reprograman de forma periódica (RF-02.3).

5. **HU-05 — Organización por Categorías**
    - Se cubre con `Categoria`, `ServicioVocabulario.obtenerPalabrasPorCategoria`, `ControladorCategorias` y `calcularProgresoPorCategoria`.

6. **HU-06 — Seguimiento de Progreso**
    - Se cubre con `Estadisticas`, `ServicioProgreso.obtenerEstadisticas`, `ControladorProgreso` y `VistaProgreso`.
    - Se muestran aprendidas, en progreso, pendientes, racha y gráfico temporal.

7. **HU-07 — Gestión de Niveles**
    - Se cubre con la enumeración `Nivel` (`BASICO`, `INTERMEDIO`, `AVANZADO`), `Usuario.nivelActual` y el filtrado `obtenerPalabrasPorNivel` / `obtenerPalabrasPorCategoriaYNivel`.

### 12.3. Argumentación por casos de uso

1. **CU-01**
    - El algoritmo de la sección 10.1 sigue los 10 pasos del flujo principal y los flujos FA1 (resumen) y FA2 (salida anticipada vía `finalizar()`).
    - Postcondiciones: progreso actualizado (`ServicioProgreso.actualizarProgresoPalabra`) y algoritmo ajustado (`calcularProximoIntervalo`).

2. **CU-02**
    - Generación de pares, desorden, selección de dos elementos, desaparición si acierta, deselección si falla, puntuación y tiempo.

3. **CU-03**
    - Generación aleatoria, presentación de opciones, validación, avance, cálculo de puntuación, detalle de aciertos/errores y persistencia del historial.

4. **CU-04**
    - El actor Sistema calcula pendientes, notifica y, cuando el estudiante inicia, presenta flashcards ya priorizadas por menor dominio.

5. **CU-05**
    - Es una consulta: no muta estado de negocio. Solo lee estadísticas y aplica filtros.

6. **CU-06**
    - Lista con progreso, selección, carga de vocabulario y arranque de la actividad elegida.

7. **CU-07**
    - Selección de nivel, filtrado de contenido y habilitación de categorías correspondientes.

### 12.4. Argumentación por requisitos funcionales

1. **RF-01** — Métodos de `ActividadFlashcard`, `Flashcard`, `Palabra.reproducirAudio` y `registrarRespuesta`.
2. **RF-02** — `AlgoritmoRepeticionEspaciada` completo, con los dos atributos constantes de la especificación.
3. **RF-03** — `ActividadMatch.generarPares`, `validarSeleccion`, `calcularPuntuacion` y registro de `tiempoInicio`.
4. **RF-04** — `ActividadTest` + persistencia de resultados en `guardarResultados` / `SesionEstudio`.
5. **RF-05** — `Categoria` + `ServicioVocabulario` + progreso por categoría.
6. **RF-06** — enumeración `Nivel` + filtrado por nivel.
7. **RF-07** — `Estadisticas` (contadores, racha, historial, progreso general) y gráficos en `VistaProgreso`.
8. **RF-08** — atributos de `Palabra` y almacén lógico homónimo.
9. **RF-09** — `ServicioNotificaciones` + `Preferencias.horariosPreferidos` + push condicionado a la plataforma.
10. **RF-10** — `SesionEstudio` + `ServicioSesion`. La pausa/retoma (RF-10.4) se realiza con `guardarSesion` de una sesión abierta y `iniciarSesion` que la reanuda, sin inventar un método público no listado.

### 12.5. Argumentación por requisitos no funcionales

Los RNF no generan clases de negocio nuevas. Se materializan así:

1. **RNF-01 Multiplataforma**
    - La arquitectura en cuatro capas y las vistas desacopladas de controladores permiten Web, Android e iOS sin cambiar el dominio.
2. **RNF-02 Usabilidad**
    - Menú de tres entradas (categorías, progreso, configuración) respeta el máximo de 3 niveles de profundidad.
    - Cada vista declara retroalimentación inmediata.
3. **RNF-03 Rendimiento**
    - `ReproductorAudio` sin delay perceptible.
    - `CargadorImagenes` con caché y carga optimizada.
    - El arranque en `Main` no añade pasos ajenos a la especificación.
4. **RNF-04 Offline**
    - `BaseDatos` es almacén local.
    - `ejecutarActualizacion` marca sincronización solo si hay red.
5. **RNF-05 Escalabilidad**
    - Categorías y palabras se agregan por repositorio, sin acoplar la UI al almacenamiento.
    - El diseño de `Palabra` admite extensión futura de idioma sin cambiar actividades (la especificación lo menciona como capacidad futura; no se implementa un segundo idioma).
6. **RNF-06 Mantenibilidad**
    - Comentarios en cada método.
    - SOLID: interfaces de repositorio, clase abstracta `Actividad`, servicios de orquestación, controladores delgados.
7. **RNF-07 Seguridad**
    - `Validador.validarConsulta` / `validarTextoEntrada`.
    - `ConfiguracionDB.cifradoActivo`.
    - `RepositorioUsuario.guardarUsuario` persiste de forma segura.
8. **RNF-08 Almacenamiento**
    - Recursos particionados por nivel (carga incremental).
    - Audio e imagen se referencian por URL, no se incrustan en la entidad.
9. **RNF-09 Accesibilidad**
    - `Preferencias.tamanoFuente` es el único atributo de accesibilidad que el documento hace operativo de forma explícita (“tamaños de fuente ajustables”).
    - Alto contraste, lector de pantalla y teclado se reconocen como criterios de la especificación y se dejan a la implementación de UI; no se inventan clases para ellos.
10. **RNF-10 Tolerancia a fallos**
    - Cada respuesta de flashcard, match y test dispara `guardarSesion`.
    - Los métodos públicos validan nulos y precondiciones antes de mutar estado.

### 12.6. Argumentación de la jerarquía OOP (sección 9.2)

1. **Encapsulación**
    - Todos los atributos son `PRIVADO` o `PROTEGIDO`.
    - El acceso externo ocurre solo por métodos públicos.
2. **Herencia**
    - `ActividadFlashcard`, `ActividadMatch` y `ActividadTest` heredan de `Actividad`.
    - Reutilizan `id`, `nombre`, `tipo`, `palabras` y `puntuacion`.
3. **Abstracción**
    - `IRepositorioPalabras`, `IRepositorioUsuario`, `IRepositorioCategorias` e `IRepositorioSesiones` aíslan la persistencia.
    - Los servicios dependen de interfaces, no de la clase `BaseDatos`.
4. **Polimorfismo**
    - `iniciar`, `finalizar`, `calcularPuntuacion` y `obtenerResultados` se invocan sobre `Actividad` sin conocer la subclase.
    - `ServicioActividades.guardarResultados` especializa el guardado según `TipoActividad`.
5. **Separación de responsabilidades**
    - Dominio: reglas de vocabulario, progreso y actividades.
    - Servicios: orquestación.
    - Persistencia: lectura/escritura.
    - Presentación: controladores + vistas.

### 12.7. Decisiones de no invención (cumplimiento de la restricción 2)

Se documentan de forma explícita las zonas en las que la especificación es incompleta y cómo se evitó inventar:

1. **Fórmulas de puntuación de Match y Flashcard**
    - El documento dice “suma puntos” y “calcular puntuación”, sin tabla de puntajes.
    - Se usa el recuento de pares encontrados / respuestas “Sé”.
    - No se asignan valores como “10 puntos por acierto” ni penalizaciones no escritas.
2. **Número fijo de preguntas de un test**
    - No está especificado.
    - Se usa el tamaño del conjunto de palabras ya filtrado.
3. **Preferencias**
    - Solo se modelan horarios de recordatorio (RF-09.2) y tamaño de fuente (RNF-09).
    - No se agregan temas visuales, idiomas de UI ni otras opciones.
4. **IRepositorioCategorias / IRepositorioSesiones**
    - Existen como archivo en la sección 10, sin firma en la 9.1.
    - Sus métodos se limitan a lo que los servicios ya listados necesitan.
5. **Vistas**
    - No tienen métodos en la 9.1.
    - Solo exponen operaciones de visualización descritas en los casos de uso.
6. **Elemento y CaraFlashcard**
    - No son clases nominadas en 9.1, pero `validarSeleccion(elem1, elem2)` y el volteo de HU-01 / RF-01 los exigen como tipos.
    - Se declaran con el mínimo de estado para esos métodos.
7. **Pausa y retoma (RF-10.4)**
    - No se creó `pausarSesion()`.
    - Se reutilizan `guardarSesion` e `iniciarSesion`.
8. **Tests unitarios, CSS, README, pom/gradle**
    - Se reconocen como parte de la estructura.
    - No se escribe pseudocódigo de negocio para ellos.
9. **Consultor lingüista (sección 3)**
    - Sus recomendaciones ya están absorbidas por HU/CU/RF (flashcards, match, tests, categorías, niveles).
    - No se añadió un módulo “lingüista” ni habilidades extra (por ejemplo, un motor de speaking autónomo): la especificación sitúa el habla en la pronunciación por audio de la flashcard.

### 12.8. Cobertura de componentes solicitada por PS-04

| Parte solicitada en la tarea 10 | Dónde queda el pseudocódigo |
|---|---|
| Clases | Secciones 2, 3, 4, 5, 6, 7 y 8 |
| Métodos | Cuerpo comentado de cada método declarado |
| Atributos | Bloque `ATRIBUTOS` de cada clase, con visibilidad de la especificación |
| Dominios | Capa de dominio, secciones 1 a 4 |
| Módulos | Encabezado de cada clase con ruta de la sección 10 |
| Servicios | Sección 5 |
| Conectores | `BaseDatos`, repositorios e interfaces (sección 6); `Main` (sección 9) |
| Bases de datos | `BaseDatos`, `ConfiguracionDB` y almacenes lógicos (sección 6.11) |

### 12.9. Correspondencia de principios profesionales aplicados

1. Se respetó el marco OOP de la especificación, no un marco distinto.
2. Cada método declara su propósito y su trazabilidad.
3. Las precondiciones de los casos de uso se verifican al inicio de `iniciar()`.
4. Las postcondiciones se concretan en `guardarResultados`, `actualizarProgreso` y `finalizarSesion`.
5. El estudiante es el único rol de usuario de negocio; el Sistema actúa en CU-04 y en las notificaciones.

### 12.10. Límites conscientes de este entregable

1. Este entregable es **pseudocódigo**, no una implementación ejecutable.
2. No se seleccionó plataforma concreta (Web / Android / iOS): RNF-01 exige multiplataforma, y la especificación no elige una.
3. No se diseñó un esquema SQL de un motor (SQLite, etc.): solo el modelo lógico de atributos.
4. No se redactaron casos de prueba: RNF-06 los exige como criterio de calidad del código futuro, pero el documento no especifica casos.
5. Cualquier ampliación (nuevos idiomas, speaking libre, tienda de contenido, usuarios múltiples concurrentes, autenticación remota) queda **fuera de alcance** porque no está en la especificación.

---

## 13. CIERRE DEL ENTREGABLE

El pseudocódigo de la aplicación de aprendizaje de inglés queda estructurado, comentado y argumentado a partir exclusivamente del documento de especificación.

---

Fin del entregable PS-04 v1.0
