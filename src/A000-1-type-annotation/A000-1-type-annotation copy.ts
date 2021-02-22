/* eslint-disable */


// tipos básicos
let nome: string = 'Luiz'; // qualquer Tipo de STRING: '' "" ``
let idade: number = 30; // 10, 1.58, -5.55, 0f00d, 0b1010 e 0o7744
let adulto: boolean = true; //false ou true
let simbolo:symbol = Symbol('qualquer-symbol'); //symbol
// let big: bigint = 10n;


//Arrays
let arrayNumber: Array<number> = [1, 2, 3, 4];
let arrayNumber2: number[] = [1, 2, 3, 4];
let arrayString: Array<string> = [ 'a', 'b'];

let daw;



// Object
let pessoa: { nome: string, idade: number, adulto?: boolean // opcional '?'
} = {
  nome: 'Igor cardoso',
  idade: 30
};




//function

// x e y tipage e ():number o return da function
function soma(x: number, y:number): number {
  return x + y;
}


const soma2: (x:number, y: number) => number = (x,y) => x + y;


export default nome;
