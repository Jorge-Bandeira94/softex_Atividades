//Aplique o padrão de projeto decorator para criar um sanduíche de frango assado com pepperoni e queijo mussarela ralado. O projeto deve seguir os seguintes critérios:
//- deve imprimir no console: Sanduíche de Carne, Bacon, QueijoMussarelaRalado custa $7,49.
//- o sanduíche de frango assado custa $4,50.
//- o ingrediente adicional pepperoni custa $0,99.
//- o ingrediente adicional queijo mussarela ralado custa $2,00.
//- crie as classes necessárias: FrangoAssado, Pepperoni e QueijoMussarelaRalado.

class Sanduiche {
    constructor(descricao){
        this.descricao = descricao
    }
    getDescricao(){
        console.log(FrangoAssado.getDescricao(), Pepperoni.getDescricao(), Queijo.getDescricao())
    }
    getCusto(){}
}

class FrangoAssado extends Sanduiche {
    constructor(descricao){
        super(descricao)
        this.custo = 4.50
    }
    getDescricao(){
        console.log('Sanduiche de frango assado')
    }

}

class decoratorIngredientes extends Sanduiche {
    getDescricao(){
    }
    getCusto(){}
}

class Pepperoni extends decoratorIngredientes{
    constructor(descricao){
        super(descricao)
    }
    getDescricao(){
        console.log(' e/com pepperoni ')
    }
    custo(){
        let adicional = 0.99
        console.log(adicional)
    }
}

class Queijo extends decoratorIngredientes{
    constructor(descricao){
        super(descricao)
    }
    getDescricao(){
        console.log(' e/com Queijo ')
    }
    custo(){
        let adicional = 2
        console.log(adicional)
    }
}

pedido = []
sanduiche = new FrangoAssado()

console.log(sanduiche.custo)
sanduiche.getDescricao()
