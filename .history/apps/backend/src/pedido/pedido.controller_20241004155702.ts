import { Controller, Delete, Get, Post } from '@nestjs/common';

@Controller('pedidos')
@Controller('pedidos')
export class PedidoController {
  constructor(private readonly repo: PedidoPrisma) {}

  @Post()
  async salvar(@Body() pedido: Pedido) {
    return this.repo.salvar(pedido);
  }

  @Get()
  async obterPedidos() {
    return this.repo.obter();
  }

  @Get(':id')
  async obterPedidoPorId(@Param('id') id: string) {
    return this.repo.obterPorId(+id);
  }

  @Delete(':id')
  async excluirPedido(@Param('id') id: string) {
    return this.repo.excluir(+id);
  }
}
