class Data {
    // Público por padrão
    dia: number
    public mes: number
    ano: number

    constructor(dia:number = 1, mes:number = 1, ano:number = 1970){
        this.dia = dia
        this.mes = mes
        this.ano = ano
    }
}

const aniversario = new Data(3, 11, 1991)

aniversario.dia = 4 

console.log(aniversario)

const casamento = new Data //posso omitir os "()"

class DataEsperta {

    constructor(
        public dia:number = 1, 
        public mes:number = 1, 
        public ano:number = 1970){
    }
}

const aniversarioEsperto = new DataEsperta(3, 11, 1991)

aniversarioEsperto.dia = 4 

console.log(aniversarioEsperto)

const casamentoEsperto = new DataEsperta //posso omitir os "()"

// Desafio produto

class Produto {
    constructor(public nome:string, public preco:number, public desconto:number = 0 ){}
    
    public precoComDesconto():number{
        return parseFloat((this.preco * (1-this.desconto)).toFixed(2))
    }
    public resumo(): string {
        return `${this.nome} custa R$${this.precoComDesconto()} (${this.desconto*100}% off)`
    }
}

const p1 = new Produto("David", 100, .8)
console.log(p1.resumo())

class Carro {
    private velocidadeAtual: number = 0

    constructor(public marca:string, public modelo:string, private velocidadeMaxima: number = 200){}

    protected alterarVelocidade(delta: number): number {
        const novaVelocidade = this.velocidadeAtual + delta
        const velocidadeValida = novaVelocidade>=0 &&novaVelocidade <= this.velocidadeMaxima

        if(velocidadeValida){
            this.velocidadeAtual = novaVelocidade
        } else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0 
        }
        return this.velocidadeAtual
    }

    public acelerar(): number{
        return this.alterarVelocidade(5)
    }
    public frear(): number{
        return this.alterarVelocidade(-5)
    }
}

// const carro1 = new Carro('Ford', 'Ka', 185)

// Array(50).fill(0).forEach(()=>carro1.acelerar())

// console.log(carro1.acelerar())

// Array(100).fill(0).forEach(()=>carro1.frear())

// console.log(carro1.frear())

// Ja tenho todos os comportamentos e atributo e comportamentos da classe Carro
class Ferrari extends Carro {
    constructor(modelo: string, velocidadeMaxima:number){
        super('Ferrari', modelo, velocidadeMaxima)
        // ... Pode executar alguma coisa 
    }
    public acelerar(): number{
        return this.alterarVelocidade(20)
    }
    public frear(): number{
        return this.alterarVelocidade(-15)
    }
}

const f40 = new Ferrari('F40', 324)

console.log(`${f40.marca} ${f40.modelo}`)
console.log(f40.acelerar())

console.log(f40.frear())