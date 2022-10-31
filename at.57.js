//Sem usar bibliotecas, crie um projeto simples em Node.js que seja capaz de responder requisições HTTP.
//Explique como rodar e testar.

//Arquivo serve.js

const { criarServer} = require("http");
const PORTA = process.env.PORT || 8080
const servidor = criarServer();

servidor.on("request", (request, response) => {
	response.end("Olá, mundo!");
})

servidor.listen(PORT, ()=> {
	console.log('servidor iniciado na porta ${PORTA}
})

// Para rodar o servidor basta digitar node server.js. Ao iniciar receberemos uma noticia no terminal que ele
esta ativo na porta 8080. Ao acessar a rota localhost:8080 através do navegador será retornada a 
requisição (neste caso "olá mundo")
