import { Controller } from '@nestjs/common';

@Controller()
export class AppController {
  ping(): string {
    return 'pong';
  }
}
