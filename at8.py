array = [0, 5, 6, 7, 1, 2, 3, 4, 8, 9, 10, 12, 11, 14, 13, 20,
         15, 17, 16, 26, 29, 30, 41, 57, 32, 90, 76, 54, 55, 23]


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
