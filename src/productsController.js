const inform = console.log()
const { nanoid } = require("nanoid")
const { inventory } = require("../data/inventory.json")
const { writeJSONFile } = require("./helpers")
const chalk = require("chalk")

function index(inventory){
    return inventory.map((eachItem) => `item: ${chalk.red(eachItem.name)} id: ${chalk.yellow(eachItem.id)} price: ${chalk.blueBright(eachItem.price)} inStock: ${chalk.redBright(eachItem.inStock)}`).join(" ")
}

function show (inventory, itemId, itemName){
    const itemTofind = inventory.findIndex((item) => item.id === itemId);
    let stockItems = inventory.find((stock) => stock.name === itemName)
    for (anyItem of inventory) {
        return `id: ${chalk.greenBright(anyItem.item.id)} item: ${chalk.bgBlueBright(anyItem.name)} price: $${chalk.magenta(anyItem.price)} inStock: ${chalk.redBright(anyItem.inStock)}`
    }
}

function create (items, itemName, price, inStock) {
    const newItem = {
      id: nanoid(4),
      name: itemName,
      price: price,
      inStock: true
      
    };
    items.push(newItem)
    return items;
}



function destroy(inventory, itemName) {
    const removeByName = inventory.findIndex((item) => item.name === itemName);
    for(i = 0; i < inventory.length; i++)
      if (removeByName !== -1) {
        let itemRemoved = inventory.splice(removeByName, 1);
        inform(`${itemRemoved}Item successfully removed from inventory`);
        writeJSONFile("./data", "inventory.json", inventory)
        return inventory;
    } else {
        //inform("seems we can't do that.");
        console.log("seems we can't do that.")
        return inventory;
    }
}
  

function edit(items, itemId, updatedItem) {
    const index = items.findIndex((item) => item.id === itemId);
    if (index > -1) {
        items[index].id === itemId;
        items[index].name === updatedItem;
        items[index].price === itemPrice[updatedItem]
        items[index].stock === itemStock[updatedItem];
        inform("Inventory successfully updated");
        return items;
    } else {
        //inform("item not found.");
        console.log("item not found.")
        return items;
    }
}

//const dog ={"name":"pit", id:}

module.exports = { index, show, create, destroy, edit }