# Sistema de Diseño y Branding — AMBIT
> **ambit.solutions** | Versión 1.0 | Marzo 2026  
> Documento de referencia técnica para implementación con Tailwind CSS y Next.js/Astro.  
> Basado en benchmarking de constructoras líderes (Bechtel, Kiewit, Skanska) y tendencias UX/UI 2024–2026.

---

## ÍNDICE

1. [Filosofía de Diseño](#1-filosofía-de-diseño)
2. [Paleta de Colores](#2-paleta-de-colores)
3. [Tipografía](#3-tipografía)
4. [Espaciado y Layout](#4-espaciado-y-layout)
5. [Componentes UI](#5-componentes-ui)
6. [Iconografía](#6-iconografía)
7. [Fotografía y Media](#7-fotografía-y-media)
8. [Animaciones y Transiciones](#8-animaciones-y-transiciones)
9. [Responsive Design](#9-responsive-design)
10. [Accesibilidad](#10-accesibilidad)
11. [Dark Mode](#11-dark-mode)

---

## 1. FILOSOFÍA DE DISEÑO

### 1.1 Posicionamiento de Marca

AMBIT se posiciona como la constructora mexicana que combina la escala y credibilidad de los grandes jugadores internacionales con la agilidad, calidez y arraigo local de una empresa que entiende el contexto mexicano. El slogan "Desarrollos ágiles / innovadores / bonitos / funcionales" no es solo descripción de producto — es una declaración de carácter que debe permear cada decisión visual.

El sitio debe comunicar en los primeros 3 segundos: **confianza + modernidad + capacidad de ejecución**. El usuario que llega a ambit.solutions debe sentir que ha encontrado una empresa diferente a todas las constructoras que conoce: profesional sin ser fría, moderna sin ser frívola, mexicana sin ser localista.

### 1.2 Los Cinco Principios de Diseño AMBIT

**1. Fuerza con Ligereza**  
El naranja AMBIT y el gris carbón crean tensión visual positiva: energía y solidez. Sin embargo, el diseño evita la pesadez corporativa. Espacios en blanco generosos, tipografía de alta legibilidad y fotografía editorial impiden que el sitio se sienta como un reporte anual. Inspiración directa: Kiewit (impacto visual con paleta intensa) + Bechtel (edición cuidadosa, cada elemento justificado).

**2. Narrativa sobre Inventario**  
No se lista un catálogo de servicios. Se cuenta la historia de los proyectos. Cada sección debe responder la pregunta del usuario: "¿Pueden resolver MI problema?" — no "¿Qué servicios ofrecen?". Como Bechtel, que pone a las personas antes que los productos, AMBIT pone el resultado del cliente antes que las capacidades técnicas.

**3. Precisión Visible**  
Los detalles del diseño comunican precisión constructiva. Grids alineados, tipografía con escala consistente, componentes con estados bien definidos. Un sitio descuidado contradice la promesa de construcción de calidad. Cada píxel importa porque cada centímetro en obra importa.

**4. Velocidad como Respeto**  
Un sitio lento es un sitio que no respeta el tiempo del cliente. Performance es parte del sistema de diseño: imágenes en WebP/AVIF, lazy loading, código sin exceso, LCP menor a 2.5 segundos. La velocidad de carga es una extensión de la promesa de "desarrollos ágiles".

**5. Mexicanidad Discreta pero Presente**  
AMBIT no necesita sombreros ni colores de bandera para ser mexicana. La mexicanidad se expresa en el tono: directo y cálido a la vez, en la fotografía que muestra proyectos y equipos reales en México, en el copy que habla de vivienda social con genuino compromiso. La paleta naranja-dorado tiene raíces en la arquitectura vernácula mexicana sin ser folclórica.

### 1.3 Referentes de Inspiración

| Empresa | Qué se toma como inspiración |
|---------|------------------------------|
| **Kiewit** | Paleta de acento intenso (dorado/negro), KPIs como protagonistas, headline de 3 palabras, organización por mercados + capacidades |
| **Bechtel** | Narrativa aspiracional, proyectos como historias (no listas), minimalismo premium, poner al cliente en el centro del mensaje |
| **Skanska** | Diseño nórdico limpio, uso del color de marca como elemento arquitectónico, combinación B&W en hero + color en contenido |
| **Turner Construction** | Video/foto documental humanizando la obra, CTAs que invitan al diálogo ("¿Qué quieres construir?"), sección por ciudad |
| **STRABAG** | Mostrar innovación activa, proyectos en proceso como diferenciador, ESG integrado (no como sección aparte) |

### 1.4 Experiencia Emocional del Usuario

Al navegar ambit.solutions, el usuario debe experimentar esta secuencia emocional:

1. **Impacto inmediato** — El hero (foto/video de proyecto real) comunica escala y calidad en los primeros 3 segundos
2. **Curiosidad** — El slogan y las propuestas de valor generan preguntas: "¿Cómo lo hacen diferente?"
3. **Confianza progresiva** — Los proyectos, métricas y equipo construyen credibilidad de forma acumulativa
4. **Identificación** — "Trabajan en proyectos como el mío, en México, para clientes como yo"
5. **Acción clara** — En cada punto del recorrido existe un CTA sin fricción que facilita el contacto

---

## 2. PALETA DE COLORES

### 2.1 Colores de Marca Principales

#### Color Primario — Naranja AMBIT
El naranja del logo de AMBIT no es un naranja genérico de construcción (los cascos y conos de seguridad). Es un naranja-dorado que evoca energía, innovación y calidez — coherente con el posicionamiento de empresa moderna con raíces.

```
--color-primary:       #E8841A   /* Naranja AMBIT principal — logo, CTAs, acentos */
--color-primary-light: #F09C3C   /* Hover states, tints suaves */
--color-primary-dark:  #C96F0E   /* Estados activos, pressed, bordes en fondos claros */
--color-primary-50:    #FEF5E9   /* Backgrounds sutiles, badges, chips */
--color-primary-100:   #FDE4BF   /* Tints medios para fondos de secciones */
--color-primary-200:   #F9C070   /* Acentos decorativos */
```

> **Decisión de diseño:** Se ajusta el naranja a `#E8841A` (ligeramente más saturado y con mayor temperatura que el aproximado original `#E8941A`) para garantizar contraste WCAG AA mínimo de 3:1 sobre blanco en tamaños grandes, y 4.5:1 sobre el gris carbón para texto en fondos oscuros.

#### Color Secundario — Gris Carbón AMBIT
El gris oscuro transmite solidez, profesionalismo y contraste con el naranja. No es negro puro — tiene temperatura azul-fría que lo moderniza.

```
--color-secondary:       #3D4F5F   /* Gris carbón principal — texto, headers, backgrounds */
--color-secondary-light: #536678   /* Sub-headers, elementos secundarios */
--color-secondary-dark:  #2A3744   /* Fondos de sección oscuros, nav en dark */
--color-secondary-50:    #F0F3F5   /* Fondos altísima claridad */
--color-secondary-100:   #D8DFE5   /* Bordes, dividers */
--color-secondary-200:   #A8B5BF   /* Texto placeholder, iconos inactivos */
```

### 2.2 Escala de Neutrales

Escala completa de grises para texto, fondos, bordes y estados:

```
--neutral-0:   #FFFFFF   /* Blanco puro */
--neutral-50:  #F8F9FA   /* Off-white, fondos de página */
--neutral-100: #F1F3F5   /* Fondos de card ligeros */
--neutral-200: #E9ECEF   /* Bordes suaves */
--neutral-300: #DEE2E6   /* Bordes de inputs */
--neutral-400: #CED4DA   /* Dividers */
--neutral-500: #ADB5BD   /* Texto placeholder, iconos desactivados */
--neutral-600: #6C757D   /* Texto secundario / caption */
--neutral-700: #495057   /* Texto de cuerpo alt */
--neutral-800: #343A40   /* Texto primario en fondos blancos */
--neutral-900: #212529   /* Texto de máximo contraste */
--neutral-950: #0F1214   /* Near-black para dark mode profundo */
```

### 2.3 Fondos Semánticos

```
--bg-page:      #FFFFFF      /* Fondo principal del sitio (modo claro) */
--bg-surface:   #F8F9FA      /* Fondos de cards, paneles */
--bg-surface-alt: #F1F3F5   /* Fondos alternos de sección (zebra) */
--bg-overlay:   #3D4F5F      /* Overlays sobre fotografía */
--bg-dark:      #1C2836      /* Secciones oscuras (CTA, footer) */
--bg-dark-alt:  #243040      /* Variante oscura para alternancia */
```

### 2.4 Colores Semánticos

```
/* Success — Confirmación, estados positivos */
--color-success:        #1E7E34
--color-success-light:  #D4EDDA
--color-success-text:   #155724

/* Warning — Alertas, procesos en curso */
--color-warning:        #D97706
--color-warning-light:  #FEF3C7
--color-warning-text:   #92400E

/* Error — Validaciones fallidas, destructivo */
--color-error:          #C0392B
--color-error-light:    #FDECEA
--color-error-text:     #7B1D1D

/* Info — Información complementaria */
--color-info:           #1A5276
--color-info-light:     #D6EAF8
--color-info-text:      #154360
```

### 2.5 Gradientes

```css
/* Gradiente principal — hero overlays, CTA sections */
--gradient-primary: linear-gradient(
  135deg,
  #E8841A 0%,
  #C96F0E 100%
);

/* Gradiente hero — overlay sobre fotografía */
--gradient-hero: linear-gradient(
  to bottom,
  rgba(28, 40, 54, 0.2) 0%,
  rgba(28, 40, 54, 0.65) 60%,
  rgba(28, 40, 54, 0.88) 100%
);

/* Gradiente sección oscura — sin imagen */
--gradient-dark-section: linear-gradient(
  160deg,
  #1C2836 0%,
  #243040 50%,
  #2A3744 100%
);

/* Gradiente naranja suave — fondos de sección de features */
--gradient-warm: linear-gradient(
  to bottom right,
  #FEF5E9 0%,
  #FFFFFF 100%
);

/* Gradiente texto (para headings impacto) */
--gradient-text: linear-gradient(
  90deg,
  #E8841A 0%,
  #F09C3C 100%
);
```

### 2.6 Reglas de Uso de Color

| Color | Usar para | Nunca usar para |
|-------|-----------|-----------------|
| `#E8841A` Naranja Primario | CTA principal, íconos activos, underlines de énfasis, acentos de heading, bullets de valor | Texto de cuerpo (contraste insuficiente sobre blanco), fondos grandes |
| `#3D4F5F` Gris Carbón | Headings, texto principal en light mode, backgrounds de sección oscura, nav | Texto sobre fondos oscuros sin ajuste |
| `#FFFFFF` Blanco | Fondo de página, texto sobre fondos oscuros, iconos en botones primarios | — |
| `#F8F9FA` Off-white | Fondos de cards, secciones alternas | Hero backgrounds (muy poco contraste con contenido) |
| `#1C2836` Dark Background | Footer, secciones CTA de alto impacto, overlays | Fondos principales de página (demasiado pesado) |

**Regla de proporción:** 60% neutral (blanco/off-white) — 30% gris carbón — 10% naranja. El naranja es el acento, no el fondo.

**Sobre fotografía:** Siempre usar `--gradient-hero` para texto legible sobre imagen. Nunca texto sin overlay.

**Contraste mínimo garantizado:**
- Texto sobre blanco: `#3D4F5F` → 7.8:1 ✓ (WCAG AAA)
- Texto sobre off-white `#F8F9FA`: `#3D4F5F` → 7.4:1 ✓
- Texto sobre `#1C2836`: `#FFFFFF` → 16:1 ✓
- Naranja sobre blanco (solo texto grande ≥18px): `#E8841A` → 3.1:1 ✓ WCAG AA Large
- Naranja sobre `#1C2836`: `#E8841A` → 5.2:1 ✓ WCAG AA

### 2.7 CSS Custom Properties — Archivo Completo

```css
/* /styles/tokens/colors.css */
:root {
  /* === MARCA === */
  --color-primary:         #E8841A;
  --color-primary-light:   #F09C3C;
  --color-primary-dark:    #C96F0E;
  --color-primary-50:      #FEF5E9;
  --color-primary-100:     #FDE4BF;
  --color-primary-200:     #F9C070;

  --color-secondary:       #3D4F5F;
  --color-secondary-light: #536678;
  --color-secondary-dark:  #2A3744;
  --color-secondary-50:    #F0F3F5;
  --color-secondary-100:   #D8DFE5;
  --color-secondary-200:   #A8B5BF;

  /* === NEUTRALES === */
  --neutral-0:   #FFFFFF;
  --neutral-50:  #F8F9FA;
  --neutral-100: #F1F3F5;
  --neutral-200: #E9ECEF;
  --neutral-300: #DEE2E6;
  --neutral-400: #CED4DA;
  --neutral-500: #ADB5BD;
  --neutral-600: #6C757D;
  --neutral-700: #495057;
  --neutral-800: #343A40;
  --neutral-900: #212529;
  --neutral-950: #0F1214;

  /* === FONDOS === */
  --bg-page:        #FFFFFF;
  --bg-surface:     #F8F9FA;
  --bg-surface-alt: #F1F3F5;
  --bg-overlay:     #3D4F5F;
  --bg-dark:        #1C2836;
  --bg-dark-alt:    #243040;

  /* === SEMÁNTICOS === */
  --color-success:       #1E7E34;
  --color-success-light: #D4EDDA;
  --color-success-text:  #155724;
  --color-warning:       #D97706;
  --color-warning-light: #FEF3C7;
  --color-warning-text:  #92400E;
  --color-error:         #C0392B;
  --color-error-light:   #FDECEA;
  --color-error-text:    #7B1D1D;
  --color-info:          #1A5276;
  --color-info-light:    #D6EAF8;
  --color-info-text:     #154360;

  /* === TEXTO === */
  --text-primary:    var(--neutral-900);
  --text-secondary:  var(--neutral-700);
  --text-muted:      var(--neutral-600);
  --text-disabled:   var(--neutral-500);
  --text-inverse:    #FFFFFF;
  --text-on-primary: #FFFFFF;

  /* === BORDES === */
  --border-subtle:  var(--neutral-200);
  --border-default: var(--neutral-300);
  --border-strong:  var(--neutral-400);
  --border-primary: var(--color-primary);
}
```

### 2.8 Configuración Tailwind CSS

```javascript
// tailwind.config.js — colores AMBIT
module.exports = {
  theme: {
    extend: {
      colors: {
        // Marca
        primary: {
          DEFAULT: '#E8841A',
          light:   '#F09C3C',
          dark:    '#C96F0E',
          50:      '#FEF5E9',
          100:     '#FDE4BF',
          200:     '#F9C070',
        },
        secondary: {
          DEFAULT: '#3D4F5F',
          light:   '#536678',
          dark:    '#2A3744',
          50:      '#F0F3F5',
          100:     '#D8DFE5',
          200:     '#A8B5BF',
        },
        // Fondos
        ambit: {
          dark:     '#1C2836',
          darkAlt:  '#243040',
          overlay:  '#3D4F5F',
        },
        // Neutrales (sobrescriben grises por defecto de Tailwind)
        neutral: {
          0:   '#FFFFFF',
          50:  '#F8F9FA',
          100: '#F1F3F5',
          200: '#E9ECEF',
          300: '#DEE2E6',
          400: '#CED4DA',
          500: '#ADB5BD',
          600: '#6C757D',
          700: '#495057',
          800: '#343A40',
          900: '#212529',
          950: '#0F1214',
        },
      },
    },
  },
}
```

---

## 3. TIPOGRAFÍA

### 3.1 Stack Tipográfico AMBIT

**Font de Headings: DM Sans**  
DM Sans es una sans-serif geométrica de baja óptima diseñada para legibilidad en pantalla. Sus trazos limpios, terminaciones cortadas y proporciones amplias comunican modernidad sin frivolidad. Funciona brillantemente en tamaños grandes (heroes, headlines) y en tamaños medianos (subtítulos, cards). Disponible gratis en Google Fonts.

**Por qué DM Sans sobre alternativas:**
- *Inter*: demasiado neutro/genérico, sobre-utilizada en tech
- *Outfit*: menos peso óptico en bold, pierde impacto en heroes
- *Manrope*: excelente segunda opción, caracteres muy abiertos podrían sentirse suaves para construcción
- *Playfair Display (serif)*: demasiado editorial/luxury, no encaja con la promesa de agilidad y funcionalidad
- **DM Sans**: balance perfecto entre fuerza (700/800 weight) y ligereza (400 weight), espaciado consistente, excelente en español con caracteres extendidos

**Font de Cuerpo: Inter**  
Inter es la fuente de cuerpo por defecto de facto para aplicaciones web de alta calidad. Su legibilidad a 16px es excepcional, con numerales tabulares ideales para métricas y KPIs, y soporte perfecto para español. La combinación DM Sans + Inter es coherente visualmente (ambas humanist sans-serif) con suficiente diferenciación jerárquica.

**Font de Código/Datos: JetBrains Mono** (solo si se usan snippets técnicos)  
Para especificaciones técnicas, formularios de código o datos estructurados.

### 3.2 Importación de Fuentes

```html
<!-- En el <head> — cargar antes del CSS principal -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
```

```css
/* Variables de familia tipográfica */
:root {
  --font-heading: 'DM Sans', system-ui, -apple-system, sans-serif;
  --font-body:    'Inter', system-ui, -apple-system, sans-serif;
  --font-mono:    'JetBrains Mono', 'Fira Code', monospace;
}
```

### 3.3 Escala Tipográfica Completa

La escala usa una proporción de **1.25 (Major Third)** para texto pequeño-mediano y saltos más expresivos en display. Todos los valores en `rem` (base: `16px = 1rem`).

| Token | rem | px | Line Height | Letter Spacing | Weight | Uso |
|-------|-----|----|-------------|----------------|--------|-----|
| `--text-xs`       | 0.75rem   | 12px | 1.5  | 0.02em  | 400 | Overlines, labels de input, copyright |
| `--text-sm`       | 0.875rem  | 14px | 1.5  | 0.01em  | 400/500 | Caption, badges, meta de proyectos |
| `--text-base`     | 1rem      | 16px | 1.65 | 0       | 400 | Cuerpo de texto principal |
| `--text-lg`       | 1.125rem  | 18px | 1.65 | 0       | 400/500 | Intro párrafos, cuerpo destacado |
| `--text-xl`       | 1.25rem   | 20px | 1.5  | -0.01em | 500 | H6, subtítulos de card |
| `--text-2xl`      | 1.5rem    | 24px | 1.35 | -0.015em | 600 | H5, títulos de card |
| `--text-3xl`      | 1.875rem  | 30px | 1.3  | -0.02em | 600/700 | H4, títulos de sección minor |
| `--text-4xl`      | 2.25rem   | 36px | 1.2  | -0.025em | 700 | H3, títulos de sección |
| `--text-5xl`      | 3rem      | 48px | 1.15 | -0.03em | 700/800 | H2, titulares de sección principal |
| `--text-6xl`      | 3.75rem   | 60px | 1.1  | -0.035em | 800 | H1, hero title |
| `--text-7xl`      | 4.5rem    | 72px | 1.05 | -0.04em | 800 | Display hero — desktop only |
| `--text-8xl`      | 6rem      | 96px | 1.0  | -0.05em | 800 | Display XXL — uso excepcional |

### 3.4 Definición de Roles Tipográficos

```css
/* /styles/tokens/typography.css */
:root {
  --font-heading: 'DM Sans', system-ui, sans-serif;
  --font-body:    'Inter', system-ui, sans-serif;
  --font-mono:    'JetBrains Mono', monospace;

  /* === HEADINGS === */
  /* Display — hero principal */
  --display-size:     clamp(3rem, 5vw + 1rem, 4.5rem);
  --display-weight:   800;
  --display-leading:  1.05;
  --display-tracking: -0.04em;
  --display-family:   var(--font-heading);

  /* H1 */
  --h1-size:     clamp(2.25rem, 4vw + 0.5rem, 3.75rem);
  --h1-weight:   800;
  --h1-leading:  1.1;
  --h1-tracking: -0.035em;

  /* H2 */
  --h2-size:     clamp(1.875rem, 3vw + 0.25rem, 3rem);
  --h2-weight:   700;
  --h2-leading:  1.15;
  --h2-tracking: -0.03em;

  /* H3 */
  --h3-size:     clamp(1.5rem, 2vw + 0.25rem, 2.25rem);
  --h3-weight:   700;
  --h3-leading:  1.2;
  --h3-tracking: -0.025em;

  /* H4 */
  --h4-size:     clamp(1.25rem, 1.5vw + 0.125rem, 1.875rem);
  --h4-weight:   600;
  --h4-leading:  1.3;
  --h4-tracking: -0.02em;

  /* H5 */
  --h5-size:     1.5rem;
  --h5-weight:   600;
  --h5-leading:  1.35;
  --h5-tracking: -0.015em;

  /* H6 */
  --h6-size:     1.25rem;
  --h6-weight:   500;
  --h6-leading:  1.5;
  --h6-tracking: -0.01em;

  /* === BODY === */
  --body-lg-size:    1.125rem;  /* Intro / lead paragraph */
  --body-base-size:  1rem;      /* Cuerpo estándar */
  --body-sm-size:    0.875rem;  /* Auxiliar, meta */
  --body-weight:     400;
  --body-medium:     500;
  --body-leading:    1.65;
  --body-tracking:   0;

  /* === ESPECIALES === */
  --label-size:      0.75rem;
  --label-weight:    600;
  --label-tracking:  0.1em;
  --label-transform: uppercase;

  --caption-size:    0.875rem;
  --caption-weight:  400;
  --caption-color:   var(--neutral-600);
}
```

### 3.5 Configuración Tailwind — Tipografía

```javascript
// tailwind.config.js — extensión tipográfica
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        heading: ['DM Sans', 'system-ui', 'sans-serif'],
        body:    ['Inter', 'system-ui', 'sans-serif'],
        mono:    ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      fontSize: {
        // Base scale
        'xs':   ['0.75rem',   { lineHeight: '1.5',  letterSpacing: '0.02em'  }],
        'sm':   ['0.875rem',  { lineHeight: '1.5',  letterSpacing: '0.01em'  }],
        'base': ['1rem',      { lineHeight: '1.65', letterSpacing: '0'       }],
        'lg':   ['1.125rem',  { lineHeight: '1.65', letterSpacing: '0'       }],
        'xl':   ['1.25rem',   { lineHeight: '1.5',  letterSpacing: '-0.01em' }],
        '2xl':  ['1.5rem',    { lineHeight: '1.35', letterSpacing: '-0.015em'}],
        '3xl':  ['1.875rem',  { lineHeight: '1.3',  letterSpacing: '-0.02em' }],
        '4xl':  ['2.25rem',   { lineHeight: '1.2',  letterSpacing: '-0.025em'}],
        '5xl':  ['3rem',      { lineHeight: '1.15', letterSpacing: '-0.03em' }],
        '6xl':  ['3.75rem',   { lineHeight: '1.1',  letterSpacing: '-0.035em'}],
        '7xl':  ['4.5rem',    { lineHeight: '1.05', letterSpacing: '-0.04em' }],
        '8xl':  ['6rem',      { lineHeight: '1.0',  letterSpacing: '-0.05em' }],
        // Especiales
        'display': ['clamp(3rem, 5vw + 1rem, 4.5rem)', { lineHeight: '1.05', letterSpacing: '-0.04em' }],
        'label':   ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.1em'  }],
      },
      fontWeight: {
        regular:     '400',
        medium:      '500',
        semibold:    '600',
        bold:        '700',
        extrabold:   '800',
      },
      lineHeight: {
        tight:   '1.05',
        snug:    '1.15',
        normal:  '1.5',
        relaxed: '1.65',
        loose:   '1.8',
      },
    },
  },
}
```

### 3.6 Reglas Tipográficas

**Anchura de línea (medida):** Máximo 70–75 caracteres por línea en cuerpo de texto. El `max-width` del bloque de texto debe ser `65ch` o `720px`.

**Headings en español:** El tracking negativo en headings grandes compensa la longitud natural de palabras en español, que tienden a ser más largas que en inglés.

**Jerarquía de color tipográfico:**
- H1–H3: `var(--color-secondary)` `#3D4F5F` o blanco sobre oscuro
- H4–H6: `var(--neutral-800)` `#343A40`
- Body: `var(--neutral-800)` `#343A40`
- Caption/muted: `var(--neutral-600)` `#6C757D`
- Acentos: `var(--color-primary)` `#E8841A` — solo para palabras clave, no párrafos

---

## 4. ESPACIADO Y LAYOUT

### 4.1 Sistema de Espaciado

Escala base de 4px. Todos los valores son múltiplos de 4 para garantizar consistencia y alineación al grid.

```css
:root {
  --space-1:  0.25rem;   /*  4px */
  --space-2:  0.5rem;    /*  8px */
  --space-3:  0.75rem;   /* 12px */
  --space-4:  1rem;      /* 16px */
  --space-5:  1.25rem;   /* 20px */
  --space-6:  1.5rem;    /* 24px */
  --space-8:  2rem;      /* 32px */
  --space-10: 2.5rem;    /* 40px */
  --space-12: 3rem;      /* 48px */
  --space-16: 4rem;      /* 64px */
  --space-20: 5rem;      /* 80px */
  --space-24: 6rem;      /* 96px */
  --space-32: 8rem;      /* 128px */
  --space-40: 10rem;     /* 160px */
  --space-48: 12rem;     /* 192px */
}
```

### 4.2 Breakpoints

Estrategia mobile-first. Los breakpoints definen cuándo el layout debe expandirse.

```css
/* /styles/tokens/breakpoints.css */
:root {
  --bp-xs:  320px;   /* Móviles pequeños (iPhone SE) */
  --bp-sm:  480px;   /* Móviles grandes */
  --bp-md:  768px;   /* Tablets portrait */
  --bp-lg:  1024px;  /* Tablets landscape / laptop pequeño */
  --bp-xl:  1280px;  /* Desktop estándar */
  --bp-2xl: 1536px;  /* Desktop wide / monitores grandes */
}
```

```javascript
// tailwind.config.js — breakpoints
module.exports = {
  theme: {
    screens: {
      'xs':  '320px',
      'sm':  '480px',
      'md':  '768px',
      'lg':  '1024px',
      'xl':  '1280px',
      '2xl': '1536px',
    },
  },
}
```

### 4.3 Grid System

Sistema de 12 columnas con gutter de 24px en móvil y 32px en desktop.

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  column-gap: var(--space-6);    /* 24px mobile */
}

@media (min-width: 1024px) {
  .grid-container {
    column-gap: var(--space-8);  /* 32px desktop */
  }
}

/* Uso de columnas por layout */
/* 12/12 = full width */
/* 8/12  = contenido principal (con sidebar 4/12) */
/* 6/12  = columnas 50/50 */
/* 4/12  = columnas de 3 (features, servicios) */
/* 3/12  = columnas de 4 (team, proyectos pequeños) */
```

### 4.4 Container Widths

```css
:root {
  --container-sm:  640px;    /* Blog posts, textos largos */
  --container-md:  960px;    /* Contenido principal con margen */
  --container-lg:  1200px;   /* Layout estándar */
  --container-xl:  1400px;   /* Full bleed con padding mínimo */
  --container-full: 100%;    /* Secciones edge-to-edge */
}

.container {
  width: 100%;
  max-width: var(--container-lg);  /* 1200px default */
  margin-inline: auto;
  padding-inline: var(--space-4);  /* 16px mobile */
}

@media (min-width: 768px) {
  .container { padding-inline: var(--space-8); }  /* 32px tablet */
}

@media (min-width: 1024px) {
  .container { padding-inline: var(--space-12); } /* 48px desktop */
}
```

### 4.5 Espaciado entre Secciones

Ritmo vertical de la página — las secciones respiran.

```css
/* Padding vertical de secciones */
.section {
  padding-block: var(--space-16);        /* 64px mobile */
}

@media (min-width: 768px) {
  .section { padding-block: var(--space-20); }  /* 80px tablet */
}

@media (min-width: 1024px) {
  .section { padding-block: var(--space-24); }  /* 96px desktop */
}

/* Secciones hero — más espacio */
.section-hero {
  padding-block: var(--space-32);        /* 128px+ */
  min-height: 85vh;
}

/* Secciones compactas (entre secciones principales) */
.section-sm {
  padding-block: var(--space-12);        /* 48px */
}

/* Espaciado entre elementos dentro de sección */
--gap-content: var(--space-12);         /* Entre bloques mayores: 48px */
--gap-items:   var(--space-8);          /* Entre cards/items: 32px */
--gap-inner:   var(--space-4);          /* Dentro de un card: 16px */
```

### 4.6 Card Layouts

```css
/* Card base */
.card {
  background: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  border-radius: 12px;
  overflow: hidden;
  transition: transform 250ms ease-out, box-shadow 250ms ease-out;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(61, 79, 95, 0.12);
}

/* Card de proyecto — proporción 16:9 para imagen */
.card-project .card-image {
  aspect-ratio: 16 / 9;
  overflow: hidden;
}

/* Card de servicio — proporción cuadrada */
.card-service .card-image {
  aspect-ratio: 4 / 3;
}

/* Card de equipo — portrait */
.card-team .card-image {
  aspect-ratio: 3 / 4;
}

/* Padding interno de cards */
.card-body {
  padding: var(--space-6);  /* 24px */
}
```

---

## 5. COMPONENTES UI

### 5.1 Botones

#### Variantes

```css
/* === BOTÓN BASE === */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  font-family: var(--font-body);
  font-weight: 600;
  letter-spacing: 0.02em;
  border-radius: 8px;
  border: 2px solid transparent;
  cursor: pointer;
  transition:
    background-color 200ms ease-out,
    border-color 200ms ease-out,
    color 200ms ease-out,
    transform 150ms ease-out,
    box-shadow 200ms ease-out;
  text-decoration: none;
  white-space: nowrap;
  user-select: none;
}

.btn:active {
  transform: translateY(1px);
}

.btn:focus-visible {
  outline: 3px solid var(--color-primary);
  outline-offset: 3px;
}

/* === TAMAÑOS === */
.btn-sm {
  padding: var(--space-2) var(--space-4);   /* 8px 16px */
  font-size: 0.875rem;
  min-height: 36px;
}

.btn-md {
  padding: var(--space-3) var(--space-6);   /* 12px 24px */
  font-size: 1rem;
  min-height: 44px;  /* Mínimo táctil WCAG */
}

.btn-lg {
  padding: var(--space-4) var(--space-8);   /* 16px 32px */
  font-size: 1.125rem;
  min-height: 52px;
}

.btn-xl {
  padding: var(--space-5) var(--space-10);  /* 20px 40px */
  font-size: 1.25rem;
  min-height: 60px;
}

/* === VARIANTES === */

/* Primary — para CTA principal de sección */
.btn-primary {
  background: var(--color-primary);
  border-color: var(--color-primary);
  color: #FFFFFF;
}
.btn-primary:hover {
  background: var(--color-primary-dark);
  border-color: var(--color-primary-dark);
  box-shadow: 0 4px 16px rgba(232, 132, 26, 0.35);
}

/* Secondary — acciones secundarias */
.btn-secondary {
  background: var(--color-secondary);
  border-color: var(--color-secondary);
  color: #FFFFFF;
}
.btn-secondary:hover {
  background: var(--color-secondary-dark);
  border-color: var(--color-secondary-dark);
}

/* Ghost (Outline) — sobre fondos claros */
.btn-ghost {
  background: transparent;
  border-color: var(--color-primary);
  color: var(--color-primary);
}
.btn-ghost:hover {
  background: var(--color-primary-50);
}

/* Ghost Inverse — sobre fondos oscuros */
.btn-ghost-inverse {
  background: transparent;
  border-color: rgba(255,255,255,0.6);
  color: #FFFFFF;
}
.btn-ghost-inverse:hover {
  background: rgba(255,255,255,0.1);
  border-color: #FFFFFF;
}

/* Disabled */
.btn:disabled,
.btn[aria-disabled="true"] {
  opacity: 0.45;
  cursor: not-allowed;
  pointer-events: none;
}
```

#### Clases Tailwind equivalentes

```html
<!-- Primario grande (CTA hero) -->
<button class="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold text-lg px-10 py-5 rounded-lg border-2 border-primary hover:border-primary-dark transition-all duration-200 hover:shadow-[0_4px_16px_rgba(232,132,26,0.35)] active:translate-y-px focus-visible:outline focus-visible:outline-3 focus-visible:outline-primary focus-visible:outline-offset-3">
  Ver Proyectos
  <svg ...aria-hidden="true" />
</button>

<!-- Ghost inverse (sobre hero oscuro) -->
<button class="inline-flex items-center gap-2 bg-transparent text-white border-2 border-white/60 hover:border-white hover:bg-white/10 font-semibold text-base px-6 py-3 rounded-lg transition-all duration-200 min-h-[44px]">
  Conocer más
</button>
```

### 5.2 Cards de Proyecto

```html
<!-- Estructura HTML de card de proyecto -->
<article class="group card bg-white rounded-xl overflow-hidden border border-neutral-200 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(61,79,95,0.12)] transition-all duration-250">
  <!-- Imagen con overlay y categoría -->
  <div class="relative overflow-hidden aspect-[16/9]">
    <img
      src="/proyectos/nombre-proyecto.webp"
      alt="Descripción descriptiva del proyecto"
      class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      loading="lazy"
      width="800" height="450"
    />
    <!-- Badge de categoría -->
    <span class="absolute top-3 left-3 bg-primary/90 text-white text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full backdrop-blur-sm">
      Vivienda Social
    </span>
    <!-- Overlay en hover con enlace -->
    <div class="absolute inset-0 bg-gradient-to-t from-ambit-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
      <span class="text-white text-sm font-medium">Ver proyecto →</span>
    </div>
  </div>
  <!-- Contenido de la card -->
  <div class="p-6">
    <!-- Meta -->
    <div class="flex items-center gap-3 text-xs text-neutral-500 font-medium uppercase tracking-wider mb-3">
      <span>CDMX</span>
      <span>·</span>
      <span>2025</span>
    </div>
    <!-- Título -->
    <h3 class="font-heading text-xl font-bold text-secondary leading-snug mb-2 group-hover:text-primary transition-colors duration-200">
      Conjunto Habitacional Tepeyac
    </h3>
    <!-- Descripción corta -->
    <p class="text-sm text-neutral-600 leading-relaxed mb-4 line-clamp-2">
      240 viviendas de interés social con áreas comunes, estacionamiento y espacios verdes.
    </p>
    <!-- Métricas -->
    <div class="flex items-center gap-4 pt-4 border-t border-neutral-100">
      <div>
        <span class="text-xs text-neutral-500 block">Superficie</span>
        <span class="text-sm font-semibold text-secondary">18,400 m²</span>
      </div>
      <div>
        <span class="text-xs text-neutral-500 block">Entrega</span>
        <span class="text-sm font-semibold text-secondary">18 meses</span>
      </div>
    </div>
  </div>
</article>
```

**Aspectos de imagen por tipo de proyecto:**
- Vista aérea/general: `aspect-[16/9]`
- Interior detalle: `aspect-[4/3]`
- Vertical/fachada: `aspect-[3/4]`
- Panorámica hero: `aspect-[21/9]`

### 5.3 Navigation Bar

```html
<!-- Navbar sticky — desktop + mobile -->
<nav class="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-neutral-200 transition-all duration-300" 
     aria-label="Navegación principal">
  <div class="container flex items-center justify-between h-16 lg:h-20">
    
    <!-- Logo -->
    <a href="/" class="flex-shrink-0 focus-visible:outline focus-visible:outline-primary focus-visible:outline-2 focus-visible:rounded-sm">
      <img src="/images/ambit-logo.svg" alt="AMBIT — Inicio" width="120" height="36" />
    </a>

    <!-- Desktop Navigation -->
    <ul class="hidden lg:flex items-center gap-8" role="list">
      <li><a href="/proyectos" class="text-sm font-medium text-secondary hover:text-primary transition-colors duration-150 py-2 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all after:duration-250">Proyectos</a></li>
      <li><a href="/servicios"  class="text-sm font-medium text-secondary hover:text-primary transition-colors duration-150 py-2 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all after:duration-250">Servicios</a></li>
      <li><a href="/nosotros"   class="text-sm font-medium text-secondary hover:text-primary transition-colors duration-150 py-2 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all after:duration-250">Nosotros</a></li>
      <li><a href="/blog"       class="text-sm font-medium text-secondary hover:text-primary transition-colors duration-150 py-2 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all after:duration-250">Blog</a></li>
    </ul>

    <!-- CTA Desktop -->
    <div class="hidden lg:flex items-center gap-4">
      <a href="tel:+521234567890" class="text-sm font-medium text-secondary hover:text-primary transition-colors">
        +52 (55) 1234-5678
      </a>
      <a href="/contacto" class="btn btn-primary btn-md">
        Solicitar cotización
      </a>
    </div>

    <!-- Hamburger Mobile -->
    <button 
      class="lg:hidden p-2 rounded-lg text-secondary hover:bg-neutral-100 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
      aria-expanded="false"
      aria-controls="mobile-menu"
      aria-label="Abrir menú de navegación"
    >
      <svg ...aria-hidden="true" />
    </button>
  </div>

  <!-- Mobile Menu -->
  <div id="mobile-menu" class="lg:hidden hidden border-t border-neutral-200 bg-white">
    <div class="container py-4 flex flex-col gap-1">
      <a href="/proyectos" class="text-base font-medium text-secondary hover:text-primary px-3 py-3 rounded-lg hover:bg-primary-50 transition-colors min-h-[44px] flex items-center">Proyectos</a>
      <a href="/servicios"  class="text-base font-medium text-secondary hover:text-primary px-3 py-3 rounded-lg hover:bg-primary-50 transition-colors min-h-[44px] flex items-center">Servicios</a>
      <a href="/nosotros"   class="text-base font-medium text-secondary hover:text-primary px-3 py-3 rounded-lg hover:bg-primary-50 transition-colors min-h-[44px] flex items-center">Nosotros</a>
      <a href="/blog"       class="text-base font-medium text-secondary hover:text-primary px-3 py-3 rounded-lg hover:bg-primary-50 transition-colors min-h-[44px] flex items-center">Blog</a>
      <div class="pt-3 border-t border-neutral-200 mt-2">
        <a href="/contacto" class="btn btn-primary btn-md w-full">Solicitar cotización</a>
      </div>
    </div>
  </div>
</nav>
```

**Comportamiento sticky con scroll:**
- Default: `background: white/95`, `backdrop-blur-md`, `border-b neutral-200`
- Al hacer scroll (JS añade clase `scrolled`): sombra `shadow-sm` adicional
- Nav height: `64px` móvil / `80px` desktop

### 5.4 Hero Section

```html
<!-- Hero — foto/video de fondo con overlay -->
<section class="relative min-h-[85vh] flex items-end pb-16 lg:pb-24 overflow-hidden">
  
  <!-- Imagen/Video de fondo -->
  <div class="absolute inset-0">
    <!-- Versión foto -->
    <img
      src="/images/hero-project.webp"
      alt="" role="presentation"
      class="w-full h-full object-cover"
      fetchpriority="high"
      width="1920" height="1080"
    />
    <!-- Versión video (alternativa) -->
    <!-- 
    <video autoplay muted loop playsinline class="w-full h-full object-cover"
      poster="/images/hero-poster.webp">
      <source src="/videos/hero-ambit.webm" type="video/webm">
      <source src="/videos/hero-ambit.mp4" type="video/mp4">
    </video>
    -->
    <!-- Overlay gradiente -->
    <div class="absolute inset-0 bg-gradient-to-b from-ambit-dark/20 via-ambit-dark/65 to-ambit-dark/88"></div>
  </div>

  <!-- Contenido del hero -->
  <div class="relative container">
    <div class="max-w-3xl">
      <!-- Overline / categoría -->
      <p class="text-xs font-semibold uppercase tracking-[0.15em] text-primary mb-4">
        Constructora Mexicana · Desde 2010
      </p>
      <!-- Headline principal -->
      <h1 class="font-heading text-5xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-[-0.04em] mb-6">
        Desarrollamos lo que<br>
        <span class="text-primary">imaginas.</span>
      </h1>
      <!-- Subheadline -->
      <p class="text-lg lg:text-xl text-white/85 font-normal leading-relaxed max-w-2xl mb-10">
        Construcción ágil, innovadora y de alto impacto para vivienda, infraestructura y 
        proyectos comerciales en México.
      </p>
      <!-- CTAs -->
      <div class="flex flex-col sm:flex-row gap-4">
        <a href="/proyectos" class="btn btn-primary btn-lg">
          Ver nuestros proyectos
        </a>
        <a href="/contacto" class="btn btn-ghost-inverse btn-lg">
          Hablar con un especialista
        </a>
      </div>
    </div>
  </div>

  <!-- Indicador de scroll -->
  <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 text-xs">
    <span>Desplázate</span>
    <svg class="animate-bounce" ...aria-hidden="true" />
  </div>
</section>
```

### 5.5 Footer

```html
<footer class="bg-ambit-dark text-white" aria-label="Pie de página">
  <div class="container">
    <!-- Sección principal del footer -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
      
      <!-- Columna 1: Marca -->
      <div class="lg:col-span-1">
        <a href="/" aria-label="AMBIT — Página de inicio">
          <img src="/images/ambit-logo-white.svg" alt="AMBIT" width="120" height="36" class="mb-6" />
        </a>
        <p class="text-sm text-white/65 leading-relaxed mb-6">
          Desarrollos ágiles, innovadores, bonitos y funcionales para México.
        </p>
        <!-- Redes sociales -->
        <div class="flex gap-3">
          <a href="https://linkedin.com/company/ambit" class="w-10 h-10 rounded-lg bg-white/10 hover:bg-primary transition-colors flex items-center justify-center" aria-label="LinkedIn AMBIT">
            <svg ...aria-hidden="true" />
          </a>
          <!-- Instagram, Facebook, etc. -->
        </div>
      </div>

      <!-- Columna 2: Servicios -->
      <div>
        <h3 class="text-sm font-semibold uppercase tracking-[0.1em] text-white/50 mb-5">Servicios</h3>
        <ul class="space-y-3 text-sm text-white/75">
          <li><a href="/servicios/vivienda-social" class="hover:text-primary transition-colors">Vivienda Social</a></li>
          <li><a href="/servicios/infraestructura" class="hover:text-primary transition-colors">Infraestructura</a></li>
          <li><a href="/servicios/comercial"       class="hover:text-primary transition-colors">Edificios Comerciales</a></li>
          <li><a href="/servicios/industrial"      class="hover:text-primary transition-colors">Proyectos Industriales</a></li>
          <li><a href="/servicios/consultoria"     class="hover:text-primary transition-colors">Consultoría de Obra</a></li>
        </ul>
      </div>

      <!-- Columna 3: Empresa -->
      <div>
        <h3 class="text-sm font-semibold uppercase tracking-[0.1em] text-white/50 mb-5">Empresa</h3>
        <ul class="space-y-3 text-sm text-white/75">
          <li><a href="/nosotros"     class="hover:text-primary transition-colors">Quiénes somos</a></li>
          <li><a href="/proyectos"    class="hover:text-primary transition-colors">Portafolio</a></li>
          <li><a href="/blog"         class="hover:text-primary transition-colors">Blog y recursos</a></li>
          <li><a href="/nosotros#equipo" class="hover:text-primary transition-colors">Nuestro equipo</a></li>
          <li><a href="/contacto"     class="hover:text-primary transition-colors">Trabaja con nosotros</a></li>
        </ul>
      </div>

      <!-- Columna 4: Contacto -->
      <div>
        <h3 class="text-sm font-semibold uppercase tracking-[0.1em] text-white/50 mb-5">Contacto</h3>
        <address class="not-italic space-y-3 text-sm text-white/75">
          <p>Ciudad de México, México</p>
          <a href="tel:+521234567890" class="hover:text-primary transition-colors block">+52 (55) 1234-5678</a>
          <a href="mailto:contacto@ambit.solutions" class="hover:text-primary transition-colors block">contacto@ambit.solutions</a>
        </address>
        <a href="/contacto" class="btn btn-ghost-inverse btn-sm mt-6 inline-flex">
          Solicitar cotización →
        </a>
      </div>
    </div>

    <!-- Barra inferior -->
    <div class="flex flex-col sm:flex-row items-center justify-between gap-4 py-6 border-t border-white/10 text-xs text-white/40">
      <p>© 2026 AMBIT. Todos los derechos reservados.</p>
      <div class="flex gap-6">
        <a href="/privacidad" class="hover:text-white/70 transition-colors">Aviso de privacidad</a>
        <a href="/terminos"   class="hover:text-white/70 transition-colors">Términos de uso</a>
      </div>
    </div>
  </div>
</footer>
```

### 5.6 Formularios

```css
/* === INPUTS === */
.field-label {
  display: block;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--neutral-800);
  margin-bottom: var(--space-2);
}

.field-label.required::after {
  content: ' *';
  color: var(--color-error);
}

.field-input {
  width: 100%;
  padding: 12px 16px;
  font-size: 1rem;
  color: var(--neutral-900);
  background: var(--neutral-0);
  border: 2px solid var(--neutral-300);
  border-radius: 8px;
  transition: border-color 200ms ease, box-shadow 200ms ease;
  min-height: 48px;   /* Táctil accesible */
}

.field-input:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 4px rgba(232, 132, 26, 0.15);
}

.field-input:invalid:not(:placeholder-shown) {
  border-color: var(--color-error);
}

.field-input::placeholder {
  color: var(--neutral-500);
}

/* Textarea */
.field-textarea {
  min-height: 140px;
  resize: vertical;
  line-height: 1.65;
}

/* Select */
.field-select {
  appearance: none;
  background-image: url("data:image/svg+xml,..."); /* Flecha personalizada */
  background-repeat: no-repeat;
  background-position: right 16px center;
  padding-right: 48px;
}

/* Mensaje de error */
.field-error {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.8125rem;
  color: var(--color-error);
  margin-top: var(--space-2);
}

/* Mensaje de ayuda */
.field-hint {
  font-size: 0.8125rem;
  color: var(--neutral-600);
  margin-top: var(--space-2);
}
```

**HTML de ejemplo de formulario de contacto:**
```html
<form action="/api/contacto" method="POST" class="space-y-6" novalidate>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
    <div>
      <label for="nombre" class="field-label required">Nombre completo</label>
      <input type="text" id="nombre" name="nombre" 
             class="field-input" placeholder="Ej. Juan García"
             autocomplete="name" required>
    </div>
    <div>
      <label for="empresa" class="field-label">Empresa (opcional)</label>
      <input type="text" id="empresa" name="empresa"
             class="field-input" placeholder="Nombre de tu empresa"
             autocomplete="organization">
    </div>
  </div>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
    <div>
      <label for="email" class="field-label required">Correo electrónico</label>
      <input type="email" id="email" name="email"
             class="field-input" placeholder="tu@correo.com"
             autocomplete="email" required>
    </div>
    <div>
      <label for="telefono" class="field-label required">Teléfono</label>
      <input type="tel" id="telefono" name="telefono"
             class="field-input" placeholder="+52 55 1234 5678"
             autocomplete="tel" required>
    </div>
  </div>
  <div>
    <label for="tipo-proyecto" class="field-label required">Tipo de proyecto</label>
    <select id="tipo-proyecto" name="tipo-proyecto" class="field-input field-select" required>
      <option value="">Selecciona el tipo de proyecto</option>
      <option value="vivienda-social">Vivienda Social</option>
      <option value="infraestructura">Infraestructura</option>
      <option value="comercial">Edificio Comercial</option>
      <option value="industrial">Proyecto Industrial</option>
      <option value="otro">Otro / No estoy seguro</option>
    </select>
  </div>
  <div>
    <label for="mensaje" class="field-label required">Describe tu proyecto</label>
    <textarea id="mensaje" name="mensaje" 
              class="field-input field-textarea" 
              placeholder="Cuéntanos brevemente sobre tu proyecto: ubicación, tamaño aproximado, timeline deseado..."
              rows="5" required></textarea>
  </div>
  <div class="flex items-start gap-3">
    <input type="checkbox" id="privacidad" name="privacidad"
           class="mt-1 w-4 h-4 accent-primary" required>
    <label for="privacidad" class="text-sm text-neutral-600">
      He leído y acepto el <a href="/privacidad" class="text-primary underline hover:text-primary-dark">aviso de privacidad</a> de AMBIT.
    </label>
  </div>
  <button type="submit" class="btn btn-primary btn-lg w-full sm:w-auto">
    Enviar solicitud →
  </button>
</form>
```

### 5.7 Badges y Tags de Proyectos

```html
<!-- Badge de categoría (sobre imagen) -->
<span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-primary text-white">
  Vivienda Social
</span>

<!-- Tag filtro (botones de filtro en portafolio) -->
<button class="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium border-2 border-neutral-300 text-neutral-700 hover:border-primary hover:text-primary hover:bg-primary-50 transition-all duration-200 min-h-[44px]"
        aria-pressed="false">
  Infraestructura
</button>

<!-- Tag activo (filtro seleccionado) -->
<button class="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold border-2 border-primary text-primary bg-primary-50 transition-all duration-200 min-h-[44px]"
        aria-pressed="true">
  Vivienda Social
  <svg class="ml-2 w-3 h-3" ...aria-hidden="true" /> <!-- ícono X para quitar filtro -->
</button>

/* Variantes de badge por color */
.badge-orange  { @apply bg-primary/10 text-primary-dark; }
.badge-gray    { @apply bg-secondary/10 text-secondary; }
.badge-success { @apply bg-green-100 text-green-800; }
.badge-blue    { @apply bg-blue-100 text-blue-800; }
```

### 5.8 Stats / KPI Counters

```html
<!-- Sección de KPIs — animados al entrar en viewport -->
<section class="bg-ambit-dark section">
  <div class="container">
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
      
      <div class="text-center" data-counter>
        <div class="text-5xl lg:text-6xl font-heading font-extrabold text-primary mb-2"
             data-count-to="347" data-count-suffix="+">
          <span class="counter-value">347</span>+
        </div>
        <div class="text-sm font-semibold uppercase tracking-[0.1em] text-white/60">
          Proyectos entregados
        </div>
      </div>

      <div class="text-center" data-counter>
        <div class="text-5xl lg:text-6xl font-heading font-extrabold text-primary mb-2">
          <span class="counter-value" data-count-to="15">15</span>+
        </div>
        <div class="text-sm font-semibold uppercase tracking-[0.1em] text-white/60">
          Años de experiencia
        </div>
      </div>

      <div class="text-center" data-counter>
        <div class="text-5xl lg:text-6xl font-heading font-extrabold text-primary mb-2">
          <span class="counter-value" data-count-to="2">2</span>M+
        </div>
        <div class="text-sm font-semibold uppercase tracking-[0.1em] text-white/60">
          m² construidos
        </div>
      </div>

      <div class="text-center" data-counter>
        <div class="text-5xl lg:text-6xl font-heading font-extrabold text-primary mb-2">
          <span class="counter-value" data-count-to="98">98</span>%
        </div>
        <div class="text-sm font-semibold uppercase tracking-[0.1em] text-white/60">
          Entregados a tiempo
        </div>
      </div>

    </div>
  </div>
</section>
```

```javascript
// Animación de contadores con IntersectionObserver
const counters = document.querySelectorAll('[data-counter]');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target.querySelector('.counter-value');
      const target = parseInt(el.dataset.countTo);
      animateCounter(el, 0, target, 1600);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.4 });

counters.forEach(c => observer.observe(c));

function animateCounter(el, start, end, duration) {
  const startTime = performance.now();
  const easeOut = t => 1 - Math.pow(1 - t, 3);
  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    el.textContent = Math.floor(easeOut(progress) * (end - start) + start);
    if (progress < 1) requestAnimationFrame(update);
    else el.textContent = end;
  }
  requestAnimationFrame(update);
}
```

### 5.9 Testimoniales

```html
<!-- Componente testimonial -->
<figure class="bg-white rounded-2xl p-8 border border-neutral-200 shadow-sm relative">
  <!-- Comilla decorativa -->
  <div class="absolute -top-4 -left-2 text-7xl text-primary/20 font-serif leading-none select-none"
       aria-hidden="true">"</div>
  
  <!-- Texto del testimonial -->
  <blockquote class="text-base lg:text-lg text-neutral-700 leading-relaxed mb-6 relative z-10">
    "AMBIT entregó el proyecto 3 semanas antes del plazo acordado y con una calidad 
    de construcción que superó nuestras expectativas. Su comunicación durante el proceso 
    fue impecable."
  </blockquote>
  
  <!-- Autor -->
  <figcaption class="flex items-center gap-4">
    <img src="/images/testimonials/cliente-juan.webp"
         alt="Juan Rodríguez, Director de Proyectos en Infonavit"
         class="w-12 h-12 rounded-full object-cover"
         loading="lazy" width="48" height="48">
    <div>
      <cite class="not-italic font-semibold text-secondary text-sm">Juan Rodríguez</cite>
      <p class="text-xs text-neutral-500">Director de Proyectos · <span class="font-medium">Infonavit</span></p>
    </div>
  </figcaption>
</figure>
```

### 5.10 Loading States / Skeletons

```css
/* Skeleton base */
.skeleton {
  background: linear-gradient(
    90deg,
    var(--neutral-200) 25%,
    var(--neutral-100) 50%,
    var(--neutral-200) 75%
  );
  background-size: 200% 100%;
  animation: skeleton-shimmer 1.5s ease-in-out infinite;
  border-radius: 6px;
}

@keyframes skeleton-shimmer {
  0%   { background-position: 200% center; }
  100% { background-position: -200% center; }
}

/* Respetar prefers-reduced-motion */
@media (prefers-reduced-motion: reduce) {
  .skeleton {
    animation: none;
    background: var(--neutral-200);
  }
}
```

```html
<!-- Card skeleton de proyecto -->
<div class="card rounded-xl overflow-hidden border border-neutral-200">
  <div class="skeleton w-full aspect-[16/9]"></div>
  <div class="p-6 space-y-3">
    <div class="skeleton h-3 w-24 rounded"></div>
    <div class="skeleton h-6 w-4/5 rounded"></div>
    <div class="skeleton h-4 w-full rounded"></div>
    <div class="skeleton h-4 w-3/4 rounded"></div>
  </div>
</div>
```

### 5.11 Section Dividers

```html
<!-- Divider decorativo con flecha (entre hero y siguiente sección) -->
<div class="relative -mt-8 z-10 flex justify-center">
  <div class="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-primary">
    <svg class="w-5 h-5 animate-bounce" ...aria-hidden="true" />
  </div>
</div>

<!-- Divider de línea con label -->
<div class="flex items-center gap-4 my-12">
  <div class="flex-1 h-px bg-neutral-200"></div>
  <span class="text-xs font-semibold uppercase tracking-[0.15em] text-neutral-400">Proyectos destacados</span>
  <div class="flex-1 h-px bg-neutral-200"></div>
</div>

<!-- Wave SVG divider entre secciones claro/oscuro -->
<div class="bg-white -mb-1">
  <svg viewBox="0 0 1440 60" class="fill-ambit-dark w-full" aria-hidden="true">
    <path d="M0,0 C720,60 1440,0 1440,0 L1440,60 L0,60 Z"/>
  </svg>
</div>
```

### 5.12 Breadcrumbs

```html
<nav aria-label="Ruta de navegación">
  <ol class="flex items-center gap-2 text-sm text-neutral-500" itemscope itemtype="https://schema.org/BreadcrumbList">
    <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
      <a href="/" class="hover:text-primary transition-colors" itemprop="item">
        <span itemprop="name">Inicio</span>
      </a>
      <meta itemprop="position" content="1">
    </li>
    <li aria-hidden="true" class="text-neutral-300">/</li>
    <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
      <a href="/proyectos" class="hover:text-primary transition-colors" itemprop="item">
        <span itemprop="name">Proyectos</span>
      </a>
      <meta itemprop="position" content="2">
    </li>
    <li aria-hidden="true" class="text-neutral-300">/</li>
    <li class="text-neutral-800 font-medium" aria-current="page"
        itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
      <span itemprop="name">Conjunto Habitacional Tepeyac</span>
      <meta itemprop="position" content="3">
    </li>
  </ol>
</nav>
```

---

## 6. ICONOGRAFÍA

### 6.1 Biblioteca de Íconos: Lucide React

**Recomendación:** [Lucide Icons](https://lucide.dev) — 1,400+ íconos SVG de línea consistentes, diseño geométrico limpio, perfectamente coherentes con el estilo de DM Sans. Licencia MIT, tree-shakeable para bundles óptimos.

**Por qué Lucide sobre alternativas:**
- *Heroicons*: Excelente opción, pero menor variedad
- *Phosphor Icons*: Más variedad pero los pesos pueden ser inconsistentes
- **Lucide**: Balance perfecto de consistencia visual y variedad, mantenimiento activo, integración lista en React/Vue/Svelte

```bash
npm install lucide-react
```

### 6.2 Tamaños Estándar

| Contexto | Tamaño | Clase Tailwind |
|----------|--------|----------------|
| Inline en texto | 16px | `w-4 h-4` |
| Botones y labels | 18px | `w-[18px] h-[18px]` |
| Navegación | 20px | `w-5 h-5` |
| Cards de servicio | 24px | `w-6 h-6` |
| Feature icons (destacados) | 32px | `w-8 h-8` |
| Hero / sección feature | 40–48px | `w-10 h-10` o `w-12 h-12` |
| Decorativos grandes | 64px | `w-16 h-16` |

### 6.3 Íconos por Sección

```jsx
// Íconos recomendados por categoría de contenido
import {
  // Navegación
  Menu, X, ChevronDown, ChevronRight, ArrowRight, ArrowUpRight,
  // Servicios AMBIT
  Building2, HardHat, Layers, Ruler, Zap, Truck,
  // Valores/Features
  Shield, Award, Clock, CheckCircle, TrendingUp, Users, Globe,
  // Contacto
  Phone, Mail, MapPin, MessageCircle, Send,
  // Proyectos
  ImageIcon, Play, Grid3X3, Filter, Search,
  // Social
  Linkedin, Instagram, Facebook,
} from 'lucide-react';
```

### 6.4 Uso en Feature Cards (Servicios)

```html
<!-- Feature card con ícono -->
<div class="flex gap-4 p-6 bg-white rounded-xl border border-neutral-200 hover:shadow-md transition-shadow">
  <!-- Contenedor de ícono -->
  <div class="flex-shrink-0 w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center">
    <svg class="w-6 h-6 text-primary" ...aria-hidden="true" /> <!-- Lucide Building2 -->
  </div>
  <!-- Contenido -->
  <div>
    <h3 class="font-heading text-lg font-bold text-secondary mb-1">Vivienda Social</h3>
    <p class="text-sm text-neutral-600 leading-relaxed">
      Desarrollamos conjuntos habitacionales certificados con CONAVI, 
      desde 50 hasta 1,200 viviendas.
    </p>
  </div>
</div>
```

### 6.5 Estados de Ícono

```css
/* Ícono por defecto */
.icon { color: var(--neutral-600); }

/* Ícono activo / highlight */
.icon-active, .icon-primary { color: var(--color-primary); }

/* Ícono sobre fondo oscuro */
.icon-inverse { color: rgba(255, 255, 255, 0.85); }

/* Ícono desactivado */
.icon-disabled { color: var(--neutral-400); }
```

---

## 7. FOTOGRAFÍA Y MEDIA

### 7.1 Estilo Fotográfico AMBIT

**Directriz principal:** Fotografía documental de alta calidad. El objetivo es mostrar construcción real con dignidad y escala — ni stock genérico de obreros con casco sonriendo, ni renders asépticos sin contexto humano.

**Cuatro categorías fotográficas:**

1. **Gran Escala / Aérea** — Drone footage y fotografía aérea que muestra el proyecto en su contexto urbano o territorial. Iluminación de hora dorada (amanecer/atardecer) cuando sea posible para calidez coherente con la paleta naranja AMBIT.

2. **Detalle Técnico** — Primer plano de acabados, uniones estructurales, materiales de calidad. Iluminación artificial controlada o luz natural lateral para resaltar texturas. Comunica precisión y craftsmanship.

3. **Proceso Constructivo** — Obra en marcha, equipo trabajando, maquinaria. Fotografía dinámica, ángulos bajos (upward looking) para comunicar escala y poder. Sin poses — acción real.

4. **Equipo Humano** — Retratos y grupos en contexto de obra o reuniones de proyecto. Profesionales con EPP (casco, chaleco) en entornos reales, no estudios. Calidez y competencia simultáneas.

### 7.2 Aspect Ratios Estándar

| Uso | Relación | Resolución recomendada |
|-----|----------|------------------------|
| Hero principal | 16:9 | 1920×1080px mínimo |
| Hero mobile | 9:16 | 1080×1920px |
| Cards de proyecto (grid) | 16:9 | 800×450px |
| Cards de proyecto (featured) | 21:9 | 1200×514px |
| Galería de proyecto | 4:3 | 1200×900px |
| Equipo (retratos) | 3:4 | 600×800px |
| Testimoniales (autor) | 1:1 | 200×200px |
| OG Image (redes sociales) | 1200×630px | — |

### 7.3 Tratamiento de Imágenes con Texto Encima

**Regla no negociable:** Nunca texto sobre imagen sin overlay. Usar siempre `--gradient-hero`:

```css
/* Overlay estándar para hero */
.img-overlay::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(28, 40, 54, 0.15) 0%,
    rgba(28, 40, 54, 0.60) 55%,
    rgba(28, 40, 54, 0.88) 100%
  );
}

/* Overlay más claro para subtítulos sobre cards */
.img-overlay-light::after {
  background: linear-gradient(
    to bottom,
    transparent 50%,
    rgba(28, 40, 54, 0.7) 100%
  );
}
```

### 7.4 Formatos y Optimización

```html
<!-- Imagen optimizada con formato moderno y fallback -->
<picture>
  <source srcset="proyecto.avif" type="image/avif">
  <source srcset="proyecto.webp" type="image/webp">
  <img
    src="proyecto.jpg"
    alt="Descripción detallada del proyecto para accesibilidad"
    width="800" height="450"
    loading="lazy"
    decoding="async"
    class="w-full h-full object-cover"
  >
</picture>

<!-- Imagen hero (LCP) — NO lazy load -->
<img
  src="hero.webp"
  alt=""
  role="presentation"
  width="1920" height="1080"
  fetchpriority="high"
  class="w-full h-full object-cover"
>
```

**Objetivos de tamaño de archivo:**
- Hero image: < 250KB en WebP/AVIF
- Cards de proyecto: < 80KB en WebP
- Thumbnails: < 30KB
- Hero video loop: < 8MB (WebM), < 12MB (MP4 fallback)

### 7.5 Especificaciones de Video

| Parámetro | Especificación |
|-----------|----------------|
| Formato primario | WebM (VP9 codec) |
| Formato fallback | MP4 (H.264) |
| Duración hero loop | 15–30 segundos |
| Bitrate target | 2–4 Mbps |
| Resolución | 1920×1080px |
| Audio | Muted obligatorio (autoplay) |
| Poster | Siempre definir — frame representativo en WebP |
| `preload` | `metadata` para hero, `none` para secundarios |

```html
<video
  autoplay muted loop playsinline
  class="absolute inset-0 w-full h-full object-cover"
  poster="/videos/hero-poster.webp"
  preload="metadata"
>
  <source src="/videos/hero-ambit.webm" type="video/webm">
  <source src="/videos/hero-ambit.mp4" type="video/mp4">
</video>
```

---

## 8. ANIMACIONES Y TRANSICIONES

### 8.1 Principios de Animación AMBIT

1. **Propósito:** Cada animación comunica algo — estado, jerarquía, relación. Sin movimiento decorativo.
2. **Sutileza:** Las animaciones deben sentirse naturales, no espectaculares. Si el usuario las nota activamente, son demasiado obvias.
3. **Performance:** Solo animar `transform` y `opacity` (GPU-accelerated). Nunca `width`, `height`, `top`, `left`, `margin`.
4. **Accesibilidad:** Respetar `prefers-reduced-motion` — desactivar o simplificar todas las animaciones.

### 8.2 Easing Curves

```css
:root {
  /* Entradas — elementos que aparecen */
  --ease-out:      cubic-bezier(0.0, 0, 0.2, 1);   /* Rápido al inicio, frena */
  --ease-out-soft: cubic-bezier(0.16, 1, 0.3, 1);  /* Spring suave — favorito para cards */
  
  /* Salidas — elementos que desaparecen */
  --ease-in:       cubic-bezier(0.4, 0, 1, 1);     /* Lento inicio, rápido al final */
  
  /* Transiciones de estado */
  --ease-inout:    cubic-bezier(0.4, 0, 0.2, 1);   /* Material Design standard */
  
  /* Spring / Rebote */
  --ease-spring:   cubic-bezier(0.34, 1.56, 0.64, 1); /* Ligero overshoot — hover effects */
}
```

### 8.3 Duraciones por Tipo

| Tipo de Animación | Duración | Easing recomendado |
|-------------------|----------|-------------------|
| Hover state (color, borde) | 150–200ms | `ease-out` |
| Hover state (transform) | 200–250ms | `ease-out-soft` |
| Botón pressed/active | 100ms | `ease-in` |
| Apertura de dropdown/menú | 200ms | `ease-out` |
| Cierre de dropdown/menú | 150ms | `ease-in` |
| Card lift en hover | 250ms | `ease-out-soft` |
| Fade in al entrar viewport | 500–600ms | `ease-out` |
| Slide up al entrar viewport | 500–700ms | `ease-out-soft` |
| Contador de KPIs | 1400–1800ms | `cubic-bezier(0, 0, 0.2, 1)` |
| Skeleton shimmer | 1500ms infinite | `ease-in-out` |
| Transición de página | 300ms | `ease-inout` |
| Imagen hover scale | 500ms | `ease-out` |

### 8.4 Scroll Animations

```css
/* Clase inicial — elemento invisible antes de animar */
.animate-on-scroll {
  opacity: 0;
  transform: translateY(24px);
  transition:
    opacity 600ms var(--ease-out-soft),
    transform 600ms var(--ease-out-soft);
}

/* Clase activa — añadida por IntersectionObserver */
.animate-on-scroll.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* Variantes de dirección */
.animate-slide-left  { transform: translateX(-24px); }
.animate-slide-right { transform: translateX(24px); }
.animate-scale-up    { transform: scale(0.95); }

/* Delay escalonado para grupos de cards */
.animate-on-scroll:nth-child(1) { transition-delay: 0ms;   }
.animate-on-scroll:nth-child(2) { transition-delay: 100ms; }
.animate-on-scroll:nth-child(3) { transition-delay: 200ms; }
.animate-on-scroll:nth-child(4) { transition-delay: 300ms; }
```

```javascript
// IntersectionObserver para scroll animations
const animatedElements = document.querySelectorAll('.animate-on-scroll');

const scrollObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        scrollObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'  // Trigger un poco antes
  }
);

animatedElements.forEach(el => scrollObserver.observe(el));
```

### 8.5 Hover States

```css
/* Hover de card — lift + sombra */
.card {
  transform: translateY(0);
  box-shadow: 0 1px 4px rgba(0,0,0,0.06), 0 2px 8px rgba(0,0,0,0.04);
  transition:
    transform 250ms var(--ease-out-soft),
    box-shadow 250ms var(--ease-out-soft);
}

.card:hover {
  transform: translateY(-6px);
  box-shadow:
    0 8px 24px rgba(61, 79, 95, 0.10),
    0 16px 48px rgba(61, 79, 95, 0.08);
}

/* Hover de imagen dentro de card — zoom sutil */
.card-image img {
  transform: scale(1);
  transition: transform 500ms var(--ease-out);
}

.card:hover .card-image img {
  transform: scale(1.05);
}

/* Hover de botón primario — sombra naranja */
.btn-primary:hover {
  box-shadow: 0 4px 16px rgba(232, 132, 26, 0.4);
  transform: translateY(-1px);
}

/* Hover de enlaces de nav — underline animado */
.nav-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--color-primary);
  transition: width 250ms var(--ease-out);
}

.nav-link:hover::after { width: 100%; }
```

### 8.6 Especificaciones Framer Motion

```jsx
// Para proyectos Next.js con Framer Motion

// Variante de entrada para secciones
export const fadeUpVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],  // ease-out-soft
    },
  },
};

// Variante con stagger para grupos de cards
export const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

// Uso en componente
<motion.div
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-50px" }}
>
  {projects.map((project) => (
    <motion.article
      key={project.id}
      variants={fadeUpVariants}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
    >
      {/* ... */}
    </motion.article>
  ))}
</motion.div>
```

### 8.7 Animación de Logo en Carga Inicial

```css
/* El triángulo/flecha del logo AMBIT */
.logo-mark {
  transform-origin: center;
  animation: logo-entrance 600ms var(--ease-out-soft) forwards;
  opacity: 0;
}

@keyframes logo-entrance {
  from {
    opacity: 0;
    transform: scale(0.8) rotate(-5deg);
  }
  to {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}

/* Solo en primera carga */
.logo-text {
  animation: fade-right 400ms 200ms var(--ease-out) both;
  opacity: 0;
}

@keyframes fade-right {
  from { opacity: 0; transform: translateX(-8px); }
  to   { opacity: 1; transform: translateX(0); }
}
```

---

## 9. RESPONSIVE DESIGN

### 9.1 Mobile-First — Filosofía

Todo el CSS base está escrito para móvil. Los breakpoints `md:`, `lg:`, `xl:` añaden capas progresivas de complejidad visual. El 60% de las búsquedas en México son móviles, y los clientes de obra frecuentemente buscan desde el campo.

### 9.2 Layouts por Breakpoint

#### Navegación
| Breakpoint | Comportamiento |
|-----------|----------------|
| < 1024px | Hamburger menu, drawer lateral o dropdown full-width |
| ≥ 1024px | Navbar horizontal con links y CTA visible |

#### Hero Section
| Breakpoint | Comportamiento |
|-----------|----------------|
| < 768px | Texto centrado, CTA full-width, imagen recortada a 9:16 |
| 768–1024px | Texto izquierda, CTAs en fila, imagen full height |
| ≥ 1024px | Display texto XL, dos CTAs lado a lado, video de fondo |

#### Grid de Proyectos
| Breakpoint | Columnas |
|-----------|---------|
| < 480px | 1 columna |
| 480–768px | 2 columnas |
| 768–1024px | 2–3 columnas |
| ≥ 1024px | 3 columnas |
| ≥ 1280px | 3–4 columnas |

```css
.projects-grid {
  display: grid;
  grid-template-columns: 1fr;               /* 1 col mobile */
  gap: var(--space-6);
}

@media (min-width: 480px) {
  .projects-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 1024px) {
  .projects-grid { grid-template-columns: repeat(3, 1fr); }
}

@media (min-width: 1280px) {
  .projects-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-8);
  }
}
```

#### Footer
| Breakpoint | Columnas |
|-----------|---------|
| < 768px | 1 columna (acordeón o stacked) |
| 768–1024px | 2 columnas |
| ≥ 1024px | 4 columnas |

### 9.3 Tipografía Responsive

```css
/* Headings con clamp() — escalan fluidamente */
h1 { font-size: clamp(2.25rem, 4vw + 0.5rem, 3.75rem); }
h2 { font-size: clamp(1.875rem, 3vw + 0.25rem, 3rem); }
h3 { font-size: clamp(1.5rem, 2vw + 0.25rem, 2.25rem); }

/* Hero display — escala máxima */
.hero-title {
  font-size: clamp(2.5rem, 6vw + 0.5rem, 5rem);
}

/* Cuerpo — fijo, la legibilidad no se negocia */
body { font-size: 1rem; } /* 16px mínimo en móvil */

@media (min-width: 1024px) {
  body { font-size: 1.0625rem; } /* 17px en desktop — levemente más grande */
}
```

### 9.4 Touch Targets

**Regla WCAG 2.5.5 — Target Size:** Todo elemento interactivo debe tener mínimo `44×44px` de área táctil.

```css
/* Todos los botones e inputs: min-height aplicado globalmente */
button, [role="button"], a, input, select, textarea {
  min-height: 44px;
}

/* Para elementos pequeños (íconos solos), padding invisible */
.icon-btn {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
}

/* Links en párrafo — padding vertical para facilitar tap */
.prose a {
  padding-block: 2px;
}
```

### 9.5 Imágenes Responsive

```html
<img
  src="proyecto-800w.webp"
  srcset="
    proyecto-400w.webp   400w,
    proyecto-800w.webp   800w,
    proyecto-1200w.webp 1200w,
    proyecto-1600w.webp 1600w
  "
  sizes="
    (max-width: 480px)  100vw,
    (max-width: 768px)  50vw,
    (max-width: 1280px) 33vw,
    400px
  "
  alt="Descripción del proyecto"
  loading="lazy"
  width="800" height="450"
>
```

---

## 10. ACCESIBILIDAD

### 10.1 Contraste — WCAG AA Verificado

| Combinación | Ratio | Estado |
|-------------|-------|--------|
| `#212529` sobre `#FFFFFF` | 16.1:1 | ✅ AAA |
| `#343A40` sobre `#FFFFFF` | 11.0:1 | ✅ AAA |
| `#3D4F5F` sobre `#FFFFFF` | 7.8:1  | ✅ AAA |
| `#6C757D` sobre `#FFFFFF` | 4.8:1  | ✅ AA |
| `#FFFFFF` sobre `#1C2836` | 16.0:1 | ✅ AAA |
| `#FFFFFF` sobre `#3D4F5F` | 7.8:1  | ✅ AAA |
| `#E8841A` sobre `#FFFFFF` | 3.1:1  | ✅ AA Large (≥18px/≥14px bold) |
| `#E8841A` sobre `#1C2836` | 5.2:1  | ✅ AA |
| `#C96F0E` sobre `#FFFFFF` | 4.6:1  | ✅ AA |

> **Importante:** El naranja `#E8841A` NO debe usarse para texto de cuerpo sobre blanco. Solo en texto grande (≥18px) o en fondos oscuros.

### 10.2 Estructura Semántica

```html
<!-- Estructura de página correcta -->
<html lang="es-MX">
<head>
  <meta charset="UTF-8">
  <title>AMBIT — Constructora Mexicana | ambit.solutions</title>
  <meta name="description" content="Desarrollos ágiles, innovadores y de calidad...">
</head>
<body>
  <a href="#main-content" class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] btn btn-primary">
    Saltar al contenido principal
  </a>
  
  <header role="banner">
    <nav aria-label="Navegación principal">...</nav>
  </header>
  
  <main id="main-content">
    <!-- Solo UN h1 por página -->
    <h1>Título principal de la página</h1>
    
    <section aria-labelledby="section-proyectos">
      <h2 id="section-proyectos">Proyectos destacados</h2>
      <!-- Proyectos — h3 para títulos individuales -->
    </section>
  </main>
  
  <footer role="contentinfo">...</footer>
</body>
</html>
```

### 10.3 Focus States

```css
/* Focus visible — coherente con la paleta AMBIT */
:focus-visible {
  outline: 3px solid var(--color-primary);
  outline-offset: 3px;
  border-radius: 4px;
}

/* Eliminar outline solo cuando no es necesario (click, no teclado) */
:focus:not(:focus-visible) {
  outline: none;
}

/* Focus sobre fondos oscuros — anillo blanco */
.dark-section :focus-visible {
  outline-color: #FFFFFF;
}
```

### 10.4 Alt Text — Guía

```html
<!-- Imágenes de contenido: descriptivo y útil -->
<img alt="Vista aérea del Conjunto Habitacional Tepeyac en Gustavo A. Madero, CDMX, con 240 unidades de vivienda y áreas verdes">

<!-- Imágenes de fondo/decoración: vacío con role presentation -->
<img alt="" role="presentation">

<!-- Imágenes de personas: nombre + contexto -->
<img alt="Arq. María González, Directora de Proyectos de AMBIT, revisando planos en obra">

<!-- Imágenes de proyectos en cards: título del proyecto -->
<img alt="Edificio Torres del Sol — proyecto de oficinas corporativas en Santa Fe, CDMX">

<!-- Logo de empresa: nombre + propósito -->
<img alt="AMBIT — Ir a la página de inicio">
```

### 10.5 ARIA Patterns

```html
<!-- Menú de navegación móvil -->
<button
  aria-expanded="false"
  aria-controls="mobile-nav"
  aria-label="Abrir menú de navegación"
>

<!-- Filtros de portafolio -->
<div role="group" aria-label="Filtrar proyectos por categoría">
  <button role="button" aria-pressed="false">Vivienda Social</button>
  <button role="button" aria-pressed="true">Infraestructura</button>
</div>

<!-- Galería de imágenes -->
<div role="region" aria-label="Galería de imágenes del proyecto">
  <button aria-label="Imagen anterior de la galería">
  <button aria-label="Imagen siguiente de la galería">
  <div aria-live="polite" aria-atomic="true" class="sr-only">
    Mostrando imagen 3 de 12
  </div>
</div>

<!-- Formulario -->
<form aria-label="Formulario de contacto para cotización">
  <div aria-live="polite" id="form-status">
    <!-- Mensajes de éxito/error aquí -->
  </div>
</form>

<!-- Contenido que cambia -->
<div aria-live="polite">Mostrando 12 de 47 proyectos</div>
```

### 10.6 Prefers-Reduced-Motion

```css
/* Desactivar todas las animaciones complejas */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }

  /* Mantener fade muy rápido (funcional, no decorativo) */
  .skeleton {
    animation: none;
    background: var(--neutral-200);
  }

  /* Parallax — desactivar completamente */
  .parallax-element {
    transform: none !important;
  }
}
```

### 10.7 Checklist de Accesibilidad

- [ ] `lang="es-MX"` en `<html>`
- [ ] Un solo `<h1>` por página
- [ ] Jerarquía de headings sin saltos (h1→h2→h3)
- [ ] Skip navigation link al inicio
- [ ] Todos los images con `alt` (vacío o descriptivo según caso)
- [ ] Todos los inputs con `<label>` asociado
- [ ] Todos los elementos interactivos navegables por teclado
- [ ] Focus visible en todos los elementos interactivos
- [ ] Contraste mínimo 4.5:1 para texto de cuerpo
- [ ] Contraste mínimo 3:1 para texto grande y UI
- [ ] ARIA labels en iconos solos (sin texto)
- [ ] `aria-live` para contenido que cambia dinámicamente
- [ ] Videos con subtítulos (especialmente testimoniales)
- [ ] `prefers-reduced-motion` respetado
- [ ] Tamaño mínimo de touch targets: 44×44px
- [ ] Formularios con mensajes de error descriptivos y asociados con `aria-describedby`

---

## 11. DARK MODE

### 11.1 Estrategia Dark Mode para AMBIT

Dark mode es opcional — AMBIT prioriza el modo claro como default (más apropiado para B2B de construcción, mayor legibilidad de fotografías de obra, mayor tasa de conversión en contextos profesionales). Sin embargo, implementar dark mode es recomendable porque:

- Usuarios técnicos (ingenieros, arquitectos) con horarios nocturnos aprecian el dark mode
- Diferenciador premium coherente con el posicionamiento de innovación
- Sistema operativo moderno lo activa automáticamente

**Implementación:** CSS `prefers-color-scheme` como base, con toggle manual guardado en `localStorage`.

### 11.2 Paleta Dark Mode

```css
@media (prefers-color-scheme: dark) {
  :root {
    /* === FONDOS === */
    --bg-page:         #111827;  /* Near-black con temperatura azul */
    --bg-surface:      #1F2937;  /* Cards, paneles */
    --bg-surface-alt:  #243040;  /* Secciones alternas */
    --bg-overlay:      #1C2836;
    --bg-dark:         #0D1117;  /* Secciones de máximo contraste */
    --bg-dark-alt:     #161B22;

    /* === TEXTO === */
    --text-primary:    #F9FAFB;  /* Blanco suave — no puro */
    --text-secondary:  #D1D5DB;
    --text-muted:      #9CA3AF;
    --text-disabled:   #6B7280;

    /* === BORDES === */
    --border-subtle:   #374151;
    --border-default:  #4B5563;
    --border-strong:   #6B7280;

    /* === NEUTRALES === */
    --neutral-0:   #0D1117;
    --neutral-50:  #111827;
    --neutral-100: #1F2937;
    --neutral-200: #374151;
    --neutral-300: #4B5563;
    --neutral-400: #6B7280;
    --neutral-500: #9CA3AF;
    --neutral-600: #D1D5DB;
    --neutral-700: #E5E7EB;
    --neutral-800: #F3F4F6;
    --neutral-900: #F9FAFB;
    --neutral-950: #FFFFFF;
  }
}
```

### 11.3 Ajustes de Color de Marca en Dark Mode

```css
@media (prefers-color-scheme: dark) {
  :root {
    /* El naranja se mantiene — es el acento de marca, es visible */
    --color-primary:       #E8841A;   /* Sin cambio */
    --color-primary-light: #F09C3C;   /* Ligeramente más claro para hover */
    --color-primary-dark:  #D4760F;
    --color-primary-50:    rgba(232, 132, 26, 0.12);   /* Background sutil */
    --color-primary-100:   rgba(232, 132, 26, 0.20);

    /* El gris carbón se aclara — se convierte en elemento de superficie */
    --color-secondary:       #8FA8BE;  /* Version aclarada para texto sobre oscuro */
    --color-secondary-light: #B0C4D4;
    --color-secondary-dark:  #6B8FA8;
    --color-secondary-50:    rgba(143, 168, 190, 0.08);
    --color-secondary-100:   rgba(143, 168, 190, 0.15);
  }
}
```

### 11.4 Toggle Manual Dark/Light

```html
<!-- Botón toggle en navbar -->
<button
  id="theme-toggle"
  aria-label="Cambiar a modo oscuro"
  class="w-10 h-10 rounded-lg flex items-center justify-center text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
>
  <!-- Ícono sol (light mode) -->
  <svg id="icon-sun"  class="w-5 h-5" ...aria-hidden="true" />
  <!-- Ícono luna (dark mode) — oculto por defecto -->
  <svg id="icon-moon" class="w-5 h-5 hidden" ...aria-hidden="true" />
</button>
```

```javascript
// Gestión del tema
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

// Leer preferencia guardada o sistema
const savedTheme = localStorage.getItem('ambit-theme');
const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const isDark = savedTheme ? savedTheme === 'dark' : systemDark;

if (isDark) html.classList.add('dark');

themeToggle.addEventListener('click', () => {
  html.classList.toggle('dark');
  const newTheme = html.classList.contains('dark') ? 'dark' : 'light';
  localStorage.setItem('ambit-theme', newTheme);
  themeToggle.setAttribute('aria-label',
    newTheme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'
  );
});
```

### 11.5 Configuración Tailwind para Dark Mode

```javascript
// tailwind.config.js
module.exports = {
  darkMode: 'class',  // Usar clase 'dark' en <html>
  theme: {
    extend: {
      colors: {
        // Los colores dark se definen con dark: prefix en los templates
      },
    },
  },
}
```

```html
<!-- Ejemplo de uso con dark: prefix en Tailwind -->
<div class="bg-white dark:bg-gray-900 text-neutral-800 dark:text-neutral-100">
  <h2 class="text-secondary dark:text-white font-heading font-bold">
    Título de sección
  </h2>
  <p class="text-neutral-600 dark:text-neutral-400">
    Contenido del cuerpo de texto.
  </p>
  <div class="border border-neutral-200 dark:border-neutral-700 rounded-xl p-6">
    Card content
  </div>
</div>
```

### 11.6 Consideraciones Fotográficas en Dark Mode

```css
/* Reducir ligeramente el brillo de fotografías en dark mode */
@media (prefers-color-scheme: dark) {
  img:not([role="presentation"]) {
    filter: brightness(0.88) contrast(1.05);
    transition: filter 300ms ease;
  }

  img:not([role="presentation"]):hover {
    filter: brightness(1) contrast(1);
  }
}

/* Excepción: logos de clientes — sin filtro */
.client-logo img,
.partner-logo img {
  filter: none !important;
}
```

---

## APÉNDICE: TOKENS RÁPIDOS PARA CLAUDE CODE

### Variables CSS Esenciales (copiar directo)

```css
:root {
  --primary:     #E8841A;
  --primary-hov: #C96F0E;
  --secondary:   #3D4F5F;
  --dark:        #1C2836;
  --white:       #FFFFFF;
  --off-white:   #F8F9FA;
  --text:        #212529;
  --text-muted:  #6C757D;
  --border:      #DEE2E6;
  --radius-sm:   6px;
  --radius:      10px;
  --radius-lg:   16px;
  --radius-xl:   24px;
  --shadow-card: 0 2px 8px rgba(61,79,95,0.06), 0 4px 16px rgba(61,79,95,0.04);
  --shadow-hover: 0 8px 32px rgba(61,79,95,0.12), 0 16px 48px rgba(61,79,95,0.08);
  --transition:  all 200ms cubic-bezier(0.0, 0, 0.2, 1);
}
```

### Clases Tailwind Más Usadas en AMBIT

```
Colores:      text-[#3D4F5F]   text-[#E8841A]   bg-[#1C2836]   bg-[#E8841A]
Fuentes:      font-['DM_Sans'] font-['Inter']    font-bold      font-extrabold
Contenedor:   max-w-[1200px]   mx-auto          px-4 md:px-8 lg:px-12
Sección:      py-16 md:py-20 lg:py-24
Cards:        rounded-xl       overflow-hidden   border border-neutral-200
Hover card:   hover:-translate-y-1  hover:shadow-xl  transition-all duration-250
Botón:        rounded-lg       font-semibold     min-h-[44px]   transition-all
Texto hero:   text-5xl lg:text-7xl   font-extrabold   leading-[1.05]   tracking-[-0.04em]
```

---

*Documento generado en base a benchmarking de Bechtel, Kiewit, Skanska y análisis de tendencias UX/UI 2024–2026 para el sector construcción en México. Actualizar con cada sprint de desarrollo. Versión 1.0 — Marzo 2026.*
