enum Cores {
  VERMELHO = 10, //0
  AZUL = 100, // 1
  AMARELO = 200, //2
}
enum Cores {
  ROXO = 'ROXO',
  VERDE = 201,
  ROSA,
}

console.log(Cores);
console.log(Cores.VERMELHO);
console.log(Cores.AZUL);
console.log(Cores.AMARELO);
console.log(Cores[0]);
console.log(Cores.ROXO);
console.log(Cores['ROXO']);
console.log(Cores[201]);
console.log(Cores.ROSA);

export default function escolhaACor(cor: Cores): void {
  console.log('funciton', Cores[cor]);
}

escolhaACor(Cores.ROXO);
