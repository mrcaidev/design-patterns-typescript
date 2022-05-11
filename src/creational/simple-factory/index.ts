import { CarFactory } from "./factory";

const carFactory = new CarFactory();
const car = carFactory.createCar("black");
console.log(`A ${car.getColor()} car was created.`);
