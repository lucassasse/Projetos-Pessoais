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

  compareArray()
}

function play() {
  points = 0
  pointsOutput.innerHTML = `Score: ${points}`
  actualGame = []
  continueGame()
}

function continueGame() {
  actualGameClick = []
  actualGame.push(randomColor())
  setTimeout(activeColor, 1000)
}

function activeColor() {
  for (var i = 0, len = actualGame.length; i < len; i++) {
    delay(i)
  }

  function delay(i) {
    setTimeout(function () {
      if (actualGame[i] === '0') {
        blue.classList.add(`blueActive`)
        setTimeout(desactiveColor, 300)
      } else if (actualGame[i] === '1') {
        yellow.classList.add(`yellowActive`)
        setTimeout(desactiveColor, 300)
      } else if (actualGame[i] === '2') {
        green.classList.add(`greenActive`)
        setTimeout(desactiveColor, 300)
      } else {
        red.classList.add(`redActive`)
        setTimeout(desactiveColor, 300)
      }
    }, 1000 * i)
  }
}

function desactiveColor() {
  blue.classList.remove(`blueActive`)
  yellow.classList.remove(`yellowActive`)
  green.classList.remove(`greenActive`)
  red.classList.remove(`redActive`)
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
      return stop
    }
  }

  points++
  pointsOutput.innerHTML = `Score: ${points}`
  actualGameClick = []
  continueGame()
}

function fail() {
  alert(`You lose - Total score: ${points}`)
  location.reload()
}
