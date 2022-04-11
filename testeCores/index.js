let color = document.querySelector("#color")
let information = document.querySelector("#information")

function changeColor() {
    let colorValue = color.value
    information.innerHTML = `The 'hex' code of this color is ${colorValue}`
}

console.log(color)