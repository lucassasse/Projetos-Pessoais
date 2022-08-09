function clearList() {
  localStorage.clear()
  location.reload()
}

let tasks = []
const inputTxt = document.getElementById('inputTxt')
const ulList = document.getElementById('ulList')

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
  console.log(tasks)

  localStorage.setItem('list', JSON.stringify(tasks))
}

