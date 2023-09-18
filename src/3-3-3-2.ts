/*
Інтерфейси класів
*/

import { IPerson2, IPilot } from './3-3-3-1-type';

class Pilot implements IPerson2, IPilot {
  constructor(public name: string, public age: number) {
    if (this.age < 28) {
      throw new Error('Pilot too young');
    }
  }

  greet(phrase: string): void {
    console.log(phrase + ' ' + this.name);
  }

  flyMessage(): void {
    console.log('Літак набрав висоту, всім приємного польоту!');
  }

  setAutopilot(): void {
    console.log('Автопілот увімкнено.');
  }
}

const pilot = new Pilot('Yuriy', 35);

pilot.greet('Вас вітає командир корабля');
pilot.flyMessage();
pilot.setAutopilot();

export { Pilot };
