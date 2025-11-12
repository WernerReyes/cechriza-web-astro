import { defineAction } from "astro:actions";
import { z } from "astro:schema";

import {
  MAILER_SERVICE,
  MAILER_EMAIL,
  MAILER_SECRET_KEY,
} from "astro:env/server";
import nodemailer, { type Transporter, type SendMailOptions } from "nodemailer";

export class EmailService {
  private transporter: Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: MAILER_SERVICE,
      auth: {
        user: MAILER_EMAIL,
        pass: MAILER_SECRET_KEY,
      },
      debug: true,
      logger: true,
    });
  }

  async sendEmail(options: SendMailOptions): Promise<boolean> {
    const { subject, html, from } = options;

    try {
      await this.transporter.sendMail({
        from: from,
        to: MAILER_EMAIL,
        subject: subject,
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
    to: z.string().email(),
    from: z.string().email(),
    subject: z.string().optional(),
    extraFields: z.string().optional(),
  }),
  handler: async ({ to, from, subject, extraFields }) => {
    console.log({
      to,
      from,
      subject,
      extraFields,
    })

    const extraFieldsParsed = (extraFields ? JSON.parse(extraFields) : []) as Array<{ name: string; value: string }>;
    console.log({ extraFieldsParsed }
)

    const emailService = new EmailService();

    const emailSent = await emailService.sendEmail({
      to,
      from,
      subject: subject || `Nuevo mensaje de ${from}`,
      html: `
        <div style="font-family: Arial, sans-serif; 
        color: #333; max-width: 600px; margin: 0 auto;
         padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
          <h2 style="color: #4A90E2; text-align: center;">Nuevo Mensaje de Contacto</h2>
          <p style="font-size: 16px; line-height: 1.6;">
            <strong>El cliente con el correo:</strong> 
            <a href="mailto:${from}" style="color: #4A90E2; text-decoration: none;">${from}</a>
          </p>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <thead>
              <tr>
                <th style="border: 1px solid #ddd; padding: 8px; background-color: #f4f4f4; text-align: left;">Campo</th>
                <th style="border: 1px solid #ddd; padding: 8px; background-color: #f4f4f4; text-align: left;">Valor</th>
              </tr>
            </thead>
            <tbody>
              ${extraFieldsParsed
                ?.map(
                  (field) => `
                    <tr>
                      <td style="border: 1px solid #ddd; padding: 8px;">${field.name}</td>
                      <td style="border: 1px solid #ddd; padding: 8px;">${field.value}</td>
                    </tr>
                  `
                )
                .join("")}
            </tbody>
          </table>
        </div>
      `,
    });
    return emailSent;
  },
});
