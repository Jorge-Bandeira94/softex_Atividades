let lista = [2, 7, 16, 1, 0, 25, 12, 8]
// Escolha algum código executável em JavaScript feito em atividades passadas e o coloque no Node.js. Para isso, você deve ter o Node.js instalado. Após fazer essa migração, coloque seu código no arquivo "index.js", teste e tire um print.

// Código escolhido: Algoritmo de ordenação bubblesort

function BubbleSort(array) {
  for (i = 0; i < array.length - 1; i++) {
    for (j = 0; j < array.length; j++) {
      if (array[j] < array[j - 1]) {
        let temp = array[j - 1]
        array[j - 1] = array[j]
        array[j] = temp
      }
    }
  }
}

BubbleSort(lista)
console.log(lista)
