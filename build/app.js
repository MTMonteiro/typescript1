"use strict";
let canal = 'Gaveta';
let inscritos = 77777;
// canal = inscritos
console.log(canal);
function saudar(isManha) {
    let a = 1;
    let saudacao;
    if (isManha) {
        saudacao = "Bom Dia";
    }
    else {
        saudacao = "Valeu";
    }
    return saudacao;
}
const a = 'Test ts';
console.log(a);
let nome = 'a';
console.log(nome);
// nome = 22 
// enums
// sao numericos
var Cor;
// nome = 22 
// enums
// sao numericos
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 101] = "Azul"; // 2
})(Cor || (Cor = {}));
let minhaCor = Cor.Cinza;
console.log(minhaCor); // 0
console.log(Cor.Verde); // 100
let carro = "qualquer coisa";
// funcoes
// retorna uma string
function retornaMeuNome() {
    return "Matheus";
}
// retorna nada 
function digaOi() {
    console.log(retornaMeuNome());
}
//retorna um number
function multiplicar(num1, num2) {
    return num1 * num2;
}
// tipo função
let calculo;
calculo = multiplicar;
let oi;
oi = digaOi;
// objetos
let usuario = {
    nome: "Matheus",
    idade: 27
};
console.log(usuario);
let nota = 10;
//checando tipos
if (typeof nota === 'number') {
    console.log("é number");
}
else {
    console.log(`valor é do tipo ${typeof nota}`);
}
// tipo never 
function falha(msg) {
    throw new Error(msg);
}
let alturaOpcional = 12;
// ou adicionar "strictNullChecks": true no tsconfig.json
//# sourceMappingURL=app.js.map