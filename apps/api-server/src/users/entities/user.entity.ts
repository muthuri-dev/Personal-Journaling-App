import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Journal } from 'src/journals/entities/journal.entity';

@ObjectType()
export class User {
  @Field(() => ID)
  id: string;

  @Field()
  username: string;

  @Field(() => [Journal], { nullable: true })
  journal?: Journal[];

  @Field()
  created_at: Date;

  @Field()
  updated_at: Date;
}
