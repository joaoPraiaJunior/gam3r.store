import { Module } from '@nestjs/common';
import { ProdutoController } from './produto/produto.controller';

@Module({
  controllers: [ProdutoController]
})
export class ProdutoModule {}
