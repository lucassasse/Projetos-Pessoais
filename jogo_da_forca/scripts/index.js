const input_word_registration = document.querySelector('#word_registration')
const input_letter = document.querySelector('#letter')
const output_tip = document.querySelector('#tip')
const word_underline = document.querySelector('#word_underline')
const output_used_letters = document.querySelector('#used_letters')
const outputImg = document.getElementById('imagem')

let word = ''
let letter = ''
let letters_used = []
let underline_tip = []
let numErrors = 0

function save_word() {
  word = input_word_registration.value.toLowerCase()

  if (word == '' || word == ' ' || word.length < 2) {
    alert('Digite uma palavra válida!')
  } else {
    underline_tip = []
    letter_count()
  }

  input_word_registration.value = ''
  word_registration.disabled = true
  document.getElementById('buttonSave').disabled = true
}

function letter_send() {
  letter = input_letter.value.toLowerCase()

  if (word.length < 2) {
    alert('Primeiro, digite uma palavra válida!')
  } else if (letter == '' || letter == ' ') {
    alert('Digite uma letra!')
  } else {
    find_letter(letter)
    used_letters(letter)
    testError(letter)
    input_letter.value = ''
  }

  input_letter.value = []
  input_letter.focus()
}

function letter_count() {
  for (i = 0; i < word.length; i++) {
    underline_tip.push('_')
  }
  word_underline.innerHTML = underline_tip.join('')

  output_tip.innerHTML = `Dica: A palavra possui: ${word.length} caracteres`
}

function find_letter(letter) {
  let word_array = Array.from(word)
  let idx = word_array.indexOf(letter)
  let indices = []

  while (idx != -1) {
    indices.push(idx)
    idx = word_array.indexOf(letter, idx + 1)
  }

  att_underline_tip(indices, letter)
}

function att_underline_tip(ind, ltr) {
  for (i = 0; i < ind.length; i++) {
    underline_tip.splice(ind[i], 1, ltr)
  }
  word_underline.innerHTML = `<p id="word_underline">${underline_tip.join(
    ''
  )}</p>`
  check_win()
}

function used_letters(letter_add) {
  letters_used.push(letter_add)
  output_used_letters.innerHTML = `<p id="used_letters">${letters_used.join(
    ', '
  )}</p>`
}

function check_win() {
  if (underline_tip.indexOf('_') == -1) {
    alert(`Parabéns, você venceu!\n\A palavra era: ${word}`)
    finish()
  }
}

function testError(letter) {
  if (word.indexOf(letter) == -1) {
    numErrors++
    if (numErrors == 1) {
      outputImg.src = './imagens/img2.png'
    } else if (numErrors == 2) {
      outputImg.src = './imagens/img3.png'
    } else if (numErrors == 3) {
      outputImg.src = './imagens/img4.png'
    } else if (numErrors == 4) {
      outputImg.src = './imagens/img5.png'
    } else if (numErrors == 5) {
      outputImg.src = './imagens/img6.png'
    } else if (numErrors == 6) {
      outputImg.src = './imagens/img7.png'
      alert(`Lamento, você perdeu!\n\A palavra era: ${word}`)
      finish()
    }
  }
}

function finish() {
  input_letter.disabled = true
  document.getElementById('buttonLetter').disabled = true
}

function reset() {
  location.reload()
}
