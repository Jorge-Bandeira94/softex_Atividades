//Aplique o Factory Method para fabricar computadores, usando como base o exemplo visto de static e parametrizado no hipertexto.

//Considere que:
//- os produtos devem implementar uma interface comum;
//- o cliente deve utilizar apenas a fábrica para criar instâncias do tipo abstrato da interface;
//- todo computador deve ter, com getters, os atributos: ram, hdd, cpu e type;
//- há dois tipos de computadores: pc e server;
//- RAM e HD devem estar em GB;
//- CPU deve estar em GHz;
//- através do tipo informado, a fábrica decide qual tipo de computador irá instanciar;
//- quando o método .toString() for aplicado a um computador, ele deve imprimir seus atributos.

// Classes com atributos e metodos em comum
class Pc {
  constructor(ram, hd, cpu, type) {
    this.ram = ram
    this.hd = hd
    this.cpu = cpu
    this.type = type
  }

  toString() {
    console.log(this.ram, this.hd, this.cpu, this.type)
  }
}

class Server {
  constructor(ram, hd, cpu, type) {
    this.ram = ram
    this.hd = hd
    this.cpu = cpu
    this.type = type
  }
  toString() {
    console.log(this.ram, this.hd, this.cpu, this.type)
  }
}

// função de fábricar novos objetos instanciando-os de acordo com o tipo desejado
let computer = ''
function fabrica(computerType) {
  if (computerType === 'pc') {
    computer = new Pc('8gb', '500gb', '3.3GHz', 'pc')
  } else {
    computer = new Server('80gb', '1000gb', '10.3GHz', 'server')
  }
}

// chamando os objetos criados e suas especificções pelo método das classes
fabrica('server')
computer.toString()
fabrica('pc')
computer.toString()
