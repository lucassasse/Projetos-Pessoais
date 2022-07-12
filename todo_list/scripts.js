// Create a new list item when clicking on the "Salvar" button
function addTask() {
  let li = document.createElement('li')
  let inputValue = document.getElementById('input').value
  let text = document.createTextNode(inputValue)
  li.appendChild(text)

  if (inputValue == '') {
    alert('Primeiro, digite uma tarefa.')
  } else {
    document.getElementById('ulOutput').appendChild(li)
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

// Create a "close" button and append it to each list item
let myNodelist = document.getElementsByTagName('li')
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement('SPAN')
  var txt = document.createTextNode('X')
  span.className = 'close'
  span.appendChild(txt)
  myNodelist[i].appendChild(span)
}

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
