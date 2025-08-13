
import { NextRequest, NextResponse } from "next/server";
import { object, string } from "yup";
import { sendEmail } from "../services/email.services";
import { mailTemplate } from "../utils/mail-template";
import { envs } from "@/config/envs";

// Esquema de validación con Yup
const postSchema = object({
  name: string().required(),
  subject: string().required(),
  email: string().email().required(),
  message: string().required(),
});

export async function POST(request: NextRequest) {
  try {
    // Validar datos recibidos
    const { name, subject, email, message } = await postSchema.validate(
      await request.json()
    );

    // Generar cuerpo HTML del email
    const htmlBody = mailTemplate(name, subject, email, message);

    // Enviar correo
    await sendEmail({
      to: envs.MAIL_RECEPTION, // Receptor del correo
      subject: "Nuevo mensaje de contacto",
      htmlBody: htmlBody,
    });

    // Respuesta de éxito
    return NextResponse.json({ message: "Email enviado exitosamente." });
  } catch (error) {
    console.error("Error al enviar el email:", error);

    // Respuesta de error
    return NextResponse.json(
      { error: "Hubo un problema al procesar la solicitud." },
      { status: 400 }
    );
  }
}
