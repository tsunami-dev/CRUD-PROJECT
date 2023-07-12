
const { readJSONFile, writeJSONFile } = require("./src/helpers")

const { index, show, create, destroy, edit } = require("./src/productsController.js")

const inform = console.log

console.log(index)

function run () {

    inform("welcome travler, how can i help?\n\n")

    let items = readJSONFile("data", "inventory.json")
    console.log("here's what we got in stock", items )

    const action = process.argv[2]
    const itemName = process.argv[3]
    const id = process.argv[4]
    const price = process.argv[5]
    const stock = process.argv[6]

    let writeToFile = false;
    let updatedItems = []

    switch (action){

        case "index":
            const inventoryView = index(items)
            inform(inventoryView);
            break;
        
        case "show":
            const inventoryShow = show(items, itemName, id, price, stock);
            inform(inventoryShow);
            break;

        case "create":
            updatedItems = create(items, itemName, id, price, stock);
            writeToFile = true;
            break;
        
        case "update":
            updatedItems = edit(items, itemName, id, price, stock);
            writeToFile = true;
            inform(updatedItems)
            break;

        case "destroy":
            updatedItems = destroy(items, itemName);
            writeToFile = true;
            inform(updatedItems)
            break;

        default:
            inform("you want what?")
    }

    if (writeToFile) {
        writeJSONFile("./data", "inventory.json", updatedItems)
    }




}

run()

