import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { User } from 'src/users/entities/user.entity';
import { AuthDto } from './dto/create-auth.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  //validating user

  async validateUser(username: string, password: string) {
    const user = await this.usersService.findUser(username);

    if (!user) throw new BadRequestException('Enter correct username');

    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (user && isPasswordMatch) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...userWithNoPass } = user;
      return userWithNoPass;
    }
  }

  //login user service
  async login(user: User) {
    //TODO: Implement jwt here - done
    return {
      access_token: this.jwtService.sign({
        username: user.username,
        sub: user.id,
      }),
      user,
    };
  }

  //register user
  async register(authDto: AuthDto) {
    const user = await this.usersService.findUser(authDto.username);

    if (user) throw new Error('User with username already exists');

    const hashedPassword = await bcrypt.hash(authDto.password, 10);
    return this.usersService.createUser({
      ...authDto,
      password: hashedPassword,
    });
  }
}
