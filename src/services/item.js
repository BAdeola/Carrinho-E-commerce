//module that take care of the items subprograms

//USE CASE
//create item with subtotal calculated
async function createItem(name, id, price, quantity) {
    return{
        name,
        id,
        price,
        quantity,
        subtotal: () => price * quantity,
    }
}

export default createItem;