let atv1 = document.getElementById('atv1')
let atv2 = document.getElementById('atv2')
let atv3 = document.getElementById('atv3')

let forca = document.getElementById('forca')
let vida = document.getElementById('vida')
let energia = document.getElementById('energia')
let dinheiro = document.getElementById('dinheiro')

var personagem = {
  //nome: prompt('Digite o nome do seu personagem: '),
  forca: 10,
  vida: 100,
  energia: 100,
  dinheiro: 0
}

let desafios = [
  {
    dificuldade: 10,
    nome: 'Roubar um Carro',
    energia: 5
  },
  {
    dificuldade: 50,
    nome: 'Roubar uma Loja',
    energia: 10
  },
  {
    dificuldade: 250,
    nome: 'Roubar uma Casa',
    energia: 20
  }
]

let loja = [
  {
    nome: 'Soco Inglês',
    valor: 10,
    forcaAdd: 2
  },
  {
    nome: 'Faca',
    valor: 25,
    forcaAdd: 10
  },
  {
    nome: 'Pistola',
    valor: 100,
    forcaAdd: 50
  }
]

let descanso = [
  {
    nome: 'Rua',
    valor: 0,
    risco: 50
  },
  {
    nome: 'Estábulo',
    valor: 5,
    risco: 25
  },
  {
    nome: 'Hotel',
    valor: 25,
    risco: 10
  }
]

function Realizar() {
  let tarefaEscolhida = document.getElementById('tarefa').value

  if (tarefaEscolhida == 0) {
    alert('Selecione uma tarefa!')
  } else if (personagem.energia < desafios[tarefaEscolhida - 1].energia) {
    alert('Você não tem energia suficiente!')
  } else {
    var dificuldade = desafios[tarefaEscolhida - 1].dificuldade
    if (calculoExito() == true) {
      personagem.forca += calculoRandom() * tarefaEscolhida
      personagem.dinheiro += calculoRandom() * tarefaEscolhida
    } else {
      personagem.forca -= calculoRandom() * tarefaEscolhida
      personagem.vida -= 10
      if (personagem.forca <= 9) {
        personagem.forca = 10
      }
    }
    personagem.energia -= desafios[tarefaEscolhida - 1].energia
    vidaReset()
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

function calculoRandom() {
  return parseInt((Math.random() * (10 - 5) + 5).toFixed())
}

function vidaReset() {
  if (personagem.vida <= 0) {
    alert('Você morreu!')
    location.reload()
  }
}

function comprar() {
  let lojaEscolhida = document.getElementById('loja').value
  if (lojaEscolhida == 0) {
    alert('Selecione um produto!')
  } else {
    if (personagem.dinheiro >= loja[lojaEscolhida - 1].valor) {
      personagem.forca += loja[lojaEscolhida - 1].forcaAdd
      personagem.dinheiro -= loja[lojaEscolhida - 1].valor
    } else {
      alert('Você não tem dinheiro suficiente!')
    }
  }
  exibir()
}

function descansar() {
  let descansoEscolhido = document.getElementById('descanso').value
  if (descansoEscolhido == 0) {
    alert('Selecione um local para descansar!')
  } else {
    if (personagem.dinheiro >= descanso[descansoEscolhido - 1].valor) {
      personagem.energia = 100
      personagem.dinheiro -= descanso[descansoEscolhido - 1].valor
    } else {
      alert('Você não tem dinheiro suficiente!')
    }
  }
  exibir()
}

function exibir() {
  atv1.innerHTML = `${desafios[0].nome} - Exito: ${
    (personagem.forca * 100) / 10
  }%`
  atv2.innerHTML = `${desafios[1].nome} - Exito: ${
    (personagem.forca * 100) / 50
  }%`
  atv3.innerHTML = `${desafios[2].nome} - Exito: ${
    (personagem.forca * 100) / 250
  }%`

  nome.innerHTML = `Nome: ${personagem.nome}`
  forca.innerHTML = `Força: ${personagem.forca}`
  vida.innerHTML = `Vida: ${personagem.vida}%`
  energia.innerHTML = `Energia: ${personagem.energia}%`
  dinheiro.innerHTML = `Dinheiro: R$ ${personagem.dinheiro}`
}
exibir()

//Falta fazer: Relação do risco vs. Perda de vida, dos descansos
