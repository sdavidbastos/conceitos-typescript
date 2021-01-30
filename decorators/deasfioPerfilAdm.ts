/**
 * Desafio Decorator PerfilAdmin
 * Criar decorator para impedir
 * instancia da classe, se o usuario
 * não for admin
 */
import { Construtor } from "./decorator";

const usuarioLogado = {
    nome: "David Programador",
    email: "davidprogramador@gmail.com",
    admin: true,
};

@perfilAdmin
class MudancaAdministrativa {
    critico() {
        console.log("Algo critico foi alterado!");
    }
}

new MudancaAdministrativa();

/**
 * Utilizamos generic para dizer que
 * não é especificamente o construtor,
 * mas sim qualquer coisa que seja do
 * tipo construtor
 */
function perfilAdmin<T extends Construtor>(constructor: T) {
    return class extends constructor {
        constructor(...args: any[]) {
            super(...args);
            if (!usuarioLogado || !usuarioLogado.admin) {
                throw new Error("Sem permissão!");
            }
        }
    };
}

class ContaCorrente {
    @naoNegativo
    private saldo: number;

    constructor(saldo: number) {
        this.saldo = saldo;
    }
    @congelar
    sacar(@paramInfo valor: number) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            return true;
        } else {
            return false;
        }
    }
    @congelar
    getSaldo(): number {
        return this.saldo;
    }
}

const cc = new ContaCorrente(15000);
console.log(cc.sacar(25000));
console.log(cc.getSaldo());

// Object.freeze()
function congelar(
    alvo: any,
    nomePropriedade: string,
    descritor: PropertyDescriptor
) {
    console.log(alvo);
    console.log(nomePropriedade);
    descritor.writable = false;
}

/**
 * Decorator de Atributo de Classe
 *
 * Propriedade decorada foi excluida
 * e criei uma de mesmo nome só que
 * internamnte tem seu get e set
 * setando numa propriedade que começa
 * com underline na frente.
 *
 * Forçando que ele valor nunca seja negativo
 */
function naoNegativo(alvo: any, nomePropriedade: string) {
    delete alvo[nomePropriedade];
    Object.defineProperty(alvo, nomePropriedade, {
        get: function (): any {
            return alvo["_" + nomePropriedade];
        },
        set: function (valor: any): void {
            if (valor < 0) {
                throw new Error("Saldo Inválido");
            } else {
                alvo["_" + nomePropriedade] = valor;
            }
        },
    });
}

/**
 * Decorator de Parametro
 *
 * Nesse decorator temos acesso somente
 * ao nome do método, a classe associada e
 * ao índice do parametro. Mas não tera
 * acesso ao valor. Para ter acesso ao valor
 * se faz necessário deleter um atributo e
 * criar uma nova propridade.
 */

function paramInfo(alvo: any, nomeMetodo: string, indiceParam: number) {
    console.log(`alvo => ${alvo}`)
    console.log(`nomeMetodo => ${nomeMetodo}`)
    console.log(`indiceParam => ${indiceParam}`)
}
