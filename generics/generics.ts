import {Data} from "../classes/Data"
// Problemas ao utilizar any
function echo(objeto: any) {
    return objeto;
}

console.log(echo("joão").length);
console.log(echo(27).length);
console.log(echo({ nome: "João", idade: 27 }));

// Solução aplicando generics
/* O tipo se da a partir da inferência ou quando declarado 
    na execução da função, isto é, na notação do generics
*/
function echoMelhorado<TipoGenerico>(objeto: TipoGenerico): TipoGenerico {
    return objeto;
}

console.log(echoMelhorado("joão").length);
console.log(echoMelhorado<number>(27));
console.log(echoMelhorado({ nome: "João", idade: 27 }));

// Generics disponíveis na API

const avaliacoes: Array<number> = [10, 9.3, 7.7];

avaliacoes.push(8.4);
// avaliacoes.push("5.5")

console.log(avaliacoes);

// Array
function imprimir<T>(args: T[]) {
    args.forEach((element) => console.log(element));
}
type Aluno = {
    nome: string;
    idade: number;
};
imprimir([1, 2, 3, 4]);
imprimir<string>(["Ana", "Bia", "Carlos"]);
imprimir<Aluno>([
    { nome: "Fulano", idade: 22 },
    { nome: "Cicrano", idade: 23 },
    { nome: "Belrano", idade: 24 },
]);

// Tipo usando generics

type Echo = <T>(data: T) => T;

// const chamarEcho: <T>(data: T) => T = echoMelhorado
const chamarEcho: Echo = echoMelhorado;

console.log(chamarEcho<string>("David"));

// Class com generics
/*  T = tipo 
    R = retorno
*/
abstract class OperacaoBinaria<T, R> {
    constructor(public operando1: T, public operando2: T) {}
    abstract executar(): R;
}

// console.log(new OperacaoBinaria("Bom", " dia").executar())
// console.log(new OperacaoBinaria(7, 3).executar())
// console.log(new OperacaoBinaria("Bom", 3).executar())
// console.log(new OperacaoBinaria({}, {}).executar())
// console.log(new OperacaoBinaria(null, {}).executar())
class SomaBinaria extends OperacaoBinaria<number, number>{
    executar(): number {
        return this.operando1 + this.operando2
    }
}

console.log(new SomaBinaria(3, 4).executar())
console.log(new SomaBinaria(30, 434).executar())

class DiferencaEntreDatas extends OperacaoBinaria<Data, string>{
    getTime(data: Data): number{
        let {dia, mes, ano} = data
        return new Date(`${mes}/${dia}/${ano}`).getTime()
    }

    executar():string{
        const t1 = this.getTime(this.operando1)
        const t2 = this.getTime(this.operando2)
        /**
         * retorna o valor absoluto, isto é,
         * sempre retorna o valor positivo.
         */
        const diferenca = Math.abs(t1-t2)
        /**
         * milisegundo * segundos * minutos * horas
         * converte um dia para milisegundo
         */ 
        const dia = 1000*60*60*24

        return `${Math.ceil(diferenca/dia)} dia(s)`
    }
}

const d1 = new Data(1, 2, 2020)
const d2 = new Data(5, 2, 2020)
console.log(new DiferencaEntreDatas(d1, d2).executar())