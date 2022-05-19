//Declaração de Arrays

arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr1);

let arr2 = new Array();
arr2 = [1, 2, 3, 4, 5];
console.log(arr2)

//Declaração de Objetos

usuarios1 = {
    nome: "João",
    idade: 20,
}
console.log(usuarios1);

usuarios1.nome = "Alfred";
console.log(usuarios1.nome);

usuarios2 = new Object();
usuarios2.nome = "Maria";
usuarios2.idade = 25;
console.log(usuarios2);

usuarios2["nome"] = "Pedro";
console.log(usuarios2.nome);

//Declaração de Arrays de Objetos

arrObj = [{
        nome: "José",
        idade: 40
},{
        nome: "Frida",
        idade: 25
}];

console.log(arrObj);
console.log(arrObj[0]);
console.log(arrObj[1].nome);

//Declaração de Funções

let infoTela = document.querySelector("#infoTela");
let arrUsers = new Array

function cadastro() {
        let name = document.querySelector("#name").value;
        let age = document.querySelector("#age").value;

        arrUsers.push({name, age});

        console.log(arrUsers);

        apresentar();
}

//Criar um loop para aoresentar todos os usuários cadastrados, que se atualiza a cada novo cadastro;
/*function apresentar(){

        for(let i = 0; i < arrUsers.length; i++){
                infoTela.innerHTML += `<p>${arrUsers[i].name} tem ${arrUsers[i].age} anos</p>`;
        }
}*/