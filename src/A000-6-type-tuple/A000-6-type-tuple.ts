// Tuple

const dadosCliente: [number, string] = [1, 'Luiz'];

const person: [string, string, number, boolean] = ['', '', 0, false];
const person2: [string, string, number, boolean?] = ['', '', 0, false];
const person3: readonly [...string[]] = ['Igor', 'Cardoso', 'Miranda']; // imutavel

console.log(person3);

person[0] = 'Igor';
person[1] = 'Cardoso';
person[2] = 10;
person[3] = true;

console.log(person);
console.log(person2);

dadosCliente[0] = 0;
dadosCliente[1] = 'Carlos';
console.log(dadosCliente);

// readonly array
const array: readonly string[] = ['I ', 'O'];
const array2: ReadonlyArray<string> = ['C ', 'C'];

console.log('array', array);
console.log('array2', array2);

export default {
  array,
};
