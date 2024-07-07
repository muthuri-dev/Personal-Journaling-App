import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { UpdateUserDto } from './dto/update-user.dto';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => [User], { name: 'users' })
  @UseGuards(JwtAuthGuard) // protected route ✅
  async findAll() {
    return await this.usersService.findAll();
  }

  @Query(() => User, { name: 'user' })
  async findOne(@Args('username') username: string) {
    return await this.usersService.find(username);
  }

  @Mutation(() => User)
  @UseGuards(JwtAuthGuard) // protected route ✅
  async updateUserPassword(
    @Args('updateDto') updateDto: UpdateUserDto,
  ): Promise<User> {
    return await this.usersService.update(updateDto);
  }
}
