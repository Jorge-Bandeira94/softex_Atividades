//Aplique o padrão de projeto decorator para criar um sanduíche de frango assado com pepperoni e queijo mussarela ralado. O projeto deve seguir os seguintes critérios:
//- deve imprimir no console: Sanduíche de Carne, Bacon, QueijoMussarelaRalado custa $7,49.
//- o sanduíche de frango assado custa $4,50.
//- o ingrediente adicional pepperoni custa $0,99.
//- o ingrediente adicional queijo mussarela ralado custa $2,00.
//- crie as classes necessárias: FrangoAssado, Pepperoni e QueijoMussarelaRalado.

class Sanduiche {
  constructor(descricao) {
    this.descricao = descricao
  }
  getDescricao() {}
  getCusto() {}
}

class FrangoAssado extends Sanduiche {
  constructor(descricao) {
    super(descricao)
    this.custo = 4.5
  }
  getDescricao() {
    return 'Sanduiche de frango assado '
  }
}

class decoratorIngredientes extends Sanduiche {
  getDescricao() {}
  getCusto() {}
}

class Pepperoni extends decoratorIngredientes {
  constructor(descricao) {
    super(descricao)
  }
  getDescricao() {
    return 'e/com pepperoni '
  }
  getCusto() {
    return 0.99
  }
}

class Queijo extends decoratorIngredientes {
  constructor(descricao) {
    super(descricao)
  }
  getDescricao() {
    return 'e/com Queijo '
  }
  getCusto() {
    return 2
  }
}

let pedidoDescricao = ''
let pedidoCusto = 0

// Instanciando um objeto sucessivas vezes, em cada camada são adicionados os dados da subclasse especifica

sanduiche = new FrangoAssado()
pedidoDescricao += sanduiche.getDescricao()
pedidoCusto += sanduiche.custo

sanduiche = new Pepperoni()
pedidoDescricao += sanduiche.getDescricao()
pedidoCusto += sanduiche.getCusto()

sanduiche = new Queijo()
pedidoDescricao += sanduiche.getDescricao()
pedidoCusto += sanduiche.getCusto()

console.log(pedidoDescricao)
console.log(pedidoCusto)
