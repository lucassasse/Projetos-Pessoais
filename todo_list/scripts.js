const inputTxt = document.querySelector('#input')
const divOutput = document.querySelector('#output')

let tasks = []

console.log(inputTxt)
console.log(divOutput)

function addTask() {
  if (!inputTxt.value) {
    alert('Digite uma tarefa!')
  } else {
    const todoObject = { id: tasks.length, text: inputTxt.value, isDone: false }
    tasks.unshift(todoObject)
    printTasks()
  }

  inputTxt.value = ''
  inputTxt.focus()
}

function printTasks() {
  console.log(tasks)
}
