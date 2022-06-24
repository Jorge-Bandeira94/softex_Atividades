# Faça uma função calculadora de dois números com três parâmetros: os dois primeiros serão os números da operação e o terceiro será a entrada que definirá a operação a ser executada. Considera a seguinte definição:
# 1. Soma
# 2. Subtração
# 3. Multiplicação
# 4. Divisão
# Caso seja inserido um número de operação que não exista, o resultado deverá ser 0.


def Calculadora(a, b, c):

    if c == 1:
        return "A soma é: ", a + b
    elif c == 2:
        return "A subtração é: ", float(a - b)
    elif c == 3:
        return "A divisão é: ", float(a / b)
    else:
        return "A multiplicação é: ", float(a * b)


operacao = int(input(
    "Escolha qual operação deseja executar: \n 1 - Soma\n 2 - Subtração\n 3 - Divisão\n 4 - Multiplicação\n"))
if operacao == 0:
    print("Encerrando")
elif operacao > 4:
    print("A operação não existe")
else:
    num1 = int(input("Digite o primeiro número: "))
    num2 = int(input("Digite o segundo número: "))
    calcular = Calculadora(num1, num2, operacao)
    print(calcular)
