const inform = console.log()
const { nanoid } = require("nanoid")
const { inventory } = require("../data/inventory.json")
const { writeJSONFile } = require("./helpers")
const chalk = require("chalk")

function index(arrayOfItems){
    return arrayOfItems.map((eachItem) => `item: ${chalk.red(eachItem.name)} id: ${chalk.yellow(eachItem.id)} price: ${chalk.greenBright(eachItem.price)} stock: ${chalk.yellowBright(eachItem.stock)}`).join("/n")
}

function show (arrayOfItems, itemId){
    const itemTofind = items.find ((item) => item.id === itemId);

    return itemTofind.id + " " + itemTofind.name + " " + itemTofind.price + "price";
}

function create (items, itemName) {
    const newItem = {
      name: itemName,
    //   id: nanoid(4),
      price: itemPrice[itemName],
    };
    items.push(newItem);
    return items;
}



function destroy(items, itemId) {
    const index = items.findIndex((item) => item.id === itemId);
    if (index > -1) {
      item.splice(index, 1);
      inform("Item successfully removed from inventory");
      return items;
    } else {
      inform("item not found.");
      return items;
    }
}
  

function edit(items, itemId, updatedItem) {
    const index = items.findIndex((item) => item.id === itemId);
    if (index > -1) {
        items[index].id = itemId;
        items[index].name = updatedItem;
        items[index].price = itemPrice[updatedItem]
        items[index].stock = itemStock[updatedItem];
        inform("Inventory successfully updated");
        return items;
    } else {
        inform("item not found.");
        return items;
    }
}



module.export = { index, show, create, destroy, edit }