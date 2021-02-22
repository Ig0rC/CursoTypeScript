type Idade = number;
type Pessoa = {
  name: string;
  idade: Idade;
  salario: number;
  corPreferida?: string;
};

type CorRGB = 'Vermelho' | 'Verde' | 'Azul';
type CorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto';

type CorPrerida = CorRGB | CorCMYK;

const pessoaOne: Pessoa = {
  idade: 30,
  name: 'Igor',
  salario: 3000,
};

export function setCorPreferida(pessoa: Pessoa, cor: CorPrerida): Pessoa {
  return { ...pessoa, corPreferida: cor };
}

console.log(setCorPreferida(pessoaOne, 'Ciano'));
