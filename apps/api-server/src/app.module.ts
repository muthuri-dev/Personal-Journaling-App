import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { PrismadbService } from './prismadb/prismadb.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { JournalsModule } from './journals/journals.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      sortSchema: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    UsersModule,
    AuthModule,
    JournalsModule,
  ],
  providers: [ConfigService, PrismadbService],
})
export class AppModule {}
