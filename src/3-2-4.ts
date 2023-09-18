/*
Наслідування
*/

class House4 {
  constructor(private readonly type: string, private street: string) {}
}

class StoneHouse extends House4 {
  constructor(street: string) {
    super('stone', street); // Виклик батьківського конструктора
  }
}

const stoneHouse = new StoneHouse('stone streets');

console.log(stoneHouse);
