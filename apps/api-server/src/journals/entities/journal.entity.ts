import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Journal {
  @Field(() => ID)
  id: string;

  @Field()
  title: string;

  @Field()
  content: string;

  @Field()
  date: string;

  @Field()
  category: string;

  @Field()
  feeling: string;

  @Field()
  user_name: string;

  @Field()
  created_at: Date;

  @Field()
  updated_at: Date;
}
