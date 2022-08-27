const decimalNumberInput = document.getElementById('inputDecimal')

function toBinary() {
  let result = []
  let decimalNumber = decimalNumberInput.value

  let num = 3
  while (decimalNumber > 2) {
    num = decimalNumber % 2
    decimalNumber = parseInt(decimalNumber / 2)
    quociente = Math.floor(decimalNumber / 2)

    result.unshift(num)

    console.log('num: ' + num)
    console.log('decimalNumber: ' + decimalNumber)
    console.log('quociente: ' + quociente)
  }

  result.unshift(quociente % 2)
  console.log('result> ' + result)
}
