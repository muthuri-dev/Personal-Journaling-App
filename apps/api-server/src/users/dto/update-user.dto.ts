import { CreateUserDto } from './create-user.dto';
import { InputType, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUserDto extends PartialType(CreateUserDto) {}
