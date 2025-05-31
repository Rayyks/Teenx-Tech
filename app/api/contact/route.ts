import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

// Debug logging
console.log("RESEND_API_KEY exists:", !!process.env.RESEND_API_KEY);

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  firstName: z.string().min(2).max(255),
  lastName: z.string().min(2).max(255),
  email: z.string().email(),
  subject: z.string().min(2).max(255),
  message: z.string().min(10),
});

export async function POST(request: NextRequest) {
  try {
    console.log("API route called");

    // Check if API key exists
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not set");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    const body = await request.json();
    console.log("Request body:", body);

    // Validate the request body
    const validatedData = contactSchema.parse(body);
    const { firstName, lastName, email, subject, message } = validatedData;

    console.log("Validated data:", validatedData);

    // Send email using Resend
    console.log("Sending email...");
    const { data, error } = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: ["brtyand@gmail.com"],
      subject: `New Contact Form Submission: ${subject}`,
      html: `
    <div style="
      font-family: 'Inter', Arial, sans-serif; 
      max-width: 600px; 
      margin: 0 auto;
      background-color: #0f172a;
      color: #e2e8f0;
      padding: 2rem;
      border-radius: 0.5rem;
    ">
      <div style="
        border-bottom: 2px solid #3b82f6;
        padding-bottom: 1rem;
        margin-bottom: 1.5rem;
      ">
        <h2 style="
          color: #ffffff;
          font-size: 1.5rem;
          font-weight: 600;
          margin: 0;
        ">
          New Contact Form Submission
        </h2>
      </div>
      
      <div style="
        background-color: #1e293b;
        padding: 1.5rem;
        border-radius: 0.5rem;
        margin-bottom: 1.5rem;
      ">
        <h3 style="
          color: #93c5fd;
          font-size: 1.25rem;
          margin-top: 0;
          margin-bottom: 1rem;
        ">
          Contact Details
        </h3>
        <p style="margin: 0.5rem 0;"><strong style="color: #bfdbfe;">Name:</strong> ${firstName} ${lastName}</p>
        <p style="margin: 0.5rem 0;"><strong style="color: #bfdbfe;">Email:</strong> <a href="mailto:${email}" style="color: #60a5fa; text-decoration: none;">${email}</a></p>
        <p style="margin: 0.5rem 0;"><strong style="color: #bfdbfe;">Subject:</strong> ${subject}</p>
      </div>
      
      <div style="
        background-color: #1e293b;
        padding: 1.5rem;
        border-radius: 0.5rem;
        border: 1px solid #334155;
      ">
        <h3 style="
          color: #93c5fd;
          font-size: 1.25rem;
          margin-top: 0;
          margin-bottom: 1rem;
        ">
          Message
        </h3>
        <div style="
          line-height: 1.6;
          color: #e2e8f0;
          white-space: pre-line;
        ">
          ${message.replace(/\n/g, "<br>")}
        </div>
      </div>
      
      <div style="
        margin-top: 1.5rem;
        padding: 1rem;
        background-color: #1e3a8a;
        border-radius: 0.5rem;
        text-align: center;
      ">
        <p style="
          margin: 0;
          font-size: 0.875rem;
          color: #bfdbfe;
        ">
          Email ini di kirim.
        </p>
      </div>
    </div>
  `,
      text: `
    New Contact Form Submission
    
    Name: ${firstName} ${lastName}
    Email: ${email}
    Subject: ${subject}
    
    Message:
    ${message}
  `,
      replyTo: email,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email", details: error },
        { status: 500 }
      );
    }

    console.log("Email sent successfully:", data);
    return NextResponse.json(
      { message: "Email sent successfully", id: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error("API error:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid form data", details: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        error: "Internal server error",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
