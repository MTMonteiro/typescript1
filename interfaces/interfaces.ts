interface Humano {
  nome: string;
  idade?: number;
  [prop: string]: any; // propriedade com nome dinamico
  saudar(sobrenome: string): void;
}

function saudarComOla(pessoa: Humano): void {
  console.log(`hello ${pessoa.nome}`);
}

function mudarNome(pessoa: Humano): void {
  pessoa.nome = "Joao";
}

const pessoa: Humano = {
  nome: "Matheus",
  idade: 30,
  saudar(sobrenome: "string") {
    console.log(`meu nome é ${this.nome} ${sobrenome}`);
  },
};

saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
pessoa.saudar("silva");

class Cliente implements Humano {
  nome: string = "";
  saudar(sobrenome: string) {
    console.log(`meu nome é ${this.nome} ${sobrenome}`);
  }
}

const meuClient = new Cliente();
meuClient.nome = "Han";
saudarComOla(meuClient);
meuClient.saudar("silva");

interface FuncaoCalculo {
  (a: number, b: number): number;
}

let potencia: FuncaoCalculo;

potencia = function (base: number, exp: number): number {
  return base ** exp;
};

interface A {
  a(): void;
}

interface B {
  b(): void;
}

interface ABC extends A, B {
  c(): void;
}

class RealA implements A {
  a(): void {}
}

class RealAB implements A, B {
  a(): void {}
  b(): void {}
}

class RealABC implements ABC {
  a(): void {}
  b(): void {}
  c(): void {}
}
