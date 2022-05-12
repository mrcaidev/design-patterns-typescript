import { Car, Ship, Transportation } from "./method";

export abstract class Logistics {
  protected abstract createTransportation(): Transportation;

  startTransportation() {
    const transportation = this.createTransportation();
    transportation.go();
  }
}

export class CarLogistics extends Logistics {
  protected createTransportation() {
    return new Car();
  }
}

export class ShipLogistics extends Logistics {
  protected createTransportation() {
    return new Ship();
  }
}
