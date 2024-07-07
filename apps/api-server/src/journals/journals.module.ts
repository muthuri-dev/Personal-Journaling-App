import { Module } from '@nestjs/common';
import { JournalsService } from './journals.service';
import { JournalsResolver } from './journals.resolver';
import { PrismadbService } from 'src/prismadb/prismadb.service';
import { ConfigService } from '@nestjs/config';

@Module({
  providers: [
    JournalsResolver,
    JournalsService,
    PrismadbService,
    ConfigService,
  ],
})
export class JournalsModule {}
