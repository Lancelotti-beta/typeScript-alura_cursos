import { View } from "./view.js";

export class MensagemViews extends View<string> {

	template(mensagem: string) {
		return `
		    <h3 class="alert alert-info">${mensagem}</h3>
		`;
	}
}
