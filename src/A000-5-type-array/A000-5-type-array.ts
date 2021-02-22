// Array<T> - T[]

export function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((ac, valor) => ac * valor, 1);
}

export function concactenaString(...args: string[]): string {
  return args.reduce((ac, valor) => ac + valor);
}

export function upperCase(...args: string[]): string[] {
  return args.map((value, index, array): string => {
    console.log(array);
    console.log(index);
    return value.toUpperCase();
  });
}
const result = multiplicaArgs(1, 2, 3);
const concat = concactenaString('a', 'b', 'b', 'c');
const up = upperCase('a', 'b', 'c', 'd');

console.log(result);
console.log(up);
console.log(concat);

export default upperCase;
