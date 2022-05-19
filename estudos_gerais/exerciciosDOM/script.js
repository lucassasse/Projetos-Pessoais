/*
let userName = "Lucas Eduardo Sasse";

//document.querySelector('.top-bar p').textContent = `Olá, ${userName}, seja bem vindo(a) ao nosso site!`;

//let saudacao = document.querySelector('.top-bar p');
//saudacao.textContent = `Olá, ${userName}, seja bem vindo(a) ao nosso site!`;

let saudacao = document.querySelector('.top-bar p');
saudacao.innerHTML += `<b>${userName}</b>, seja bem vindo(a) ao nosso site!`;
*/

let userName = null;
let saudacao = document.querySelector('.top-bar p');

if(!userName){
  //saudacao.parentElement.style.display = 'none'; //.parentElement = Pai do elemento | .children = Filhos do elemento
  //saudacao.parentElement.remove();
  const elementRemove = saudacao.parentElement;
  elementRemove.parentElement.removeChild(elementRemove);
} else {
  saudacao.innerHTML += `<b>${userName}</b>, seja bem vindo(a) ao nosso site!`;
}
