let nome = "joão";
// console.log(nome)
// nome = 28

// Tipos explícitos
let minhaIdade: number;

minhaIdade = 27;

// console.log(typeof minhaIdade)

// minhaIdade = "idade é 27"
// console.log(typeof minhaIdade)

// array
let hobbies: (number|string)[] = ["cozinhar", "praticar", "esportes"];
// console.log(hobbies[0])
// console.log(typeof hobbies)

hobbies = [100, 200, 300];

// tuplas

let endereco: [string, number] = ["Av Principal", 99];

// console.log(endereco)

enum Cor {
  Cinza,
  Verde = 100,
  Azul = 10,
  Laranja,
  Amarelo,
  Vermelho = 100,
}

let minhaCor: Cor = Cor.Cinza;
// console.log(minhaCor)

// any
let carro: any = "BMW";
// console.log(carro)
carro = { marca: "BMW", ano: 2019 };

const retornaMeuNome = (): string => nome;

console.log(retornaMeuNome());

function digaOi(): void {
  console.log("Oi");
}

digaOi();

function mutiplicar(numA: number, numB: number): number {
  return numA * numB;
}
// console.log(multiplicar(2, 'Bia'))
console.log(mutiplicar(4.7, 9));

const teste = function (a: number, b: number): boolean {
  a
  b
  return true;
};

let calculo: (n1: number, n2: number) => number;

calculo = mutiplicar;

let usuario: { nome: string; idade: number } = {
  nome: "João",
  idade: 27,
};

function Usuario(nome: string, idade: number) {
  return {
    nome,
    idade,
  };
}
let david = Usuario('David', 22)

// Union Types
let nota:number | string = 10
console.log(`Minha nota é ${nota}!`)
nota = '10'
console.log(`Minha nota é ${nota}!`)

// Checando tipos

let valor = 30

if(typeof valor === "number"){
    console.log("É number!")
} else {
    console.log(typeof valor)
}

// never

function falha(msg: string): never{
    throw new Error(msg)
}

const produto = {
    nome: 'sabão',
    preco:2,
    validarproduto(){
        if(!this.nome || this.nome.trim().length == 0){
            falha('Precisa ter um nome')
        }
        if(this.preco <= 0){
            falha('Preco inválido!')
        }
    }
}

produto.validarproduto()

let alturaOpicional: null | number = 12

alturaOpicional = null

type Contato = {
    nome: string,
    tel1: string,
    tel2: string | null
}

const contato1: Contato = {
    nome: 'Fulano',
    tel1: '40028922',
    tel2: null
}

// Desafio

type ContaBancaria = {
    saldo: number,
    depositar: (valor:number) => void
}

type Correntista = {
    nome: string,
    contaBancaria: ContaBancaria,
    contatos: string[]
}

let contaBancaria: ContaBancaria = {
    saldo: 3456,
    depositar(valor) {
        this.saldo += valor
    }
}
let correntista: Correntista = {
    nome: "david",
    contaBancaria:contaBancaria,
    contatos: ['34567890', '98765432']
}

correntista.contaBancaria.depositar(3000)
console.log(correntista)