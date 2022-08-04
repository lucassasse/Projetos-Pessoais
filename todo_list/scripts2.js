let tasks = []

function getTask() {
  let inputTxt = document.getElementById('inputTxt')

  if (inputTxt.value == '') {
    alert('Enter a task.')
    stop
  } else {
    tasks.unshift(inputTxt.value)
    updateLocalStorage()
  }
  inputTxt.value = ''
  inputTxt.focus()
}

function updateLocalStorage() {
  localStorage.setItem('tasks', JSON.stringify(tasks))
  printTasks()
}

function printTasks() {
  let localStorageTasks = JSON.parse(localStorage.getItem('tasks'))

  if (localStorageTasks) {
    let ul = document.getElementById('tasks')
    ul.innerHTML = ''
    for (let i = 0; i < localStorageTasks.length; i++) {
      let li = document.createElement('li')
      li.innerHTML = localStorageTasks[i]
      ul.appendChild(li)
    }
    tasks = localStorageTasks
  }
  createDeleteButton()
}
printTasks()

function clearTasks() {
  localStorage.clear()
  location.reload()
}

//
//
//

// Create a "close" button and append it to each list item
function createDeleteButton() {
  let myTasklist = document.getElementsByTagName('li')
  for (i = 0; i < myTasklist.length; i++) {
    var span = document.createElement('SPAN')
    var txt = document.createTextNode('X')
    span.className = 'close'
    span.appendChild(txt)
    myTasklist[i].appendChild(span)
  }
}

// Click on a close button to hide the current list item
function deleteTask() {}

let close = document.getElementsByClassName('close')
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    let div = this.parentElement
    //Verificar posição do elemento clicado, atraves de uma varedora (forEach?) e deletar o item da mesma posição do array
    //Atualizar a lista - printTasks()
    
    //console.log(div)
    //div.remove()
    //div.style.display = 'none'
  }
}
