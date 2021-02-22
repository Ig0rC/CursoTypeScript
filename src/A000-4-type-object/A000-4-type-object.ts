// const objetoA: {
//   chaveA: string;
//   chaveB: string;
//   chaveC?: string;
//   [key: string]: unknown;
// } = {
//   chaveA: 'Valor A',
//   chaveB: 'Valor B',
// };

// objetoA.chaveD = 'Nova Chave';

const objetoA: {
  readonly chaveA: string; // readonly = apenas leitura
  chaveB: string;
} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

console.log(objetoA.chaveA);
