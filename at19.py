# Desenvolva um código que simule uma eleição com três candidatos.
# - candidato_X => 889
# - candidato_Y => 847
# - candidato_Z => 515
# - branco => 0

# O código deve perguntar se deseja finalizar a votação depois do voto. Caso o número do voto não corresponda a nenhum candidato ou seja branco, ele deve ser tratado como nulo. Se for inserido um texto ao invés de número, o código deve retornar uma mensagem para votar novamente.
# Quando a votação for finalizada, o código deverá mostrar o vencedor, aquele com o maior número de votos e, também, a quantidade de votos de cada candidato, os brancos e nulos
from enum import IntEnum


class Voto(IntEnum):
    candidato_X = 889
    candidato_Y = 847
    candidato_Z = 515
    branco = 0
    nulos = 0


votar = 's'
totais_x = Voto.candidato_X.value
totais_y = Voto.candidato_Y.value
totais_z = Voto.candidato_Z.value
brancoT = Voto.branco.value
nulosT = Voto.nulos.value

while votar == 's':
    voto = input("Declare seu voto em X, Y, Z ou B para branco: ").lower()
    if voto == 'x':
        totais_x += 1
        print(totais_x)
        votar = input('Deseja continuar? (s/n): ')
    elif voto == 'y':
        totais_y += 1
        votar = input('Deseja continuar? (s/n): ')
    elif voto == 'z':
        totais_z += 1
        votar = input('Deseja continuar? (s/n): ')
    elif voto == 'b':
        brancoT += 1
        votar = input('Deseja continuar? (s/n): ')
    else:
        print('Candidato não existente, voto convertido para nulo')
        nulosT += 1
        votar = input('Deseja continuar? (s/n): ')

print("A votação foi encerrada")

# A partir daqui fiz um método com listas para organizar os candidatos
lista_voto = []
lista_candidato = []

lista_voto.extend([totais_x, totais_y, totais_z, brancoT, nulosT])
lista_candidato.extend(['Candidato X', 'Candidato Y',
                       'Candidato Z', 'Brancos', 'Nulos'])
voto_maior = max(lista_voto)
index_voto_maior = lista_voto.index(voto_maior)

print('O vencedor das eleições foi o candidato', lista_candidato[index_voto_maior], ' que obteve ',
      voto_maior, ' votos.')


# Fiz um buble sort para organizar os candidatos
# sem esse for indo até -1 nós temos problemas de out of range devido o buble sort extrapolar o indice quando faz i+1 no ultimo indice analisado
for passnum in range(len(lista_voto)-1, 0, -1):
    for i in range(passnum):
        if lista_voto[i] > lista_voto[i+1]:
            temp = lista_voto[i]
            lista_voto[i] = lista_voto[i+1]
            lista_voto[i+1] = temp

            temp2 = lista_candidato[i]
            lista_candidato[i] = lista_candidato[i+1]
            lista_candidato[i+1] = temp2

print('Os resultados das demais opções ficaram:')
for i in range(len(lista_voto) - 1):
    print(lista_candidato[i], ':', lista_voto[i])
