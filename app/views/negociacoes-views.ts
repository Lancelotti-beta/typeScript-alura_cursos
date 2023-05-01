import { Negociacoes } from '../models/negociacoes.js';
import { View } from "./view.js";

export class NegociacoesView extends View<Negociacoes> {

	protected template(negociacao: Negociacoes) {
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

	private negociacaoAdicionada(negociacoes: Negociacoes): string {
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
