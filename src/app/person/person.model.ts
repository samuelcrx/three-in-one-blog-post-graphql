import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Field, ObjectType } from '@nestjs/graphql';
import { Document, Schema as MongooseSchema } from 'mongoose';

import { Hobby } from "../hobby/hobby.model";

@ObjectType()
@Schema()
export class Person {
  // MongooseSchema.Types.ObjectId is a mongoose type typically used for 
  // unique identifiers
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Field(() => String)
  @Prop()
  name: string;

  @Field(() => [Hobby])
  @Prop({ type: [MongooseSchema.Types.ObjectId], ref: Hobby.name })
  hobbies: MongooseSchema.Types.ObjectId[] | Hobby[];
}

// PersonDocument represent a one-to-one mapping to documents as stored 
// in MongoDB.
export type PersonDocument = Person & Document;

export const PersonSchema = SchemaFactory.createForClass(Person);