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
    while(inicio > fim){
        inicio--
        console.log(inicio)
    }
    console.log("fim!!")
}
contagemRegressiva(3)

// Rest & Spread
const numbers = [1,10,99,-5,200,1034]

console.log(Math.max(...numbers))

const turmaA: string[] = ['João', 'Maria', 'Fernanda']
const turmaB: string[] = ['Feranaod', ...turmaA, 'miguel']
console.log(turmaB)

function retornaArray(...args: number[]): number[]{
    return args
}

const numeros = retornaArray(1,2,3,4,5,6)

console.log(numeros)

// Rest & Spread (Tupla)

const tupla: [number, string, boolean] = [1, 'abc', false]

function tuplaParam1(a: number, b: string, c:boolean): void{
    console.log(`1) ${a}, ${b}, ${c}`)
}

tuplaParam1(...tupla)

function tuplaParam2(...params: [number, string, boolean]){
    console.log(Array.isArray(params))
    console.log(`2) ${params[0]}, ${params[1]}, ${params[2]}`)
}

tuplaParam2(...tupla)

// Destructuring (array)

const caracteristicas = ['motor zetec 1.8', 2020]
// const motor = caracteristicas[0]
// const ano = caracteristicas[1]

const [motor, ano] = caracteristicas

console.log(motor, ano)

// Destructuring (objeto)

const item = {
    nome: "David",
    preco: 1000,
    caracteristicas: {
        w: "Boladão"
    }
}
// const nomeItem = item.nome
const {nome: n, caracteristicas: {w: bolado}} = item
console.log(n)
console.log(bolado)

// Assincronismo Callback

// function esperar3s(callback: (dado:string)=>void){
//     setTimeout(()=>{
//         callback('3s depois...')
//     }, 3000)
// }

// esperar3s(function(dado){
//     console.log(dado)
// })

// function esperar3sPromise(){
//     return new Promise((resolve:any)=>{
//         setTimeout(()=>{
//             resolve('3s depois')
//         }, 3000)
//     })
// }

// esperar3sPromise()
//     .then((dado) => console.log(dado))

// fetch('https://swapi.dev/api/people/1')
//     .then(res => res.json())
//     .then(personagem => personagem.films)
//     .then(films => fetch(films[0]))
//     .then(resFilm => resFilm.json())
//     .then(filme => console.log(filme.title))
