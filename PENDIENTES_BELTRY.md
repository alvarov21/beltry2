# PENDIENTES - Web de Beltry

La web ha sido implementada según el sistema de diseño "Ruben Daza Rojo Design" con la temática adaptada a los requerimientos oscuros y violetas de Beltry.

## Lista de elementos pendientes (Placeholders a rellenar)

Revisa el archivo `src/app/content.ts` para cambiar los datos temporales por los definitivos.

1. **IDs de YouTube**:
   - `music.youtube1`: Reemplazar `[PENDIENTE:ID_YOUTUBE_1]` por el ID del vídeo "La Penúltima Vol.1".
   - `music.youtube2`: Reemplazar `[PENDIENTE:ID_YOUTUBE_2]` por el ID del "Live Set Millennium".
2. **TikTok**:
   - `music.tiktokVideo`: Reemplazar por un ID de vídeo embebido de TikTok (si se necesita integrar un iframe real).
3. **Imágenes (subir a `public/assets/`)**:
   - `hero-bg.jpg` (Fondo escritorio, cabina o retrato de estudio).
   - `hero-bg.mp4` o `webm` (Video en bucle para móvil).
   - `about.jpg` (Foto sección "Sobre Mí").
   - `highlight-1.jpg`, `highlight-2.jpg`, `highlight-3.jpg` (Fondos de tarjetas).
   - `gallery-1.jpg` a `gallery-5.jpg` (Galería En Directo).
   - `og-image.jpg` (Para la previsualización al compartir en redes, tamaño 1200x630px).
   - `noise.png` (Textura de ruido/grano).
   - `presskit-beltry.pdf` (Dossier para Booking).
4. **Textos pendientes en `content.ts`**:
   - Biografía completa de Beltry.
   - Cita real ("Quote") de Beltry.
   - Completar el nombre de las salas (Sala 2, Sala 3, Sala 4).
   - Email real, teléfono y enlace de WhatsApp de Booking.
   - URL del canal de YouTube en `socials.youtube`.

## Cómo desplegar en Vercel

1. **Subir a GitHub**: Sube la carpeta `beltry-web` a un nuevo repositorio de GitHub.
2. **Conectar con Vercel**: Ve a [Vercel.com](https://vercel.com), dale a "Add New Project", e importa el repositorio.
3. **Configuración**: El Framework Preset "Next.js" se detectará automáticamente. No necesitas cambiar ningún comando de Build.
4. **Deploy**: Haz clic en "Deploy" y en un par de minutos la web estará online.
