class Sanduiche {
    constructor(descricao){
        this.descricao = descricao
    }
    getDescricao(){}
    getCusto(){}
}

class decoratorIngredientes extends Sanduiche {
    getDescricao(){
    }
    getCusto(){}
}

class Pepperoni extends decoratorIngredientes{
    constructor(sanduiche, descricao){
        super(descricao)
        this.sanduiche = sanduiche
    }
    getDescricao(){
        console.log('Adicioando pepperoni')
    }
}

sanduicheDePepperoni = new Pepperoni('carne', 'pepperoni')
sanduicheDePepperoni.getDescricao()
console.log(sanduicheDePepperoni.descricao)
console.log(sanduicheDePepperoni.sanduiche)