import { Resolver, Mutation, Args, Context } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { Auth } from './entities/auth.entity';
import { AuthDto } from './dto/create-auth.dto';
import { User } from 'src/users/entities/user.entity';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from './guards/gql.guard';

@Resolver(() => Auth)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => Auth)
  @UseGuards(GqlAuthGuard)
  async login(@Args('authDto') authDto: AuthDto, @Context() context) {
    return await this.authService.login(context.user);
  }

  @Mutation(() => User)
  async register(@Args('authDto') authDto: AuthDto) {
    return await this.authService.register(authDto);
  }
}
