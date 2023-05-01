import { ModelView } from "./model-view.js";

export abstract class View<T> implements ModelView<T, string, void> {
	protected elemento: HTMLElement;

	constructor(seletor: string) {
            this.elemento = document.querySelector(seletor);
        }

	abstract template(parametro: T): string;

	update(parametro: T): void {
                this.elemento.innerHTML = this.template(parametro);
        }

}

