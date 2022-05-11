# Simple Factory

In this example, we are going to create a car.

Read code first, and come back for explanation.

---

The point of adopting Simple Factory pattern is that, we can involve complicated creation logic when creating an instance. When we say "complicated", we are not simply passing attributes, like the color of the car.

> If that is the case, we could entirely forget about factory, and initialize a car just like `const car = new Car("SOME-COLOR")`. That's totally fine.

Instead, we often have to modify the passed-in arguments to get what we really want, such as:

- Examine user input.
- Filtering an array to get qualified data.
- ...

or maybe we want to introduce some side effects, such as:

- Database syncing.
- Local logging.
- ...

And Simple Factory comes in handy here. We can put these modifications or side effects in a method of a factory, and executing them alongside with creating the real instance.

```ts
export class CarFactory {
  createCar(color: string) {
    const car = new Car(color); // <- Create the real instance.
    console.log("Syncing with database..."); // <- Side effect 1.
    console.log("Writing to logs..."); // <- Side effect 2.
    return car;
  }
}
```

If we do not adopt Simple Factory pattern, we'll have to write syncing and logging logic ourselves every time a car is instantiated, bringing into our code some extra imports and redundant logics. But with Simple Factory, these side effects are **automatically** executed, while we can acquire the car instance all the same.

It might be temping to put these logic into the instantiation of `Car`:

```ts
export class Car {
  // ...
  constructor(color: string) {
    this.color = color;
    syncToCloud(); // <- Move side effect 1 over here.
    logToFile(); // <- Move side effect 2 over here.
  }
  // ...
}
```

Everything still works as previously, as we will see. However, the syncing and logging logic is now tightly coupled with the crafting of the car itself; but in essence, the crafting process has nothing to do with syncing and logging!

> Just picture a car factory in real life. Crafting and monitoring may well be handled by two seperate apartments, because the monitoring department has no reason to care about how the car is crafted, and vice versa.
>
> But these two departments do work in the same factory. And if a customer wants a car, the two parts should both function properly to finish the task. And that is exactly how the name "factory" comes out!

Now we know what a factory is and why it is necessary. We call it "simple", because all we do is just gathering some extra logic into the factory. We will see more complicated logic in other factory patterns.
