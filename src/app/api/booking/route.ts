import { NextResponse } from "next/server";
import { content } from "@/app/content";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { nombre, email, telefono, tipo, fecha, ciudad, horaInicio, horaFin, mensaje } = data;

    if (!nombre || !email || !mensaje) {
      return NextResponse.json(
        { error: "Por favor, completa los campos requeridos." },
        { status: 400 }
      );
    }

    const recipient = content.contact.email || "info@potenciatunegocio.eu";

    const response = await fetch(`https://formsubmit.co/ajax/${recipient}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Origin": "https://beltry2.vercel.app",
        "Referer": "https://beltry2.vercel.app/",
      },
      body: JSON.stringify({
        _subject: `🎯 Solicitud de Contratación: ${nombre} (${tipo || "Evento"})`,
        _captcha: "false",
        _template: "table",
        _replyto: email,
        "Nombre o Sala": nombre,
        "Email de contacto": email,
        "Teléfono": telefono || "No especificado",
        "Tipo de evento": tipo || "No especificado",
        "Fecha del evento": fecha || "No especificada",
        "Ciudad": ciudad || "No especificada",
        "Horario": (horaInicio || horaFin) ? `${horaInicio || "?"} - ${horaFin || "?"}` : "No especificado",
        "Mensaje o detalles": mensaje,
      }),
    });

    const result = await response.json().catch(() => null);

    if (!response.ok || (result && (result.success === false || result.success === "false"))) {
      console.error("FormSubmit rejection in /api/booking:", result);
      return NextResponse.json(
        { error: result?.message || "No se pudo procesar la solicitud en este momento." },
        { status: 502 }
      );
    }

    return NextResponse.json({ 
      success: true, 
      message: result?.message || "Solicitud recibida correctamente." 
    });
  } catch (err) {
    console.error("Booking API error:", err);
    return NextResponse.json(
      { error: "Error de conexión al enviar la solicitud." },
      { status: 500 }
    );
  }
}

