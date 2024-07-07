import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismadbService } from 'src/prismadb/prismadb.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismadbService) {}
  async create(createDto: CreateUserDto) {
    return await this.prismaService.user.create({ data: { ...createDto } });
  }

  async findAll() {
    return await this.prismaService.user.findMany({});
  }

  async find(username: string) {
    return await this.prismaService.user.findUnique({ where: { username } });
  }

  //updating user password
  async update(updateDto: UpdateUserDto) {
    const user = await this.prismaService.user.findUnique({
      where: { username: updateDto.username },
    });
    if (!user) throw new UnauthorizedException('Process Declined');

    //pasword hash
    const hashedPassword = await bcrypt.hash(updateDto.password, 10);
    return await this.prismaService.user.update({
      where: { username: updateDto.username },
      data: { password: hashedPassword },
    });
  }
}
