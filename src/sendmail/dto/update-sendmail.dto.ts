import { PartialType } from '@nestjs/mapped-types';
import { CreateSendmailDto } from './create-sendmail.dto';

export class UpdateSendmailDto extends PartialType(CreateSendmailDto) {}
