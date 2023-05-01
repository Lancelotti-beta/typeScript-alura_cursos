export class View {
    constructor(seletor, escapar) {
        this.escapar = false;
        const elemento = document.querySelector(seletor);
        if (elemento)
            this.elemento = elemento;
        else
            throw Error(`O ${seletor} não existe no DOM. Verifique`);
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
