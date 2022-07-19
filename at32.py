

variavel1 = float(input("Digite o primeiro valor: "))
variavel2 = float(input("Digite o segundo valor: "))

print("Qual operador deseja utilizar para executar uma operação entre estes dois números? (+ - / *)")
sinal = input("Sinal: ")

if sinal == "+":
    print(variavel1 + variavel2)
elif sinal == "-":
    print(variavel1 - variavel2)
elif sinal == "/":
    resultDiv = variavel1 / variavel2
    print(resultDiv)
    print("O resto da divisão é: ", variavel1 % variavel2 )
elif sinal == "*":
    print(variavel1 * variavel2)
    
