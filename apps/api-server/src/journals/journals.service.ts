import { Injectable } from '@nestjs/common';
import { CreateJournalDto } from './dto/create-journal.dtot';
import { PrismadbService } from 'src/prismadb/prismadb.service';
import { Journal } from './entities/journal.entity';

@Injectable()
export class JournalsService {
  constructor(private readonly prismaService: PrismadbService) {}
  async create(journalDto: CreateJournalDto): Promise<Journal> {
    return await this.prismaService.journal.create({ data: { ...journalDto } });
  }

  async findAll(username: string): Promise<Journal[]> {
    return await this.prismaService.journal.findMany({
      where: { user_name: username },
    });
  }

  async remove(id: string) {
    const journal = await this.prismaService.journal.findUnique({
      where: { id: id },
    });

    if (!journal) {
      throw new Error(`Journal entry does not exist.`);
    }
    return await this.prismaService.journal.delete({ where: { id } });
  }
}
