import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class AuthDto {
  @Field()
  username: string;

  @Field()
  password: string;
}
