import { View } from "./view.js";
export class MensagemViews extends View {
    template(mensagem) {
        return `
		    <h3 class="alert alert-info">${mensagem}</h3>
		`;
    }
}
