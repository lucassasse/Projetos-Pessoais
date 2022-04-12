const output = document.querySelector('#output');

function mostrarResultado(){
  let numero = document.querySelector('#numero').value;
  mensagem = "";
  for(var i = 0; i <= 10; i++){
     mensagem += `${numero} x ${i} = ${numero * i} <br>`;
  }
  output.innerHTML = mensagem;
  limparCampo();
}

function limparCampo(){
  document.querySelector('#numero').value = "";
}

function limparResultado(){
  output.innerHTML = "";
}