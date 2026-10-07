# Design System: BELTRY Web Premium

## 1. Tipografía
- **Display / Wordmark / Headlines:** `Big Shoulders Display` (Autoalojada). Usada siempre en MAYÚSCULAS (`uppercase`), con un interlineado muy ajustado (`leading-[0.85]`) y tracking negativo (`tracking-tighter`) para lograr el efecto "Statement" y pantalla LED.
- **Cuerpo de texto / Interfaz:** `Geist` (Autoalojada). Neutral, legible, aporta seriedad.

## 2. Paleta de Colores
- **Noche / Club (Fondo principal y Navbar):** `#0B0F1A` (Off-black azulado).
- **Foreground (Texto principal):** `#F8FAFC` (Blanco roto).
- **Accent (Acento):** `#9D84D6` (Violeta desaturado, extraído de la luz fotográfica de la sala).
- **Puente Ámbar:** `#F59E0B` (Usado durante la transición de scroll).
- **Tramo de Día:** `#E1E7DE` (Verde cálido desaturado, luz natural).

## 3. Escala y Espaciados (Macro-whitespace)
- En Next.js / Tailwind se aplica el multiplicador base de `4px`.
- **Secciones:** `py-24` (96px) en móvil y `py-40` (160px) en escritorio.
- **Bordes:** Uso de radios masivos como `rounded-[2rem]` y `rounded-[2.5rem]`.

## 4. Componentes Firma
- **Double-Bezel Card:** Usado en el reproductor de "La Penúltima" y el Formulario. Consiste en un anillo exterior semi-transparente y un contenedor interior opaco con radio ajustado matemáticamente.
- **Wordmark Gigante:** En el Hero, la palabra BELTRY ocupa el máximo ancho posible sin desbordar.
- **Tira de Métricas:** Valores enormes de estadísticas de TikTok e IG sin tarjetas, flotando en el espacio asimétrico.

## 5. Botones y Controles
- **Primario (CTA):** Botones estilo píldora (`rounded-full`), con padding generoso (`px-8 py-4`), y una física de botón magnético (el icono interior se desplaza al hacer hover mientras el botón hace `scale-[0.98]`).
- **Secundario:** Enlaces de texto con subrayado en el borde inferior (`border-b`) y flecha que se desliza al hover.
