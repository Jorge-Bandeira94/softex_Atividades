# Faça uma função calculadora que os números e as operações serão feitas pelo usuário. O código deve ficar rodando infinitamente até que o usuário escolha a opção de sair. No início, o programa mostrará a seguinte lista de operações:
# 1: Soma
# 2: Subtração
# 3: Multiplicação
# 4: Divisão
# 0: Sair

# Digite o número para a operação correspondente e caso o usuário introduza qualquer outro, o sistema deve mostrar a mensagem “Essa opção não existe” e voltar ao menu de opções.

# Após a seleção, o sistema deve pedir para o usuário inserir o primeiro e segundo valor, um de cada. Depois precisa executar a operação e mostrar o resultado na tela. Quando o usuário escolher a opção “Sair”, o sistema irá parar.

# É necessário que o sistema mostre as opções sempre que finalizar uma operação e mostrar o resultado.

continua = "y"


def Calculadora(a, b, c):

    if c == 1:
        return "A soma é: ", a + b
    elif c == 2:
        return "A subtração é: ", a - b
    elif c == 3:
        return "A divisão é: ", float(a / b)
    else:
        return "A multiplicação é: ", a * b


def app():
    operacao = int(input(
        "Escolha qual operação deseja executar: \n 1 - Soma\n 2 - Subtração\n 3 - Divisão\n 4 - Multiplicação\n 0 - Sair\n"))
    if operacao == 0:
        print("\nEncerrando")
        exit()
    elif operacao > 4:
        print("\nA operação não existe")
        app()
    else:
        num1 = int(input("\nDigite o primeiro número: "))
        num2 = int(input("\nDigite o segundo número: "))
        calcular = Calculadora(num1, num2, operacao)
        print(calcular)


while continua == "y":
    app()
    continua = input("\nDeseja continuar? (y/n): ")
print("\n\nCalculadora encerrada")
