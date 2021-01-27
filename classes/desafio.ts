// Exercício 1 - Classe

class Moto {
  private velocidade: number = 0;
  constructor(public nome: string = "") {}
  buzinar() {
    console.log("Bibiiiiiii");
  }

  falar() {
    console.log(this.nome);
  }

  getVelocidade() {
    return this.velocidade;
  }

  acelerar(delta: number) {
    this.velocidade = this.velocidade + delta;
  }
}

var moto = new Moto("Ducati");
moto.buzinar();

moto.acelerar(30);
console.log(moto.getVelocidade());
moto.falar();

// Exercício 2 - Herança

abstract class Objeto2D {
  constructor(public base: number = 0, public altura: number = 0) {}

  /*
   * Utiliza-se o absctract para
   * tornar o metodo ou atributo
   * obrigatório no objeto filho
   */

  abstract area(): number;
}

class Retangulo extends Objeto2D {
  area() {
    return this.base * this.altura;
  }
}

const retangulo = new Retangulo(10, 10);

console.log(retangulo.area());

// Exercício 3 - Getters & Setters

class Estagiario {
  constructor(private _primeiroNome: string = "") {}

  get primeiroNome() {
    return this._primeiroNome;
  }

  set primeiroNome(valor) {
    if (valor.length >= 3) {
      this._primeiroNome = valor;
    } else {
        this._primeiroNome = ""
    }
  }
}

const estagiario = new Estagiario

console.log(estagiario.primeiroNome)
estagiario.primeiroNome = 'Le'
console.log(estagiario.primeiroNome)
estagiario.primeiroNome = 'Leonardo'
console.log(estagiario.primeiroNome)
