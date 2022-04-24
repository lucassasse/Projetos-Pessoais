let inputCNPJ = document.getElementById('inputCNPJ');
let outputNome = document.getElementById('outputNome');
let outputStatus = document.getElementById('outputStatus');

inputCNPJ.addEventListener('keypress', function(e) {
  if (e.key === 'Enter'){
    consultarCNPJ();
  }
});

function consultarCNPJ(){
  let url = `https://receitaws.com.br/v1/cnpj/${inputCNPJ.value}`;

  fetch(url)
    .then(response => response.json())
    .then(data => atribuirCampos(data))
    .catch(() => {alert('Erro ao consultar CNPJ')});

    inputCNPJ.value = '';
    inputCNPJ.focus();
}

function atribuirCampos(data){
  outputNome.value = data.nome;
  outputStatus.value = data.status;
  console.log(url)
}