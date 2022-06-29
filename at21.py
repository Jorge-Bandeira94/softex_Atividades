class Veiculo:
    def __init__(self, rodas, chassi, cor):
        self.rodas = rodas
        self.chassi = chassi
        self.cor = cor

    def acelerar(self):
        print("ACELERANDO")

    def buzinar(self):
        print("BUZINANDO")

    def frear(self):
        print("FREANDO")


carro1 = Veiculo(4, "Redondo", "preto")
caminhao1 = Veiculo(6, "Largo", "branco")
carro1.acelerar()
caminhao1.buzinar()


class Pagamento:
    def __init__(self, total, banco, cliente):
        self.total = total
        self.banco = banco
        self.cliente = cliente

    def pagar(self, valor, codigo):
        self.valor = valor
        self.codigo = codigo
        print("Pagando", valor, " para o boleto de código: ", codigo)

    def transferir(self, valor, destino):
        self.valor = valor
        self.destino = destino
        print("Transferindo", valor, " para o destinatário: ", destino)


transacao1 = Pagamento(200, "Banco A", "Jorge Luís")
print(transacao1.total)
transacao1.pagar(50, 123456)
transacao1.transferir(100, "Eduardo Gomes")
