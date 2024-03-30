import { Module } from '@nestjs/common';
import { SendmailService } from './sendmail.service';
import { SendmailController } from './sendmail.controller';
import { MailerModule } from '@nestjs-modules/mailer';
import { EjsAdapter } from '@nestjs-modules/mailer/dist/adapters/ejs.adapter';


@Module({
  imports: [MailerModule.forRoot({
    // Cấu hình SMTP và các tùy chọn mailer khác
    transport: {
      host: 'smtp.gmail.com',
      port: 587,
      ignoreTLS: false,
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'tranthuan05021996@gmail.com', // Thay đổi bằng email của bạn
        pass: 'amkehlpsdcopendc', // Thay đổi bằng mật khẩu email của bạn
      },
    },
    defaults: {
      from: '"No Reply" <noreply@example.com>', // Địa chỉ email mặc định
    },
    template: {
      dir: __dirname + '/templates',
      adapter: new EjsAdapter(),
      options: {
        strict: true,
      },
    },
  }
  )],
  controllers: [SendmailController],
  providers: [SendmailService],
})
export class SendmailModule {}
