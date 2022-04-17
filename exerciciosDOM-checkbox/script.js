
function cadastro(){
  const buttonCadastro = document.querySelector("#buttonCadastro");
  const checkbox = document.querySelector("#contrato");
  // if(checkbox.checked){
  //   buttonCadastro.disabled = false;
  // } else {
  //   buttonCadastro.disabled = true;
  // }

  buttonCadastro.disabled = !checkbox.checked;
}