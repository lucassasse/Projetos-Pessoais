//blue = 0
//yellow = 1
//green = 2
//red = 3

//Fazer piscar a cor
//Quando clicar, verificar se a cor clicada é a cor certa
//Se array inteira correta - play dnv)

const blue = document.getElementById('blue')
const yellow = document.getElementById('yellow')
const green = document.getElementById('green')
const red = document.getElementById('red')
const pointsOutput = document.getElementById('points')

actualGame = []
actualGameClick = []
points = 0

function getColor(color) {
  if (color.id === 'blue') {
    actualGameClick.push('0')
  } else if (color.id === 'yellow') {
    actualGameClick.push('1')
  } else if (color.id === 'green') {
    actualGameClick.push('2')
  } else {
    actualGameClick.push('3')
  }
  console.log(actualGameClick)

  compareArray()
}

function play() {
  actualGame.push(randomColor())
  console.log(actualGame)
}

function randomColor() {
  return (Math.random() * (3 - 0) + 0).toFixed(0)
}

function compareArray() {
  if (actualGameClick.length !== actualGame.length) return false

  for (var i = 0, len = actualGame.length; i < len; i++) {
    if (actualGame[i] === actualGameClick[i]) {
    } else {
      fail()
    }
  }
  console.log('true')
  points++
  pointsOutput.innerHTML = points
  actualGameClick = []
}

function fail() {
  alert(`You lose - Total score: ${points}`)
  location.reload()
}
