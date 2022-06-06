input_word_registration = document.querySelector('#word_registration')
input_letter = document.querySelector('#letter')
output_tip = document.querySelector('#tip')
word_underline = document.querySelector('#word_underline')
output_used_letters = document.querySelector('#used_letters')

let word = ''
let letter = ''
let letters_used = []
let underline_tip = []

function save_word() {
  word = input_word_registration.value

  if (word == '' || word == ' ' || word.length < 2) {
    alert('Digite uma palavra válida!')
  } else {
    underline_tip = []
    letter_count()
  }

  input_word_registration.value = ''
}

function letter_send() {
  letter = input_letter.value

  if (word.length < 2) {
    alert('Primeiro, digite uma palavra válida!')
  } else if (letter == '' || letter == ' ') {
    alert('Digite uma letra!')
  } else {
    find_letter(letter)
    used_letters(letter)
    input_letter.value = ''
  }

  input_letter.value = []
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
    alert('Parabéns, você venceu!')
    //location.reload()
  }
}
