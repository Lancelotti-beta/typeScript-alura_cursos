import { DiasDaSemana } from '../enums/dias-da-semana.js'

export class DataUtils {
    public static ehDiaUtil(data: Date): boolean {
        return data.getDay() > DiasDaSemana.DOMINGO
                && data.getDay() < DiasDaSemana.SABADO;
    }

}
