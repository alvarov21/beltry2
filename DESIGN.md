# DESIGN SYSTEM: La Penúltima (El Tránsito)

## 1. Diales
* **DESIGN_VARIANCE:** 8 (Composición asimétrica, estilo póster)
* **MOTION_INTENSITY:** 7 (Motion cinemático y físico, ScrollTrigger para narrativa)
* **VISUAL_DENSITY:** 3 (Respiración amplia, mucho espacio negativo, minimalismo oscuro)

## 2. Tipografía
* **Display / Headlines:** `Big Shoulders Display` (Condensada, arquitectónica, estética LED de escenario).
* **Body / UI:** `Geist` (Limpia, neutra, altamente legible en móvil).

## 3. Paleta de Color (Deep Dark Mode)
* **Background Base (Off-black):** `#0B0F1A` (Fondo negro-azulado extraído de retrato)
* **Foreground (Texto):** `#F3F4F6` (Blanco roto para evitar fatiga visual)
* **Accent (Violeta de Club):** `#7C5DA1` (Luz de club, utilizado escasamente para CTAs/highlights)
* **Day (Verde Cálido):** `#6B7A60` (Luz natural para la sección "La Penúltima")
* **Bridge (Ámbar):** `#D97941` (Luz de foco cálida para transiciones)

## 4. Componentes Firma (The Variation Engine)
1. **Wordmark LED:** Revelado por máscara de la palabra BELTRY.
2. **Tarjeta de Lanzamiento:** Doble bisel para el último lanzamiento (y formulario de contratación).
3. **Rejilla Asimétrica:** Rejilla diagonal (diagonal staggered) de clips verticales.
4. **Tira Editorial:** Métricas a gran escala (TikTok, Instagram) en una sola tira.

## 5. Reglas Duras
* **Botones/CTAs:** Texto en una sola línea, alto contraste, feedback de escala (`scale-[0.98]`). Un único intento de CTA por pantalla ("Contratar").
* **Eyebrows:** Máximo 1 cada 3 secciones. Cero guiones largos.
* **Border Radius:** `rounded-none` o máximo `rounded-sm` para un *look* más serio.
* **Layouts:** Mínimo 4 familias distintas de layout a lo largo de las 6 secciones. Nunca 3 alternancias repetidas de izquierda/derecha.
