import { ApiProperty } from '@nestjs/swagger';

export class ContactDto {
  @ApiProperty()
  firstname: string;

  @ApiProperty()
  lastname: string;

  @ApiProperty()
  number: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  favorite: boolean;
}
