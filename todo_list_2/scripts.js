function clearList() {
  localStorage.clear()
  location.reload()
}

//

let tasks = []
const inputTxt = document.getElementById('inputTxt')
const ulList = document.getElementById('ulList')

let localStorageTasks = JSON.parse(localStorage.getItem('list'))
if (localStorageTasks) {
  for (i = 0; i < localStorageTasks.length; i++) {
    tasks.push(localStorageTasks[i])
  }
  printTasks()
}

inputTxt.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    e.preventDefault()
    addTask()
  }
})

function addTask() {
  task = {
    id: Date.now(),
    task: inputTxt.value,
    completed: false
  }

  tasks.unshift(task)
  inputTxt.value = ''
  inputTxt.focus()

  localStorage.setItem('list', JSON.stringify(tasks))
  printTasks()
}

function printTasks() {
  let localStorageTasks = JSON.parse(localStorage.getItem('list'))
  let ul = document.getElementById('ulList')
  ul.innerHTML = ''

  for (i = 0; i < localStorageTasks.length; i++) {
    let li = document.createElement('li')
    li.innerHTML = localStorageTasks[i].task
    ul.appendChild(li)
  }
}

//Refazer:

function createDeleteButton() {
  let myTasklist = document.getElementsByTagName('li')
  for (i = 0; i < myTasklist.length; i++) {
    var span = document.createElement('button')
    var txt = document.createTextNode('X')
    span.className = 'close'
    span.appendChild(txt)
    myTasklist[i].appendChild(span)
  }
  deleteTask()
}
createDeleteButton()

function deleteTask() {
  let close = document.getElementsByClassName('close')
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      let div = this.parentElement
      div.parentElement.removeChild(div)
      tasks.splice(tasks.indexOf(div.innerText.replace('X', '')), 1)
      //remover elemento do localStorage pela posição, ou id
      //chamar função exibir elementos dnv
      //updateLocalStorage()
    }
  }
}