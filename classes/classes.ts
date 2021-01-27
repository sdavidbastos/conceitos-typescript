import {Data} from "./Data"

const aniversario = new Data(3, 11, 1991);

aniversario.dia = 4;

// console.log(aniversario);

const casamento = new Data(); //posso omitir os "()"

class DataEsperta {
    constructor(
        public dia: number = 1,
        public mes: number = 1,
        public ano: number = 1970
    ) {}
}

const aniversarioEsperto = new DataEsperta(3, 11, 1991);

aniversarioEsperto.dia = 4;

// console.log(aniversarioEsperto);

const casamentoEsperto = new DataEsperta(); //posso omitir os "()"

// Desafio produto

class Produto {
    constructor(
        public nome: string,
        public preco: number,
        public desconto: number = 0
    ) {}

    public precoComDesconto(): number {
        return parseFloat((this.preco * (1 - this.desconto)).toFixed(2));
    }
    public resumo(): string {
        return `${this.nome} custa R$${this.precoComDesconto()} (${
            this.desconto * 100
        }% off)`;
    }
}

const p1 = new Produto("David", 100, 0.8);
// console.log(p1.resumo());

class Carro {
    private velocidadeAtual: number = 0;

    constructor(
        public marca: string,
        public modelo: string,
        private velocidadeMaxima: number = 200
    ) {}

    protected alterarVelocidade(delta: number): number {
        const novaVelocidade = this.velocidadeAtual + delta;
        const velocidadeValida =
            novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima;

        if (velocidadeValida) {
            this.velocidadeAtual = novaVelocidade;
        } else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
        }
        return this.velocidadeAtual;
    }

    public acelerar(): number {
        return this.alterarVelocidade(5);
    }
    public frear(): number {
        return this.alterarVelocidade(-5);
    }
}

// const carro1 = new Carro('Ford', 'Ka', 185)

// Array(50).fill(0).forEach(()=>carro1.acelerar())

// console.log(carro1.acelerar())

// Array(100).fill(0).forEach(()=>carro1.frear())

// console.log(carro1.frear())

// Ja tenho todos os comportamentos e atributo e comportamentos da classe Carro
class Ferrari extends Carro {
    constructor(modelo: string, velocidadeMaxima: number) {
        super("Ferrari", modelo, velocidadeMaxima);
        // ... Pode executar alguma coisa
    }
    public acelerar(): number {
        return this.alterarVelocidade(20);
    }
    public frear(): number {
        return this.alterarVelocidade(-15);
    }
}

const f40 = new Ferrari("F40", 324);

// console.log(`${f40.marca} ${f40.modelo}`)
// console.log(f40.acelerar())

// console.log(f40.frear())

// Getters & Setters

class Pessoa {
    private _idade: number = 0;

    get idade(): number {
        return this._idade;
    }

    set idade(valor: number) {
        if (valor >= 0 && valor <= 120) {
            this._idade = valor;
        }
    }
}

const pessoa1 = new Pessoa();
pessoa1.idade = 10;
// console.log(pessoa1.idade)

// pessoa1.idade = -3

// console.log(pessoa1.idade)

// Atributos e métodos estáticos

class Matematica {
    static PI: number = 3.1416;

    static areaCirc(raio: number): number {
        return Matematica.PI * raio * raio;
    }
}

// const m1 = new Matematica()
// m1.PI = 4.2
// console.log(m1.areaCirc(4))
// console.log(Matematica.areaCirc(4))

// Objetivo da classe abstract é classes filhas herdar.
// Perde o poder de instância

// abstract class X {
//     abstract y(a:number):number

//     w(b:number):void{
//         console.log(b)
//     }
// }

// Classe abstrata que herda de outra abstrata 
// não precisa implementar as funçõs abstratas

// Classe abstrata
abstract class Calculo {
    protected resultado: number = 0;

    abstract executar(...numeros: number[]): void;

    getResultado(): number {
        return this.resultado;
    }
}

class Soma extends Calculo {
    executar(...numeros: number[]): void {
        this.resultado = numeros.reduce((t, a) => t + a);
    }
}
class Mutiplicacao extends Calculo {
    executar(...numeros: number[]): void {
        this.resultado = numeros.reduce((t, a) => t * a);
    }
}
// Exemplo de poliformismo
// Ora é soma ora é mutiplicação
let c1: Calculo = new Soma();
c1.executar(2, 3, 4, 5);
// console.log(c1.getResultado());

c1 = new Mutiplicacao();
c1.executar(2, 3, 4, 5);
// console.log(c1.getResultado());

// Singleton
/**
 * Sigleton é mais utilizado quando é preciso
 * utilizar herança. Visto que trabalhar
 * herança com static não é simples
 * 
 * Exemplo de aplicação: a instancia (Objeto) da Class
 * é custosa, logo é mais interessante existir apenas
 * uma instancia dele.
 */
class Unico {
    private static instance: Unico = new Unico();
    private constructor() {}

    static getInstance(): Unico {
        return Unico.instance;
    }

    agora() {
        return new Date();
    }
}

// const errado = new Unico()
// console.log(Unico.getInstance().agora())

// Somente leitura

class Aviao {
    public readonly modelo: string;

    constructor(modelo: string, public readonly prefixo: string) {
        this.modelo = modelo;
    }
}

// const turboHelice = new Aviao('rajada', 'bolado')
// turboHelice.modelo = 'qwe'
// turboHelice.prefixo = 'ewq'

// console.log(turboHelice.modelo)
