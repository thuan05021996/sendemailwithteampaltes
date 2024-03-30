import { Injectable } from '@nestjs/common';
import { CreateSendmailDto } from './dto/create-sendmail.dto';
import { UpdateSendmailDto } from './dto/update-sendmail.dto';
import { MailerService } from '@nestjs-modules/mailer';
import { join } from 'path';

@Injectable()
export class SendmailService {
  constructor(private readonly mailerService: MailerService) {}

  async sendMail(
    to: string,
    subject: string,
    // welcome: string, // Tham số này biểu thị tên của template
    context: any, // Đối tượng context chứa dữ liệu cho template
  ): Promise<void> {
  
    const templatePath = join(__dirname, '..', 'teamplates', 'welcome.ejs');
  
    const { username, code } = context
    // console.log(username, code)
    await this.mailerService.sendMail({
      to, // Địa chỉ email người nhận
      subject, // Tiêu đề email
      template : templatePath,
      context: { // dữ liệu có thay đổi
      ['code']: code,
      ['username']: username
      }, // Dữ liệu có thay đổi
    });
   
  }
  

 
}
