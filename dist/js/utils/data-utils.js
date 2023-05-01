import { DiasDaSemana } from '../enums/dias-da-semana.js';
export class DataUtils {
    static ehDiaUtil(data) {
        return data.getDay() > DiasDaSemana.DOMINGO
            && data.getDay() < DiasDaSemana.SABADO;
    }
}
