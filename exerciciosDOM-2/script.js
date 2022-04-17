let userName = "null";

if(userName){
  const topBarElement = document.createElement("div");
  topBarElement.className = "top-bar";
  topBarElement.innerHTML = `<p>Olá, <b>${userName}</b>, seja bem vindo(a) ao nosso site!</p>`;

  //elementParent.insertBefore(newElement, elementReferência)
  const elementoPai = document.querySelector('.hero');
  elementoPai.insertBefore(topBarElement, elementoPai.firstElementChild);
}
