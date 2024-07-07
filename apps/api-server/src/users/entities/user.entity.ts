import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => ID)
  id: string;

  @Field()
  username: string;

  @Field({ nullable: true })
  journal?: string;

  @Field()
  created_at: Date;

  @Field()
  updated_at: Date;
}
