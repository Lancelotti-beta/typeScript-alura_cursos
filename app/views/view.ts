export abstract class View<T> {
	protected elemento: HTMLElement;

	constructor(seletor: string) {
            this.elemento = document.querySelector(seletor);
        }

	protected abstract template(parametro: T): string;

	public update(parametro: T): void {
                this.elemento.innerHTML = this.template(parametro);
        }

}

