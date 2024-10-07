'use client';
import CabecalhoCheckout from '@/src/components/checkout/CabecalhoCheckout';
import FormularioEntrega from '@/src/components/checkout/pagamento/FormularioEntrega';
import ResumoPagamento from '@/src/components/checkout/pagamento/ResumoPagamento';
import SelecaoFormaPagamento from '@/src/components/checkout/pagamento/SelecaoFormaPagamento';
import useCarrinho from '@/src/data/hooks/useCarrinho';
import usePagamento from '@/src/data/hooks/usePagamento';

export default function Page() {
	const { parcelamento, qtdeItens, valorTotal, valorTotalCheio } = useCarrinho();
	const { entrega, formaPagamento, alterarEntrega, alterarFormaPagamento, finalizarCompra } = usePagamento();

	return (
		<div className="flex flex-col gap-7 container">
			<CabecalhoCheckout passo="pagamento" />
			<div className="flex gap-5">
				<div className="flex-1 flex flex-col gap-5">
					<SelecaoFormaPagamento formaPagamento={formaPagamento} formaPagamentoMudou={alterarFormaPagamento} />
					<FormularioEntrega entrega={entrega} entregaMudou={alterarEntrega} />
				</div>
				<ResumoPagamento qtdeItens={qtdeItens} valorTotal={valorTotal} valorTotalCheio={valorTotalCheio} parcelamento={parcelamento} finalizarCompra={finalizarCompra} className="mt-12" />
			</div>
		</div>
	);
}
