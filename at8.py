import random
array = [1, 5, 7, 3, 9, 11, 13, 17, 29, 41, 57, 76, 55, 23, 81, 99, 101,
         123, 125, 873, 95, 91, 59, 67, 61, 43, 39, 97, 171, 999, 881, 725]

random.shuffle(array)
print(array)


def insertionSort(data):
    # passar por cada item do array inteiro
    for i in range(1, len(data)):
        indice_atual = data[i]
        print('VALOR NO indice atual: ', indice_atual)
        indice_anterior = i - 1
        print('valor no indice_anterior', data[indice_anterior])

        # enquanto o index for maior ou igual a zero e o valor no indice atual (baseado no for) for menor que
        # o valor no indice anterior, executamos uma troca, essa troca vai voltando até não haverem mais elementos de valor menor que o atual
        while indice_anterior >= 0 and indice_atual < data[indice_anterior]:
            # pegue o indice anterior + 1 e iguale ao indice anterior (pois o +1 é menor)
            print('Trocando: ', indice_atual, 'do indice atual por: ',
                  data[indice_anterior], 'do indice anterior')
            data[indice_anterior + 1] = data[indice_anterior]
            # agora o indice anterior é um anterior a ele mesmo, assim, o processo se repete até
            # que não consigamos mais fazer a troca de um menor por um valor maior
            indice_anterior = indice_anterior - 1
        # o valor que saiu do indice anterior +1 agora vira o valor do indice atual
        data[indice_anterior + 1] = indice_atual


insertionSort(array)
print(array)
