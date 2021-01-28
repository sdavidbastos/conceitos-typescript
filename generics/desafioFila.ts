/**
 * Desafio Classe Fila
 * Atributo: fila (Array)
 * Métodos: entrar, próximo, imprimir
 */

/**
 * Constrains é quando impõe
 * uma restrição de tipos.
 * Ex.: <T extends number | string>
 * 
 * Significa que T só pode ser number ou string
 */

class Fila<T extends number | string>{
    private fila: Array<T>;
    constructor(...args: T[]) {
        this.fila = args;
    }

    entrar(elemento: T) {
        this.fila.push(elemento);
    }
    proximo(): T | null {
        if(this.fila.length >= 0 && this.fila[0]){
            const primeiro = this.fila[0];
            this.fila.splice(0, 1);
            return primeiro;
        }
        else{
            return null
        }
    }
    imprimir() {
        console.log(this.fila);
    }
}

const fila = new Fila<string>("gui", "pedro", "lu");

fila.imprimir()

// Não é possível pois os contrains não permitem
// const outraFila = new Fila<boolean>(true, false)

