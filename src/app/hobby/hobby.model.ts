import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Field, ObjectType } from '@nestjs/graphql';
import { Document, Schema as MongooseSchema } from 'mongoose';

// marks a class as a schema definition
@ObjectType()
@Schema()
export class Hobby {

  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  //defines a property in the document.
  @Field(() => String)
  @Prop()
  name: string;
}

export type HobbyDocument = Hobby & Document;

export const HobbySchema = SchemaFactory.createForClass(Hobby);