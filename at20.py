# Desenvolva um programa que deve ler um arquivo csv intitulado “notas_alunos.csv”. O arquivo deve ter a seguinte estrutura:

# aluno: Nome do aluno;
# nota_1: Primeira nota;
# nota_2: Segunda nota;
# faltas: Número de faltas;

# O programa lerá esse arquivo e criará duas colunas. A primeira coluna será “media”, que terá a média das #duas notas do aluno. A segunda será “situacao”, com os valores: APROVADO ou REPROVADO.

# O aluno que tiver mais de 5 faltas ou possuir média menor que sete, será reprovado. O programa deverá salvar #esse novo dataframe com o nome “alunos_situacao.csv”.

# Por fim, o programa deverá mostrar na tela:
# - o maior número de faltas;
# - a média geral das notas dos alunos;
# - e a maior média.

from sqlite3 import Row
import pandas as pd

df = pd.read_excel("Pasta1.xlsx")

media = (df["nota_1"] + df["nota_2"]) / 2
df["Media"] = media

situacao = ''
df["Situação"] = situacao


df.loc[df["faltas"] > 5, "Situação"] = 'Reprovado'
df.loc[df["Media"] < 7, "Situação"] = 'Reprovado'
df.loc[df["Media"] >= 7, "Situação"] = 'Aprovado'

print(df)

# Maior numero de faltas
maior_falta = df["faltas"].max()
print("Maior núemro de faltas: ", maior_falta)

# Media geral
media_geral = df["Media"].sum()
print("A media geral foi: ", media_geral/4)

# Maior media
maior_media = df["Media"].max()
print('A maior média foi: ', maior_media)
