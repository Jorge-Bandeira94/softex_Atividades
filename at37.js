//Desenvolva um código e crie nele:

//- um objeto com, no mínimo, três propriedades;
//- um array de tamanho três no mínimo;
//- duas funções, a primeira lista as propriedades do objeto e a segunda, os elementos do array.


let casa = {
  porta: 2,
  janelas: 6,
  cor: 'amarela'
}

let lista = ['maçã', 'ovo', 'carne']

function listarProp(casa){
  for(const e in casa){
    console.log(e)
  }
}

function listarItens(lista){
  for(const e of lista){
    console.log(e)
  }
}

listarProp(casa)
listarItens(lista)
