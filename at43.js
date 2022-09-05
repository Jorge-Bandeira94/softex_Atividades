//Aplique o padrão de projeto Observer para criar um simples editor de texto. Considere a solução apresentada no Hipertexto 6 e utilize o código visto para implementar novas classes. Os requisitos para avaliar o projeto são:

//- implementar uma subclasse da classe Editor chamada TextEditor;
//- aplicar o método insertLine, que recebe os parâmetros lineNumber e text;
//- inserir o texto na ordem correspondente a lineNumber e deslocar as linhas posteriores se necessário;
//- aplicar o método removeLine, que recebe lineNumber como parâmetro, deleta o texto da linha correspondente e desloca as linhas posteriores se necessário;
//- instanciar um TextEditor e disparar o evento “open”;
//- receber as linhas de texto, que serão inseridas no objeto textEditor, do usuário até que ele envie o texto “EOF”, que não deve ser inserido no objeto textEditor;
//- por fim, o textEditor deve disparar o evento “save” para que o conteúdo seja salvo no arquivo configurado e imprimir todo o conteúdo do arquivo na tela.

// Texto original no arquivo
let texto = [
  'Esta é, originalmente, a linha 1',
  'Esta é, originalmente, a linha 2',
  'Esta é, originalmente, a linha 3',
  'Esta é, originalmente, a linha 4'
]

// Evento ocorrendo aqui
class TextEditor {
  abrir() {
    let abrir = new Open()
    abrir.msg()
  }

  insertLine(lineNumber, text) {
    if (text.includes('EOF')) {
      console.log('Linha com "EOF" identificada')
      let objeto = new Save()
      objeto.salvar()
    } else {
      texto.splice(lineNumber, 0, text)
    }
  }
  removeLine(lineNumber) {
    texto.splice(lineNumber, 1)
    console.log('Linha removida')
  }
}

// observador do evento
class Save {
  salvar() {
    console.log('Salvando arquivo')
  }
}
// observador do evento
class Open {
  msg() {
    console.log('Abrindo editor de texto')
  }
}

// Textos que serão adicionados no arquivo
a = new TextEditor()
a.abrir()
a.insertLine(1, 'Linha adicional inserida')
console.log(texto)
a.removeLine(1)
console.log(texto)
a.insertLine(3, 'Linha com EOF')
console.log(texto)
