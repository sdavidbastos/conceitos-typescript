"use strict";
var nome = "joão";
// console.log(nome)
// nome = 28
// Tipos explícitos
var minhaIdade;
minhaIdade = 27;
// console.log(typeof minhaIdade)
// minhaIdade = "idade é 27"
// console.log(typeof minhaIdade)
// array
var hobbies = ["cozinhar", "praticar", "esportes"];
// console.log(hobbies[0])
// console.log(typeof hobbies)
hobbies = [100, 200, 300];
// tuplas
var endereco = ["Av Principal", 99];
// console.log(endereco)
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 10] = "Azul";
    Cor[Cor["Laranja"] = 11] = "Laranja";
    Cor[Cor["Amarelo"] = 12] = "Amarelo";
    Cor[Cor["Vermelho"] = 100] = "Vermelho";
})(Cor || (Cor = {}));
var minhaCor = Cor.Cinza;
// console.log(minhaCor)
// any
var carro = "BMW";
// console.log(carro)
carro = { marca: "BMW", ano: 2019 };
var retornaMeuNome = function () { return nome; };
console.log(retornaMeuNome());
function digaOi() {
    console.log("Oi");
}
digaOi();
function mutiplicar(numA, numB) {
    return numA * numB;
}
// console.log(multiplicar(2, 'Bia'))
console.log(mutiplicar(4.7, 9));
var teste = function (a, b) {
    return true;
};
var calculo;
calculo = mutiplicar;
var usuario = {
    nome: "João",
    idade: 27,
};
function Usuario(nome, idade) {
    return {
        nome: nome,
        idade: idade,
    };
}
var david = Usuario('David', 22);
// Union Types
var nota = 10;
console.log("Minha nota \u00E9 " + nota + "!");
nota = '10';
console.log("Minha nota \u00E9 " + nota + "!");
// Checando tipos
var valor = 30;
if (typeof valor === "number") {
    console.log("É number!");
}
else {
    console.log(typeof valor);
}
// never
function falha(msg) {
    throw new Error(msg);
}
var produto = {
    nome: 'sabão',
    preco: 2,
    validarproduto: function () {
        if (!this.nome || this.nome.trim().length == 0) {
            falha('Precisa ter um nome');
        }
        if (this.preco <= 0) {
            falha('Preco inválido!');
        }
    }
};
produto.validarproduto();
var alturaOpicional = 12;
alturaOpicional = null;
var contato1 = {
    nome: 'Fulano',
    tel1: '40028922',
    tel2: null
};
var contaBancaria = {
    saldo: 3456,
    depositar: function (valor) {
        this.saldo += valor;
    }
};
var correntista = {
    nome: "david",
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
};
correntista.contaBancaria.depositar(3000);
console.log(correntista);
