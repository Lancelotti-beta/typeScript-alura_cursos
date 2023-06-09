import { View } from "./view.js";
export class NegociacoesView extends View {
    template(negociacao) {
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
    negociacaoAdicionada(negociacoes) {
        return negociacoes
            .lista()
            .map(({ data, quantidade, valor }) => {
            return `
                	    	<tr>
                    		    <td>${new Intl
                .DateTimeFormat()
                .format(data)}</td>
                    		    <td>${quantidade}</td>
                    		    <td>${valor}</td>
                	    	</tr>
                		`;
        }).join('');
    }
}
