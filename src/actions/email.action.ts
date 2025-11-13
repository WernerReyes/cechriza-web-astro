import { defineAction } from "astro:actions";
import { z } from "astro:schema";

import {
  MAIL_MAILER,
  MAIL_HOST,
  MAIL_PORT,
  MAIL_USERNAME,
  MAIL_PASSWORD,
  MAIL_ENCRYPTION,
} from "astro:env/server";
import nodemailer, { type Transporter, type SendMailOptions } from "nodemailer";

export class EmailService {
  private transporter: Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: MAIL_MAILER,
      auth: {
        user: MAIL_USERNAME,
        pass: MAIL_PASSWORD,
      },
      host: MAIL_HOST,
      port: Number(MAIL_PORT),
      secure: MAIL_ENCRYPTION === "ssl", // true for 465, false for other ports
      from: MAIL_USERNAME,
      to: MAIL_USERNAME,
      debug: true,
      logger: true,
    });
  }

  async sendEmail(options: SendMailOptions): Promise<boolean> {
    const { subject, html, replyTo } = options;

    try {
      await this.transporter.sendMail({
        
        from: MAIL_USERNAME,
        to: MAIL_USERNAME,
        subject: subject,
        replyTo,
        html: html,
      });

      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}

export const EmailSend = defineAction({
  accept: "form",
  input: z.object({
    email: z.string().email().optional(),
    subject: z.string().optional(),
    extraFields: z.string().optional(),
  }),
  handler: async ({ email, subject, extraFields }) => {
    console.log({
      subject,
      extraFields,
    });

    const extraFieldsParsed = (
      extraFields ? JSON.parse(extraFields) : []
    ) as Array<{ name: string; value: string }>;
    console.log({ extraFieldsParsed });

    const emailService = new EmailService();


    const emailSent = await emailService.sendEmail({
      replyTo: email || undefined,
      subject:
        subject || (email ? `Nuevo mensaje de ${email}` : "Nuevo mensaje"),
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border-radius: 8px; overflow: hidden; border: 1px solid #e0e0e0;">
        <div style="background-color: #26499E; padding: 30px 20px; text-align: center;">
          <h2 style="color: white; margin: 0;">Mensaje enviado desde la web</h2>
        </div>
        <div style="padding: 30px; background-color: white;">

          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 30px 0; border-left: 4px solid #26499E;">
            <h3 style="color: #26499E; margin: 0 0 15px 0; font-size: 16px;">Resumen de consulta:</h3>
            
            ${
              email
                ? `<div style="margin-bottom: 15px;">
              <p style="margin: 0 0 5px 0; color: #777; font-size: 14px; font-weight: bold;">Correo:</p>
              <p style="margin: 0; color: #333; font-size: 15px;">${email}</p>
            </div>`
                : ""
            }
            
            ${
              subject
                ? `<div style="margin-bottom: 15px;">
              <p style="margin: 0 0 5px 0; color: #777; font-size: 14px; font-weight: bold;">Asunto:</p>
              <p style="margin: 0; color: #333; font-size: 15px;">${subject}</p>
            </div>`
                : ""
            }

            ${extraFieldsParsed
              ?.map(
                (field) => `<div style="margin-bottom: 15px;">
                  <p style="margin: 0 0 5px 0; color: #777; font-size: 14px; font-weight: bold;">${field.name}:</p>
                  <p style="margin: 0; color: #333; font-size: 15px;">${field.value}</p>
                </div>`
              )
              .join("")}  

           
          </div>
          
         
        </div>
        <div style="background-color: #f5f5f5; padding: 20px; text-align: center; font-size: 12px; color: #777;">
          <p>© 2025 Cechriza S.A.C. Todos los derechos reservados.</p>
        </div>
      </div>
    
      
      `,
    });
    return emailSent;
  },
});
