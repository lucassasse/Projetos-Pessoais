const inputTxt = document.querySelector('#input')
const divOutput = document.querySelector('#output')

let tasks = []

console.log(inputTxt)
console.log(divOutput)

function save() {
  tasks.push(inputTxt.value)
  inputTxt.value = ''
  inputTxt.focus()
  list()

  console.log(tasks)
}

function list() {}
