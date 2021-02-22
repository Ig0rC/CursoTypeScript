export class Pessoa {
  public readonly nome: string;
  public readonly sobrenome: string;
  private readonly idade: number;
  protected readonly cpf: string;

  constructor(nome: string, sobrenome: string, idade: number, cpf: string) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
    this.cpf = cpf;
  }

  public getIdade(): number {
    return this.idade;
  }

  public getCPF(): string {
    return this.cpf;
  }

  public getNomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }
}

export class Alunos extends Pessoa {
  getNomeCompleto(): string {
    return 'vai se fuder';
  }
}
export class Cliente extends Alunos {}

const aluno = new Alunos('IGor', 'Miranda', 30, '00002000-002');
const cliente = new Cliente('IGor', 'Miranda', 30, '00002000-002');
console.log(aluno.getNomeCompleto());
console.log(cliente.getIdade());
