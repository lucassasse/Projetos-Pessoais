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

function deleteTask() {
  let close = document.getElementsByClassName('close')
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      let div = this.parentElement
      div.parentElement.removeChild(div)
      tasks.splice(tasks.indexOf(div.innerText.replace('X', '')), 1)
      updateLocalStorage()
    }
  }
}

function clearTasks() {
  localStorage.clear()
  location.reload()
}

let list = document.querySelector('ul')
console.log(list)
list.addEventListener(
  'click',
  function (e) {
    if (e.target.tagName === 'LI') {
      e.target.classList.toggle('checked')
    }
  },
  false
)