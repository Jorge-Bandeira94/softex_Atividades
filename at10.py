# Números Complexos em Python: o tipo complex
# Para declarar uma variável do tipo complex (número complexo), basta atribuir-lhe um valor no formato x + yj. J denota a parte imaginária do número

x = 50 + 25j

# Imprimindo as propriedades reais e imaginarias de x:

print(x.real)
print(x.imag)

# Outra forma de criar um número complexo é com o emprego da função complex(x,y), que recebe dois parâmetros:
# x: Valor da parte real do número complexo
# y: Valor da parte imaginária do número complexo

y = complex(5, 2)
y1 = complex(6, 7)

soma = y + y1
multiplicacao = y * y1
divisao = y / y1
subtracao = y - y1

print('resultado da soma: ', soma, '\nMultiplicação: ', multiplicacao,
      '\ndivisão: ', divisao, '\n', '\nsubtração: ', subtracao, '\n')
