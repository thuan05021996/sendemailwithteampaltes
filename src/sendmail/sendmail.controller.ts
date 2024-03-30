import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SendmailService } from './sendmail.service';
import { CreateSendmailDto } from './dto/create-sendmail.dto';
import { UpdateSendmailDto } from './dto/update-sendmail.dto';

@Controller('sendmail')
export class SendmailController {
  constructor(private readonly sendmailService: SendmailService) {}

  @Post()
  create(@Body() createSendmailDto: any) {
    const { to, subject,  context } = createSendmailDto;
    // console.log("aA")
    return this.sendmailService.sendMail(to,
      subject,
     context
     );
  }
}
