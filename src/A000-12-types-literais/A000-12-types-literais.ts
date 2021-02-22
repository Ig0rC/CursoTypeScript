let x = 10; //eslint-disable-line
const a = 100 as const; //como uma constate

const person = {
  name: 'Igor' as const,
  surname: 'Cardoso',
};
console.log(person, a);

function escolhaCor(cor: 'Vermelho' | 'String' | 'Azul'): string {
  return cor;
}

console.log(escolhaCor('String'));

export default 1;
