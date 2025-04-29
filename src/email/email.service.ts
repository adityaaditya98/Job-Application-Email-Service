import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class EmailService {
  constructor(private readonly mailerService: MailerService) {}

  async sendWelcomeEmail(to: string, name: string): Promise<void> {
    await this.mailerService.sendMail({
      to,
      subject: `Job Application for ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
            </style>
          </head>
          <body>
            <div></div>
          </body>
        </html>
      `,
      attachments: [
        {
          filename: 'location.pdf', // name as it appears in email
          path: 'location.pdf', // file path (relative or absolute)
        },
      ],
    });
  }
}
  
