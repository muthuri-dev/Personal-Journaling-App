import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { ConfigService } from '@nestjs/config';
import { PrismadbService } from 'src/prismadb/prismadb.service';

@Module({
  providers: [UsersResolver, UsersService, ConfigService, PrismadbService],
  exports: [UsersService],
})
export class UsersModule {}
