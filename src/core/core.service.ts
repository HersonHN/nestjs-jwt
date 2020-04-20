import { Injectable } from '@nestjs/common';

@Injectable()
export class CoreService {
  getHome(): string {
    return '~';
  }
}
