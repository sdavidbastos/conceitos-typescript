// @logarClasse
// @logarClasseSe(true)
// @decorator({a: "Teste", b:123})
function logarClasse(constructor: Function) {
    console.log(constructor);
}

/**
 * Função Factory
 * Tem como objetivo retornar um decorator.
 */

function decatorVazio(_: Function) {}

function logarClasseSe(valor: boolean) {
    return valor ? logarClasse : decatorVazio;
}

function decorator(obj: { a: string; b: number }) {
    return function (_: Function): void {
        console.log(obj.a + " " + obj.b);
    };
}

/**
 * Obs.: O decorator é chamdado
 * sempre que a classe é carregada
 *
 * Abaixo segue o tipo de assinatura
 * de um tipo de construtor mais generico
 */

export type Construtor = { new (...args: any[]): {} };

/**
 * Função abaixo retorna uma classe anonima
 * que herda da função que foi decorada
 */
function logarObjeto(constructor: Construtor) {
    console.log("Carregado...");
    // classe anonima
    return class extends constructor {
        /**
         * construtor da classe pai.
         * Dentro do construtor p
         */
        constructor(...args: any[]) {
            console.log("Antes...");
            super(...args);
            console.log("Depois...");
        }
    };
}

// new Eletrodomestico()
// new Eletrodomestico()
// new Eletrodomestico()
interface Eletrodomestico {
    imprimir?(): void;
}

/**
 * Pode-se aplicar multiplos decorators
 */
@logarObjeto
@imprimivel
class Eletrodomestico {
    constructor() {
        console.log("Novo...");
    }
}

function imprimivel(constructor: Function) {
    constructor.prototype.imprimir = function () {
        console.log(` => ${JSON.stringify(this)}`);
    };
}
/**
 * Casting
 * Força que a variavél ou instancia
 * seja de determinado tipo
 * Ex.: (<any>new Eletrodomestico()).imprimir()
 */

/**
 * A saida mis interessante para esse problema
 * é instancia a classe e executa-la somente
 * se existir o metodo imprimir.
 * Como farei a seguir
 */

const eletro = new Eletrodomestico();
eletro.imprimir && eletro.imprimir();
// eletro.imprimir && eletro.imprimir();

