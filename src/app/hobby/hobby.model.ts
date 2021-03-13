import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

// marks a class as a schema definition
@Schema()
export class Hobby {

  _id: MongooseSchema.Types.ObjectId;

  //defines a property in the document.
  @Prop()
  name: string;
}

export type HobbyDocument = Hobby & Document;

export const HobbySchema = SchemaFactory.createForClass(Hobby);