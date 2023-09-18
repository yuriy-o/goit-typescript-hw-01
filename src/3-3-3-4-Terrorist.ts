/*
Інтерфейси класів
*/

import { IPerson2, IPilot } from './3-3-3-1-type';
// import { Pilot } from './3-3-3-2';
import { Boeing } from './3-3-3-3-Boeing';

class Terrorist implements IPilot {
  bluff(phrase: string): void {
    console.log(phrase);
  }

  flyMessage(): void {
    console.log(
      'Наші вимоги → 19 мільйонів, інакше ми вб"ємо всіх заручників.'
    );
  }
}

const boeing = new Boeing();
const pilot = new Terrorist();

pilot.bluff('Ми захопили цей літак');
pilot.bluff('Подальші інструкції будуть пізніше');

// Займає місце пілота.
boeing.sitInPlane(pilot);

// Запускаємо двигуни.
boeing.startEngine();

export {};
