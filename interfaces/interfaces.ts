/**
 * Interface se assemelha a um contrato.
 */

interface Humano {
    nome: string;
    idade?: number;
    [prop: string]: any;
    saudar(sobrenome: string): void;
}

function saudarComOla(pessoa: Humano) {
    console.log("Olá " + pessoa.nome);
}
function mudarNome(pessoa: Humano) {
    pessoa.nome = "O brabo";
}

const pessoa = {
    nome: "David Bastos",
    idade: 22,
    saudar(sobrenome: string) {
        console.log(`Olá, meu nome é ${this.nome} ${sobrenome}`);
    },
};

saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
// saudarComOla({nome: "Jonas", idade: 27})

pessoa.saudar("Skywalker");

/**
 * Usando classes...
 */
class Cliente implements Humano {
    nome: string = "";
    ultimaCompra: Date = new Date();
    saudar(sobrenome: string) {
        console.log(`Olá meu nome é ${this.nome} ${sobrenome}`);
    }
}

const meuCliente = new Cliente();

meuCliente.nome = "David";

saudarComOla(meuCliente);
meuCliente.saudar("Tavares");
console.log(meuCliente.ultimaCompra);

// Inerface Função

interface FuncaoCalculo {
    (a: number, b: number): number;
}

let potencia: FuncaoCalculo;

potencia = function (base: number, exp: number): number {
    return Array(exp)
        .fill(base)
        .reduce((acc, n) => acc * n);
};

console.log(potencia(3, 10));

/**
 * Herança
 * Quando a herança é de classe para classe
 * ou interface para interface usamos extends
 */

interface A {
    a(): void;
}

interface B {
    b(): void;
}

interface ABC extends A, B {}

interface ABC extends A, B {
    c(): void;
}

class RealA implements A {
    a(): void {}
}

class RealAB implements A, B {
    a(): void {}
    b(): void {}
}

class RealABC implements ABC {
    a(): void {}
    b(): void {}
    c(): void {}
}

abstract class AbstrataADB implements A, B{
    a(): void {}
    b(): void {}

    abstract d(): void
}
const x = 10

interface Object {
    log(): void
}


Object.prototype.log = function (){
    console.log(this.toString())
}

x.log()

const cli = {nome: "Pedro", toString(){ return this.nome}}

cli.log()