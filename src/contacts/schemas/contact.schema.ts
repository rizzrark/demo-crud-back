import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ContactDocument = Contact & Document;

@Schema()
export class Contact {
  @Prop()
  firstname: string;

  @Prop()
  lastname: string;

  @Prop()
  number: string;

  @Prop()
  email: string;

  @Prop()
  favorite: boolean;
}

export const ContactSchema = SchemaFactory.createForClass(Contact);
