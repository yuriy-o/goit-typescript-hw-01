/*
Інтерфейси класів
*/

interface IPerson2 {
  name: string;
  age: number;

  greet(phrase: string): void;
}

interface IPilot {
  flyMessage(): void;
}

export { IPerson2, IPilot };
