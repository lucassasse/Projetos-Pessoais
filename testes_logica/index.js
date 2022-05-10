let atv1 = document.getElementById('atv1')
let atv2 = document.getElementById('atv2')
let atv3 = document.getElementById('atv3')

let forca = document.getElementById('forca')
let vida = document.getElementById('vida')
let energia = document.getElementById('energia')
let dinheiro = document.getElementById('dinheiro')

var personagem = {
  nome: prompt('Digite o nome do seu personagem: '),
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

let mercearia = [
  {
    nome: 'Pão seco',
    valor: 10,
    vidaAdd: 5
  },
  {
    nome: 'Bolinho',
    valor: 15,
    vidaAdd: 10
  },
  {
    nome: 'Baião de dois',
    vidaAdd: 25,
    valor: 25
  }
]

let loja = [
  {
    nome: 'Soco Inglês',
    forcaAdd: 2,
    valor: 10
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
    risco: 40
  },
  {
    nome: 'Estábulo',
    valor: 50,
    risco: 50
  },
  {
    nome: 'Hotel',
    valor: 150,
    risco: 0
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

function comprarDaLoja() {
  let produtoEscolhido = document.getElementById('loja').value
  if (produtoEscolhido == 0) {
    alert('Selecione um produto!')
  } else {
    if (personagem.dinheiro >= loja[produtoEscolhido - 1].valor) {
      personagem.forca += loja[produtoEscolhido - 1].forcaAdd
      personagem.dinheiro -= loja[produtoEscolhido - 1].valor
    } else {
      alert('Você não tem dinheiro suficiente!')
    }
  }
  exibir()
}

function comprarDaMercearia() {
  let produtoEscolhido = document.getElementById('mercearia').value
  if (produtoEscolhido == 0) {
    alert('Selecione um produto!')
  } else {
    if (personagem.dinheiro >= mercearia[produtoEscolhido - 1].valor) {
      personagem.vida += mercearia[produtoEscolhido - 1].vidaAdd
      personagem.dinheiro -= mercearia[produtoEscolhido - 1].valor
      if (personagem.vida > 100) {
        personagem.vida = 100
      }
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
      personagem.vida -= descanso[descansoEscolhido - 1].risco
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
