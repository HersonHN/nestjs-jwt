import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { RouterModule } from 'nest-router';

import { SharedModule } from './shared/shared.module';

import { routes } from './routes';

@Module({
  imports: [
    SharedModule,
    RouterModule.forRoutes(routes),
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
  }
}
