# Factory Method

Suppose we are manufacturers, and have to handle both domestic and overseas business. There are two transportation methods we will use: by car or by ship.

Read code first, and come back for explanation.

---

As a manufacturer, we hope we can flexibly switch between different transportation methods, while the overall process should not change too much. So we have some common business logic here, which remains the same no matter we are using cars or ships:

```ts
function deliverProduct(logistics: Logistics) {
  console.log("Crafting product..."); // <- Common logic.
  logistics.startTransportation();
  console.log("Product delivered."); // <- Common logic.
}
```

But when it comes to the real transportation part, we use the abstract class `Logistics`, because we are not yet sure about which method we are going to use. Car logistics, ship logistics, either is possible.

And once we have selected the method (most probably at runtime), all we have to do is pass this method as an argument, and let it function in its position.

```ts
function deliverProduct(logistics: Logistics) {
  console.log("Crafting product...");
  logistics.startTransportation(); // `CarLogistics` or `ShipLogistics`.
  console.log("Product delivered.");
}
```

This decouples transportation methods from common business logic, so now the main function `deliverProduct` can focus on the overall process, ignoring the concrete details. On the contrary, if we do not adopt Factory Method pattern, we will have to write several functions to support different transportation methods, or overload this function several times.

But what about the concrete details? There must be someone to tackle this problem! Well, it is solved by the subclasses of the abstract `Logistics` class.

```ts
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
```

Our abstract class leaves the responsibility of method creation to its subclasses; `CarLogistics` says "we use cars", and `ShipLogistics` says "we use ships". To our satisfaction, both of them can execute the common business logic out of the box, since both `CarLogistics` and `ShipLogistics` inherits `Logistics`. But this time, they know which transportation they are going to use!

One great benefit of adopting Factory Method is that, it makes it far more easier to add additional methods. If we want to deliver goods by plane, we simply need to add a class called `Plane` which implements `Transportation`, and a corresponding factory called `PlaneLogistics`. So every time we want to use plane, we can just use the `PlaneLogistics` instance.

In summary, we can use Factory Method when we have many ways to do something, but do not know which one we will work with beforehand. But there is one limitation here - the methods must "look the same", technically that is, inherit the same interface. Otherwise, the common logic part cannot have all methods perfectly fit in.
