# Crie uma classe de sua preferência com, no mínimo, uma variável, um método e um incremento. Depois, desenvolva três ou mais objetos para testar o código.

class Cafe:
    def __init__(self):
        self.temperatura = 10

    def aumentar(self, temp):
        self.temp = temp
        self.temperatura = self.temperatura + temp
        print('A temperatura do café está em : ', self.temperatura, ' ºC')


cafe = Cafe()
print(cafe.temperatura)
cafe2 = Cafe()
print(cafe.temperatura)
cafe3 = Cafe()
print(cafe.temperatura)
cafe.aumentar(50)
cafe.aumentar(50)
