let seraQuePode = "?" //hoinsting
console.log(seraQuePode)

let estaFrio = true
if(estaFrio) {
    var acao = "Colocar o casaco!"
    console.log(acao)
}

const cpf: string = '123.456.789-99'
// cpf = '789.101.132-78'

console.log(cpf)
// Arrow Function

const somar = function(n1: number, n2:number): number{
    return n1+ n2
}
console.log(somar(2,2))

const subtrair = (n1: number, n2:number): number => n1 - n2

console.log(subtrair(2,3))

const saudacao = () => console.log("E ai")

saudacao()

//this

// function normalComThis(){
//     console.log(this)
// }

// const normalComThisEspecial = normalComThis.bind("abc")
// normalComThisEspecial()

function contagemRegressiva(inicio: number = 5, fim: number = inicio -5): void{
    console.log(inicio)
    while(inicio > 0){
        inicio--
        console.log(inicio)
    }
    console.log("fim!!")
}
contagemRegressiva(3)