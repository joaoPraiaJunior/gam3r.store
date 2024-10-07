import Especificacoes from './Especificacoes.js';
import Precificavel from './Precificavel.js';

export default interface Produto extends Precificavel {
	id: number;
	nome: string;
	descricao: string;
	marca: string;
	modelo: string;
	imagem: string;
	nota: number;
	videoReview: string;
	tags: string[];
	especificacoes: Especificacoes;
}
