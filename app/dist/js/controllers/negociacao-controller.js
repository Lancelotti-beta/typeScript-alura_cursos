import { DataUtils } from '../utils/data-utils.js';
import { MensagemViews } from '../views/mensagem-views.js';
import { NegociacoesView } from '../views/negociacoes-views.js';
import { Negociacao } from '../models/negociacao.js';
import { Negociacoes } from '../models/negociacoes.js';
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacaoView = new NegociacoesView('.negociacaoView', true);
        this.mensagemView = new MensagemViews('#mensagemView');
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacaoView.update(this.negociacoes);
    }
    adiciona() {
        const negociacao = Negociacao
            .criaNegociacao(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
        if (!DataUtils.ehDiaUtil(negociacao.data)) {
            this.mensagemView
                .update('A negociação só pode ser feita em dias Uteis!');
            return;
        }
        this.negociacoes.adiciona(negociacao);
        this.limparFormulario();
        this.atualizaListaNegociacao();
    }
    limparFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
    atualizaListaNegociacao() {
        this.negociacaoView.update(this.negociacoes);
        this.mensagemView.update('Negociação concluida com Sucesso!');
    }
}
