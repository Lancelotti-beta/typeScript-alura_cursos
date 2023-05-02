import { DataUtils } from '../utils/data-utils.js';
import { DiasDaSemana } from '../enums/dias-da-semana.js';
import { MensagemViews } from '../views/mensagem-views.js';
import { NegociacoesView } from '../views/negociacoes-views.js';
import { Negociacao } from '../models/negociacao.js';
import { Negociacoes } from '../models/negociacoes.js';


export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacaoView = new NegociacoesView('.negociacaoView', true);
    private mensagemView = new MensagemViews('#mensagemView');

    constructor() {
        this.inputData = document.querySelector('#data') as HTMLInputElement;
        this.inputQuantidade = document.querySelector('#quantidade') as HTMLInputElement;
        this.inputValor = document.querySelector('#valor') as HTMLInputElement;
	this.negociacaoView.update(this.negociacoes);
    }

    public adiciona(): void {
	const negociacao = Negociacao
				.criaNegociacao(
					this.inputData.value,
					this.inputQuantidade.value,
					this.inputValor.value
				);
	if(!DataUtils.ehDiaUtil(negociacao.data)) {
		this.mensagemView
		    .update('A negociação só pode ser feita em dias Uteis!')
		return;
	}
        this.negociacoes.adiciona(negociacao);
        this.limparFormulario();
	this.atualizaListaNegociacao();
    }

    private limparFormulario(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }

    private atualizaListaNegociacao(): void {
        this.negociacaoView.update(this.negociacoes);
        this.mensagemView.update('Negociação concluida com Sucesso!');
    }
}
