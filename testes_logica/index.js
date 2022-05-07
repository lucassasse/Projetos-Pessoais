let atv1 = document.getElementById('atv1')
let atv2 = document.getElementById('atv2')
let atv3 = document.getElementById('atv3')
let forca = document.getElementById('forca')
let nomePersonagem = document.getElementById('nome')

var personagem = {
  nome: prompt('Digite o nome do seu personagem: '),
  forca: 10,
  energia: 100,
  dinheiro: 100
}

let desafios = [
  {
    dificuldade: 10,
    nome: 'Roubar uma Idosa'
  },
  {
    dificuldade: 50,
    nome: 'Roubar um Carro'
  },
  {
    dificuldade: 250,
    nome: 'Roubar uma Casa'
  }
]

function Realizar() {
  let tarefaEscolhida = document.getElementById('tarefa').value

  if (tarefaEscolhida == 0) {
    alert('Selecione uma tarefa!')
  } else {
    var dificuldade = desafios[tarefaEscolhida - 1].dificuldade

    if (calculoExito() == true) {
      personagem.forca += calculoForcaAdd() * tarefaEscolhida
    } else {
      personagem.forca -= calculoForcaAdd() * tarefaEscolhida
      if (personagem.forca <= 9) {
        personagem.forca = 10
      }
    }
    exibir()
  }

  function calculoExito() {
    let chanceExito = (personagem.forca * 100) / dificuldade
    let numRandom = parseInt((Math.random() * 100).toFixed())
    if (chanceExito >= numRandom) {
      return true
    } else {
      return false
    }
  }
}

function calculoForcaAdd() {
  return parseInt((Math.random() * (10 - 5) + 5).toFixed())
}

function exibir() {
  atv1.innerHTML = `Roubar uma Idosa - Exito: ${(personagem.forca * 100) / 10}%`
  atv2.innerHTML = `Roubar um Carro - Exito: ${(personagem.forca * 100) / 50}%`
  atv3.innerHTML = `Roubar uma Casa - Exito: ${(personagem.forca * 100) / 250}%`

  nome.innerHTML = `Nome: ${personagem.nome}`
  forca.innerHTML = 'Força: ' + personagem.forca
}
exibir()
