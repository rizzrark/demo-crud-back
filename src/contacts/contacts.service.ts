import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ContactDto } from './dto/contact.dto';
import { Contact, ContactDocument } from './schemas/contact.schema';

@Injectable()
export class ContactsService {
  constructor(
    @InjectModel(Contact.name) private contactModel: Model<ContactDocument>,
  ) {}

  async create(createContactDto: ContactDto) {
    const contact = new this.contactModel(createContactDto);
    return contact.save();
  }

  async findAll() {
    return this.contactModel.find().exec();
  }

  async findOne(id: string) {
    const contact = await this.contactModel.findById(id);
    return contact;
  }

  async update(id: string, updateContactDto: ContactDto) {
    const contact = await this.contactModel.findById(id);
    Object.assign(contact, updateContactDto);
    await contact.save();
    return contact;
  }

  async remove(id: string) {
    const contact = await this.contactModel.findByIdAndDelete(id);
    return contact;
  }
}
