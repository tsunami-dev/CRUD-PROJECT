const inform = console.log;
const { readJSONFile, writeJSONFile, readCartJSON, writeCartJSON } = require("./src/helpers");
const { addToCart, clearCart, updateQuantity, updateTotal, promoCode } = require("./src/cartController")

inform("whats in the box?")

const action = process.argv[2];
const item = process.argv[3];
const itemId = process.argv[4];


function run() {
    let writeToCart = false;
    let updatedCart = [];

    let itemInCart = readCartJSON("data", "CArt.JSON")
    switch (action) {

        case "addToCart":
            const addToCart = addToCart(item, itemId, itemInCart)
            writeToFile = true;
            break;

        case "clearCart":
            const clearCart = clearCart(item, itemInCart)
            writeToFile = true;
            break;

        case "updateQuantity":
            const updateQuantity = updateQuantity(item, itemInCart)
            writeToFile = true;
            break;

        case "updateTotal":
            const updateTotal = updateTotal(item, itemInCart)
            writeToFile = true;
            break;


    }

    if (writeToFile) {
        writeCartJSON("./data", "cart.json", updatedItems)
    }


}
run()

module.exports = {
    addToCart,
    clearCart,
    updateQuantity,
    updateTotal
}