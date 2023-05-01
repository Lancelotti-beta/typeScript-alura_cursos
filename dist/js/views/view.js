export class View {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    update(parametro) {
        this.elemento.innerHTML = this.template(parametro);
    }
}
