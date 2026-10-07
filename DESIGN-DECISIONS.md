# Decisiones de Diseño (DESIGN-DECISIONS)

## Concepto
- **"El Arco Inmersivo":** La página recrea el progreso de la tarde a la noche. Comienza en un color verde cálido (`#E1E7DE`) simulando luz natural, pero queda oculto en el `Hero` tras la foto a sangre. Al pasar a "La Penúltima", el fondo muta fluidamente a Ámbar (`#F59E0B`) atado al scroll (usando `ScrollTrigger`), y finalmente cae en un profundo off-black azulado (`#0B0F1A`) al entrar en la sección "Directo", momento en el cual se "enciende" la iluminación del club.

## Tipografías
- **Statement:** `Big Shoulders Display`. Usado para titulares colosales y el wordmark. Evita el aspecto de plantilla y da una apariencia editorial de cartelera o festival.
- **Body:** `Geist`.

## Paleta
- Extraída estrictamente de las fotos de la identidad visual proporcionada (`directo-jowke-violeta.jpg`, `directo-jowke-luz-calida.jpg`). El uso del violeta es puntual (botones, hovers, selección) y no hay degradados decorativos tipo "slop".

## Hero
- Cumple la regla de **"Giant Statement"**. No hay cajas dentro de cajas, no hay carruseles. El `H1` está oculto para accesibilidad, mientras que visualmente se usa un wordmark. El CTA primario ("Contratar") y el secundario ("Escuchar") están por encima del scroll y visibles en portátiles pequeños (`1280x720` o menor).

## Anclajes por Sección y Componentes Firma
1. **Hero:** Wordmark LED.
2. **La Penúltima:** Reproductor con "facade" y tarjeta de doble bisel.
3. **Directo:** Corte de foto a sangre. La narrativa queda ligada al cambio de color de fondo.
4. **Comunidad:** Tira editorial con rejilla asimétrica (sin layout repetido) y texto revelado por `scrub` (GSAP).
5. **Salas:** Lista tipográfica minimalista, plana, sin tarjetas.
6. **Contratación:** Tarjeta doble bisel con formulario y retrato en blanco y negro.

## Paradigmas GSAP
1. **Color de fondo global:** Modificado mediante `gsap.timeline` con `scrub` desde el `top` del main, atado a los triggers de las secciones `LaPenultima` y `Directo`.
2. **Scrub Text Reveal:** Letras reveladas progresivamente al hacer scroll en la sección Comunidad.

## Prohibiciones Aplicadas
- Ningún guion largo o medio.
- Sin fuente Inter, Helvetica o Arial.
- Sin emojis ni gradientes morado/azul estilo IA.
- Componentes y secciones repiten un máximo de 0 layouts (todas las secciones usan un grid y una estructura distinta).
- Solo se anima `transform` y `opacity` u otras propiedades de rendimiento (fondo global).
- Diseño construido primero en móvil y luego a gran escala para escritorio.
