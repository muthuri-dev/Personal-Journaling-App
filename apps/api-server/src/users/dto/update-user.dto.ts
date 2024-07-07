import { CreateUserDto } from './create-user.dto';
import { InputType, Field, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateUserDto extends PartialType(CreateUserDto) {
  @Field(() => ID)
  id: string;
}
