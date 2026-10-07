# Plan de Implementación: BELTRY Web Premium

## Design Read
"Reading this as: premium booking landing page for an urban DJ, with a dark magnetic club language, leaning toward native GSAP motion, asymmetric editorial layouts, and stark condensed typography."

## Dials Configurados
* **`DESIGN_VARIANCE: 8`** (Asimetría, alto impacto, sin centros genéricos).
* **`MOTION_INTENSITY: 7`** (Transiciones significativas, GSAP pinned, scrub).
* **`VISUAL_DENSITY: 3`** (Respiración amplia, grandes tipografías, minimalismo editorial).

## FASE 0: Concepto de Dirección de Arte

### Conceptos Propuestos

**1. "El Arco Inmersivo" (The Immersive Arc) - *Recomendado***
* **Idea:** Cumplimos el momento firma bañando toda la página. Empezamos en un verde cálido claro (luz natural), pasando a un puente ámbar y finalmente cayendo en el off-black azulado para el club. El color de fondo de la web muta suavemente atado al scroll (GSAP). El wordmark BELTRY se enciende como una pantalla LED al entrar en el azulado.
* **Riesgo:** Requiere control exacto de la curva de color en GSAP para no generar colores intermedios turbios (barro) entre verde, ámbar y negro azulado.

**2. "El Corte Brutalista" (The Brutalist Cut)**
* **Idea:** La narrativa avanza por bloques físicos sin degradados. El tramo de "día" es una tarjeta gigante de color verde cálido sobre fondo negro. El scroll arrastra la tarjeta hacia arriba revelando el ámbar debajo y luego la oscuridad total del club.
* **Riesgo:** Es más arquitectónico pero menos fluido; puede sentirse como diapositivas aisladas en lugar de una experiencia continua de una sola noche.

**3. "Luz Contenida" (Contained Spotlight)**
* **Idea:** El fondo de la página se mantiene off-black azulado permanentemente. La transición temporal del día a la noche ocurre exclusivamente dentro de los contenedores de imágenes, que crecen y se expanden. La luz natural emana de las fotos hacia afuera con sutiles sombras teñidas.
* **Riesgo:** No altera la luz ambiental de la página (el fondo), por lo que el usuario no siente que "entra en la noche" de la misma manera visceral.

---

### Recomendación Seleccionada: "El Arco Inmersivo"

Para ejecutar este concepto respetando las decisiones ya tomadas, propongo las siguientes combinaciones de tipografía y paleta.

#### Opciones de Tipografía (Candidatas evaluadas)

**Opción A: Big Shoulders Display + Geist (Recomendada)**
* **Motivo:** `Big Shoulders Display` es una fuente súper condensada ("statement") que grita festival y cartelera, ideal para el wordmark gigante y titulares. Tiene mucha personalidad en mayúsculas. `Geist` es la contraparte neutral, ultra-legible, que aporta el toque de diseño digital premium y silencioso para el texto.

**Opción B: Familjen Grotesk + Instrument Sans**
* **Motivo:** `Familjen Grotesk` tiene un carácter editorial y ligeramente más ancho que Big Shoulders, dando un aspecto de diseño más "zine" underground. `Instrument Sans` aporta neutralidad cálida en cuerpo de texto.

#### Opciones de Paleta

**Opción A: "Club Core" (Fiel a la identidad existente - Recomendada)**
* **Background:** `#0B0F1A` (Off-black azulado dictado por sus redes).
* **Foreground:** `#F8FAFC` (Blanco roto crudo para contraste máximo pero suave).
* **Accent (Violeta):** `#9D84D6` (Violeta desaturado y elegante, extraído de luz fotográfica).
* **Puente Ámbar:** `#F59E0B` (Luz de foco cálida).
* **Tramo Día:** `#E1E7DE` (Verde cálido desaturado, papel o luz de mediodía).
* **Motivo:** Se adhiere al 100% a las instrucciones, creando la experiencia de la noche desde la tarde hasta la oscuridad inmersiva del club, sin perder legibilidad.

**Opción B: "Deep Midnight"**
* **Background:** `#06080D` (Aún más oscuro y profundo).
* **Foreground:** `#E2E8F0` (Un blanco un poco más frío y velado).
* **Accent (Violeta):** `#B39DFF` (Más brillante, simulando un neón directo).
* **Puente Ámbar:** `#FBBF24` (Más encendido).
* **Tramo Día:** `#D3DED5` (Verde grisáceo).
* **Motivo:** Empuja la oscuridad un nivel más allá para máximo dramatismo, ideal si las fotos son muy oscuras, pero puede dificultar ligeramente la lectura.

---
*Fin de Fase 0. Esperando aprobación.*
