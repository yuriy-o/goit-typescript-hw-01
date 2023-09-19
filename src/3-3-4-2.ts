/*
Інтерфейси як тип функції
*/

interface IPerson {
  name?: string;
  age: number;
}

class Person implements IPerson {
  name?: string;

  constructor(public age: number) {}

  setName(n: string) {
    this.name = n;
  }
}

export {};
