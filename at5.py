print("Pense em um veículo dentre os seguintes da lista abaixo: ")
print(" - Trator - Moto - Bicicleta - Trem - Carro - Caminhão - Ônibus - Paraquedas - Balão - Avião - Helicóptero - Submarino - Barco - Navio - Lancha")


print("Agora responda as seguintes perguntas:")
q1 = input("O veículo que você pensou tem rodas? (s/n)")

if q1 == "s":
    q1_1 = input("Ele anda sobre 2 rodas? (s/n)")
    if q1_1 == "s":
        q1_1_1 = input("Ele possui motor? (s/n)")
        if q1_1_1 == "s":
            print("Você pensou numa moto")
        else:
            print("Você pensou numa bicicleta")
    else:
        q1_2 = input("O veículo que você pensou possui mais de 4 rodas? (s/n)")
        if q1_2 == "s":
            q1_2_1 = input(
                "Sua finalidade é transportar passageiros? (s/n)")
            if q1_2_1 == "n":
                print("Você pensou em um caminhão")
            else:
                q1_2_2 = input("O veículo voa? (s/n)")
                if q1_2_2 == "s":
                    print("você pensou em um avião")
                else:
                    q1_2_2_1 = input("Este veículo anda sob trilhos? (s/n")
                    if q1_2_2_1 == "s":
                        print("Você pensou em um trêm")
                    else:
                        print("você pensou em um ônibus")
        else:
            print("Você pensou em um carro")
else:
    q2 = input("Você pensou em um veículo marinho? (s/n)")
    if q2 == "s":
        q2_1 = input("Este veículo navega apenas na superficie da água? (s/n)")
        if q2_1 == "s":
            q2_1_1 = input("é um veículo veloz e agil? (s/n)")
            if q2_1_1 == "s":
                print("Você pensou numa lancha")
            else:
                q2_1_1_1 = input(
                    "Possui capacidade para centnas a milhares de passageiros? (s/n)")
                if q2_1_1_1 == "s":
                    print("Você pensou em um navio")
                else:
                    print("Você pensou em um barco")
        else:
            print("Você pensou em um submarino")
    else:
        q3 = input("Este veículo possui motor? (s/n)")
        if q3 == "s":
            print("Você pensou em um elicoptero")
        else:
            q3_1 = input(
                "Este veículo utiliza ar quente para se manter flutuando? (s/n)")
            if q3_1 == "s":
                print("você pensou em um balão")
            else:
                print("Você pensou em um para-quedas")
