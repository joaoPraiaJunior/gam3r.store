import { Injectable } from '@nestjs/common';
import { PrismaProvider } from 'src/db/prisma.provider';

@Injectable()
export class ProdutoPrisma {
  constructor(readonly prisma: PrismaProvider) {
    await this.prisma.produto.upsert({
      where: { id: produto ?? -1 },
      update: produto,
      create: produto,
    });
  }
}
