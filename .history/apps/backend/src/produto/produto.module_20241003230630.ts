import { Module } from '@nestjs/common';
import { DbModule } from 'src/db/db.module';
import { ProdutoController } from './produto.controller';

@Module({
  imports: [DbModule],
  controllers: [ProdutoController],
})
export class ProdutoModule {}
