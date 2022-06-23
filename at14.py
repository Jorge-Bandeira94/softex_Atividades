# Desenvolva um código que utilize as seguintes características de um veículo:
# - Quantidade de rodas;
# - Peso bruto em quilogramas;
# - Quantidade de pessoas no veículo.

# Com essas informações, o programa mostrará qual é a melhor categoria de habilitação para o veículo informado a partir das condições:
# A: Veículos com duas ou três rodas;
# B: Veículos com quatro rodas, que acomodam até oito pessoas e seu peso é de até 3500 kg;
# C: Veículos com quatro rodas ou mais e com peso entre 3500 e 6000 kg;
# D: Veículos com quatro rodas ou mais e que acomodam mais de oito pessoas;
# E: Veículos com quatro rodas ou mais e com mais de 6000 kg.

rodas = int(input("Digite a quantidade de rodas do veículo: "))
peso = float(input("Digite o peso em quilogramas do veículo: "))
qtd = int(input("Quantas pessoas devem caber no veículo? "))

if rodas == 2:
    print("O veículo deve ser de categoria A")
elif rodas == 4 and peso < 3500 and qtd < 9:
    print("O veículo deve ser de categoria B")
elif rodas >= 4 and peso >= 3500 and peso <= 6000:
    print("O veículo deve ser de categoria C")
elif rodas >= 4 and qtd > 8:
    print("O veículo deve ser de categoria D")
else:
    print("O veículo deve ser de categoria E")
