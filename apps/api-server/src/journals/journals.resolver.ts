import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { JournalsService } from './journals.service';
import { Journal } from './entities/journal.entity';
import { CreateJournalDto } from './dto/create-journal.dtot';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';

@Resolver(() => Journal)
export class JournalsResolver {
  constructor(private readonly journalsService: JournalsService) {}

  @Mutation(() => Journal)
  @UseGuards(JwtAuthGuard) //protected route
  async createJournal(
    @Args('createDto') createDto: CreateJournalDto,
  ): Promise<Journal> {
    return this.journalsService.create(createDto);
  }

  @Query(() => [Journal], { name: 'journals' })
  @UseGuards(JwtAuthGuard) //protected route
  async findUserJournals(
    @Args('username') username: string,
  ): Promise<Journal[]> {
    return await this.journalsService.findAll(username);
  }

  @Mutation(() => Journal)
  @UseGuards(JwtAuthGuard) //protected route
  async removeJournal(@Args('id') id: string): Promise<Journal> {
    return await this.journalsService.remove(id);
  }
}
