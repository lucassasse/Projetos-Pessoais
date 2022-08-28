const decimalNumberInput = document.getElementById('inputDecimal')

/*function toBinary() {
  let result = []
  let decimalNumber = decimalNumberInput.value

  let num = 2
  while (decimalNumber > 1) {
    num = decimalNumber % 2
    decimalNumber = parseInt(decimalNumber / 2)
    quociente = Math.floor(decimalNumber / 2)

    result.unshift(num)
  }

  if (quociente % 2 == 0) {
    result.unshift(1)
  } else {
    result.unshift(2)
  }
  console.log('result: ' + result)
  printResult(result, 1)
}*/

function toBinary(){
  result = parseInt(decimalNumberInput.value).toString(2)
  console.log(result)
}

function toOctal() {
  let result = []
  let decimalNumber = decimalNumberInput.value

  let num = 10
  while (decimalNumber > 7) {
    num = decimalNumber % 8
    decimalNumber = parseInt(decimalNumber / 8)
    quociente = Math.floor(decimalNumber / 8)

    result.unshift(num)
  }

  if (quociente % 2 == 0) {
    result.unshift(1)
  } 
  console.log('result: ' + result)
  printResult(result, 2)
}

function printResult(result, type) {
  type = type == 1 ? 'Binary: ' : 'Octal: '
  document.getElementById('result').innerHTML = type + result.join('')
}
