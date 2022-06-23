# Faça um código que execute a contagem regressiva de uma bomba, informando o número de segundos para explodir. Ele deverá mostrar a mensagem “iniciando contagem regressiva”, os segundos passados e, no final, a mensagem “BUM!”.

# Não é necessário, mas, caso deseje tornar o sistema mais realista para que o tempo realmente passe em segundos, você pode usar a função time.sleep() que existe na Python (acesse o link em anexo). No entanto, é preciso adicionar uma biblioteca antes de executá-la.


import time

print("Programe a bomba em segundos: ")
a = int(input("Quantos segundos deseja? "))

for i in range(a, 0, -1):
    print(i, "segundo(s) restantes")
    time.sleep(1)
    if i == 1:
        print("BOOOOM!")
