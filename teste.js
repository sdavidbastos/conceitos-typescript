Array.prototype.map2 = function(callback){
    const newArray = []
    for(i = 0;i<this.length;i++){
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 12}',
    '{"nome": "lapis", "preco": 13.45}',
]

const paraObjeto = json => JSON.parse(json)
