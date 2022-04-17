const txtEmail = document.getElementById("txtEmail")

function editEmail(){
  txtEmail.disabled = false;
  txtEmail.focus();
}

function disabledEmail(){
  txtEmail.disabled = true;
}