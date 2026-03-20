# PRD — Sitio Web Corporativo ambit.solutions
## GRUPO PROMOTOR AMBIT, S.A. DE C.V.

> **Documento:** Product Requirements Document (PRD) v1.0  
> **Fecha:** 19 de marzo de 2026  
> **Dominio objetivo:** ambit.solutions  
> **Autor:** Área de Producto / Ernesto Talamantes  
> **Estado:** Listo para desarrollo  

---

## Tabla de Contenidos

1. [Resumen Ejecutivo](#1-resumen-ejecutivo)
2. [Problem Statement](#2-problem-statement)
3. [Objetivos](#3-objetivos)
4. [Audiencias Objetivo](#4-audiencias-objetivo)
5. [User Stories](#5-user-stories)
6. [Arquitectura de Información / Sitemap](#6-arquitectura-de-información--sitemap)
7. [Requisitos Funcionales](#7-requisitos-funcionales)
8. [Requisitos No Funcionales](#8-requisitos-no-funcionales)
9. [Stack Tecnológico Recomendado](#9-stack-tecnológico-recomendado)
10. [Criterios de Éxito](#10-criterios-de-éxito)
11. [Timeline y Fases](#11-timeline-y-fases)
12. [Riesgos y Mitigaciones](#12-riesgos-y-mitigaciones)
13. [Open Questions](#13-open-questions)

---

## 1. Resumen Ejecutivo

### ¿Qué es este proyecto?

El sitio web de `ambit.solutions` es la presencia digital corporativa de **GRUPO PROMOTOR AMBIT, S.A. DE C.V.**, una empresa mexicana de ingeniería y construcción con más de una década de experiencia en proyectos industriales, de infraestructura y de vivienda social. El sitio servirá como canal de generación de leads B2B, herramienta de credibilidad ante clientes corporativos e instituciones gubernamentales, y vitrina digital del portafolio de proyectos de la empresa.

### ¿Para quién es?

El sitio está dirigido principalmente a cuatro segmentos:
1. **Clientes corporativos e industriales** — empresas como Nestlé, CNI Industries o Gomas Go More que buscan un socio constructor certificado para proyectos de nave industrial, planta de producción o mantenimiento corporativo.
2. **Entidades gubernamentales y organismos de vivienda** — CONAVI, SACMEX, INFONAVIT y dependencias estatales que buscan contratistas calificados para licitaciones públicas.
3. **Subcontratistas y proveedores** — empresas que desean integrarse a la cadena de suministro de AMBIT.
4. **Talento potencial** — ingenieros, arquitectos y técnicos que buscan oportunidades de desarrollo profesional en proyectos de escala nacional.

### ¿Por qué ahora?

AMBIT opera hoy con contratos activos de clientes de primer nivel (Nestlé México, CONAVI, SACMEX, aeropuertos mexicanos) y no tiene presencia digital. Esta brecha crea tres riesgos inmediatos:

1. **Pérdida de oportunidades de licitación** — las dependencias gubernamentales verifican la existencia digital de contratistas antes de incluirlos en convocatorias.
2. **Fricción en el ciclo de ventas corporativo** — un prospecto corporativo que no puede verificar el historial de AMBIT en línea genera desconfianza y alarga el proceso de decisión.
3. **Ventaja competitiva cedida** — las constructoras medianas mexicanas que adoptaron digital primero (aunque sea en Wix) ya tienen ventaja de indexación y credibilidad percibida. El costo de recuperación aumenta cada mes.

La inversión ahora, cuando AMBIT cuenta con un portafolio sólido y diversificado, maximiza el retorno: hay historias de proyectos reales que contar, y esas historias son activos de ventas.

---

## 2. Problem Statement

### 2.1 Problema Central

**AMBIT no existe digitalmente.** Una búsqueda de "Grupo Promotor Ambit construcción México" no devuelve presencia propia. Un prospecto que recibe la presentación corporativa de AMBIT y trata de verificarla en línea encuentra un dominio vacío (`ambit.solutions`) y ningún resultado relevante en Google. Este vacío digital no es neutral — activamente daña la credibilidad, especialmente frente a clientes corporativos con procesos de due diligence.

### 2.2 El Contexto Competitivo

El análisis de 10 constructoras mexicanas (referencia: `research/constructoras-mexicanas.md`) revela una bifurcación clara:

| Segmento | Presencia digital | Tecnología típica |
|---|---|---|
| Grandes corporativas (ICA, Cemex, Grupo Carso) | Alta — sitios robustos con secciones de inversionistas, proyectos y sustentabilidad | CMS propio, WordPress Enterprise, React/Next.js |
| Medianas constructoras (Grupo GP, Prodemex, CAABSA) | Baja-Media — presencia básica, desactualizada, o construida en Wix | Wix, Bootstrap estático, páginas abandonadas |
| Constructoras de nicho con clientes corporativos | Vacío — el segmento donde opera AMBIT es el de mayor oportunidad digital no capturada | — |

**AMBIT opera con clientes del tier 1** (Nestlé, CONAVI, aeropuertos nacionales) pero tiene presencia digital del tier 3. Esta disonancia es la oportunidad más valiosa a resolver.

### 2.3 El Referente Global

El análisis de 10 constructoras internacionales (referencia: `research/constructoras-internacionales.md`) muestra que las empresas líderes — Bechtel, Kiewit, Skanska — tratan su sitio web como un **activo estratégico de marca y ventas**, no como un directorio. Sus características comunes:

- Hero con video cinematic y headline aspiracional de 3–5 palabras
- Portafolio filtrable como centro gravitacional del sitio
- Mensajes centrados en el impacto para el cliente, no en la lista de servicios
- Estadísticas de escala prominentes (años, proyectos, países)
- Sección de sustentabilidad/RSE como credencial, no como afterthought

**La oportunidad para AMBIT:** diseñar desde el inicio con los estándares globales, saltando la etapa de "Wix básico" directamente a presencia de primer nivel. El tamaño de empresa no tiene que dictar la calidad digital.

### 2.4 Impacto Cuantificable del Problema

- **Ciclo de ventas más largo:** Un cliente que no puede verificar AMBIT en línea requiere más reuniones presenciales y materiales adicionales, alargando el ciclo en estimado 20–30%.
- **Exclusión de licitaciones digitales:** Plataformas como CompraNet y portales estatales favorecen contratistas con presencia digital verificable (RFC, dirección, contacto, portafolio).
- **Reclutamiento limitado:** Sin presencia digital, AMBIT solo accede a talento por referidos, perdiendo candidatos que buscan empleadores en LinkedIn y Google.

---

## 3. Objetivos

### 3.1 Objetivos de Negocio

| # | Objetivo | Métrica de éxito | Plazo |
|---|---|---|---|
| N1 | Generar leads B2B calificados de clientes industriales y gubernamentales | ≥ 5 leads calificados/mes al final del mes 6 | 6 meses post-lanzamiento |
| N2 | Establecer credibilidad digital para apoyar procesos de licitación | Presencia verificable en Google para búsquedas de marca | 30 días post-lanzamiento |
| N3 | Posicionar a AMBIT como constructora de primer nivel en Google México | Top 10 para keywords de nicho (construcción industrial CDMX, constructora ISO México) | 12 meses post-lanzamiento |
| N4 | Reducir el tiempo del ciclo de ventas al eliminar la fricción de verificación digital | Reducción del 20% en touchpoints pre-contrato reportados por equipo comercial | 9 meses post-lanzamiento |
| N5 | Atraer talento de ingeniería y construcción | ≥ 3 postulaciones de calidad/mes a través del sitio | 6 meses post-lanzamiento |

### 3.2 Objetivos de Usuario

| # | Tipo de usuario | Objetivo | Indicador de logro |
|---|---|---|---|
| U1 | Cliente corporativo (tipo Nestlé) | Verificar credenciales, portafolio y confiabilidad de AMBIT en < 5 minutos | Tiempo en sitio > 3 min, visita a página de proyectos industriales |
| U2 | Comprador gubernamental | Encontrar información de licitación: RFC, dirección, certificaciones, portafolio de obra pública | Visita a sección "Para Gobierno" o descarga de ficha técnica |
| U3 | Subcontratista/proveedor | Entender sectores de AMBIT y vías de contacto para unirse a su cadena | Contacto iniciado vía formulario de proveedores |
| U4 | Ingeniero/arquitecto buscando empleo | Conocer la cultura, proyectos y oportunidades laborales de AMBIT | Aplicación enviada o contacto iniciado vía sección de Talento |
| U5 | Prospecto general | Contactar a AMBIT con información de proyecto en < 2 minutos | Formulario de contacto completado |

### 3.3 KPIs Medibles (primeros 12 meses)

```
ADQUISICIÓN
├── Sesiones orgánicas: 0 → 500/mes (mes 6), 1,500/mes (mes 12)
├── Posición promedio Google Search: < 30 para keywords de marca
├── Backlinks obtenidos: ≥ 10 dominios de autoridad (clientes, cámaras, medios)

ENGAGEMENT
├── Tasa de rebote: < 55%
├── Duración promedio de sesión: > 2:30 min
├── Páginas vistas por sesión: > 3

CONVERSIÓN
├── Tasa de conversión leads/visitas: ≥ 2%
├── Formularios completados/mes: ≥ 10 (mes 3), ≥ 25 (mes 12)
├── Clics en WhatsApp/teléfono: ≥ 15/mes

TÉCNICA (Core Web Vitals)
├── LCP: < 2.5 segundos
├── INP: < 200 ms
├── CLS: < 0.1
```

---

## 4. Audiencias Objetivo

### 4.1 Perfil de Audiencias

#### Audiencia 1: Cliente Corporativo / Industrial

| Campo | Descripción |
|---|---|
| **Arquetipo** | Director de Operaciones, Gerente de Proyectos, Director de Expansión en empresa manufacturera o multinacional |
| **Empresas representativas** | Nestlé, Bimbo, FEMSA, Lala, grupos industriales transnacionales con plantas en México |
| **Necesidad principal** | Constructor confiable, certificado, con experiencia en planta alimenticia/industrial, que entienda normas internacionales y entregue en tiempo |
| **Puntos de dolor** | Desconfianza en constructoras sin historial verificable; riesgo de retrasos; cumplimiento normativo (ISO, NOM) |
| **Cómo llega al sitio** | Referido de contacto, búsqueda "constructora industrial México ISO certificada", Google Maps |
| **Qué busca en el sitio** | Portafolio de proyectos industriales reales, certificaciones, clientes de referencia, datos de contacto directos |
| **Señal de conversión** | Completar formulario "Solicitar propuesta" o llamar directo al número comercial |
| **Idioma** | Español principalmente; inglés para contactos de corporativos transnacionales |

#### Audiencia 2: Entidad Gubernamental / Licitaciones

| Campo | Descripción |
|---|---|
| **Arquetipo** | Subdirector de Infraestructura en municipio/estado, funcionario de CONAVI, INFONAVIT, SACMEX u organismo equivalente |
| **Dependencias representativas** | CONAVI, SACMEX, Secretaría de Infraestructura estatal, Aeropuertos y Servicios Auxiliares (ASA) |
| **Necesidad principal** | Verificar que AMBIT existe, está activa, tiene experiencia en obra pública de la escala requerida y cumple requisitos de licitación |
| **Puntos de dolor** | Riesgo de contratistas fantasma; exigencias de documentación; necesidad de validar capacidad operativa previa |
| **Cómo llega al sitio** | Búsqueda directa de marca en Google, referencia en expediente de licitación previa |
| **Qué busca en el sitio** | RFC, dirección fiscal verificable, portafolio de obra pública (CONAVI, SACMEX, aeropuertos), certificaciones, contacto oficial |
| **Señal de conversión** | Descarga de ficha de empresa, llamada telefónica, contacto por email oficial |
| **Idioma** | Español únicamente |

#### Audiencia 3: Subcontratistas y Proveedores

| Campo | Descripción |
|---|---|
| **Arquetipo** | Dueño de empresa de instalación eléctrica, plomería, estructuras metálicas, concreto, logística o materiales |
| **Necesidad principal** | Identificar si AMBIT es un socio confiable para trabajar, entender sectores activos y cómo contactar para ser proveedor |
| **Cómo llega al sitio** | Referido de alguien que trabaja con AMBIT, búsqueda "constructora buscando subcontratistas México" |
| **Qué busca en el sitio** | Sectores activos, geografía de operación, valores de la empresa, vía de contacto para propuestas de proveedor |
| **Señal de conversión** | Formulario de "Unirse como proveedor" o contacto directo |

#### Audiencia 4: Talento Potencial

| Campo | Descripción |
|---|---|
| **Arquetipo** | Ingeniero civil o arquitecto con 2–10 años de experiencia, residente de obra, técnico en sistemas constructivos industrializados |
| **Necesidad principal** | Evaluar si AMBIT es un lugar donde crecer profesionalmente en proyectos de escala real |
| **Cómo llega al sitio** | LinkedIn, bolsa de trabajo, referido interno, búsqueda "empleo constructora México proyectos industriales" |
| **Qué busca en el sitio** | Proyectos activos (valida que hay trabajo real), cultura de la empresa, vacantes, forma de postular |
| **Señal de conversión** | Envío de CV o postulación a vacante específica |

---

## 5. User Stories

### 5.1 Cliente Corporativo / Industrial

**US-01**  
Como Director de Proyectos en una empresa manufacturera multinacional,  
quiero ver en 60 segundos si AMBIT ha construido plantas de producción similares a las que necesito,  
para decidir si vale la pena abrir una conversación comercial sin gastar tiempo en una reunión.

**US-02**  
Como Gerente de Expansión en una empresa de alimentos,  
quiero ver fotografías y datos técnicos de la planta de Nestlé Coatepec que AMBIT construyó,  
para evaluar la escala y calidad de los entregables antes de solicitarles una propuesta.

**US-03**  
Como Director de Operaciones de una empresa con normas internacionales (ISO, HACCP, FDA),  
quiero confirmar que AMBIT tiene certificaciones reconocidas (ISO 9000, Six Sigma) aplicadas en producción,  
para no asumir riesgo normativo al contratarlos.

**US-04**  
Como ejecutivo de una empresa con sedes en varias ciudades de México,  
quiero saber en qué estados y regiones AMBIT tiene operaciones activas,  
para evaluar si pueden atender proyectos en más de una locación simultáneamente.

**US-05**  
Como tomador de decisiones en una empresa donde el proceso de aprobación de proveedores tarda semanas,  
quiero descargar una ficha ejecutiva de AMBIT con datos de empresa, certificaciones y portafolio,  
para acelerar el proceso de alta de proveedor en mi sistema.

### 5.2 Entidad Gubernamental / Licitaciones

**US-06**  
Como funcionario de CONAVI revisando un expediente de contratista,  
quiero verificar que AMBIT tiene experiencia previa en programas de vivienda social de escala equivalente,  
para confirmar su idoneidad técnica antes de incluirlos en la convocatoria.

**US-07**  
Como subdirector de infraestructura en una alcaldía del CDMX,  
quiero ver qué proyectos ha hecho AMBIT para SACMEX u otras dependencias del gobierno,  
para tener respaldo ante mi jefe al momento de recomendar a este contratista.

**US-08**  
Como oficial de adquisiciones en un aeropuerto regional,  
quiero encontrar fácilmente el RFC, dirección fiscal, teléfono oficial y email de AMBIT,  
para completar el expediente de proveedor sin necesidad de llamar a solicitar esos datos.

**US-09**  
Como responsable de un programa de infraestructura educativa,  
quiero ver el caso de la escuela Piedra Hincada (13 aulas en 24 días),  
para entender si AMBIT puede ejecutar bajo presión de tiempo como lo requieren nuestros proyectos.

### 5.3 Subcontratistas y Proveedores

**US-10**  
Como dueño de una empresa de estructura metálica en Querétaro,  
quiero entender en qué sectores y geografías opera AMBIT activamente,  
para evaluar si tiene sentido proponerles ser proveedor estratégico.

**US-11**  
Como proveedor de paneles prefabricados en Saltillo,  
quiero saber si AMBIT usa sistemas constructivos industrializados similares a los que fabrico,  
para identificar una posible alineación de capacidades antes de hacer contacto.

**US-12**  
Como contratista especializado en instalaciones eléctricas industriales,  
quiero encontrar una vía de contacto clara para proponer mis servicios como subcontratista,  
para no perder tiempo buscando a quién escribirle o si tienen un proceso formal.

### 5.4 Talento Potencial

**US-13**  
Como ingeniero civil con 5 años de experiencia en proyectos residenciales,  
quiero ver qué tipo de proyectos ejecuta AMBIT actualmente (escala, sectores, ubicaciones),  
para decidir si el salto a una constructora de obra industrial y de infraestructura vale la pena.

**US-14**  
Como arquitecta recién egresada,  
quiero entender los valores y la cultura de AMBIT antes de postular,  
para saber si la empresa tiene un ambiente de trabajo que valore la calidad técnica y la innovación.

**US-15**  
Como residente de obra en construcción de vivienda,  
quiero ver si AMBIT tiene proyectos activos del programa CONAVI Bienestar y vacantes en esas obras,  
para postularme a una posición donde pueda aplicar mi experiencia en vivienda social.

**US-16**  
Como cualquier visitante llegado desde un anuncio o referido,  
quiero entender en menos de 10 segundos qué hace AMBIT, para quién y por qué son confiables,  
para decidir si sigo explorando el sitio o me voy.

---

## 6. Arquitectura de Información / Sitemap

### 6.1 Principios de Arquitectura

Basado en el análisis de mejores prácticas (Bechtel, Kiewit, Skanska) y el contexto de las audiencias de AMBIT:

1. **Navegación centrada en el cliente, no en la estructura corporativa** — Los ítems del menú deben responder a "¿qué estoy buscando?" no "¿cómo está organizada la empresa?".
2. **5 ítems máximo en menú principal** — La investigación muestra que las mejores constructoras usan 5–6 ítems de alto nivel. Más ítems incrementan la carga cognitiva y diluyen el foco.
3. **Proyectos como el centro gravitacional** — El portafolio es el activo de ventas más potente. Debe ser accesible en máximo 2 clics desde cualquier punto del sitio.
4. **CTA consistente** — Una sola llamada principal: "Solicitar propuesta" o "Hablemos de tu proyecto". Presente en todas las páginas, nunca enterrada.
5. **Bilingüe desde el diseño** — La estructura de URL soporta `/es/` y `/en/` desde el inicio.

### 6.2 Sitemap Completo

```
ambit.solutions/
│
├── / (Inicio / Home)
│   ├── Hero cinematic (video o foto editorial + tagline)
│   ├── KPIs de escala (proyectos, años, sectores, estados)
│   ├── Sectores destacados (Industria / Infraestructura / Vivienda)
│   ├── Proyectos destacados (3–4 tarjetas)
│   ├── Cadena de valor (6 etapas: Producción → Entrega → Seguridad)
│   ├── Clientes de referencia (logos: Nestlé, CONAVI, SACMEX, aeropuertos)
│   ├── Pilares (Sustentabilidad, RSE, Eficiencia, Excelencia)
│   └── CTA principal + datos de contacto rápido
│
├── /proyectos (Proyectos / Projects)
│   ├── Vista general con filtros:
│   │   ├── Por sector: Industria | Infraestructura | Vivienda
│   │   ├── Por cliente: Nestlé | CONAVI | SACMEX | Aeropuertos | Otros
│   │   ├── Por estado: CDMX | Querétaro | Coahuila | Veracruz | Michoacán | Guanajuato | NL | Puebla
│   │   └── Por año
│   │
│   ├── /proyectos/industria/
│   │   ├── /cni-industries-arteaga-coahuila
│   │   ├── /intempo-sistemas-queretaro
│   │   ├── /gomas-go-more-nezahualcoyotl
│   │   ├── /nestle-xalapa-coatepec-veracruz
│   │   ├── /nestle-matalimones-veracruz
│   │   ├── /nestle-mantenimiento-cdmx
│   │   └── /basculas-braunker-sacmex
│   │
│   ├── /proyectos/infraestructura/
│   │   ├── /aeropuerto-silao-guanajuato
│   │   ├── /aeropuerto-merida-yucatan
│   │   ├── /aeropuerto-mexicali-baja-california
│   │   ├── /aeropuerto-zacatecas
│   │   └── /escuela-piedra-hincada-puebla
│   │
│   └── /proyectos/vivienda/
│       ├── /edificio-zacatecas-70
│       ├── /edificio-eje-central
│       ├── /edificio-santa-fe
│       ├── /condominio-guanajuato-165
│       ├── /edificio-luz-savinon
│       ├── /conavi-vista-hermosa-michoacan
│       ├── /conavi-coeneo-michoacan
│       ├── /conavi-tuxpan-michoacan
│       ├── /conavi-san-felipe-guanajuato
│       └── /conavi-santa-catarina-nuevo-leon
│
├── /servicios (Servicios / Services)
│   ├── Vista general (cadena de valor completa animada)
│   ├── /servicios/construccion-industrial
│   ├── /servicios/infraestructura
│   ├── /servicios/vivienda-social
│   ├── /servicios/supervision-y-control
│   └── /servicios/tecnologia-constructiva
│
├── /nosotros (Nosotros / About)
│   ├── Historia y misión
│   ├── Propuesta de valor
│   ├── Pilares y valores
│   ├── Empresa Socialmente Responsable (distinción)
│   ├── Plantas de producción (Querétaro y Saltillo)
│   ├── Certificaciones (ISO 9000, Six Sigma)
│   ├── Equipo directivo
│   └── /nosotros/sustentabilidad
│
├── /para-gobierno (Para Gobierno — audiencia específica)
│   ├── Portafolio de obra pública
│   ├── Experiencia CONAVI, SACMEX, aeropuertos
│   ├── Datos fiscales y documentación disponible
│   └── Contacto para licitaciones
│
├── /blog (Blog / Noticias) [P1 — Fase 2]
│   ├── Artículos por categoría
│   └── Casos de estudio en profundidad
│
├── /talento (Trabaja con Nosotros / Careers)
│   ├── Cultura y beneficios
│   ├── Proyectos activos (contexto de trabajo)
│   ├── Vacantes abiertas
│   └── Formulario de postulación / envío de CV
│
├── /proveedores (Proveedores / Suppliers) [P1 — Fase 2]
│   ├── Cómo ser proveedor de AMBIT
│   ├── Sectores con necesidad activa
│   └── Formulario de registro de proveedor
│
└── /contacto (Contacto / Contact)
    ├── Formulario de contacto segmentado por tipo de proyecto
    ├── Datos de la empresa (dirección, teléfono, emails)
    ├── Mapa de ubicación (San Ángel, CDMX)
    ├── Botón de WhatsApp directo
    └── Formulario de solicitud de propuesta
```

### 6.3 Navegación Principal (menú)

```
AMBIT [logo]    Proyectos    Servicios    Nosotros    Para Gobierno    Contacto    [ES | EN]
                                                                        [CTA: Solicitar Propuesta]
```

### 6.4 Footer

```
Columna 1: Logo + slogan + redes sociales
Columna 2: Proyectos (links por sector)
Columna 3: Empresa (Nosotros, Sustentabilidad, Talento, Proveedores)
Columna 4: Contacto (dirección, teléfono, email, WhatsApp)
Fila inferior: © 2026 GRUPO PROMOTOR AMBIT | RFC | Aviso de Privacidad | Términos
```

---

## 7. Requisitos Funcionales

### Clasificación de Prioridad

| Prioridad | Criterio | Descripción |
|---|---|---|
| **P0** | Must-Have | Sin esto, v1 no puede lanzar. Bloquea el objetivo mínimo del sitio. |
| **P1** | Should-Have | Importante para conversión y engagement. Se construye en Fase 2 (primeros 90 días post-lanzamiento). |
| **P2** | Could-Have | Alto valor pero no urgente. Roadmap de Fase 3 y más allá. |

---

### 7.1 P0 — Must Have (Versión 1 / MVP)

#### RF-001: Hero Cinematic con Impacto Visual

**Descripción:** La sección hero de la página de inicio debe cargar un video de fondo (loop, sin audio, optimizado en WebM/MP4) de proyectos reales de AMBIT o, en ausencia de video, una fotografía editorial de alta resolución. Sobre el fondo visual se superpone el tagline principal y el CTA.

**Criterios de aceptación:**
- [ ] Video de fondo en loop automático, silenciado por defecto
- [ ] Fallback a imagen estática si el video no carga (poster image)
- [ ] El video tiene dimensión mínima 1920×1080px
- [ ] Tagline visible sobre el video con contraste mínimo 4.5:1
- [ ] CTA principal ("Solicitar Propuesta") en primer viewport
- [ ] En dispositivos móviles, se muestra solo la imagen poster (no video) para no consumir datos del usuario
- [ ] Tiempo de carga del hero < 3 segundos en conexión 4G promedio México
- [ ] Video máximo 10MB en WebM; imagen poster < 250KB en WebP/AVIF

**Tagline propuesto:** "No solo construimos espacios. Construimos el futuro de México."

---

#### RF-002: Portafolio de Proyectos con Filtros

**Descripción:** Una galería paginada de todos los proyectos de AMBIT, filtrable por sector, cliente, ubicación geográfica y año. Cada proyecto tiene una ficha individual detallada.

**Criterios de aceptación:**
- [ ] Página de listado de proyectos con grid responsivo (3 columnas desktop, 2 tablet, 1 móvil)
- [ ] Filtros funcionales: por sector (Industria / Infraestructura / Vivienda), por estado, por cliente
- [ ] El filtrado no recarga la página (JavaScript client-side filtering o Astro view transitions)
- [ ] Cada tarjeta de proyecto muestra: fotografía, nombre, sector, ubicación, año
- [ ] Página individual por proyecto con: fotografía(s) o galería, descripción técnica, cliente, ubicación, alcance, métricas clave (m² construidos, plazo, etc.)
- [ ] URL semántica para cada proyecto (ej: `/proyectos/nestle-xalapa-veracruz`)
- [ ] Al menos 15 proyectos en el lanzamiento
- [ ] Schema markup `Project` y `LocalBusiness` en cada ficha

---

#### RF-003: Cadena de Valor Interactiva

**Descripción:** Visualización animada de las 6 etapas del proceso AMBIT: Producción → Logística → Proyecto e Ingeniería → Construcción → Supervisión y Entrega → Seguridad.

**Criterios de aceptación:**
- [ ] Representación visual horizontal (desktop) o vertical (móvil) de las 6 etapas
- [ ] Al hacer hover/click en cada etapa, se despliega descripción y diferenciador de AMBIT en esa fase
- [ ] Animación de entrada activada por scroll (Intersection Observer)
- [ ] Texto descriptivo para cada etapa (máximo 50 palabras por etapa)
- [ ] Conectores visuales entre etapas que refuerzan el concepto de "integración vertical"

---

#### RF-004: Sección de Contacto y Formulario Multi-Propósito

**Descripción:** Un formulario de contacto segmentado que captura la información relevante según el tipo de proyecto o consulta. Conectado a notificación por email al equipo comercial de AMBIT.

**Criterios de aceptación:**
- [ ] Formulario con campos: Nombre completo, Empresa, Cargo, Email, Teléfono, Tipo de proyecto (desplegable: Industrial / Infraestructura / Vivienda / Otro), Descripción del proyecto, Estado o ciudad del proyecto
- [ ] Validación de campos en tiempo real (inline validation)
- [ ] Al enviar: mensaje de confirmación visual + email automático al usuario + notificación a `grupoambit@gmail.com` y `ernesto@ambit.solutions`
- [ ] Protección anti-spam: honeypot field + rate limiting (no reCAPTCHA que bloquee usuarios legítimos)
- [ ] El formulario funciona sin JavaScript (SSR/formulario nativo con action server-side)
- [ ] Datos de empresa siempre visibles: teléfonos 55-56160991 / 5088-2162, dirección San Ángel CDMX, emails

---

#### RF-005: Integración de WhatsApp Business

**Descripción:** Botón flotante de WhatsApp visible en todas las páginas del sitio, que abre una conversación con mensaje predefinido según la página donde se encuentre el usuario.

**Criterios de aceptación:**
- [ ] Botón flotante esquina inferior derecha, visible en todas las páginas
- [ ] Al hacer clic, abre WhatsApp Web (desktop) o app WhatsApp (móvil) con mensaje predefinido
- [ ] Mensaje predefinido incluye referencia a la página: ej. "Hola, vi su proyecto de [nombre] en ambit.solutions y me interesa..."
- [ ] El número conectado es el número comercial de AMBIT
- [ ] El botón no obstruye el contenido principal (z-index correcto, margen desde elementos fijos del footer)
- [ ] Evento de tracking en Google Analytics al hacer clic

---

#### RF-006: Diseño Responsive y Mobile-First

**Descripción:** El sitio debe ser completamente funcional y estético en dispositivos móviles (smartphones y tablets). Dado que 55–65% del tráfico B2B en México proviene de dispositivos móviles, esto es P0.

**Criterios de aceptación:**
- [ ] Diseño mobile-first implementado con breakpoints: 375px (móvil), 768px (tablet), 1280px (desktop), 1920px (wide)
- [ ] Menú hamburguesa en móvil con navegación completa
- [ ] Formularios de contacto completamente usables en pantalla táctil (inputs de tamaño mínimo 44×44px)
- [ ] Galería de proyectos navegable con swipe en móvil
- [ ] Videos reemplazados por imagen poster en conexión lenta o preferencia de datos reducidos (`<video>` con `preload="none"` en móvil)
- [ ] Texto mínimo 16px en cuerpo; botones mínimo 44px de altura
- [ ] No hay elementos que se corten o se desbordan horizontalmente en 375px

---

#### RF-007: SEO Técnico Base

**Descripción:** El sitio debe estar técnicamente optimizado para indexación desde el día 1.

**Criterios de aceptación:**
- [ ] Meta title y meta description únicos para cada página (optimizados para keywords objetivo)
- [ ] Estructura de headings correcta: un H1 por página, H2 para secciones principales, H3 para subsecciones
- [ ] Schema markup implementado: `LocalBusiness` (HomeAndConstructionBusiness), `Organization`, `Service`, `Project` por proyecto individual
- [ ] Sitemap XML generado automáticamente y registrado en Google Search Console
- [ ] robots.txt configurado correctamente (sin bloquear assets críticos)
- [ ] Open Graph tags para compartir en redes sociales (imagen, título, descripción)
- [ ] Canonical tags en todas las páginas
- [ ] URLs en español sin caracteres especiales (slugs ASCII)
- [ ] Imágenes con atributos `alt` descriptivos en español
- [ ] Google Business Profile creado y vinculado al sitio (referencia local SEO)

---

#### RF-008: Internacionalización ES/EN

**Descripción:** El sitio debe estar disponible en español e inglés desde el lanzamiento, para servir a clientes corporativos internacionales y procesos de licitación con multinacionales.

**Criterios de aceptación:**
- [ ] Selector de idioma visible en el header (ES | EN) y en el footer
- [ ] URLs con prefijo de idioma: `/es/` para español (idioma por defecto), `/en/` para inglés
- [ ] Contenido traducido: todas las páginas P0 disponibles en ambos idiomas al lanzamiento
- [ ] El selector de idioma preserva la página actual al cambiar idioma (no redirige siempre a home)
- [ ] El atributo `lang` del tag `<html>` cambia según el idioma activo
- [ ] Hreflang tags implementados para señalar a Google la equivalencia entre páginas en español e inglés
- [ ] Las páginas en inglés tienen keywords en inglés en meta title/description (no traducción literal)
- [ ] El contenido generado por el CMS soporta múltiples locales

---

#### RF-009: Estadísticas de Escala (Trust Signals)

**Descripción:** Sección en la homepage con métricas clave que comunican la escala y confiabilidad de AMBIT de forma inmediata.

**Criterios de aceptación:**
- [ ] Al menos 4 métricas animadas con contador al hacer scroll (Intersection Observer):
  - Proyectos completados (basado en portafolio documentado)
  - Estados de la República atendidos
  - Viviendas construidas/en proceso (referencia CONAVI 2025: ~1,436)
  - Años de experiencia
- [ ] Animación de contador numérico (0 → valor final) al entrar en viewport
- [ ] Iconografía propia o de librería coherente con la identidad visual
- [ ] Logos de clientes de referencia en sección adyacente (Nestlé, CONAVI, SACMEX, aeropuertos)

---

#### RF-010: Página de Nosotros con Identidad Clara

**Descripción:** La página "Nosotros" debe comunicar la propuesta de valor, historia, valores, certificaciones y pilares de AMBIT de manera convincente y verificable.

**Criterios de aceptación:**
- [ ] Sección de misión/visión y propuesta de valor diferenciadora
- [ ] Los 4 pilares (Sustentabilidad, Responsabilidad Social, Eficiencia Operativa, Excelencia Técnica) con descripción y visual
- [ ] Los 4 valores (Confianza, Servicio, Calidad, Certeza) con descripción
- [ ] Distinción de Empresa Socialmente Responsable mencionada con logo del organismo certificador
- [ ] Certificaciones (ISO 9000, Six Sigma) con descripción de qué garantizan al cliente
- [ ] Mención de plantas de producción en Querétaro y Saltillo
- [ ] Slogan visible: "Desarrollos ágiles / innovadores / bonitos / funcionales"

---

#### RF-011: Analytics y Tracking Base

**Descripción:** Implementación de herramientas de medición desde el día 1 para poder evaluar el desempeño del sitio.

**Criterios de aceptación:**
- [ ] Google Analytics 4 (GA4) instalado con eventos básicos: page_view, scroll, click en CTA, form_submit, whatsapp_click, phone_click
- [ ] Google Search Console vinculado al dominio y sitemap enviado
- [ ] Evento de conversión configurado en GA4 para cada formulario enviado
- [ ] Meta Pixel instalado (para eventual retargeting en Facebook/Instagram)
- [ ] Banner de cookies LGPD-compliant (Aviso de Privacidad disponible)
- [ ] Datos del sitio visibles en dashboard dentro de las primeras 24 horas post-lanzamiento

---

### 7.2 P1 — Should Have (Fase 2: primeros 90 días post-lanzamiento)

#### RF-012: Blog / Centro de Contenido

**Descripción:** Sección editorial para publicar casos de estudio en profundidad, guías del sector y noticias de AMBIT.

**Criterios de aceptación:**
- [ ] CMS con editor visual para que el equipo de AMBIT publique sin desarrollo
- [ ] Categorías: Casos de Estudio, Industria, Infraestructura, Vivienda, Tecnología Constructiva
- [ ] URLs de artículos optimizadas para SEO (`/blog/construccion-nave-industrial-coahuila`)
- [ ] Cada artículo incluye: autor, fecha, categoría, tiempo de lectura, imagen de portada
- [ ] Related posts al final de cada artículo (por categoría)
- [ ] Compartir en LinkedIn, Twitter/X, WhatsApp
- [ ] Mínimo 4 artículos pilares al lanzar el blog

---

#### RF-013: Mapa Interactivo de Proyectos

**Descripción:** Mapa de México con pins interactivos de cada proyecto, filtrable por sector y año.

**Criterios de aceptación:**
- [ ] Implementado con Mapbox GL JS (permite diseño de mapa personalizado acorde a la identidad AMBIT)
- [ ] Pin por cada proyecto con: foto de portada (thumbnail), nombre, sector (color codificado)
- [ ] Al hacer click en pin: popup/card con resumen + link a la página completa del proyecto
- [ ] Filtros por sector que ocultan/muestran pins en tiempo real
- [ ] Zoom automático a la zona de México (ajuste de bounds inicial)
- [ ] Funcional en móvil con gestos de pinch-zoom

---

#### RF-014: Calculadora / Cotizador Básico

**Descripción:** Herramienta tipo wizard de 3–4 pasos que da un estimado de rango de costos según tipo de proyecto, m² y ubicación. Funciona como lead magnet — el resultado se muestra, luego se invita a "obtener cotización precisa".

**Criterios de aceptación:**
- [ ] Wizard de 3 pasos: 1) Tipo de proyecto → 2) Tamaño aproximado (m²) → 3) Estado de la República
- [ ] Resultado: rango de costo estimado + mensaje de contexto ("Este es un estimado orientativo. Los proyectos industriales varían por...")
- [ ] Post-resultado: formulario de captura de lead con campos: Nombre, Email, Teléfono + botón "Quiero una cotización precisa"
- [ ] El lead generado incluye los datos del wizard (tipo, m², estado) para el equipo comercial
- [ ] Disclaimer legal visible: "El estimado es orientativo y no constituye una oferta formal"
- [ ] Evento de conversión en GA4 al completar el wizard y al enviar el formulario de seguimiento

---

#### RF-015: Sección "Para Gobierno" Dedicada

**Descripción:** Landing page específica para audiencia gubernamental con la información que necesitan para un proceso de licitación.

**Criterios de aceptación:**
- [ ] Portafolio filtrado de obra pública (aeropuertos, CONAVI, SACMEX)
- [ ] Datos fiscales: Razón Social completa, RFC, domicilio fiscal
- [ ] Certificaciones disponibles para expediente
- [ ] Listado de contratos gubernamentales previos (sin información confidencial)
- [ ] Email y teléfono de contacto específico para licitaciones
- [ ] Enlace para descargar ficha de empresa en PDF

---

#### RF-016: Portal de Talento / Vacantes

**Descripción:** Sección de empleos con vacantes activas y formulario de postulación.

**Criterios de aceptación:**
- [ ] Listado de vacantes actualizadas desde el CMS
- [ ] Cada vacante: título, tipo de proyecto, ubicación, requisitos, beneficios
- [ ] Formulario de postulación: datos personales + upload de CV (PDF, max 5MB)
- [ ] Postulación enviada a email de RRHH de AMBIT
- [ ] Sección de "Por qué trabajar en AMBIT" con proyectos activos como argumento de atracción
- [ ] Formulario abierto de "Envía tu CV" para candidatos sin vacante específica

---

#### RF-017: Integración de Chat

**Descripción:** Widget de chat para atención en tiempo real y captura de leads en horario laboral.

**Criterios de aceptación:**
- [ ] Widget de chat (recomendado: Tidio o Intercom starter) visible en páginas de mayor intención (proyectos, servicios, contacto)
- [ ] Mensaje automático de bienvenida a los 30 segundos de estar en la página
- [ ] En horario no laboral: muestra formulario de mensaje offline que se convierte en ticket de email
- [ ] Integrado con el mismo número de WhatsApp para unificar conversaciones
- [ ] Eventos de GA4 al iniciar y cerrar conversación

---

### 7.3 P2 — Future (Fase 3+)

#### RF-018: Portal de Clientes

**Descripción:** Área privada con login donde clientes activos puedan ver el estado de su proyecto: avance de obra, reportes fotográficos, documentos, cronograma.

**Criterios de aceptación (diseño para futuro):**
- Dashboard por proyecto con: % de avance, hitos completados, próximas actividades
- Galería de fotos georreferenciadas actualizada por el equipo en campo
- Descarga de reportes mensuales en PDF
- Historial de documentos de proyecto (contratos, planos, manifiestos)
- Notificaciones por email al actualizar el avance

---

#### RF-019: Portal de Proveedores

**Descripción:** Área de registro y gestión para subcontratistas y proveedores de AMBIT.

**Criterios de aceptación (diseño para futuro):**
- Formulario de alta de proveedor con: datos fiscales, especialidades, capacidad operativa, certificaciones
- Validación del equipo AMBIT antes de aprobar el registro
- Comunicación de oportunidades activas para proveedores aprobados
- Historial de contratos y evaluaciones de desempeño

---

#### RF-020: Sistema de Licitaciones / RFP Digital

**Descripción:** Módulo para que prospectos y dependencias gubernamentales puedan enviar solicitudes de propuesta (RFP) de manera estructurada.

**Criterios de aceptación (diseño para futuro):**
- Formulario multi-paso de solicitud de propuesta con: tipo de obra, alcance técnico, presupuesto referencial, plazo deseado, documentos de referencia (upload)
- Número de folio asignado automáticamente
- Notificación al prospecto y al equipo AMBIT al recibir la RFP
- Seguimiento de estado (Recibida → En análisis → Propuesta enviada)

---

#### RF-021: App Móvil Nativa

**Descripción:** Aplicación móvil para iOS/Android que complementa el Portal de Clientes con funcionalidades de supervisión en campo.

**Criterios de aceptación (diseño para futuro):**
- Visualización de avance de proyectos asignados
- Reporte fotográfico desde campo con georreferenciación automática
- Notificaciones push para hitos y alertas de proyecto
- Acceso offline para zonas de obra con conectividad limitada

---

## 8. Requisitos No Funcionales

### 8.1 Performance (Core Web Vitals)

| Métrica | Objetivo | Medición |
|---|---|---|
| **LCP** (Largest Contentful Paint) | < 2.5 segundos | Google PageSpeed Insights |
| **INP** (Interaction to Next Paint) | < 200 ms | CrUX / PageSpeed |
| **CLS** (Cumulative Layout Shift) | < 0.1 | PageSpeed / WebVitals.js |
| **TTFB** (Time to First Byte) | < 600 ms | WebPageTest |
| **Score PageSpeed Mobile** | ≥ 85 | Google PageSpeed Insights |
| **Score PageSpeed Desktop** | ≥ 95 | Google PageSpeed Insights |
| **Peso total de página (home)** | < 1.5 MB en primera carga | Chrome DevTools Network |
| **Imágenes** | WebP/AVIF, lazy loading, < 250KB por imagen above-the-fold | Lighthouse |
| **JavaScript** | Tree-shaking, code splitting, < 200KB JS enviado al cliente en home | Bundlewatch |

**Estrategias de optimización requeridas:**
- Imágenes en formato WebP con fallback JPEG; AVIF para navegadores compatibles
- `loading="lazy"` en todas las imágenes below-the-fold
- `fetchpriority="high"` en la imagen hero (LCP element)
- `width` y `height` declarados en todas las imágenes (evita CLS)
- Video de hero con `preload="none"` en móvil; `preload="metadata"` en desktop
- CDN con edge locations en México (Cloudflare)
- Fuentes cargadas con `font-display: swap`

### 8.2 SEO Técnico

| Requisito | Detalle |
|---|---|
| **Indexación** | Todas las páginas públicas indexables desde el día 1 |
| **Sitemap XML** | Generado automáticamente, enviado a Google Search Console y Bing Webmaster |
| **robots.txt** | Correctamente configurado, sin bloquear CSS/JS esenciales |
| **Canonical tags** | En todas las páginas para evitar contenido duplicado ES/EN |
| **Hreflang** | Implementado para todas las páginas bilingües |
| **Schema markup** | `LocalBusiness`, `Organization`, `Service`, `Project`, `BreadcrumbList` |
| **Meta tags** | Title (máx 60 chars), description (máx 155 chars) únicos por página |
| **URLs** | Lowercase, sin espacios, sin caracteres especiales, separadas por guiones |
| **301 redirects** | Configurados para cualquier cambio de URL durante desarrollo |
| **HTTPS** | Certificado SSL/TLS activo en todo el dominio (HSTS habilitado) |
| **Core Web Vitals** | Ver sección 8.1 (Google usa CWV como factor de ranking desde 2021) |

### 8.3 Seguridad

| Requisito | Implementación |
|---|---|
| **HTTPS forzado** | Redirect automático HTTP → HTTPS; HSTS header con max-age ≥ 1 año |
| **CSP (Content Security Policy)** | Headers CSP para mitigar XSS; `default-src 'self'` con excepciones documentadas |
| **Formularios** | CSRF tokens en todos los formularios; rate limiting (máx 5 envíos/hora por IP) |
| **Dependencias** | Actualización de paquetes npm con `npm audit` en cada deploy; alertas de seguridad activas |
| **Secrets** | Variables de entorno en hosting (nunca en repositorio); `.gitignore` auditado |
| **DDoS** | Cloudflare WAF en capa gratuita mínima (protección DDoS incluida) |
| **Backups** | Backup automático del CMS semanal; backup del código en Git (rama main protegida) |
| **Acceso CMS** | 2FA requerido para todas las cuentas con acceso al CMS |

### 8.4 Accesibilidad (WCAG 2.1 AA)

| Criterio | Requisito |
|---|---|
| **Contraste de color** | Texto normal: ratio ≥ 4.5:1; Texto grande (≥18px bold): ratio ≥ 3:1 |
| **Teclado** | 100% del sitio navegable por teclado (Tab, Shift+Tab, Enter, Space) |
| **Focus visible** | Indicador de focus visible en todos los elementos interactivos |
| **Alt text** | Atributos `alt` descriptivos en todas las imágenes de contenido; `alt=""` en imágenes decorativas |
| **Video** | Videos con subtítulos (si el video contiene audio informativo); botón de pausa accesible |
| **Formularios** | Labels visibles y descriptivos para todos los campos; mensajes de error identificados como errores |
| **Headings** | Jerarquía semántica correcta (H1 → H2 → H3); no saltar niveles |
| **ARIA** | Atributos ARIA usados únicamente donde HTML semántico no es suficiente |
| **Reducción de movimiento** | `@media (prefers-reduced-motion: reduce)` aplicado en todas las animaciones |
| **Tamaño de click targets** | Mínimo 44×44px para todos los elementos interactivos en pantalla táctil |
| **Idioma** | Atributo `lang` correcto en el tag `<html>`; marcado de cambios de idioma en el contenido |
| **Auditoría** | Score de accesibilidad Lighthouse ≥ 90 en todas las páginas antes del lanzamiento |

### 8.5 Internacionalización (i18n)

| Aspecto | Implementación |
|---|---|
| **Idiomas en v1** | Español (es-MX) — predeterminado, Inglés (en) — completo en v1 |
| **Estructura de URL** | `/es/[ruta]` y `/en/[ruta]` desde el inicio; el prefijo `/es/` puede omitirse (idioma default) |
| **Detección de idioma** | Sugerencia basada en `Accept-Language` del navegador, pero el usuario puede cambiar manualmente |
| **Persistencia** | Preferencia de idioma guardada en cookie/localStorage |
| **Contenido del CMS** | Todos los tipos de contenido soportan múltiples locales (campo por locale en Sanity) |
| **Keywords** | Meta title/description y keywords en idioma correspondiente (no traducción literal) |
| **Hreflang** | `<link rel="alternate" hreflang="es-mx" href="...">` y `<link rel="alternate" hreflang="en" href="...">` en todas las páginas |
| **Moneda y formatos** | Precios en MXN; fechas en formato DD/MM/YYYY para es-MX; MM/DD/YYYY para en |
| **Idiomas futuros** | Arquitectura preparada para agregar otros idiomas (ej: portugués para expansión LATAM) sin refactoring |

### 8.6 Analytics y Medición

| Herramienta | Propósito | Configuración mínima |
|---|---|---|
| **Google Analytics 4** | Análisis de tráfico, conversiones y comportamiento | Eventos: page_view, scroll_depth (25/50/75/100%), click_cta, form_submit, whatsapp_click, phone_click, download |
| **Google Search Console** | SEO — posicionamiento, impresiones, errores de indexación | Dominio verificado, sitemap enviado, informes de CWV activados |
| **Hotjar / Microsoft Clarity** | Grabaciones de sesiones y mapas de calor | Instalado en páginas de mayor tráfico (home, proyectos, contacto) |
| **Meta Pixel** | Retargeting en Facebook/Instagram | Instalado aunque no se usen campañas inmediatamente |
| **Google Tag Manager** | Contenedor unificado de todos los tags | Gestión de todos los scripts de analytics desde GTM |

**Eventos clave de conversión a configurar en GA4:**

```
conversión_lead_formulario — cuando se envía el formulario de contacto
conversión_whatsapp — clic en botón de WhatsApp
conversión_telefono — clic en número de teléfono
conversión_descarga_ficha — descarga de ficha corporativa PDF
conversión_solicitud_propuesta — envío de formulario de propuesta
conversion_calculator_completed — completar la calculadora (P1)
```

---

## 9. Stack Tecnológico Recomendado

### 9.1 Recomendación Principal: Astro + Sanity + Cloudflare Pages

Basado en el análisis de la investigación `research/ux-ui-tendencias.md`, el stack óptimo para el perfil de AMBIT es:

| Capa | Tecnología | Justificación |
|---|---|---|
| **Framework Frontend** | **Astro 5.x** | Genera HTML estático puro, máximo rendimiento en Core Web Vitals sin configuración. Bundle JS 50–70% más pequeño que Next.js. Ideal para sitio con contenido principalmente estático + CMS. |
| **UI Components** | **React** (islas de Astro) | Para componentes interactivos: filtros de proyectos, calculadora, mapa. Astro permite usar React solo donde se necesita JS, sin enviar JS innecesario. |
| **CMS Headless** | **Sanity Studio v3** | Editor visual en tiempo real, excelente soporte multi-idioma, API robusta, generoso tier gratuito, collaboration en tiempo real. El equipo de AMBIT puede actualizar proyectos sin tocar código. |
| **Hosting / CDN** | **Cloudflare Pages** | Gratuito para el caso de uso de AMBIT, 300+ edge locations globales, TTFB ~50ms, protección DDoS incluida, deploy automático desde Git. |
| **Formularios** | **Resend** (email API) + **React Hook Form** | Envío de emails transaccionales confiable, 3,000 emails/mes gratis. React Hook Form para validación de formularios client-side. |
| **Mapa** | **Mapbox GL JS** | Diseño de mapa customizable acorde a identidad AMBIT, alto rendimiento, tier gratuito suficiente para el tráfico inicial. |
| **Animaciones** | **GSAP** (ScrollTrigger) + **CSS animations** | GSAP para animaciones complejas (hero, cadena de valor, contadores). CSS para microinteracciones simples. |
| **Analytics** | **Google Analytics 4** via **Google Tag Manager** | Standard de la industria, gratuito, integración con Search Console. |
| **Imágenes** | **Sanity Image Pipeline** + **Astro Image** | Transformación y optimización automática a WebP/AVIF desde Sanity CDN. |
| **Repositorio** | **GitHub** | Control de versiones + GitHub Actions para CI/CD (deploy automático a Cloudflare Pages en cada push a `main`). |
| **Dominio** | `ambit.solutions` (ya registrado) | TLD .solutions es memorable y refuerza el posicionamiento. Configurar DNS en Cloudflare. |

### 9.2 Alternativa para Menor Costo Inicial: WordPress + Elementor

Si el presupuesto no permite un desarrollador Astro/React, la alternativa es:

| Capa | Tecnología | Consideraciones |
|---|---|---|
| **CMS + Frontend** | **WordPress 6.x** | Ecosistema maduro, muchos desarrolladores disponibles en México |
| **Builder** | **Bricks Builder** o **Elementor Pro** | Bricks para mayor rendimiento; Elementor para mayor velocidad de desarrollo |
| **SEO** | **Rank Math Pro** | Mejor opción actual para WordPress SEO |
| **Performance** | **WP Rocket** + **WebP Express** | Caché, lazy loading, optimización de imágenes |
| **Hosting** | **Kinsta** (recomendado) o **SiteGround** | Hosting WordPress administrado con buen rendimiento en México |
| **Tema** | Tema custom (no de ThemeForest) | Para evitar código innecesario y mantener rendimiento |

**Desventaja:** Core Web Vitals más difíciles de optimizar; mayor superficie de ataque de seguridad; deuda técnica acumulada con plugins. No recomendado si se planea el Portal de Clientes (RF-018) en los próximos 18 meses.

### 9.3 Configuración de Entornos

```
Entorno       Rama Git    URL
──────────────────────────────────────────────────────────
Producción    main        https://ambit.solutions
Staging       staging     https://staging.ambit.solutions
Development   feature/*   Preview URL autogenerado por Cloudflare Pages
```

### 9.4 Estructura de Repositorio Recomendada

```
ambit-solutions/
├── src/
│   ├── components/         # Componentes reutilizables (.astro + .tsx)
│   │   ├── Hero.astro
│   │   ├── ProjectCard.astro
│   │   ├── ProjectFilters.tsx   # Isla React (interactivo)
│   │   ├── ValueChain.astro
│   │   ├── StatsCounter.tsx     # Isla React (contador animado)
│   │   ├── ContactForm.tsx      # Isla React (validación)
│   │   ├── WhatsAppButton.astro
│   │   └── Map.tsx              # Isla React (Mapbox) [P1]
│   │
│   ├── layouts/
│   │   ├── BaseLayout.astro     # HTML base, SEO, meta tags
│   │   └── ProjectLayout.astro  # Layout para fichas de proyecto
│   │
│   ├── pages/
│   │   ├── index.astro          # Home
│   │   ├── proyectos/
│   │   │   ├── index.astro      # Listado de proyectos
│   │   │   └── [slug].astro     # Página dinámica por proyecto
│   │   ├── servicios/
│   │   ├── nosotros.astro
│   │   ├── para-gobierno.astro
│   │   ├── talento.astro
│   │   └── contacto.astro
│   │
│   ├── content/                 # Datos locales o types de Sanity
│   ├── lib/                     # Clientes de API (Sanity, Resend)
│   ├── styles/
│   │   ├── global.css           # Variables CSS, reset, tipografía
│   │   └── tokens.css           # Design tokens (colores, spacing, fuentes)
│   └── i18n/
│       ├── es.json              # Strings en español
│       └── en.json              # Strings en inglés
│
├── public/
│   ├── robots.txt
│   ├── sitemap.xml              # Generado por @astrojs/sitemap
│   └── assets/
│       ├── videos/              # Video hero optimizado
│       └── fonts/               # Fuentes auto-hosteadas
│
├── sanity/                      # Studio de Sanity (CMS)
│   ├── schemas/
│   │   ├── project.ts           # Schema de proyectos
│   │   ├── service.ts
│   │   ├── post.ts              # Blog [P1]
│   │   └── vacancy.ts           # Vacantes [P1]
│   └── sanity.config.ts
│
├── .github/workflows/
│   └── deploy.yml               # CI/CD automático
├── astro.config.mjs
├── package.json
└── README.md
```

---

## 10. Criterios de Éxito

### 10.1 Criterios de Éxito por Fase

#### Lanzamiento (Mes 1)

| Criterio | Objetivo | Medición |
|---|---|---|
| El sitio está live en `ambit.solutions` | ✅ Live | Verificación manual |
| Google indexa la homepage | < 7 días post-lanzamiento | Google Search Console |
| Score Lighthouse Performance (mobile) | ≥ 85 | PageSpeed Insights |
| Score Lighthouse Accesibilidad | ≥ 90 | PageSpeed Insights |
| Formulario de contacto funcional | 100% de envíos recibidos | Test manual + logs de Resend |
| WhatsApp funcional | Clic abre conversación correctamente | Test manual en Android/iOS |
| Versión en inglés activa | Todas las páginas P0 disponibles en EN | Verificación manual |
| Schema markup válido | 0 errores en Google Rich Results Test | Rich Results Test |

#### Mes 3

| Criterio | Objetivo | Medición |
|---|---|---|
| Sesiones orgánicas | ≥ 150/mes | GA4 |
| Leads generados | ≥ 5 totales (formulario + WhatsApp + teléfono) | GA4 + CRM manual |
| Tasa de rebote homepage | < 60% | GA4 |
| Posición promedio para keywords de marca | < 20 en Google MX | Search Console |
| Tiempo promedio en sitio | > 2:00 min | GA4 |

#### Mes 6

| Criterio | Objetivo | Medición |
|---|---|---|
| Sesiones orgánicas | ≥ 500/mes | GA4 |
| Leads calificados | ≥ 5/mes sostenido | Reporte comercial |
| Posición para keywords nicho | Top 10 para ≥ 3 keywords objetivo | Search Console |
| Core Web Vitals en CrUX | LCP < 2.5s, INP < 200ms, CLS < 0.1 | Search Console CWV report |
| Blog live | ≥ 4 artículos publicados | CMS |
| Mapa interactivo live | ≥ 15 proyectos en mapa | Visual check |

#### Mes 12

| Criterio | Objetivo | Medición |
|---|---|---|
| Sesiones orgánicas | ≥ 1,500/mes | GA4 |
| Leads calificados | ≥ 15/mes sostenido | Reporte comercial |
| Conversiones atribuibles al sitio | ≥ 1 contrato iniciado por lead web | Reporte comercial |
| Postulaciones de talento | ≥ 3/mes de calidad | RRHH |
| Dominio Authority (DA) | ≥ 25 (desde 0) | Ahrefs/Moz |
| Artículos de blog publicados | ≥ 12 | CMS |

### 10.2 Definición de "Lead Calificado"

Un lead web se considera **calificado** si cumple ≥ 3 de los siguientes criterios:
- Tiene empresa identificada (no particular sin contexto)
- El tipo de proyecto es dentro de los sectores de AMBIT (industrial, infraestructura, vivienda social)
- El tamaño del proyecto es > 500 m² o > 5M MXN estimados
- Proporciona teléfono verificable
- La ubicación del proyecto está en los estados donde opera AMBIT

---

## 11. Timeline y Fases

### 11.1 Resumen de Fases

```
FASE 1 (MVP)         FASE 2 (Crecimiento)      FASE 3 (Plataforma)
────────────────      ────────────────────────   ──────────────────────
Semanas 1–8           Semanas 9–20               Semana 21+
Requisitos P0         Requisitos P1              Requisitos P2
Live en 8 semanas     Crecimiento orgánico       Portal de clientes
Todos RF-001–011      RF-012–017                 RF-018–021
```

### 11.2 Fase 1 — MVP (8 semanas)

**Objetivo:** Sitio live con todas las funcionalidades P0, posicionado en Google, generando primeros contactos.

| Semana | Actividades | Entregable |
|---|---|---|
| **1** | Setup: repositorio, dominio, hosting, Sanity Studio, Google Analytics | Entorno de desarrollo funcional |
| **2** | Diseño: wireframes homepage y proyectos, design tokens (colores, tipografía, spacing), revisión con AMBIT | Wireframes aprobados |
| **3** | Diseño: mockups en Figma de todas las páginas P0 (home, proyectos, nosotros, contacto) | Mockups aprobados |
| **4** | Desarrollo: layout base, componentes de navegación, hero, footer. Schemas de Sanity. | Skeleton del sitio en staging |
| **5** | Desarrollo: páginas Proyectos (listado + filtros + página individual), Nosotros, Cadena de Valor | Páginas core en staging |
| **6** | Desarrollo: Contacto (formulario + integración Resend), WhatsApp, Para Gobierno, Talento. SEO técnico. | Funcionalidades completas en staging |
| **7** | Contenido: carga de todos los proyectos en Sanity. Traducción EN. Revisión de QA completa. | Staging con contenido real |
| **8** | Go-live: DNS apuntado, Google Search Console, Sitemap enviado, Pruebas en producción | 🚀 **ambit.solutions LIVE** |

**Contenido mínimo para el lanzamiento:**
- 15 fichas de proyectos completas (con fotografías reales)
- Todas las páginas en español e inglés
- Datos de empresa completos y verificados
- Al menos 1 video de obra o fotografías editoriales para el hero

### 11.3 Fase 2 — Crecimiento (semanas 9–20)

**Objetivo:** Agregar funcionalidades que aumentan tráfico orgánico (blog), mejoran la conversión (calculadora, mapa) y atienden audiencias específicas (proveedores, talento).

| Semana | Actividades | Entregable |
|---|---|---|
| **9–11** | Blog/Centro de Contenido: schema en Sanity, template de artículo, SEO estructura, primeros 4 artículos pilares | Blog live con 4 artículos |
| **12–13** | Mapa Interactivo de Proyectos (Mapbox): todos los proyectos georeferenciados, filtros por sector | Mapa interactivo live |
| **14–15** | Calculadora/Cotizador: wizard 3 pasos, lógica de estimados, lead capture post-resultado | Calculadora live con tracking |
| **16–17** | Portal de Talento: vacantes en CMS, formulario de postulación, upload de CV | Sección Talento live |
| **18–19** | Sección Proveedores: landing page, formulario de alta, contenido de beneficios | Sección Proveedores live |
| **20** | Chat widget (Tidio/Intercom), optimización de conversión basada en datos de Hotjar | Chat live; primeras iteraciones de CRO |

### 11.4 Fase 3 — Plataforma (semana 21+)

**Objetivo:** Construir funcionalidades de plataforma que generan valor recurrente y diferencian a AMBIT de cualquier constructora en México.

| Prioridad | Proyecto | Complejidad | Impacto |
|---|---|---|---|
| Alta | Portal de Clientes (RF-018) | Alta | Retención, diferenciación, upsell |
| Media | Portal de Proveedores (RF-019) | Media | Eficiencia operativa, red de proveedores |
| Media | Sistema de Licitaciones (RF-020) | Alta | Acceso a proyectos gubernamentales |
| Baja | App Móvil (RF-021) | Muy Alta | Complemento al Portal de Clientes |

---

## 12. Riesgos y Mitigaciones

| # | Riesgo | Probabilidad | Impacto | Mitigación |
|---|---|---|---|---|
| **R-01** | **Sin fotografías de calidad de proyectos** — El portafolio pierde impacto si las fotos disponibles son de baja resolución o no documentan los proyectos correctamente | Alta | Muy Alto | Priorizar sesión fotográfica profesional de los proyectos más representativos (Nestlé Coatepec, escuela Puebla, aeropuertos) antes del lanzamiento. Presupuesto estimado: $8,000–$15,000 MXN por sesión. Como backup: fotografías de stock de alta calidad de proyectos similares para placeholders temporales. |
| **R-02** | **Contenido en inglés de baja calidad** — Traducción mecánica o de baja calidad para la versión EN daña la credibilidad ante clientes corporativos internacionales | Media | Alto | Contratar traductor/copywriter nativo o bilingüe para el contenido crítico (home, proyectos, nosotros). No depender de traducciones automáticas para texto principal. |
| **R-03** | **Demora en aprobación de diseño** — Ciclos de revisión largos con el equipo de AMBIT retrasan el lanzamiento | Media | Medio | Establecer desde el inicio un proceso de aprobación con: 1 ronda de revisión de wireframes (3 días), 1 ronda de mockups (3 días), aprobación de un decisor designado. No aprobar por comité. |
| **R-04** | **Falta de mantenimiento post-lanzamiento** — El sitio se vuelve desactualizado si nadie actualiza proyectos, vacantes o blog | Alta | Alto | Capacitar al equipo de AMBIT en el uso de Sanity Studio (2–3 horas máximo). Crear manual de uso del CMS. Designar un responsable de contenido interno. |
| **R-05** | **Leads no gestionados** — El equipo comercial no tiene proceso para responder leads del sitio, causando que los prospectos se "enfríen" | Media | Muy Alto | Establecer SLA de respuesta: < 2 horas en horario laboral. Configurar notificaciones de leads en tiempo real (email + WhatsApp al equipo). Crear plantilla de respuesta inicial. |
| **R-06** | **Core Web Vitals reprobados por video pesado** — Video del hero mal optimizado puede causar LCP > 4s y penalización de SEO | Media | Alto | Optimizar video antes del lanzamiento: max 10MB WebM, imagen poster < 250KB, `preload="none"` en móvil. Validar con PageSpeed Insights antes de hacer live. |
| **R-07** | **Contenido sin actualizar en proyectos CONAVI** — Si se publican proyectos en curso sin terminar, puede generar expectativas incorrectas | Baja | Medio | Distinguir claramente en el CMS y en el sitio entre proyectos "Completados" y "En Desarrollo". Los proyectos en desarrollo pueden mostrarse con badge visual diferenciador. |
| **R-08** | **Dominio sin HTTPS o expirado** — Si el dominio o certificado SSL expira, el sitio muestra advertencia de seguridad a visitantes | Baja | Muy Alto | Configurar renovación automática de certificado SSL en Cloudflare. Alertas de vencimiento de dominio con > 60 días de anticipación. |
| **R-09** | **SEO lento (0 a tráfico orgánico tarda 6–12 meses)** — El equipo puede perder confianza si no ve resultados inmediatos | Alta | Medio | Fijar expectativas correctas desde el inicio: el SEO orgánico tarda 6–12 meses. Complementar con Google Business Profile para visibilidad local inmediata. Considerar Google Ads para keywords de marca en los primeros 3 meses (presupuesto mínimo de $3,000–$5,000 MXN/mes). |

---

## 13. Open Questions

Las siguientes preguntas deben resolverse antes o durante la Fase 1. Se indica el área responsable de responder.

| # | Pregunta | Área responsable | Bloquea | Estado | Resolución |
|---|---|---|---|---|---|
| **OQ-01** | ¿Existen fotografías de proyectos reales disponibles? | AMBIT (Ernesto) | Sí | **Resuelto** (2026-03-19) | Sí, existen fotos reales en las presentaciones corporativas. Ernesto proporcionará fotos adicionales actuales de obra conforme estén disponibles. |
| **OQ-02** | ¿Cuál es el número de WhatsApp Business oficial de AMBIT? | AMBIT (Ernesto) | Sí — RF-005 | **Resuelto** (2026-03-19) | Usar el mismo teléfono: +52 55 5616 0991 |
| **OQ-03** | ¿Existe video de obra? ¿Presupuesto para video corporativo? | AMBIT (Ernesto) | No | **Resuelto** (2026-03-19) | Ernesto conseguirá video de obra. Se puede lanzar sin video e incorporarlo después. |
| **OQ-04** | ¿Quiénes tendrán acceso al CMS? | AMBIT (RRHH/Ops) | No | **Resuelto** (2026-03-19) | No se usará CMS con acceso directo por ahora. Ernesto proporcionará contenido actualizado en las carpetas del proyecto y el agente de desarrollo lo actualizará en el sitio. |
| **OQ-05** | ¿Mostrar nombres de clientes? | AMBIT (Dirección) | Sí | **Resuelto** (2026-03-19) | No mostrar nombres de clientes privados. Solo mencionar clientes de gobierno. Para proyectos privados, describir el tipo de proyecto sin nombrar al cliente. |
| **OQ-06** | ¿Cuál es el RFC oficial? | AMBIT (Admin/Contabilidad) | No | **Diferido** | No se incluirá RFC en el sitio por ahora. |
| **OQ-07** | ¿Restricciones para mencionar CONAVI 2025? | AMBIT (Dirección/Legal) | No | **Resuelto** (2026-03-19) | No hay restricción. Se pueden mencionar los proyectos CONAVI públicamente. |
| **OQ-08** | ¿Paleta de colores y manual de marca? | AMBIT (Ernesto) | Sí | **Resuelto** (2026-03-19) | Manual de marca completo disponible en `context/Reestilización de marca AMBIT/Ambit Guía de marca.pdf`. Paleta primaria: #6E6E6B, #A45B3F, #C86A3A, #FFFFFF. Secundaria: #8FA89A, #D9A58C, #E7DED4, #F4EFEA. Logo nuevo con símbolo de "A" fragmentada. Tipografía: Gotham Book. |
| **OQ-09** | ¿Presencia en redes sociales? | AMBIT (Ernesto) | No | **Resuelto** (2026-03-19) | LinkedIn activo: linkedin.com/company/ambit-desarrollos. Vincular en el sitio. |
| **OQ-10** | ¿Stack tecnológico / presupuesto? | AMBIT (Dirección) | Sí | **Resuelto** (2026-03-19) | Next.js 15 + Sanity v3 + Vercel. Desarrollo con Claude Code. |
| **OQ-11** | ¿Viviendas CONAVI como KPI público? | AMBIT (Dirección) | No | **Resuelto** (2026-03-19) | Sí, se puede usar como KPI público (~1,436 viviendas). |
| **OQ-12** | ¿Acceso a base de datos CONAVI/SACMEX? | AMBIT (Ops/Ingeniería) | No | Pendiente | — |
| **OQ-13** | ¿Registrar Google Business Profile? | AMBIT (Ernesto/Marketing) | No | **Resuelto** (2026-03-19) | No por ahora. Se puede hacer post-lanzamiento. |
| **OQ-14** | ¿Mencionar aeropuertos por nombre? | AMBIT (Dirección) | No | **Resuelto** (2026-03-19) | Sí, se pueden mencionar por nombre: Silao, Mérida, Mexicali, Zacatecas. |

---

## Apéndice A: Identidad Visual Aspiracional

Basado en la investigación de las mejores prácticas del sector, se recomienda para AMBIT:

### Paleta de Colores

```
Primario     #1A3A5C  — Azul marino profundo (confianza, seriedad, expertise)
Secundario   #E8401A  — Naranja constructivo (energía, acción, diferenciación)
Neutro 1     #F5F5F2  — Blanco cálido (fondos, respiro)
Neutro 2     #2C2C2C  — Casi negro (texto, fundamentos)
Acento       #4CAF7D  — Verde sustentabilidad (pilares RSE y sustentabilidad)
```

*Nota: Esta paleta es una propuesta inicial. La paleta final debe ser validada con la identidad corporativa existente de AMBIT (OQ-08).*

### Tipografía Recomendada

```
Titulares    : "Inter" bold 700–900 o "Neue Haas Grotesk" — sans-serif moderna, impactante
Cuerpo       : "Inter" regular 400–500 — legibilidad excelente, google fonts libre
Acento/Datos : "JetBrains Mono" o "DM Mono" — para estadísticas, métricas, datos técnicos
```

### Fotografía y Visual

- Fotografías documentales de obra real (no stock) — la inversión en sesión fotográfica profesional tiene el mayor ROI de cualquier inversión de contenido para una constructora
- Paleta de fotografía ligeramente cálida — evita azules fríos de post-proceso que hacen ver la obra "fría"
- Incluir fotografías de personas (trabajadores, ingenieros en campo) — humaniza la marca y apoya la sección de Talento
- Para proyectos sin fotografías propias: ilustraciones o renders arquitectónicos en lugar de stock genérico

---

## Apéndice B: Keywords Objetivo para SEO (Fase 1)

### Keywords de Marca (inmediatas)
- "ambit solutions construcción"
- "grupo promotor ambit"
- "ambit.solutions"

### Keywords de Nicho de Alto Valor
- "constructora industrial México certificada ISO"
- "construcción nave industrial Coahuila"
- "constructora vivienda social CONAVI"
- "empresa constructora aeropuertos México"
- "construcción planta alimenticia México"
- "contratista general CDMX proyectos industriales"

### Keywords Long-Tail para Blog (Fase 2)
- "cómo construir nave industrial en México regulaciones"
- "constructora certificada ISO 9000 México"
- "proyectos de vivienda social programa bienestar México"
- "construcción en sistemas industrializados paneles"
- "supervisión de obra con tecnología georreferenciación"

---

## Apéndice C: Glosario

| Término | Definición en contexto de AMBIT |
|---|---|
| **P0** | Requisito indispensable para el lanzamiento de la versión 1 del sitio |
| **P1** | Requisito a implementar en los primeros 90 días post-lanzamiento |
| **P2** | Requisito de roadmap futuro (Fase 3+) |
| **LCP** | Largest Contentful Paint — métrica de Core Web Vitals; tiempo en cargar el elemento visual más grande |
| **CWV** | Core Web Vitals — conjunto de métricas de rendimiento de Google (LCP, INP, CLS) |
| **CMS** | Content Management System — sistema de gestión de contenido (ej: Sanity Studio) |
| **Headless CMS** | CMS donde el backend de contenido está desacoplado del frontend (la presentación) |
| **SSG** | Static Site Generation — generación de páginas HTML en tiempo de compilación (Astro) |
| **Lead calificado** | Prospecto con empresa identificada, proyecto dentro del alcance de AMBIT y datos de contacto verificables |
| **CONAVI** | Comisión Nacional de Vivienda — organismo que administra el programa "Vivienda Para El Bienestar" |
| **SACMEX** | Sistema de Aguas de la Ciudad de México — cliente de AMBIT en proyectos de báscula camionera |
| **WCAG 2.1 AA** | Web Content Accessibility Guidelines — estándar de accesibilidad web; nivel AA es el mínimo recomendado |
| **Schema markup** | Código estructurado que le dice a Google qué tipo de contenido es cada elemento de la página |
| **Hreflang** | Atributo HTML que le indica a Google qué versión de idioma debe servir a cada usuario |

---

*Documento generado el 19 de marzo de 2026 para GRUPO PROMOTOR AMBIT, S.A. DE C.V.*  
*Basado en: análisis de 10 constructoras mexicanas, análisis de 10 constructoras internacionales, y tendencias UX/UI 2024–2026 para el sector construcción.*  
*Referencias de investigación: `/home/user/workspace/research/`*
