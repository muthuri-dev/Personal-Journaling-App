import { ObjectType, Field } from '@nestjs/graphql';
import { User } from 'src/users/entities/user.entity';

@ObjectType()
export class Auth {
  @Field()
  access_token: string;

  @Field(() => User)
  user: User;
}
