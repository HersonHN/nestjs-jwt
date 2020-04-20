import { Injectable } from '@nestjs/common';
import { User } from './user.interface';

@Injectable()
export class UsersService {
  private readonly users: User[];

  constructor() {
    this.users = [
      {
        userId: 1,
        username: 'test',
        password: 'test',
      },
      {
        userId: 2,
        username: 'other',
        password: 'lol',
      }
    ];
  }

  async checkIfExists({ username, password }: {
        username: string,
        password: string
      }): Promise<User | undefined> {
    return this.users.find(u => u.username === username && u.password === password);
  }
}