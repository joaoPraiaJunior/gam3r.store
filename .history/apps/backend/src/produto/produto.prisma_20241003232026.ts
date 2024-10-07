import { Injectable } from '@nestjs/common';
import { PrismaProvider } from 'src/db/prisma.provider';
import { Produto } from '@gstore/core';

@Injectable()
export class ProdutoPrisma {
  constructor(readonly prisma: PrismaProvider) {

    async salvar(produto: Produto) {
        await this.prisma.produto.upsert({
          where: { id: produto.id ?? -1 },
          update: produto,
          create: produto,
        });

    }
  }
}
