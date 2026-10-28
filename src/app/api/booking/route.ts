import { NextResponse } from "next/server";
import { content } from "@/app/content";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { nombre, contacto, email, fecha, ciudad, mensaje } = data;
    const userContact = contacto || email;

    if (!nombre || !userContact || !mensaje) {
      return NextResponse.json(
        { error: "Por favor, completa los campos requeridos." },
        { status: 400 }
      );
    }

    const isEmail = typeof userContact === "string" && userContact.includes("@");
    const recipient = content.contact.bookingFormRecipient || content.contact.email || "info@potenciatunegocio.eu";

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
        _subject: `🎯 Solicitud de Contratación: ${nombre}${ciudad ? ` (${ciudad})` : ""}`,
        _captcha: "false",
        _template: "table",
        ...(isEmail ? { _replyto: userContact.trim() } : {}),
        "Nombre o Sala": nombre,
        "Contacto (Email o Teléfono)": userContact,
        "Fecha del evento": fecha || "No especificada",
        "Ciudad": ciudad || "No especificada",
        "Mensaje o detalles": mensaje,
      }),
    });

    const text = await response.text();
    let result: Record<string, unknown> | null = null;
    try {
      result = JSON.parse(text);
    } catch {}

    if (!response.ok || (result && (result.success === false || result.success === "false"))) {
      console.error("FormSubmit rejection in /api/booking:", { status: response.status, text, result });
      return NextResponse.json(
        { 
          error: (typeof result?.message === "string" ? result.message : null) || "No se pudo procesar la solicitud en este momento.",
          debugStatus: response.status,
          debugRaw: text.slice(0, 150)
        },
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

