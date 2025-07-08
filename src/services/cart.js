//module of the cart subprograms

//USE CASE
//add item in the cart
async function addItem(userCart, item){
    userCart.push(item);
}
//delete item from the cart
async function deleteItem(userCart, id) {
    const index = userCart.findIndex((item) => item.id === id);

    if (index !== -1) {
        userCart.splice(index, 1); //a função splice corta uma determinada zona, no caso eu quero que ele corte 1 elemento do usercart, que no caso é a posição index
    }
}
//remove item from the cart
async function removeItem(userCart, id) {
    const indexFound = userCart.findIndex((item) => item.id === id);

    if (indexFound == -1) {
        console.log("Item não encontrado...");
        return;
    }

    if (userCart[indexFound].quantity > 1) {
        userCart[indexFound].quantity -= 1
    } else {
        userCart.splice(indexFound, 1);
    }
}

//calculate the total of items
async function calculateTotal(userCart) {
    let result = userCart.reduce((total, item)=> total + item.subtotal(), 0);
    console.log(`Total: R$ ${result}`);
}

async function displayCart(userCart){
    console.log("Your cart List:\n");
    userCart.forEach((item, index) => {
        console.log(`${index + 1} - ${item.name}\nR$ ${item.price} | qnt: ${item.quantity}x | Subtotal = ${item.subtotal()}\n`);
    });
    
}

export {
    addItem,
    calculateTotal,
    deleteItem,
    removeItem,
    displayCart,
}