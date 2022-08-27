//Crie uma fábrica de veículos utilizando o padrão Prototype com base no exemplo apresentado no Hipertexto 2. Os requisitos do projeto devem ser:

//- implemente uma classe abstrata Veículo com um construtor padrão e os métodos clone e represent;
//- o construtor da classe Veículo deve receber modelo, marca, cor e numeroRodas como parâmetros;
//- crie pelo menos duas subclasses da classe Veículo, que acrescentem um ou mais atributos, por exemplo: carro que tem dois campos a mais, como numeroRodas e numeroPortas;
//- desenvolva uma classe Aplicação que deve criar um array com seis veículos com dois tipos de veículos diferentes (subclasses), utilizando o método clone dos objetos para preencher o array;
//- na classe Aplicação, implemente um método que retorne um array com o mesmo tamanho do array de veículos, onde cada elemento deve ser um clone dos elementos do array veículos;
//- no final, deve imprimir na tela o retorno da função represent de cada elemento desse novo array de clones de veículos

class Veiculo {
  constructor(modelo, marca, cor, numeroRodas) {
    this.modelo = modelo
    this.marca = marca
    this.cor = cor
    this.numeroRodas = numeroRodas
  }
  clone() {}
}

class Carro extends Veiculo {
  constructor(modelo, marca, cor, numeroRodas, numeroPortas) {
    super(modelo, marca, cor, numeroRodas)
    this.numeroPortas = numeroPortas
  }
  clone() {
    const newObj = new Carro(
      this.modelo,
      this.marca,
      this.cor,
      this.numeroRodas,
      this.numeroPortas
    )
    return newObj
  }
  represent() {
    console.log('Funcao Represent para carros')
  }
}

class Moto extends Veiculo {
  constructor(modelo, marca, cor, numeroRodas, cilindradas) {
    super(modelo, marca, cor, numeroRodas)
    this.cilindradas = cilindradas
  }
  clone() {
    const newObj = new Moto(
      this.modelo,
      this.marca,
      this.cor,
      this.numeroRodas,
      this.cilindradas
    )
    return newObj
  }
  represent() {
    console.log('Funcao Represent para motos')
  }
}

let obj1 = new Carro('Onix', 'Fiat', 'Prata', '4', '4')
let obj2 = new Moto('Hayabusa', 'Honda', 'Preta', '2', '15000')

let arrayVeiculos = []

class Aplicacao {
  criarVeiculos() {
    for (let i = 0; i < 6; i++) {
      if (i % 2 == 0) {
        let objN = obj1.clone()
        arrayVeiculos.push(objN)
      } else {
        let objN = obj2.clone()
        arrayVeiculos.push(objN)
      }
    }
  }
  retorno() {
    console.log(arrayVeiculos)
    obj1.represent()
    obj2.represent()
  }
}

let app = new Aplicacao()
app.criarVeiculos()
app.retorno()
