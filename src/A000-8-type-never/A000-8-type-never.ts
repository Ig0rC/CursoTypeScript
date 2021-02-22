export function criarError(): never {
  throw new Error('error qualquer');
}

criarError();
