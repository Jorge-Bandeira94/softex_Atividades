//Crie um código com um objeto chamado “Banco”. Ele deverá ter propriedades que incluem conta, saldo, tipo de conta e agência e os seus métodos devem ser: buscar saldo, depósito, saque e número da conta.

//Observações:
//- buscar saldo deve retornar o valor atual do saldo;
//- para o depósito, você deverá passar um valor como parâmetro e adicioná-lo no saldo final do objeto;
//- para o saque, você deverá passar um valor como parâmetro e subtraí-lo no saldo final do objeto;
//- o número da conta deve retornar o número da conta.

let banco = {
    conta: 12345,
    saldo: 1200,
    tipoConta: "corrente",
    agencia: 7322,
    buscaSaldo: function() {
        console.log(banco.saldo)
    },
    deposito: function(valor) {
        banco.saldo = banco.saldo + valor
    },
    saque: function(valor) {
        banco.saldo = banco.saldo - valor
    },
    buscaConta: function() {
        console.log(banco.conta)
    },
    
}


console.log(banco.buscaSaldo())
console.log(banco.deposito(1600))
console.log(banco.buscaSaldo())
console.log(banco.saque(1700))
console.log(banco.buscaSaldo())
console.log(banco.buscaConta())
