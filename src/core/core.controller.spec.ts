import { Test, TestingModule } from '@nestjs/testing';
import { CoreController } from './core.controller';
import { CoreService } from './core.service';

describe('CoreController', () => {
  let coreController: CoreController;

  beforeEach(async () => {
    const core: TestingModule = await Test.createTestingModule({
      controllers: [CoreController],
      providers: [CoreService],
    }).compile();

    coreController = core.get<CoreController>(CoreController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(coreController.getHome()).toBe('~');
    });
  });
});