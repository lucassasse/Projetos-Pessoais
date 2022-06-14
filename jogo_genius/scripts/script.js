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
  actualGameClick = []
  actualGame.push(randomColor())
  piscarCor()
  console.log(actualGame)
}

function piscarCor() {}

function randomColor() {
  return (Math.random() * (3 - 0) + 0).toFixed(0)
}

function compareArray() {
  if (actualGameClick.length !== actualGame.length) return false

  for (var i = 0, len = actualGame.length; i < len; i++) {
    if (actualGame[i] === actualGameClick[i]) {
    } else {
      fail()
      return stop
    }
  }

  console.log('true')
  points++
  pointsOutput.innerHTML = points
  actualGameClick = []
  play()
}

function fail() {
  alert(`You lose - Total score: ${points}`)
  location.reload()
}
