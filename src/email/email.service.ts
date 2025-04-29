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
            <div>I hope this message finds you well. My name is Aditya Boddu, and I am writing to express my interest in the ${name}. With a Master’s degree in Computer Applications and extensive experience in backend and full-stack development, I believe I would be a valuable addition to your team.<br><br>I have hands-on experience in various technologies such as Java, Spring Boot, Node.js, MySQL, and PostgreSQL, and have successfully built and maintained applications such as a Network Monitoring System and a Student Management System. I am highly skilled in designing RESTful APIs, implementing JWT for session management security, and ensuring optimal performance in database-driven applications.<br><br>As I am currently applying for a Germany Opportunity Card, I am keen on opportunities that align with my background in software development and offer a dynamic environment for growth. I would be thrilled to contribute my skills to your team and help drive innovation in your products.<br><br>Please find my resume attached for your consideration. If there are any current or upcoming openings that might be a good fit for my skill set, I would greatly appreciate it if you could let me know.<br><br>Thank you for your time and consideration. I look forward to hearing from you<br><br>Best regards,<br>Aditya Boddu</div>
          </body>
        </html>
      `,
      attachments: [
        {
          filename: 'Aditya Boddu Resume.pdf', // name as it appears in email
          path: 'Aditya Boddu Resume.pdf', // file path (relative or absolute)
        },
      ],
    });
  }
}
  