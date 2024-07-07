import { Test, TestingModule } from '@nestjs/testing';
import { JournalsResolver } from './journals.resolver';
import { JournalsService } from './journals.service';

describe('JournalsResolver', () => {
  let resolver: JournalsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JournalsResolver, JournalsService],
    }).compile();

    resolver = module.get<JournalsResolver>(JournalsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
