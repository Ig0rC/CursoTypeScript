/*
  algo não foi DEFINIDO === undefined
*/

let x;
if (typeof x === 'undefined') x = 20;
console.log(x * 2);

function (firstName: string, lastName?: string) {
  return {
    firstName,
    lastName,
  };
}

export default function squareOf(x: any) {
  if (typeof x === 'number') return x * x;
  return null;
}

const squareOfTwo = squareOf(2);

if (squareOfTwo === null) {
  console.log('conta invalida number');
} else {
  console.log(squareOfTwo * 2);
}

function ok() {
  return 'ok';
}

const bomdia = ok();

class App {
  public name: string;

  constructor(){
    this.name = 'ok';
  }

  mostrar(){
    this.name;
  }
}
