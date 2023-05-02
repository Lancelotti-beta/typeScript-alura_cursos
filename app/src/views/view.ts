export abstract class View<T> {
	protected elemento: HTMLElement;
	private escapar = false;

	constructor(seletor: string, escapar?: boolean) {
            const elemento = document.querySelector(seletor);

	    if(elemento) this.elemento = elemento as HTMLInputElement;
	    else throw Error(`O ${seletor} não existe no DOM. Verifique`);

	    if(escapar) this.escapar = escapar;
        }

	protected abstract template(parametro: T): string;

	public update(parametro: T): void {
		let template = this.template(parametro);
		const exp = /<script>[\s\S]*?<\/script>/;

		if(this.escapar) {
			template = template
					.replace(exp, '');
		}

                this.elemento.innerHTML = template;
        }

}

