# Estruture três códigos, os quais devem conter uma função de manipulação de string que obtenha resultado.

# 1) Obtendo todas as posições de  um caractere em uma string
def recuperaCaractere(string, caractere):
    c = 0
    pos = []
    for i in string:
        if i == caractere:
            pos.append(c)
            c += 1
        else:
            c += 1
    print('Este caractere está na(s) posição(ões)', pos)


string = input('Digite seu texto: ').lower()
caractere = input('Qual caractere deseja procurar?: ').lower()
recuperaCaractere(string, caractere)


# 2) Modificando um caractere na posicção X da string
def listaCaracteres(string, posicao, substituto):
    c = 0
    stringMod = []
    for i in string:
        if c == posicao:
            stringMod.append(substituto)
            c += 1
        else:
            stringMod.append(i)
            c += 1
    print(''.join(stringMod))


string1 = input('Digite seu texto: ').lower()
posicao = int(input('Qual posição deseja susbtituir? '))
substituto = input('Por qual caractere? ')
listaCaracteres(string1, posicao, substituto)

# 3) Modificando os caracteres da string para caixa alta


def maiuscString(string):
    a = string.upper()
    print(a)


string2 = input('Digite seu texto em minúsculo: ')
maiuscString(string2)
