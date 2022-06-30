# Crie uma classe e insira nela, no mínimo, dois atributos, os quais devem ter um método acessor (get) e um método modificador (set) para cada. Defina um objeto para cada atributo e elabore um construtor para criar alguma regra.

# A atividade pode ser realizada em qualquer linguagem de programação ou apenas utilizando algoritmos.


class Carro:
    def __init__(self, tipo, ano, marca):
        self.tipo = tipo
        self.ano = ano
        self.marca = marca

    def getTipo(self):
        print(self.tipo)

    def getAno(self):
        print(self.ano)

    def getMarca(self):
        print(self.marca)

    def setTipo(self, tipoM):
        self.tipo = tipoM

    def setAno(self, anoM):
        self.ano = anoM

    def setMarca(self, marcaM):
        self.marca = marcaM

    def infos(self):
        print('Carro registrado é da marca: ',
              self.marca, ' de ano: ', self.ano)


carro1 = Carro('Sedan', 2018, 'Fiat')
carro1.infos()
carro1.getAno()
carro1.setAno(2012)

carro1.getMarca()
carro1.setMarca('Hyundai')

carro1.getTipo()
carro1.setTipo('SUV')

# Abaixo será apresentado o que foi modificado com o set
carro1.infos()
