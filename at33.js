console.log('Adicione suas três notas: ')
const prompt = require('prompt-sync')({ sigint: true })

let total = 0

for (i = 0; i < 3; i++) {
  let nota = prompt('Nota: ')
  let notaN = Number(nota)
  total += notaN
}

if (total > 0) {
  let media = total / 3
  let passou = media >= 7 ? 'Aprovado' : 'Reprovado'
  console.log(passou)
}

console.log(
  'Agora informe duas de suas notas para saber quantos pontos faltam para passar de ano: '
)

let necessario = 21
for (i = 0; i < 2; i++) {
  let notaAtual = prompt('Nota: ')
  necessario -= notaAtual
}

let result =
  necessario > 10
    ? 'Você precisa de mais pontos que o possível para passar de ano, lamento'
    : `Você necessita de ${necessario} pontos para passar por média`
console.log(result)
