//Ao inves de clica em salvar e adicionar na lista HTML...
//Ao clicar em adicionar, salvar o .value em um array e depois usar o array pra adicionar na lista HTML.

//função do botão X = excluir de fato o item do array.

input = document.getElementById('input')
let listTask = ['kkkkkkkkkkkk', '11111111', '222 222 222 222']

// Start existing to-do list

function initListTasks() {
  for (i = 0, len = listTask.length; i < len; i++) {
    let li = document.createElement('li')
    let p = document.createElement('p')
    let text = document.createTextNode(listTask[i])

    li.appendChild(p)
    p.appendChild(text)

    document.getElementById('ulOutput').appendChild(li)
  }
}
initListTasks()

// Create a new list item when clicking on the "Salvar" button
function addTask() {
  if (input.value == '') {
    alert('Enter a task.')
    stop
  } else {
    listTask.unshift(input.value)
    listTasks()
  }

  input.value = ''
  input.focus()
}

function listTasks() {
  let li = document.createElement('li')
  let p = document.createElement('p')
  let text = document.createTextNode(listTask[0])

  li.appendChild(p)
  p.appendChild(text)

  document.getElementById('ulOutput').appendChild(li)

  let span = document.createElement('SPAN')
  let txt = document.createTextNode('X')
  span.className = 'close'
  span.appendChild(txt)
  li.appendChild(span)
}

/*
function addTask() {
  let li = document.createElement('li')
  let p = document.createElement('p')
  let inputValue = document.getElementById('input').value
  let text = document.createTextNode(inputValue)
  li.appendChild(p)
  p.appendChild(text)

  if (inputValue == '') {
    alert('Enter a task.')
  } else {
    document.getElementById('ulOutput').appendChild(li)

    listTask.unshift(inputValue)
    console.log(listTask)
    
  }
  document.getElementById('input').value = ''
  document.getElementById('input').focus()

  let span = document.createElement('SPAN')
  let txt = document.createTextNode('X')
  span.className = 'close'
  span.appendChild(txt)
  li.appendChild(span)

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement
      div.style.display = 'none'
    }
  }
}
*/

// Create a "close" button and append it to each list item
let myNodelist = document.getElementsByTagName('li')
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement('SPAN')
  var txt = document.createTextNode('X')
  span.className = 'close'
  span.appendChild(txt)
  myNodelist[i].appendChild(span)
}

// Click the edit button to edit the task

/**/

// Click on a close button to hide the current list item
let close = document.getElementsByClassName('close')
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    let div = this.parentElement
    div.style.display = 'none'
  }
}

// Add a "checked" symbol when clicking on a list item
let list = document.querySelector('ul')
list.addEventListener(
  'click',
  function (e) {
    if (e.target.tagName === 'P') {
      e.target.classList.toggle('checked')
    }
  },
  false
)
