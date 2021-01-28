/**
 * Desafio Mapa
 * Array de Objetos (Chave/Valor) -> itens
 * Métodos: obter(Chave), colocar({C, V})
 * limpar(), imprimir()
 */

type Par<C, V> = { chave: C; valor: V };

class Mapa<C, V> {
    /**
     * Generic dentro do outro
     * 
     * Forma mais extendidade, porém mais
     * concreta e clara:
     * itens: Array<{chave: C, valor: V}>
     * 
     * Forma análoga só que mais reduzida e
     * mais esperta: 
     * itens: Array<Par<C, V>>
     */
    itens: Array<Par<C, V>> = new Array<Par<C, V>>();

    obter(chave: C): Par<C, V> | null {
        const resultado = this.itens.filter((i) => i.chave === chave);
        return resultado ? resultado[0] : null
    }

    colocar(par: Par<C, V>){
        const encontrado = this.obter(par.chave)
        if(encontrado){
            encontrado.valor = par.valor
        } else {
            this.itens.push(par)
        }
    }

    limpar(){
        this.itens = new Array<Par<C, V>>()
    }

    imprimir(){
        console.log(this.itens)
    }
}

const mapa = new Mapa<number, string>()
mapa.colocar({chave: 1, valor: "David"})
mapa.colocar({chave: 2, valor: "João"})
mapa.colocar({chave: 3, valor: "Jonas"})
mapa.colocar({chave: 1, valor: "Bacelar"})

console.log(mapa.obter(1))
mapa.imprimir()
mapa.limpar()
mapa.imprimir()
