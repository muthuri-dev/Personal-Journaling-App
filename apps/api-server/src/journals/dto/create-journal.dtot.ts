import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateJournalDto {
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
}
