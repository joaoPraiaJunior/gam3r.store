import Pagina from '@/src/components/template/Pagina';
import { ProvedorCarrinho } from '@/src/data/contexts/ContextoCarrinho';
import { ProvedorPagamento } from '@/src/data/contexts/ContextoPagamento';
import { ProvedorProdutos } from '@/src/data/contexts/ContextoProdutos';

export default function Layout(props: any) {
	return (
		<ProvedorProdutos>
			<ProvedorCarrinho>
				<ProvedorPagamento>
					<Pagina>{props.children}</Pagina>
				</ProvedorPagamento>
			</ProvedorCarrinho>
		</ProvedorProdutos>
	);
}
