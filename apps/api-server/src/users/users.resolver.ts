import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { UpdateUserDto } from './dto/update-user.dto';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => [User], { name: 'users' })
  @UseGuards(JwtAuthGuard) // protected route
  async findAll() {
    return await this.usersService.findAllUsers();
  }

  @Query(() => User, { name: 'user' })
  async findOne(@Args('username') username: string) {
    return await this.usersService.findUser(username);
  }

  @Mutation(() => User)
  @UseGuards(JwtAuthGuard) // protected route
  async updateUser(@Args('updateDto') updateDto: UpdateUserDto) {
    return await this.usersService.updateUser(updateDto);
  }
}
