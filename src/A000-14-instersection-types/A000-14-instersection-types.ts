type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };
type Pessoa = TemNome & TemSobrenome & TemIdade;
// type Pessoa = TemNome |  TemSobrenome | TemIdade;

type AB = 'A' | 'B';
type AC = 'D' | 'C';

type intersecao = AB & AC;

const pessoa: Pessoa = {
  idade: 30,
  nome: 'Luiz',
  sobrenome: 'Cardoso',
};

console.log(pessoa);

export { pessoa, intersecao };
