/*PROJETO BÁSICO DE UM PROGRAMA BANCÁRIO, COM 3 TIPOS DE CONTA
 BANCÁRIA ONDE USEI MÉTODOS PARA QUE PUDESSEM HERDAR AS PROPRIEDADES DA CONTA PRINCIPAL*/
class contaBancaria {
    constructor(agencia, numero, tipo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo= 0 ;
    }
    ge() {
        return this._saldo
    }
    se(valor) {
        this._saldo = valor;
    }
    sacar(valor) {
        if (valor > this._saldo) {
            return 'Operação negada'
        }
        this._saldo = this._saldo - valor;
        return this._saldo;
    }
    depositar(valor) {
        this._saldo = this._saldo + valor;
        return this._saldo
    }
}

class contaCorrente extends contaBancaria {
    constructor(agencia, numero, cartaoCredito) {
        super(agencia, numero);
        this.tipo = 'Corrente';
        this.cartaoCredito = cartaoCredito;
    }
    get cartaoCredito() {
        return this._cartaoCredito
    }
    set cartaoCredito(valor) {
        this._cartaoCredito = valor;
    }
}

class contaPoupanca extends contaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero)
        this.tipo = 'Poupança';

    }


}
class contaUniversitaria extends contaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero)
        this.tipo = 'Unversitária';

    }
    sacar(valor) {
        if (valor > 500) {
            return "Operação Negada!!"
        }
        this._saldo = this._saldo - valor
    }

} 
