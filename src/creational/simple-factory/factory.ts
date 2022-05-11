import { Car } from "./product";

export class CarFactory {
  createCar(color: string) {
    const car = new Car(color);
    console.log("Syncing with database...");
    console.log("Writing to logs...");
    return car;
  }
}
