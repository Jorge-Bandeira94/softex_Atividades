listaA = []
listaB = []
listaC = []
listaD = []
listaAN = []
listaBN = []
listaCN = []
listaDN = []
q = "s"
while q == "s":
    print("Digite o seu nome e em seguida sua nota e turma:")
    nome = input("Nome: ")
    nota = int(input("Nota: "))
    turma = input("Truma: (a/b/c/d)")

    if turma == "a":
        listaA.append(nome)
        listaAN.append(nota)
    elif turma == "b":
        listaB.append(nome)
        listaBN.append(nota)
    elif turma == "c":
        listaC.append(nome)
        listaCN.append(nota)
    else:
        listaD.append(nome)
        listaDN.append(nota)
    q = input("Continuar? (s/n) ")


print("A quantidade de alunos aprovados no vestibular por turma é: ")
contA = 0
contB = 0
contC = 0
contD = 0
for i in listaAN:
    if i >= 7:
        contA += 1
print("Na turma A há ", contA, " aprovados")
for i in listaBN:
    if i >= 7:
        contB += 1
print("Na turma B há ", contB, " aprovados")
for i in listaCN:
    if i >= 7:
        contC += 1
print("Na turma C há ", contC, " aprovados")
for i in listaDN:
    if i >= 7:
        contD += 1
print("Na turma D há ", contD, " aprovados")

print("Deseja saber qual a maior nota por turma? ")
q1 = input("s/n ")
melhor_geral = []
melhor_geralN = []

while q1 == "s":
    print("Para turma A")
    max_valueAN = max(listaAN)
    index_max_nota = listaAN.index(max_valueAN)
    print('Nota máxima:', max_valueAN, " do aluno: ", listaA[index_max_nota])
    melhor_geral.append(listaA[index_max_nota])
    melhor_geralN.append(max_valueAN)

    print("Para turma B")
    max_valueBN = max(listaBN)
    index_max_nota = listaBN.index(max_valueBN)
    print('Nota máxima:', max_valueBN, " do aluno: ", listaB[index_max_nota])
    melhor_geral.append(listaB[index_max_nota])
    melhor_geralN.append(max_valueBN)

    print("Para turma C")
    max_valueCN = max(listaCN)
    index_max_nota = listaCN.index(max_valueCN)
    print('Nota máxima:', max_valueCN, " do aluno: ", listaC[index_max_nota])
    melhor_geral.append(listaC[index_max_nota])
    melhor_geralN.append(max_valueCN)

    print("Para turma D")
    max_valueDN = max(listaDN)
    index_max_nota = listaDN.index(max_valueDN)
    print('Nota máxima:', max_valueDN, " do aluno: ", listaD[index_max_nota])
    melhor_geral.append(listaD[index_max_nota])
    melhor_geralN.append(max_valueDN)

    q1 = "n"

r1 = input("Deseja saber a maior nota entre todos os alunos? (s/n) ")
if r1 == "s":
    maior_nota = max(melhor_geralN)
    index_maior_nota = melhor_geralN.index(maior_nota)
    print("O aluno com maior nota foi: ",
          melhor_geral[index_maior_nota], "que tirou: ", maior_nota)
    r1 = "n"
