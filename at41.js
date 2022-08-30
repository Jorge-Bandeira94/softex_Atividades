// Crie um adaptador que permita que um objeto do tipo Pato seja usado como se fosse um objeto do tipo Galinha.
//Siga o exemplo apresentado no Hipertexto 4 e crie as classes AdaptadorPato e AdaptadorPatoDemo para demonstrar o uso da classe AdaptadorPato.

class Pato {
  acaoEspecifica() {
    console.log('qua! qua!')
  }
}

class Galinha {
  FazerCocorico() {
    console.log('cocoricó!')
  }
}

class Adaptar extends Galinha {
  constructor(Galinha) {
    super()
    this.Galinha = Galinha
  }
  acaoEspecifica() {
    return 'comportamento modificado'
  }
}

function clientCode(animal) {
  console.log(animal.acaoEspecifica())
}

//Instanciando um pato
let animal = new Pato()
animal.acaoEspecifica()

//Modificando-o para galinha através do adaptador
let animal32 = new Adaptar(animal)
clientCode(animal3)

//Testando se pato recebeu método de galinha
animal3.FazerCocorico()
