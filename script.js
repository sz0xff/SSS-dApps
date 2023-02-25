const symbol = require('/node_modules/symbol-sdk')

const address = symbol.Address.createFromRawAddress("TCHPDXHGRAAL6HFRHDVFXKTFXOA7TI7IP4NEFZA")

console.log("Hallo Symbol")

console.log(`Your Address: ${address.plain()}`)

const dom_addr = document.getElementById('wallet-addr')
dom_addr.innerText = address.pretty()

console.log(address.pretty())
