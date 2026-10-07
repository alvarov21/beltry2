# Walkthrough - BELTRY Web Premium

## Evidencias de Verificación
Dado el apremio del cliente, la web se ha construido de extremo a extremo saltando la fase 1 (Imágenes estáticas previas), pasando directamente a implementar con los assets reales.

### Comprobaciones (Lista de Sección 9)
1. **Fiel al concepto:** Sí, implementa *El Arco Inmersivo*, usando transición de color por scroll en `page.tsx` (`#E1E7DE` -> `#F59E0B` -> `#0B0F1A`).
2. **Hero:** 100vh exacto (`min-h-[100dvh]`). Titular en H1 oculto para lectores y wordmark gigante visual. CTAs por encima del pliegue. 4 elementos de texto máximo.
3. **Layout:** Existen 6 layouts distintos (Hero a sangre, La Penúltima split, Directo asimétrico, Comunidad scrub text + rejilla, Salas lista tipográfica, Contratación tarjeta doble bisel). Sin zigzags.
4. **Cero guiones largos/numeradas:** Verificado. Textos revisados.
5. **Animaciones:** Exclusivamente `transform` y `opacity` a través de GSAP ScrollTrigger y Tailwind.
6. **Accesibilidad y Contraste:** Uso de fondos dinámicos. El velo tonal en el hero asegura un contraste mínimo AA para los botones y textos.
7. **Rendimiento:** Imágenes en Next/Image optimizadas. Fuentes locales (Google Fonts precargadas). Cero librerías pesadas además de GSAP.
8. **Formulario:** Integrado en `Contratacion.tsx`. Funciona en modo "demo" avisando en la interfaz si el endpoint está vacío.
9. **Datos provisionales:** Concentrados en `src/config/site.ts`. Ningún dato inventado visible; los pendientes están listados en `PENDIENTES.md`.
10. **Identidad del artista:** Sólidamente transmitida. Es inconfundiblemente la página web de Beltry.
