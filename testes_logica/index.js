//Objetivo: lista de tarefas (tarefa 1 / tarefa 2 / tarefa 3 / etc).
//Cada tarefa tem 1 grau de dificuldade para ser realizado.
//Implementar: Quanto maior a dificuldade, mais força o personagem ganha. (Ideia: criar match.random *10. quando maior a dificuldade, mais vezes ele é sorteado - exemplo: numRandom *2 ou numRandom *3)

//Cada vez que uma tarefa é realizada com êxito, as próximas tarefas vão se tornando mais fáceis. - %
//Implementar sistema de dinheiro para comprar itens.
//Implementar sistema de energia.
//Implementar sistema de itens para recuperar energia.
//Implementar sistema de itens para ganhar força.

//Mostrar na tela a % de êxito.

let personagem = {
  //nome: '',
  forca: 10
  //energia: 100,
  //dinheiro: 100,
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
  }

  function calculoForcaAdd() {
    return parseInt((Math.random() * (10 - 5) + 5).toFixed())
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

  console.log(
    `% de êxito: \n Tarefa 1: ${(personagem.forca * 100) / 10}%, \n Tarefa 2: ${
      (personagem.forca * 100) / 50
    }%, \n Tarefa 3: ${(personagem.forca * 100) / 250}%`
  )
  console.log(`Força = ${personagem.forca}`)
}
