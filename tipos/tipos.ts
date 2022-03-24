let nome = 'a'

// console.log(nome)
// nome = 22 

// enums
// sao numericos
enum Cor {
  Cinza, // 0
  Verde = 100, // 1
  Azul // 2
}


let minhaCor: Cor =  Cor.Cinza
// console.log(minhaCor) // 0
// console.log(Cor.Verde) // 100

let carro: any = "qualquer coisa"

// funcoes
// retorna uma string
function retornaMeuNome(): string {
  return "Matheus"
}

// retorna nada 
function digaOi(): void {
  console.log(retornaMeuNome())
}

//retorna um number
function multiplicar(num1: number, num2: number): number {
  return num1 * num2
}


// tipo função

let calculo: (num1: number, num2: number) => number
calculo = multiplicar

let oi: () => void
oi = digaOi


type Usuario = {nome: string, idade: number}

// objetos
let usuario: Usuario = {
  nome: "Matheus",
  idade: 27
}

// console.log(usuario);

let nota: number | string = 10

//checando tipos

if (typeof nota === 'number'){
  // console.log("é number")
}else {
  // console.log(`valor é do tipo ${typeof nota}`);
}

// tipo never 
function falha(msg: string): never {
  throw new Error(msg)
}

let alturaOpcional: null | number = 12 

// ou adicionar "strictNullChecks": true no tsconfig.json