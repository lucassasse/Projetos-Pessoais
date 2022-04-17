function calculaIMC() {
  if (arguments.length < 2 || arguments.length > 3 || typeof arguments[0] !== "number" || typeof arguments[1] !== "number") {
    throw Error("Digite seu peso e sua altura, nesta ordem.");
  }

  imc = (arguments[0] / (arguments[1] * arguments[1]));

  if(imc < 16.9) {
    return "Magreza grave";
  } else if (imc < 18.5) {
    return "Magreza moderada";
  } else if (imc < 25) {
    return "Saudável";
  } else if (imc < 30) {
    return "Sobrepeso";
  } else if (imc < 35) {
    return "Obesidade grau I";
  } else if (imc < 40) {
    return "Obesidade grau II";
  } else {
    return "Obesidade grau III";
  }

}

//console.log(calculaIMC())
//console.log(calculaIMC(80))
console.log(calculaIMC(80, 1.80));
//console.log(calculaIMC(80, 1.80, "a"));
