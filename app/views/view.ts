import { ModelView } from "./model-view.js";
import { Negociacoes } from '../models/negociacoes.js';

export class View<T> implements ModelView<T> {
	protected elemento: HTMLElement;

	constructor(seletor: string) {
            this.elemento = document.querySelector(seletor);
        }

	update(parametro: T): void {
                this.elemento.innerHTML = this.template(parametro);
        }

	template(parametro: T): string {
		throw new Error('Ops! A classe filha precisa implementar o método');
	}

}

