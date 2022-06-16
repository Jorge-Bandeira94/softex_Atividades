array = [1, 5, 7, 3, 9, 11, 13, 17, 29, 41, 57, 76, 55, 23, 81, 99, 101, 123, 125, 873, 95, 91, 59, 67, 61, 43, 39, 97, 171, 999, 881, 725]


def insertionSort(data):

    for i in range(1, len(data)):
        indice_atual = data[i]
        indice_anterior = i - 1

        while indice_anterior >= 0 and indice_atual < data[indice_anterior]:

            data[indice_anterior + 1] = data[indice_anterior]
            indice_anterior = indice_anterior - 1
            print('Temos no indice: ', indice_anterior, ' o valor: ',
                  data[indice_anterior], ' que é menor que : ', data[indice_anterior + 1], ' no indice: ', indice_anterior + 1)

        data[indice_anterior + 1] = indice_atual


insertionSort(array)
print(array)
