/*
Інтерфейси класів
*/

import { IPerson2, IPilot } from './3-3-3-1-type';
import { Pilot } from './3-3-3-2';

abstract class Plane {
  protected pilot?: IPilot;

  public sitInPlane(pilot: IPilot): void {
    this.pilot = pilot;
  }

  public abstract startEngine(): boolean;
}

class Boeing extends Plane {
  public startEngine(): boolean {
    if (!this.pilot) {
      throw new Error('No pilot in cabin');
    }

    console.log('Запуск турбін');

    this.pilot.flyMessage();
    return true;
  }
}

const boeing = new Boeing();
const pilot = new Pilot('Yuriy', 35);

// Капітан вітає пасажирів на трапі.
pilot.greet('Вас вітає капітан корабля');

// Займає місце пілота.
boeing.sitInPlane(pilot);

// Запускаємо двигуни.
boeing.startEngine();

export { Boeing };
