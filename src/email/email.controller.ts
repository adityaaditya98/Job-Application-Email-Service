import { Controller, Get, Query } from '@nestjs/common';
import { EmailService } from './email.service';

@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Get('send')
  async send(@Query('to') to: string, @Query('name') name: string) {
    console.log("start:-");
    await this.emailService.sendWelcomeEmail(to, name);
    return `${to} Email sent successfully`;
  }
}