export class View {
    constructor(seletor, escapar) {
        this.escapar = false;
        this.elemento = document.querySelector(seletor);
        if (escapar)
            this.escapar = escapar;
    }
    update(parametro) {
        let template = this.template(parametro);
        const exp = /<script>[\s\S]*?<\/script>/;
        if (this.escapar) {
            template = template
                .replace(exp, '');
        }
        this.elemento.innerHTML = template;
    }
}
