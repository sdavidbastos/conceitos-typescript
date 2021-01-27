export class Data {
    // Público por padrão
    dia: number;
    public mes: number;
    ano: number;

    constructor(dia: number = 1, mes: number = 1, ano: number = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
