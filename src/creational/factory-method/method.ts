export interface Transportation {
  go(): void;
}

export class Car implements Transportation {
  go() {
    console.log("Driving car...");
  }
}

export class Ship implements Transportation {
  go() {
    console.log("Sailing ship...");
  }
}
