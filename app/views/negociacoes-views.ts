import { Negociacoes } from '../models/negociacoes.js';

export class NegociacoesView {

	private elemento: HTMLElement; 

	constructor(seletor: string) {
	    this.elemento = document.querySelector(seletor);
	}

	template(negociacao: Negociacoes): string {
		return `
		<table class="table table-houver table-bordered">
		    <thead>
		        <tr>
			    <th>DATA</th>
			    <th>QUANTIDADE</th>
			    <th>VALOR</th>
			</tr>	    
		    </thead>
		    <tbody>
			${this.negociacaoAdicionada(negociacao)}			       	    </tbody>
		</table>
		`;
	}

	update(negociacoes: Negociacoes): void {
		this.elemento.innerHTML = this.template(negociacoes);
	}

	negociacaoAdicionada(negociacoes: Negociacoes): string {
		return negociacoes
			.lista()
			.map(({data, quantidade, valor}) => {
				return `
                	    	<tr>
                    		    <td>${
					new Intl
					    .DateTimeFormat()
					    .format(data)
				    }</td>
                    		    <td>${quantidade}</td>
                    		    <td>${valor}</td>
                	    	</tr>
                		`
			}).join('');
	}
}
