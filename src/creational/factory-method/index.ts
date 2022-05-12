import { CarLogistics, Logistics, ShipLogistics } from "./factory";

function deliverProduct(logistics: Logistics) {
  console.log("Crafting product...");
  logistics.startTransportation();
  console.log("Product delivered.");
}

const carLogistics = new CarLogistics();
const shipLogistics = new ShipLogistics();

deliverProduct(carLogistics);
deliverProduct(shipLogistics);
