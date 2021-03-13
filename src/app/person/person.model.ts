import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

import { Hobby } from "../hobby/hobby.model";

@Schema()
export class Person {
  // MongooseSchema.Types.ObjectId is a mongoose type typically used for 
  // unique identifiers
  _id: MongooseSchema.Types.ObjectId;

  @Prop()
  name: string;

  @Prop({ type: [MongooseSchema.Types.ObjectId], ref: Hobby.name })
  hobbies: MongooseSchema.Types.ObjectId[];
}

// PersonDocument represent a one-to-one mapping to documents as stored 
// in MongoDB.
export type PersonDocument = Person & Document;

export const PersonSchema = SchemaFactory.createForClass(Person);