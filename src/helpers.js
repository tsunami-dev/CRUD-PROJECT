const fs = require("fs")
const { readFileSync, writeFileSync } = require("node:fs")

function readJSONFile(path, fileName){

    const object = readFileSync(`${path}/${fileName}`, "utf-8")
    return object ? JSON.parse(object) : []

}

function writeJSONFile(path, fileName, data){

    data = JSON.stringify(data)
    return writeFileSync(`${path}/${fileName}`, data, {encoding: "utf-8"})


}
function readCartJSON(path, fileName) {

    const cart = readFileSync(`${path}/${fileName}`, "utf-8")
    return cart ? JSON.parse(cart) : []
}

function writeCartJSON(path, fileName, cartData) {

    cartData = JSON.stringify(cartData, null, 2)
    return writeFileSync(`${path}/${fileName}`, cartData, { encoding: "utf-8" })


}

module.exports = {
    readJSONFile,
    writeJSONFile,
    readCartJSON,
    writeCartJSON

}