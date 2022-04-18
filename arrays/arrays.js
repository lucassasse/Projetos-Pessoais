let arr = [1, 5, 10, "palavra", true];
let apenasNumerosMaioresQue6 = arr.some(function(el){
  return typeof el === 'number' && el > 6;
})
console.log(apenasNumerosMaioresQue6); //Retorno = true

//every() = Retorna um booleano, verifica se todos os elementos do array passado como parâmetro, atendem a uma condição.
//some() = Retorna um booleano, verifica se algum dos elementos do array passado como parâmetro, atendem a uma condição.
//forEach() = Executa uma função em cada elemento do array passado como parâmetro. Um 'for' elegante, para arrays.
//map() = Retorna um novo array, com os elementos do array passado como parâmetro, aplicados a uma função.
//filter() = Retorna um novo array, com os elementos do array passado como parâmetro, que atendem a uma condição. Se true, adiciona na array

let arr2 = [1, 5, 10, "palavra", true];
console.log(arr2.indexOf(5)); //Retorno = 1
console.log(arr2.indexOf(5555)); //Retorno = -1 (ou seja, false)
console.log(arr2.findIndex(function(el){
  return el > 6
})) //Retorno = 2

//indexOf() = Retorna o índice do primeiro elemento do array que atende a uma condição.
//lastIndexOf() = Retorna o índice do último elemento do array que atende a uma condição.
//includes() = Retorna um booleano, verifica se o array passado como parâmetro, contém um elemento que atende a uma condição. Verifica se existe ou não.
//findIndex() = Retorna o índice do primeiro elemento do array que atende a uma condição.

let arr3 = [1, 5, 10, "palavra", true];
let arr4 = [3, 7, 19, "texto", false];
console.log(arr3.join(" - ")); //Retorno = 1 - 5 - 10 - palavra - true

let arr5 = arr3.concat(arr4, 7, "string", [1, 2, 3]);
console.log(arr5); //Retorno = [1, 5, 10, "palavra", true, 3, 7, 19, "texto", false, 7, "string", 1, 2, 3]

let arr6 = [].concat(arr3);
console.log(arr6); //Retorno = [1, 5, 10, "palavra", true] - Cria uma cópia do array, sem alterar o array original.

//toString() = Retorna uma string, com os elementos do array passado como parâmetro.
//join() = Retorna uma string, com os elementos do array passado como parâmetro, separados por um separador.
//concat() = Retorna um novo array, com os elementos do array passado como parâmetro concatenados com os elementos do array passado como parâmetro.

let arr7 = [1, 5, 10, "palavra", true];
let arr8 = arr7.slice[1,3];
console.log(arr8); //Retorno = [5, 10]

//push() = Adiciona um ou mais elementos no final do array.
//unshift() = Adiciona um ou mais elementos no início do array.
//pop() = Remove o último elemento do array.
//shift() = Remove o primeiro elemento do array.
//splice() = Remove um ou mais elementos do array, a partir de um índice.
//slice() = Retorna um novo array, com os elementos do array passado como parâmetro, a partir de um índice.



//reverse() = Inverte a ordem dos elementos do array.
//reduce() = Retorna um novo valor, a partir dos elementos do array passado como parâmetro, aplicando uma função.