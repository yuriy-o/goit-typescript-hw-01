/*
Інтерфейси об'єктів
*/

interface IPerson {
  name: string;
  age: number;

  greet(phrase: string): void;
}

let user: IPerson;

user = {
  name: 'Юрій',
  age: 35,

  greet(phrase) {
    console.log(phrase + ' ' + this.name + `. Мені ${this.age} років.`);
  },
};

user.greet('Привіт! Мене звуть');
