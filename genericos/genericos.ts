function echo(object: any) {
  return object;
}

console.log(echo("Joao"));
console.log(echo(27));
console.log(echo({ nome: "Joao", idade: 27 }));

//  Tipo definido no momento que for executado
// function echoMelhorado(object) {
function echoMelhorado<T>(object: T): T {
  return object;
}

console.log(echoMelhorado("Joao"));
console.log(echoMelhorado<number>("27".length)); // T vira number
console.log(echoMelhorado({ nome: "Joao", idade: 27 }));

const avaliacoes: Array<number> = [10, 9.3, 7.7];
avaliacoes.push(4);

console.log(avaliacoes);

function imprimir<T>(args: T[]) {
  args.forEach((elemento) => console.log(elemento));
}

imprimir([1, 2, 3]);
imprimir<number>([1, 2, 3]);
imprimir<string>(["a", "b", "c"]);
imprimir<{ nome: string; idade: number }>([
  { nome: "a", idade: 1 },
  { nome: "b", idade: 2 },
  { nome: "c", idade: 3 },
]);
