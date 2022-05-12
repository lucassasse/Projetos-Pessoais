console.log('Gerenciados Financeiro')

let client = 'Lucas Sasse'

console.log('Cliente: ' + client)

let valProduct = 100
let valDiscount = 37

let discountFunc = require('./modules/calcDiscount')

let finalValue = discountFunc(valProduct, valDiscount)

console.log('Valor final do produto: ' + finalValue)
