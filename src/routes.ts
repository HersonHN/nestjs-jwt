import { Routes } from 'nest-router';

import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

export const routes : Routes = [
  {
    path: 'user',
    module: UserModule
  },
  {
    path: 'auth',
    module: AuthModule
  },
];