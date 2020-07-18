/**
 * Interface se assemelha a um contrato.
 */

interface Humano{
    nome: string,
    idade?: number,
    [prop: string]: any
}

function saudarComOla(pessoa: Humano){
    console.log("Olá " + pessoa.nome)
}
function mudarNome(pessoa: Humano){
    pessoa.nome = "O brabo"
}

const pessoa = {
    nome: "David Bastos",
    idade: 22
}

saudarComOla(pessoa)
mudarNome(pessoa)
saudarComOla(pessoa)
saudarComOla({nome: "Jonas", idade: 27})