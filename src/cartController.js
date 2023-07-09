const inform = console.log
const { fs } = require("fs")
const { nanoid } = require("nanoid")
const { cart} = require("../data/GetShwifty_Cart.json")
const { writeCartJSON, readCartJSON } = require("../src/helpers")

inform("Ehh, Ricky here... We've got to keep an eye out for any zany wacky characters that pop up ")




function addToCart(itemId, productName, price, quantity) {

    let shoppingCart = [];

    try {
        shoppingCart = JSON.parse(fs.readCartJSON("cart.json"));

    } catch (error) {

        inform("is that all?")
    }

    shoppingCart.push(cartItem)



};

fs.writeCartJSON("GetShwifty_Cart.JSON", JSON.stringify(shoppingCart, null, 2))









module.exports = {
    addToCart,
    clearCart,
    updateQuantity,
    updateTotal,
    promoCode


}