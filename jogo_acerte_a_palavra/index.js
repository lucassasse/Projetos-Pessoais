const inputLetra0 = document.querySelector('#inputLetra0')
const inputLetra1 = document.querySelector('#inputLetra1')
const inputLetra2 = document.querySelector('#inputLetra2')
const inputLetra3 = document.querySelector('#inputLetra3')
const inputLetra4 = document.querySelector('#inputLetra4')

const listaPalavras = ['afeto', 'plena', 'sutil', 'sonho', 'lapso', 'amigo']

function sortearPalavra() {
  numeroSorteado = Math.floor(Math.random() * listaPalavras.length)
  palavra = listaPalavras[numeroSorteado]
  return palavra.split('')
}
const arrPalavraSorteada = sortearPalavra()
console.log(arrPalavraSorteada)

inputLetra0.addEventListener('keyup', function (e) {
  if (e.target.value.length === 1) {
    inputLetra1.focus()
  }
})

inputLetra1.addEventListener('keyup', function (e) {
  if (e.target.value.length === 1) {
    inputLetra2.focus()
  }
})

inputLetra2.addEventListener('keyup', function (e) {
  if (e.target.value.length === 1) {
    inputLetra3.focus()
  }
})

inputLetra3.addEventListener('keyup', function (e) {
  if (e.target.value.length === 1) {
    inputLetra4.focus()
  }
})

inputLetra4.addEventListener('keyup', function (e) {
  if (e.target.value.length === 1) {
    verificar()
  }
})

function verificar() {
  if (inputLetra0.value === arrPalavraSorteada[0]) {
    inputLetra0.classList.add('green')
  }
  if (inputLetra1.value === arrPalavraSorteada[1]) {
    inputLetra1.classList.add('green')
  }
  if (inputLetra2.value === arrPalavraSorteada[2]) {
    inputLetra2.classList.add('green')
  }
  if (inputLetra3.value === arrPalavraSorteada[3]) {
    inputLetra3.classList.add('green')
  }
  if (inputLetra4.value === arrPalavraSorteada[4]) {
    inputLetra4.classList.add('green')
  }

  if (inputLetra0.value !== arrPalavraSorteada[0]) {
    inputLetra0.classList.add('red')
  }
  if (inputLetra1.value !== arrPalavraSorteada[1]) {
    inputLetra1.classList.add('red')
  }
  if (inputLetra2.value !== arrPalavraSorteada[2]) {
    inputLetra2.classList.add('red')
  }
  if (inputLetra3.value !== arrPalavraSorteada[3]) {
    inputLetra3.classList.add('red')
  }
  if (inputLetra4.value !== arrPalavraSorteada[4]) {
    inputLetra4.classList.add('red')
  }
}
