# Desenvolva um programa que utiliza o nome de um aluno, duas notas e a quantidade de faltas que ele teve. Conclua se o aluno está aprovado ou reprovado de acordo com as especificações:

# - Se a média do aluno for menor que sete, o sistema deve informar o nome do aluno e que ele está reprovado;
# - Se o aluno possuir mais de três faltas, o sistema deve informar o nome do aluno e que ele está reprovado;
# - Se a média do aluno for maior ou igual a sete, o sistema deve informar o nome do aluno e que ele está aprovado.

# No sistema, todos os valores devem estar armazenados em variáveis.

y = "y"
alunosArray = []
alunosMedia = []
alunosFaltas = []

while y == "y":

    aluno = input("Digite o nome do aluno: ")
    aluno.lower()
    alunosArray.append(aluno)
    nota1 = float(input("Digite a nota 1: "))
    nota2 = float(input("Digite a nota 2: "))
    media = (nota1 + nota2)/2
    alunosMedia.append(media)
    faltas = int(input("Quantas faltas o aluno teve? "))
    alunosFaltas.append(faltas)
    y = input("Deseja continuar? (y/n): ")

print("Qual aluno deseja consultar? ")
consultaAluno = input("Aluno: ").lower()

for i in alunosArray:
    if consultaAluno == i:
        indiceAluno = alunosArray.index(i)
        if alunosMedia[indiceAluno] < 7:
            print("O aluno ", consultaAluno,
                  "foi reprovado por media, sua nota foi: ", alunosMedia[indiceAluno])
        elif alunosMedia[indiceAluno] > 7 and alunosFaltas[indiceAluno] > 3:
            print("O aluno ", consultaAluno, "teve nota suficiente",
                  alunosMedia[indiceAluno], "mas foi reprovado por faltas, no total: ", alunosFaltas[indiceAluno])
        else:
            print("O aluno ", consultaAluno, "foi aprovado.")
