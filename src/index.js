import createItem from "./services/item.js";
import * as cartService from "./services/cart.js"

const cart = [];

const item1 = await createItem("calculadora",999, 28.9, 1);
const item2 = await createItem("lápis", 878, 4.50, 3);

await cartService.addItem(cart, item1);
await cartService.addItem(cart, item2);
await cartService.displayCart(cart);

await cartService.calculateTotal(cart);

await cartService.removeItem(cart, item1.id);
await cartService.removeItem(cart, item2.id);
await cartService.displayCart(cart);
//await cartService.deleteItem(cart, item1.id);

await cartService.calculateTotal(cart);