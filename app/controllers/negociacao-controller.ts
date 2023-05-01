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
    private negociacaoView = new NegociacoesView('.negociacaoView');
    private mensagemView = new MensagemViews('#mensagemView');

    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
	this.negociacaoView.update(this.negociacoes);
    }

    public adiciona(): void {
        const negociacao = this.criaNegociacao();
	if(!this.ehDiaUtil(negociacao.data)) {
		this.mensagemView
		    .update('A negociação só pode ser feita em dias Uteis!')
		return;
	}
        this.negociacoes.adiciona(negociacao);
        this.limparFormulario();
	this.atualizaListaNegociacao();
    }

    private ehDiaUtil(data: Date): boolean {
	return data.getDay() > DiasDaSemana.DOMINGO 
		&& data.getDay() < DiasDaSemana.SABADO;
    }

    private criaNegociacao(): Negociacao {
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(date, quantidade, valor);
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
