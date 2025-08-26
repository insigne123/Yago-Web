import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log('Contact form submission:', body);
    
    // Basic validation
    if (!body.nombre || !body.email || !body.mensaje) {
      return NextResponse.json({ message: 'Nombre, email y mensaje son requeridos.' }, { status: 400 });
    }

    // Here you would typically handle the form submission,
    // e.g., send an email using a service like Resend or Nodemailer,
    // save the data to a database, or trigger a CRM workflow.
    
    // For this example, we'll just simulate a successful submission.
    return NextResponse.json({ message: '¡Mensaje enviado con éxito!' }, { status: 200 });
  } catch (error) {
    console.error('Error handling contact form:', error);
    return NextResponse.json({ message: 'Error al procesar la solicitud.' }, { status: 500 });
  }
}
