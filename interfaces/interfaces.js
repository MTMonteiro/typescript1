"use strict";
function saudarComOla(pessoa) {
    console.log(`hello ${pessoa.nome}`);
}
function mudarNome(pessoa) {
    pessoa.nome = "Joao";
}
const pessoa = {
    nome: "Matheus",
    idade: 30,
    saudar(sobrenome) {
        console.log(`meu nome é ${this.nome} ${sobrenome}`);
    },
};
saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
pessoa.saudar("silva");
class Cliente {
    constructor() {
        this.nome = "";
    }
    saudar(sobrenome) {
        console.log(`meu nome é ${this.nome} ${sobrenome}`);
    }
}
const meuClient = new Cliente();
meuClient.nome = "Han";
saudarComOla(meuClient);
meuClient.saudar("silva");
let potencia;
potencia = function (base, exp) {
    return Math.pow(base, exp);
};
class RealA {
    a() { }
}
class RealAB {
    a() { }
    b() { }
}
class RealABC {
    a() { }
    b() { }
    c() { }
}
//# sourceMappingURL=interfaces.js.map