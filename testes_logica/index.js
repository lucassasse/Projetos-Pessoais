//Objetivo: lista de tarefas (tarefa 1 / tarefa 2 / tarefa 3 / etc).
//Cada tarefa tem 1 grau de dificuldade para ser realizado.
//Cada vez que uma tarefa é realizada com êxito, as próximas tarefas vão se tornando mais fáceis. - %
//Implementar sistema de dinheiro para comprar itens.
//Implementar sistema de energia.
//Implementar sistema de itens para recuperar energia.
//Implementar sistema de itens para ganhar força.

let personagem = {
    //nome: '',
    forca: 10,
    //energia: 100,
    //dinheiro: 100,
}

let desafios = [
  {
      dificuldade: 10,
      nome: 'Comprar leite',
    },
  {
      dificuldade: 50,
      nome: 'Comprar queijo',
    },
  {
      dificuldade: 250,
      nome: 'Comprar tomate',
    },
]

function Realizar(){
  let tarefaEscolhida = document.getElementById('tarefa').value;
  let dificuldade = desafios[tarefaEscolhida-1].dificuldade;

  if(personagem.forca >= dificuldade){
    personagem.forca += parseInt((Math.random() * 10).toFixed()); //Implementar: Quanto maior a dificuldade, mais força o personagem ganha. (Ideia: criar match.random *10. quando maior a dificuldade, mais vezes ele é sorteado - exemplo: numRandom *2 ou numRandom *3)
  } else{
    alert('Você não tem força suficiente para realizar esta tarefa.');
  }

  console.log(desafios);
  console.log(personagem.forca);
}


