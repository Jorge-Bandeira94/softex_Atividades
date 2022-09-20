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

----------------------------------------------------------------------------------------------

//Considerando a solução apresentada no Hipertexto 5, aplique o padrão de projeto Strategy para criar uma simples calculadora. Os requisitos para avaliar o projeto são:
//- implementar uma interface Strategy com o método abstrato execute(). Deve haver três classes concretas que implementam a Strategy para realizar as operações de Soma, Subtração e Multiplicação de números inteiros;
//- o método execute() deve receber dois números inteiros como parâmetros e retornar o resultado também como número inteiro;
//- como input do usuário, a aplicação deve receber o primeiro valor, depois o segundo e, por último, a operação matemática que deve realizar;
//- no final, a aplicação deve definir qual Strategy será usada, com base na operação informada, e imprimir o resultado da operação.

class Calculadora {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
  execute() {}
}

// Classes concretas que herdam de calculadora, cada uma com sua particularidade
class Adicao extends Calculadora {
  execute() {
    console.log(this.x + this.y)
  }
}

class Subtracao extends Calculadora {
  execute() {
    console.log(this.x - this.y)
  }
}

class Multiplicacao extends Calculadora {
  execute() {
    console.log(this.x * this.y)
  }
}

// Inputs que o usuario fez
let a1 = 8
let a2 = 15
let a3 = 1

// Para testar todos os casos, retirar o break
switch (a3) {
  case 1:
    resultado = new Adicao(a1, a2)
    resultado.execute()
    break
  case 2:
    resultado = new Subtracao(a1, a2)
    resultado.execute()
    break
  case 3:
    resultado = new Multiplicacao(a1, a2)
    resultado.execute()
    break
  default:
    console.log('Numero não reconhecido')
}
