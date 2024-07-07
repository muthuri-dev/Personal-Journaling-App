import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismadbService } from 'src/prismadb/prismadb.service';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismadbService) {}
  async createUser(createDto: CreateUserDto) {
    return await this.prismaService.user.create({ data: { ...createDto } });
  }

  async findAllUsers() {
    return await this.prismaService.user.findMany({});
  }

  async findUser(username: string) {
    return await this.prismaService.user.findUnique({ where: { username } });
  }

  async updateUser(updateDto: UpdateUserDto) {
    return await this.prismaService.user.update({
      where: { id: updateDto.id },
      data: { ...updateDto },
    });
  }
}
