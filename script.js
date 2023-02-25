const symbol = require('/node_modules/symbol-sdk')

const address = symbol.Address.createFromRawAddress("TCHPDXHGRAAL6HFRHDVFXKTFXOA7TI7IP4NEFZA")

console.log("Hallo Symbol")

console.log('Your Address: ${address.plain()}')

