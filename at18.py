# esenvolva um programa que recebe do usuário nome completo e ano de nascimento que seja entre 1922 e 2021. A partir dessas informações, o sistema mostrará o nome do usuário e a idade que completou, ou completará, no ano atual (2022).

# Caso o usuário não digite um número ou apareça um inválido no campo do ano, o sistema informará o erro e continuará perguntando até que um valor correto seja preenchido.

from logging import raiseExceptions


def cadastroAno():
    nome = input('Digite seu nome completo: ')
    ano = int(input('Digite seu ano de nascimento: '))
    if ano < 1922 or ano > 2022:
         print('Este ano não é válido, tente novamente')
         cadastroAno()
    else:
        if type(ano) == int:
            anos = 2022 - ano
            print('Seu nome é: ', nome, ', e você tem ',
                  anos, ' anos de idade')


a = True
while a == True:
    try:
        cadastroAno()
        a = False
    except Exception as error:
        cadastroAno()
